const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  plugins: [
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
};
