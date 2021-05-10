import React from "react";
import Project from "@/entity/Project";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="border-t border-white border-opacity-10 content-center items-center max-w-4xl">
      <p className="text-center text-2xl m-5">Latest Projects</p>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-stretch content-center flex-wrap h-auto max-w-4xl">
        {projects.map((project) => (
          /* transition: color 0.15s ease, border-color 0.15s ease; */
          <a
            key={project.name}
            href={project.link}
            className="
              mt-0 ml-4 mb-4 mr-4 text-left border-solid border rounded-lg 
              transition-colors duration-500 ease-in-out border-white border-opacity-10 text-white hover:border-blue-500 hover:text-blue-600
              "
          >
            <h3 className="ml-4 mt-4 mr-4 mb-0 font-bold text-2xl">
              {project.name}
            </h3>
            <p className="m-4 text-xl">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
