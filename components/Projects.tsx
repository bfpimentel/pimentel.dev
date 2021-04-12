import React from "react";
import styles from "@/styles/Projects.module.css";

function Projects() {
  return (
    <>
      <p className={styles.latest_projects}>Latest Projects</p>

      <div className={styles.grid}>
        <a
          href="https://github.com/bfpimentel/chuck-norris-app"
          className={styles.card}
        >
          <h3>Chuck Norris App &rarr;</h3>
          <p>
            Android project in Kotlin with Flow, Coroutines, MVI, Clean
            Architecture and Modularization.
          </p>
        </a>

        <a
          href="https://github.com/bfpimentel/pimentel.dev"
          className={styles.card}
        >
          <h3>This Portfolio &rarr;</h3>
          <p>
            Project made with Next.js written in Typescript. Work in progress.
          </p>
        </a>
      </div>
    </>
  );
}

export default Projects;
