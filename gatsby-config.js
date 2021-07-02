/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "THINI",
    titleTemplate: "%s | Party hard",
    description: "DJ THYNI Offical is a dj crew from Switzerland for the world",
    siteUrl: "https://thestartup.netlify.com",
    author: "Morgan Baker",
    authorSite: "https://www.morganbaker.dev",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@twitter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
  ],
}
