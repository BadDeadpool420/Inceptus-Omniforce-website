"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import { PROJECTS, STATUS_CONFIG } from "@/lib/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type StatusFilter = Project["status"] | "all";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = STATUS_CONFIG[project.status];

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Card glowColor={project.accentColor} className="h-full p-6 group project-card">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="text-4xl p-3 rounded-xl"
            style={{ background: `${project.accentColor}15` }}
          >
            {project.icon}
          </div>
          <Badge status={project.status} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Optional link */}
        {project.link && (
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
        )}
      </Card>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort(),
    []
  );

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchStatus = statusFilter === "all" || p.status === statusFilter;
      const matchTag = !activeTag || p.tags.includes(activeTag);
      return matchStatus && matchTag;
    });
  }, [statusFilter, activeTag]);

  const statusOptions: { value: StatusFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "live", label: "Live" },
    { value: "beta", label: "Beta" },
    { value: "wip", label: "In Progress" },
  ];

  return (
    <section className="relative pt-28 pb-20 px-4 min-h-screen">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </a>
          <span className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            {"// Projects"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Project{" "}
            <span className="gradient-text">Showcase</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            A growing collection of tools, experiments, and products — each pushing the boundaries
            of what AI and software can do.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-4 mb-10"
        >
          {/* Status filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 text-xs uppercase tracking-wider mr-1">Status:</span>
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setStatusFilter(opt.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  statusFilter === opt.value
                    ? "bg-cyan-500/20 border-cyan-500/60 text-cyan-300"
                    : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Tag filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 text-xs uppercase tracking-wider mr-1">Tag:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-md text-xs border transition-all duration-200 cursor-pointer ${
                  activeTag === tag
                    ? "bg-purple-500/20 border-purple-500/60 text-purple-300"
                    : "border-slate-700/50 bg-slate-800/60 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="px-3 py-1 rounded-md text-xs border border-slate-700/50 text-slate-500 hover:text-slate-300 hover:border-slate-500 transition-all duration-200 cursor-pointer"
              >
                ✕ Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-500 text-sm mb-6"
        >
          Showing{" "}
          <span className="text-cyan-400 font-semibold">{filtered.length}</span>{" "}
          of {PROJECTS.length} projects
        </motion.p>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-slate-500 text-lg mb-4">No projects match the current filters.</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setStatusFilter("all");
                  setActiveTag(null);
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* More coming soon */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-purple-500/20 text-slate-400 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              More projects launching soon — follow along for updates
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
