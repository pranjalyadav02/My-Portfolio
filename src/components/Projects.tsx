import React, { useState } from "react";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";
import { Github, ExternalLink, BookOpen, Check, Layers, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import SystemFlowVisualizer from "./SystemFlowVisualizer";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import GitHubLiveShowcase from "./GitHubLiveShowcase";

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
            <span>PORTFOLIO CENTERPIECE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Featured Projects &amp; Systems
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
            Systems built to solve concrete operational problems — from state grievance tracking to collegiate communication and academic automation.
          </p>
        </div>

        {/* System Flow Diagram for Jharkhand Ecosystem */}
        <div className="max-w-5xl mx-auto mb-16">
          <SystemFlowVisualizer />
        </div>

        {/* Projects List */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {FEATURED_PROJECTS.map((project, index) => {
            const isFlagship = project.featuredRank === 1 || project.featuredRank === 2;

            return (
              <div
                key={project.id}
                className={`rounded-xl border p-6 md:p-8 transition-all duration-200 ${
                  isFlagship
                    ? "bg-card border-border hover:border-primary/40 shadow-sm"
                    : "bg-card/70 border-border hover:border-border/80"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {project.badge && (
                        <Badge
                          variant={isFlagship ? "default" : "secondary"}
                          className="font-mono text-xs"
                        >
                          {project.badge}
                        </Badge>
                      )}
                      <span className="text-xs font-mono text-muted-foreground">
                        Project 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground font-sans tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Top Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {project.caseStudy && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-1.5 text-xs font-medium"
                        onClick={() => setSelectedCaseStudy(project)}
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        View Case Study
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 text-xs font-medium"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                    {project.liveDemoUrl && (
                      <Button
                        size="sm"
                        className="gap-1.5 text-xs font-medium"
                        asChild
                      >
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Automation Workflow for Lecture Scheduler */}
                {project.id === "lecture-scheduler" && (
                  <div className="mb-6 p-4 rounded-lg bg-muted/40 border border-border">
                    <span className="text-[11px] font-mono font-bold text-foreground block mb-2">
                      AUTOMATION PIPELINE:
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded bg-card border border-border text-foreground">
                        PDF Timetable
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="px-2.5 py-1 rounded bg-card border border-border text-foreground">
                        Parse Schedule
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="px-2.5 py-1 rounded bg-card border border-border text-foreground">
                        Create Lectures
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 text-primary font-semibold">
                        Notify Users
                      </span>
                    </div>
                  </div>
                )}

                {/* Features Highlight */}
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                    Key System Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-foreground/90 bg-muted/30 p-2.5 rounded-md border border-border/50"
                      >
                        <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Role Note */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-muted text-[11px] font-mono text-muted-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.roleNote && (
                    <span className="text-[11px] font-mono text-muted-foreground italic">
                      * {project.roleNote}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Live Showcase component */}
        <div className="max-w-5xl mx-auto">
          <GitHubLiveShowcase />
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
