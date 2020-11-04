import React from "react";
import PageMeta from "../_includes/page-meta";
import Default from "./default";

//FIXME: enable image in page feature
const Article = ({ pageContext, children }) => (
  <Default>
    <div id="main" role="main">
      <article className="wrap" itemScope itemType="http://schema.org/Article">
        {pageContext.frontmatter &&
          pageContext.frontmatter.image &&
          pageContext.frontmatter.image.feature && (
            <div className="page-feature">
              <div className="page-image">
                <img
                  src={pageContext.frontmatter.image.feature}
                  className="page-feature-image"
                  alt="pageContext.frontmatter.title"
                  itemProp="image"
                >
                  {/*{% if page.image.credit %}{% include image-credit.html %}{% endif %}*/}
                </img>
              </div>
            </div>
          )}

        <div className="page-title">
          <h1>{pageContext.frontmatter.title}</h1>
        </div>

        <div className="inner-wrap">
          <div id="content" className="page-content" itemProp="articleBody">
            {children}
            <hr />

            <footer className="page-footer">
              {/*
							{% if page.categories %}{% include page-author.html %}{% endif %}
							{% if page.share != false %}{% include share-this.html %}{% endif %}
						*/}
              <PageMeta
                date={pageContext.frontmatter.date}
                modified={pageContext.frontmatter.modified}
              />
            </footer>

            {/*
						<aside>
							{% if page.comments == true %}{% include comments.html %}{% endif %}
						</aside>
						*/}
          </div>
        </div>
      </article>
    </div>
  </Default>
);

export default Article;
