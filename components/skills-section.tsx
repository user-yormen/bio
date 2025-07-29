"use client"

import { useState } from "react"
import { Code, Database, Server, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("languages")

  const skillCategories = {
    languages: {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 95, color: "bg-orange-500" },
        { name: "Groovy", level: 90, color: "bg-blue-500" },
        { name: "Dart", level: 85, color: "bg-cyan-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" },
        { name: "TypeScript", level: 82, color: "bg-blue-600" },
      ],
    },
    frameworks: {
      title: "Frameworks",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Spring Boot", level: 95, color: "bg-green-500" },
        { name: "Grails", level: 92, color: "bg-red-500" },
        { name: "Flutter", level: 88, color: "bg-blue-400" },
        { name: "React", level: 85, color: "bg-cyan-400" },
        { name: "Vaadin", level: 80, color: "bg-indigo-500" },
      ],
    },
    databases: {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 90, color: "bg-blue-600" },
        { name: "MySQL", level: 88, color: "bg-orange-600" },
        { name: "MongoDB", level: 82, color: "bg-green-600" },
        { name: "Redis", level: 85, color: "bg-red-600" },
      ],
    },
    tools: {
      title: "DevOps & Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Docker", level: 88, color: "bg-blue-500" },
        { name: "Nginx", level: 85, color: "bg-green-500" },
        { name: "Apache2", level: 82, color: "bg-red-500" },
        { name: "Git", level: 92, color: "bg-orange-500" },
        { name: "Keycloak", level: 90, color: "bg-purple-500" },
      ],
    },
  }

  const domains = [
    "RESTful APIs",
    "Web Development",
    "Mobile Development",
    "Microservices",
    "System Architecture",
    "Team Leadership",
    "Product Management",
    "DevOps",
    "Single Sign-On (SSO)",
    "2FA Implementation",
    "Financial Systems",
    "PropTech",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience across diverse technologies and domains.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={activeCategory === key ? "default" : "outline"}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 ${
                activeCategory === key
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {category.icon}
              {category.title}
            </Button>
          ))}
        </div>

        {/* Skills Display */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Domain Expertise */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Domain Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map((domain, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-700/50 text-gray-300 border-slate-600 px-4 py-2 text-sm"
              >
                {domain}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
