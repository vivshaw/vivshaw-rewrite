import React, { Fragment } from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

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
    <Fragment>
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
          <h3 className="is-size-3">
            I have a <em>blog</em> . Here{`'`}s what I{`'`}ve written about
            lately:
          </h3>

          {data.blog.edges.map(({ node }) => (
            <BlogBlurb key={node.id}>
              <h4 className="is-size-4">
                <BlogTitleLink to={node.fields.slug}>
                  {node.frontmatter.title}
                </BlogTitleLink>{" "}
                <span className="has-text-grey-light">
                  — {node.frontmatter.modified}
                </span>
              </h4>
              <p>{node.excerpt}</p>
            </BlogBlurb>
          ))}
        </SectionContent>
      </LslashSection>

      <RslashSection className="section has-background-primary has-text-white">
        <SectionContent>
          <h3 className="is-size-3">
            Here are a few things I{`'`}ve worked on lately:
          </h3>

          {data.work.edges.map(({ node }) => (
            <BlogBlurb key={node.id}>
              <h4 className="is-size-4">
                <BlogTitleLink to={node.fields.slug}>
                  {node.frontmatter.title}
                </BlogTitleLink>{" "}
                <span className="has-text-grey-light">
                  — {node.frontmatter.modified}
                </span>
              </h4>
              <p>{node.excerpt}</p>
            </BlogBlurb>
          ))}
        </SectionContent>
      </RslashSection>

      <LslashSection className="section has-background-squareyellow">
        <SectionContent className="has-background-white">
          <h3 className="is-size-4">
            I{`’`}m a developer from Burlington, Vermont. I{`’`}m an alumna of
            the University of Vermont, with a B.A. in Economics and Philosophy.
            My central interests are in developing modern, data-driven web
            applications, the React/Redux ecosystem, and machine learning.
            Javascript is my home at the moment, although I{`’`}m pretty handy
            with Java and Python as well. When I{`’`}m not coding, you’ll
            generally find me shooting my Nikon, cycling, watching Cronenberg
            films, or noodling around with my synthesizers. You can find me on
            Twitter at <a href="https://twitter.com/irreduce">@irreduce</a> and
            on GitHub at <a href="https://github.com/vivshaw">vivshaw</a>.
          </h3>
        </SectionContent>
      </LslashSection>
    </Fragment>
  );
};

export const query = graphql`
  query {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___modified], order: DESC }
      limit: 3
    ) {
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

    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___modified], order: DESC }
      limit: 3
    ) {
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
