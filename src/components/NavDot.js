import React from "react";
import { Text } from "rebass";

const NavDot = props => (
  <Text
    {...props}
    as="h1"
    fontWeight={400}
    fontSize="30px"
    lineHeight={20 / 17}
    fontFamily="IBM Plex Mono"
  >
    •
  </Text>
);

export default NavDot;
