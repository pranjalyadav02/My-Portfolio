import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Code, Globe, Database, Network, Binary, Sparkles, Check } from "lucide-react";
import { Badge } from "./ui/badge";

const categoryIcons: Record<string, React.ElementType> = {
  Programming: Code,
  "Web Development": Globe,
  "Backend & Database": Database,
  "Core Computer Science": Binary,
  "Python & Data": Network,
  "AI Integration": Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border/60 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
            <span>TECHNICAL TOOLBOX</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Skills &amp; Capabilities
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
            Categorized technical fundamentals and applied tools. No artificial percentage meters — just the technologies I build with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.title] || Code;
            const isFoundational = category.isFoundational;
            const isAI = category.title === "AI Integration";

            return (
              <div
                key={category.title}
                className={`rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  isAI
                    ? "bg-card border-primary/40 shadow-sm"
                    : isFoundational
                    ? "bg-card/70 border-dashed border-border"
                    : "bg-card border-border hover:border-border/80"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${isAI ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-base text-foreground font-sans">
                        {category.title}
                      </h3>
                    </div>
                    {category.badgeText && (
                      <Badge
                        variant={isFoundational ? "outline" : "secondary"}
                        className={`text-[10px] font-mono shrink-0 ${
                          isFoundational ? 'border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/5' : 'text-primary'
                        }`}
                      >
                        {category.badgeText}
                      </Badge>
                    )}
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-muted/60 text-foreground border border-border/70 hover:border-primary/40 transition-colors"
                      >
                        <Check className="h-3 w-3 text-primary/70 shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {isFoundational && (
                  <p className="mt-4 pt-3 border-t border-border/40 text-[11px] text-muted-foreground font-mono">
                    * Foundational academic &amp; data analysis coursework.
                  </p>
                )}

                {isAI && (
                  <p className="mt-4 pt-3 border-t border-border/40 text-[11px] text-primary/80 font-mono">
                    * Applied model integration &amp; API workflows for applications.
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
