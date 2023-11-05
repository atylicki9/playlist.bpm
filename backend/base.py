from flask import Flask
from flask_cors import CORS, cross_origin

# to run>
# in backend directory: source env/bin/activate
# then enter flask run and navigate to api 

api = Flask(__name__)

@api.route('/ping', methods = ['GET'])
@cross_origin(origin='*')
def ping():
    response = {
        "about" :"Workout Generator API is Online."
    }

    return response