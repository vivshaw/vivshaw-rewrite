import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Box, Text } from "rebass";

import Link from "../components/Link";

const BlogTitleLink = styled(Link)`
  &:hover {
    color: black;
  }
`;

export default ({ data }) => {
  return (
    <Box
      css={`
        max-width: 50rem;
      `}
      mt="15vh"
      mx="auto"
      px="4vw"
    >
      <Text fontFamily="sans" as="h1" fontWeight={500} mb={4}>
        Sometimes I have thoughts about things.
        <br />
        You can read them here.
      </Text>

      {data.blogPosts.edges.map(({ node }) => (
        <Box mb={4} key={node.id}>
          <BlogTitleLink to={node.fields.slug}>
            <Text
              fontFamily="sans"
              as="h3"
              fontWeight={700}
              color="red"
              fontSize={4}
              mb={2}
            >
              {node.frontmatter.title}
            </Text>
          </BlogTitleLink>

          <Text as="aside" fontFamily="serif" mb={2} fontSize={2}>
            <time>{node.frontmatter.date}</time> •{" "}
            {"☕️".repeat(node.timeToRead / 5 + 1)}
            {node.timeToRead.toString()} minute read
          </Text>

          <Text as="p" fontFamily="serif" fontSize={3}>
            {node.frontmatter.blurb || node.excerpt}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export const query = graphql`
  query {
    blogPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            blurb
          }
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;
