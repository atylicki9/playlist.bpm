import {
  Button
} from "@chakra-ui/react";
import axios from "axios";
import { API_PLAYLISTS_ENDPOINT } from "../../common/constants";

import { generatePlaylist } from "../../utility/workoutFileUtility";
import getAuthInfo from "../../utility/authUtility";

interface SubmitButtonProps{
  numberOfSongs: number;
  tempo: number;
  genres: string[];
  setValue: ((songs: any) => void);
}

const callPlaylistApi = (numberOfSongs: number, tempo: number, genres: string[], setValue: ((songs: any) => void)) => {

  getAuthInfo();

  axios.post(API_PLAYLISTS_ENDPOINT, {
    numberOfSongs: numberOfSongs,
    tempo: tempo, 
    genres: genres.toString().toLowerCase(),
    token: localStorage.getItem("access_token")
  })
  .then((response) => {
    console.log(response);
    generatePlaylist(response);
    setValue(response.data.recommendations.tracks.map((song: any) => song.name));
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