import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

import { AppContextProvider } from "../context";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <div className="flex flex-col min-h-screen">
            <SEO title="Blog" />
            <Header siteTitle={data.site.siteMetadata.title} />

            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </AppContextProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
