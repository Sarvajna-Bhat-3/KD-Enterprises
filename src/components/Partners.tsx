"use client";

import React, { useState } from "react";
import {
  Cog,
  ChevronLeft,
  ChevronRight,
  Shield,
  Layers,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Partners = () => {
  const brands = [
    {
      id: "hikvision",
      name: "Hikvision",
      category: "CCTV & Video Surveillance",
      desc: "Enterprise 4K IP cameras, ColorVu night vision & high-capacity NVRs.",
      icon: "📹",
      color: "from-red-500 to-rose-600",
    },
    {
      id: "honeywell",
      name: "Honeywell",
      category: "Automation & Access Control",
      desc: "Smart perimeter sensors, intrusion alarm systems & building automation.",
      icon: "🏢",
      color: "from-red-600 to-amber-600",
    },
    {
      id: "samsung",
      name: "Samsung",
      category: "Commercial Displays & AV",
      desc: "Command center video walls, interactive panels & smart digital signage.",
      icon: "📺",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "dlink",
      name: "D-Link",
      category: "Enterprise LAN & Switching",
      desc: "Gigabit managed PoE+ switches, server racks & structured Cat6 cabling.",
      icon: "🌐",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "schneider",
      name: "Schneider Electric",
      category: "Power & Structured Cabling",
      desc: "Industrial power distribution, circuit breakers & cable management.",
      icon: "⚡",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "tplink",
      name: "TP-Link",
      category: "Wireless & Mesh Networking",
      desc: "Omada cloud-managed Wi-Fi 6 access points & optical fiber converters.",
      icon: "📡",
      color: "from-teal-500 to-cyan-600",
    },
    {
      id: "axis",
      name: "Axis Communications",
      category: "High-End Network Cameras",
      desc: "Thermal imaging, license plate recognition & PTZ dome optics.",
      icon: "🔍",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "legrand",
      name: "Legrand",
      category: "Electrical & Server Racks",
      desc: "Patch panels, floor boxes, cable raceways & high-density patch cords.",
      icon: "🔌",
      color: "from-red-500 to-orange-600",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Center on Samsung or D-Link

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
  };

  // Get 5 visible cards for the arc
  const getVisibleCards = () => {
    const total = brands.length;
    const indices = [-2, -1, 0, 1, 2].map((offset) => {
      let idx = (activeIndex + offset) % total;
      if (idx < 0) idx += total;
      return { index: idx, offset };
    });
    return indices;
  };

  const currentBrand = brands[activeIndex];

  // Visual offsets for the rainbow arch (matching frame_011.jpg)
  const getArcStyles = (offset: number) => {
    switch (offset) {
      case -2:
        return { rotate: -14, y: 36, scale: 0.85, opacity: 0.5 };
      case -1:
        return { rotate: -7, y: 12, scale: 0.95, opacity: 0.85 };
      case 0:
        return { rotate: 0, y: -10, scale: 1.1, opacity: 1, zIndex: 20 };
      case 1:
        return { rotate: 7, y: 12, scale: 0.95, opacity: 0.85 };
      case 2:
        return { rotate: 14, y: 36, scale: 0.85, opacity: 0.5 };
      default:
        return { rotate: 0, y: 0, scale: 1, opacity: 1 };
    }
  };

  return (
    <section id="partners" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Little Red/Orange Gear Squircle Icon (Matching frame_011.jpg) */}
        <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mx-auto mb-5 shadow-sm">
          <Cog className="w-6 h-6 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Integrate with leading global <br />
          brands in seconds
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
          We engineer systems with direct OEM partner hardware, ensuring genuine warranty, maximum uptime, and official certifications.
        </p>

        {/* INTERACTIVE 5-CARD ARC CAROUSEL (Exact Dribbble Frame 011 Layout) */}
        <div className="relative mt-16 mb-8 h-[220px] flex items-center justify-center select-none">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            {getVisibleCards().map(({ index, offset }) => {
              const brand = brands[index];
              const styles = getArcStyles(offset);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={brand.id}
                  layout
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    rotate: styles.rotate,
                    y: styles.y,
                    scale: styles.scale,
                    opacity: styles.opacity,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] bg-white border cursor-pointer flex flex-col items-center justify-center p-3 transition-shadow duration-300 ${
                    isCenter
                      ? "border-orange-500 shadow-[0_20px_45px_rgba(234,88,12,0.22)] ring-4 ring-orange-100"
                      : "border-slate-200/90 shadow-md hover:border-slate-300"
                  }`}
                  style={{ zIndex: styles.zIndex || 1 }}
                >
                  <span className="text-3xl sm:text-4xl filter drop-shadow-sm mb-1">
                    {brand.icon}
                  </span>
                  <span className="text-[11px] font-black text-slate-900 tracking-tight text-center line-clamp-1">
                    {brand.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Brand Information (Under the Arc, like Google Meet in frame_011.jpg) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBrand.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-1.5"
          >
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              {currentBrand.name}
            </h3>
            <p className="text-sm font-semibold text-orange-600">
              {currentBrand.category}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              {currentBrand.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Smooth Prev / Next Controls */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            aria-label="Previous Brand"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {brands.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  activeIndex === i
                    ? "w-6 bg-orange-600"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            aria-label="Next Brand"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
