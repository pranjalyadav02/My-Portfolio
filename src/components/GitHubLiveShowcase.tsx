import React, { useEffect, useState } from "react";
import { Star, GitFork, Calendar, Github, RefreshCw } from "lucide-react";
import { Badge } from "./ui/badge";

interface RepoStats {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
  htmlUrl: string;
}

const TARGET_REPOS = [
  "Government_Command_Jharkhand",
  "Citizen_Dashboard_Jharkhand",
  "Alumni_connectt",
  "LecScheduler",
];

// Fallback initial values in case GitHub API rate limits (60 req/hr unauthenticated)
const FALLBACK_REPOS: Record<string, RepoStats> = {
  Government_Command_Jharkhand: {
    name: "Government_Command_Jharkhand",
    description: "Government operations platform for grievance management, departmental triage and SLA compliance.",
    stars: 1,
    forks: 0,
    language: "TypeScript",
    updatedAt: "Recent",
    htmlUrl: "https://github.com/pranjalyadav02/Government_Command_Jharkhand",
  },
  Citizen_Dashboard_Jharkhand: {
    name: "Citizen_Dashboard_Jharkhand",
    description: "JanaSamadhan — Citizen grievance reporting, AI-assisted triage, and resolution tracking.",
    stars: 1,
    forks: 0,
    language: "TypeScript",
    updatedAt: "Recent",
    htmlUrl: "https://github.com/pranjalyadav02/Citizen_Dashboard_Jharkhand",
  },
  Alumni_connectt: {
    name: "Alumni_connectt",
    description: "Full-stack user management and real-time networking platform connecting students and alumni.",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    updatedAt: "Recent",
    htmlUrl: "https://github.com/pranjalyadav02/Alumni_connectt",
  },
  LecScheduler: {
    name: "LecScheduler",
    description: "Automation-first academic timetable parser and schedule notification system.",
    stars: 0,
    forks: 0,
    language: "JavaScript",
    updatedAt: "Recent",
    htmlUrl: "https://github.com/pranjalyadav02/LecScheduler",
  },
};

export default function GitHubLiveShowcase() {
  const [repos, setRepos] = useState<RepoStats[]>(Object.values(FALLBACK_REPOS));
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubRepos() {
      try {
        const res = await fetch("https://api.github.com/users/pranjalyadav02/repos?per_page=100");
        if (!res.ok) throw new Error("API rate limit or error");
        const data = await res.json();
        
        if (Array.isArray(data) && isMounted) {
          const matched: RepoStats[] = [];
          
          for (const target of TARGET_REPOS) {
            const found = data.find((r: any) => r.name.toLowerCase() === target.toLowerCase());
            if (found) {
              matched.push({
                name: found.name,
                description: found.description || FALLBACK_REPOS[target]?.description || "Repository",
                stars: found.stargazers_count ?? 0,
                forks: found.forks_count ?? 0,
                language: found.language || "TypeScript",
                updatedAt: new Date(found.updated_at).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                }),
                htmlUrl: found.html_url,
              });
            } else if (FALLBACK_REPOS[target]) {
              matched.push(FALLBACK_REPOS[target]);
            }
          }

          if (matched.length > 0) {
            setRepos(matched);
            setIsLive(true);
          }
        }
      } catch (err) {
        // Quiet fallback to accurate initial state
        setIsLive(false);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGithubRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="rounded-xl border border-border/80 bg-card/60 p-6 md:p-8 mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Github className="h-5 w-5 text-foreground" />
          <h3 className="text-lg font-bold text-foreground font-sans">
            Curated GitHub Repositories
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground'}`} />
          <span className="text-muted-foreground">
            {isLive ? "Live API Sync (@pranjalyadav02)" : "Verified Public Repositories"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-lg border border-border bg-background hover:border-primary/40 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                {repo.name}
              </span>
              <Badge variant="outline" className="text-[10px] font-mono shrink-0">
                {repo.language}
              </Badge>
            </div>
            
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3 min-h-[32px]">
              {repo.description}
            </p>

            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-2 border-t border-border/50">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-amber-500" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  {repo.forks}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground/80">
                {repo.updatedAt}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
