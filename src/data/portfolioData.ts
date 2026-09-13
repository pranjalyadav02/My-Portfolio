export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  systemArchitecture: string[];
  keyFeatures: string[];
  technology: string[];
  outcome: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl?: string; // only if verified live demo exists
  badge?: string;
  featuredRank?: number;
  caseStudy?: ProjectCaseStudy;
  workflowSteps?: string[];
  roleNote?: string;
}

export interface SkillCategory {
  title: string;
  badgeText?: string;
  isFoundational?: boolean;
  skills: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  performance: string;
  notes?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  type: 'certificate' | 'coursework';
  details: string;
  link?: string;
}

export interface AchievementItem {
  title: string;
  badge: string;
  description: string;
  event: string;
}

export const PERSONAL_INFO = {
  name: "Pranjal Yadav",
  roleHeadline: "Software Developer • AI Integration • Real-World Systems",
  institution: "International Institute of Professional Studies (IIPS), DAVV, Indore",
  educationDegree: "5-Year Integrated MCA",
  cgpa: "6th Semester CGPA: 7.83 / 10",
  email: "pranjaliips68@gmail.com",
  github: "https://github.com/pranjalyadav02",
  linkedin: "https://in.linkedin.com/in/pranjal-yadav-38ba17328",
  heroHeadline: "Building technology that solves real problems.",
  heroSubheadline: "5-Year Integrated MCA student at IIPS, DAVV, focused on software development, practical systems and AI integration. I enjoy turning real-world problems into usable, accessible and meaningful software.",
  corePhilosophy: "I build systems that are meant to be used, not just demonstrated.",
  aboutStory: [
    "I am a 5-Year Integrated MCA student at IIPS, DAVV, Indore. My interest in technology comes from seeing how software can simplify processes that are otherwise complicated, inefficient or difficult for people to access.",
    "Throughout my projects, I have explored different kinds of systems — from academic scheduling and student-alumni communication to citizen grievance management and government accountability platforms.",
    "I enjoy working on complete systems rather than isolated features. I like thinking about the users, their workflows, permissions, accessibility and how technology can make a process genuinely better.",
    "I am currently strengthening my programming and software development fundamentals while exploring AI through the integration of open-source models and AI services into practical applications.",
    "My goal is simple: Build technology that is genuinely useful in the real world."
  ]
};

