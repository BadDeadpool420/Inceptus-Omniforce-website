"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: number;
}

/** Animated horizontal progress bar used in the Hero build-progress card */
export default function ProgressBar({ label, value }: ProgressBarProps) {
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
