import React, { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";
import { useTheme } from "next-themes";
import { getProjects } from "@/data/repository/GithubRepository";
import Head from "next/head";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Head>
        <title>Bruno Pimentel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main projects={projects} />
      <Footer onSwitchClick={switchTheme} theme={theme} />
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
