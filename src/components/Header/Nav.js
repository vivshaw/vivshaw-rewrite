import React from "react";
import { Flex } from "rebass";

const NavLinks = props => (
  <Flex
    {...props}
    flexDirection="row"
    as="nav"
    justifyContent="space-between"
    alignItems="center"
    width={[2 / 3, 1 / 2, 1 / 3]}
  />
);

export default NavLinks;
