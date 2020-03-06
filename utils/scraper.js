const puppeteer = require('puppeteer')
const axios = require('axios');

const handleStore = async (handler, keywords) => {
  return new Promise(function (resolve, reject) {
    console.log(keywords)
    let counter = 0
    let res = []
    keywords.forEach((keyword) => {
      handler(keyword).then(
        data => {
          res.push({ [keyword]: data })
          counter += 1
          if (counter == keywords.length) {
            resolve(res)
          }
        }
      ).catch(err => {
        reject(err)
      })
    })
  })
}

const scrapeBestBuy = (keyword) => {
  return new Promise(function (resolve, reject) {
    let prod = {
      name: null,
      url: null,
      uuid: null,
      salePrice: null,
      regularPrice: null,
    }
    axios.get(`https://api.bestbuy.com/v1/products((search=${keyword}))?apiKey=tda21Z9pyCFomCJM211gkCrY&sort=modelNumber.asc&show=modelNumber,name,salePrice,regularPrice&pageSize=100&format=json`)
      .then(response => {
        if (response.data["products"].length > 0){
          resolve(response.data["products"][0])
        }
        resolve(prod)
      })
      .catch(error => {
        reject(error)
      });
  })
}

const scrapeAmazon = async (keyword) => {
  const browser = await puppeteer.launch({
    headless: true, args: [
      '--window-size=1000,1000',
      '--no-sandbox', '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
  await page.goto(`https://www.amazon.ca/s?k=${keyword}`)
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    let products = Array.from(
      document.querySelectorAll(
        '.s-include-content-margin.s-border-bottom'
      )
    ).map(product => {
      let prod = {
        name: null,
        url: null,
        uuid: null,
        salePrice: null,
        regularPrice: null,
      }
      prod.name = product.querySelector("span.a-size-medium.a-color-base.a-text-normal").textContent
      let url = product.querySelector(".a-link-normal .a-text-normal")
      if (url != null) {
        parent = url.parentNode
        if (parent != null) {
          prod.url = "https://www.amazon.ca" + parent.getAttribute("href")
          if (prod.url.includes("/dp/")) {
            prod.uuid = prod.url.split("/")[5]
          } else if (prod.url.includes("dp%2F")) {
            prod.uuid = prod.url.split("dp%2F")[1].split("%2F")[0]
          }
        }
      }
      let prices = product.querySelectorAll(".a-offscreen")
      if (prices.length > 0) {
        prod.salePrice = numberify(prices[0].textContent)
        prod.regularPrice = prod.salePrice
        if (prices.length > 1) {
          prod.regularPrice = numberify(prices[1].textContent)
        }
      }
      return prod
    }).filter(product => {
      return product.name != null && (product.salePrice != null || product.regularPrice != null);
    })
    return products[0]
  })
  await browser.close()
  return scrapedData
}

const scrapeStaples = async (keyword) => {
  const browser = await puppeteer.launch({
    headless: true, args: [
      '--window-size=1000,1000',
      '--no-sandbox', '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
  await page.goto(
    `https://www.staples.ca/search?query=${keyword}`
  )

  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    const products = Array.from(document.querySelectorAll('.ais-hits--item'))
      .map(product => {
        let prod = {
          name: null,
          url: null,
          uuid: null,
          salePrice: null,
          regularPrice: null,
        }
        title = product.querySelector("a.product-thumbnail__title.product-link")
        if (title != null) {
          prod.name = title.textContent
          prod.url = "https://www.staples.ca" + title.getAttribute("href")
        }
        price = product.querySelector(".money.pre-money")
        if (price != null) {
          prod.salePrice = numberify(price.textContent)
          prod.uuid = price.getAttribute("data-product-id")
        }
        return prod
      }).filter(product => {
        return product.name != null && (product.salePrice != null || product.regularPrice != null);
      })
    return products[0]
  })
  await browser.close()
  return scrapedData
}

const scrapeWalmart = async (keyword) => {
  const browser = await puppeteer.launch({
    headless: true, args: [
      '--window-size=1000,1000',
      '--no-sandbox', '--disable-setuid-sandbox'
    ]
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
  await page.goto(
    `https://www.walmart.ca/search/${keyword}`
  )
  const scrapedData = await page.evaluate(() => {
    const numberify = string => Number(string.replace(/[^\d.]+/, '').replace(/\btp\./g, '').replace(',', '') || 0)
    const products = Array.from(document.querySelectorAll('.product-link'))
      .map(product => {
        let prod = {
          name: null,
          url: null,
          uuid: null,
          salePrice: null,
          regularPrice: null,
        }
        prod.url = "https://www.walmart.ca" + product.getAttribute("href")
        uuid = prod.url.split("/")
        if (uuid.length > 0) {
          prod.uuid = uuid[uuid.length - 1]
        }
        title = product.querySelector(".thumb-header")
        if (title != null) {
          prod.name = title.textContent
        }

        price = product.querySelector("span.product-price-analytics")
        if (price != null) {
          prod.salePrice = numberify(price.getAttribute("data-analytics-value"))
          if (prod.salePrice == 0) {
            prod.salePrice = -1
          }
        } else {
          curPrice = product.querySelector(".price-current")
          if (curPrice != null) {
            prod.salePrice = numberify(curPrice.textContent)
          }
        }
        price_was = product.querySelector(".price-was")
        if (price_was != null) {
          prod.regularPrice = numberify(price_was.textContent)
          if (prod.regularPrice == 0) {
            prod.regularPrice = null
          }
        }
        return prod
      }).filter(product => {
        return product.name != null && (product.salePrice != null || product.regularPrice != null);
      })
    return products[0]
  })
  await browser.close()
  return scrapedData
}



module.exports.handleStore = handleStore
module.exports.scrapeAmazon = scrapeAmazon
module.exports.scrapeStaples = scrapeStaples
module.exports.scrapeWalmart = scrapeWalmart
module.exports.scrapeBestBuy = scrapeBestBuy



