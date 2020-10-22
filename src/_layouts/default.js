import React from "react";

import BackgroundImage from "../_includes/background-image";
import BrowserUpgrade from "../_includes/browser-upgrade";
import Footer from "../_includes/footer";
import Header from "../_includes/header";

//FIXME: add navigation-sliding
const Default = ({ children }) => {
  return (
    <>
      <BackgroundImage slant />
      <BrowserUpgrade />
      <Header />
      {/* include navigation-sliding.html */}

      <div id="page-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Default;
