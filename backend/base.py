from flask import Flask, request, jsonify, abort 
from flask_cors import CORS, cross_origin
from os import environ
import requests

api = Flask(__name__)

# to run>
# in backend directory: source env/bin/activate
# then enter flask run and navigate to api 

@api.route('/playlists', methods = ['POST'])
@cross_origin(origin='*')
def playlists():
    """
    Creates a new playlist with the provided information.

    Returns:
        dict: The playlist information.
    """
    headers = {
        'Authorization': 'Bearer '+ request.json['token'],
        'Content-Type': 'application/json'
    }

    playlistInfo = {
        'limit': request.json['numberOfSongs'],
        'target_tempo': request.json['tempo'],
        'seed_genres': request.json['genres'],
    }

    response = requests.get('https://api.spotify.com/v1/recommendations',  params=playlistInfo, headers=headers )

        # Check if the request was successful
    if response.status_code == 200:
        recommendations = response.json()
        print(recommendations)        

        return jsonify({'playlistInfo': playlistInfo, 'recommendations': recommendations}), 201
    else:
        print(response.json())
        abort(response.status_code)

