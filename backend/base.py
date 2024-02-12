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
    playlistInfo = {
        'numberOfSongs': request.json['numberOfSongs'],
        'tempo': request.json['tempo'],
    }
    return jsonify({'playlistInfo': playlistInfo}), 201

