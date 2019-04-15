import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import NavLink from "./NavLink";
import NavBurger from "./NavBurger";
import WebBrand from "./WebBrand";

import { AppContext } from "../../context/";

const NavBar = styled.nav`
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%);
  padding-bottom: 1em;
`;

const Header = () => {
  const { state } = useContext(AppContext);

  let menuOpen = state.menuOpen;

  useEffect(() => {
    menuOpen = state.menuOpen;
  }, [state.menuOpen]);

  return (
    <NavBar className="navbar" role="navigation" aria-label="main navigation">
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
        </div>
      </div>
    </NavBar>
  );
};

export default Header;
