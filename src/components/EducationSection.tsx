import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "University of Galway",
      degree: "MSc in Biomedical Genomics",
      dates: "2023 - 2024",
      grade: "",
      coursework: [
        "Genomics techniques",
        "Statistical Computing with R",
        "Cancer Genomics",
        "Programming for Biology using Python",
        "Data Visualization"
      ]
    },
    {
      institution: "Osmania University College for Women",
      degree: "BSc in Genetics and Biotechnology", 
      dates: "2019 – 2022",
      grade: "",
      coursework: [
        "Biostatistics",
        "Cytogenetics", 
        "Preventive Medicine",
        "Bioinformatics",
        "Biophysical Techniques",
        "Population Genetics"
      ]
    }
  ];

  const certifications = [
    {
      title: "Good Manufacturing Practices (GMP) for Safeguarding Product Quality",
      issuer: "Alison",
      date: ""
    },
    {
      title: "Research Internship Program",
      issuer: "University of Hyderabad, India",
      date: ""
    },
    {
      title: "Genomic Variant Analysis & Clinical Interpretation Workshop",
      issuer: "CSIR - Institute of Genomics, Hyderabad, India", 
      date: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic background and professional certifications in biomedical genomics and life sciences research
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.dates}</span>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.coursework.length > 0 && (
                    <CardContent>
                      <p className="font-semibold text-foreground mb-3">Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge 
                            key={courseIndex}
                            variant="secondary"
                            className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] text-sm hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-foreground mb-2">
                      {cert.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-[hsl(var(--primary))]">
                      {cert.issuer}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;