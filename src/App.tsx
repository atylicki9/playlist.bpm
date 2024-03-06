import React, { useEffect, useState } from 'react';
import {
  Button, 
  ChakraProvider,
  Box,
  VStack,
  Grid,
  extendTheme,
  Heading,
} from "@chakra-ui/react"
import { WholeNumberInput } from "./components/wholeNumberInput"
import { SliderInput } from './components/sliderInput';
import { InfoBox } from './components/infoBox';
import { GenerateTrackListButton } from './components/generateTrackListButton';
import MusicGenreSelector from './components/genreSelectionButtons';
import { possibleGenres } from './common/constants';
import { Song } from './components/generateTrackListButton';
import SongList from './components/trackList';
import { TextInput } from './components/textInput';
import GeneratePlaylistButton from './components/generatePlaylistButton';
import getAuthInfo, { getAccessTokenFromCode } from './utility/authUtility';
import {getUserInfo } from './utility/userInfoUtility';

const theme = extendTheme({
  colors: {
    brand: {
      "White": "#FFFFFF",
      "Green": "#1ED760",
      "Black": "#191414",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "brand.Black",
      },
    },
  },
})

export const App: React.FC = () => {
  const [playlistName, setPlaylistName] = useState("")
  const [numberOfSongs, setNumberOfSongs] = useState(0)
  const [tempo, setTempo] = useState(150)
  const [genres, setGenres]= useState([] as string[])
  const [songs, setSongs] = useState([] as Song[])
  const [accessToken, setAccessToken] = useState("")
  const [currentUserId, setCurrentUserId] = useState("")

  const handleSpotifyConnect = () => {
    getAuthInfo();

  } 
  
  useEffect(() => {
    if(!localStorage.getItem("access_token")) {
      getAccessTokenFromCode();
      console.log("Access token found");
      setAccessToken(localStorage.getItem("access_token") || "");
    }
    else {
      setAccessToken(localStorage.getItem("access_token") || "");
      getUserInfo().then((id) => {
        console.log(id);
        setCurrentUserId(id);
      }).catch((error) => {
        console.log(error);
        localStorage.removeItem("access_token");
      });
    }
  });

  return (
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" p={3}>
        <Box color={"brand.Green"} justifySelf="flex-end">
          <Heading size={"small"}>[playlist.bpm] via Spotify</Heading>
        </Box>
        {!accessToken && (
          <Button onClick={handleSpotifyConnect} mx="auto" w="50%">
            Connect to Spotify
          </Button>
        )}
        {accessToken && (
          <VStack spacing={8}>
            <InfoBox />
            <TextInput title={"PlaylistName"} setValue={setPlaylistName} />
            <WholeNumberInput
              title={"Number of Songs"}
              maxValue={100}
              setValue={setNumberOfSongs}
            />
            <SliderInput title={"Tempo (BPM)"} setValue={setTempo} />
            <MusicGenreSelector genres={possibleGenres} setValue={setGenres} />
            <GenerateTrackListButton
              numberOfSongs={numberOfSongs}
              tempo={tempo}
              genres={genres}
              setValue={setSongs}
            />
            <SongList songs={songs} />
            <GeneratePlaylistButton playlistName={playlistName} songs={songs} userId ={currentUserId} />
          </VStack>
        )}
      </Grid>
    </ChakraProvider>
  );
}
