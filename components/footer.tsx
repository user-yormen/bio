"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              R. T. O. <span className="text-blue-400">Nmai</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Senior Software Engineer passionate about building scalable solutions and leading high-performing teams to
              deliver exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase())
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="mailto:reggienmai@gmail.com"
                className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/70 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://reggie-syt.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/70 transition-all duration-200"
                aria-label="Portfolio"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/r-t-o-n"
                className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/70 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">Available for freelance projects and full-time opportunities.</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Smile with <Heart size={16} className="text-red-400" />  R. T. O. Nmai
            <span className="mx-2">•</span>© {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
