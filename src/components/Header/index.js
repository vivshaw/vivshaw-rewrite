import React from "react";
import { Flex, Text } from "rebass";

import HeaderBrand from "./HeaderBrand";
import Nav from "./Nav";
import Link from "../Link";

const NavLink = props => (
  <Link to={props.to}>
    <Text {...props} fontFamily="sans" />
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
    justifyContent="space-between"
    pt={"4vw"}
    mb={"4vw"}
    px={"4vw"}
    as="header"
    color="text"
    alignItems="center"
  >
    <Link to="/">
      <HeaderBrand>Hannah Shaw</HeaderBrand>
    </Link>
    <Nav>
      <NavLink to="/blog/">Blog</NavLink>
      <NavLink to="/work/">Work</NavLink>
      <NavLink to="/">About</NavLink>
    </Nav>
  </Flex>
);

export default Header;
