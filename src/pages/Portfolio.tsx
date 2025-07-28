import { useEffect, useState } from "react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import { getGithubProfile } from "@/data/repository/GithubRepository"
import type Project from "@/entity/Project"

type Profile = {
  name: string
  photoUrl: string
  bio: string
  role: string
  projects: Project[]
}

export default function Portfolio() {
  const [profile, setProfile] = useState<Profile>()

  useEffect(() => {
    getGithubProfile().then((profile) =>
      setProfile({
        name: profile.name,
        photoUrl: profile.photoUrl,
        bio: profile.bio,
        role: profile.role,
        projects: profile.projects.map((project) => {
          return {
            name: project.name,
            description: project.description,
            link: `https://github.com/bfpimentel/${project.name}`,
          }
        }),
      })
    )
  }, [])

  if (!profile) return null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2 bg-white text-black dark:bg-black dark:text-white">
      <main className="flex flex-col items-center justify-center px-0 py-4">
        <Header name={profile.name} photoUrl={profile.photoUrl} bio={profile.bio} role={profile.role} />
        <Projects projects={profile.projects} />
      </main>
      <Footer />
    </div>
  )
}
