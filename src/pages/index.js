import React from "react";
import { graphql } from "gatsby";
import "../styles/main.scss";

export default () => {
  return (
    <>
      {/* include background-image.html */}
      <div className="page-lead">
        <div className="page-lead-content">
          <h1>Hannah Vivian Shaw</h1>
          <h2>
            <a href="{{ site.url }}/about/" className="lead-link">
              <em>I{"'"}m a Vermont developer</em>
            </a>{" "}
            working mainly in Javascript &amp; Python. I{"'"}m into the
            React/Redux ecosystem, functional programming, and machine learning.
          </h2>
          <a href="{{ site.url }}/work/" className="btn-inverse">
            See my work
          </a>{" "}
          &nbsp; or &nbsp;{" "}
          <a href="https://github.com/vivshaw/" className="btn-inverse">
            Find me on GitHub
          </a>
        </div>
      </div>

      <div id="page-wrapper">
        {/* include browser-upgrade.html */}

        <div id="main" role="main">
          <div className="wrap">
            <div className="archive-wrap">
              <div className="page-content home-content">{/*{ content }*/}</div>
            </div>
          </div>
        </div>

        {/* include footer.html */}
      </div>
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
