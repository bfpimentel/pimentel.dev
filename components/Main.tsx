import React from "react";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import styles from "@/styles/Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Projects />
    </main>
  );
}

export default Main;
