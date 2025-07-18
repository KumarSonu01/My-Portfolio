import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import sonuImage from "@/assets/sonu-kumar-new.png"

export function AboutSection() {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "College Name",
      period: "2022 – 2026",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Intermediate",
      institution: "Holy Cross School",
      period: "2021",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      degree: "Matriculation",
      institution: "D.A.V. Public School, Kedla",
      period: "2019",
      icon: <MapPin className="h-6 w-6" />
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about my journey and background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Bio */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={sonuImage} 
                    alt="Sonu Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-sm">SK</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm an aspiring software developer engineer with core skills in <span className="text-primary font-semibold">Java</span>, <span className="text-primary font-semibold">MERN Stack</span>, and a keen interest in <span className="text-primary font-semibold">Machine Learning</span>. I enjoy building projects, solving problems on LeetCode, and experimenting with creative tools like Filmora, Figma, and Sketching.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey blends technical expertise with creative problem-solving to build innovative solutions that make a difference in people's lives.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <p className="text-sm text-primary font-medium">{edu.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}