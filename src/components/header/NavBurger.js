import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context";
import { TOGGLE_MENU } from "../../context/actions";

const NavBurger = () => {
  const { state, dispatch } = useContext(AppContext);

  let menuOpen = state.menuOpen;

  useEffect(() => {
    menuOpen = state.menuOpen;
  }, [state.menuOpen]);

  const toggleMenu = () => dispatch({ type: TOGGLE_MENU });

  return (
    <button
      className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
      aria-label="menu"
      aria-expanded="false"
      data-target="header-menu"
      onClick={toggleMenu}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  );
};

export default NavBurger;
