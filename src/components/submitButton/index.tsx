import {
  Button
} from "@chakra-ui/react";
import axios from "axios";
import { API_TRACKS_ENDPOINT } from "../../common/constants";
import getAuthInfo from "../../utility/authUtility";

export interface Song {
  id: string;
  name: string;
  artist: string;
  album: string;
}

interface SubmitButtonProps{
  numberOfSongs: number;
  tempo: number;
  genres: string[];
  setValue: ((songs: any) => void);
}

const callPlaylistApi = (numberOfSongs: number, tempo: number, genres: string[], setValue: ((songs: any) => void)) => {
  axios.post(API_TRACKS_ENDPOINT, {
    numberOfSongs: numberOfSongs,
    tempo: tempo, 
    genres: genres.toString().toLowerCase(),
    token: localStorage.getItem("access_token")
  })
  .then((response) => {
    console.log(response);
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

export const SubmitButton: React.FC<SubmitButtonProps> = ({numberOfSongs, tempo, genres, setValue}) => {
  return (
    <Button onClick={e => callPlaylistApi(numberOfSongs, tempo, genres, setValue)}>
      <h1>Submit</h1>
    </Button>
  );
};