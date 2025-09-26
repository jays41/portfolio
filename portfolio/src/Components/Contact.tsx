import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          I'm always interested in discussing new opportunities, collaborating on projects, or simply connecting with
          fellow developers and researchers.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:jr-shah@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jr-shah@outlook.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+447497325864" className="text-muted-foreground hover:text-primary transition-colors">
                    +44 7497 325864
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/jays41"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/jayrshah41/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
