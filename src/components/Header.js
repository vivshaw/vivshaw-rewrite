import React from "react";
import styled from "styled-components";
import { Text, Flex } from "rebass";

const Nav = styled(Flex)`
  width: 100%;
  max-width: ${props => props.theme.pageWidth};
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid black;
  position: fixed;
  right: 50%;
  transform: translate(50%, 0);
`;

Nav.defaultProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  pt: 1,
  pb: 1,
  as: "nav",
  color: "orange",
  alignItems: "center",
  backgroundColor: "white",
};

const HeadLink = styled(Text)`
  letter-spacing: 0em;
  font-style: italic;
`;

HeadLink.defaultProps = {
  as: "h1",
  fontWeight: 300,
  fontSize: "17px",
  lineHeight: 20 / 17,
  fontFamily: "IBM Plex Mono",
};

const Dot = props => (
  <Text
    {...props}
    as="h1"
    fontWeight={400}
    fontSize="30px"
    lineHeight={20 / 17}
    fontFamily="IBM Plex Mono"
  ></Text>
);

const Header = () => (
  <Nav>
    <Dot>•</Dot>
    <HeadLink>vivshaw.net</HeadLink>
  </Nav>
);

export default Header;
