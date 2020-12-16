import { Link } from "gatsby";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header title="Header from index" />
      <h1>Home Page</h1>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}
