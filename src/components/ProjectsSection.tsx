import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectPrimates from "@/assets/project-primates.jpg";
import projectMolecular from "@/assets/project-molecular.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Evolution of Detoxification Genes in Primates",
      description: "Analyzed 85 protein sequences from 5 primate species using Python, aligned 338 positions, constructing 3 phylogenetic trees (1,000 bootstraps), and identified 10+ conserved motifs, advancing evolutionary insights by 25%. Built and validated 3D protein models with automated tools, applying hypothesis testing to ensure accuracy, and achieving scores >0.7 for 90% of models.",
      image: projectPrimates,
      technologies: ["Python", "Phylogenetics", "Bioinformatics", "Statistical Analysis", "3D Modeling"],
      link: "https://drive.google.com/file/d/1Rby8PxP14GSCneFXl8NbS-oyu5OMdH1_/view?usp=sharing"
    },
    {
      title: "DNA extraction and optimisation of equipment",
      description: "Executed 10+ molecular biology experiments, improving efficiency by 20%, validating core protocols, and isolating 150 mg DNA (>1.8 purity, 95% suitability for downstream analysis). Optimized PCR (increasing 25% efficiency and decreasing 40% nonspecific products) and visualized DNA bands with 90% integrity for precise fragment verification.",
      image: projectMolecular,
      technologies: ["Molecular Biology", "PCR Optimization", "DNA Analysis", "Laboratory Techniques"],
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
              Key research projects showcasing expertise in bioinformatics, molecular biology, and data analysis
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
                      type="button"
                      variant="outline"
                      className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-200"
                      onClick={(e) => {
                        if (project.link) {
                            window.open(project.link, '_blank', 'noopener,noreferrer');
                      } else {
                          e.preventDefault(); // keep UI the same; do nothing on click
                        }
                      }}
                      aria-disabled={!project.link} // optional: accessibility only
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
