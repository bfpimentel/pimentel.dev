import React from "react";
import Project from "@/entity/Project";
import styles from "@/styles/Projects.module.css";

type ProjectsProps = {
  projects: Project[];
};

function Projects({ projects }: ProjectsProps) {
  return (
    <div className={styles.projects_container}>
      <p className={styles.latest_projects}>Latest Projects</p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <a href={project.link} className={styles.card}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
