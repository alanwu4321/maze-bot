import requests
from urllib.parse import urlencode
import db, env


def fetchHistory():
    mydict = {'q': 'samsung curved momitor'}
    response = requests.get(
        "https://stocktrack.ca/bb/search.php?%s" % urlencode(mydict))
    res = response.json()
    sku = res['products'][0]['sku']
    response = requests.get(
        "https://stocktrack.ca/bb/hist_data.php?sku=%s" % sku)
    series = response.json()

    agg = []
    for point in series['1P']:
        date = getDate(point)
        price = point['y']
        inv = getInventory(point)
        agg.append({"date": date, "price": price, "inv": inv})
        db.query(db.PS).write(
            1,
            1,
            date,
            float(inv),
            float(price),
        ).into(
            "p_id",
            "s_id",
            "date",
            "inventory",
            "price"
        ).eval()


getDate = lambda p: p['x'][:10]


def getInventory(point):
    inventory = point['inventory']
    avg = 0
    for inv in inventory:
        if inv:
            avg += inv
        else:
            avg = -2
            break
    return avg / 2


fetchHistory()

# response = requests.get("https://stocktrack.ca/bb/availability.php?sku=13792711|13792715|11464749|13792725|10749351")
# print(response.json())
