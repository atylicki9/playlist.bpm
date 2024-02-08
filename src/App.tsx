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
  const [tempo, setTempo] = useState(0)

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <InfoBox/>
            <WholeNumberInput title={"Number of Songs"} maxValue={100} setValue={setNumberOfSongs}/>
            <WholeNumberInput title={"Tempo"} maxValue={100} setValue={setTempo}/>
            <SubmitButton numberOfSongs={numberOfSongs} tempo={tempo}/>
          </VStack>
          <DisclaimerBox/>  
        </Grid>
      </Box>
    </ChakraProvider>


  )
}
