import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import data from "../data/Info2.json"

type Subproject = {
  title: string
  description: string
  tags: string[]
  link?: string
  linkUrl?: string
  images?: string[]
}

type Project = {
  title: string
  description: string
  tags: string[]
  featured: boolean
  images: string[]
  link?: string
  linkUrl?: string
  subprojects?: Subproject[]
}

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const openImage = (src: string, alt: string) => setSelectedImage({ src, alt })
  const closeImage = () => setSelectedImage(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedImage) closeImage()
        else if (activeProject) setActiveProject(null)
      }
    }
    const isOpen = !!selectedImage || !!activeProject
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage, activeProject])

  const parseDescription = (description: string, link?: string, linkUrl?: string) => {
    if (!link || !linkUrl) return <span>{description}</span>
    const start = description.indexOf("#")
    const end = description.indexOf("#", start + 1)
    if (start === -1 || end === -1) return <span>{description}</span>
    return (
      <span>
        {description.substring(0, start)}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline">
          {description.substring(start + 1, end)}
        </a>
        {description.substring(end + 1)}
      </span>
    )
  }

  const projects = data.projects as Project[]

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-display text-4xl md:text-5xl mb-4 text-foreground">Projects</h2>
          <div className="w-16 h-px bg-accent mb-6"></div>
          <p className="text-refined text-muted-foreground text-lg max-w-2xl">
            A collection of projects spanning machine learning, full-stack development, and quantitative finance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              viewport={{ once: true, amount: 0.1 }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer"
            >
              <Card className="gradient-overlay border-2 border-border bg-card rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-accent/50 h-full">
                {project.images && project.images.length > 0 && (
                  <motion.div
                    className="p-6 pb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.images.length === 1 ? (
                      <div className="w-full aspect-video rounded-lg overflow-hidden border border-border/30 bg-muted/20">
                        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {project.images.slice(0, 2).map((image, i) => (
                          <div key={i} className="aspect-square rounded-lg overflow-hidden border border-border/30 bg-muted/20">
                            <img src={image} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <motion.h3
                      className="heading-elegant text-lg font-medium text-balance leading-tight text-foreground group-hover:text-accent transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-refined text-muted-foreground leading-relaxed text-pretty line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.subprojects && project.subprojects.length > 0 && (
                    <p className="text-xs text-accent/70 font-medium">
                      {project.subprojects.length} strategies — click to explore
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && !selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative bg-card border border-border rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border px-8 py-5 flex items-start justify-between gap-4 z-10">
                <h2 className="heading-elegant text-xl font-medium text-foreground leading-tight">{activeProject.title}</h2>
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-8 py-6 space-y-8">
                {/* Images */}
                {activeProject.images && activeProject.images.length > 0 && (
                  <div className={activeProject.images.length === 1 ? "" : "grid grid-cols-2 gap-3"}>
                    {activeProject.images.map((image, i) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden border border-border/30 bg-muted/20 cursor-pointer"
                        onClick={() => openImage(image, `${activeProject.title} - ${i + 1}`)}
                      >
                        <img src={image} alt={`${activeProject.title} - ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="space-y-2">
                  <p className="text-refined text-muted-foreground leading-relaxed">
                    {parseDescription(activeProject.description, activeProject.link, activeProject.linkUrl)}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Subprojects */}
                {activeProject.subprojects && activeProject.subprojects.length > 0 && (
                  <div className="space-y-4">
                    <div className="w-full h-px bg-border" />
                    <h3 className="heading-elegant text-base font-medium text-foreground">Strategies</h3>
                    <div className="space-y-4">
                      {activeProject.subprojects.map((sub, i) => (
                        <div key={i} className="rounded-xl border border-border/60 bg-muted/20 p-5 space-y-3">
                          <h4 className="heading-elegant text-sm font-medium text-foreground">{sub.title}</h4>
                          <p className="text-refined text-muted-foreground text-sm leading-relaxed">
                            {parseDescription(sub.description, sub.link, sub.linkUrl)}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {sub.tags.map((tag, ti) => (
                              <Badge key={ti} variant="secondary" className="bg-muted/60 text-muted-foreground text-xs px-2 py-0.5">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          {sub.images && sub.images.length > 0 && (
                            <div className="flex gap-2 pt-1">
                              {sub.images.map((image, ii) => (
                                <div
                                  key={ii}
                                  className="w-20 h-20 rounded-lg overflow-hidden border border-border/30 cursor-pointer flex-shrink-0"
                                  onClick={() => openImage(image, `${sub.title} - ${ii + 1}`)}
                                >
                                  <img src={image} alt={`${sub.title} - ${ii + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-200" loading="lazy" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeImage}
          >
            <motion.div
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors duration-200"
                onClick={closeImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                ×
              </motion.button>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                draggable={false}
              />
              <motion.div
                className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p className="text-sm font-medium">{selectedImage.alt}</p>
              </motion.div>
              <motion.div
                className="absolute top-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Press ESC or click outside to close
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
