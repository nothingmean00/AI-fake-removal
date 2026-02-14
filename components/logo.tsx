export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const dimensions = {
    small: { width: 32, height: 32 },
    default: { width: 40, height: 40 },
    large: { width: 56, height: 56 },
  }

  const { width, height } = dimensions[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer shield shape */}
      <path
        d="M28 3L6 15v16c0 15.2 9.3 29.4 22 35.4C40.7 60.4 50 46.2 50 31V15L28 3z"
        fill="hsl(215 45% 13%)"
        stroke="hsl(37 78% 50%)"
        strokeWidth="1.5"
      />

      {/* Inner shield outline for depth */}
      <path
        d="M28 8L11 18v13c0 12.8 7.7 24.6 17 29.6C37.3 55.6 45 43.8 45 31V18L28 8z"
        fill="none"
        stroke="hsl(37 78% 50% / 0.25)"
        strokeWidth="0.75"
      />

      {/* Horizontal accent line across middle */}
      <line
        x1="14"
        y1="30"
        x2="42"
        y2="30"
        stroke="hsl(37 78% 50% / 0.3)"
        strokeWidth="0.5"
      />

      {/* Vertical center line top portion */}
      <line
        x1="28"
        y1="10"
        x2="28"
        y2="25"
        stroke="hsl(37 78% 50% / 0.15)"
        strokeWidth="0.5"
      />

      {/* AFR monogram */}
      {/* A */}
      <text
        x="16.5"
        y="29"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="600"
        fill="hsl(37 78% 50%)"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.5"
      >
        A
      </text>

      {/* F */}
      <text
        x="28"
        y="29"
        fontFamily="Georgia, serif"
        fontSize="13"
        fontWeight="700"
        fill="hsl(210 20% 98%)"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.5"
      >
        F
      </text>

      {/* R */}
      <text
        x="39.5"
        y="29"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="600"
        fill="hsl(37 78% 50%)"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.5"
      >
        R
      </text>

      {/* Small decorative diamond below monogram */}
      <path
        d="M28 38l2 3-2 3-2-3z"
        fill="hsl(37 78% 50% / 0.5)"
      />

      {/* Top keystone accent */}
      <path
        d="M26 8.5L28 6l2 2.5"
        fill="none"
        stroke="hsl(37 78% 50%)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LogoLockup({
  size = "default",
  theme = "dark",
}: {
  size?: "small" | "default" | "large"
  theme?: "dark" | "light"
}) {
  const textColor = theme === "dark" ? "text-primary-foreground" : "text-foreground"
  const subColor = theme === "dark" ? "text-primary-foreground/25" : "text-muted-foreground/60"

  const textSize = {
    small: "text-sm",
    default: "text-[15px]",
    large: "text-lg",
  }

  const subSize = {
    small: "text-[8px]",
    default: "text-[9px]",
    large: "text-[10px]",
  }

  return (
    <a href="#" className="flex items-center gap-3 group">
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <Logo size={size} />
      </div>
      <div className="flex flex-col">
        <span className={`${textSize[size]} font-bold tracking-tight ${textColor} leading-none`}>
          AIFakeRemoval
        </span>
        <span className={`${subSize[size]} tracking-[0.2em] uppercase ${subColor} mt-1 font-medium`}>
          Content Protection
        </span>
      </div>
    </a>
  )
}
