import { Award, Users, Zap, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "10+ Years Experience",
      description: "Almost a decade of professional software development",
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Team Leadership",
      description: "Led teams of 10+ developers with 30% efficiency improvement",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance Expert",
      description: "Consistently improved system performance by 10-30%",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "99.9% Uptime",
      description: "Maintained mission-critical systems with exceptional reliability",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Senior Software Engineer who thrives on solving complex technical challenges while building
            innovative solutions that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                With almost a decade of experience in software engineering, I've had the privilege of working across
                diverse domains - from financial applications to healthcare systems, and from enterprise solutions to
                startup innovations.
              </p>
              <p>
                Currently serving as a Senior Software Engineer at Enscript Solutions, I lead development teams,
                architect scalable solutions, and drive technical innovation. My expertise spans backend development,
                full-stack engineering, SDK development, and team leadership.
              </p>
              <p>
                As the founder of Tsutseh, a PropTech SaaS platform, I'm passionate about leveraging technology to solve
                real-world problems in Africa's real estate sector. This venture has taught me invaluable lessons about
                product leadership, business strategy, and customer-centric development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors duration-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{highlight.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <p className="text-gray-300">Increased system security with SSO integration</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <p className="text-gray-300">Client satisfaction rate maintained</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
              <p className="text-gray-300">Reduced integration times with custom SDKs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">30%</div>
              <p className="text-gray-300">Improved team efficiency through leadership</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">25%</div>
              <p className="text-gray-300">Faster project delivery timelines</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime for mission-critical systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
