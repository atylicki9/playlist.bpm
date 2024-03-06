import { Box, Text } from "@chakra-ui/react";
import { Song } from "../generateTrackListButton";

interface SongListProps {
    songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
    return (
        <Box>
            {songs.map((song, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                    <Text fontWeight="bold">{song.name} by {song.artist}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default SongList;