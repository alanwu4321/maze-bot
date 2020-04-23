const express = require('express')
var Bull = require('bull')
const { setQueues, UI } = require('bull-board')
const scraper = require('./utils/scraper')
var https = require('https')

// const script = require('./iframe-script.html')

const app = express()
const Queue = new Bull('maze-queue')
setQueues([Queue])
const kafka = require('kafka-node')
const Producer = kafka.Producer
const client = new kafka.KafkaClient()
const webpush = require('web-push');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');
const fs = require('fs');

// 3 = requires use of keyed messages. when you produce a keyed message, the value passed for the key field then is used to determine which partition to put it in, so every message with same key ends up in same partition
const producer = new Producer(client, { partitionerType: 3 })
producer.on('ready', function () {
  console.log('Producer is ready')
})

const io = require('socket.io')()
io.listen(8080, function () {
  console.log('listening on *:8080')
})
io.on('connection', function (socket) {
  console.log('connected')
  socket.on('message', function (msg) {
    console.log('message: ' + msg)
  })
})
// app.use(express.static(path.join(__dirname, "client")));

// app.use(bodyParser.json());


// // Prints 2 URL Safe Base64 Encoded Strings
// const publicKey = 'BH_3OqypatV4R8dmVVcSTVdUNZONH_seCuiOld6s1kDlr2BxoNC81s1tsBTaF1hobMvi4_NnYzUmsCHUqEqnil0' 
// const privateKey = '0k0jHaal6PAAUdmHRobalkwFj_HZwpNfPv1sPU6to70'

// webpush.setVapidDetails(
//   "mailto:test@test.com",
//   publicKey,
//   privateKey
// );

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

Queue.process(async (job) => {
  console.log('processing', job.data.store, job.id)
  const keywords = job.data.keywords
  return scraper.handleJobs(
    job.data.store,
    keywords,
    job.data.isUpdate,
    job,
    producer,
    //echo back request
    job.data.echo,
  )
})

Queue.on('waiting', (job, result) => {
  console.log(job.id, 'is waiting')
  // console.log(result);
}).on('active', (job, result) => {
  console.log(job.data.store, 'is active')
  // console.log(result);
}).on('waiting', (job, result) => {
  console.log(job, 'is waiting')
}).on('completed', (job, result) => {
  console.log(job.data.store, 'is done')
  Queue.clean(20000)
}).on('failed', (job, err) => {
  console.log(job.data.store, 'failed')
  console.log(err)
}).on('cleaned', (job) => {
  console.log(job.id, 'is cleaned')
}).on('progress', function (job, progress) {
  console.log(job.data.store, 'has new progress', progress)
  // A job's progress was updated!
})

let whitelist = ['http://localhost:3001']

app.use(cors());
app.use('/ux', express.static(path.join(__dirname + '/utils/artifact/' + 'uagHs')));

app.use('/admin/queues', UI)



