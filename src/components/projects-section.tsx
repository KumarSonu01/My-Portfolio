import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Database, Cpu } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Job Seeker Platform",
      description: "MERN-based full-stack application for connecting corporate and blue-collar job seekers with comprehensive job matching and application features.",
      longDescription: "A comprehensive platform that bridges the gap between job seekers and employers, featuring advanced filtering, real-time notifications, and seamless application tracking.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Socket.io"],
      githubUrl: "https://github.com/KumarSonu01",
      liveUrl: "#",
      icon: <Database className="h-8 w-8" />,
      category: "Full Stack"
    },
    {
      title: "Movie Recommendation System",
      description: "Machine Learning project that personalizes movie suggestions for users based on their preferences and viewing history using collaborative filtering.",
      longDescription: "An intelligent recommendation engine using advanced ML algorithms to provide personalized movie suggestions with high accuracy.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "React"],
      githubUrl: "https://github.com/KumarSonu01",
      liveUrl: "#",
      icon: <Cpu className="h-8 w-8" />,
      category: "Machine Learning"
    },
    {
      title: "PolyLingua Translator",
      description: "Voice-enabled full stack language translator supporting 60+ languages with real-time speech recognition and translation capabilities.",
      longDescription: "A revolutionary translation app that breaks language barriers with voice input, real-time translation, and natural speech synthesis.",
      technologies: ["MERN Stack", "Speech API", "Translation API", "WebRTC"],
      githubUrl: "https://github.com/KumarSonu01",
      liveUrl: "#",
      icon: <Code className="h-8 w-8" />,
      category: "Web Application"
    },
    {
      title: "SmartQueue",
      description: "AI-powered smart queue management system for businesses to optimize customer flow and reduce wait times.",
      longDescription: "A cutting-edge queue management solution that leverages AI to predict wait times, manage customer flow, and enhance the overall service experience.",
      technologies: ["MERN Stack", "TensorFlow", "Socket.io", "Redis"],
      githubUrl: "https://github.com/KumarSonu01",
      liveUrl: "#",
      icon: <Code className="h-8 w-8" />,
      category: "Full Stack"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack":
        return "bg-blue-500/10 text-blue-600 border-blue-200"
      case "Machine Learning":
        return "bg-green-500/10 text-green-600 border-green-200"
      case "Web Application":
        return "bg-purple-500/10 text-purple-600 border-purple-200"
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200"
    }
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my technical skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover border-border h-full animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 btn-primary"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}