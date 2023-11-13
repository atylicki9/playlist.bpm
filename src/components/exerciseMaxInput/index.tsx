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
  value: number;
}

export const ExerciseMaxInput: React.FC<ExerciseMaxInputProps> = ({exercise, maxValue, value}) => {
  return (
    <Box display={"flex"} alignItems="center">
      <h2>{exercise}</h2>
      <NumberInput 
        step={1} 
        defaultValue={0} 
        min={0} 
        max={maxValue} 
        paddingLeft={5}
        value={value}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};