"use client"

import Image from "next/image"
import { Home, User, FileText, Briefcase, Mail } from "lucide-react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const navItems = [
    { id: "home", label: "HOME", icon: Home },
    { id: "about", label: "ABOUT ME", icon: User },
    { id: "resume", label: "RESUME", icon: FileText },
    { id: "portfolio", label: "PORTFOLIO", icon: Briefcase },
    { id: "contact", label: "CONTACT", icon: Mail },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-amber-400 text-gray-900 p-6 flex flex-col items-center gap-8 overflow-y-auto lg:relative lg:w-48">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-32 h-40 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src="/professional-developer-portrait.jpg"
            alt="Profile"
            width={128}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">Your Name</h2>
          <p className="text-sm text-gray-700">Web Developer | DevOps</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 w-full">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full px-4 py-3 rounded-lg text-left font-semibold text-sm transition-all flex items-center gap-3 ${
                activeSection === item.id ? "bg-green-700 text-white" : "bg-amber-300 text-gray-900 hover:bg-amber-500"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Decorative dots */}
      <div className="flex flex-col gap-4 mt-auto mb-8">
        {navItems.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === 0 ? "bg-amber-700" : "bg-amber-300"}`}
          />
        ))}
      </div>
    </aside>
  )
}
