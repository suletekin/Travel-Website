import os
from flask import Flask, render_template, request, url_for, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.sql import func

import sqlalchemy as sa
from sqlalchemy_utils import URLType
from sqlalchemy.dialects.mysql import FLOAT

import json

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'bella'
app.config['MYSQL_PASSWORD'] = 'asdf1234'
app.config['MYSQL_DB'] = 'MyDB'

port_num = '3306'

app.config['SQLALCHEMY_DATABASE_URI'] =\
        f"mysql://{app.config['MYSQL_USER']}:{app.config['MYSQL_PASSWORD']}@{app.config['MYSQL_HOST']}:{port_num}/{app.config['MYSQL_DB']}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy()
db.init_app(app)


class city(db.Model):
        __tablename__ = 'CITY'
        id = db.Column(db.Integer, primary_key = True)
        name = db.Column(db.String(100), nullable=False)

        attractions = db.relationship('attraction', backref='city')
        attraction_reviews = db.relationship('attraction_review', backref='city')

        def __repr__(self):
                return f'<City {self.name}>'


class attraction(db.Model):
        
        __tablename__ = 'ATTRACTION'
        id = db.Column(db.Integer, primary_key = True)
        city_id = db.Column(db.Integer, db.ForeignKey(city.id), nullable=False)
        #city_name = db.Column(db.String(25), db.ForeignKey(city.name), nullable=False)

        attraction_reviews = db.relationship('attraction_review', backref='attraction')


        alias = db.Column(db.String(100), nullable=False)
        name = db.Column(db.String(100), nullable=False)

        image_url = sa.Column(URLType, nullable=False)

        is_closed = db.Column(db.Boolean)
        url = sa.Column(URLType, nullable=False)
        review_count = db.Column(db.Integer, nullable=False)

        # category_alias = db.Column(db.String(100))
        # category_title = db.Column(db.String(100))
        
        #rating = sa.Column(sa.types.Float)
        rating = db.Column(FLOAT)

        coordinate_latitude = db.Column(db.Float)
        coordinate_longitude = db.Column(db.Float)

        price = db.Column(db.String(10))

        location_address1 = db.Column(db.String(100))
        location_address2 = db.Column(db.String(100))
        location_address3 = db.Column(db.String(100))
        location_city = db.Column(db.String(100))
        location_zip_code = db.Column(db.String(100))
        location_country = db.Column(db.String(100))
        location_state = db.Column(db.String(100))
        location_display_address = db.Column(db.String(100))

        phone = db.Column(db.String(100))
        display_phone = db.Column(db.String(100))
        distance = db.Column(db.Float)

        def __init__(self, \
                city_id, \
                id, \
                alias, \
                name, \

                image_url, \

                is_closed, \
                url, \
                review_count, \

                categories, \
                rating, \

                coordinates, \
                #*transactions, \
                location, \

                phone, \
                display_phone, \
                distance, \
                price='--', \
                ):
                #self.id = id
                self.city_id = city_id
                self.alias = alias
                self.name = name

                self.image_url = image_url

                self.is_closed = is_closed
                self.url = url
                self.review_count = review_count

                # self.category_alias = categories['alias']
                # self.category_title = categories['title']
                self.rating = rating

                self.coordinate_latitude = coordinates['latitude']
                self.coordinate_longitude = coordinates['longitude']

                self.price = price

                self.location_address1 = location['address1']
                self.location_address2 = location['address2']
                self.location_address3 = location['address3']
                self.location_city = location['city']
                self.location_zip_code = location['zip_code']
                self.location_country = location['country']
                self.location_state = location['state']
                self.location_display_address = location['display_address'][0]

                self.phone = phone
                self.display_phone = display_phone
                self.distance = distance

        

