"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="heading-elegant text-xl font-medium text-foreground">Jay Shah</div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-accent relative ${
                  activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-accent"></div>
                )}
              </a>
            ))}
          </div>

          <Button
            asChild
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium elegant-hover"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
