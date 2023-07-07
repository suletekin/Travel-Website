import requests
import json 

url = "https://api.geoapify.com/v1/geocode/search?text=Restaurants&format=json&apiKey=5e16fb1038f1406794681761dd4baf08"
          
response = requests.get(url)
print(response.json())

with open("locations.json", "w") as outfile:
    json.dump(response.json(), outfile)