module.exports = {
  siteMetadata: {
    title: `vivshaw`,
    description: `vivshaw blog`,
    author: `vivshaw`,
    siteUrl: `https://vivshaw.github.io`,
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
    "gatsby-plugin-postcss",
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
  ],
};
