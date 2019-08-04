import React from "react";
import { Link as BaseLink } from "gatsby";
import { Link as RebassLink } from "rebass";

const Link = props => (
  <RebassLink
    {...props}
    css={`
      text-decoration: none;
      color: inherit;

      &:hover {
        color: #000;
      }
    `}
    as={BaseLink}
  />
);

export default Link;
