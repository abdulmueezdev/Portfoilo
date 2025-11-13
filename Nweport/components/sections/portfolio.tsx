"use client"

import { useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-stack e-commerce platform built with Next.js and Stripe",
      image: "/ecommerce-platform.jpg",
    },
    {
      title: "DevOps Pipeline Automation",
      category: "devops",
      description: "CI/CD pipeline setup with GitHub Actions and Docker",
      image: "/devops-pipeline.jpg",
    },
    {
      title: "Cloud Infrastructure",
      category: "devops",
      description: "AWS infrastructure deployment with Terraform and Kubernetes",
      image: "/cloud-infrastructure.jpg",
    },
    {
      title: "Task Management App",
      category: "web",
      description: "Real-time task management with React and Firebase",
      image: "/task-management-app.jpg",
    },
    {
      title: "Monitoring Dashboard",
      category: "devops",
      description: "Real-time monitoring dashboard with Prometheus and Grafana",
      image: "/monitoring-dashboard.jpg",
    },
    {
      title: "Social Media Analytics",
      category: "web",
      description: "Analytics dashboard for social media metrics and insights",
      image: "/analytics-dashboard.png",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "devops", label: "DevOps" },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-24 bg-white px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="border-l-4 border-amber-400 pl-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">PORTFOLIO</h2>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Here are some of my recent projects showcasing my expertise in web development and DevOps engineering.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeFilter === filter.id ? "bg-green-700 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden bg-gray-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {project.category === "web" ? "Web Dev" : "DevOps"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
