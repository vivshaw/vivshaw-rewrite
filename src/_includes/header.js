import React from "react";
import Breadcrumbs from "./breadcrumbs";
import Navigation from "./navigation";

const Header = () => (
  <header id="masthead">
    <div className="inner-wrap">
      <Breadcrumbs />
      <Navigation />
    </div>
  </header>
);

export default Header;
