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
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
  ],
};
