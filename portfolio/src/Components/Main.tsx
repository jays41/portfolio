"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { About } from "./About"
import { Skills } from "./Skills"
import { Experience } from "./Experience"
import { Projects } from "./Projects"
import data from "../data/Info2.json"

export function Main() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
  }

  const handleClose = () => {
    setActiveSection(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 md:mb-8">{data.personal.name}</h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-4xl leading-relaxed px-4">
          {data.personal.intro}
        </p>
      </div>

      {/* Main Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl w-full">
        {/* CV Card */}
        <Card className="flex-1 p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-serif font-semibold text-primary mb-4 md:mb-6">My CV</h2>
          <div className="space-y-4">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              size="lg"
              onClick={() => {
                const link = document.createElement('a')
                link.href = data.personal.cv.downloadUrl
                link.download = 'Jay_Shah_CV.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <span className="mr-2">↓</span>
              Download
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Alternatively, open in the browser{" "}
              <button
                onClick={() => window.open(data.personal.cv.browserUrl, "_blank")}
                className="text-primary hover:underline"
              >
                here
              </button>
            </p>
          </div>
        </Card>

        {/* Navigation Card */}
        <Card className="flex-1 p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
          <nav className="space-y-3 md:space-y-4">
            <button
              onClick={() => handleSectionClick("about")}
              className="block w-full text-left text-base md:text-lg text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick("skills")}
              className="block w-full text-left text-base md:text-lg text-foreground hover:text-primary transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => handleSectionClick("timeline")}
              className="block w-full text-left text-base md:text-lg text-foreground hover:text-primary transition-colors py-2"
            >
              Timeline
            </button>
            <button
              onClick={() => handleSectionClick("projects")}
              className="block w-full text-left text-base md:text-lg text-foreground hover:text-primary transition-colors py-2"
            >
              Projects
            </button>
          </nav>

          {/* Social Links */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border/50">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href={`mailto:${data.personal.email}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Email
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* Modal Overlay */}
      {activeSection && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8">
          <div className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] md:max-h-[80vh] overflow-y-auto relative">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-muted-foreground hover:text-foreground transition-colors z-10 text-xl font-bold w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>

            <div className="p-4 md:p-8">
              {activeSection === "about" && <About />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "timeline" && <Experience />}
              {activeSection === "projects" && <Projects />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
