import React, { useState } from "react";
import { User, AlertCircle, Sparkles, Building2, Clock, CheckCircle2, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";

interface FlowStep {
  title: string;
  actor: "Citizen Portal" | "AI Layer" | "Government Command" | "Resolution & Verification";
  desc: string;
  icon: React.ElementType;
}

const flowSteps: FlowStep[] = [
  {
    title: "1. Citizen",
    actor: "Citizen Portal",
    desc: "Resident accesses JanaSamadhan portal and identifies civic or public issue",
    icon: User,
  },
  {
    title: "2. Report Problem",
    actor: "Citizen Portal",
    desc: "Submits description, precise geo-location, and photographic evidence",
    icon: AlertCircle,
  },
  {
    title: "3. AI Classification",
    actor: "AI Layer",
    desc: "Language model parses text, flags duplicates, and suggests priority & category",
    icon: Sparkles,
  },
  {
    title: "4. Dept Assignment",
    actor: "Government Command",
    desc: "Operations console routes complaint to designated nodal department and officer",
    icon: Building2,
  },
  {
    title: "5. SLA Tracking",
    actor: "Government Command",
    desc: "Automated timer enforces regulatory resolution deadline with escalation alerts",
    icon: Clock,
  },
  {
    title: "6. Resolution",
    actor: "Resolution & Verification",
    desc: "Contractor or field team resolves issue and submits photographic proof",
    icon: CheckCircle2,
  },
  {
    title: "7. Citizen Verification",
    actor: "Resolution & Verification",
    desc: "Citizen confirms fix in-person or rejects closure, maintaining accountability",
    icon: ShieldCheck,
  },
];

export default function SystemFlowVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(2); // AI classification active by default

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
        <div>
          <span className="text-[11px] font-mono font-semibold text-primary uppercase tracking-wider">
            Connected Systems Architecture
          </span>
          <h3 className="text-xl font-bold text-foreground font-sans mt-0.5">
            JanaSamadhan ↔ Government Command Lifecycle
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">
            Interactive Workflow: Click any node
          </span>
        </div>
      </div>

      {/* Horizontal Flow on Desktop, Vertical on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-2 relative">
        {flowSteps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;

          return (
            <div
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-lg p-3 border transition-all text-left flex flex-col justify-between ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary/30"
                  : "border-border bg-muted/30 hover:border-border/80 hover:bg-muted/60"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-md ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    #{idx + 1}
                  </span>
                </div>
                <div className="font-bold text-xs text-foreground leading-tight">
                  {step.title.split(". ")[1]}
                </div>
                <div className="text-[10px] font-mono text-primary/80 mt-1 truncate">
                  {step.actor}
                </div>
              </div>

              {/* Arrow connector indicator */}
              {idx < flowSteps.length - 1 && (
                <div className="hidden md:flex justify-end pt-2 text-muted-foreground/40">
                  <ArrowRight className="h-3 w-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail panel for selected step */}
      <div className="mt-5 p-4 rounded-lg bg-muted/40 border border-border flex items-start gap-3">
        <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5 shrink-0">
          {React.createElement(flowSteps[activeStep].icon, { className: "h-4 w-4" })}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-foreground">
              Step {activeStep + 1}: {flowSteps[activeStep].title.split(". ")[1]}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground font-mono">
              Domain: {flowSteps[activeStep].actor}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {flowSteps[activeStep].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
