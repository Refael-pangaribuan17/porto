import { useEffect } from "react";
import { 
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer 
} from "@/components";
import { PrestasiAkademikSection } from "@/components/PrestasiAkademikSection";

const Index = () => {
  // Set dark mode by default when component mounts
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PrestasiAkademikSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
