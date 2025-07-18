import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Award, Users } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company: "Jovac by Coding Blocks",
      period: "May 2024 – Aug 2024",
      description: "Built 'PolyLingua' – a voice-enabled full stack language translator supporting 60+ languages.",
      technologies: ["MERN Stack", "Voice Recognition", "Translation APIs"],
      icon: <Building className="h-6 w-6" />,
      type: "internship"
    },
    {
      title: "CCNA Certified",
      company: "Cisco NetAcad",
      period: "April 2025",
      description: "Certified in networking fundamentals and infrastructure.",
      technologies: ["Networking", "Cisco", "Infrastructure"],
      icon: <Award className="h-6 w-6" />,
      type: "certification"
    },
    {
      title: "Infosys Springboard Learner",
      company: "Infosys",
      period: "May 2025",
      description: "Completed certifications in DSA, DBMS, Java, and other core technologies.",
      technologies: ["DSA", "DBMS", "Java", "Programming"],
      icon: <Users className="h-6 w-6" />,
      type: "learning"
    },
    {
      title: "Generative AI Training",
      company: "GDSC (Google Developer Student Club)",
      period: "June 2024",
      description: "Focused on advanced training in Generative AI and ML.",
      technologies: ["AI", "Machine Learning", "Generative AI"],
      icon: <Award className="h-6 w-6" />,
      type: "training"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "internship":
        return "bg-green-500/10 text-green-600 border-green-200"
      case "certification":
        return "bg-blue-500/10 text-blue-600 border-blue-200"
      case "learning":
        return "bg-purple-500/10 text-purple-600 border-purple-200"
      case "training":
        return "bg-orange-500/10 text-orange-600 border-orange-200"
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200"
    }
  }

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="card-hover border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  {/* Icon and Type */}
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      {experience.icon}
                    </div>
                    <Badge className={getTypeColor(experience.type)}>
                      {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-primary font-medium">{experience.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="bg-muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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