import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import sonuImage from "@/assets/sonu-kumar-new.png"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 dark:bg-[hsl(240_100%_70%/0.4)] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 dark:bg-[hsl(260_100%_75%/0.5)] rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-glow/20 dark:bg-[hsl(280_100%_65%/0.4)] rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg opacity-90">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Sonu Kumar
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium opacity-90">
                Engineer | MERN Developer | ML Enthusiast | UI/UX Designer
              </h2>
              <p className="text-lg opacity-80 max-w-lg">
                Blending code, creativity, and curiosity to solve problems and design experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-accent text-lg px-8"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => window.open('https://drive.google.com/file/d/19zY_jyM5wGNEB-LBytz_o2xjam-usYKw/view', '_blank')}
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => window.open('https://github.com/KumarSonu01', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => window.open('https://www.linkedin.com/in/sonukumar01', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => window.open('mailto:sonukumarcs39@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 dark:bg-[hsl(250_100%_75%/0.4)] rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 dark:border-[hsl(240_100%_70%/0.6)] shadow-2xl dark:shadow-[0_0_50px_hsl(250_100%_70%/0.7)]">
                <img 
                  src={sonuImage} 
                  alt="Sonu Kumar - Software Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent dark:bg-[hsl(240_100%_70%)] rounded-full flex items-center justify-center animate-float dark:shadow-[0_0_20px_hsl(240_100%_70%/0.8)]">
                <span className="text-white font-bold">JS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-primary-glow dark:bg-[hsl(260_100%_75%)] rounded-full flex items-center justify-center animate-float dark:shadow-[0_0_20px_hsl(260_100%_75%/0.8)]" style={{ animationDelay: "1s" }}>
                <span className="text-white font-bold">ML</span>
              </div>
              <div className="absolute top-1/4 -left-6 w-12 h-12 bg-white/20 dark:bg-[hsl(280_100%_65%/0.5)] rounded-full flex items-center justify-center animate-float dark:shadow-[0_0_15px_hsl(280_100%_65%/0.7)]" style={{ animationDelay: "3s" }}>
                <span className="text-white font-bold">⚛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}