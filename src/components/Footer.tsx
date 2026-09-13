import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "./ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Philosophy */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="font-bold text-base text-foreground font-sans">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              "{PERSONAL_INFO.heroHeadline}"
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 ml-2 rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </Button>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-border/50 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-muted-foreground gap-2">
          <span>&copy; 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          <span>5-Year Integrated MCA &bull; IIPS, DAVV Indore</span>
        </div>

      </div>
    </footer>
  );
}
