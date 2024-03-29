import {
  Button
} from "@chakra-ui/react";
import axios from "axios";
import { API_TRACKS_ENDPOINT } from "../../common/constants";

export interface Song {
  id: string;
  name: string;
  artist: string;
  album: string;
}

interface GenerateTrackListButtonProps{
  numberOfSongs: number;
  tempo: number;
  genres: string[];
  setValue: ((songs: any) => void);
}

const callTracksApi = (numberOfSongs: number, tempo: number, genres: string[], setValue: ((songs: any) => void)) => {
  axios.post(API_TRACKS_ENDPOINT, {
    numberOfSongs: numberOfSongs,
    tempo: tempo, 
    genres: genres.toString().toLowerCase(),
    token: localStorage.getItem("access_token")
  })
  .then((response) => {
    setValue(response.data.recommendations.tracks.map((track: any) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name
    })));
  }, (error) => {
    console.log(error);
  });
}

export const GenerateTrackListButton: React.FC<GenerateTrackListButtonProps> = ({numberOfSongs, tempo, genres, setValue}) => {
  return (
    <Button onClick={e => callTracksApi(numberOfSongs, tempo, genres, setValue)}>
      <h1>Submit</h1>
    </Button>
  );
};