"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

/* ---- Typing animation hook ---- */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    const delay = deleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (!deleting && displayed === current) {
        setTimeout(() => setDeleting(true), pause);
        return;
      }
      if (deleting && displayed === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
        return;
      }
      setDisplayed((d) =>
        deleting ? d.slice(0, -1) : current.slice(0, d.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words, speed, pause]);

  return displayed;
}

/* ---- Construction countdown ---- */
function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="w-full mb-3">
      <div className="flex justify-between text-xs text-slate-400 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const tagline = useTypewriter([
    "AI Learning Hub",
    "Project Showcase",
    "Innovation Gateway",
    "Omniforce Command",
  ]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#020617]/60 via-transparent to-[#020617]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/40" />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[2] grid-bg opacity-40" />

      {/* Construction tape banner */}
      <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden h-9 flex items-center">
        <div className="construction-stripes w-[200%] h-full flex items-center tape-scroll">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-black font-black text-xs uppercase tracking-widest mx-8 whitespace-nowrap select-none">
              ⚠ UNDER CONSTRUCTION ⚠
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-9 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          Building Something Extraordinary
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 leading-tight"
        >
          <span className="gradient-text">INCEPTUS</span>
          <br />
          <span className="text-white">OMNIFORCE</span>
        </motion.h1>

        {/* Typewriter tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-2xl md:text-3xl font-mono text-cyan-400 mb-6 h-10 flex items-center gap-1"
        >
          <span>{tagline}</span>
          <span className="cursor-blink text-cyan-300">|</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          The central hub for breakthrough projects, AI education, and the tools that define tomorrow.
          We&apos;re crafting something extraordinary — come back soon or{" "}
          <span className="text-cyan-400 font-medium">explore what&apos;s already live</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">🚀 Explore Projects</span>
          </a>
          <a
            href="#learn"
            className="group px-8 py-4 rounded-xl font-bold border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 glass"
          >
            🧠 Learn AI
          </a>
        </motion.div>

        {/* Build progress card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="glass rounded-2xl p-6 w-full max-w-md border border-cyan-500/20"
        >
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4 text-left">
            🔧 Build Progress
          </h3>
          <ProgressBar label="Core Architecture" value={85} />
          <ProgressBar label="AI Learning Modules" value={60} />
          <ProgressBar label="Project Showcase" value={72} />
          <ProgressBar label="3D Experience" value={90} />
          <p className="text-xs text-slate-500 mt-2 text-right">Est. Launch: Coming Soon™</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-cyan-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
