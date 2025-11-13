"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface HomeProps {
  setActiveSection: (section: string) => void
}

export default function Home({ setActiveSection }: HomeProps) {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
    setActiveSection("about")
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-gray-600 text-sm font-semibold mb-2">HI THERE!</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              I'M <span className="text-amber-400">YOUR NAME</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-amber-400 px-4 py-2 rounded-lg">
              <p className="text-gray-900 font-bold text-xs">WEB DEVELOPER | DEVOPS ENGINEER</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            Passionate about building scalable web applications and robust deployment pipelines. I specialize in modern
            web technologies and cloud infrastructure with a focus on clean code and best practices.
          </p>

          <button
            onClick={handleScroll}
            className="bg-amber-400 text-gray-900 px-8 py-3 rounded-full font-bold w-fit hover:bg-amber-500 transition-colors"
          >
            MORE ABOUT ME
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-96 lg:h-screen flex items-center justify-center">
          <div className="w-full max-w-sm h-96 bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/professional-developer-portrait.jpg"
              alt="Profile"
              width={320}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-amber-400" />
      </div>
    </section>
  )
}
