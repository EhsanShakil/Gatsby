exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "contact",
    component: require.resolve(`./src/templates/contact-page.tsx`),
    context: {
      // Data passed to context is available
      // in pageContext props of the template component
      name: "Gatsby",
      website: "https://www.gatsbyjs.com/",
    },
  });
  console.log("End of Gatsby Node File");
};
