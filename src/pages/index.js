import { Link } from "gatsby";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}
