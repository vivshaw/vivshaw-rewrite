import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

const Nav = styled.nav``;

const HeadLink = styled(Text)`
  font-family: "Alegreya Sans";
  margin: auto;
  margin-top: 4em;
  font-style: italic;
  letter-spacing: 0.15em;
  max-width: ${props => props.theme.pageWidth};
`;

const Header = () => (
  <Nav>
    <HeadLink color="grey.6">vivshaw.net</HeadLink>
  </Nav>
);

export default Header;
