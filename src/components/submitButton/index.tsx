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
}

const callPlaylistApi = (numberOfSongs: number, tempo: number, genres: string[]) => {

  getAuthInfo();

  axios.post(API_PLAYLISTS_ENDPOINT, {
    numberOfSongs: numberOfSongs,
    tempo: tempo, 
    genres: genres.toString().toLowerCase(),
    token: localStorage.getItem("access_token")
  })
  .then((response) => {
    console.log(response);
    generatePlaylist(response)
  }, (error) => {
    console.log(error);
  });
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({numberOfSongs, tempo, genres}) => {
  return (
    <Button onClick={e => callPlaylistApi(numberOfSongs, tempo, genres)}>
      <h1>Submit</h1>
    </Button>
  );
};