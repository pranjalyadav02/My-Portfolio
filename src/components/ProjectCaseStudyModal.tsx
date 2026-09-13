import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Project } from "@/data/portfolioData";
import { Check, Github, ExternalLink, Layers, Cpu, ShieldAlert, Target, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectCaseStudyModal({
  project,
  isOpen,
  onClose,
}: ProjectCaseStudyModalProps) {
  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-6 md:p-8">
        <DialogHeader className="space-y-2 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-xs text-primary border-primary/40">
              System Case Study
            </Badge>
            {project.badge && (
              <Badge variant="secondary" className="font-mono text-xs">
                {project.badge}
              </Badge>
            )}
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight text-foreground font-sans">
            {project.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {project.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4 text-left">
          
          {/* 1. Problem */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-destructive uppercase tracking-wider">
              <ShieldAlert className="h-4 w-4" />
              1. The Problem Domain
            </div>
            <div className="p-3.5 rounded-lg bg-destructive/5 border border-destructive/20 text-sm text-foreground/90 leading-relaxed">
              {caseStudy.problem}
            </div>
          </div>

          {/* 2. Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-wider">
              <Target className="h-4 w-4" />
              2. Architectural Approach
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-1">
              {caseStudy.approach}
            </p>
          </div>

          {/* 3. System Architecture */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              <Layers className="h-4 w-4 text-primary" />
              3. System Components &amp; Design
            </div>
            <div className="grid grid-cols-1 gap-2 pl-1">
              {caseStudy.systemArchitecture.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-muted-foreground bg-muted/40 p-2.5 rounded-md border border-border/60"
                >
                  <span className="font-mono font-bold text-primary shrink-0">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Key Features */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              <Check className="h-4 w-4 text-emerald-500" />
              4. Key Features &amp; Workflows
            </div>
            <ul className="space-y-1.5 pl-1">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Technology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground uppercase tracking-wider">
              <Cpu className="h-4 w-4 text-primary" />
              5. Technology Stack
            </div>
            <div className="flex flex-wrap gap-1.5 pl-1">
              {caseStudy.technology.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* 6. Outcome & Purpose */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-wider">
              <Award className="h-4 w-4" />
              6. Outcome &amp; Real-World Purpose
            </div>
            <div className="p-3.5 rounded-lg bg-primary/5 border border-primary/20 text-sm text-foreground/90 leading-relaxed">
              {caseStudy.outcome}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-muted-foreground/70 font-mono italic border-t border-border pt-3">
            Note: Designed and developed as an academic and system engineering project focused on public service workflows.
          </p>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
            <Button size="sm" className="gap-2" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
                View GitHub Code
              </a>
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
