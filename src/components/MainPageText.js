import React from "react";
import { Text } from "rebass";

const MainPageText = props => (
  <Text
    {...props}
    css={`
      max-width: 45rem;
    `}
    fontSize={[5, 7, 8]}
    lineHeight={[1, 1]}
    letterSpacing={-1}
    fontFamily="sans"
    as="h1"
    fontWeight={700}
    color="white"
    textAlign="left"
    mt={1}
    mx={1}
  />
);

export default MainPageText;
