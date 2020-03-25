const puppeteer = require('puppeteer')
const axios = require('axios')
const redis = require('redis');
const client = redis.createClient();
// Print redis errors to the console
client.on('error', (err) => {
  console.log("Error " + err);
}).on("connect", function(error) {
  console.log("Redis is connected");
})

const kafkaWork = (producer, job, keyword, data) => {
  payloads = [
    { topic: 'test4', key: job.data.store, messages: JSON.stringify({ store: job.data.store, keyword: keyword, data: JSON.parse(data) }) }
    // {topic: "progress", key: job.data.store, messages: JSON.stringify({store: job.data.store, keyword:keyword, data: progress})},
  ]
  producer.send(payloads, function (err, data) {
    console.log('streaming data', { store: job.data.store, keyword: keyword })
  })
  producer.on('error', function (err) {
    console.log(err)
  })
}

const handleJobs = async (store, keywords, isUpdate, job = null, producer = null) => {
  return new Promise(function (resolve, reject) {
    const res = []
    let items = 0
    keywords.forEach((keyword) => {
      items += 1
      keyword = encodeURIComponent(keyword)
      client.get(`${store}:${keyword}`, (err, data) => {
        //if update is request or there is no data
        if(isUpdate || !data) {
          console.log("retrieving from web")
          handlers[store](keyword).then(
            data => {
              res.push({ [keyword]: data })
              if (job) kafkaWork(producer, job, keyword, data)
              client.set(`${store}:${keyword}`, JSON.stringify(data), function(err) {
                if (err != null) console.error(err);
              })
              progress = (items / keywords.length) * 100
              if (items == keywords.length) resolve(res)
            }
          ).catch(err => {
            reject(err)
          })
        }
        else {
          console.log("retrieving from cache")
          res.push({ [keyword]: JSON.parse(data) })
          if (job) kafkaWork(producer, job, keyword, data)
          progress = (items / keywords.length) * 100
          if (items == keywords.length) resolve(res)
        }
      })
    })
  })
}

const scrapeBestBuy = (keyword) => {
  return new Promise(function (resolve, reject) {
    const prod = {
      name: null,
      url: null,
      uuid: null,
      salePrice: null,
      regularPrice: null
    }
    axios.get(`https://api.bestbuy.com/v1/products((search=${keyword}))?apiKey=tda21Z9pyCFomCJM211gkCrY&sort=bestSellingRank.dsc&show=modelNumber,name,salePrice,regularPrice&pageSize=100&format=json`)
      .then(response => {
        if (response.data.products.length > 0) {
          resolve(response.data.products[0])
        }
        resolve(prod)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const scrapeAmazon = async (keyword) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--window-size=1000,1000',
      '--no-sandbox', '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
  await page.goto(`https://www.amazon.ca/s?k=${keyword}`)
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    const products = Array.from(
      document.querySelectorAll(
        '.s-include-content-margin.s-border-bottom'
      )
    ).map(product => {
      const prod = {
        name: null,
        url: null,
        uuid: null,
        salePrice: null,
        regularPrice: null
      }
      prod.name = product.querySelector('span.a-size-medium.a-color-base.a-text-normal').textContent
      const url = product.querySelector('.a-link-normal .a-text-normal')
      if (url != null) {
        parent = url.parentNode
        if (parent != null) {
          prod.url = 'https://www.amazon.ca' + parent.getAttribute('href')
          if (prod.url.includes('/dp/')) {
            prod.uuid = prod.url.split('/')[5]
          } else if (prod.url.includes('dp%2F')) {
            prod.uuid = prod.url.split('dp%2F')[1].split('%2F')[0]
          }
        }
      }
      const prices = product.querySelectorAll('.a-offscreen')
      if (prices.length > 0) {
        prod.salePrice = numberify(prices[0].textContent)
        prod.regularPrice = prod.salePrice
        if (prices.length > 1) {
          prod.regularPrice = numberify(prices[1].textContent)
        }
      }
      return prod
    }).filter(product => {
      return product.name != null && (product.salePrice != null || product.regularPrice != null)
    })
    return products
  })
  await browser.close()
  return scrapedData
}

const scrapeStaples = async (keyword) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--window-size=1000,1000',
      '--no-sandbox', '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
  await page.goto(
    `https://www.staples.ca/search?query=${keyword}`
  )

  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    const products = Array.from(document.querySelectorAll('.ais-hits--item'))
      .map(product => {
        const prod = {
          name: null,
          url: null,
          uuid: null,
          salePrice: null,
          regularPrice: null
        }
        title = product.querySelector('a.product-thumbnail__title.product-link')
        if (title != null) {
          prod.name = title.textContent
          prod.url = 'https://www.staples.ca' + title.getAttribute('href')
        }
        price = product.querySelector('.money.pre-money')
        if (price != null) {
          prod.salePrice = numberify(price.textContent)
          prod.uuid = price.getAttribute('data-product-id')
        }
        return prod
      }).filter(product => {
        return product.name != null && (product.salePrice != null || product.regularPrice != null)
      })
    return products[0]
  })
  await browser.close()
  return scrapedData
}

const scrapeWalmart = async (keyword) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--window-size=1000,1000',
      '--no-sandbox', '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
  await page.goto(
    `https://www.walmart.ca/search/${keyword}`
  )
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    const products = Array.from(document.querySelectorAll('.product-link'))
      .map(product => {
        const prod = {
          name: null,
          url: null,
          uuid: null,
          salePrice: null,
          regularPrice: null
        }
        prod.url = 'https://www.walmart.ca' + product.getAttribute('href')
        uuid = prod.url.split('/')
        if (uuid.length > 0) {
          prod.uuid = uuid[uuid.length - 1]
        }
        title = product.querySelector('.thumb-header')
        if (title != null) {
          prod.name = title.textContent
        }

        price = product.querySelector('span.product-price-analytics')
        if (price != null) {
          prod.salePrice = numberify(price.getAttribute('data-analytics-value'))
          if (prod.salePrice == 0) {
            prod.salePrice = -1
          }
        } else {
          curPrice = product.querySelector('.price-current')
          if (curPrice != null) {
            prod.salePrice = numberify(curPrice.textContent)
          }
        }
        price_was = product.querySelector('.price-was')
        if (price_was != null) {
          prod.regularPrice = numberify(price_was.textContent)
          if (prod.regularPrice == 0) {
            prod.regularPrice = null
          }
        }
        return prod
      }).filter(product => {
        return product.name != null && (product.salePrice != null || product.regularPrice != null)
      })
    return products[0]
  })
  await browser.close()
  return scrapedData
}

const handlers = {
  amazon: scrapeAmazon,
  staples: scrapeStaples,
  walmart: scrapeWalmart,
  bestbuy: scrapeBestBuy
}

module.exports.handleJobs = handleJobs
// module.exports.scrapeAmazon = scrapeAmazon
// module.exports.scrapeStaples = scrapeStaples
// module.exports.scrapeWalmart = scrapeWalmart
// module.exports.scrapeBestBuy = scrapeBestBuy
