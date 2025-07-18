import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Code, Brain, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Create stunning, user-friendly interfaces with modern design principles and user experience best practices.",
      features: [
        "Figma-based wireframing & prototyping",
        "Responsive design systems",
        "User journey mapping",
        "Interactive prototypes"
      ],
      icon: <Palette className="h-8 w-8" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Full Stack Web Development",
      description: "Build robust, scalable web applications using modern technologies and industry best practices.",
      features: [
        "MERN Stack development",
        "RESTful API design",
        "Database optimization",
        "Cloud deployment"
      ],
      icon: <Code className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "ML Model Building",
      description: "Develop intelligent machine learning solutions for data-driven insights and automated decision making.",
      features: [
        "Data preprocessing & analysis",
        "Model training with Scikit-learn",
        "Pandas & NumPy implementation",
        "Performance optimization"
      ],
      icon: <Brain className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions from design to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border-border h-full animate-slide-up group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardContent className="p-8 h-full flex flex-col relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}