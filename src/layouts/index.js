import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import SEO from "../components/seo";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

import { AppContextProvider } from "../context";

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
        <SEO title="Blog" />
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
        <Footer />
      </AppContextProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
