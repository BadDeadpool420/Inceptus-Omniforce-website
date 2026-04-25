"use client";

import { useState } from "react";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Hex colour used for the hover glow and border accent */
  glowColor?: string;
  onClick?: () => void;
}

/** Glass card with an optional radial glow on hover */
export default function Card({ children, className = "", glowColor, onClick }: CardProps) {
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
        boxShadow: glowColor && hovered ? `0 0 40px ${glowColor}22` : undefined,
        borderColor: glowColor && hovered ? `${glowColor}40` : undefined,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {glowColor && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at 30% 30%, ${glowColor}15, transparent 70%)`,
            transition: "opacity 0.5s ease",
          }}
        />
      )}
      {children}
    </div>
  );
}
