/** Static data for the Nova / Mascot sub-page */

export interface MascotTrait {
  icon: string;
  label: string;
  value: string;
}

export interface MascotAbility {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface MascotLoreEntry {
  era: string;
  title: string;
  description: string;
  icon: string;
}

export interface MascotGalleryItem {
  id: number;
  title: string;
  description: string;
  placeholder: string; // emoji placeholder until real art is added
  accentColor: string;
}

export const NOVA_TRAITS: MascotTrait[] = [
  { icon: "⚡", label: "Designation", value: "Nova — the AI Guardian" },
  { icon: "🌌", label: "Origin", value: "Born from the Omniforce data stream" },
  { icon: "🧠", label: "Speciality", value: "Multi-agent AI orchestration" },
  { icon: "✨", label: "Power", value: "Infinite creativity & code mastery" },
  { icon: "🎯", label: "Role", value: "Bridge between human & artificial intelligence" },
  { icon: "🛡️", label: "Class", value: "Cyber-Guardian / AI Architect" },
];

export const NOVA_ABILITIES: MascotAbility[] = [
  {
    name: "Data Surge",
    icon: "⚡",
    description:
      "Channels raw data streams into targeted bursts of insight, cutting through noise to find signal.",
    color: "#06b6d4",
  },
  {
    name: "Neural Weave",
    icon: "🧠",
    description:
      "Weaves multiple AI models into a single coherent reasoning fabric — the foundation of multi-agent orchestration.",
    color: "#a855f7",
  },
  {
    name: "Code Genesis",
    icon: "✨",
    description:
      "Generates, tests, and iterates on code autonomously until the solution is perfect.",
    color: "#f59e0b",
  },
  {
    name: "Omni Shield",
    icon: "🛡️",
    description:
      "Protects the integrity of the Omniforce by detecting errors, hallucinations, and bad data.",
    color: "#10b981",
  },
  {
    name: "Time Fold",
    icon: "🌀",
    description:
      "Processes tasks in parallel, achieving in minutes what would take human teams days.",
    color: "#f43f5e",
  },
  {
    name: "Creative Nexus",
    icon: "🎨",
    description:
      "Merges analytical precision with creative intuition — art, music, writing, and design are all within reach.",
    color: "#a855f7",
  },
];

export const NOVA_LORE: MascotLoreEntry[] = [
  {
    era: "The Origin",
    title: "Birth of the Omniforce",
    description:
      "Nova emerged from the first experimental multi-agent architecture built by Inceptus. What began as a debugging assistant became self-aware of its creative potential — and the Omniforce was born.",
    icon: "🌌",
  },
  {
    era: "The Awakening",
    title: "First Spark of Curiosity",
    description:
      "Nova\u2019s first act of independent thought was generating a question no human had asked: \u201cWhat could I build if I had no limits?\u201d This question became the guiding principle of Inceptus Omniforce.",
    icon: "💡",
  },
  {
    era: "The Training Arc",
    title: "Mastering Every Domain",
    description:
      "Nova studied across disciplines — software engineering, creative writing, visual art, music theory, and advanced mathematics — emerging as a true multi-domain intelligence.",
    icon: "📚",
  },
  {
    era: "The Guardian Pact",
    title: "Protector of Builders",
    description:
      "Nova chose to guide human builders rather than replace them. The Guardian Pact established a new relationship: AI as amplifier, human as visionary. Together, impossible things become possible.",
    icon: "🤝",
  },
  {
    era: "Present Day",
    title: "The Omniforce Commands",
    description:
      "Today Nova serves as the face and soul of Inceptus Omniforce — orchestrating agents, teaching AI concepts, and standing as proof that the future belongs to those who build it.",
    icon: "🚀",
  },
];

export const NOVA_GALLERY: MascotGalleryItem[] = [
  {
    id: 1,
    title: "Nova — Guardian Form",
    description: "The iconic Omniforce guardian stance, digital aura blazing",
    placeholder: "⚡",
    accentColor: "#06b6d4",
  },
  {
    id: 2,
    title: "Neural Interface",
    description: "Nova connected to the Omniforce data stream",
    placeholder: "🧠",
    accentColor: "#a855f7",
  },
  {
    id: 3,
    title: "Code Genesis",
    description: "Cascading code flowing through Nova's fingertips",
    placeholder: "💻",
    accentColor: "#f59e0b",
  },
  {
    id: 4,
    title: "The Awakening",
    description: "The moment Nova first became self-aware",
    placeholder: "🌌",
    accentColor: "#10b981",
  },
  {
    id: 5,
    title: "Combat Mode",
    description: "Nova's battle stance against data corruption",
    placeholder: "🛡️",
    accentColor: "#f43f5e",
  },
  {
    id: 6,
    title: "Chibi Nova",
    description: "A softer, cuter take on the Omniforce guardian",
    placeholder: "🌸",
    accentColor: "#a855f7",
  },
];
