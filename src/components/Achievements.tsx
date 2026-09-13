import React from "react";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { Trophy, Users, Award } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 border-t border-border/60 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
            <span>MILESTONES &amp; HACKATHONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Key Achievements
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
            Collaborative competitive hackathon engineering experiences.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.title}
              className="rounded-xl border border-border bg-card p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5 hover:border-primary/40 transition-all shadow-sm"
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                <Trophy className="h-6 w-6" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="font-mono text-xs">
                    {ach.badge}
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    {ach.event}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground font-sans">
                  {ach.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
