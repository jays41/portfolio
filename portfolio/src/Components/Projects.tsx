import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <section id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-4 text-foreground">Selected Work</h2>
          <div className="w-16 h-px bg-accent mb-6"></div>
          <p className="text-refined text-muted-foreground text-lg max-w-2xl">
            A collection of projects spanning machine learning, full-stack development, and quantitative finance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <Card
              key={index}
              className={`gradient-overlay border-2 border-border bg-card elegant-hover rounded-2xl overflow-hidden group ${
                project.featured ? "md:col-span-1 xl:col-span-1" : ""
              }`}
            >
              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <div className="p-6 pb-0">
                  {project.images.length === 1 ? (
                    <div className="w-full h-48 rounded-lg overflow-hidden border border-border/30">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 h-48">
                      {project.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="rounded-lg overflow-hidden border border-border/30">
                          <img 
                            src={image} 
                            alt={`${project.title} - ${imageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="heading-elegant text-lg font-medium text-balance leading-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20 text-xs font-medium"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-refined text-muted-foreground leading-relaxed text-pretty">
                  {parseDescription(project.description, project.link, project.linkUrl)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-xs font-medium px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
