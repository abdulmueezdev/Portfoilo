"use client"

import Image from "next/image"

export default function About() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, modern web applications using React, Next.js, and TypeScript.",
      icon: "🌐",
    },
    {
      title: "DevOps & CI/CD",
      description: "Implementing robust deployment pipelines and infrastructure automation with Docker and Kubernetes.",
      icon: "⚙️",
    },
    {
      title: "Cloud Infrastructure",
      description: "Designing and managing scalable cloud solutions on AWS, GCP, and Azure platforms.",
      icon: "☁️",
    },
  ]

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-24 bg-white px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="border-l-4 border-amber-400 pl-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">ABOUT ME</h2>
          </div>
          <p className="text-gray-700 text-lg max-w-2xl">
            I'm a passionate full-stack developer and DevOps engineer with expertise in building scalable applications
            and managing cloud infrastructure. I love solving complex problems and continuously learning new
            technologies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-64 h-80 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/professional-developer.jpg"
                alt="Profile"
                width={256}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 text-white p-12 rounded-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">{stat.number}</p>
                <p className="text-sm lg:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
