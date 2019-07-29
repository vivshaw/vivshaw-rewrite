import React from "react";
import styled from "styled-components";

const CenteredFooter = styled.footer`
  text-align: center;
  flex-shrink: 0;
  font-family: "Rubik";
  font-weight: 500;
`;

const Footer = () => (
  <CenteredFooter>
    Built with{" "}
    <span role="img" aria-label="heart emoji">
      ♥
    </span>
    ️ on the <a href="https://jamstack.org/">JAMStack</a>
  </CenteredFooter>
);

export default Footer;
