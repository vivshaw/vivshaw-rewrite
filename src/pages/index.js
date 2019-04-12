import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";

import "../styles/global.scss";
import styles from "./index.module.scss";

export default () => {
  return (
    <Layout>
      <section
        className={`section has-background-primary ${styles.introSection} ${
          styles.rslashSection
        } `}
      >
        <div className={styles.sectionContent}>
          <h2 className="is-size-1 has-text-weight-bold has-text-white">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </div>
      </section>

      <section
        className={`section has-background-topoteal ${styles.lslashSection} `}
      >
        <div className={styles.sectionContent}>
          <h2 className="is-size-1 has-text-weight-bold">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </div>
      </section>

      <section
        className={`section has-background-primary ${styles.rslashSection} `}
      >
        <div className={styles.sectionContent}>
          <h2 className="is-size-1 has-text-weight-bold has-text-white">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </div>
      </section>

      <section
        className={`section has-background-squareyellow ${
          styles.lslashSection
        } `}
      >
        <div className={styles.sectionContent}>
          <h2 className="is-size-1 has-text-weight-bold">
            Hi! I{`'`}m <em>Hannah Vivian Shaw</em>. I{`'`}m a developer working
            mainly in <em>Javascript</em> & <em>Java</em>. I{`'`}m into the{" "}
            <em>React/Redux</em> ecosystem, functional programming, and machine
            learning.
          </h2>
        </div>
      </section>
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
