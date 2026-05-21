interface LoriziaLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function LoriziaLogo({ className = "", variant = "dark" }: LoriziaLogoProps) {
  const wordColor  = variant === "dark" ? "#0d1c28" : "#ffffff";
  const barColor   = variant === "dark" ? "#0d1c28" : "#ffffff";
  const accentColor = "#c8622a";
  const llcColor   = variant === "dark" ? "#8a9da8" : "#6a8899";

  return (
    <svg
      viewBox="0 0 210 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lorizia LLC"
      role="img"
    >
      {/* ── Mark: three ascending bars ── */}
      {/* Bar 1 – short */}
      <rect x="0" y="22" width="7" height="18" rx="2" fill={barColor} />
      {/* Bar 2 – medium */}
      <rect x="11" y="12" width="7" height="28" rx="2" fill={barColor} />
      {/* Bar 3 – tall, accent */}
      <rect x="22" y="2"  width="7" height="38" rx="2" fill={accentColor} />

      {/* Diagonal connector accent */}
      <line
        x1="3.5"  y1="22"
        x2="25.5" y2="2"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* ── Wordmark ── */}
      <text
        x="40"
        y="31"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="4"
        fill={wordColor}
      >
        LORIZIA
      </text>

      {/* LLC tag */}
      <text
        x="42"
        y="43"
        fontFamily="'Manrope', 'Segoe UI', sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="3"
        fill={llcColor}
      >
        LLC
      </text>
    </svg>
  );
}
