import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { Box, Text } from "rebass";

const MainPageSection = props => (
  <Text
    {...props}
    fontSize={"60px"}
    fontFamily={"Alegreya Sans"}
    lineHeight={7 / 6}
    width={2 / 3}
    as="h2"
    fontWeight="normal"
    color="grey.8"
  ></Text>
);

const MainPage = styled(Box)`
  max-width: ${props => props.theme.pageWidth};
  margin: auto;
`;

MainPage.defaultProps = {
  pt: 5,
};

export default ({ data: { work, blog } }) => {
  return (
    <MainPage>
      <MainPageSection>
        Hi! I{"'"}m Hannah Vivian Shaw, a front-end engineer who specializes in
        developing applications for the mobile web.
      </MainPageSection>

      <MainPageSection>
        Some recent things I{"'"}ve worked on include{" "}
        {work.edges.map(
          (
            {
              node: {
                frontmatter: { title },
                fields: { slug },
                id,
              },
            },
            index,
            array
          ) =>
            array.length - 1 === index ? (
              <>
                {"and "}
                <Link to={slug} key={id}>
                  {title}
                </Link>
                {"."}
              </>
            ) : (
              <>
                <Link to={slug} key={id}>
                  {title}
                </Link>
                {", "}
              </>
            )
        )}
        Presently I{"'"}m a freelance developer doing contract work.
      </MainPageSection>

      <MainPageSection>
        I also blog from time to time. Recent subjects I{"'"}ve written on
        include
        {blog.edges.map(
          (
            {
              node: {
                frontmatter: { title },
                fields: { slug },
                id,
              },
            },
            index,
            array
          ) =>
            array.length - 1 === index ? (
              <>
                {"and "}
                <Link to={slug} key={id}>
                  {title}
                </Link>
                {"."}
              </>
            ) : (
              <>
                <Link to={slug} key={id}>
                  {title}
                </Link>
                {", "}
              </>
            )
        )}
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
    </MainPage>
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
