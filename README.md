![Image description](https://alan-wu.com/0001.jpg)



## About
The problem addressed in this project is collecting data required for businesses to develop a competitive pricing strategy. The _Libertis_ allows teams to map matching products across vendors and comb through a myriad of online websites of their competitors to monitor the price, inventory, and popularity changes of various products, allowing them to set their price in a competitive and up-to-date manner.

> _Libertis_ monitors the web, so you don't have to.


## In App Demo

### Search matching products on different vendors (Amazon, Walmart, Bestbuy, Source and Staple) 

![Image description](https://alan-wu.com/maze-bot/step_search.png)

### View all target products and request price and inventory updates from selected vendors

![Image description](https://alan-wu.com/maze-bot/step_update.png)

### View Dashboard Analytics by Category

![Image description](https://alan-wu.com/maze-bot/step_dashboard.png)

### View Product Analytics

![Image description](https://alan-wu.com/maze-bot/step_table.png)


## Getting Started
 -  Run `. ./init.sh` to launch `tmux` and the servers below:
 
 - `Node Request API Server` => `port 3000`
 - `Python ETL API Server` => `port 3002`
 - `React Front End` => `port 4100`
 - `Kafka & Zookeeper Server` => `port 9092`
 - `Postgres Server` => `port 5432`
 - `Redis Server` => `port 6379`
 
 ### Prerequisite
 - NodeJS
 - Kafka
 - Zookeeper
 - Redis
 - Tmux
 - Postgres

## Overview
![Image description](https://alan-wu.com/maze-bot/infra.png)

## Database
![Image description](https://alan-wu.com/maze-bot/db.png)

### Request API

## Example

 `http://localhost:3000?keywords=macbook&stores=amazon,staples`

 ```
{
    "res": [
        {
            "amazon": [
                {
                    "macbook": {
                        "name": "Apple 13\" MacBook Air, 1.8GHz Intel Core i5 Dual Core Processor, 8GB RAM, 128GB SSD, Mac OS, Silver, MQD32LL/A",
                        "url": "https://www.amazon.ca/Apple-MacBook-1-8GHz-Processor-MQD32LL/dp/B07211W6X2/ref=sr_1_1?keywords=macbook&qid=1583459665&sr=8-1",
                        "uuid": "B07211W6X2",
                        "salePrice": 1069.99,
                        "regularPrice": 1138.99
                    }
                }
            ]
        },
        {
            "staples": [
                {
                    "macbook": {
                        "name": "Apple MUHN2LL/A MacBook Pro 13.3\" with Touch Bar, 1.4 GHz Intel Core i5, 128 GB SSD, 8GB RAM, macOS Mojave, Space Grey, English",
                        "url": "https://www.staples.ca/products/2955723-en-apple-muhn2lla-macbook-pro-133-with-touch-bar-14-ghz-intel-core-i5-128-gb-ssd-8gb-ram-macos-mojave-space-grey-english",
                        "uuid": "2172698689665",
                        "salePrice": 1699.99,
                        "regularPrice": null
                    }
                }
            ]
        }
    ]
}



 ```
