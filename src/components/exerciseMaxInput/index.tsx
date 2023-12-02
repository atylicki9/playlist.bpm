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
  setMaxReps(value: number): void
}

export const ExerciseMaxInput: React.FC<ExerciseMaxInputProps> = ({exercise, maxValue, setMaxReps}) => {

  return (
    <Box display={"flex"} alignItems="center" >
      <h2>{exercise}</h2>
      <NumberInput 
        step={1} 
        defaultValue={0} 
        min={0} max={maxValue} 
        paddingLeft={5} 
        // pass up value to parent component so that we can set state there 
        onChange={(valueString) => setMaxReps(parseInt(valueString)) }>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};