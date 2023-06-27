import requests
import json

url = "https://api.yelp.com/v3/businesses/search?location=NYC&sort_by=best_match&limit=20"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer hXRk4kUOOClq6kHoDFbZsbtfcQ3rTM70R3wgBHfiPb620yBzX5TzQyffmp6fJaGu9xZ7XITJJuT5Q3ktiv1UdgXKpXWy4FRAC_6Zm8bXsxEqakBh8LhomLmAbayYZHYx"
}

response = requests.get(url, headers=headers)

print(response.text)

with open("businesses.json", "w") as outfile:
    json.dump(response.json(), outfile)