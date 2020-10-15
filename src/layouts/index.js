import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import BaseStyles from "../styles/BaseStyles";
import SEO from "../components/seo";

import theme from "../styles/theme";

const Page = styled.div``;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <BaseStyles />
      <SEO title="Hi!" />

      {children}
    </Page>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
