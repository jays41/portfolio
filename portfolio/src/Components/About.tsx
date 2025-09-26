import data from "../data/Info2.json"

export function About() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">About</h2>
        <div className="w-16 h-px bg-primary"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-muted-foreground">
          {data.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {paragraph.includes("BSc in Computer Science") ? (
                <>
                  Currently pursuing a <span className="text-primary font-medium">BSc in Computer Science</span> at
                  King's College London, where I'm expected to graduate with First Class Honours in May 2026.
                </>
              ) : paragraph.includes("technical complexity") ? (
                <>
                  I'm particularly drawn to projects that combine{" "}
                  <span className="text-primary font-medium">technical complexity</span> with
                  <span className="text-primary font-medium"> real-world impact</span>, whether that's building
                  sentiment analysis tools for financial markets or creating data-driven applications that solve genuine
                  problems.
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          {data.about.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300"
            >
              <h3 className="text-lg font-medium mb-3 text-foreground">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description.includes("King's College London") ? (
                  <>
                    Software Engineering Student at{" "}
                    <span className="text-primary font-medium">King's College London</span>, specializing in full-stack
                    development and machine learning applications.
                  </>
                ) : highlight.description.includes("HubSpot") ? (
                  <>
                    Software Engineering Intern at <span className="text-primary font-medium">HubSpot</span>,
                    contributing to Data Studio and improving product reliability for thousands of customers.
                  </>
                ) : highlight.description.includes("FinBERT") ? (
                  <>
                    Co-authored research on <span className="text-primary font-medium">FinBERT applications</span> for
                    sentiment analysis and developed quantitative portfolio models for{" "}
                    <span className="text-primary font-medium">Deutsche Bank</span>.
                  </>
                ) : (
                  highlight.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
