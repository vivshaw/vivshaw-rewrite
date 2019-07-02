import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default ({ data: { blog, work } }) => {
  return (
    <>
      <div className="leftgutter">
        <h1 className="font-serif text-3xl font-medium">Hannah Vivian Shaw</h1>
        <h2 className="font-serif text-2xl text-gray-800">Frontend Engineer</h2>
        <div className="mt-4 mb-4 font-sans">social block goes here</div>
        <h2 className="font-serif text-gray-600 text-xl w-108">
          JavaScript developer. React enthusiast. Interested in functional
          programming and machine learning.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row leftgutter mt-6">
        <section className="w-1/2 pr-8">
          <h6 className="font-sans uppercase text-gray-600 mb-4 tracking-widest">
            Articles
          </h6>

          {blog.edges.map(
            ({
              node: {
                frontmatter: { date, title },
                fields: { slug },
                id,
              },
            }) => (
              <div
                className="mb-2 flex flex-row justify-between relative"
                key={id}
              >
                <h4 className="pr-8 pl-1 font-serif w-2/3 text-xl bloglink inline">
                  <Link to={slug}>{title}</Link>
                </h4>
                <time className="font-sans uppercase tracking-widest text-gray-600 w-1/3">
                  {date}
                </time>
              </div>
            )
          )}
        </section>

        <section className="w-1/2 pr-8">
          <h6 className="font-sans uppercase text-gray-600 mb-4 tracking-widest">
            Projects
          </h6>

          <div className="flex flex-row flex-wrap">
            {work.edges.map(
              ({
                node: {
                  frontmatter: { image, title },
                  fields: { slug },
                  id,
                },
              }) => (
                <div className="w-1/2 flex flex-col mb-4 pr-8" key={id}>
                  <Img
                    fluid={image.childImageSharp.fluid}
                    alt=""
                    className="mb-2 w-full"
                  />
                  <h4 className="font-sans tracking-wide">
                    <Link to={slug}>{title}</Link>
                  </h4>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
      limit: 6
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
