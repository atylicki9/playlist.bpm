import { useState } from 'react';
import { Button, ButtonGroup, chakra, VStack } from '@chakra-ui/react';

const MusicGenreSelector = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const handleGenreSelect = (genre: string) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    const genres = ['Rock', 'Pop', 'Hip Hop', 'Jazz', 'EDM', 'Metal', 'Classical'];

    return (
        <VStack spacing={4}>
            <ButtonGroup>
                {genres.map((genre) => (
                    <Button
                        key={genre}
                        bg={selectedGenres.includes(genre) ? 'brand.300' : 'gray'}
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