module.exports = {
  siteMetadata: {
    title: "Learn a11y"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
