"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Course } from "@/types";
import { COURSES, LEVEL_COLOR, RESOURCES } from "@/lib/data/courses";

function CourseCard({ course, index }: { course: Course; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      style={{
        background: `linear-gradient(135deg, ${course.color}08, rgba(255,255,255,0.02))`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="text-3xl p-3 rounded-xl shrink-0"
          style={{ background: `${course.color}15` }}
        >
          {course.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {course.title}
            </h3>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${LEVEL_COLOR[course.level]}`}>
              {course.level}
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-3">{course.description}</p>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>📖 {course.lessons} lessons</span>
            <span>⏱ {course.duration}</span>
          </div>

          {/* Expandable topics */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-wrap gap-2">
              {course.topics.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md border"
                  style={{
                    color: course.color,
                    borderColor: `${course.color}40`,
                    background: `${course.color}10`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-500 shrink-0 mt-1"
        >
          ▼
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function AILearningHub() {
  return (
    <section id="learn" className="relative py-28 px-4">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            {"// Learning Hub"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Learn{" "}
            <span className="gradient-text">AI & Build</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From your first prompt to deploying autonomous agents — everything you need to become an AI builder, not just a user.
          </p>
        </motion.div>

        {/* Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* Resources grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Resources & Tools</h3>
          <p className="text-slate-400">Everything else you need to accelerate your learning.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {RESOURCES.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5 text-center hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                {r.label}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Full Hub Launching Soon</h3>
            <p className="text-slate-400 text-sm mb-6">
              Interactive coding environments, AI-powered quizzes, community forums, and personalized learning paths are all in development. Join the waitlist to be first in.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto items-center justify-center">
              <div className="flex gap-2 flex-1 w-full">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                  Notify Me
                </button>
              </div>
              <a
                href="/learn"
                className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors whitespace-nowrap"
              >
                Explore Learn Hub →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
