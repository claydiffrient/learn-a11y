module.exports = {
  siteMetadata: {
    title: "Learn a11y",
    siteUrl: "https://learna11y.org"
  },
  plugins: [
    "gatsby-plugin-glamor",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
