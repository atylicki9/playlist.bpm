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

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <ExerciseMaxInput exercise={"Pushups"} maxValue={100} />
          <ExerciseMaxInput exercise={"Situps"} maxValue={100} />
          <ExerciseMaxInput exercise={"Pullups"} maxValue={100} />
          <PaceMaxInput exercise={"1.5 Mile Run"} />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
