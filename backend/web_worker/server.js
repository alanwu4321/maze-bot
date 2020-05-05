const express = require('express')
var Bull = require('bull')
const { setQueues, UI } = require('bull-board')
const scraper = require('./utils/scraper')
var https = require('https')
var http = require('http')
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
})

let whitelist = ['http://localhost:3001']
app.use(cors());
app.use('/ux', express.static(path.join(__dirname + '/utils/artifact/' + '2iOla')));
app.use('/admin/queues', UI)

app.get('/iframe', async (req, res) => {
  // var id = "NihkW"
  let url = req.query.q
  var id = await scraper.scrapeStaples("http://dgs2.fanswoo.com/catalog")
  app.use('/ux/' + id, express.static(path.join(__dirname + '/utils/artifact/' + id)));
  res.json('/ux/' + id)
})


app.get('/ui', async (req, res) => {
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

http.createServer({
  // key: fs.readFileSync('/Users/alwu/localhost+2-key.pem'),
  // cert: fs.readFileSync('/Users/alwu/localhost+2.pem')
}, app).listen(process.env.PORT || 3000)
