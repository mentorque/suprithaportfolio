import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectGaming from "@/assets/project-gaming.jpg";
import projectOcean from "@/assets/project-ocean.jpg";
import projectOil from "@/assets/project-oil.jpg";
import projectDeloitte from "@/assets/project-deloitte.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Gaming Analytics Dashboard for Gamucopia Creatives",
      description: "Built an interactive Power BI dashboard consolidating financial, marketing, and user engagement data for real-time monitoring of player churn, revenue forecasts, and marketing ROI. Used Python (Pandas, ARIMA, Prophet) to deliver descriptive and predictive analytics, driving actionable recommendations for budget optimization.",
      image: projectGaming,
      technologies: ["Power BI", "Python", "Pandas", "ARIMA", "Prophet", "Analytics"],
    },
    {
      title: "ISCG Case Competition – Deloitte",
      description: "Collaborated with Deloitte professionals to analyze customer insights and market positioning, developing data-driven strategic packaging and marketing recommendations.",
      image: projectDeloitte,
      technologies: ["Strategy", "Customer Analysis", "Market Research", "Consulting"],
    },
    {
      title: "The Ocean Cleanup Dashboard",
      description: "Developed a Tableau dashboard to track progress on SDG 6 and SDG 14 using real-world marine microplastics and water quality datasets. Conducted extensive data cleaning and statistical analysis, designed geospatial maps and KPI scorecards, and generated actionable insights for prioritizing cleanup efforts.",
      image: projectOcean,
      technologies: ["Tableau", "Environmental Data", "Geospatial Analysis", "SDG Tracking"],
    },
    {
      title: "Crude Oil Price Prediction - IBM",
      description: "Designed a time-series forecasting system to predict crude oil prices using 30 years of historical market and geopolitical data. Employed statistical modeling techniques and delivered an interactive dashboard for price prediction and decision support in investment and energy sector planning.",
      image: projectOil,
      technologies: ["Time Series", "Forecasting", "Statistical Modeling", "Financial Analytics"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key projects showcasing expertise in business analytics, data science, and strategic insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;