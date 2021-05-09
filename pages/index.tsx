import React from "react";
import { InferGetStaticPropsType } from "next";
import { getProjects } from "@/data/repository/GithubRepository";
import Project from "@/entity/Project";
import Head from "next/head";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import styles from "@/styles/Home.module.css";

function Home({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Pimentel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main projects={projects} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const projectModels = await getProjects();

  return {
    props: {
      projects: projectModels.map((project) => {
        return {
          name: project.name,
          description: project.description,
          link: `https://github.com/bfpimentel/${project.name}`,
        };
      }),
    },
  };
};

export default Home;
