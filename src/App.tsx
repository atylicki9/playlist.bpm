import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ExerciseMaxInput } from "./components/exerciseMaxInput"
import { PaceMaxInput } from './components/paceMaxInput';
import { InfoBox } from './components/infoBox';
import { DisclaimerBox } from './components/disclaimerBox';
import { SubmitButton } from './components/submitButton';

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <InfoBox/>
          <ExerciseMaxInput exercise={"Pushups"} maxValue={100} />
          <ExerciseMaxInput exercise={"Situps"} maxValue={100} />
          <ExerciseMaxInput exercise={"Pullups"} maxValue={100} />
          <PaceMaxInput exercise={"1.5 Mile Run"} />
          <PaceMaxInput exercise={"500 Yard Swim"} />
          <SubmitButton/>
        </VStack>
        <DisclaimerBox/>  
      </Grid>
    </Box>
  </ChakraProvider>
)
