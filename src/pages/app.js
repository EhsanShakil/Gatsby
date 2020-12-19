import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Client1 from "../components/Client1";
import Client2 from "../components/Client2";

const App = () => {
  return (
    <Layout headerTitle="App Header">
      <Router basepath="/app">
        <Client1 path="/" />
        <Client2 path="/client2" />
      </Router>
    </Layout>
  );
};

export default App;
