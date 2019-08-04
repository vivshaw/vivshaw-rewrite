import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import BaseStyles from "../styles/BaseStyles";
import SEO from "../components/seo";
import Header from "../components/Header";

import theme from "../styles/theme";
import blobs from "../../static/assets/blobs.svg";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const BackgroundBlobs = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url(${blobs});
  background-size: cover;
  z-index: -100;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Page>
      <BaseStyles />
      <SEO title="Blog" />
      <BackgroundBlobs />
      <Header />

      <Main>{children}</Main>
    </Page>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
