import React from "react";
import Project from "@/entity/Project";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    /* transition: color 0.15s ease, border-color 0.15s ease; */
    <div className="border-t border-gray-800 content-center items-center max-w-4xl">
      <p className="text-center text-2xl m-5">Latest Projects</p>

      <div className="grid grid-cols-2 items-stretch content-center flex-wrap h-auto max-w-4xl">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="flex-1 mt-0 ml-4 mb-4 mr-4 text-left hover:to-blue-700 focus:to-blue-700 border border-gray-500 rounded-xl"
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
