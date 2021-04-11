import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Posts from "@/components/Posts";
import styles from "@/styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Pimentel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Posts />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default Home;
