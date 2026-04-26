"use client";

import { useState } from "react";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  /** Hex accent colour for the glow and border on hover */
  color?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * Glass card with a coloured radial glow that appears on hover.
 * Used for feature cards, ability cards, etc.
 */
export default function GlowCard({
  children,
  color = "#06b6d4",
  className = "",
  onClick,
}: GlowCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`glass rounded-2xl relative overflow-hidden ${onClick ? "cursor-pointer" : ""} ${className}`}
      style={{
        boxShadow: hovered ? `0 0 50px ${color}22` : "none",
        borderColor: hovered ? `${color}40` : "rgba(255,255,255,0.08)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Radial glow background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at 30% 30%, ${color}18, transparent 65%)`,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Top accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {children}
    </div>
  );
}
