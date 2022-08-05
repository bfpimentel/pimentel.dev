import React from "react";
import Header from "@/components/Header";
import Project from "@/entity/Project";
import Projects from "@/components/Projects";

type MainProps = {
  name: string;
  photoUrl: string;
  bio: string;
  role: string;
  projects: Project[];
};

export default function Main({ name, photoUrl, bio, role, projects }: MainProps) {
  return (
    <main className="flex flex-col items-center justify-center px-0 py-4">
      <Header name={name} photoUrl={photoUrl} bio={bio} role={role} />
      <Projects projects={projects} />
    </main>
  );
}
