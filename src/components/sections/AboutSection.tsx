"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "6+", label: "Active Projects", icon: "🚀" },
  { value: "4", label: "Learning Paths", icon: "📚" },
  { value: "∞", label: "Possibilities", icon: "✨" },
  { value: "100%", label: "AI-Powered", icon: "🤖" },
];

const TECHNOLOGIES = [
  "Next.js", "React", "TypeScript", "Three.js", "Python",
  "LangChain", "OpenAI", "Claude AI", "MCP", "Framer Motion",
  "TailwindCSS", "Vercel", "GitHub Actions", "Docker",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-4">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            {"// About"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What is{" "}
            <span className="gradient-text">Inceptus Omniforce?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A personal command center for everything I&apos;m building, learning, and sharing at the intersection of AI and software engineering.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-cyan-500/10"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">The Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              Inceptus Omniforce exists to prove that one person, armed with AI tools and relentless curiosity, can build things that used to take entire teams. This is a living showcase of that mission — and a place to teach others the same skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-purple-500/10"
          >
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-xl font-bold text-white mb-3">The Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              A fully autonomous creative and technical workspace where AI agents handle the routine while humans focus on the creative. The site itself is built using many of the AI tools it teaches — it&apos;s meta by design.
            </p>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-bold text-white mb-6">Built With & Powered By</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {TECHNOLOGIES.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full glass border border-white/8 text-sm text-slate-300 hover:text-white hover:border-cyan-500/30 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
