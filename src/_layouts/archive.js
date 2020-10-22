import React from "react";
import Default from "./default";

//FIXME: enable image in page feature
const Archive = ({ pageContext, children }) => (
  <Default>
    <div id="main" role="main">
      <div className="wrap">
        {pageContext.frontmatter &&
          pageContext.frontmatter.image &&
          pageContext.frontmatter.image.feature && (
            <div className="page-feature">
              <div className="page-image">
                {/*<img src="{{ site.url }}/images/{{ page.image.feature }}" class="page-feature-image" alt={pageContext.title} />*/}
                {pageContext.frontmatter.image.credit && (
                  <div>{/* include image-credit.html */}</div>
                )}
              </div>
            </div>
          )}

        <div className="page-title">
          <h1>{pageContext.frontmatter.title}</h1>
          {pageContext.frontmatter.excerpt && (
            <h2>{pageContext.frontmatter.excerpt}</h2>
          )}
        </div>

        <div className="archive-wrap">
          <div className="page-content">{children}</div>
        </div>
      </div>
    </div>
  </Default>
);

/*
<div id="main" role="main">			
	<div class="wrap">
		{% if page.image.feature %}
		<div class="page-feature">
			<div class="page-image">
				<img src="{{ site.url }}/images/{{ page.image.feature }}" class="page-feature-image" alt="{{ page.title }}">
				{% if page.image.credit %}{% include image-credit.html %}{% endif %}
			</div><!-- /.page-image -->
		</div><!-- /.page-feature -->
		{% endif %}
		<div class="page-title">
			<h1>{{ page.title }}</h1>
			{% if page.excerpt %}<h2>{{ page.excerpt }}</h2>{% endif %}
		</div>
		<div class="archive-wrap">
			<div class="page-content">
				{{ content }}
			</div><!-- /.page-content -->
		</div class="archive-wrap"><!-- /.archive-wrap -->
	</div><!-- /.wrap -->
</div><!-- /#main -->
*/

export default Archive;
