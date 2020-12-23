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
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            content {
              raw
            }
            contentful_id
          }
        }
      }
    }
  `);
  console.log(result);
  const data = result.data.allContentfulBlogPost.edges;
  data.map((data) => {
    createPage({
      path: data.node.title,
      component: require.resolve(`./src/templates/blog-post.tsx`),
      context: {
        data: data.node,
      },
    });
  });
};
