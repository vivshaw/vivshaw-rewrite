import React from "react";
import { Link } from "gatsby";

const MainPageDescriptionList = ({ articles }) => {
  return articles.map(
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
        </>
      ) : (
        <>
          <Link to={slug} key={id}>
            {title}
          </Link>
          {", "}
        </>
      )
  );
};

export default MainPageDescriptionList;
