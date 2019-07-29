import React from "react";
import { Link as BaseLink } from "gatsby";
import { Link as RebassLink } from "rebass";

const Link = props => (
  <RebassLink
    {...props}
    css={`
      text-decoration: none;

      &:hover {
        color: #000;
      }
    `}
    as={BaseLink}
    color="text"
  />
);

export default Link;
