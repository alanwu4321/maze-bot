import requests

response = requests.get("https://stocktrack.ca/bb/hist_data.php?sku=13792711")
print(response.json())

response = requests.get("https://stocktrack.ca/bb/availability.php?sku=13792711|13792715|11464749|13792725|10749351")
print(response.json())
