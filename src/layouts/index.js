import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import BaseStyles from "../styles/BaseStyles";
import SEO from "../components/seo";
import Header from "../components/Header";

import theme from "../styles/theme";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <BaseStyles />
      <SEO title="Blog" />

      <Header />

      <Main>{children}</Main>
    </Page>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
