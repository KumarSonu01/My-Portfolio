import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Brain, Users, Heart } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "Python", "C", "JavaScript"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database className="h-6 w-6" />,
      skills: ["MERN Stack", "Java Swing/AWT", "NumPy", "Pandas", "Scikit-learn"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Tools & Technologies",
      icon: <Palette className="h-6 w-6" />,
      skills: ["MATLAB", "R", "MySQL", "Filmora", "Figma", "MS Office"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      title: "Technical Skills",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning", "Data Analysis", "Web Development", "UI/UX Design"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Communication", "Teamwork", "Creativity", "Problem Solving"],
      color: "bg-pink-500/10 text-pink-600 border-pink-200"
    },
    {
      title: "Personal Qualities",
      icon: <Heart className="h-6 w-6" />,
      skills: ["Meticulousness", "Emotional Intelligence", "Adaptability", "Leadership"],
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}