
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  index: number;
};

function ProjectCard({ title, description, image, tags, githubLink, demoLink, index }: ProjectCardProps) {
  return (
    <div 
      className={cn(
        "group bg-secondary/50 backdrop-blur-md rounded-xl overflow-hidden",
        "transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-poppins">{title}</h3>
        <p className="text-foreground/70 mb-4 font-inter">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Network Security Monitor",
      description: "A comprehensive monitoring system for detecting and alerting potential security breaches in network infrastructure.",
      image: "https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Network Security", "Monitoring", "Python", "Flask"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "IoT Smart Home System",
      description: "An IoT-based smart home automation system with security features, remote monitoring, and energy optimization capabilities.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["IoT", "Home Automation", "Raspberry Pi", "MQTT"],
      githubLink: "https://github.com"
    },
    {
      title: "Cloud Resource Optimizer",
      description: "A tool that analyzes cloud resource usage patterns and provides recommendations for cost and performance optimization.",
      image: "https://images.unsplash.com/photo-1561441443-f1f164773f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Cloud Computing", "AWS", "Cost Optimization", "Python"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Virtual Lab Environment",
      description: "A comprehensive virtualized lab environment for learning and experimenting with various network configurations and security concepts.",
      image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["Virtualization", "Docker", "Kubernetes", "Networking"],
      githubLink: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 font-poppins relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-2">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects in networking, security, IoT, cloud computing, and virtualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 transform hover:-translate-y-1"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
