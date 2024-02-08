from flask import Flask, request, jsonify, abort 
from flask_cors import CORS, cross_origin

# to run>
# in backend directory: source env/bin/activate
# then enter flask run and navigate to api 

api = Flask(__name__)

@api.route('/playlists', methods = ['POST'])
@cross_origin(origin='*')
def playlists():
    playlistInfo = {
        'numberOfSongs': request.json['numberOfSongs'],
        'tempo': request.json['tempo'],
    }
    return jsonify({'playlistInfo': playlistInfo}), 201

