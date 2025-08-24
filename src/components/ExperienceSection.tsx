import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "University of Hyderabad",
      location: "Hyderabad, India",
      dates: "May 2023 - July 2023",
      responsibilities: [
        "Applied advanced methods including affinity chromatography, ion-exchange chromatography, and enzyme inhibition assays to extract and validate protease inhibitors, demonstrating strong technical expertise and analytical precision.",
        "Designed and conducted pest-management experiments on Achaea janata larvae using protease inhibitors, improving experimental adaptability and demonstrating 70% larval mortality in treated groups.",
        "Tested two colonies (n=100 each), recording control larvae weights of 465–906 mg versus treated averages <250 mg, evidencing >60% growth reduction and suppressed vitality.",
        "Collected and organized 200+ quantitative data points on larval development, strengthening accuracy of growth and mortality trend analysis through careful data management.",
        "Performed t-tests and survival analyses in Python and R, validating statistical significance (p<0.01) with 95% confidence and quantifying effect size to strengthen reliability of pest-management findings.",
        "Developed data visualizations (box plots, survival curves, bar charts) that enhanced results clarity and enabled effective communication of experimental insights to diverse audiences.",
        "Identified consistent trends of stunted growth and elevated mortality, confirming protease inhibitors' 70% effectiveness as natural biocontrol agents, contributing to sustainable agricultural pest-management strategies."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Research experience in healthcare analytics, life sciences, and experimental data analysis
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <h4 className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <Badge variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                          {exp.dates}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;