import {
  Button
} from "@chakra-ui/react";
import axios from "axios";
import React from 'react';

const API_PING_ENDPOINT: string = 'http://127.0.0.1:5000/ping'

 const callWorkoutApi = () => {
  axios.get(API_PING_ENDPOINT, {
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