import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getShortenedURLs } from "@/data/repository/GithubRepository"

export default function Shortener() {
  const [redirect, setRedirect] = useState<string | undefined>()

  useEffect(() => {
    const short = useParams<{ id: string }>()
    getShortenedURLs().then((urls) => {
      const redirect = urls.find((item) => item.short === short)
      setRedirect(redirect?.url ?? "not_found")
    })
  }, [])

  if (redirect) return null

  if (redirect !== "not_found") {
    // TODO
  }

  return (
    <div>
      <title>URL Shortener</title>
      <meta name="description" content="Shortened link entry not found." />
      <link rel="icon" href="/vite.svg" />
      <h1>Shortened link entry not found.</h1>
    </div>
  )
}
