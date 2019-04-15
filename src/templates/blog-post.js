import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import TOC from "../components/TOC";

const PostWrap = styled.div`
  padding-top: 1em;
`;

const PostTitle = styled.h1`
  margin-bottom: 1em;
`;

const Content = styled.div`
  p:first-of-type {
    font-size: 1.25em;

    //FIXME: Add highlight after intro para;
  }
`;

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, toc },
    tableOfContents,
  } = data.markdownRemark;

  return (
    <PostWrap>
      <PostTitle className="is-size-3">{title}</PostTitle>

      {toc && <TOC contentHtml={tableOfContents} />}

      <Content className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </PostWrap>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        toc
      }
      tableOfContents(maxDepth: 2)
    }
  }
`;
