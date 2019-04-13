import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../components/header/Header";
import Footer from "../components/Footer";

import { HeaderContextProvider } from "../context/appContext";

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
      <Fragment>
        <HeaderContextProvider>
          <Header siteTitle={data.site.siteMetadata.title} />
        </HeaderContextProvider>

        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
