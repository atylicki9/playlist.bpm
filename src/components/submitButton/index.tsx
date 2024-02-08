import {
  Button
} from "@chakra-ui/react";
import axios from "axios";
import { API_WORKOUTS_ENDPOINT} from "../../common/constants";

import { generatePlaylist } from "../../utility/workoutFileUtility";

interface SubmitButtonProps{
  numberOfSongs: number;
  tempo: number;
}

const callPlaylistApi = (numberOfSongs: number, tempo: number) => {
  axios.post(API_WORKOUTS_ENDPOINT, {
    numberOfSongs: numberOfSongs,
    tempo: tempo, 
  })
  .then((response) => {
    console.log(response);
    generatePlaylist(response)
  }, (error) => {
    console.log(error);
  });
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({numberOfSongs, tempo}) => {
  return (
    <Button onClick={e => callPlaylistApi(numberOfSongs, tempo)}>
      <h1>Submit</h1>
    </Button>
  );
};