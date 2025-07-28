import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "@/App.tsx"

import "./styles.css"

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Could not find root element to mount to")
}

const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
