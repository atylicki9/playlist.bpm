from flask import Flask, request, jsonify, abort 
from flask_cors import CORS, cross_origin
from os import environ
import requests

api = Flask(__name__)

# to run>
# in backend directory: source env/bin/activate
# then enter flask run and navigate to api 

@api.route('/tracks', methods = ['POST'])
@cross_origin(origin='*')
def tracks():
    headers = {
        'Authorization': 'Bearer '+ request.json['token'],
        'Content-Type': 'application/json'
    }

    trackParams = {
        'limit': request.json['numberOfSongs'],
        'target_tempo': request.json['tempo'],
        'seed_genres': request.json['genres'],
        'min_popularity': 40,
    }

    response = requests.get('https://api.spotify.com/v1/recommendations',  params=trackParams, headers=headers )

    if response.status_code == 200:
        recommendations = response.json()
        print(recommendations)        

        return jsonify({'trackParams': trackParams, 'recommendations': recommendations}), 201
    else:
        print(response.json())
        abort(response.status_code)

@api.route('/createPlaylist', methods = ['POST'])
@cross_origin(origin='*')
def createPlaylist():
    headers = {
        'Authorization': 'Bearer '+ request.json['token'],
        'Content-Type': 'application/json'
    }

    playlistParams = {
        'name': request.json['name']
    }

    response = requests.get('https://api.spotify.com//v1/users/atylicki/playlists',  params=playlistParams, headers=headers )

    if response.status_code == 200:
        response = response.json()       
        print("Playlist Generated. Response: " + response)
        return jsonify({'apiResponse': response}), 201
    else:
        print(response.json())
        abort(response.status_code)