const puppeteer = require('puppeteer')
const handleStore = async (handler, query) => {
  return new Promise(function (resolve, reject) {
    let keywords = query.keywords.split(",")
    console.log(keywords)
    let counter = 0
    let res = []
    keywords.forEach((keyword) => {
      handler(keyword).then(
        data => {
          res.push({[keyword]: data})
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

const scrapeAmazon = async (keyword) => {
  const browser = await puppeteer.launch({
    headless: true, args: [
      '--window-size=1000,1000',
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
        if(title != null){
          prod.name = title.textContent
          prod.url = "https://www.staples.ca" + title.getAttribute("href")
        }
        price = product.querySelector(".money.pre-money")
        if(price != null){
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

module.exports.handleStore = handleStore
module.exports.scrapeAmazon = scrapeAmazon
module.exports.scrapeStaples = scrapeStaples
