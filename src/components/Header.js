import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { color } from "styled-system";

const VivLink = styled(Link)`
  transition-duration: 1s;
  padding: 40px 50px;
  ${color}
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  &:hover {
    color: #000;
  }
`;

const NavLink = props => <VivLink color="purple.3" {...props} />;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Header = () => (
  <Nav>
    <NavLink color="purple.3" className="tracking-wide" to={"/"}>
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