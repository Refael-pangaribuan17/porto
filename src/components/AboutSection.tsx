
import { Cloud, Network, Shield, Cpu, Code, Monitor } from "lucide-react";
import { FileCode, Database, GitBranch, Server, Terminal, Globe } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const tools = [
  { name: "C/C++", icon: <FileCode size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "CSS", icon: <Code size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "HTML", icon: <Code size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Java", icon: <Code size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "PHP", icon: <Code size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Python", icon: <Code size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Bootstrap", icon: <Globe size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Laravel", icon: <Server size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Nginx", icon: <Server size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Apache", icon: <Server size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "MySQL", icon: <Database size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "MongoDB", icon: <Database size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Git", icon: <GitBranch size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Github", icon: <GitBranch size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Arduino", icon: <Cpu size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Cisco", icon: <Network size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Kubernetes", icon: <Server size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Postman", icon: <Globe size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "WordPress", icon: <Globe size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Visual Studio", icon: <Code size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "CX-Programmer", icon: <Monitor size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Boa Spot", icon: <Shield size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "Docker", icon: <Server size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "OpenTofu", icon: <Shield size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "VirtualBox", icon: <Monitor size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
  { name: "XAMPP", icon: <Server size={20} color="#FFFFFF" />, color: "bg-[#FFD700] text-black" },
];

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 via-secondary/20 to-background/30 backdrop-blur-sm p-6 transition-all duration-500 hover:transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mb-5 transform transition-transform duration-500 group-hover:rotate-[20deg]">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title}</h3>
        <p className="text-foreground/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 font-poppins relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-3">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
            Discover My Story
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="w-full lg:w-2/5 animate-fade-in">
            <div className="relative group">
              <AspectRatio ratio={4 / 5} className="bg-muted">
                <img
                  src="/lovable-uploads/6349ba89-b06f-4097-bb92-e425be59dc49.png"
                  alt="Portrait"
                  className="w-full h-full object-cover object-center brightness-105 contrast-105"
                  loading="eager"
                />
              </AspectRatio>
            </div>
          </div>

          <div className="w-full lg:w-3/5 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                I'm Refael Pangaribuan, a Technology Enthusiast
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am a student of Computer Technology at the D3 level with a strong interest in digital technology, particularly in networking, cybersecurity, Internet of Things (IoT), and industrial automation. Throughout my studies, I have actively developed skills in various fields, from modern web application development to the integration of IoT systems and machine vision. I have experience using technologies like React and Node.js to build responsive web applications, along with knowledge in database management and cloud services. In the IoT space, I am passionate about designing real-time monitoring and control systems with a focus on efficiency and scalability. Additionally, I have studied the fundamentals of cybersecurity to ensure that every solution developed remains secure and reliable. In the field of automation, I have a solid understanding of using devices like Hikrobot and integrating them with PLC for visual recognition and quality control systems. I believe that the ability to combine these various technologies is key to addressing the challenges of the Industry 4.0 era.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-xl text-primary font-medium mb-3">My Tools</h2>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Technologies & Frameworks
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((t) => (
              <span 
                key={t.name} 
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${t.color} hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
              >
                {t.icon}
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
