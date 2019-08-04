import React from "react";
import { Flex, Text } from "rebass";

import Nav from "./Nav";
import Link from "../Link";

const NavLink = props => (
  <Link to={props.to}>
    <Text
      {...props}
      fontFamily="sans"
      fontWeight={600}
      fontSize={1}
      letterSpacing={2}
    />
  </Link>
);

const Header = props => (
  <Flex
    {...props}
    css={`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 99;
    `}
    flexDirection="row"
    justifyContent="space-around"
    pt={3}
    mb={"4vw"}
    px={"4vw"}
    as="header"
    color="blue"
    alignItems="center"
  >
    <Nav>
      <NavLink to="/blog/">JOURNAL</NavLink>
      <NavLink to="/work/">PORTFOLIO</NavLink>
      <NavLink to="/">ABOUT</NavLink>
    </Nav>
  </Flex>
);

export default Header;
