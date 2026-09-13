import React from "react";
import { EDUCATION_TIMELINE } from "@/data/portfolioData";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-border/60 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Education Timeline
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
            Formal collegiate curriculum and academic track record at IIPS, DAVV.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative pl-6 border-l-2 border-border/80 space-y-8">
          {EDUCATION_TIMELINE.map((item, idx) => {
            const isCurrent = idx === 0;

            return (
              <div key={item.period} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isCurrent
                      ? "bg-primary border-background text-primary-foreground shadow-sm"
                      : "bg-background border-border text-muted-foreground"
                  }`}
                >
                  <GraduationCap className="h-3 w-3" />
                </div>

                <div
                  className={`rounded-xl border p-6 transition-all duration-200 ${
                    isCurrent
                      ? "bg-card border-primary/40 shadow-sm"
                      : "bg-card/70 border-border"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-primary font-bold flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </span>
                    <Badge
                      variant={isCurrent ? "default" : "secondary"}
                      className="font-mono text-xs w-fit"
                    >
                      {item.performance}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-foreground font-sans">
                    {item.degree}
                  </h3>

                  <p className="text-sm text-muted-foreground font-medium mt-1">
                    {item.institution}
                  </p>

                  {item.notes && (
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/50 leading-relaxed">
                      {item.notes}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
