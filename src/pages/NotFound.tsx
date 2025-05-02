import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-poppins">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground/80 mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className={cn(
            "inline-flex items-center px-6 py-3 rounded-full",
            "bg-primary text-primary-foreground font-medium",
            "hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
          )}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
