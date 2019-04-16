import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import TOC from "./TOC";
import FrontMatter from "./FrontMatter";
import PageWrap from "../../components/PageWrap";

const Content = styled.div`
  p:first-of-type {
    font-size: 1.25em;

    //FIXME: Add highlight after intro para;
  }
`;

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, toc, blurb },
    tableOfContents,
  } = data.markdownRemark;

  return (
    <PageWrap>
      <FrontMatter title={title} blurb={blurb} />

      {toc && <TOC contentHtml={tableOfContents} />}

      <Content className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </PageWrap>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        toc
        blurb
      }
      tableOfContents(maxDepth: 2)
    }
  }
`;
