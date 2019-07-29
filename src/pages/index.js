import React from "react";
import { graphql } from "gatsby";
import { Flex } from "rebass";

import MainPageText from "../components/MainPageText";

export default props => {
  return (
    <Flex
      {...props}
      css={`
        height: 100vh;
      `}
      width="100vw"
      alignItems="center"
      justifyContent="space-around"
    >
      <MainPageText>
        Hannah is a Vermont-based, React-loving front-end engineer.
      </MainPageText>
    </Flex>
  );
};

export const query = graphql`
  query {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
