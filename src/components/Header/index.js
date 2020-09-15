import React from "react";
import { Flex, Text } from "rebass";
import Link from "../Link";

const NavLink = props => (
  <Link to={props.to}>
    <Text fontWeight={400} {...props} fontFamily="sans" />
  </Link>
);

const Header = props => (
  <Flex
    {...props}
    pt={2}
    as="header"
    color="text"
    backgroundColor="bg"
    alignItems="flex-start"
    justifyContent="space-between"
    css={`
      padding-left: 6vw;
      padding-right: 6vw;

      @media (min-width: 600px) {
        width: 80vw;
        padding-left: 5vw;
        padding-right: 5vw;
        margin-left: 8vw;
      }

      position: fixed;
      top: 0;
      background-color: transparent;
    `}
  >
    <NavLink to="/work/">Work</NavLink>
  </Flex>
);

export default Header;
