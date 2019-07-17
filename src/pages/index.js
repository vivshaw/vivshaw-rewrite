import React from "react";
import { graphql } from "gatsby";
import { Box } from "rebass";

import MainPageSection from "../components/MainPageSection";
import MainPageDescriptionList from "../components/MainPageDescriptionList";

const SerifSpan = props => (
  <span
    {...props}
    css={`
      font-family: "Alegreya";
      font-weight: 500;
      color: ${props => props.theme.colors.orange};
    `}
  />
);

export default props => {
  return (
    <Box
      {...props}
      css={`
        max-width: ${props => props.theme.pageWidth};
      `}
      pt={5}
      mx="auto"
    >
      <MainPageSection>
        Hi! I{"'"}m{" "}
        <SerifSpan theme={props.theme}>Hannah Vivian Shaw</SerifSpan>, a
        front-end engineer who specializes in developing applications for the
        mobile web.
      </MainPageSection>

      <MainPageSection>
        Some recent things I{"'"}ve worked on include{" "}
        <MainPageDescriptionList articles={props.data.work.edges} />. Presently
        I{"'"}m a freelance developer doing contract work.
      </MainPageSection>

      <MainPageSection>
        I also blog from time to time. Recent subjects I{"'"}ve written on
        include <MainPageDescriptionList articles={props.data.blog.edges} />.
      </MainPageSection>

      <MainPageSection>
        Aside from my work, you may know me for my love of weird fiction and
        Cronenberg films, my tinkering with Nikon cameras, or my encyclopedic
        post-punk collection.
      </MainPageSection>

      <MainPageSection>
        Elsewhere, I can be found on{" "}
        <a href="https://github.com/vivshaw/">GitHub</a>,{" "}
        <a href="https://twitter.com/vvvivshaw">Twitter</a>, or{" "}
        <a href="mailto:vivshaw@vivshaw.net">via email</a>.
      </MainPageSection>

      <MainPageSection>Thanks for stopping by.</MainPageSection>
    </Box>
  );
};

export const query = graphql`
  query {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
