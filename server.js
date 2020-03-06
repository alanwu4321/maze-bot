const express = require('express')

const scraper = require('./utils/scraper')
const app = express()
// app.set('view engine', 'pug')
const handlers = {
  "amazon": scraper.scrapeAmazon,
  "staples": scraper.scrapeStaples,
  "walmart": scraper.scrapeWalmart,
  "bestbuy": scraper.scrapeBestBuy,
}

app.get('/', (req, res) => {
  console.log(req.query)
  let stores = []
  if(req.query['stores'] != null){
    stores = req.query.stores.split(",")
  }else{
    stores = ["amazon", "staples","walmart", "bestbuy"]
  }
  let keywords = req.query.keywords.split(",")
  promises = []
  stores.forEach(store => {
    console.log("Starting to scrape store " + store)
    promises.push(new Promise((resolve, reject) => {
      scraper
        .handleStore(handlers[store], keywords)
        .then(data => {
          console.log("Finsihed scraping store " + store)
          console.log(data)
          resolve({ status: "success", [store]: data })
        })
        .catch(err => {
          console.log(err)
          resolve({ status: "error", [store]: err })
        })
    }))
  });

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
  // .catch(err => res.status(500).send({error:err}))
})

app.listen(process.env.PORT || 3000)


// scraper
//   //     .scrapeYoutube()
//   //     .then(data => {
//   //       resolve(data)
//   //     })
//   //     .catch(err => reject('YouTube scrape failed'))