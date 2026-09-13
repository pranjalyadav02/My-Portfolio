import React from "react";
import { ArrowDown, Github, Mail, Sparkles, Terminal, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background grid accents */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-mono text-muted-foreground backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>5-Year Integrated MCA • IIPS, DAVV Indore</span>
            <span className="text-border">|</span>
            <span className="text-primary font-medium">Software &amp; Real-World Systems</span>
          </div>

          {/* Subtitle intro */}
          <p className="text-lg md:text-xl font-mono text-muted-foreground tracking-tight">
            Hi, I'm <span className="text-foreground font-semibold">Pranjal Yadav</span>.
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] font-sans">
            Building technology that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              solves real problems.
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.heroSubheadline}
          </p>

          {/* Core Philosophy Banner */}
          <div className="py-2">
            <p className="italic text-sm text-foreground/80 font-medium">
              "{PERSONAL_INFO.corePhilosophy}"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              size="lg"
              className="font-semibold px-6 shadow-sm"
              onClick={() => scrollTo("projects")}
            >
              View My Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 font-medium"
              asChild
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="gap-2 font-medium"
              onClick={() => scrollTo("contact")}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Technical Scope Highlights (Clear positioning) */}
          <div className="pt-10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-lg border border-border/80 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1">
                <Layers className="h-3.5 w-3.5" />
                Full-Stack Systems
              </div>
              <p className="text-xs text-muted-foreground">
                Designing end-to-end architectures, RBAC permissions, and administrative workflows.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/80 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                Practical Impact
              </div>
              <p className="text-xs text-muted-foreground">
                Focusing on real civic, academic, and organizational accountability tools.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-border/80 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-primary mb-1">
                <Sparkles className="h-3.5 w-3.5" />
                AI Integration
              </div>
              <p className="text-xs text-muted-foreground">
                Integrating open-source models &amp; API workflows to automate problem categorization.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
