import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4 font-medium">Good afternoon.</p>
          <h1 className="heading-display text-6xl md:text-8xl mb-6 text-balance text-foreground">Jay Shah</h1>
          <div className="w-24 h-px bg-accent mx-auto mb-8"></div>
        </div>

        <p className="heading-elegant text-2xl md:text-3xl text-muted-foreground mb-6">Software Engineering Student</p>

        <p className="text-refined text-lg md:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto text-pretty">
          I'm a Software Engineering student at <span className="text-accent font-medium">King's College London</span>{" "}
          with experience at <span className="text-accent font-medium">HubSpot</span> and{" "}
          <span className="text-accent font-medium">Deutsche Bank</span>. I specialize in full-stack development,
          machine learning, and creating applications that blend technical excellence with genuine impact.
        </p>

        <div className="flex items-center justify-center gap-6 mb-16">
          <Button
            asChild
            size="lg"
            className="elegant-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-xl"
          >
            <a href="#projects">View Selected Work</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="elegant-hover border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-base font-medium rounded-xl bg-transparent"
          >
            <a href="#contact">Let's Connect</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 mb-12">
          <a
            href="https://github.com/jays41"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-all duration-300 elegant-hover p-3 rounded-full hover:bg-accent/10"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jayrshah41/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-all duration-300 elegant-hover p-3 rounded-full hover:bg-accent/10"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:jr-shah@outlook.com"
            className="text-muted-foreground hover:text-accent transition-all duration-300 elegant-hover p-3 rounded-full hover:bg-accent/10"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
