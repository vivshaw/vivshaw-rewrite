import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

//FIXME: better handle cases where fields are missing, also handle excerpt, also default image, also better excerpt/blurb handling
const PostGrid = ({ frontmatter, slug, excerpt }) => (
  <article className="tile" itemScope itemType="http://schema.org/Article">
    <Link to={slug} title={frontmatter.title} className="post-teaser">
      {frontmatter.image ? (
        <Img
          fluid={frontmatter.image.childImageSharp.fluid}
          alt="teaser"
          itemProp="image"
        />
      ) : (
        <img
          src="{{ site.url }}/images/{{ site.teaser }}"
          alt="teaser"
          itemProp="image"
        />
      )}
    </Link>

    {frontmatter.date && (
      <p className="entry-date date published">
        <time dateTime={frontmatter.date} itemProp="datePublished">
          {frontmatter.date}
        </time>
      </p>
    )}

    <h2 className="post-title" itemProp="name">
      <Link to={slug}>{frontmatter.title}</Link>
    </h2>
    <p className="post-excerpt" itemProp="description">
      {frontmatter.blurb ? frontmatter.blurb : excerpt}
    </p>
  </article>
);

export default PostGrid;
