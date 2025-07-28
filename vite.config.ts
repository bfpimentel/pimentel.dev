import path from "path"
import { defineConfig, loadEnv } from "vite"

import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "")
  return {
    root: ".",
    plugins: [react(), tailwindcss()],
    define: {
      "process.env.GITHUB_PAT": JSON.stringify(env.GITHUB_PAT),
      "process.env.GIST_ID": JSON.stringify(env.GIST_ID),
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "./src"),
        },
      ],
    },
  }
})
