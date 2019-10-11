import React from "react";
import { Flex, Box } from "rebass";

import MainPageText from "../components/MainPageText";
/*
const IndexUI = () => (
  <>
    <Text
      css={`
        position: absolute;
        left: 0;
        top: 13%;
        transform: rotate(-90deg) translate(-50%, 0%);
        transform-origin: left top;
      `}
      fontFamily="sans"
      fontWeight={700}
      fontSize={3}
      letterSpacing={0}
      color="vivshawBlue"
      pt={3}
    >
      Hannah Shaw
    </Text>

    <Text
      css={`
        position: absolute;
        right: 0;
        top: 89.5%;
        transform: rotate(90deg) translate(50%, 0%);
        transform-origin: right top;
      `}
      fontFamily="sans"
      fontWeight={700}
      fontSize={3}
      letterSpacing={0}
      color="vivshawBlue"
      pt={3}
    >
      Say Hello
    </Text>
  </>
);
*/

export default props => {
  return (
    <Flex
      css={`
        height: 100vh;
      `}
      alignItems="center"
      justifyContent="space-around"
    >
      <Box
        {...props}
        css={`
          height: calc(100vh - 80px);
          flex-shrink: 0;
        `}
        width={1}
      >
        <MainPageText>
          <span className="hilite">Hannah Vivian Shaw</span> is a Vermont-based,
          React-loving front-end engineer.
        </MainPageText>
      </Box>
    </Flex>
  );
};
