"use client";

import React, { useState } from "react";
import {
  Cog,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Partners = () => {
  const brands = [
    {
      id: "hikvision",
      name: "Hikvision",
      category: "CCTV & Video Surveillance",
      desc: "Enterprise 4K IP cameras, ColorVu night vision & high-capacity NVRs.",
      initials: "HV",
    },
    {
      id: "honeywell",
      name: "Honeywell",
      category: "Automation & Access Control",
      desc: "Smart perimeter sensors, intrusion alarm systems & building automation.",
      initials: "HW",
    },
    {
      id: "samsung",
      name: "Samsung",
      category: "Commercial Displays & AV",
      desc: "Command center video walls, interactive panels & smart digital signage.",
      initials: "SM",
    },
    {
      id: "dlink",
      name: "D-Link",
      category: "Enterprise LAN & Switching",
      desc: "Gigabit managed PoE+ switches, server racks & structured Cat6 cabling.",
      initials: "DL",
    },
    {
      id: "schneider",
      name: "Schneider Electric",
      category: "Power & Structured Cabling",
      desc: "Industrial power distribution, circuit breakers & cable management.",
      initials: "SE",
    },
    {
      id: "tplink",
      name: "TP-Link",
      category: "Wireless & Mesh Networking",
      desc: "Omada cloud-managed Wi-Fi 6 access points & optical fiber converters.",
      initials: "TP",
    },
    {
      id: "axis",
      name: "Axis Communications",
      category: "High-End Network Cameras",
      desc: "Thermal imaging, license plate recognition & PTZ dome optics.",
      initials: "AX",
    },
    {
      id: "legrand",
      name: "Legrand",
      category: "Electrical & Server Racks",
      desc: "Patch panels, floor boxes, cable raceways & high-density patch cords.",
      initials: "LG",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
  };

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

  const getArcStyles = (offset: number) => {
    switch (offset) {
      case -2:
        return { rotate: -15, y: 40, scale: 0.85, opacity: 0.5 };
      case -1:
        return { rotate: -7.5, y: 14, scale: 0.95, opacity: 0.85 };
      case 0:
        return { rotate: 0, y: -12, scale: 1.15, opacity: 1, zIndex: 20 };
      case 1:
        return { rotate: 7.5, y: 14, scale: 0.95, opacity: 0.85 };
      case 2:
        return { rotate: 15, y: 40, scale: 0.85, opacity: 0.5 };
      default:
        return { rotate: 0, y: 0, scale: 1, opacity: 1 };
    }
  };

  return (
    <section id="partners" className="w-full py-28 md:py-36 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        {/* Gear Squircle Icon */}
        <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mx-auto mb-5 shadow-sm">
          <Cog className="w-7 h-7 animate-spin" style={{ animationDuration: "14s" }} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
          Integrate with leading global <br />
          brands in seconds
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          We engineer systems with direct OEM partner hardware, ensuring genuine warranty, maximum uptime, and official certifications.
        </p>

        {/* INTERACTIVE 5-CARD ARC CAROUSEL */}
        <div className="relative mt-20 mb-10 h-[240px] flex items-center justify-center select-none">
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
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
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className={`w-24 h-24 sm:w-32 sm:h-32 rounded-[28px] bg-white border cursor-pointer flex flex-col items-center justify-center p-3 transition-shadow duration-300 ${
                    isCenter
                      ? "border-orange-500 shadow-[0_25px_50px_rgba(234,88,12,0.25)] ring-4 ring-orange-100"
                      : "border-slate-200/90 shadow-md hover:border-slate-300"
                  }`}
                  style={{ zIndex: styles.zIndex || 1 }}
                >
                  <span
                    className={`text-base sm:text-xl font-black tracking-tight flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mb-2 ${
                      isCenter
                        ? "bg-orange-600 text-white shadow-md shadow-orange-600/30"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {brand.initials}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight text-center line-clamp-1">
                    {brand.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Brand Information */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBrand.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2 mt-4"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
              {currentBrand.name}
            </h3>
            <p className="text-sm sm:text-base font-bold text-orange-600">
              {currentBrand.category}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              {currentBrand.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Previous Brand"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {brands.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full cursor-pointer transition-all ${
                  activeIndex === i
                    ? "w-8 bg-orange-600"
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-sm"
            aria-label="Next Brand"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
