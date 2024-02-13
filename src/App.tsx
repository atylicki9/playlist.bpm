import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  extendTheme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { WholeNumberInput } from "./components/wholeNumberInput"
import { SliderInput } from './components/sliderInput';
import { InfoBox } from './components/infoBox';
import { DisclaimerBox } from './components/disclaimerBox';
import { SubmitButton } from './components/submitButton';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFFFFF",
      300: "#1ED760",
      900: "#191414",
    },
  },
})

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
            <SliderInput title={"Tempo (BPM)"} setValue={setTempo}/>
            <SubmitButton numberOfSongs={numberOfSongs} tempo={tempo}/>
          </VStack>
          <DisclaimerBox/>  
        </Grid>
      </Box>
    </ChakraProvider>


  )
}
