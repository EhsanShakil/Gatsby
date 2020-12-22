import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout headerTitle="Header from index">
      <h1>Home Page</h1>
      <br />
      <Link to="/about">About</Link>
      <br />
      <div>{ data.allContentfulBlogPost.edges.map((data, index) => <div key={index}><p> {data.node.title}</p><p> {data.node.content.raw}</p></div>)}</div>
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
