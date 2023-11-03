import {
  Box,
  Text
} from "@chakra-ui/react";
import React from 'react';

const disclaimer:string = "DISCLAIMER: Preparation for this training can be equally strenuous. " +
"You should consult a physician before you begin any strenuous exercise program, such as the one described here, " +
"or any diet modification, especially if you have or suspect that you have high blood pressure, diabetes, " +
"or any other adverse medical conditions. If you feel faint or dizzy at any time while performing any portion " +
"of this training program, stop immediately and seek medical evaluation. " +
"The United States Government and any service member, the creator of this website, or civilian employed by the United States Government disclaims " + 
"any liability, personal or professional, resulting from the misapplication of any training procedure, technique, or " +
"guidance described in this guide."

export const DisclaimerBox = () => {
  return (
    <Box display={"flex"} alignItems="center">
      <Text fontSize={10}>{disclaimer}</Text>
    </Box>
  );
};