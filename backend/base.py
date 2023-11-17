import workoutCalculations
from flask import Flask, request, jsonify, abort 
from flask_cors import CORS, cross_origin

# to run>
# in backend directory: source env/bin/activate
# then enter flask run and navigate to api 

api = Flask(__name__)

@api.route('/workouts', methods = ['POST'])
@cross_origin(origin='*')
def workouts():
    workouts = {
        'pushups': workoutCalculations.calculatePushups(request.json['pushupsMax']),
        'situps': workoutCalculations.calculateSitups(request.json['situpsMax']),
        'pullups': workoutCalculations.calculatePullups(request.json['pullupsMax']),
        'run': workoutCalculations.calculateRun(request.json['runTime']),
        'swim': workoutCalculations.calculateSwim(request.json['swimTime'])
    }
    return jsonify({'workouts': workouts}), 201

