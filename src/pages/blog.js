import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import PageWrap from "../components/PageWrap";

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

export default ({ data }) => {
  return (
    <PageWrap>
      <h1 className="is-size-3">Sometime I have thoughts about things.</h1>

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogBlurb key={node.id}>
          <h4 className="is-size-4">
            <BlogTitleLink to={node.fields.slug}>
              {node.frontmatter.title}
            </BlogTitleLink>{" "}
            <span className="has-text-grey-light">
              — {node.frontmatter.modified}
            </span>
          </h4>
          <p>{node.frontmatter.blurb || node.excerpt}</p>
        </BlogBlurb>
      ))}
    </PageWrap>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { order: DESC, fields: [frontmatter___modified] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            modified(formatString: "DD MMMM, YYYY")
            blurb
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
