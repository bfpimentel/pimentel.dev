import type ProfileModel from "@/data/model/ProfileModel"
import type ProjectModel from "@/data/model/ProjectModel"
import type ShortenedURLModel from "@/data/model/ShortenedURLModel"
import * as dataSource from "@/data/source/GithubDataSource"

export async function getGithubProfile(): Promise<ProfileModel> {
  const data = await dataSource.getGitubProfileRawInfo()

  const projects = data.user.pinnedItems.nodes.map((repository: { name: string; description: string }) => {
    const project: ProjectModel = {
      name: repository.name,
      description: repository.description,
      link: `https://github.com/bfpimentel/${repository.name}`,
    }

    return project
  })

  return {
    name: data.user.name,
    photoUrl: data.user.avatarUrl,
    bio: data.user.bio,
    role: data.user.company,
    projects: projects,
  }
}

export async function getShortenedURLs(): Promise<ShortenedURLModel[]> {
  const data = await dataSource.getShortenedURLsGist()
  const shortenedURLs = JSON.parse(data.user.gist.files[0].text)

  return shortenedURLs.map((file: { short: string; url: string }) => {
    const shortenedURL: ShortenedURLModel = {
      short: file.short,
      url: file.url,
    }

    return shortenedURL
  })
}
