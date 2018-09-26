module.exports = {
  siteMetadata: {
    title: `Gatsby 2.0 minimal template `,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "INFO",
        // This is field under which it's accessible
        fieldName: "info",
        // Url to query from
        url:
          "https://api-apeast.graphcms.com/v1/cjmhlo2x61npn01dlichpc3z4/master"
      }
    }
  ]
};
