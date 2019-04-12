import React, { useContext, useEffect } from "react";

import NavLink from "./NavLink";
import NavBurger from "./NavBurger";
import WebBrand from "./WebBrand";

import { HeaderContext } from "../../context/appContext";

import styles from "./Header.module.scss";

const Header = () => {
  const { state } = useContext(HeaderContext);

  let menuOpen = state.menuOpen;

  useEffect(() => {
    menuOpen = state.menuOpen;
  }, [state.menuOpen]);

  return (
    <nav
      className={`${styles.slantNav} navbar is-fixed-top`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <WebBrand />
        <NavBurger />
      </div>

      <div
        id="header-menu"
        className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
      >
        <div className="navbar-start" />

        <div className="navbar-end is-size-5">
          <NavLink to="/">HOME</NavLink>

          <NavLink to="/blog">BLOG</NavLink>

          <NavLink to="/work">WORK</NavLink>

          <NavLink to="/">ABOUT</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
