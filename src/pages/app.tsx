import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Client1 from "../components/Client1";
import Client2 from "../components/Client2";
import { Link } from "gatsby";

const App = () => {
  return (
    <Layout headerTitle="App Header">
      <div>
        <Link to="/app/client1">Client 1</Link>
        <br />
        <Link to="/app/client2">Client 2</Link>
      </div>
      <Router basepath="/app">
        <Client1 path="/client1" />
        <Client2 path="/client2" />
      </Router>
    </Layout>
  );
};

export default App;
