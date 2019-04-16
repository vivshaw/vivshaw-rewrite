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
      <h1 className="is-size-3">Here are some things I{"'"}ve worked on.</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogBlurb key={node.id}>
          <h4 className="is-size-4">
            <BlogTitleLink to={node.fields.slug}>
              {node.frontmatter.title}
            </BlogTitleLink>{" "}
            <span className="has-text-grey-light">
              — {node.frontmatter.date}
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
