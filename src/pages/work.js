import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Box, Text } from "rebass";
import Img from "gatsby-image";

const BlogBlurb = styled.div`
  margin-bottom: 1em;
  margin-top: 1em;
`;

//FIXME: Better color for links, plus move link style into global overrides
const BlogTitleLink = styled(Link)`
  text-decoration: underline;
  color: inherit;
  &:hover {
    background-color: lightpink;
  }
`;

const PortfolioLayout = styled(Masonry)`
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;

  .masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;

export default ({ data }) => {
  return (
    <Box mt="15vh" mx="auto" px="4vw" width={1}>
      <Text fontFamily="sans" as="h1" fontWeight={500} mb={4}>
        Here are some things I{"'"}ve worked on.
      </Text>

      <PortfolioLayout breakpointCols={3} columnClassName="masonry-grid_column">
        {data.workPosts.edges.map(({ node }) => (
          <BlogBlurb key={node.id}>
            <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt="" />

            <Text fontFamily="sans" fontSize={3}>
              <BlogTitleLink to={node.fields.slug}>
                {node.frontmatter.title}
              </BlogTitleLink>{" "}
              <span className="has-text-grey-light">
                — {node.frontmatter.date}
              </span>
            </Text>

            <Text fontFamily="serif" fontSize={2}>
              {node.frontmatter.blurb || node.excerpt}
            </Text>
          </BlogBlurb>
        ))}
      </PortfolioLayout>
    </Box>
  );
};

export const query = graphql`
  query {
    workPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
