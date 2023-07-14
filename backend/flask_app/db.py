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

    print(type(got_songs))
    query = json.loads(got_songs.get_data().decode('utf-8'))
    print(query)
    print(type(query))
    
    #search
    search = request.args.get("search", None, type=str)

    if search:
        search_term = search.lower()
        print(search)
        query = [d for d in query if row_contains_search_term(d, search_term)]
        print(query)

    


    #filtering
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

    #sorting
    sort = request.args.get("sort", None, type=str)

    #only allow population, latitude, longitude
    if sort:
        print(sort)
        query = sort_dict(query, key=sort)
    

    """#PAGINATION
    page = request.args.get("page", 1, type=int)
    numPerPage = request.args.get("numPerPage", 5, type=int)
    if numPerPage == 0:
        numPerPage = 5

    recipes = query.paginate(page=page, max_per_page=numPerPage)
    
    offset = (page - 1) * numPerPage 

    items_pagination = query 
    total = len(query) 
    pagination = Pagination(page=page, per_page=numPerPage, offset=offset, total=total) 
    #return render_template("get_inspired.html", form=form, pagination=pagination, items=items_pagination)
    totalNumPages = (total-1) / numPerPage + 1
    response = {
        "pages": totalNumPages,
        "data": query,
    }
    return jsonify(response)
    """

    # return got_songs
    print(type(jsonify(query)))
    return jsonify(query)


def filter_dict_ge(json_obj, key, value):
    return [d for d in json_obj if d[key]>=value]

def filter_dict_eq(json_obj, key, value):
    return [d for d in json_obj if d[key]==value]

def row_contains_search_term(row, search_term):
    return any([True for value in row.values() if search_term in str(value).lower()])

def sort_dict(json_obj, key):
    return sorted(json_obj, key=lambda x: x[key])
    

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

    print(type(got_songs))
    query = json.loads(got_songs.get_data().decode('utf-8'))
    print(query)
    print(type(query))
    
    #search
    search = request.args.get("search", None, type=str)

    if search:
        search_term = search.lower()
        query = [d for d in query if row_contains_search_term(d, search_term)]

    
    #filtering
    cityID = request.args.get("cityID", None, type=str)
    if cityID:
        query = filter_dict_eq(query, 'cityID', cityID)


    #sorting
    sort = request.args.get("sort", None, type=str)

    #only allow population, latitude, longitude
    if sort:
        print(sort)
        query = sort_dict(query, key=sort)

    return jsonify(query)



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

    print(type(got_songs))
    query = json.loads(got_songs.get_data().decode('utf-8'))
    print(query)
    print(type(query))
    
    #search
    search = request.args.get("search", None, type=str)

    if search:
        search_term = search.lower()
        query = [d for d in query if row_contains_search_term(d, search_term)]


    #sorting
    sort = request.args.get("sort", None, type=str)

    #only allow population, latitude, longitude
    if sort:
        print(sort)
        query = sort_dict(query, key=sort)

    #filtering
    reviewID = request.args.get("reviewID", None, type=str)
    if reviewID:
        query = filter_dict_eq(query, 'reviewID', reviewID)
    
    return jsonify(query)


def search():
    pass