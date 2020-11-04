const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode });

    /* Removes date from slug.
    /* FIXME: do this a cleaner way */
    const slug = path.substring(0, 6) + path.substring(17);

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      blogPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      workPosts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/work/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    // Create blog posts
    result.data.blogPosts.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blogPost/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });

    // Create work pages
    result.data.workPosts.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/workPost/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
  });
};
