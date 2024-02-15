import {
  Box,
  Text
} from "@chakra-ui/react";

const disclaimer:string = "DISCLAIMER: Figure out if i need one of these....."

export const DisclaimerBox = () => {
  return (
    <Box display={"flex"} alignItems="center">
      <Text fontSize={10}>{disclaimer}</Text>
    </Box>
  );
};