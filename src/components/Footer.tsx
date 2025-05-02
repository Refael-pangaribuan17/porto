import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mt-6 pt-6 border-t border-border text-center text-sm text-foreground/60">
        &copy; {currentYear} Refael Pangaribuan. All rights reserved.
      </div>
    </footer>
  );
}
