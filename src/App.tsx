import { Route, Routes } from "react-router-dom"

import { ThemeProvider } from "@/components/ThemeProvider"
import Portfolio from "@/pages/Portfolio"
import Shortener from "@/pages/Shortener"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pimentel-dev-theme">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/short/:id" element={<Shortener />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
