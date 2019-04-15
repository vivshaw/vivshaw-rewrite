import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const PostWrap = styled.div`
  padding-top: 8em;
`;

export default ({ data }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;

  return (
    <PostWrap>
      <h1>{title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </PostWrap>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;
