
import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear the error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 font-poppins relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl text-primary font-medium mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:contact@refaelpangaribuan123@gmail.com"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-foreground/70">refaelpangaribuan123@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Refael-pangaribuan17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <p className="text-foreground/70">Refael-pangaribuan17</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/refael-pangaribuan-257a06272/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">LinkedIn</h4>
                  <p className="text-foreground/70">Refael Pangaribuan</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 animate-fade-in">
            <div className="bg-secondary/30 backdrop-blur-md rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                      errors.name ? "border-destructive" : "border-border"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                      errors.email ? "border-destructive" : "border-border"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                      errors.message ? "border-destructive" : "border-border"
                    )}
                    placeholder="I'd like to discuss a project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "transition-all duration-300 transform hover:-translate-y-1",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-500/20 text-green-500 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-destructive/20 text-destructive rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed to send message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
