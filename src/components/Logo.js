import React from "react";
import { Box, Text } from "rebass";

const Logo = () => (
  <Box
    css={`
      background-color: transparent;
    `}
    mt={5}
  >
    <Text fontFamily="sans" fontSize={2} fontWeight="600" textAlign="left">
      vivshaw.net
    </Text>
  </Box>
);

export default Logo;
