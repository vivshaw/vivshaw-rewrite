import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import FrontMatter from "./FrontMatter";

const MarkdownBlock = styled.article`
  font-family: "Spectral";
  margin-left: 4vw;
  margin-right: 4vw;
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
`;

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, blurb, date, image },
  } = data.markdownRemark;

  return (
    <>
      <div>
        <FrontMatter title={title} blurb={blurb} date={date} image={image} />
      </div>

      <div>
        <MarkdownBlock dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        blurb
        date(formatString: "DD MMMM, YYYY")
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
