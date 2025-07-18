import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Sonu Kumar</h3>
            <p className="text-muted-foreground">
              Building innovative solutions with passion and precision.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary"
                onClick={() => window.open("https://github.com/KumarSonu01", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary"
                onClick={() => window.open("https://linkedin.com/in/sonu-kumar", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:text-primary"
                onClick={() => window.open("mailto:sonukumarcs39@gmail.com", "_blank")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>sonukumarcs39@gmail.com</p>
              <p>+91 95769 26330</p>
              <p>Available for remote work</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground flex items-center">
            © {currentYear} Sonu Kumar. Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            and React.
          </p>
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 hover:text-primary"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  )
}