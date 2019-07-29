import React from "react";
import { Flex } from "rebass";

const NavLinks = props => (
  <Flex
    {...props}
    css={`
      & a {
        padding-right: 16px;
      }

      & a:last-child {
        padding-right: 0px;
      }
    `}
    flexDirection="row"
    as="nav"
    alignItems="center"
  />
);

export default NavLinks;
