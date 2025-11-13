"use client"

import { Briefcase, BookOpen } from "lucide-react"

export default function Resume() {
  const education = [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      year: "2019",
      details: "Focused on web development, cloud computing, and DevOps practices.",
    },
    {
      school: "Online Certifications",
      degree: "AWS Solutions Architect & Kubernetes",
      year: "2023",
      details: "Professional certifications in cloud architecture and container orchestration.",
    },
  ]

  const experience = [
    {
      title: "Senior Developer",
      company: "Tech Company A",
      year: "2022 - Present",
      details: "Led development of microservices architecture and mentored junior developers.",
    },
    {
      title: "Full Stack Developer",
      company: "Tech Company B",
      year: "2020 - 2022",
      details: "Built and maintained multiple production applications with React and Node.js.",
    },
    {
      title: "Junior Developer",
      company: "Tech Company C",
      year: "2019 - 2020",
      details: "Started career building responsive web applications and learning DevOps practices.",
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Kubernetes Administrator (CKA)",
    "Docker Certified Associate",
    "AWS Certified DevOps Engineer",
  ]

  const skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Docker", "Kubernetes", "AWS", "CI/CD", "Git"]

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="border-l-4 border-amber-400 pl-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">RESUME</h2>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center gap-3">
            <Briefcase size={28} />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-amber-400">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                    <p className="text-green-700 font-semibold">{job.company}</p>
                  </div>
                  <span className="bg-amber-400 text-gray-900 px-3 py-1 rounded text-sm font-bold">{job.year}</span>
                </div>
                <p className="text-gray-600">{job.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center gap-3">
            <BookOpen size={28} />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-amber-400">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-green-700 font-semibold">{edu.school}</p>
                  </div>
                  <span className="bg-amber-400 text-gray-900 px-3 py-1 rounded text-sm font-bold">{edu.year}</span>
                </div>
                <p className="text-gray-600">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-green-700 flex items-center gap-3">
                <span className="text-amber-400 text-2xl">✓</span>
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-8">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
