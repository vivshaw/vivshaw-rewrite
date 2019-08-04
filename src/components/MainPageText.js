import React from "react";
import { Text } from "rebass";

const MainPageText = props => (
  <Text
    {...props}
    css={`
      text-align: center;
    `}
    fontSize={[5, 6, 8]}
    lineHeight={1.25}
    letterSpacing={-2}
    fontFamily="serif"
    as="h1"
    fontWeight="normal"
    width={["80%", "78%", "73%"]}
  />
);

export default MainPageText;
