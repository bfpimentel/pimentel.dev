import React from "react";
import Header from "@/components/Header";
import Project from "@/entity/Project";
import Projects from "@/components/Projects";
import styles from "@/styles/Main.module.css";

type MainProps = {
  projects: Project[];
};

function Main({ projects }: MainProps) {
  return (
    <main className={styles.main}>
      <Header />
      <Projects projects={projects} />
    </main>
  );
}

export default Main;
