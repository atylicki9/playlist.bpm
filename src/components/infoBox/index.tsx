import {
  Box, Heading, Text
} from "@chakra-ui/react";
import React from 'react';

const title: string = "[playlist.bpm]";
const subtitleOne: string = "Generate playlists for your workouts based on your desired cadence."
const subtitleTwo: string = "Input your desired BPM and song interests and we'll generate a playlist for you. It's that simple!";
export const InfoBox = () => {
  return (
    <Box display={"inline"} alignItems="center">
      <Heading fontWeight={"bold"} color={"brand.300"}>{title}</Heading>
      <Text>{subtitleOne}</Text>
      <Text>{subtitleTwo}</Text>
    </Box>
  );
};