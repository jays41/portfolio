import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import data from "../data/Info2.json"

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Function to open image in fullscreen
  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  // Function to close image modal
  const closeImage = () => {
    setSelectedImage(null)
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeImage()
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])
  // Function to parse description with links
  const parseDescription = (description: string, link?: string, linkUrl?: string) => {
    if (!link || !linkUrl) {
      return <span>{description}</span>
    }
    
    const start = description.indexOf("#")
    const end = description.indexOf("#", start + 1)
    
    if (start === -1 || end === -1) {
      return <span>{description}</span>
    }
    
    const beforeLink = description.substring(0, start)
    const linkText = description.substring(start + 1, end)
    const afterLink = description.substring(end + 1)
    
    return (
      <span>
        {beforeLink}
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 underline"
        >
          {linkText}
        </a>
        {afterLink}
      </span>
    )
  }

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
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.2 } 
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card className="gradient-overlay border-2 border-border bg-card rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-accent/50">
                {/* Project Images */}
                {project.images && project.images.length > 0 && (
                  <motion.div 
                    className="p-6 pb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.images.length === 1 ? (
                      <div 
                        className="w-full aspect-video rounded-lg overflow-hidden border border-border/30 bg-muted/20 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                        onClick={() => openImage(project.images[0], project.title)}
                      >
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    ) : project.images.length === 2 ? (
                      <div className="grid grid-cols-2 gap-3">
                        {project.images.map((image, imageIndex) => (
                          <motion.div 
                            key={imageIndex} 
                            className="aspect-square rounded-lg overflow-hidden border border-border/30 bg-muted/20 cursor-pointer"
                            whileHover={{ scale: 1.03, y: -2 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => openImage(image, `${project.title} - ${imageIndex + 1}`)}
                          >
                            <img 
                              src={image} 
                              alt={`${project.title} - ${imageIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {/* Main featured image */}
                        <div 
                          className="w-full aspect-video rounded-lg overflow-hidden border border-border/30 bg-muted/20 transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                          onClick={() => openImage(project.images[0], `${project.title} - Featured`)}
                        >
                          <img 
                            src={project.images[0]} 
                            alt={`${project.title} - Featured`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        {/* Secondary images grid */}
                        <div className="grid grid-cols-3 gap-2">
                          {project.images.slice(1, 4).map((image, imageIndex) => (
                            <motion.div 
                              key={imageIndex + 1} 
                              className="aspect-square rounded-md overflow-hidden border border-border/20 bg-muted/20 cursor-pointer"
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => openImage(image, `${project.title} - ${imageIndex + 2}`)}
                            >
                              <img 
                                src={image} 
                                alt={`${project.title} - ${imageIndex + 2}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                loading="lazy"
                              />
                            </motion.div>
                          ))}
                          {project.images.length > 4 && (
                            <div 
                              className="aspect-square rounded-md overflow-hidden border border-border/20 bg-muted/50 flex items-center justify-center relative cursor-pointer"
                              onClick={() => openImage(project.images[4], `${project.title} - More`)}
                            >
                              <img 
                                src={project.images[4]} 
                                alt={`${project.title} - More`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center hover:bg-black/50 transition-colors duration-200">
                                <span className="text-white text-sm font-medium">+{project.images.length - 4}</span>
                              </div>
                            </div>
                          )}
                        </div>
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
                  <motion.p 
                    className="text-refined text-muted-foreground leading-relaxed text-pretty"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {parseDescription(project.description, project.link, project.linkUrl)}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-xs font-medium px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
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
              {/* Close button */}
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

              {/* Main image */}
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                draggable={false}
              />

              {/* Image title */}
              <motion.div
                className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p className="text-sm font-medium">{selectedImage.alt}</p>
              </motion.div>

              {/* Instructions */}
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
