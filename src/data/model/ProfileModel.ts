import type ProjectModel from "@/data/model/ProjectModel"

export default interface ProfileModel {
  name: string
  photoUrl: string
  bio: string
  role: string
  projects: ProjectModel[]
}