class attraction_review(db.Model):
        __tablename__ = 'ATTRACTION_REVIEW'
        city_id = db.Column(db.Integer, db.ForeignKey(city.id), nullable=False)
        attraction_id = db.Column(db.Integer, db.ForeignKey(attraction.id), nullable=False)
        id = db.Column(db.Integer, primary_key = True)
        url = sa.Column(URLType, nullable=True)
        text = db.Column(db.String(200))
        rating = db.Column(FLOAT)
        time_created = db.Column(db.String(100))
        user_id = db.Column(db.String(100), nullable=True)
        user_profile_url = sa.Column(URLType, nullable=True)
        user_image_url = sa.Column(URLType, nullable=True, default=None)
        user_name = db.Column(db.String(100), nullable=True)

        def __init__(self, \
                     id, \
                     city_id, \
                     attraction_id, \
                     url, \
                     text, \
                     rating, \
                     time_created, \
                     user, \
                #      user_id, \
                #      user_profile_url, \
                #      user_image_url, \
                #      user_name, \
                
        ):
                self.city_id = city_id
                self.attraction_id = attraction_id
                self.url = url
                self.text = text
                self.rating = rating
                self.time_created = time_created
                self.user_id = user['id']
                self.user_profile_url = user['profile_url']
                self.user_image_url = user['image_url']
                print(user['image_url'])
                self.user_name = user['name']

# @app.route('/')
# def index():
#     students = Student.query.all()
#     return render_template('index.html', students=students)


@app.route("/Reviews", methods=["GET"])
def get_reviews():
    # pagination for reviews
    page = request.args.get("page", 1, type=int)
    numPerPage = request.args.get("numPerPage", 5, type=int)
    if numPerPage == 0:
        numPerPage = 5

    reviews = attraction_review.query.paginate(page=page, per_page=numPerPage)
    totalNumPages = reviews.pages

    review_data = []
    for review in reviews.items:
        review_dict = review.to_dict()
        review_data.append(review_dict)

    response = {
        "pages": totalNumPages,
        "data": review_data,
    }

    return jsonify(response)


@app.route("/Cities", methods=["GET"])
def get_cities():
    query = db.session.query(city)

    # Pagination for cities
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per_page", 5, type=int)
    if per_page == 0:
        per_page = 5

    cities = query.paginate(page=page, per_page=per_page)
    total_pages = cities.pages

    response = {
        "pages": total_pages,
        "data": [city.name for city in cities.items], 
    }
    return jsonify(response)


@app.route("/Attractions", methods=["GET"])
def get_attractions():
    query = db.session.query(attraction)

    # Pagination for attractions
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per_page", 5, type=int)
    if per_page == 0:
        per_page = 5

    attractions = query.paginate(page=page, per_page=per_page)
    total_pages = attractions.pages

    response = {
        "pages": total_pages,
        "data": [attraction.name for attraction in attractions.items], 
    }
    return jsonify(response)







city_names = ['New York City', \
                'Chicago', \
                'Los Angeles', \
                'Las Vegas', \
                'Washington DC', \
                'Boston', \
                'San Francisco', \
                'Seattle', \
                'Miami', \
                'Orlando', \
                ]

def result_dict(r):
        return dict(zip(r.keys(), r))

def result_dicts(rs): 
        return list(map(result_dict, rs))

with app.app_context():
        # db = SQLAlchemy(app)
        db.create_all()

        cities_list = []
        for city_name in city_names:
                city_obj = city(name=city_name)
                #cities_list.append(city_obj)
                db.session.add(city_obj)
                db.session.commit()

                #read attractions file
                file_path = f"./data/attractions_{city_name}.json"

                f = open(file_path)
                attraction_data = json.load(f)

                #for each attraction
                for item in attraction_data['businesses']:
                        #print(item)
                        item['city_id'] = city_obj.id
                        #del item['categories']
                        del item['transactions']
                        #print(item['price'])
                        attraction_obj = attraction(**item)
                        db.session.add(attraction_obj)
                        db.session.commit()

                        file_path2 = f"./data/{city_name}/{item['id']}_{item['alias']}_reviews.json"

                        f2 = open(file_path2)
                        reviews_data = json.load(f2)

                        for item2 in reviews_data['reviews']:
                                item2['city_id'] = city_obj.id
                                item2['attraction_id'] = attraction_obj.id
                                attraction_review_obj = attraction_review(**item2)
                                db.session.add(attraction_review_obj)
                                db.session.commit()


if __name__ == "__main__":
    app.run(debug=True)
        

        