import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { toast } from "sonner";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    toast.success("Email copied to clipboard: " + PERSONAL_INFO.email);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || "Opportunity / Collaboration");
    const encodedBody = encodeURIComponent(message || "Hi Pranjal,\n\nI came across your portfolio...");
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
            Let's build something useful.
          </h2>
          <p className="mt-3 text-muted-foreground text-base leading-relaxed">
            Have an idea, project, collaboration or opportunity? I'd be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Direct Email</h3>
                  <span className="text-xs text-muted-foreground font-mono">pranjaliips68@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-xs"
                  onClick={copyEmail}
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied to Clipboard" : "Copy Email"}
                </Button>
                <Button
                  size="sm"
                  className="w-full gap-2 text-xs"
                  asChild
                >
                  <a href={`mailto:${PERSONAL_INFO.email}`}>
                    <Send className="h-3.5 w-3.5" />
                    Open Mail
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold block">
                Professional Profiles
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border/70 hover:border-primary/40 bg-muted/20 hover:bg-muted/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-foreground" />
                  <div>
                    <div className="text-xs font-bold text-foreground">GitHub</div>
                    <div className="text-[11px] text-muted-foreground font-mono">@pranjalyadav02</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border/70 hover:border-primary/40 bg-muted/20 hover:bg-muted/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-xs font-bold text-foreground">LinkedIn</div>
                    <div className="text-[11px] text-muted-foreground font-mono">pranjal-yadav</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Mailto Composer Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
              <div className="mb-4">
                <h3 className="font-bold text-lg text-foreground font-sans">
                  Quick Email Composer
                </h3>
                <p className="text-xs text-muted-foreground">
                  Composes a pre-filled email directly in your default email client (No mock server).
                </p>
              </div>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5 font-mono">
                    Subject
                  </label>
                  <Input
                    placeholder="Project inquiry / Opportunity / Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5 font-mono">
                    Message
                  </label>
                  <Textarea
                    placeholder="Hi Pranjal, I saw your portfolio and would like to discuss..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="text-sm resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground font-mono">
                    Direct mailto protocol
                  </span>
                  <Button type="submit" className="gap-2 font-medium">
                    <Send className="h-4 w-4" />
                    Launch Mail Client
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
