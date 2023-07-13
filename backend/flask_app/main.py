#main.py
from flask import Flask, jsonify, request
from db import get_cities, get_attractions, get_reviews

app = Flask(__name__)

@app.route('/cities', methods=['GET'])
def cities():
    return get_songs()  

@app.route('/attractions', methods=['GET'])
def attractions():
    return get_attractions()
    
@app.route('/reviews', methods=['GET'])
def songs():
    return get_reviews()

if __name__ == '__main__':
    app.run()
