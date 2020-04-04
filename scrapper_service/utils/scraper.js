const puppeteer = require('puppeteer')
const axios = require('axios')
const redis = require('redis');
const client = redis.createClient();
// Print redis errors to the console
client.on('error', (err) => {
  console.log("Error " + err);
}).on("connect", function (error) {
  console.log("Redis is connected");
})

const kafkaWork = (producer, job, keyword, data, echo=null) => {
  payloads = [
    { topic: 'test4', key: job.data.store, messages: JSON.stringify({ store: job.data.store, keyword: keyword, data: data, echo: echo}) }
    // {topic: "progress", key: job.data.store, messages: JSON.stringify({store: job.data.store, keyword:keyword, data: progress})},
  ]
  producer.send(payloads, function (err, data) {
    console.log('streaming data', { store: job.data.store, keyword: keyword })
  })
  producer.on('error', function (err) {
    console.log(err)
  })
}

const handlerDispatcher = (store, keyword) => {
  console.log(keyword)
  if (keyword.includes("product%3A")) {
    return handlers_product[store]
  }
  return handlers[store]
}

const handleJobs = async (store, keywords, isUpdate, job = null, producer = null, echo = null) => {
  return new Promise(function (resolve, reject) {
    const res = []
    let items = 0
    keywords.forEach((keyword) => {
      items += 1
      keyword = encodeURIComponent(keyword)
      client.get(`${store}:${keyword}`, (err, data) => {
        //if update is request or there is no data
        if (isUpdate || !data) {
        // if (true) {
          console.log("retrieving from web")
          handlerDispatcher(store, keyword)(keyword).then(
            data => {
              res.push({ [keyword]: data})
              if (job) kafkaWork(producer, job, keyword, data, JSON.parse(echo))
              client.set(`${store}:${keyword}`, JSON.stringify(data), function (err) {
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

const prod = {
  p_name: null,
  url: null,
  uuid: null,
  price: null,
  regularPrice: null,
  img: null
}


const bestBuyMap = {
  'p_name': 'name',
  'category': 'categoryPath',
  'price': 'salePrice',
  'model_no': 'modelNumber',
  'brand': 'manufacturer',
  // 'url': 'productUrl',
  'img':  'image',
  'uuid': 'sku',
}

const stocktrackMap_staples = {
  'p_name': 'title',
  'category': 'category_name',
  'price': 'price',
  'model_no': 'model_num',
  'brand': 'brand',
  'url': 'handle',
  'img':  'product_image',
  'uuid': 'sku',
}

const stocktrackMap_source = {
  'p_name': 'name',
  'price': 'price',
  'url': 'href',
  'img':  'img',
  'uuid': 'sku',
}

// "name": "Apple MacBook Air 13.3” 128GB - Gold - English",
// "href": "/en-ca/computers-tablets/macbook-accessories/macbook-air/apple-macbook-air-13-3%e2%80%9d-128gb---gold---english/p/108085240",
// "img": "https://www.thesource.ca/medias/20191029090523-108085240-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-mediaConversion-200-x-150-0?context=bWFzdGVyfGltYWdlc3w5MzA2fGltYWdlL2pwZWd8aW1hZ2VzL2gwMy9oZDcvOTE4OTkwMDE4OTcyNi5qcGd8MjMxMWM4Mjg0NzBhZjMzNzZiYjdmNTdmOGQ4Y2ViMDgxY2QwZTZmYTJkOTBhMjRmNjkwNzE0NjRmNmJiMjE0Yw",
// "sku": "108085240",
// "price": 1099.99,
// "status": "In Stock "

const storeMarshal = {
  bestbuy: bestBuyMap,
  stocktrack_staples: stocktrackMap_staples,
  stocktrack_source: stocktrackMap_source
}

const marshalResBySoruce = (products, store) => {
  marshal = storeMarshal[store]
  products.forEach(product => {
    Object.keys(marshal).map(function(key, index) {
      product[key] = product[marshal[key]]
    });
  });
  return products
}
const scrapeBestBuy = (keyword) => {
  return new Promise(function (resolve, reject) {
    axios.get(`https://api.bestbuy.com/v1/products((search=${keyword}))?apiKey=tda21Z9pyCFomCJM211gkCrY&sort=bestSellingRank.dsc&show=modelNumber,name,salePrice,regularPrice&pageSize=100&format=json`)
      .then(response => {
        if (response.data.products.length > 0) {
          resolve(marshalResBySoruce(response.data.products, "bestbuy"))
        }
        resolve(prod)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const scrapeBestBuyProductPage = (keyword) => {
  const sku = decodeURIComponent(keyword.split("product%3A")[1])
  return new Promise(function (resolve, reject) {
    axios.get(`https://api.bestbuy.com/v1/products(sku=${sku})?apiKey=tda21Z9pyCFomCJM211gkCrY&sort=bestSellingRank.dsc&show=modelNumber,name,salePrice,regularPrice&pageSize=100&format=json`)
      .then(response => {
        if (response.data.products.length > 0) {
          console.log(response.data.products)
          resolve(marshalResBySoruce(response.data.products, "bestbuy"))
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
        p_name: null,
        url: null,
        uuid: null,
        price: null,
        regularPrice: null,
        img: null
      }
      if (product.textContent.includes("Sponsored")) return prod
      prod.p_name = product.querySelector('span.a-size-medium.a-color-base.a-text-normal').textContent
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
      const image = product.querySelector('.s-image')
      if (image) {
        prod.img = image.getAttribute('src')
      }
      const prices = product.querySelectorAll('.a-offscreen')
      if (prices.length > 0) {
        prod.price = numberify(prices[0].textContent)
        prod.regularPrice = prod.price
        if (prices.length > 1) {
          prod.regularPrice = numberify(prices[1].textContent)
        }
      }
      return prod
    }).filter(product => {
      return product.p_name != null && (product.price != null || product.regularPrice != null)
    })
    return products
  })
  await browser.close()
  return scrapedData
}

const scrapeAmazonProductPage = async (url) => {
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
  await page.goto(decodeURIComponent(url.split("product%3A")[1]))
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    let price = document.querySelector('td.a-span12 span.a-size-medium')
    if (price) {
      price = numberify(price.textContent)
    }
    // prod.price = price
    return [{price: price}]
  })
  await browser.close()
  return scrapedData
}

const scrapeStaplesProductPage = async (url) => {
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
  await page.goto(decodeURIComponent(url.split("product%3A")[1]))
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    let price = document.querySelector('span.product-form__price.money.pre-money')
    if (price) {
      price = numberify(price.textContent)
    }
    // prod.price = price
    return [{price: price}] 
  })
  await browser.close()
  return scrapedData
}

const scrapeWalmartProductPage = async (url) => {
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
  await page.goto(decodeURIComponent(url.split("product%3A")[1]))
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    let price = document.querySelector('span[data-automation="buybox-price"]')
    if (price) {
      price = numberify(price.textContent)
    }
    return [{price: price}]
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
          p_name: null,
          url: null,
          uuid: null,
          price: null,
          regularPrice: null
        }
        image = product.querySelector('.product-thumbnail__image')
        if (image) {
          prod.img = image.getAttribute('src')
        }
        title = product.querySelector('a.product-thumbnail__title.product-link')
        if (title != null) {
          prod.p_name = title.textContent
          prod.url = 'https://www.staples.ca' + title.getAttribute('href')
        }
        price = product.querySelector('.money.pre-money')
        if (price != null) {
          prod.price = numberify(price.textContent)
          prod.uuid = price.getAttribute('data-product-id')
        }
        return prod
      }).filter(product => {
        return product.p_name != null && (product.price != null || product.regularPrice != null)
      })
    return products
  })
  await browser.close()
  return scrapedData
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
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
  await autoScroll(page)
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    const products = Array.from(document.querySelectorAll('.product-link'))
      .map(product => {
        const prod = {
          p_name: null,
          url: null,
          uuid: null,
          price: null,
          regularPrice: null
        }

        image = product.querySelector('.image.lazy-img')
        if (image) {
          prod.img = image.getAttribute('src')
        }

        prod.url = 'https://www.walmart.ca' + product.getAttribute('href')
        uuid = prod.url.split('/')
        if (uuid.length > 0) {
          prod.uuid = uuid[uuid.length - 1]
        }
        title = product.querySelector('.thumb-header')
        if (title != null) {
          prod.p_name = title.textContent
        }

        price = product.querySelector('span.product-price-analytics')
        if (price != null) {
          prod.price = numberify(price.getAttribute('data-analytics-value'))
          if (prod.price == 0) {
            prod.price = -1
          }
        } else {
          curPrice = product.querySelector('.price-current')
          if (curPrice != null) {
            prod.price = numberify(curPrice.textContent)
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
        return product.p_name != null && (product.price != null || product.regularPrice != null)
      })
    return products
  })
  await browser.close()
  return scrapedData
}

const scrapeStaplesV2 = async (keyword) => {
  return new Promise(function (resolve, reject) {
    axios.get(`https://stocktrack.ca/st/search.php?q=${keyword}&order=&n=50`)
      .then(response => {
        console.log(response)
        products = response.data.results[0].hits
        if (products.length > 0) {
          products.forEach(product => {
            product.handle = "https://www.staples.ca/products/" + product.handle
          });
          resolve(marshalResBySoruce(products,"stocktrack_staples"))
        }
        resolve(prod)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const scrapeSource = async (keyword) => {
  return new Promise(function (resolve, reject) {
    axios.get(`https://stocktrack.ca/src/search.php?q=${keyword}&order=&n=50`)
      .then(response => {
        console.log(response)
        let products = response.data.result
        if (products.length > 0) {
          products.forEach(product => {
            product.href = "https://www.thesource.ca" + product.href
          });
          resolve(marshalResBySoruce(products,"stocktrack_source"))
        }
        resolve(prod)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const scrapeSourceProductPage = async (keyword) => {
  const sku = decodeURIComponent(keyword.split("product%3A")[1])
  return new Promise(function (resolve, reject) {
    axios.get(`https://stocktrack.ca/src/search.php?q=${sku}&order=&n=5`)
      .then(response => {
        let products = response.data.result
        if (products.length > 0) {
          products.forEach(product => {
            product.href = "https://www.thesource.ca" + product.href
          });
          console.log(marshalResBySoruce(products,"stocktrack_source"))
          resolve([marshalResBySoruce(products,"stocktrack_source")[0]])
        }
        resolve(prod)
      })
      .catch(error => {
        reject(error)
      })
  })
}






const handlers = {
  amazon: scrapeAmazon,
  staples: scrapeStaplesV2,
  walmart: scrapeWalmart,
  bestbuy: scrapeBestBuy,
  source: scrapeSource,
}

const handlers_product = {
  amazon: scrapeAmazonProductPage,
  staples: scrapeStaplesProductPage,
  walmart: scrapeWalmartProductPage,
  bestbuy: scrapeBestBuyProductPage,
  source: scrapeSourceProductPage,
}

module.exports.handleJobs = handleJobs
// module.exports.scrapeAmazon = scrapeAmazon
// module.exports.scrapeStaples = scrapeStaples
// module.exports.scrapeWalmart = scrapeWalmart
// module.exports.scrapeBestBuy = scrapeBestBuy
