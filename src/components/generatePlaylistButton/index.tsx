import { Button } from "@chakra-ui/react";
import { Song } from "../submitButton";
import axios from "axios";
import { API_PLAYLISTS_ENDPOINT } from "../../common/constants";

interface GeneratePlaylistButtonProps {
    playlistName: string;
    songs: Song[];
}

const createPlaylist = async (playlistName: string) => {
    axios.post(API_PLAYLISTS_ENDPOINT, {
        name: playlistName,
        token: localStorage.getItem("access_token")
      })
      .then((response) => {
        console.log(response);
        
      }, (error) => {
        console.log(error);
      });
}


const GeneratePlaylistButton: React.FC<GeneratePlaylistButtonProps> = ({
    playlistName,
    songs,
}) => {
    const handleButtonClick = async () => {
        try {
            createPlaylist(playlistName)
        } catch (error) {
            // Handle network or other errors
            console.error("Failed to create playlist", error);
        }
    };

    return (
        <>
            {songs.length > 0 && (
                <Button onClick={handleButtonClick}>
                    Generate Playlist
                </Button>
            )}
        </>
    );
};

export default GeneratePlaylistButton;