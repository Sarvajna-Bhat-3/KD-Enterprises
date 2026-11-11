"use client";

import React, { useState } from "react";
import {
  Cctv,
  ShieldCheck,
  MonitorPlay,
  Network,
  Zap,
  Wifi,
  ScanEye,
  Cable,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Brand = { id: string; name: string; category: string; desc: string; icon: LucideIcon };

const brands: Brand[] = [
  { id: "hikvision", name: "Hikvision", category: "CCTV & Video Surveillance", desc: "Enterprise 4K IP cameras, ColorVu night vision & high-capacity NVRs.", icon: Cctv },
  { id: "honeywell", name: "Honeywell", category: "Automation & Access Control", desc: "Smart perimeter sensors, intrusion alarm systems & building automation.", icon: ShieldCheck },
  { id: "samsung", name: "Samsung", category: "Commercial Displays & AV", desc: "Command center video walls, interactive panels & smart digital signage.", icon: MonitorPlay },
  { id: "dlink", name: "D-Link", category: "Enterprise LAN & Switching", desc: "Gigabit managed PoE+ switches, server racks & structured Cat6 cabling.", icon: Network },
  { id: "schneider", name: "Schneider Electric", category: "Power & Structured Cabling", desc: "Industrial power distribution, circuit breakers & cable management.", icon: Zap },
  { id: "tplink", name: "TP-Link", category: "Wireless & Mesh Networking", desc: "Omada cloud-managed Wi-Fi 6 access points & optical fiber converters.", icon: Wifi },
  { id: "axis", name: "Axis Communications", category: "High-End Network Cameras", desc: "Thermal imaging, license plate recognition & PTZ dome optics.", icon: ScanEye },
  { id: "legrand", name: "Legrand", category: "Electrical & Server Racks", desc: "Patch panels, floor boxes, cable raceways & high-density patch cords.", icon: Cable },
];

const arc = (offset: number) => {
  switch (offset) {
    case -2: return { rotate: -14, y: 36, scale: 0.84, opacity: 0.45 };
    case -1: return { rotate: -7, y: 12, scale: 0.94, opacity: 0.85 };
    case 0: return { rotate: 0, y: -10, scale: 1.12, opacity: 1 };
    case 1: return { rotate: 7, y: 12, scale: 0.94, opacity: 0.85 };
    case 2: return { rotate: 14, y: 36, scale: 0.84, opacity: 0.45 };
    default: return { rotate: 0, y: 0, scale: 1, opacity: 1 };
  }
};

export const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = brands.length;
  const go = (i: number) => setActiveIndex(((i % total) + total) % total);
  const current = brands[activeIndex]!;
  const CurrentIcon = current.icon;

  return (
    <section id="partners" className="w-full py-20 md:py-32 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
          <BadgeCheck className="w-3.5 h-3.5 text-orange-600" />
          <span>Brands we install</span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
          Built with trusted global brands
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          We supply and install genuine hardware from leading manufacturers — with original warranties and reliable uptime.
        </p>

        {/* Arc carousel */}
        <div
          className="relative mt-14 sm:mt-20 mb-6 h-[170px] sm:h-[230px] flex items-center justify-center select-none"
          role="group"
          aria-roledescription="carousel"
          aria-label="Brand partners"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-6 md:gap-8">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (((activeIndex + offset) % total) + total) % total;
              const brand = brands[index]!;
              const Icon = brand.icon;
              const isCenter = offset === 0;
              const outer = Math.abs(offset) === 2;
              return (
                <motion.button
                  type="button"
                  key={brand.id}
                  layout
                  onClick={() => go(index)}
                  aria-label={`Show ${brand.name}`}
                  aria-current={isCenter ? "true" : undefined}
                  animate={arc(offset)}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className={`${outer ? "hidden sm:flex" : "flex"} w-24 h-24 sm:w-32 sm:h-32 rounded-[26px] bg-white border flex-col items-center justify-center gap-2 p-3 transition-shadow duration-300 ${
                    isCenter
                      ? "border-orange-500 shadow-[0_25px_50px_rgba(234,88,12,0.22)] ring-4 ring-orange-100 z-20"
                      : "border-slate-200 shadow-md hover:border-slate-300 z-10"
                  }`}
                >
                  <span
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center ${
                      isCenter ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <span className="text-[11px] sm:text-sm font-extrabold text-slate-900 tracking-tight text-center leading-tight line-clamp-2">
                    {brand.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2 min-h-[120px]"
            aria-live="polite"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 inline-flex items-center gap-2">
              <CurrentIcon className="w-6 h-6 text-orange-600" />
              {current.name}
            </h3>
            <p className="text-sm sm:text-base font-bold text-orange-600">{current.category}</p>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">{current.desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(activeIndex - 1)}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            aria-label="Previous brand"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {brands.map((b, i) => (
              <button
                type="button"
                key={b.id}
                onClick={() => go(i)}
                aria-label={`Show ${b.name}`}
                className="p-1 -m-0.5"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    activeIndex === i ? "w-7 bg-orange-600" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(activeIndex + 1)}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            aria-label="Next brand"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
