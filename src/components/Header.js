import React from "react";
import { Flex } from "rebass";

import NavBrand from "./NavBrand";
import NavDot from "./NavDot";

const Header = props => (
  <Flex
    {...props}
    css={`
      max-width: ${props => props.theme.pageWidth};
      border-bottom: 1px solid black;
      position: fixed;
      right: 50%;
      transform: translate(50%, 0);
    `}
    flexDirection="row"
    justifyContent="space-between"
    py={1}
    mx="auto"
    width={1}
    as="nav"
    color="orange"
    alignItems="center"
    backgroundColor="white"
  >
    <NavDot />
    <NavBrand>vivshaw.net</NavBrand>
  </Flex>
);

export default Header;
