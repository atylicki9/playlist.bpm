import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Song } from "../submitButton";

interface GeneratePlaylistButtonProps {
    playlistName: string;
    songs: Song[];
}

const GeneratePlaylistButton: React.FC<GeneratePlaylistButtonProps> = ({
    playlistName,
    songs,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = async () => {
        setIsLoading(true);

        try {
            // Call the backend API to create the Spotify playlist
            const response = await fetch("/api/createPlaylist", {
                method: "POST",
                body: JSON.stringify({ playlistName, songs }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                // Playlist created successfully
                console.log("Playlist created!");
            } else {
                // Handle error response from the backend
                console.error("Failed to create playlist");
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Failed to create playlist", error);
        }

        setIsLoading(false);
    };

    return (
        <>
            {songs.length > 0 && (
                <Button onClick={handleButtonClick} isLoading={isLoading}>
                    Generate Playlist
                </Button>
            )}
        </>
    );
};

export default GeneratePlaylistButton;