import React from "react";
import styled from "styled-components";
import Link from "../components/Link";

const NavLink = props => <Link color="purple.3" {...props} />;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Header = () => (
  <Nav>
    <NavLink className="tracking-wide" to={"/"}>
      About
    </NavLink>
    <NavLink className="tracking-wide" to={"/"}>
      Blog
    </NavLink>
    <p> </p>
    <NavLink className="tracking-wide" to={"/"}>
      Projects
    </NavLink>
    <NavLink className="tracking-wide" to={"/"}>
      Contact
    </NavLink>
  </Nav>
);

export default Header;
