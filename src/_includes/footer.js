import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

//FIXME: use proper Graphql

const Footer = ({ home = false }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterYaml {
        edges {
          node {
            title
            url
          }
        }
      }
      site {
        siteMetadata {
          year
        }
      }
    }
  `);

  return (
    <>
      <footer role="contentinfo" id="site-footer">
        <nav role="navigation" className="menu bottom-menu">
          <ul className="menu-item">
            {data.allFooterYaml.edges.map(({ node }) => {
              const domain = node.url.includes("http") ? "" : "";

              return (
                <li key="link.title">
                  <a href={`${domain}${node.url}`}>{node.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="copyright">
          &#169; {data.site.siteMetadata.year} <Link to="/">vivshaw</Link>{" "}
          powered by <a href="http://jekyllrb.com">Jekyll</a> +{" "}
          <a href="http://mmistakes.github.io/skinny-bones-jekyll/">
            Skinny Bones
          </a>
          .
        </p>
      </footer>

      {!home && (
        <svg width="0" height="0">
          <defs>
            <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
              <polygon points=".8 0, 1 0, 1 1, .9 1" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

/*
<footer role="contentinfo" id="site-footer">
	<nav role="navigation" class="menu bottom-menu">
		<ul class="menu-item">
		{% for link in site.data.footer %}
	      {% if link.url contains 'http' %}
	        {% assign domain = '' %}
	        {% else %}
	        {% assign domain = site.url %}
	      {% endif %}
		  <li><a href="{{ domain }}{{ link.url }}" {% if link.url contains 'http' %}target="_blank"{% endif %}>{{ link.title }}</a></li>
		{% endfor %}
		</ul>
	</nav><!-- /.bottom-menu -->
	<p class="copyright">&#169; {{ site.time | date: '%Y' }} <a href="{{ site.url }}">{{ site.title }}</a> powered by <a href="http://jekyllrb.com">Jekyll</a> + <a href="http://mmistakes.github.io/skinny-bones-jekyll/">Skinny Bones</a>.</p>
</footer>

{% unless page.layout == "home" %}
	<!-- Fix clip-path for Firefox. Needs to be down here so it won't screw up element positioning. -->
	
{% endunless %}
*/

export default Footer;
