import { useState } from 'react';
import { Text, Button, ButtonGroup, VStack } from '@chakra-ui/react';

interface MusicGenreSelectorProps{
    genres: string[];
    setValue(value: string[]): void;
}

const MusicGenreSelector: React.FC<MusicGenreSelectorProps> = ({genres, setValue})=> {
    const [selectedGenreButtons, setSelectedGenreButtons] = useState<string[]>([]);

    const handleGenreSelect = (genre: string) => {
        let updatedGenres: string[];
        if (selectedGenreButtons.includes(genre)) {
            updatedGenres = selectedGenreButtons.filter((genre) => genre !== genre);
        } else {
            updatedGenres = [...selectedGenreButtons, genre];
        }
        setSelectedGenreButtons(updatedGenres);
        setValue(updatedGenres);
    };

    return (
        <VStack spacing={4}>
            <Text>Select Genres</Text>
            <ButtonGroup flexWrap={"wrap"} justifyContent="center">
                {genres.map((genre) => (
                    <Button
                        marginTop={4}
                        key={genre}
                        bg={selectedGenreButtons.includes(genre) ? 'brand.Green' : 'gray'}
                        onClick={() => handleGenreSelect(genre)}
                    >
                        {genre}
                    </Button>
                ))}
            </ButtonGroup>
        </VStack>
    );
};

export default MusicGenreSelector;
