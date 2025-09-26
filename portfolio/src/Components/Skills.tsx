import { Card, CardContent, CardHeader } from "@/components/ui/card"
import data from "../data/Info2.json"

export function Skills() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Skills</h2>
        <div className="w-16 h-px bg-primary"></div>
      </div>

      <div className="space-y-8">
        {data.skills.categories.map((category, index) => (
          <Card key={index} className="border-border/50 bg-card/50 hover:bg-card/70 transition-all duration-300">
            <CardHeader className="pb-4">
              <h3 className="text-lg font-medium text-foreground">{category.title}</h3>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed ml-0">{skill.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
