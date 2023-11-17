import {
  Button
} from "@chakra-ui/react";
import axios from "axios";

const API_WORKOUTS_ENDPOINT: string = 'http://127.0.0.1:5000/workouts'

 const callWorkoutApi = () => {
  axios.post(API_WORKOUTS_ENDPOINT, {
    pushupsMax: 20,
    situpsMax: 20, 
    pullupsMax: 20,
    runTime: 10.5,
    swimTime: 10.5
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

export const SubmitButton = () => {
  return (
    <Button onClick={callWorkoutApi}>
      <h1>Submit</h1>
    </Button>
  );
};