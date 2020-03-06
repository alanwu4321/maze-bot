const express = require('express')

const scraper = require('./utils/scraper')
const app = express()
// app.set('view engine', 'pug')
const handlers = {"amazon": scraper.scrapeAmazon, "staples": scraper.scrapeStaples}

app.get('/', (req, res) => {
  console.log(req.query)
  stores = req.query["stores"].split(",")
  promises = []
  stores.forEach(store => {
    console.log("Starting to scrape store " + store)
    promises.push(new Promise((resolve, reject) => {
      scraper
        .handleStore(handlers[store], req.query)
        .then(data => {
          console.log("Finsihed scraping store " + store)
          console.log(data)
          resolve({[store]:data})
        })
        .catch(err => {
          reject(`${store} scrape failed: ` +  err)
        })
    }))
  });

  Promise.all(promises)
    .then(data => {
      res.status(200).send({res: data})
    })
    .catch(err => res.status(500).send({error:err}))
})

app.listen(process.env.PORT || 3000)


// scraper
//   //     .scrapeYoutube()
//   //     .then(data => {
//   //       resolve(data)
//   //     })
//   //     .catch(err => reject('YouTube scrape failed'))