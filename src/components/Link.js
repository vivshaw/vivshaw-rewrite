import { Link as BaseLink } from "gatsby";
import styled from "styled-components";
import { color } from "styled-system";

const Link = styled(BaseLink)`
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

export default Link;
