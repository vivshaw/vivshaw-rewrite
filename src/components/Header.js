import React from "react";
import styled from "styled-components";
import { color } from "styled-system";

const Nav = styled.nav``;

const HeadLink = styled.p`
  font-family: "Alegreya Sans";
  ${color}
  margin-top: 4em;
  font-style: italic;
  letter-spacing: 0.15em;
`;

const Header = () => (
  <Nav>
    <HeadLink className="leftgutter" color="grey.6">
      vivshaw.net
    </HeadLink>
  </Nav>
);

export default Header;
