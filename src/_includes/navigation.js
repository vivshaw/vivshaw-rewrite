import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

//FIXME: why's there this display: none <li> with class home?
const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allNavigationYaml {
        edges {
          node {
            title
            url
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav role="navigation" className="menu top-menu">
      <ul className="menu-item">
        <li className="home">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </li>
        {data.allNavigationYaml.edges.map(({ node }) => {
          const domain = node.url.includes("http") ? "" : "";

          return (
            <li key="link.title">
              <a href={`${domain}${node.url}`}>{node.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
