import React from "react";
import { Flex, Text } from "rebass";
import styled from "styled-components";
import Link from "../components/Link";

const BlogTitleLink = styled(Link)`
  &:hover {
    color: black;
  }
`;

const Logo = () => (
  <Flex
    css={`
      background-color: transparent;
    `}
    mt={5}
  >
    <BlogTitleLink to="/">
      <Text fontFamily="sans" fontSize={2} fontWeight="600" textAlign="left">
        vivshaw.net
      </Text>
    </BlogTitleLink>

    <Text
      fontFamily="sans"
      fontSize={2}
      mx={2}
      fontWeight="600"
      textAlign="left"
    >
      /
    </Text>

    <BlogTitleLink to="/work">
      <Text fontFamily="sans" fontSize={2} fontWeight="600" textAlign="left">
        work
      </Text>
    </BlogTitleLink>
  </Flex>
);

export default Logo;
