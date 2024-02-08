import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { WholeNumberInput } from "./components/wholeNumberInput"
import { PaceMaxInput } from './components/paceMaxInput';
import { InfoBox } from './components/infoBox';
import { DisclaimerBox } from './components/disclaimerBox';
import { SubmitButton } from './components/submitButton';

export const App: React.FC = () => {
  const [numberOfSongs, setNumberOfSongs] = useState(0)
  const [situpsMax, setSitupsMax] = useState(0)
  const [pullupsMax, setPullupsMax] = useState(0)
  const [runPace, setRunPace] = useState(0)
  const [swimPace, setSwimPace] = useState(0)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <InfoBox/>
            <WholeNumberInput title={"Number of Songs"} maxValue={100} setValue={setNumberOfSongs}/>
            <ExerciseMaxInput exercise={"Situps"} maxValue={100} setMaxReps={setSitupsMax}/>
            <ExerciseMaxInput exercise={"Pullups"} maxValue={100} setMaxReps={setPullupsMax}/>
            <PaceMaxInput exercise={"1.5 Mile Run"} setPace={setRunPace}/>
            <PaceMaxInput exercise={"500 Yard Swim"} setPace={setSwimPace}/>
            <SubmitButton pushups={pushupsMax} situps={situpsMax} pullups={pullupsMax} runTime={runPace} swimTime={swimPace}/>
          </VStack>
          <DisclaimerBox/>  
        </Grid>
      </Box>
    </ChakraProvider>


  )
}
