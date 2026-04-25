import type { Course, Resource } from "@/types";

export const COURSES: Course[] = [
  {
    id: 1,
    title: "AI Fundamentals",
    level: "Beginner",
    duration: "4 hrs",
    lessons: 12,
    description:
      "Start your AI journey. Understand what AI really is, how LLMs work under the hood, and how to use them effectively.",
    icon: "🌱",
    color: "#10b981",
    topics: ["What is AI?", "How LLMs Work", "Prompt Basics", "AI Tools Overview"],
  },
  {
    id: 2,
    title: "Prompt Engineering Mastery",
    level: "Intermediate",
    duration: "6 hrs",
    lessons: 18,
    description:
      "Learn the art and science of crafting prompts that get consistent, high-quality results from any LLM.",
    icon: "✏️",
    color: "#f59e0b",
    topics: ["Chain-of-Thought", "Few-Shot Learning", "System Prompts", "Evaluation"],
  },
  {
    id: 3,
    title: "Building AI Agents",
    level: "Advanced",
    duration: "8 hrs",
    lessons: 24,
    description:
      "Build autonomous agents with tool use, memory, and multi-step reasoning using modern frameworks.",
    icon: "🤖",
    color: "#a855f7",
    topics: ["Tool Use", "Memory Systems", "Multi-Agent", "MCP Servers"],
  },
  {
    id: 4,
    title: "AI-Powered Dev Workflow",
    level: "Intermediate",
    duration: "5 hrs",
    lessons: 15,
    description:
      "Supercharge your development workflow with AI coding assistants, automated testing, and AI code review.",
    icon: "⚡",
    color: "#06b6d4",
    topics: ["Copilot Patterns", "AI Code Review", "Auto-Testing", "Refactoring"],
  },
];

export const LEVEL_COLOR: Record<Course["level"], string> = {
  Beginner: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Intermediate: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  Advanced: "text-purple-400 bg-purple-400/10 border-purple-400/30",
};

export const RESOURCES: Resource[] = [
  {
    icon: "📡",
    label: "MCP Servers",
    desc: "Model Context Protocol integrations that give AI agents real-world capabilities.",
  },
  {
    icon: "🧰",
    label: "AI Toolkits",
    desc: "Curated libraries, frameworks, and CLI tools for building AI applications fast.",
  },
  {
    icon: "🔬",
    label: "Research Papers",
    desc: "Digested breakdowns of the most impactful AI research papers, made accessible.",
  },
  {
    icon: "🎥",
    label: "Video Labs",
    desc: "Hands-on coding sessions you can follow along with to build real AI projects.",
  },
  {
    icon: "💬",
    label: "Community Q&A",
    desc: "Ask questions, share experiments, and learn from others on the same journey.",
  },
  {
    icon: "🗺️",
    label: "Roadmaps",
    desc: "Opinionated learning paths for different AI careers and use-cases.",
  },
];
