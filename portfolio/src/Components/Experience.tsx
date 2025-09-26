import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
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
          {data.experience.map((exp, index) => {
            const isEven = index % 2 === 0
            const isEducation = exp.type === 'education'
            
            return (
              <motion.div 
                key={index} 
                className="relative flex items-start gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Company Image with animation */}
                <motion.div 
                  className="relative z-10 flex-shrink-0"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, x: isEducation ? 100 : -100 },
                    visible: { opacity: 1, scale: 1, x: 0 },
                  }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {imageMap[exp.company] && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-primary bg-white transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src={imageMap[exp.company]} 
                        alt={exp.company}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  )}
                </motion.div>

                {/* Content card with slide animation */}
                <motion.div
                  className="flex-1"
                  variants={{
                    hidden: { opacity: 0, x: isEducation ? -100 : 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                >
                  <Card className="border border-border/50 bg-card/50 hover:bg-card/70 transition-all duration-300 rounded-xl overflow-hidden transform hover:scale-[1.02] hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-medium text-foreground mb-1 transition-colors duration-200 hover:text-primary">{exp.title}</h3>
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
                          <motion.li 
                            key={pointIndex} 
                            className="text-muted-foreground leading-relaxed flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + pointIndex * 0.1 + 0.5, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-primary mt-2 flex-shrink-0 transition-transform duration-200 hover:scale-125">•</span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
