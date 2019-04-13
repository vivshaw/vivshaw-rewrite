import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import "../styles/global.scss";

const SectionContent = styled.div`
  padding: 2em;
  max-width: 1000px;
  margin: auto;
`;

const LeadSectionContent = styled(SectionContent)`
  border: 10px solid white;
  transform: skew(-5deg) rotate(2deg);

  h2 {
    transform: skew(5deg) rotate(-2deg) translateX(3%);
  }
`;

const RslashSection = styled.section`
  padding-top: 8em;
  padding-bottom: 5em;
  position: relative;
  z-index: 2;

  &:before {
    background: inherit;
    top: 0;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(2deg);
    transform-origin: 100%;
    z-index: -1;
  }

  &:after {
    background: inherit;
    bottom: 0;
    content: "";
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(-2deg);
    transform-origin: 100%;
    z-index: -1;
  }
`;

const LslashSection = styled.section`
  padding-top: 8em;
  padding-bottom: 5em;
  position: relative;
  z-index: 1;
`;

export default () => {
  return (
    <div>
      <RslashSection className="section has-background-primary">
        <LeadSectionContent>
          <h2 className="is-size-1 has-text-weight-bold has-text-white">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </LeadSectionContent>
      </RslashSection>

      <LslashSection className="section has-background-topoteal">
        <SectionContent className="has-background-white">
          <h2 className="is-size-1 has-text-weight-bold">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </SectionContent>
      </LslashSection>

      <RslashSection className="section has-background-primary">
        <SectionContent>
          <h2 className="is-size-1 has-text-weight-bold has-text-white">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </SectionContent>
      </RslashSection>

      <LslashSection className="section has-background-squareyellow">
        <SectionContent className="has-background-white">
          <h2 className="is-size-1 has-text-weight-bold">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </SectionContent>
      </LslashSection>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            modified(formatString: "DD MMMM, YYYY")
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
