import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Box } from "rebass";

const FrontMatter = ({ image }) => {
  return (
    <Box width={1 / 3}>
      <Img fluid={image.childImageSharp.fluid} alt="" />
    </Box>
  );
};

FrontMatter.PropTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string,
};

export default FrontMatter;
