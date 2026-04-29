"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/types";
import { PROJECTS, STATUS_CONFIG } from "@/lib/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const status = STATUS_CONFIG[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card relative glass rounded-2xl p-6 cursor-pointer group overflow-hidden"
      style={{
        boxShadow: hovered ? `0 0 40px ${project.accentColor}22` : "none",
        borderColor: hovered ? `${project.accentColor}40` : "rgba(255,255,255,0.08)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.accentColor}15, transparent 70%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="text-4xl p-3 rounded-xl"
          style={{ background: `${project.accentColor}15` }}
        >
          {project.icon}
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${status.color}`}>
          {status.label}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-5 h-5"
          style={{ color: project.accentColor }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-28 px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            {"// Projects"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Project{" "}
            <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A growing collection of tools, experiments, and products — each pushing the boundaries of what AI and software can do.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-purple-500/20 text-slate-400 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            More projects launching soon — follow along for updates
          </div>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
