import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

const Logo = styled.img`
  width: 2em;
`;

import logo from "../../images/logoblob.svg";

const NavBrand = props => (
  <Box
    {...props}
    css={`
      position: fixed;
      left: 0;
      top: 0;
    `}
    mt={2}
    ml={2}
  >
    <Logo src={logo} alt="vivshaw.net logo" />
  </Box>
);

export default NavBrand;
