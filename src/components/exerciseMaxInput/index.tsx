import {
  Box,
  NumberDecrementStepper, 
  NumberIncrementStepper, 
  NumberInput, NumberInputField, 
  NumberInputStepper} from "@chakra-ui/react";
import React from 'react';

interface ExerciseMaxInputProps{
  exercise: string;
  maxValue: number;
}

export const ExerciseMaxInput: React.FC<ExerciseMaxInputProps> = ({exercise, maxValue}) => {
  return (
    <Box display={"flex"} alignItems="center">
      <h2>{exercise}</h2>
      <NumberInput step={1} defaultValue={0} min={0} max={maxValue} paddingLeft = {5}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};