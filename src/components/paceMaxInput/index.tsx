import {
    Box,
    Input
  } from "@chakra-ui/react";
  import React from 'react';
  
  interface PaceMaxInputProps{
    exercise: string;

  }
  
  export const PaceMaxInput: React.FC<PaceMaxInputProps> = ({exercise}) => {
    return (
      <Box display={"flex"} alignItems="center">
        <h2>{exercise}</h2>
        <Input
          type={""}
        />
      </Box>
    );
  };