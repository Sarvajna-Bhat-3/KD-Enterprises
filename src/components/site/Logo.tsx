import { cn } from "@/lib/utils";

/** KD brand mark: orange orbit swoosh + KD monogram + spark, redrawn from the visiting card. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10 shrink-0", className)}
      role="img"
      aria-label="KD Enterprises logo"
    >
      <ellipse
        cx="32"
        cy="32"
        rx="29"
        ry="15"
        transform="rotate(-35 32 32)"
        fill="none"
        className="stroke-orange-600"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="120 26"
        strokeDashoffset="-10"
      />
      <text
        x="32"
        y="39.5"
        textAnchor="middle"
        className="fill-slate-950"
        style={{ font: "800 21px/1 var(--font-sans)", letterSpacing: "-1px" }}
      >
        <tspan className="fill-orange-600">K</tspan>D
      </text>
      <g className="stroke-orange-500" strokeWidth="1.6" strokeLinecap="round">
        <path d="M53 47 L53 55 M49 51 L57 51 M50.2 48.2 L55.8 53.8 M55.8 48.2 L50.2 53.8" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** Smaller wordmark for the floating navbar. */
  compact?: boolean;
};

export function Logo({ className, compact }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5 select-none", className)}>
      <BrandMark className={compact ? "h-9 w-9" : "h-12 w-12"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-extrabold tracking-[0.14em] text-slate-950 whitespace-nowrap uppercase",
            compact ? "text-[13px]" : "text-lg",
          )}
        >
          <span className="text-orange-600">KD</span> Enterprises
        </span>
        <span
          className={cn(
            "mt-1 font-semibold italic text-orange-600 whitespace-nowrap",
            compact ? "text-[10px]" : "text-xs",
          )}
        >
          Turning Ideas Into Reality
        </span>
      </span>
    </span>
  );
}
