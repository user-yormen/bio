import { Calendar, MapPin, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Enscript Solutions",
      location: "Dzorwulu, Ghana",
      period: "Jul 2022 - Present",
      type: "Full-time",
      achievements: [
        "Enhanced Financial Backoffice Applications, improving service delivery by 10%",
        "Led AI development team to fine-tune open-source AI tool for customer support",
        "Developed SDKs for Java and Flutter applications for efficient API utilization",
        "Managed team of 10 software developers, improving design quality by 20%",
        "Achieved 30% increase in customer satisfaction through tailored solutions",
        "Led major software project to completion on time and within budget",
        "Developed automated processes reducing manual effort by 26%",
      ],
      skills: ["Team Leadership", "SDK Development", "AI Development", "Financial Systems"],
    },
    {
      title: "Founder (Part-time)",
      company: "Tsutseh Ltd",
      location: "Accra, Ghana",
      period: "Jun 2018 - Present",
      type: "Entrepreneurship",
      achievements: [
        "Founded PropTech SaaS platform simplifying property and tenant management",
        "Led product vision, architecture, and business strategy",
        "Launched and bootstrapped Tsutseh to serve clients across Ghana",
        "Designed responsive, AI-assisted architecture improving UX by 25%",
        "Improved client satisfaction by 30% through tailored engagement strategies",
        "Developed e-commerce capabilities resulting in 15% revenue increase",
        "Actively managing product roadmap and scaling strategies",
      ],
      skills: ["Product Leadership", "Business Strategy", "PropTech", "SaaS"],
    },
    {
      title: "Fullstack Developer",
      company: "Epareto IT",
      location: "East Legon, Ghana",
      period: "May 2020 - Jun 2022",
      type: "Full-time",
      achievements: [
        "Worked on German-based SORMAS project tracking COVID-19 for 5,000+ clients",
        "Optimized application performance by 20% through caching and efficient data structures",
        "Developed RESTful API improving scalability and reducing latency by 10%",
        "Enhanced code quality and compliance by 10% through reviews and mentorship",
        "Led team to complete major software project on time and within budget",
        "Implemented automated processes reducing manual effort by 26%",
        "Delivered urgent mobile application to Play Store before deadline",
      ],
      skills: ["Full-stack Development", "Performance Optimization", "API Development", "COVID-19 Tracking"],
    },
    {
      title: "Software Engineer",
      company: "Supertech Limited (STL)",
      location: "Dzorwulu, Accra, Ghana",
      period: "Mar 2018 - Aug 2019",
      type: "Full-time",
      achievements: [
        "Developed REST APIs with JWT authentication, increasing API usage by 20%",
        "Built student enrollment application increasing enrollments by 30%",
        "Restructured multiple apps to use single sign-on with Keycloak",
        "Designed scalable, high-availability RESTful applications",
        "Created web-based applications meeting specific client needs",
        "Configured servers for staging and production environments",
      ],
      skills: ["REST APIs", "Authentication", "SSO", "Server Configuration"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nearly a decade of building scalable solutions, leading teams, and driving innovation across diverse
            industries and technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-300">
                      <span className="text-lg font-semibold text-blue-400">{exp.company}</span>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp size={20} className="text-green-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5 text-xs">●</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Users size={20} className="text-purple-400" />
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
