import React from "react";
import { Box } from "rebass";

const BlogCopy = props => (
  <Box
    {...props}
    css={`
      font-family: "Spectral";

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
    px={2}
  />
);

export default BlogCopy;