app.get('/iframe', async (req, res) => {
  // var id = "NihkW"
  let url = req.query.q
  var id = await scraper.scrapeStaples(url)
  //   const content = " \
  //   \
  //   <style> \
  //   .hova-price{border:solid .5px #ece051;background-color:#fff8a6}.hova{border:solid .5px #997bd8;background-color:#e5dff3}:root{--balloon-color:rgba(16, 16, 16, 0.95);--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{opacity:0;pointer-events:none;transition:all .1s ease-out .1s;text-indent:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:var(--balloon-font-size);background:var(--balloon-color);border-radius:2px;color:#fff;content:attr(aria-label);padding:.5em 1em;position:absolute;white-space:nowrap;z-index:2147483647}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top-color:var(--balloon-color);opacity:0;pointer-events:none;transition:all .1s ease-out .1s;content:'';position:absolute;z-index:2147483647}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,[aria-label][data-balloon-pos][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-visible]:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos].font-awesome:after{font-family:FontAwesome,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif}[aria-label][data-balloon-pos][data-balloon-break]:after{white-space:pre}[aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after{white-space:pre-line;word-break:break-word}[aria-label][data-balloon-pos][data-balloon-blunt]:after,[aria-label][data-balloon-pos][data-balloon-blunt]:before{transition:none}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{bottom:100%;left:50%;margin-bottom:10px;transform:translate(-50%,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:before{bottom:100%;left:50%;transform:translate(-50%,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:after{transform:translate(-50%,0)}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:before{transform:translate(-50%,0)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:after{bottom:100%;left:0;margin-bottom:10px;transform:translate(0,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:before{bottom:100%;left:5px;transform:translate(0,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:after{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:before{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:after{bottom:100%;right:0;margin-bottom:10px;transform:translate(0,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:before{bottom:100%;right:5px;transform:translate(0,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:after{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:before{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=down]:after{left:50%;margin-top:10px;top:100%;transform:translate(-50%,calc(var(--balloon-move) * -1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:before{width:0;height:0;border:5px solid transparent;border-bottom-color:var(--balloon-color);left:50%;top:100%;transform:translate(-50%,calc(var(--balloon-move) * -1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:after{transform:translate(-50%,0)}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:before{transform:translate(-50%,0)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:after{left:0;margin-top:10px;top:100%;transform:translate(0,calc(var(--balloon-move) * -1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:before{width:0;height:0;border:5px solid transparent;border-bottom-color:var(--balloon-color);left:5px;top:100%;transform:translate(0,calc(var(--balloon-move) * -1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:after{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:before{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:after{right:0;margin-top:10px;top:100%;transform:translate(0,calc(var(--balloon-move) * -1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:before{width:0;height:0;border:5px solid transparent;border-bottom-color:var(--balloon-color);right:5px;top:100%;transform:translate(0,calc(var(--balloon-move) * -1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:after{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:before{transform:translate(0,0)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after{margin-right:10px;right:100%;top:50%;transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:before{width:0;height:0;border:5px solid transparent;border-left-color:var(--balloon-color);right:100%;top:50%;transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:after{transform:translate(0,-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:before{transform:translate(0,-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after{left:100%;margin-left:10px;top:50%;transform:translate(calc(var(--balloon-move) * -1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:before{width:0;height:0;border:5px solid transparent;border-right-color:var(--balloon-color);left:100%;top:50%;transform:translate(calc(var(--balloon-move) * -1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:after{transform:translate(0,-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:before{transform:translate(0,-50%)}[aria-label][data-balloon-pos][data-balloon-length=small]:after{white-space:normal;width:80px}[aria-label][data-balloon-pos][data-balloon-length=medium]:after{white-space:normal;width:150px}[aria-label][data-balloon-pos][data-balloon-length=large]:after{white-space:normal;width:260px}[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:380px}@media screen and (max-width:768px){[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:90vw}}[aria-label][data-balloon-pos][data-balloon-length=fit]:after{white-space:normal;width:100%} \
  // </style> \
  // <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script> \
  // <script> \
  // $(function(){  \
  // let t=!1,a=null;$(document).children().on('mouseover',function(a){t||(parent.postMessage({source:'hover',payload:{target:a.target.innerHTML}},'http://localhost:3001'),e(),o(a))});let e=()=>{$('.hova').removeClass('hova'),$('[aria-label]').each(function(t){$(this).removeClass('hova').removeAttr('data-balloon-pos').removeAttr('aria-label')})},o=t=>{$(t.target).addClass('hova'),$(t.target).attr('data-balloon-pos','up'),$(t.target).attr('aria-label',t.target.localName + '.' + t.target.className.replace('hova-price','').replace('hova',''))};$(document).children().on('click',function(r){if(t=!0,r.target==a)return t=!1,null;a=r.target,parent.postMessage({source:'click',payload:{target:a.innerHTML}},'http://localhost:3001'),e(this),o(r)}); \
  // document.body.innerText.match(/[A-Z]*\\s*\\$\\s*\\d+(?:(\\.|\\,)\\d+)*/g).forEach(l=>{let price = l.replace(/\\r?\\n|\\r/g,'').replace(/\\s/,'') let a=$('*:contains(' + price + ')');$(a[a.length-1]).addClass('hova-price')}); \
  // }); \
  // </script> \
  // "



  // [A-Z]*\s*\$\s?\d+(?:(\.|\,)\d+)?
  // /\$\s?\d+(?:(\.|\,)\d+)?/g
  // fs.appendFile(path.join(__dirname + '/utils/artifact/' + id + '/index.html'), script.stuff, (err) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   //done!
  // })

  const { exec } = require('child_process');
  exec('cat scrapper_service/utils/iframe-script.html >> scrapper_service/utils/artifact/' + id + '/index.html', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
  app.use('/ux/' + id, express.static(path.join(__dirname + '/utils/artifact/' + id)));
  res.json('/ux/' + id)
})


app.get('/ui', async (req, res) => {
  // var id = await scraper.scrapeStaples("macbook")
  res.sendFile(path.join(__dirname + '/utils/artifact/HoNrH/index.html'));
})

app.get('/kafka', (req, res) => {
  const stores = req.query.stores != null ? req.query.stores.split(',') : ['amazon', 'staples', 'walmart', 'bestbuy']
  const keywords = req.query.keywords.split(',')
  item = 0
  jobs = []
  stores.forEach(store => {
    console.log('queing stores ', store)
    Queue.add({
      store: store,
      keywords: keywords,
      echo: req.query.echo,
    }).then(job => {
      item += 1
      jobs.push({ store: store, id: job.id, echo: req.query.echo })
      if (item == stores.length) {
        const update = req.query.update == "true" ? true : false
        res.status(200).json({
          res: `succesfully queued ${stores.length} stores and ${keywords.length} items`,
          jobs: jobs,
          //null is set to no update
          isUpdate: update,
        })
      }
    })
  })
})

app.get('/test', (req, res) => {
  // io.emit("FromAPI", { message: "", store: "bestbuy" })
  res.status(200).send("hi")
})

app.get('/api', (req, res) => {
  const stores = req.query.stores != null ? req.query.stores.split(',') : ['amazon', 'staples', 'walmart', 'bestbuy']
  const keywords = req.query.keywords.split(',')
  promises = []
  stores.forEach(store => {
    console.log('Starting to scrape store ' + store)
    const update = req.query.update == "true" ? true : false
    promises.push(new Promise((resolve, reject) => {
      scraper
        .handleJobs(store, keywords, update)
        .then(data => {
          console.log('Finsihed scraping store ' + store)
          console.log(data)
          resolve({ status: 'success', [store]: data })
        })
        .catch(err => {
          console.log(err)
          resolve({ status: 'error', [store]: err })
        })
    }))
  })

  Promise.all(promises)
    .then(data => {
      res.status(200)
        .send(
          {
            length: data.length,
            stores: stores,
            keywords: keywords,
            response: data
          }
        )
    })
    .catch(err => res.status(500).send({ error: err }))
})

https.createServer({
  key: fs.readFileSync('/Users/alwu/localhost+2-key.pem'),
  cert: fs.readFileSync('/Users/alwu/localhost+2.pem')
}, app).listen(process.env.PORT || 3000)

// app.listen(process.env.PORT || 3000)

// var http = require('http').createServer(app);

// Consumer = kafka.Consumer,
//   client = new kafka.KafkaClient(),
//   consumer = new Consumer(client, [{ topic: "test2", partition: 0 }], {
//     autoCommit: false
//   });

// consumer.on("message", function (message) {
//   console.log(JSON.parse(message.value));
//   // console.log(JSON.parse(message));

//   /** { topic: 'cat', value: 'I have 385 cats', offset: 412, partition: 0, highWaterOffset: 413, key: null } */

// });

// scraper
//   //     .scrapeYoutube()
//   //     .then(data => {
//   //       resolve(data)
//   //     })
//   //     .catch(err => reject('YouTube scrape failed'))
