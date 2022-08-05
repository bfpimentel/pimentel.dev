import React, { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";
import { useTheme } from "next-themes";
import { getGithubProfile } from "@/data/repository/GithubRepository";
import Head from "next/head";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home({
  name,
  photoUrl,
  bio,
  role,
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
      <Main projects={projects} name={name} photoUrl={photoUrl} bio={bio} role={role}  />
      <Footer onSwitchClick={switchTheme} theme={theme} />
    </div>
  );
}

export const getStaticProps = async () => {
  const profile = await getGithubProfile();

  return {
    props: {
      name: profile.name,
      photoUrl: profile.photoUrl,
      bio: profile.bio,
      role: profile.role,
      projects: profile.projects.map((project) => {
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
