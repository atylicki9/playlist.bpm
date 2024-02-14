import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  extendTheme,
  Heading,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { WholeNumberInput } from "./components/wholeNumberInput"
import { SliderInput } from './components/sliderInput';
import { InfoBox } from './components/infoBox';
import { DisclaimerBox } from './components/disclaimerBox';
import { SubmitButton } from './components/submitButton';
import MusicGenreSelector from './components/genreSelectionButtons';
import { possibleGenres } from './common/constants';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFFFFF",
      300: "#1ED760",
      900: "#191414",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "brand.900",
      },
    },
  },
})

export const App: React.FC = () => {
  const [numberOfSongs, setNumberOfSongs] = useState(0)
  const [tempo, setTempo] = useState(150)
  const [genres, setGenres]= useState([] as string[])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Box color={"brand.300"} justifySelf="flex-end">
            <Heading size={"small"}>[playlist.bpm] via Spotify</Heading>
          </Box>
          <VStack spacing={8}>
            <InfoBox/>
            <WholeNumberInput title={"Number of Songs"} maxValue={100} setValue={setNumberOfSongs}/>
            <SliderInput title={"Tempo (BPM)"} setValue={setTempo}/>
            <MusicGenreSelector genres={possibleGenres} setValue={setGenres}/>
            <SubmitButton numberOfSongs={numberOfSongs} tempo={tempo} genres={genres}/>
          </VStack>
          <DisclaimerBox/>  
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
