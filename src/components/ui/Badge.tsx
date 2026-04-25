import { STATUS_CONFIG } from "@/lib/data/projects";
import type { Project } from "@/types";

interface BadgeProps {
  status: Project["status"];
  className?: string;
}

/** Status badge chip — mirrors the STATUS_CONFIG colour map */
export default function Badge({ status, className = "" }: BadgeProps) {
  const { label, color } = STATUS_CONFIG[status];
  return (
    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${color} ${className}`}>
      {label}
    </span>
  );
}
