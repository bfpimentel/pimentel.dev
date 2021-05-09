import { getPinnedRepositories } from "@/data/source/GithubDataSource";
import ProjectModel from "@/data/model/ProjectModel";

export async function getProjects(): Promise<ProjectModel[]> {
  const data = await getPinnedRepositories();

  console.log(data.user.pinnedItems.nodes);

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
