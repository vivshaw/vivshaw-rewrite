import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styledSanitize from "styled-sanitize";

import SEO from "../components/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { AppContextProvider } from "../context";
import theme from "../styles/theme";

const BaseStyles = createGlobalStyle`
  ${styledSanitize}

  body {
    padding: 0;
  }
`;

const Layout = ({ children }) => (
  <AppContextProvider>
    <ThemeProvider theme={theme}>
      <div className="flex flex-col min-h-screen">
        <BaseStyles />
        <SEO title="Blog" />
        <Header />

        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  </AppContextProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
