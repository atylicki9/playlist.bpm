import React, { useState } from 'react';
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

const [pushups, setPushups] = useState(0);
const [situps, setSitups] = useState(0);
const [pullups, setPullups] = useState(0);
const [run, setRun] = useState(0);
const [swim, setSwim] = useState(0);

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <InfoBox/>
          <ExerciseMaxInput exercise={"Pushups"} maxValue={100} value={pushups}/>
          <ExerciseMaxInput exercise={"Situps"} maxValue={100} value={situps}/>
          <ExerciseMaxInput exercise={"Pullups"} maxValue={100} value={pullups}/>
          <PaceMaxInput exercise={"1.5 Mile Run"} />
          <PaceMaxInput exercise={"500 Yard Swim"} />
          <SubmitButton/>
        </VStack>
        <DisclaimerBox/>  
      </Grid>
    </Box>
  </ChakraProvider>
)
