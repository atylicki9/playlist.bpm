import { useState } from 'react';
import { Button, ButtonGroup, VStack } from '@chakra-ui/react';

interface MusicGenreSelectorProps{
    genres: string[];
    setValue(value: string[]): void;
}

const MusicGenreSelector: React.FC<MusicGenreSelectorProps> = ({genres, setValue})=> {
    const [selectedGenreButtons, setSelectedGenreButtons] = useState<string[]>([]);

    const handleGenreSelect = (genre: string) => {
        let updatedGenres: string[];
        if (selectedGenreButtons.includes(genre)) {
            updatedGenres = selectedGenreButtons.filter((g) => g !== genre);
        } else {
            updatedGenres = [...selectedGenreButtons, genre];
        }
        setSelectedGenreButtons(updatedGenres);
        setValue(updatedGenres);
    };

    return (
        <VStack spacing={4}>
            <ButtonGroup>
                {genres.map((genre) => (
                    <Button
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
