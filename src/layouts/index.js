import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GoogleFonts from "../styles/GoogleFonts";
import SEO from "../components/seo";

import theme from "../styles/theme";
import "../css/main.scss";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GoogleFonts />
      <SEO title="Hi!" />

      {children}
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
