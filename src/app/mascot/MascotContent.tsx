"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NOVA_TRAITS,
  NOVA_ABILITIES,
  NOVA_LORE,
  NOVA_GALLERY,
} from "@/lib/data/mascot";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import Modal from "@/components/ui/Modal";
import type { MascotGalleryItem } from "@/lib/data/mascot";

/* ——— SVG silhouette (reused from MascotSection) ——— */
function SilhouetteArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      aria-hidden
    >
      <defs>
        <radialGradient id="m-glow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="m-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
        </linearGradient>
        <filter id="m-blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <ellipse cx="200" cy="220" rx="140" ry="180" fill="url(#m-glow)" filter="url(#m-blur)" />
      <ellipse cx="200" cy="100" rx="52" ry="58" fill="url(#m-body)" />
      <polygon points="148,68 135,20 160,60" fill="url(#m-body)" />
      <polygon points="165,55 158,5 180,52" fill="url(#m-body)" />
      <polygon points="252,68 265,20 240,60" fill="url(#m-body)" />
      <polygon points="235,55 242,5 220,52" fill="url(#m-body)" />
      <rect x="185" y="152" width="30" height="25" rx="4" fill="url(#m-body)" />
      <path d="M100 200 Q120 175 185 177 L215 177 Q280 175 300 200 L310 360 Q200 380 90 360 Z" fill="url(#m-body)" />
      <path d="M100 200 Q70 240 60 320 Q70 330 85 320 Q100 255 120 215 Z" fill="url(#m-body)" />
      <path d="M300 200 Q330 240 340 320 Q330 330 315 320 Q300 255 280 215 Z" fill="url(#m-body)" />
      <path d="M110 355 Q130 440 150 490 L180 490 L190 380 L210 380 L220 490 L250 490 Q270 440 290 355 Z" fill="url(#m-body)" />
      <ellipse cx="183" cy="98" rx="9" ry="8" fill="#06b6d4" opacity="0.9" />
      <ellipse cx="217" cy="98" rx="9" ry="8" fill="#06b6d4" opacity="0.9" />
      <ellipse cx="183" cy="98" rx="4" ry="4" fill="#e0f7ff" />
      <ellipse cx="217" cy="98" rx="4" ry="4" fill="#e0f7ff" />
      <line x1="0" y1="250" x2="400" y2="250" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="8 6" />
      <circle cx="80" cy="160" r="10" fill="#a855f7" opacity="0.5" />
      <circle cx="330" cy="180" r="7" fill="#06b6d4" opacity="0.5" />
      <circle cx="60" cy="300" r="5" fill="#f59e0b" opacity="0.4" />
      <circle cx="350" cy="300" r="8" fill="#a855f7" opacity="0.4" />
    </svg>
  );
}

