import {
    Box,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
  } from "@chakra-ui/react";
  import React from 'react';
  
  interface PaceMaxInputProps{
    exercise: string;
  }
  
  export const PaceMaxInput: React.FC<PaceMaxInputProps> = ({exercise}) => {
    return (
      <Box display={"flex"} alignItems="center">
        <h2>{exercise}</h2>
        <NumberInput step={.25} defaultValue={10} min={0} max={20} paddingLeft={5}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    );
  };