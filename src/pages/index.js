import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Text, Box, Flex } from "rebass";
import { SocialIcon } from "react-social-icons";

import Section from "../components/Section";
import Link from "../components/Link";

const BlogTitleLink = styled(Link)`
  &:hover {
    color: black;
  }
`;

export default ({ data }) => {
  return (
    <>
      <Section mt={5} maxWidth="500px">
        <Text
          fontFamily="serif"
          fontSize={"18px"}
          lineHeight={"20px"}
          fontWeight={600}
          mb={1}
        >
          Hannah Vivian Shaw
        </Text>

        <Text fontFamily="serif" fontSize={"18px"} fontWeight={400} mb={4}>
          Front-End Engineer
        </Text>

        <Flex mb={4}>
          <SocialIcon
            url="https://github.com/vivshaw"
            style={{ height: 25, width: 25, marginRight: 10 }}
          />
          <SocialIcon
            url="https://twitter.com/vvvivshaw"
            style={{ height: 25, width: 25, marginRight: 10 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/hvivianshaw/"
            style={{ height: 25, width: 25, marginRight: 10 }}
          />
        </Flex>

        <Text
          fontFamily="serif"
          fontSize={"18px"}
          lineHeight={"27px"}
          color="grey.5"
          mb={5}
        >
          Hi, it{"'"}s me. I enjoy building forward-thinking applications for
          the mobile web. Check out my blog below.
        </Text>

        <Text
          fontFamily="sans"
          fontSize={1}
          fontWeight={500}
          color="grey.5"
          mb={4}
        >
          ARTICLES
        </Text>

        <Box>
          {data.blogPosts.edges.map(({ node }) => (
            <Flex mb={2} key={node.id} justifyContent="space-between">
              <Box width="340px">
                <BlogTitleLink to={node.fields.slug}>
                  <Text
                    fontFamily="serif"
                    as="h3"
                    fontWeight={400}
                    color="black"
                    fontSize={3}
                    mb={1}
                  >
                    {node.frontmatter.title}
                  </Text>
                </BlogTitleLink>
              </Box>

              <Text as="aside" fontFamily="mono" fontSize={1} fontWeight={400}>
                <time>{node.frontmatter.date}</time>
              </Text>
            </Flex>
          ))}
        </Box>
      </Section>
    </>
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
