#db.py
import os
import pymysql
from flask import request
from flask import jsonify
import json 

db_user = os.environ.get('CLOUD_SQL_USERNAME')
db_password = os.environ.get('CLOUD_SQL_PASSWORD')
db_name = os.environ.get('CLOUD_SQL_DATABASE_NAME')
db_connection_name = os.environ.get('CLOUD_SQL_CONNECTION_NAME')


def open_connection():
    unix_socket = '/cloudsql/{}'.format(db_connection_name)
    try:
        if os.environ.get('GAE_ENV') == 'standard':
            conn = pymysql.connect(user=db_user, password=db_password,
                                unix_socket=unix_socket, db=db_name,
                                cursorclass=pymysql.cursors.DictCursor
                                )
    except pymysql.MySQLError as e:
        print(e)

    return conn


def get_cities():
    conn = open_connection()
    with conn.cursor() as cursor:
        result = cursor.execute('SELECT * FROM cities;')
        songs = cursor.fetchall()

        if result > 0:
            got_songs = jsonify(songs)
        else:
            got_songs = 'No Songs in DB'
    conn.close()

    #query the entire database - done above
    query = dict(json.loads(got_songs.readall().decode('utf-8')))
    #search


    city_name = request.args.get("city_name", None, type=str)
    if city_name:
        query = filter_dict_eq(query, 'name', city_name)

    population = request.args.get("population", None, type=int)
    if population:
        query = filter_dict_ge(query, 'population', population)

    latitude = request.args.get("latitude", None, type=float)
    if latitude:
        query = filter_dict_ge(query, 'latitude', latitude)

    longitude = request.args.get("longitude", None, type=float)
    if longitude:
        query = filter_dict_ge(query, 'longitude', longitude)

    # return got_songs
    return jsonify(json.dumps(query))


def filter_dict_ge(json_obj, key, value):
    return [d for d in json_obj if d[key]>=value]

def filter_dict_eq(json_obj, key, value):
    return [d for d in json_obj if d[key]==value]

def get_attractions():
    conn = open_connection()
    with conn.cursor() as cursor:
        result = cursor.execute('SELECT * FROM attractions;')
        songs = cursor.fetchall()
        if result > 0:
            got_songs = jsonify(songs)
        else:
            got_songs = 'No Songs in DB'
    conn.close()
    return got_songs

def get_reviews():
    conn = open_connection()
    with conn.cursor() as cursor:
        result = cursor.execute('SELECT * FROM reviews;')
        songs = cursor.fetchall()
        if result > 0:
            got_songs = jsonify(songs)
        else:
            got_songs = 'No Songs in DB'
    conn.close()
    return got_songs
