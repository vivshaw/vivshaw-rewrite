import React from "react";
import { graphql } from "gatsby";
import FrontMatter from "./FrontMatter";

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, blurb, date, image },
  } = data.markdownRemark;

  return (
    <>
      <div className="leftgutter">
        <FrontMatter title={title} blurb={blurb} date={date} image={image} />
      </div>

      <div className="leftgutter flex flex-row">
        <div
          className="font-serif w-1/2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="w-1/2">
          <p className="font-sans tracking-wide">
            Sidebar content will go here
          </p>
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        blurb
        date(formatString: "DD MMMM, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
