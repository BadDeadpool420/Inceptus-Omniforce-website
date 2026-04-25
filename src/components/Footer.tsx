"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    section: "Explore",
    items: [
      { label: "Projects", href: "#projects" },
      { label: "Learn AI", href: "#learn" },
      { label: "About", href: "#about" },
    ],
  },
  {
    section: "Resources",
    items: [
      { label: "Prompt Toolkit", href: "#learn" },
      { label: "MCP Servers", href: "#learn" },
      { label: "AI Roadmaps", href: "#learn" },
    ],
  },
  {
    section: "Connect",
    items: [
      { label: "GitHub", href: "https://github.com/BadDeadpool420", target: "_blank" },
      { label: "Community", href: "#learn" },
      { label: "Newsletter", href: "#learn" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-4">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-black text-black text-sm shadow-lg shadow-cyan-500/25">
                IO
              </div>
              <div>
                <div className="font-black text-white text-sm">INCEPTUS</div>
                <div className="font-black text-cyan-400 text-sm -mt-1">OMNIFORCE</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              A hub for AI projects, learning, and tools — built for builders, by a builder.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/BadDeadpool420"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.section}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                {col.section}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={"target" in item ? item.target : undefined}
                      rel={"target" in item ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Under construction notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-4 mb-10 border border-amber-500/20 flex items-center gap-3"
        >
          <span className="text-2xl shrink-0">🚧</span>
          <div>
            <p className="text-amber-400 text-sm font-semibold">Site Under Active Development</p>
            <p className="text-slate-500 text-xs">
              Some pages and features are still being built. Content may change frequently. Thanks for your patience!
            </p>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Inceptus Omniforce. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            Built with <span className="text-cyan-500">Next.js</span>,{" "}
            <span className="text-purple-500">Three.js</span> &{" "}
            <span className="text-amber-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
