import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-12",
  variant = "dark",
  showTagline = false,
}) => {
  const isDark = variant === "dark";
  const textColor = isDark ? "#ffffff" : "#0f172a";
  const subtextColor = isDark ? "#cbd5e1" : "#475569";
  const orange = "#f97316"; // Brand orange
  const darkOrange = "#ea580c";

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className="flex items-center gap-3">
        {/* Vector Mark */}
        <div className="relative w-11 h-11 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full transform -rotate-12 drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Orbital Orange Swoosh */}
            <ellipse
              cx="50"
              cy="50"
              rx="46"
              ry="24"
              stroke="url(#orangeGrad)"
              strokeWidth="6"
              strokeDasharray="260"
              strokeDashoffset="30"
              transform="rotate(-25 50 50)"
            />
            {/* Sparkle / Starburst */}
            <circle cx="84" cy="68" r="4" fill="#fb923c" />
            <path
              d="M84 60 L84 76 M76 68 L92 68"
              stroke="#fdba74"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient id="orangeGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97316" />
                <stop offset="1" stopColor="#c2410c" />
              </linearGradient>
            </defs>
          </svg>

          {/* KD Letters in center */}
          <div className="absolute inset-0 flex items-center justify-center font-black tracking-tighter text-xl">
            <span className="text-orange-500 font-extrabold">K</span>
            <span className={isDark ? "text-white" : "text-slate-900"}>D</span>
          </div>
        </div>

        {/* Text Title */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-black text-2xl tracking-wider text-orange-500">KD</span>
            <span
              className="font-extrabold text-2xl tracking-wider"
              style={{ color: textColor }}
            >
              ENTERPRISES
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-[1.5px] w-5 bg-orange-500"></span>
            <span
              className="text-[10px] uppercase font-bold tracking-widest"
              style={{ color: subtextColor }}
            >
              Security • Civil • Fabrication
            </span>
            <span className="h-[1.5px] w-5 bg-orange-500"></span>
          </div>
        </div>
      </div>

      {showTagline && (
        <span className="text-[11px] text-orange-400 font-medium italic mt-1 tracking-wide">
          Turning Ideas Into Reality...
        </span>
      )}
    </div>
  );
};