export const REAL_WORLD_PILLARS = [
  {
    number: "01",
    title: "Real Problems",
    description: "I enjoy working on problems that exist outside the code editor — problems involving people, processes and everyday systems."
  },
  {
    number: "02",
    title: "Usable Systems",
    description: "I focus on making applications understandable and practical for their intended users, rather than building technology only as a demonstration."
  },
  {
    number: "03",
    title: "Technology with Purpose",
    description: "I choose technologies based on what the system needs and explore AI when it can genuinely improve the solution."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "TypeScript", "Vite", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    skills: [
      "Firebase",
      "Firebase Authentication",
      "Firestore",
      "Firebase Storage",
      "Firebase Cloud Messaging",
      "REST APIs",
      "SQL",
      "Database Design"
    ]
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Database Management",
      "Database Design & Modeling",
      "Authentication & Authorization"
    ]
  },
  {
    title: "Python & Data",
    badgeText: "Basic / Foundational",
    isFoundational: true,
    skills: [
      "Python Fundamentals",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Basic Data Analysis"
    ]
  },
  {
    title: "AI Integration",
    badgeText: "Models & Workflows",
    skills: [
      "Open-source AI Model Integration",
      "AI API Integration",
      "AI-powered Application Workflows",
      "Prompt Engineering",
      "Working with Pre-trained Models"
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "govt-command-jharkhand",
    name: "Government Command & Operations Platform — Jharkhand",
    tagline: "Centralized administrative governance, SLA compliance, and civic problem triage.",
    description: "A government operations platform designed to help administrators manage public grievances, departmental workflows, SLA compliance, infrastructure issues and accountability processes.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    features: [
      "Operations Command Center for multi-department oversight",
      "Grievance triage & automated departmental routing",
      "SLA monitoring with real-time urgency & escalations",
      "Resolution verification with administrative audit trails",
      "Infrastructure & contractor oversight workspaces",
      "AI classification workflow for fast problem categorization"
    ],
    githubUrl: "https://github.com/pranjalyadav02/Government_Command_Jharkhand",
    badge: "Flagship #1 Featured",
    featuredRank: 1,
    roleNote: "Developed/Worked on core operational views, SLA tracking logic, and workflow integrations.",
    caseStudy: {
      problem: "Government departments often struggle with fragmented visibility across public grievances, delayed departmental handoffs, lack of SLA enforcement, and opaque contractor resolution accountability.",
      approach: "Designed a unified administrative operations console that integrates incoming citizen grievances, enforces automated SLA timers, and establishes mandatory verification checkpoints before closing complaints.",
      systemArchitecture: [
        "Interactive Operational Command Center with department filtering",
        "Role-Based Access Control (Super Admin, Department Officers, Field Inspectors)",
        "Audit Logging pipeline maintaining immutable action histories",
        "AI-assisted issue classification engine for rapid routing"
      ],
      keyFeatures: [
        "Multi-tier grievance triage with severity weighting",
        "Officer and departmental workload assignment",
        "SLA compliance tracking with automated escalation warnings",
        "Contractor & infrastructure progress inspection logs",
        "Resolution audit verification before citizen confirmation"
      ],
      technology: ["React 18", "TypeScript", "Node.js", "Express", "Tailwind CSS", "RESTful Architecture"],
      outcome: "Provides government administrators with real-time visibility across departments, eliminating operational bottlenecks and ensuring civic accountability."
    }
  },
  {
    id: "citizen-dashboard-jharkhand",
    name: "JanaSamadhan — Citizen Grievance & Accountability Platform",
    tagline: "Citizen-facing reporting, AI-assisted categorization, and transparent resolution tracking.",
    description: "A citizen-facing platform designed to improve civic grievance reporting, transparency and accountability by connecting citizens with government resolution workflows.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    features: [
      "Civic problem reporting with location and photo attachments",
      "AI-assisted problem categorization & duplicate issue detection",
      "Live SLA urgency indicators and stage-by-stage tracking",
      "Community verification to confirm real-world problem resolution",
      "Infrastructure transparency map & whistleblower integrity reporting",
      "Bilingual support (Hindi & English) for accessible civic engagement"
    ],
    githubUrl: "https://github.com/pranjalyadav02/Citizen_Dashboard_Jharkhand",
    badge: "Connected Ecosystem #2",
    featuredRank: 2,
    roleNote: "Architected citizen grievance submission flows, status verification, and UI accessibility.",
    workflowSteps: [
      "Citizen",
      "Report Problem",
      "AI-assisted Classification",
      "Department Assignment",
      "SLA Tracking",
      "Resolution",
      "Citizen Verification"
    ],
    caseStudy: {
      problem: "Citizens frequently lack transparent, accessible channels to report neighborhood infrastructure and service issues, resulting in unanswered complaints and duplicate reports.",
      approach: "Built an intuitive, bilingual web portal enabling citizens to lodge complaints with photos, receive instant AI categorization, track the exact resolution stage, and verify whether the problem was genuinely solved on the ground.",
      systemArchitecture: [
        "Citizen Reporting Engine with duplicate detection heuristics",
        "AI Triage Pipeline assigning department and urgency priority",
        "Bidirectional sync connecting to the Government Command Platform",
        "Community & Citizen Verification feedback loop"
      ],
      keyFeatures: [
        "Step-by-step complaint lifecycle with timeline tracking",
        "Duplicate report prevention to reduce government backlog",
        "Community upvotes and verification of reported repairs",
        "Whistleblower integrity reporting for civic infrastructure safety",
        "Hindi / English interface switching for wider accessibility"
      ],
      technology: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Bilingual i18n"],
      outcome: "Empowers citizens with direct transparency, transforming public grievances into measurable, tracked civic resolutions."
    }
  },
  {
    id: "alumni-connect",
    name: "User Management & Communication Platform (UMCP)",
    tagline: "Role-based system design connecting students, alumni, and administrators.",
    description: "A full-stack platform connecting students, alumni and administrators through professional networking, opportunities, mentorship and real-time communication.",
    tech: ["React", "TypeScript", "Node.js", "Firebase", "Firestore", "Redux", "Tailwind CSS"],
    features: [
      "Firebase Authentication with email verification & secure sessions",
      "Strict Role-Based Access Control (Student, Alumni, Admin portals)",
      "Job, internship, and referral posting board",
      "Direct 1-on-1 mentorship request system",
      "Real-time messaging powered by Firestore listeners",
      "Administrative content moderation and document/file sharing"
    ],
    githubUrl: "https://github.com/pranjalyadav02/Alumni_connectt",
    badge: "System Design & Auth",
    featuredRank: 3,
    roleNote: "Implemented RBAC authorization guards, Firestore real-time listeners, and mentorship flow."
  },
  {
    id: "lecture-scheduler",
    name: "Lecture Scheduler",
    tagline: "Automation-first academic timetable parsing and real-time lecture updates.",
    description: "An automation-first academic scheduling platform designed to reduce the manual effort involved in managing timetables, lecture updates and academic communication.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Firebase Cloud Functions"],
    features: [
      "Automatic PDF timetable extraction & schedule parsing",
      "Role-separated portals for Admins, Faculty, and Students",
      "Instant lecture cancellation and rescheduling workflows",
      "Automated push notifications for sudden room or time changes",
      "Semester-wide discussion channels & offline timetable access"
    ],
    githubUrl: "https://github.com/pranjalyadav02/LecScheduler",
    badge: "Automation Workflow",
    featuredRank: 4,
    roleNote: "Engineered timetable automation logic and Firebase Cloud Function notification triggers."
  },
  {
    id: "sih-alumni-portal",
    name: "Alumni Connection Portal — Smart India Hackathon",
    tagline: "Hackathon project fostering student-alumni mentorship and opportunity discovery.",
    description: "An alumni connection platform developed as part of a Smart India Hackathon team, focused on connecting students and alumni for networking, mentorship and opportunities.",
    tech: ["React", "JavaScript", "Node.js", "Database Modeling"],
    features: [
      "Structured student and alumni profiles with skill tags",
      "Mentorship discovery matching students by career interests",
      "Opportunity and event noticeboard for collegiate networking",
      "Team collaboration and rapid system prototyping during hackathon"
    ],
    githubUrl: "https://github.com/pranjalyadav02",
    badge: "SIH College Qualifier",
    featuredRank: 5,
    roleNote: "Collaborative hackathon project; selected & qualified at the college/institute screening round for Smart India Hackathon."
  }
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    period: "2023 – 2028 (Ongoing)",
    degree: "Integrated Master of Computer Applications (MCA)",
    institution: "International Institute of Professional Studies (IIPS), DAVV, Indore",
    performance: "6th Semester CGPA: 7.83 / 10",
    notes: "Curriculum centered on Data Structures & Algorithms, Object-Oriented Software Engineering, DBMS, Database Design, and Full-Stack Systems."
  },
  {
    period: "2021",
    degree: "Senior Secondary (Class XII) — CBSE",
    institution: "Central Board of Secondary Education",
    performance: "72.8%",
    notes: "Science and Mathematics stream foundational study."
  },
  {
    period: "2019",
    degree: "Secondary School (Class X) — CBSE",
    institution: "Central Board of Secondary Education",
    performance: "92.0%",
    notes: "High academic distinction across Science, Mathematics, and Computer Applications."
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "C Programming",
    issuer: "Programmers Point",
    type: "certificate",
    details: "Foundational concepts: memory management, pointers, structures, file I/O, and algorithmic efficiency."
  },
  {
    title: "C++ Programming",
    issuer: "Programmers Point",
    type: "certificate",
    details: "Object-Oriented Programming (OOP) paradigms, class hierarchies, templates, STL containers, and systems modeling."
  },
  {
    title: "OpenAI Learning & Model Workflows",
    issuer: "OpenAI Self-Paced Courses",
    type: "coursework",
    details: "Self-paced study covering API integrations, prompt engineering, structured JSON outputs, and connecting open-source/API models into software applications."
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Skill India",
    type: "coursework",
    details: "Coursework covering fundamental cloud computing models (IaaS, PaaS, SaaS), virtualization, storage architectures, and cloud deployment principles."
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Smart India Hackathon (SIH) — College-Level Qualifier",
    badge: "College Qualifier",
    event: "Smart India Hackathon Internal Screening",
    description: "Successfully qualified through the competitive college-level internal screening round for Smart India Hackathon by conceptualizing and presenting the Alumni Connection Portal with teammates."
  },
  {
    title: "Collegiate & Departmental Hackathons — Participant",
    badge: "Hackathon Participant",
    event: "Campus & Collegiate Competitions",
    description: "Participated in multiple college-level hackathons and technical competitions, collaborating in teams to rapidly design, prototype, and build practical software systems under time-constrained sprints."
  }
];
