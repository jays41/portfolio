import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import data from "../data/Info2.json"

export function Projects() {
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
                      <div className="w-full h-48 rounded-lg overflow-hidden border border-border/30 transform transition-transform duration-300 hover:scale-105">
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3 h-48">
                        {project.images.map((image, imageIndex) => (
                          <motion.div 
                            key={imageIndex} 
                            className="rounded-lg overflow-hidden border border-border/30"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <img 
                              src={image} 
                              alt={`${project.title} - ${imageIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
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
    </section>
  )
}
