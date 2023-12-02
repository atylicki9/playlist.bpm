import {
  Button
} from "@chakra-ui/react";
import axios from "axios";

const API_WORKOUTS_ENDPOINT: string = 'http://127.0.0.1:5000/workouts'

interface SubmitButtonProps{
  pushups: number;
  situps: number;
  pullups: number;
  runTime: number;
  swimTime: number;
}

const callWorkoutApi: any = (pushups: number, situps: number, pullups: number, runTime: number, swimTime: number) => {
  axios.post(API_WORKOUTS_ENDPOINT, {
    pushupsMax: pushups,
    situpsMax: situps, 
    pullupsMax: pullups,
    runTime: runTime,
    swimTime: swimTime
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({pushups, situps, pullups, runTime, swimTime}) => {
  return (
    <Button onClick={callWorkoutApi(pushups, situps, pullups, runTime, swimTime)}>
      <h1>Submit</h1>
    </Button>
  );
};