#main.py
from flask import Flask, jsonify, request
from db import get_cities, get_attractions, get_reviews
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/cities', methods=['GET'])
def cities():
    city_data = get_cities()  
    response = city_data
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET')
    return response
    


@app.route('/attractions', methods=['GET'])
def attractions():
    attractions_data = get_attractions()  
    response = attractions_data
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET')
    return response
    
@app.route('/reviews', methods=['GET'])
def reviews():
    reviews_data = get_reviews()  
    response = reviews_data
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET')
    return response


if __name__ == '__main__':
    app.run()
