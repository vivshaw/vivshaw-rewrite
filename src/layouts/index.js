import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import BaseStyles from "../styles/BaseStyles";
import Header from "../components/Header";
import Logo from "../components/Logo";
import SEO from "../components/seo";

import theme from "../styles/theme";

const Page = styled.div``;

const Main = styled.main`
  padding: 0 6vw;

  @media (min-width: 600px) {
    width: 80vw;
    padding: 0 4vw;
    margin-left: 8vw;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <BaseStyles />
      <SEO title="Hi!" />

      <Header />

      <Main>
        <Logo />
        {children}
      </Main>
    </Page>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
