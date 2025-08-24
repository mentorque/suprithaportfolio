import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin, GraduationCap, Calendar, Globe, Award } from "lucide-react";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Galway, Ireland" },
    { icon: GraduationCap, label: "Education", value: "MSc Biomedical Genomics" },
    { icon: Calendar, label: "Experience", value: "Research Experience" },
    { icon: Globe, label: "Specialization", value: "Healthcare & Life Sciences Data Analysis" },
  ];

  const contactInfo = [
    { icon: Phone, value: "+353899765583" },
    { icon: Mail, value: "supritharaj.m@gmail.com" },
    { icon: MapPin, value: "Galway, Ireland" },
    { icon: Linkedin, value: "LinkedIn Profile" },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Takes 2/3 of the space */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Data Analyst & Healthcare Sciences Specialist
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Data analyst specializing in healthcare and life sciences, leveraging Python, R, and statistical methods to deliver KPI dashboards, QC monitoring, and evidence-based recommendations. Experienced with experimental design, survival analysis, and process optimization, translating complex lab and clinical-adjacent datasets into actionable trends for quality, throughput, and risk management. Adept at reproducible workflows (Git, Jupyter, RMarkdown) and stakeholder-ready storytelling in Tableau and PowerPoint within GMP-aware contexts.
              </p>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-200">
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    <span className="text-foreground font-medium">{contact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts Sidebar - Takes 1/3 of the space */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
                    Quick Facts
                  </h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex-shrink-0 mt-1">
                          <fact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                            {fact.label}:
                          </p>
                          <p className="text-muted-foreground mt-1 font-medium">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;