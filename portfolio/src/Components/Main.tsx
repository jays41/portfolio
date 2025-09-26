"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
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
      {/* Header with animation */}
      <motion.div 
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          {data.personal.name}
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-muted-foreground max-w-4xl leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {data.personal.intro}
        </motion.p>
      </motion.div>

      {/* Main Cards with staggered animation */}
      <motion.div 
        className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* CV Card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="flex-1 p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
            <motion.h2 
              className="text-xl md:text-2xl font-serif font-semibold text-primary mb-4 md:mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              My CV
            </motion.h2>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transform transition-transform duration-200 hover:scale-105"
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
                  className="text-primary hover:underline transition-colors duration-200"
                >
                  here
                </button>
              </p>
            </motion.div>
          </Card>
        </motion.div>

        {/* Navigation Card */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="flex-1 p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
            <motion.nav 
              className="space-y-3 md:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              {[
                { key: "about", label: "About" },
                { key: "skills", label: "Skills" },
                { key: "timeline", label: "Timeline" },
                { key: "projects", label: "Projects" }
              ].map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => handleSectionClick(item.key)}
                  className="block w-full text-left text-base md:text-lg text-foreground hover:text-primary transition-colors py-2 hover:pl-2 transition-all duration-200"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.nav>

            {/* Social Links */}
            <motion.div 
              className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {[
                  { href: data.personal.linkedin, label: "LinkedIn" },
                  { href: data.personal.github, label: "GitHub" },
                  { href: `mailto:${data.personal.email}`, label: "Email" }
                ].map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Modal Overlay with AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div 
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
          >
            <motion.div 
              className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] md:max-h-[80vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
            >
              <motion.button
                onClick={handleClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-muted-foreground hover:text-foreground transition-colors z-10 text-xl font-bold w-8 h-8 flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                ×
              </motion.button>

              <motion.div 
                className="p-4 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {activeSection === "about" && <About />}
                {activeSection === "skills" && <Skills />}
                {activeSection === "timeline" && <Experience />}
                {activeSection === "projects" && <Projects />}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
