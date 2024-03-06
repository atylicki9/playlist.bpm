# Playlist.bpm by Aaron Tylicki
## About the App

## Local Running
### Access Token
In the src directory, create a file called environment.ts. Here, add your spotify client id and client secret as shown below
```
export const CLIENT_ID: string = "xxxxxxxxxxxxxx";
export const CLIENT_SECRET: string = "xxxxxxxxxxxxxx";
```
To generate these values follow [Spotify's directions for getting started.](https://developer.spotify.com/documentation/web-api/tutorials/getting-started)

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