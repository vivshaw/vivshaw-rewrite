import React from "react";
import { graphql } from "gatsby";

import PortfolioProject from "../../components/PortfolioProject";

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, blurb, image },
  } = data.workPost;

  return (
    <PortfolioProject html={html} title={title} blurb={blurb} image={image} />
  );
};

export const query = graphql`
  query($slug: String!) {
    workPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        blurb
        image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
