import { Button, useToast } from "@chakra-ui/react";
import { Song } from "../submitButton";
import axios from "axios";
import { API_CREATE_PLAYLISTS_ENDPOINT, API_ADD_TRACKS_TO_PLAYLISTS_ENDPOINT} from "../../common/constants";


interface GeneratePlaylistButtonProps {
    playlistName: string;
    songs: Song[];
}

const createPlaylist = async (playlistName: string, songs: Song[]) => {
    axios.post(API_CREATE_PLAYLISTS_ENDPOINT, {
        playlistName: playlistName,
        token: localStorage.getItem("access_token")
    })
    .then((response) => {
        addTracksToPlaylist(response.data.message.id, songs.map(song => "spotify:track:"+song.id));
    }, (error) => {
        console.log(error);
    });
}

const addTracksToPlaylist = async (playlistId: string, songIds: string[]) => {
    axios.post(API_ADD_TRACKS_TO_PLAYLISTS_ENDPOINT, {
        playlistId: playlistId,
        songIds: songIds,
        token: localStorage.getItem("access_token")
    }).catch((error) => {
        console.log(error);
    });
}

const GeneratePlaylistButton: React.FC<GeneratePlaylistButtonProps> = ({
    playlistName,
    songs,
}) => {
    const toast = useToast();
    const handleButtonClick = async () => {
        try {
            toast.promise(createPlaylist(playlistName, songs), {
                success: { title: 'Success!', description: 'Your playlist has been generated.' },
                error: { title: 'Error!', description: 'Unable to generate playlist at this time. ' },
                loading: { title: 'Loading', description: 'Playlist Generating....' },
              })
        } catch (error) {
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