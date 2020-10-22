import { Link } from "gatsby";
import React from "react";

// FIXME: finish implementing!
const Breadcrumbs = () => (
  <nav className="site-title">
    <span itemScope itemType="http://data-vocabulary.org/Breadcrumb">
      <Link to="/" itemProp="url">
        <span itemProp="title">Home</span>
      </Link>
    </span>
  </nav>
);

/*
<nav class="site-title">
  <span itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
    <a href="{{ site.url }}" itemprop="url">
      <span itemprop="title">Home</span>
    </a>
  </span>
  {% if page.categories and page.categories != empty %}
     › 
    <span itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
      <a href="{{ site.url }}/{{ page.categories | first }}/" itemprop="url">
        <span itemprop="title">{{ page.categories | first | replace: '-',' ' | capitalize }}</span>
      </a>
    </span>
  {% endif %}
</nav><!-- /.breadcrumbs -->
*/

export default Breadcrumbs;
