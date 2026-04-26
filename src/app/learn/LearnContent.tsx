"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Course } from "@/types";
import { COURSES, LEVEL_COLOR, RESOURCES } from "@/lib/data/courses";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/ui/CodeBlock";

const LEVEL_FILTERS = ["All", "Beginner", "Intermediate", "Advanced"] as const;
type LevelFilter = (typeof LEVEL_FILTERS)[number];

const SAMPLE_CODE = `# Install the OpenAI SDK
pip install openai

# Your first AI call
from openai import OpenAI

client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is AI?"},
    ],
)
print(response.choices[0].message.content)`;

function CourseCard({ course, index }: { course: Course; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <GlowCard
        color={course.color}
        className="h-full p-6 group cursor-pointer"
        onClick={() => setExpanded(!expanded)}
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
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${LEVEL_COLOR[course.level]}`}
              >
                {course.level}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-3">{course.description}</p>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>📖 {course.lessons} lessons</span>
              <span>⏱ {course.duration}</span>
            </div>

            {/* Expandable topics */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
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
              )}
            </AnimatePresence>
          </div>

          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-500 shrink-0 mt-1"
          >
            ▼
          </motion.div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function LearnContent() {
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("All");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filtered = COURSES.filter(
    (c) => levelFilter === "All" || c.level === levelFilter
  );

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative pt-28 pb-20 px-4 min-h-screen">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <SectionHeader
          eyebrow="// Learn AI"
          eyebrowColor="text-purple-400"
          heading={
            <>
              Learn{" "}
              <span className="gradient-text">AI & Build</span>
            </>
          }
          subtitle="From your first prompt to deploying autonomous agents — everything you need to become an AI builder, not just a user."
          className="text-left mb-12"
        />

        {/* Level filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <span className="text-slate-500 text-xs uppercase tracking-wider mr-1">Level:</span>
          {LEVEL_FILTERS.map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                levelFilter === level
                  ? "bg-purple-500/20 border-purple-500/60 text-purple-300"
                  : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300"
              }`}
            >
              {level}
            </button>
          ))}
        </motion.div>

        {/* Courses grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-500 col-span-2 text-center py-12"
            >
              No courses match this filter yet.
            </motion.p>
          )}
        </motion.div>

        {/* Quick-start code example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Start in{" "}
            <span className="gradient-text">60 Seconds</span>
          </h2>
          <p className="text-slate-400 text-center mb-8">
            Your first AI-powered Python script — copy, paste, run.
          </p>
          <div className="max-w-2xl mx-auto">
            <CodeBlock
              code={SAMPLE_CODE}
              language="python"
              filename="hello_ai.py"
            />
          </div>
        </motion.div>

        {/* Resources grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Resources & Tools</h3>
          <p className="text-slate-400 mb-10">Everything else you need to accelerate your learning.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {RESOURCES.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <GlowCard
                  color="#06b6d4"
                  className="p-5 text-center h-full"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {r.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{r.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Waitlist / notify */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <GlowCard
            color="#a855f7"
            className="p-8 border border-purple-500/20 max-w-2xl mx-auto text-center"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">Full Hub Launching Soon</h3>
            <p className="text-slate-400 text-sm mb-6">
              Interactive coding environments, AI-powered quizzes, community forums, and personalized
              learning paths are all in development. Join the waitlist to be first in.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 text-emerald-400 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You&apos;re on the list! We&apos;ll be in touch.
              </motion.div>
            ) : (
              <form onSubmit={handleNotify} className="flex gap-2 max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <Button variant="primary" size="md" type="submit">
                  Notify Me
                </Button>
              </form>
            )}
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
}
