import React from "react";
import { REAL_WORLD_PILLARS } from "@/data/portfolioData";
import { Users2, CheckSquare2, Cpu } from "lucide-react";

const icons = [Users2, CheckSquare2, Cpu];

export default function RealWorldSystems() {
  return (
    <section id="systems" className="py-16 md:py-24 border-y border-border/60 bg-muted/20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
            <span>CORE PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Why I Build
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
            Software becomes meaningful when it leaves the sandbox and solves actual friction for human beings and organizations.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REAL_WORLD_PILLARS.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={pillar.number}
                className="relative p-7 rounded-xl border border-border bg-card/70 hover:bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-mono text-primary/30 group-hover:text-primary transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span>Real-World Engineering</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
