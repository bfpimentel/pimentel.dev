import { getGitubProfileRawInfo, getShortenedURLsGist } from "@/data/source/GithubDataSource";
import ProjectModel from "@/data/model/ProjectModel";
import ProfileModel from "@/data/model/ProfileModel";
import ShortenedURLModel from "@/data/model/ShortenedURLModel";

export async function getGithubProfile(): Promise<ProfileModel> {
  const data = await getGitubProfileRawInfo();

  const projects = data.user.pinnedItems.nodes.map(
    (repository: { name: string; description: string }) => {
      const project: ProjectModel = {
        name: repository.name,
        description: repository.description,
        link: `https://github.com/${process.env.GITHUB_USERNAME}/${repository.name}`,
      };

      return project;
    }
  );

  const profile: ProfileModel = {
    name: data.user.name,
    photoUrl: data.user.avatarUrl,
    bio: data.user.bio,
    role: data.user.company,
    projects: projects
  }
 
  return profile;
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
