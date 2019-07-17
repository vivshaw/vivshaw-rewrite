import React from "react";
import { Text } from "rebass";

const NavBrand = props => (
  <Text
    {...props}
    as="h1"
    fontWeight="300"
    fontSize="17px"
    lineHeight={20 / 17}
    fontFamily="IBM Plex Mono"
    css={`
      font-style: italic;
    `}
  />
);

export default NavBrand;
