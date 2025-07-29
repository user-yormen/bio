import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      value: "reggienmai@gmail.com",
      link: "mailto:reggienmai@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Phone",
      value: "(+233) 20 672 0439",
      link: "tel:+233206720439",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: "Location",
      value: "Accra, Greater Accra, Ghana",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? I'm always open to connecting with fellow
            professionals and potential collaborators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800/50 rounded-lg">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <a href={info.link} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">What I Can Help With</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 text-xs">●</span>
                  Full-stack web and mobile application development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 text-xs">●</span>
                  System architecture and scalability consulting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 text-xs">●</span>
                  Team leadership and technical mentorship
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 text-xs">●</span>
                  PropTech and financial system solutions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 text-xs">●</span>
                  SDK development and API integration
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input
                    placeholder="Project Discussion"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
