
import { ArrowDown, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "./TypingAnimation";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center font-poppins pt-16 overflow-hidden bg-gradient-to-b from-background to-background/50"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content with Enhanced Typography */}
          <div className="w-full lg:w-3/5 animate-fade-in space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-2 tracking-wider">
              <TypingAnimation />
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Hi, I&apos;m <span className="text-primary">Refael</span> Pangaribuan
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Tech enthusiast specializing in network, cyber security, IoT, cloud, web development, machine vision and virtualization.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="/resume.pdf" 
                download 
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300",
                  "bg-primary text-primary-foreground hover:bg-primary/90 transform hover:-translate-y-1 hover:shadow-lg",
                  "backdrop-blur-sm"
                )}
              >
                <ArrowDown className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content with Enhanced Image Styling */}
          <div className="w-full lg:w-2/5 flex justify-center animate-scale-in">
            <div className="relative group">
              {/* Profile Image Container with Modern Styling */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 p-2 transition-transform duration-500 hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/212538e9-c771-484f-bf4c-5f4197e9ff34.png"
                    alt="Refael Pangaribuan"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -z-10 inset-0 -m-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary rounded-full animate-bounce delay-100"></div>
              <div className="absolute bottom-10 -left-5 w-8 h-8 bg-secondary rounded-full animate-ping delay-300"></div>
              <div className="absolute top-1/3 -right-8 w-6 h-6 bg-primary/50 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-foreground/60 mb-2 font-medium tracking-wider">Scroll down</span>
          <div className="w-6 h-12 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-2 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
