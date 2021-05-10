import React from "react";
import { InferGetStaticPropsType } from "next";
import { getProjects } from "@/data/repository/GithubRepository";
import Head from "next/head";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
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
    revalidate: 3600,
  };
};
