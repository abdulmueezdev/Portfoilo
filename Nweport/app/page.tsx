"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import Home from "@/components/sections/home"
import About from "@/components/sections/about"
import Resume from "@/components/sections/resume"
import Portfolio from "@/components/sections/portfolio"
import Contact from "@/components/sections/contact"

export default function Page() {
  const [activeSection, setActiveSection] = useState("home")
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar after scrolling past hero section
      setShowSidebar(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Sidebar - Hidden on initial hero, shown on scroll */}
      {showSidebar && <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div id="home">
          <Home setActiveSection={setActiveSection} />
        </div>
        <div id="about" onMouseEnter={() => setActiveSection("about")}>
          <About />
        </div>
        <div id="resume" onMouseEnter={() => setActiveSection("resume")}>
          <Resume />
        </div>
        <div id="portfolio" onMouseEnter={() => setActiveSection("portfolio")}>
          <Portfolio />
        </div>
        <div id="contact" onMouseEnter={() => setActiveSection("contact")}>
          <Contact />
        </div>
      </main>
    </div>
  )
}
