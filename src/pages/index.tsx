import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout headerTitle="Header from index">
      <h1>Home Page</h1>
      <br />
      <Link to="/about">About</Link>
    </Layout>
  );
}
