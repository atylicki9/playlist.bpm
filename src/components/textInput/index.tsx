import { Box, Input} from "@chakra-ui/react";
import React, { useState } from 'react';

interface TextInputProps{
  title: string;
  setValue(value: string): void;
}

export const TextInput: React.FC<TextInputProps> = ({title, setValue}) => {
  const [textInputValue, setTextInputValue] = useState("")
  return (
    <Box display={"inline"} alignItems="center" width={"50%"}>
        <h2>{title}</h2>
            <Input
                    marginTop={30}
                    defaultValue={"New Workout Playlist"}
                    min={0}
                    max={300}
                    step={1}
                    onChange={(event) => {
                    const value = event.target.value;
                    setValue(value);
                    setTextInputValue(value);
                    }}
            />
    </Box>
  );
};
