import { HTMLElement, parse } from "node-html-parser"

import type ProfileModel from "@/data/model/ProfileModel"
import type ShortenedURLModel from "@/data/model/ShortenedURLModel"

const GET_PROFILE_URL = "https://api.github.com/users/bfpimentel"

type ProfileResponse = {
  name: string
  avatar_url: string
  bio: string
  company: string
}

interface RepositoryResponse {
  author: string
  name: string
  description: string
  language: string
  languageColor?: string
  stars?: number
  forks?: number
}

export async function getGithubProfile(): Promise<ProfileModel> {
  return fetch(GET_PROFILE_URL).then(async (profileResponse) => {
    const parsedProfile = (await profileResponse.json()) as ProfileResponse
    const pinnedRepositories = await getPinnedRepositories()

    return {
      name: parsedProfile.name,
      photoUrl: parsedProfile.avatar_url,
      bio: parsedProfile.bio,
      role: parsedProfile.company,
      projects: pinnedRepositories.map((repo) => ({
        name: repo.name,
        description: repo.description,
        link: `https://github.com/bfpimentel/${repo.name}`,
      })),
    }
  })
}

export async function getShortenedURLs(): Promise<ShortenedURLModel[]> {
  return []

  // const data = await dataSource.getShortenedURLsGist()
  // const shortenedURLs = JSON.parse(data.user.gist.files[0].text)
  //
  // return shortenedURLs.map((file: { short: string; url: string }) => {
  //   const shortenedURL: ShortenedURLModel = {
  //     short: file.short,
  //     url: file.url,
  //   }
  //
  //   return shortenedURL
  // })
}

function parseRepository(el: HTMLElement): RepositoryResponse {
  const repoPath = el.querySelector("a")?.getAttribute("href")?.split("/") || []
  const [, author = "", name = ""] = repoPath

  const parseMetric = (index: number): number => {
    try {
      return Number(el.querySelectorAll("a.pinned-item-meta")[index]?.text?.replace(/\n/g, "").trim()) || 0
    } catch {
      return 0
    }
  }

  const languageSpan = el.querySelector("span[itemprop='programmingLanguage']")
  const languageColorSpan = languageSpan?.parentNode?.querySelector(".repo-language-color")

  return {
    author,
    name,
    description: el.querySelector("p.pinned-item-desc")?.text?.replace(/\n/g, "").trim() || "",
    language: languageSpan?.text || "",
    languageColor: languageColorSpan?.getAttribute("style")?.match(/background-color:\s*([^;]+)/)?.[1] || "",
    stars: parseMetric(0),
    forks: parseMetric(1),
  }
}

async function getPinnedRepositories(): Promise<RepositoryResponse[]> {
  try {
    const request = await fetch("https://github.com/bfpimentel", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    const html = await request.text()
    const root = parse(html)

    return root.querySelectorAll(".js-pinned-item-list-item").map((el) => parseRepository(el))
  } catch {
    return []
  }
}
