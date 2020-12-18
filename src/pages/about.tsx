import React from "react";
import Layout from "../components/Layout";
import styles from "./about.module.css";

export default function About() {
  return (
    <Layout headerTitle="Header from about">
      <div className={styles.title}>
        <h1>About Page</h1>
      </div>
    </Layout>
  );
}
