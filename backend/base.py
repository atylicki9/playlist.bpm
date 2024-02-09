from flask import Flask, request, jsonify, abort 
from flask_cors import CORS, cross_origin
from os import environ
import requests

api = Flask(__name__)

# to run>
# in backend directory: source env/bin/activate
# then enter flask run and navigate to api 

@api.route('/accessToken', methods = ['GET'])
@cross_origin(origin='*')
def accessToken():
    def get_access_token():
        print("Getting access token")
        url = "https://accounts.spotify.com/api/token"
        headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        data = {
            "grant_type": "client_credentials",
            "client_id": environ.get('SPOTIFY_CLIENT_ID'),
            "client_secret": environ.get('SPOTIFY_CLIENT_SECRET')
        }

        print(data)
        response = requests.post(url, headers=headers, data=data)
        print(response.json())
        return "test"

@api.route('/playlists', methods = ['POST'])
@cross_origin(origin='*')
def playlists():
    """
    Creates a new playlist with the provided information.

    Returns:
        dict: The playlist information.
    """
    playlistInfo = {
        'numberOfSongs': request.json['numberOfSongs'],
        'tempo': request.json['tempo'],
    }
    return jsonify({'playlistInfo': playlistInfo}), 201

