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
        Hannah is a Vermont-based, React-loving front-end engineer.
      </MainPageText>
    </Flex>
  );
};
