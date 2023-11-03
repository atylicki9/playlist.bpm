import {
  Box, Heading
} from "@chakra-ui/react";
import React from 'react';

const title: string = "Navy Seal Workout Generator"
const subtitleOne: string = "Generate a custom Navy Seal Training Workout Plan to help get you ready for BUD/S!"
const subtitleTwo: string = "Input your max reps/times for the following workouts and click 'submit.'"
export const InfoBox = () => {
  return (
    <Box display={"inline"} alignItems="center">
      <Heading fontWeight={"bold"}>{title}</Heading>
      <p>{subtitleOne}</p>
      <p>{subtitleTwo}</p>
    </Box>
  );
};