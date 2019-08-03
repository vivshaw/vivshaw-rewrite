import React from "react";
import { graphql } from "gatsby";

import BlogPost from "../../components/BlogPost";

export default ({ data }) => {
  const {
    html,
    timeToRead,
    frontmatter: { title, blurb, date, image },
  } = data.blogPost;

  return (
    <BlogPost
      html={html}
      title={title}
      blurb={blurb}
      date={date}
      image={image}
      timeToRead={timeToRead}
    />
  );
};

export const query = graphql`
  query($slug: String!) {
    blogPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
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
