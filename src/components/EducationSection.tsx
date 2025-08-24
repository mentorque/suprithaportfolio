import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award, Star } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "University College Cork",
      degree: "MSc Business Analytics",
      dates: "2024 - 2025",
      grade: "",
      coursework: [
        "Predictive & Prescriptive Analytics",
        "Data Analysis and Visualization",
        "Python",
        "Practical Application of BA",
        "Design Thinking"
      ]
    },
    {
      institution: "Kumaraguru College of Technology",
      degree: "BE in Electronics and Communication Engineering",
      dates: "2019 – 2023",
      grade: "",
      coursework: []
    }
  ];

  const certifications = [
    "SQL and Relational Databases 101, IBM",
    "Introduction to CRM with HubSpot, Coursera",
    "AI, Business and the Future of Work, Lund University",
    "Introduction to Statistics, Stanford University",
    "Business Analytics with Excel, Johns Hopkins University",
    "Data Visualization Using Python, Great Learning",
    "Excel Skills for Business Essentials, Macquarie University",
    "Crash Course on Python, Coursera"
  ];

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Achievements
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic background and professional certifications in business analytics and data science
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
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
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-[hsl(var(--primary))]" />
              Professional Certifications
            </h3>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-[hsl(var(--skill-bg))] hover:bg-[hsl(var(--primary))]/10 transition-colors duration-200 group">
                      <div className="flex-shrink-0 mt-1">
                        <Star className="w-4 h-4 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--hero-accent))] transition-colors duration-200" />
                      </div>
                      <p className="text-foreground leading-relaxed font-medium group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                        {cert}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;