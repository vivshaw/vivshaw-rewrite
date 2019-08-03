import React from "react";
import { Box } from "rebass";

const Copy = props => (
  <Box
    {...props}
    css={`
      font-family: "Spectral";
      max-width: 45em;

      p {
        font-size: 18px;
        letter-spacing: -0.72;
        line-height: 28px;
        margin-bottom: 28px;
      }

      h2 {
        font-weight: 500;
        font-family: "Rubik";
        font-size: 24px;
        margin-bottom: 10px;
      }
    `}
  />
);

export default Copy;
