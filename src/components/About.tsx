import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BookOpen, Code2, Users, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

const storySteps = [
  { step: "01", label: "Student", desc: "5-Year Integrated MCA at IIPS, DAVV" },
  { step: "02", label: "CS Fundamentals", desc: "Data structures, algorithms & database architecture" },
  { step: "03", label: "Software Systems", desc: "Full-stack web apps, RBAC, and responsive UI" },
  { step: "04", label: "Real Problems", desc: "Grievance portals, scheduling & communication" },
  { step: "05", label: "AI Integration", desc: "Connecting open-source models & APIs into workflows" },
  { step: "06", label: "Continuous Growth", desc: "Iterating on feedback, testing, and system design" },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
              <span>BACKGROUND &amp; PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
              I like building things that have a purpose.
            </h2>
          </div>

          {/* Narrative Content Card */}
          <div className="rounded-xl border border-border bg-card p-6 md:p-8 space-y-4 shadow-sm mb-12">
            {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Portfolio Story Progression */}
          <div className="rounded-xl border border-border/80 bg-muted/30 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-foreground font-sans">
                  The Journey So Far
                </h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  How my engineering perspective has formed
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-background border border-border text-primary font-semibold">
                Progressive Focus
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {storySteps.map((item, idx) => (
                <div
                  key={item.step}
                  className="p-3 rounded-lg border border-border bg-card flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-mono font-bold text-primary mb-1">
                      {item.step}
                    </div>
                    <div className="text-xs font-bold text-foreground mb-1 leading-snug">
                      {item.label}
                    </div>
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-2 leading-tight">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
