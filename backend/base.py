from flask import Flask

# to run>
# in backend directory: source env/bin/activate
# then enter flask run and navigate to api 

api = Flask(__name__)

@api.route('/ping')
def my_profile():
    response_body = {
        "about" :"Workout Generator API is Online."
    }

    return response_body