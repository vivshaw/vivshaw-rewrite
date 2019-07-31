module.exports = {
  siteMetadata: {
    title: `vivshaw.net`,
    description: `Hannah Vivian Shaw's blog`,
    author: `Hannah Vivian Shaw`,
    siteUrl: `https://vivshaw.net`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vivshaw.codes`,
        short_name: `vivshaw`,
        start_url: `/`,
        background_color: `#ec008c`,
        theme_color: `#ec008c`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "assets",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
      },
    },
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        header: "vivshaw.net",
        team: [
          {
            Developer: `Hannah Vivian Shaw`,
            GitHub: `vivshaw`,
            Twitter: `@vvvivshaw`,
            Location: `Burlington, VT`,
          },
        ],
        thanks: [`Whoever invented coffee. You're pretty swell.`],
        site: {
          "Last update": `2019/7/30`,
          Standards: `HTML5, CSS, JavaScript, JSX`,
          Components: `Gatsby, React, styled-components, serverless, AWS`,
          Softwares: `Visual Studio Code`,
        },
        note: `Built with love on the JAMStack.`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://vivshaw.net`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/blog/" } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "vivshaw.net RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
  ],
};
