"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Small coloured label above the heading, e.g. "// Projects" */
  eyebrow: string;
  /** Main heading text — can include a JSX element for gradient spans */
  heading: ReactNode;
  /** Optional subtitle paragraph */
  subtitle?: string;
  /** Eyebrow text colour class (default: text-cyan-400) */
  eyebrowColor?: string;
  className?: string;
}

/**
 * Reusable section header — eyebrow label + h2 + optional subtitle.
 * All text is animated whileInView.
 */
export default function SectionHeader({
  eyebrow,
  heading,
  subtitle,
  eyebrowColor = "text-cyan-400",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      <span className={`${eyebrowColor} text-sm font-mono uppercase tracking-widest mb-3 block`}>
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{heading}</h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
