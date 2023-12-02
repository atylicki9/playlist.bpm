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
    setPace(value: number): void
  }
  
  export const PaceMaxInput: React.FC<PaceMaxInputProps> = ({exercise, setPace}) => {
    return (
      <Box display={"flex"} alignItems="center">
        <h2>{exercise} (minutes)</h2>
        <NumberInput 
        step={.25} 
        defaultValue={10} 
        min={0} max={20} 
        paddingLeft={5}
        onChange={(valueString) => setPace(parseInt(valueString)) }>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    );
  };