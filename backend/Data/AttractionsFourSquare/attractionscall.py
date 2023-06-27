import json
import requests

url = "https://api.foursquare.com/v3/places/search?query=garden"

headers = {
    "accept": "application/json",
    "Authorization": "fsq3h+dHo9SVV8NTlp/kQumrHyhgShIPLERUfdR90otpdJ8="
}

response = requests.get(url, headers=headers)

print(response.text)

with open("attractions.json", "w") as outfile:
    json.dump(response.json(), outfile)