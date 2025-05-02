
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when navigating
  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins",
        isScrolled 
          ? "py-2 bg-background/90 backdrop-blur-md border-b border-border shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold text-foreground"
          onClick={() => handleNavClick("home")}
        >
          <span className="text-primary">Portfolio</span>.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["home", "about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize text-foreground/80 hover:text-primary transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="text-foreground/80 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background flex flex-col justify-center items-center md:hidden transition-all duration-300",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 z-40"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        {["home", "about", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="capitalize text-2xl py-4 text-foreground/80 hover:text-primary transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item);
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
