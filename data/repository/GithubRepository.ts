import { getPinnedRepositories, getShortenedURLsGist } from "@/data/source/GithubDataSource";
import ProjectModel from "@/data/model/ProjectModel";
import ShortenedURLModel from "../model/ShortenedURLModel";
import { isConstValueNode } from "graphql";

export async function getProjects(): Promise<ProjectModel[]> {
  const data = await getPinnedRepositories();

  return data.user.pinnedItems.nodes.map(
    (repository: { name: string; description: string }) => {
      const project: ProjectModel = {
        name: repository.name,
        description: repository.description,
        link: `https://github.com/bfpimentel/${repository.name}`,
      };

      return project;
    }
  );
}

export async function getShortenedURLs(): Promise<ShortenedURLModel[]> {
  const data = await getShortenedURLsGist();
  const shortenedURLs = JSON.parse(data.user.gist.files[0].text);

  return shortenedURLs.map(
    (file: { short: string; url: string }) => {
      const shortenedURL: ShortenedURLModel = {
        short: file.short,
        url: file.url
      }

      return shortenedURL;
    }
  );
}
