import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import styles from "@/styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Pimentel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
