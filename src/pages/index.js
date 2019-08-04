import React from "react";
import { Flex } from "rebass";

import MainPageText from "../components/MainPageText";

export default props => {
  return (
    <Flex
      {...props}
      css={`
        height: 100vh;
      `}
      width="100vw"
      alignItems="center"
      justifyContent="space-around"
    >
      <MainPageText>
        Hannah is a <em>Vermont</em>-based, <em>React</em>-loving front-end
        engineer.
      </MainPageText>
    </Flex>
  );
};
