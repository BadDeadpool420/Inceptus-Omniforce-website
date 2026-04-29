"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * MascotSection — Showcases the Inceptus Omniforce mascot (anime character)
 * and the mascot intro video.
 *
 * ─── HOW TO ADD YOUR VIDEO ─────────────────────────────────────────────────
 * 1. Copy your video file into the /public folder of this project and name
 *    it  `mascot.mp4`  (or update the `VIDEO_SRC` constant below).
 *
 * 2. Supported formats: MP4 (H.264), WebM — MP4 is recommended.
 *
 * 3. Optionally add a poster image (first-frame thumbnail):
 *    place  `mascot-poster.jpg`  in /public and update VIDEO_POSTER below.
 *
 * If no local file exists yet, the section shows an animated placeholder
 * so the page still looks great in the meantime.
 * ───────────────────────────────────────────────────────────────────────────
 */

const VIDEO_SRC = "/mascot.mp4";
const VIDEO_POSTER = "/mascot-poster.jpg";

/* ——— Animated silhouette background ——— */
function SilhouetteArt() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full opacity-60"
      aria-hidden
    >
      <defs>
        <radialGradient id="sg-glow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sg-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
        </linearGradient>
        <filter id="sg-blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Ambient glow behind figure */}
      <ellipse cx="200" cy="220" rx="140" ry="180" fill="url(#sg-glow)" filter="url(#sg-blur)" />

      {/* Stylised anime silhouette — head */}
      <ellipse cx="200" cy="100" rx="52" ry="58" fill="url(#sg-body)" />

      {/* Hair spikes */}
      <polygon points="148,68 135,20 160,60" fill="url(#sg-body)" />
      <polygon points="165,55 158,5 180,52" fill="url(#sg-body)" />
      <polygon points="252,68 265,20 240,60" fill="url(#sg-body)" />
      <polygon points="235,55 242,5 220,52" fill="url(#sg-body)" />

      {/* Neck */}
      <rect x="185" y="152" width="30" height="25" rx="4" fill="url(#sg-body)" />

      {/* Shoulders & torso */}
      <path d="M100 200 Q120 175 185 177 L215 177 Q280 175 300 200 L310 360 Q200 380 90 360 Z" fill="url(#sg-body)" />

      {/* Left arm */}
      <path d="M100 200 Q70 240 60 320 Q70 330 85 320 Q100 255 120 215 Z" fill="url(#sg-body)" />

      {/* Right arm */}
      <path d="M300 200 Q330 240 340 320 Q330 330 315 320 Q300 255 280 215 Z" fill="url(#sg-body)" />

      {/* Skirt/legs */}
      <path d="M110 355 Q130 440 150 490 L180 490 L190 380 L210 380 L220 490 L250 490 Q270 440 290 355 Z" fill="url(#sg-body)" />

      {/* Eye glows */}
      <ellipse cx="183" cy="98" rx="9" ry="8" fill="#06b6d4" opacity="0.9" />
      <ellipse cx="217" cy="98" rx="9" ry="8" fill="#06b6d4" opacity="0.9" />
      <ellipse cx="183" cy="98" rx="4" ry="4" fill="#e0f7ff" />
      <ellipse cx="217" cy="98" rx="4" ry="4" fill="#e0f7ff" />

      {/* Scan-line accent */}
      <line x1="0" y1="250" x2="400" y2="250" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="8 6" />

      {/* Energy orbs floating */}
      <circle cx="80" cy="160" r="10" fill="#a855f7" opacity="0.5" />
      <circle cx="330" cy="180" r="7" fill="#06b6d4" opacity="0.5" />
      <circle cx="60" cy="300" r="5" fill="#f59e0b" opacity="0.4" />
      <circle cx="350" cy="300" r="8" fill="#a855f7" opacity="0.4" />
    </svg>
  );
}

/* ——— Video player with fallback placeholder ——— */
function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play().catch(() => {
        // Playback blocked by browser autoplay policy — silently ignore
        setPlaying(false);
      });
      setPlaying(true);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
      {/* Glow edge */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none z-10" />

      {/* Video element */}
      {!videoError ? (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={VIDEO_POSTER}
          className="w-full h-full object-cover"
          playsInline
          onError={() => setVideoError(true)}
          onEnded={() => setPlaying(false)}
        />
      ) : null}

      {/* Placeholder shown when video file not found */}
      {videoError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80">
          <SilhouetteArt />
          <div className="absolute bottom-6 text-center px-4">
            <p className="text-xs text-slate-500 font-mono">
              Add <code className="text-cyan-400">public/mascot.mp4</code> to display the mascot video
            </p>
          </div>
        </div>
      )}

      {/* Play / Pause button */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center group z-20"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {!playing && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-200 shadow-xl shadow-purple-500/30"
          >
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        )}
      </button>

      {/* Corner badge */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full glass border border-purple-500/30 text-purple-300 text-xs font-semibold">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
        </span>
        MASCOT REVEAL
      </div>
    </div>
  );
}

/* ——— Main section ——— */
export default function MascotSection() {
  return (
    <section id="mascot" className="relative py-28 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-purple-900/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-mono uppercase tracking-widest mb-3 block">
            {"// Mascot"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Meet the{" "}
            <span className="gradient-text">Omniforce</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every great force needs a face. The Inceptus Omniforce is guided by its anime mascot — a symbol of relentless curiosity, creative power, and the future of AI.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — video player */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VideoPlayer />

            {/* Instruction card below video */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 glass rounded-xl p-4 border border-amber-500/20 flex items-start gap-3"
            >
              <span className="text-xl shrink-0 mt-0.5">💡</span>
              <div>
                <p className="text-amber-300 text-sm font-semibold mb-1">How to add your video</p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Download your video from Google Photos, rename it to{" "}
                  <code className="text-cyan-400 bg-slate-800/60 px-1 py-0.5 rounded">mascot.mp4</code>
                  {" "}and place it in the{" "}
                  <code className="text-cyan-400 bg-slate-800/60 px-1 py-0.5 rounded">public/</code>
                  {" "}folder of this project. The player will automatically show it.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — mascot description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Portrait placeholder */}
            <div className="relative w-full aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden border border-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-900">
                <SilhouetteArt />
              </div>
              {/* Name tag */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/95 to-transparent">
                <h3 className="text-white font-black text-xl">Nova</h3>
                <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Omniforce AI Guardian</p>
              </div>
            </div>

            {/* Traits */}
            <div className="space-y-3">
              {[
                { icon: "⚡", label: "Designation", value: "Nova — the AI Guardian" },
                { icon: "🌌", label: "Origin", value: "Born from the Omniforce data stream" },
                { icon: "🧠", label: "Speciality", value: "Multi-agent AI orchestration" },
                { icon: "✨", label: "Power", value: "Infinite creativity & code mastery" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-3 glass rounded-xl px-4 py-3 border border-white/5">
                  <span className="text-xl shrink-0">{t.icon}</span>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.label}</p>
                    <p className="text-sm text-slate-200 font-medium">{t.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <p className="text-slate-500 text-sm italic border-l-2 border-purple-500/40 pl-4">
              &ldquo;Nova is the embodiment of Inceptus Omniforce — the bridge between human imagination and artificial intelligence.&rdquo;
            </p>
            <a
              href="/mascot"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200 mt-2"
            >
              Explore Nova&apos;s full story →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