/* ——— Gallery card ——— */
function GalleryCard({
  item,
  index,
  onSelect,
}: {
  item: MascotGalleryItem;
  index: number;
  onSelect: (item: MascotGalleryItem) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <GlowCard
        color={item.accentColor}
        className="aspect-square group cursor-pointer"
        onClick={() => onSelect(item)}
      >
        {/* Placeholder art */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div
            className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110"
            style={{ filter: `drop-shadow(0 0 12px ${item.accentColor}80)` }}
          >
            {item.placeholder}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900/90 to-transparent">
            <p className="text-white text-xs font-bold">{item.title}</p>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function MascotContent() {
  const [galleryItem, setGalleryItem] = useState<MascotGalleryItem | null>(null);

  return (
    <div className="relative pt-28 pb-20 px-4 min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-900/15 blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

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

        {/* ── Hero ── */}
        <SectionHeader
          eyebrow="// Mascot"
          eyebrowColor="text-purple-400"
          heading={
            <>
              Meet{" "}
              <span className="gradient-text">Nova</span>
            </>
          }
          subtitle="The AI Guardian of Inceptus Omniforce — a symbol of relentless curiosity, creative power, and the future of AI."
        />

        {/* ── Portrait + traits ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-24">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-purple-500/30 float">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-900">
                <SilhouetteArt className="opacity-70" />
              </div>
              {/* Name plate */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-900/98 via-slate-900/70 to-transparent">
                <h2 className="text-white font-black text-2xl">Nova</h2>
                <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest">
                  Omniforce AI Guardian
                </p>
              </div>
              {/* Corner glow orbs */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-purple-400 opacity-70 animate-ping" />
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-purple-500" />
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-xl font-bold text-white mb-5">Character Profile</h3>
            {NOVA_TRAITS.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                viewport={{ once: true }}
              >
                <GlowCard color="#a855f7" className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl shrink-0">{t.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{t.label}</p>
                      <p className="text-sm text-slate-200 font-medium">{t.value}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 border-l-2 border-purple-500/40 pl-4 text-slate-500 text-sm italic"
            >
              &ldquo;Nova is the embodiment of Inceptus Omniforce — the bridge between human
              imagination and artificial intelligence.&rdquo;
            </motion.blockquote>
          </motion.div>
        </div>

        {/* ── Abilities ── */}
        <section className="mb-24">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-16" />
          <SectionHeader
            eyebrow="// Abilities"
            eyebrowColor="text-cyan-400"
            heading={
              <>
                Nova&apos;s{" "}
                <span className="gradient-text">Powers</span>
              </>
            }
            subtitle="Each ability represents a real skill set built into the Inceptus Omniforce platform."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NOVA_ABILITIES.map((ability, i) => (
              <motion.div
                key={ability.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard color={ability.color} className="p-6 h-full">
                  <div
                    className="text-3xl mb-3 p-3 rounded-xl w-fit"
                    style={{ background: `${ability.color}15` }}
                  >
                    {ability.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{ability.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{ability.description}</p>
                  <div
                    className="mt-4 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${ability.color}60, transparent)` }}
                  />
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Lore Timeline ── */}
        <section className="mb-24">
          <SectionHeader
            eyebrow="// Origin Story"
            eyebrowColor="text-amber-400"
            heading={
              <>
                The{" "}
                <span className="gradient-text">Lore</span>
              </>
            }
            subtitle="The full origin story of Nova and the Inceptus Omniforce."
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-cyan-500/20 to-transparent" />

            <div className="space-y-8 pl-16">
              {NOVA_LORE.map((entry, i) => (
                <motion.div
                  key={entry.era}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-10 top-3 w-4 h-4 rounded-full border-2 border-purple-500/60 bg-slate-900 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>

                  <GlowCard color="#a855f7" className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl shrink-0 mt-1">{entry.icon}</span>
                      <div>
                        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">
                          {entry.era}
                        </span>
                        <h4 className="text-lg font-bold text-white mb-2">{entry.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{entry.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Art Gallery ── */}
        <section className="mb-16">
          <SectionHeader
            eyebrow="// Art Gallery"
            eyebrowColor="text-purple-400"
            heading={
              <>
                Nova&apos;s{" "}
                <span className="gradient-text">Gallery</span>
              </>
            }
            subtitle="Art is coming — each piece will be unlocked as the Omniforce grows. Click any card to preview."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {NOVA_GALLERY.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onSelect={setGalleryItem}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 text-sm mt-8 italic"
          >
            🎨 Official art in production — add images to{" "}
            <code className="text-cyan-400 bg-slate-800/60 px-1 py-0.5 rounded">public/mascot/</code>{" "}
            to replace placeholders.
          </motion.p>
        </section>
      </div>

      {/* Gallery lightbox modal */}
      <Modal
        open={!!galleryItem}
        onClose={() => setGalleryItem(null)}
        title={galleryItem?.title}
      >
        {galleryItem && (
          <div className="text-center">
            <div
              className="text-8xl mx-auto mb-6 w-32 h-32 flex items-center justify-center rounded-2xl"
              style={{
                background: `${galleryItem.accentColor}15`,
                filter: `drop-shadow(0 0 20px ${galleryItem.accentColor}60)`,
              }}
            >
              {galleryItem.placeholder}
            </div>
            <p className="text-slate-400 text-sm mb-4">{galleryItem.description}</p>
            <p className="text-xs text-slate-600 italic">
              Full art coming soon — this placeholder will be replaced with Nova&apos;s official artwork.
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
