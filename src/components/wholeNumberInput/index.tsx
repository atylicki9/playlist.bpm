import {
  Box,
  NumberDecrementStepper, 
  NumberIncrementStepper, 
  NumberInput, NumberInputField, 
  NumberInputStepper} from "@chakra-ui/react";
import React from 'react';

interface ExerciseMaxInputProps{
  title: string;
  maxValue: number;
  setValue(value: number): void;
}

export const WholeNumberInput: React.FC<ExerciseMaxInputProps> = ({title, maxValue, setValue}) => {

  return (
    <Box display={"flex"} alignItems="center" >
      <h2>{title}</h2>
      <NumberInput 
        focusBorderColor={"brand.Green"}
        step={1} 
        defaultValue={0} 
        min={0} max={maxValue} 
        paddingLeft={5} 
        // pass up value to parent component so that we can set state there 
        onChange={(valueString) => setValue(parseInt(valueString)) }>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};