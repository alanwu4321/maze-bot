# import requests
# from urllib.parse import urlencode
# from etl.utils import api_utils as utils, db, env
# # from utils import api_utils as utils, db, env


# def fetchHistory(store, p_id, s_id):
#     sku = db.query(db.PSM).select().eql(p_id, s_id).where("p_id", "s_id").eval()
#     # mydict = {'q': sku[0].get('uuid')}
#     mydict = {'q': 'lg tv'}
#     print(sku[0].get('uuid'))
#     response = requests.get(
#         "https://stocktrack.ca/%s/search.php?%s" % (store, urlencode(mydict)))
#     res = response.json()
#     print(res)
#     sku = res['products'][0]['sku']
#     response = requests.get(
#         "https://stocktrack.ca/%s/hist_data.php?sku=%s" % (store, sku))
#     series = response.json()
#     agg = []
#     for point in series['1P']:
#         date = getDate(point)
#         price = point['y']
#         inv = getInventory(point)
#         agg.append({"date": date, "price": price, "inv": inv})
#         db.query(db.PS).write(
#             p_id,
#             s_id,
#             date,
#             float(inv),
#             float(price),
#         ).into(
#             "p_id",
#             "s_id",
#             "date",
#             "inventory",
#             "price"
#         ).eval()


# getDate = lambda p: p['x'][:10]


# def getInventory(point):
#     inventory = point['inventory']
#     avg = 0
#     for inv in inventory:
#         if inv:
#             avg += inv
#         else:
#             avg = -2
#             break
#     return avg / 2


# fetchHistory("bb", 9, 1)

# # response = requests.get("https://stocktrack.ca/bb/availability.php?sku=13792711|13792715|11464749|13792725|10749351")
# # print(response.json())
