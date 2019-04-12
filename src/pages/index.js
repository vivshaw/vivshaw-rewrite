import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";

import "../styles/global.scss";
import "./index.scss";

export default () => {
  return (
    <Layout>
      <div className="slashed-container">
        <section className="section intro-section rslash-section has-background-primary">
          <div className="section-content">
            <h2 className="is-size-1 has-text-weight-bold has-text-white">
              Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer
              working mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m
              into the <em>React/Redux</em> ecosystem, functional programming,
              and machine learning.
            </h2>
          </div>
        </section>

        <section className="section lslash-section has-background-topoteal">
          <div className="section-content">
            <h2 className="is-size-1 has-text-weight-bold">
              Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer
              working mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m
              into the <em>React/Redux</em> ecosystem, functional programming,
              and machine learning.
            </h2>
          </div>
        </section>

        <section className="section third-section rslash-section has-background-primary">
          <div className="section-content">
            <h2 className="is-size-1 has-text-weight-bold has-text-white">
              Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer
              working mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m
              into the <em>React/Redux</em> ecosystem, functional programming,
              and machine learning.
            </h2>
          </div>
        </section>

        <section className="section lslash-section has-background-squareyellow">
          <div className="section-content">
            <h2 className="is-size-1 has-text-weight-bold">
              Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer
              working mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m
              into the <em>React/Redux</em> ecosystem, functional programming,
              and machine learning.
            </h2>
          </div>
        </section>
      </div>
    </Layout>
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
