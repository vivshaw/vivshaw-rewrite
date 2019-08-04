import React from "react";
import { Flex, Text } from "rebass";

import MainPageText from "../components/MainPageText";

const IndexUI = () => (
  <>
    <Text
      css={`
        position: absolute;
        left: 0;
        top: 50%;
        transform: rotate(-90deg) translate(-50%, 0%);
        transform-origin: left top;
      `}
      fontFamily="sans"
      fontWeight={600}
      fontSize={1}
      letterSpacing={2}
      color="blue"
      pt={3}
    >
      MAKING THE INTERNET A LITTLE BIT WEIRDER
    </Text>

    <Flex
      css={`
        position: absolute;
        right: 0;
        top: 50%;
        transform: rotate(90deg) translate(50%, 0%);
        transform-origin: right top;
      `}
      flexDirection="row"
    >
      <Text
        fontFamily="sans"
        fontWeight={600}
        fontSize={1}
        letterSpacing={2}
        color="blue"
        pt={3}
        mr={6}
      >
        HIRE ME
      </Text>
      <Text
        fontFamily="sans"
        fontWeight={600}
        fontSize={1}
        letterSpacing={2}
        color="blue"
        pt={3}
      >
        SAY HELLO
      </Text>
    </Flex>
  </>
);

export default props => {
  return (
    <>
      <Flex
        {...props}
        css={`
          height: 100vh;
          flex-shrink: 0;
        `}
        width="100vw"
        alignItems="center"
        justifyContent="space-around"
      >
        <IndexUI />
        <MainPageText>
          Hannah Vivian Shaw is a <em>Vermont</em>-based, <em>React</em>-loving
          front-end engineer.
        </MainPageText>
      </Flex>
    </>
  );
};
