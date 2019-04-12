import React, { useContext, useEffect } from "react";
import { HeaderContext, actions } from "../../context/appContext";

const NavBurger = () => {
  const { state, dispatch } = useContext(HeaderContext);

  let menuOpen = state.menuOpen;

  useEffect(() => {
    menuOpen = state.menuOpen;
  }, [state.menuOpen]);

  const toggleMenu = () => dispatch({ type: actions.TOGGLE_MENU });

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
