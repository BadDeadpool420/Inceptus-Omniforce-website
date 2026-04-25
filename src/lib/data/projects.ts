import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Omniforce AI Assistant",
    description:
      "A multi-agent AI assistant that orchestrates specialized models for coding, research, and creative tasks using MCP server architecture.",
    tags: ["AI", "Multi-Agent", "MCP", "TypeScript"],
    status: "beta",
    icon: "🤖",
    accentColor: "#06b6d4",
  },
  {
    id: 2,
    title: "3D Neural Visualizer",
    description:
      "Interactive WebGL visualization of neural network architectures. Watch AI models think in real time with stunning 3D rendering.",
    tags: ["Three.js", "WebGL", "Machine Learning", "React"],
    status: "wip",
    icon: "🧠",
    accentColor: "#a855f7",
  },
  {
    id: 3,
    title: "Prompt Engineering Toolkit",
    description:
      "A collection of battle-tested prompt patterns, templates, and evaluation tools for building reliable LLM applications.",
    tags: ["LLM", "Prompting", "Open Source", "Python"],
    status: "live",
    icon: "✨",
    accentColor: "#f59e0b",
  },
  {
    id: 4,
    title: "Autonomous Code Agent",
    description:
      "An AI agent that writes, tests, and iteratively improves code using a tool-use loop with access to terminal, file system, and GitHub.",
    tags: ["Agentic AI", "Automation", "DevTools", "Python"],
    status: "wip",
    icon: "⚡",
    accentColor: "#10b981",
  },
  {
    id: 5,
    title: "AI Study Companion",
    description:
      "Personalized learning paths through AI/ML concepts with interactive quizzes, code labs, and spaced-repetition flashcards.",
    tags: ["EdTech", "AI", "React", "Next.js"],
    status: "wip",
    icon: "📚",
    accentColor: "#f43f5e",
  },
  {
    id: 6,
    title: "Omniforce Dashboard",
    description:
      "Central command for all Inceptus projects — metrics, deployments, agent status, and system health in one unified interface.",
    tags: ["Dashboard", "Monitoring", "Fullstack", "Tailwind"],
    status: "beta",
    icon: "🛸",
    accentColor: "#06b6d4",
  },
];

export const STATUS_CONFIG = {
  live: { label: "Live", color: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10" },
  beta: { label: "Beta", color: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10" },
  wip: { label: "In Progress", color: "text-amber-400 border-amber-400/40 bg-amber-400/10" },
} as const;
