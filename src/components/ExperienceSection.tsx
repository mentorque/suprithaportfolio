import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Safe-T-Wheels",
      location: "Salem, India",
      dates: "Aug 2023 - Aug 2024",
      responsibilities: [
        "Delivered 25–40% quarterly growth by analyzing sales and inventory data from 10,000+ transactions using Power BI dashboards and Excel trend models.",
        "Enabled acquisition of 1,000+ new customers by segmenting 10K+ transactional records using advanced SQL joins, subqueries, and CASE logic.",
        "Saved 15+ hours weekly by automating daily reporting workflows in Excel VBA and Google Sheets, improving cross-functional transparency.",
        "Reduced operational bottlenecks by 20% by identifying process inefficiencies through SQL and Python data mining on sales and fulfillment logs.",
        "Boosted qualified inbound leads by 30% through digital engagement performance analysis, influencing C-level strategic marketing decisions."
      ]
    },
    {
      title: "Procurement Coordinator Intern",
      company: "Flow Con Engineer India Pvt Ltd",
      location: "Coimbatore, India",
      dates: "May 2023 – July 2023",
      responsibilities: [
        "Reduced procurement cycle time by 15% by developing Tableau and Excel dashboards to track supplier KPIs and delivery compliance.",
        "Generated €5,500 in savings within 3 months by conducting vendor cost-efficiency analysis using purchasing data and driving optimized sourcing decisions.",
        "Improved forecast accuracy by 18% through trend analysis of inventory flow and material demand using SQL queries and Tableau visuals."
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
              Professional experience in business analytics, data science, and process optimization
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