import React from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { Award, BookOpen, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
            <span>VERIFIED CREDENTIALS &amp; STUDY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Certifications &amp; Continuous Learning
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
            Formal programming certifications, applied AI integration coursework, and cloud fundamentals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((item) => {
            const isCert = item.type === "certificate";

            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg ${isCert ? 'bg-primary/10 text-primary' : 'bg-muted text-foreground'}`}>
                      {isCert ? <Award className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                    </div>
                    <Badge
                      variant={isCert ? "default" : "secondary"}
                      className="font-mono text-[11px]"
                    >
                      {isCert ? "Certification" : "Self-Paced Coursework"}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-foreground font-sans mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-primary font-semibold mb-3">
                    Provider: {item.issuer}
                  </p>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/60 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{isCert ? "Completed & Verified" : "Completed Self-Paced Study"}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
