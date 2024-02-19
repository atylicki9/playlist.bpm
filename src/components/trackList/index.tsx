import { Box, Text } from "@chakra-ui/react";

interface Song {
    name: string;
    artist: string;
    album: string;
}

interface SongListProps {
    songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
    return (
        <Box>
            {songs.map((song, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                    <Text fontWeight="bold">{song.name}</Text>
                    <Text>{song.artist}</Text>
                    <Text>{song.album}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default SongList;