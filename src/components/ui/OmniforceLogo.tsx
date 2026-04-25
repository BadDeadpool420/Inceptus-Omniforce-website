/**
 * OmniforceLogo — SVG logo for Inceptus Omniforce.
 * Hex emblem with "IO" initials, sci-fi ring, and cyan/purple gradient.
 * Drop-in replacement for the plain "IO" text square in the nav.
 */
import { useId } from "react";

interface OmniforceLogoProps {
  /** px size of the bounding box (default 36) */
  size?: number;
  /** show the wordmark text beside the icon (default false) */
  withWordmark?: boolean;
}

export default function OmniforceLogo({ size = 36, withWordmark = false }: OmniforceLogoProps) {
  const uid = useId().replace(/:/g, ""); // unique per instance, colon-free for SVG IDs
  const id = `ogr-${uid}`;

  return (
    <span className="inline-flex items-center gap-2 select-none">
      {/* ——— Icon ——— */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Inceptus Omniforce logo"
        role="img"
      >
        <defs>
          {/* Primary cyan → purple gradient */}
          <linearGradient id={`${id}-grad1`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          {/* Subtle inner glow */}
          <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0" />
          </radialGradient>
          {/* Clip path for hexagon */}
          <clipPath id={`${id}-hex-clip`}>
            <polygon points="50,4 93,27.5 93,72.5 50,96 7,72.5 7,27.5" />
          </clipPath>
        </defs>

        {/* Outer glow disc */}
        <circle cx="50" cy="50" r="48" fill={`url(#${id}-glow)`} />

        {/* Hexagon background */}
        <polygon
          points="50,4 93,27.5 93,72.5 50,96 7,72.5 7,27.5"
          fill="#0b1120"
          stroke={`url(#${id}-grad1)`}
          strokeWidth="2.5"
        />

        {/* Inner hexagon ring */}
        <polygon
          points="50,14 83,31.5 83,68.5 50,86 17,68.5 17,31.5"
          fill="none"
          stroke={`url(#${id}-grad1)`}
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* Corner accent dots */}
        {([
          [50, 4], [93, 27.5], [93, 72.5], [50, 96], [7, 72.5], [7, 27.5],
        ] as [number, number][]).map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill={`url(#${id}-grad1)`} />
        ))}

        {/* Decorative scan lines (thin) */}
        <line x1="7" y1="50" x2="93" y2="50" stroke="#06b6d4" strokeWidth="0.4" strokeOpacity="0.3" />
        <line x1="50" y1="4" x2="50" y2="96" stroke="#a855f7" strokeWidth="0.4" strokeOpacity="0.3" />

        {/* "I" letter */}
        <text
          x="34"
          y="63"
          fontSize="36"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          fill={`url(#${id}-grad1)`}
          letterSpacing="-2"
        >
          I
        </text>

        {/* "O" letter */}
        <text
          x="48"
          y="63"
          fontSize="36"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          fill={`url(#${id}-grad1)`}
          letterSpacing="-2"
        >
          O
        </text>

        {/* Top micro-label */}
        <text
          x="50"
          y="30"
          fontSize="6.5"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
          fill="#94a3b8"
          textAnchor="middle"
          letterSpacing="3"
        >
          INCEPTUS
        </text>

        {/* Bottom micro-label */}
        <text
          x="50"
          y="80"
          fontSize="5.5"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
          fill="#94a3b8"
          textAnchor="middle"
          letterSpacing="2"
        >
          OMNIFORCE
        </text>
      </svg>

      {/* ——— Optional wordmark ——— */}
      {withWordmark && (
        <span className="font-black text-sm tracking-wide leading-none">
          <span className="text-white">INCEPTUS</span>
          <span className="text-cyan-400"> OMNIFORCE</span>
        </span>
      )}
    </span>
  );
}
