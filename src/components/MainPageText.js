import React from "react";
import { Text } from "rebass";

const MainPageText = props => (
  <Text
    {...props}
    css={`
      text-align: center;
    `}
    fontSize={[4, 5]}
    fontFamily="sans"
    as="h1"
    fontWeight="normal"
    color="text"
    width={["80%", "78%", "73%"]}
  />
);

export default MainPageText;
