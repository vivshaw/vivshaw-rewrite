import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const FrontMatter = ({ title, blurb, date, image }) => {
  return (
    <div className="flex flex-row">
      <div className="mt-8 mb-8">
        <div className="mb-16 frontmatter">
          <h6 className="text-l font-sans tracking-widest uppercase text-green-500 mb-2">
            X minute read
          </h6>
          <h6 className="text-l font-sans tracking-widest uppercase text-green-500 mb-4">
            {date}
          </h6>
        </div>

        <h1 className="text-4xl font-serif tracking-wide font-medium">
          {title}
        </h1>

        {blurb && (
          <h2 className="text-4xl font-serif tracking-wide font-medium">
            {blurb}
          </h2>
        )}
      </div>
      <Img fluid={image.childImageSharp.fluid} alt="" className="mb-2 w-full" />
    </div>
  );
};

FrontMatter.PropTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string,
};

export default FrontMatter;
