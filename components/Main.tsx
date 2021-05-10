import React from "react";
import Header from "@/components/Header";
import Project from "@/entity/Project";
import Projects from "@/components/Projects";

type MainProps = {
  projects: Project[];
};

export default function Main({ projects }: MainProps) {
  return (
    <main className="flex flex-col items-center justify-center px-0 py-4">
      <Header />
      <Projects projects={projects} />
    </main>
  );
}
