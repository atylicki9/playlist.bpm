import {
  Button
} from "@chakra-ui/react";
import axios from "axios";
import { API_WORKOUTS_ENDPOINT} from "../../common/constants";

import { generateWorkoutFile } from "../../utility/workoutFileUtility";

interface SubmitButtonProps{
  pushups: number;
  situps: number;
  pullups: number;
  runTime: number;
  swimTime: number;
}

const callWorkoutApi = (pushups: number, situps: number, pullups: number, runTime: number, swimTime: number) => {
  axios.post(API_WORKOUTS_ENDPOINT, {
    pushupsMax: pushups,
    situpsMax: situps, 
    pullupsMax: pullups,
    runTime: runTime,
    swimTime: swimTime
  })
  .then((response) => {
    console.log(response);
    generateWorkoutFile(response)
  }, (error) => {
    console.log(error);
  });
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({pushups, situps, pullups, runTime, swimTime}) => {
  return (
    <Button onClick={e => callWorkoutApi(pushups, situps, pullups, runTime, swimTime)}>
      <h1>Submit</h1>
    </Button>
  );
};