# Playlist.bpm by Aaron Tylicki
## About the App
This app leverages the Spotify API to generate playlists for people looking to target a certain tempo/BPM when listening. The app allows the user to first, connect their spotify account, then generate a list of songs with the desired BPM by a given set of parameters (like genre and number of songs). Once the user is pleased with their list of songs, they can then add the playlist to their spotify account seamlessly through this application.

## Local Running
### Access Token
In the src directory, create a file called environment.ts. Here, add your spotify client id and client secret as shown below
```
export const CLIENT_ID: string = "xxxxxxxxxxxxxx";
export const CLIENT_SECRET: string = "xxxxxxxxxxxxxx";
```
To generate these values, follow [Spotify's directions for getting started.](https://developer.spotify.com/documentation/web-api/tutorials/getting-started)

### `npm start`

In the project directory, you can run:

```
npm start
```
Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `flask run`

In backend directory run the following command first:

``` 
source env/bin/activate
```
Once env is set, then run flask startup command:

```
flask run
```
