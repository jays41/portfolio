import { Card, CardContent, CardHeader } from "@/components/ui/card"
import data from "../data/Info2.json"

export function Experience() {
  // Image mapping using public paths
  const imageMap: { [key: string]: string } = {
    "King's College London": "/src/assets/images/education/kcl.png",
    "Roundwood Park School": "/src/assets/images/education/rps.png",
    "HubSpot": "/src/assets/images/experience/hubspot.png",
    "Ashbury Global": "/src/assets/images/experience/ashbury.webp",
    "Valtech": "/src/assets/images/experience/valtech.png",
    "Armalytix": "/src/assets/images/experience/armalytix.png",
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Timeline</h2>
        <div className="w-16 h-px bg-primary"></div>
      </div>

      <div className="relative">
        {/* Vertical timeline bar */}
        <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-primary/30"></div>

        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Company Image */}
              <div className="relative z-10 flex-shrink-0">
                {imageMap[exp.company] && (
                  <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-primary bg-white">
                    <img 
                      src={imageMap[exp.company]} 
                      alt={exp.company}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                )}
              </div>

              {/* Content card */}
              <Card className="flex-1 border border-border/50 bg-card/50 hover:bg-card/70 transition-all duration-300 rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-left lg:text-right">
                      <p className="text-sm font-medium text-muted-foreground">{exp.date}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="text-primary mt-2 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
