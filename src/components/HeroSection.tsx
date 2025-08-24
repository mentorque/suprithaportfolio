import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const section = document.querySelector("#about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <img
            src={profilePicture}
            alt="Supritha Raj"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover object-center"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Supritha Raj
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Data Analyst Specializing in Healthcare & Life Sciences
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-white/80 mb-12">
          <MapPin className="w-5 h-5 text-[hsl(var(--hero-accent))]" />
          <span className="text-lg">Galway, Ireland</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </Button>
          <Button 
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[hsl(var(--nav-bg))] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;