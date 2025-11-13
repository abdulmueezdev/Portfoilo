"use client"

import type React from "react"

import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="border-l-4 border-amber-400 pl-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">GET IN TOUCH</h2>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Feel free to reach out to me for any opportunities or just a friendly hello!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:your@email.com" className="text-gray-600 hover:text-green-700">
                    your@email.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-green-700">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Your City, Your Country</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 flex gap-4">
                <a href="#" className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-amber-500 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600">© 2025 Your Portfolio. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Thanks for visiting!</p>
        </div>
      </div>
    </section>
  )
}
