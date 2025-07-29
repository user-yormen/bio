"use client"

import { ExternalLink, Github, Smartphone, Globe, Shield, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Tsutseh PropTech Platform",
      description:
        "A comprehensive SaaS platform that modernizes real estate management in Africa. Features include property management, tenant tracking, automated rent collection, and AI-assisted customer support.",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      achievements: [
        "Serving clients across Ghana with 30% improved satisfaction",
        "AI-assisted architecture with 25% better response time",
        "E-commerce capabilities driving 15% revenue increase",
        "Responsive design with mobile-first approach",
      ],
      technologies: ["Java", "Spring Boot", "Flutter", "PostgreSQL", "AI/ML", "Docker"],
      type: "SaaS Platform",
      status: "Active",
      link: "#",
    },
    {
      title: "SORMAS COVID-19 Tracking System",
      description:
        "German-based open-source project used to track the COVID-19 pandemic for the nation. Optimized performance and implemented caching for 5,000+ concurrent users.",
      icon: <Database className="w-8 h-8 text-green-400" />,
      achievements: [
        "Served 5,000+ clients nationwide during pandemic",
        "20% improvement in application data load time",
        "Implemented efficient caching mechanisms",
        "Memory-efficient data structures optimization",
      ],
      technologies: ["Java", "Grails", "PostgreSQL", "Caching", "Performance Optimization"],
      type: "Healthcare System",
      status: "Completed",
      link: "#",
    },
    {
      title: "Enterprise SSO Integration",
      description:
        "Restructured multiple applications to use single sign-on authentication and authorization using Keycloak, improving system security and user experience.",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      achievements: [
        "50% increase in system modularity and security",
        "Unified authentication across multiple applications",
        "Reduced user login friction significantly",
        "Enhanced security compliance",
      ],
      technologies: ["Keycloak", "Java", "Spring Security", "JWT", "2FA"],
      type: "Security Infrastructure",
      status: "Completed",
      link: "#",
    },
    {
      title: "Financial Backoffice Applications",
      description:
        "Enhanced and maintained financial applications at Enscript Solutions, implementing new features and improving service delivery for financial institutions.",
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      achievements: [
        "10% improvement in service delivery",
        "Enhanced financial modules and workflows",
        "Improved system reliability and performance",
        "Client satisfaction rate of 95%",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Financial APIs", "Microservices"],
      type: "Financial System",
      status: "Ongoing",
      link: "#",
    },
    {
      title: "Mobile & SDK Development",
      description:
        "Developed SDKs for Java and Flutter applications, enabling clients to efficiently utilize external APIs. Also created mobile applications with rapid deployment cycles.",
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      achievements: [
        "40% reduction in client integration times",
        "SDKs adopted by multiple client development teams",
        "Rapid mobile app deployment to Play Store",
        "Improved developer experience and documentation",
      ],
      technologies: ["Flutter", "Dart", "Java", "SDK Development", "API Integration"],
      type: "SDK & Mobile",
      status: "Ongoing",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of impactful projects spanning PropTech, healthcare, financial systems, and enterprise solutions
            that have driven real business value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-700/70 transition-colors duration-200">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-blue-600/30 text-blue-400 text-xs">
                          {project.type}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            project.status === "Active" || project.status === "Ongoing"
                              ? "border-green-600/30 text-green-400"
                              : "border-gray-600/30 text-gray-400"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1 text-xs">●</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-slate-700/50 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 flex items-center gap-2 bg-transparent"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </Button>
                  {project.title === "SORMAS COVID-19 Tracking System" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 flex items-center gap-2 bg-transparent"
                    >
                      <Github size={16} />
                      Open Source
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Interested in learning more about these projects or discussing potential collaborations?
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open("mailto:reggienmai@gmail.com")}
          >
            Let's Talk About Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
