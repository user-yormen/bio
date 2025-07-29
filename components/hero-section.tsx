"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            R. T. O. <span className="text-blue-400">Nmai</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">Senior Software Engineer & Tech Entrepreneur</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Dynamic and results-driven Senior Software Engineer with almost a decade of experience in backend and
            full-stack development, SDK engineering, and product leadership. Founder of Tsutseh, a PropTech SaaS
            platform modernizing real estate management in Africa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" onClick={scrollToAbout}>
            Learn More About Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent"
            onClick={() => window.open("mailto:reggienmai@gmail.com")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:reggienmai@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://reggie-syt.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Portfolio"
          >
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/r-t-o-n" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown
            size={32}
            className="text-gray-400 mx-auto cursor-pointer hover:text-white transition-colors duration-200"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  )
}
