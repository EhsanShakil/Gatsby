import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout headerTitle="Header from index">
      <h1>Home Page</h1>
      <br />
      <Link to="/about">About</Link>
      <br />

      <p>{
          data.allContentfulBlogPost.edges[0].node.title
        }
      </p>
      <p>
        {documentToReactComponents(
          data.allContentfulBlogPost.edges[0].node.content.raw
        )}
      </p>
    </Layout>
  );
}
export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          content {
            raw
          }
        }
      }
    }
  }
`;
