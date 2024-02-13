import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark } from "@chakra-ui/react";
import React, { useState } from 'react';

interface PaceMaxInputProps{
  title: string;
  setValue(value: number): void;
}


export const SliderInput: React.FC<PaceMaxInputProps> = ({title, setValue}) => {
  const [sliderValue, setSliderValue] = useState(150)
  return (
    <Box display={"inline"} alignItems="center" width={"50%"}>
      <h2>{title}</h2>
      <Slider
        marginTop={30}
        defaultValue={150}
        min={0}
        max={300}
        step={1}
        onChange={(value) => {
          setValue(value);
          setSliderValue(value);
        }}
      >
        <SliderTrack>
          <SliderFilledTrack bg={"brand.300"} />
        </SliderTrack>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}
        </SliderMark>
        <SliderThumb />
      </Slider>
    </Box>
  );
};