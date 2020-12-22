module.exports = {
  plugins: [
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7a84f7bwrq7e`,
        accessToken: `fVteIsLlqFLa0ibNLtAar8RvuSPq7sc09Pg5_DkUQ9M`,
      },
    },
  ],
};
