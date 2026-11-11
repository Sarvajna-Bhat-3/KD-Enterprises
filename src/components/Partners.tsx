"use client";

import React, { useState, useEffect } from "react";
import {
  Cog,
  ChevronLeft,
  ChevronRight,
  HandMetal,
} from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 40) {
      handlePrev();
    } else if (info.offset.x < -40) {
      handleNext();
    }
  };

  const getVisibleCards = () => {
    const total = brands.length;
    // On mobile screens, show 3 cards to fit perfectly; on tablet/desktop, show 5 cards
    const offsets = isMobile ? [-1, 0, 1] : [-2, -1, 0, 1, 2];
    return offsets.map((offset) => {
      let idx = (activeIndex + offset) % total;
      if (idx < 0) idx += total;
      return { index: idx, offset };
    });
  };

  const currentBrand = brands[activeIndex];

  const getArcStyles = (offset: number) => {
    switch (offset) {
      case -2:
        return { rotate: -15, y: 35, scale: 0.85, opacity: 0.45 };
      case -1:
        return { rotate: isMobile ? -8 : -7.5, y: isMobile ? 8 : 12, scale: isMobile ? 0.9 : 0.95, opacity: 0.85 };
      case 0:
        return { rotate: 0, y: isMobile ? -6 : -12, scale: isMobile ? 1.08 : 1.15, opacity: 1, zIndex: 20 };
      case 1:
        return { rotate: isMobile ? 8 : 7.5, y: isMobile ? 8 : 12, scale: isMobile ? 0.9 : 0.95, opacity: 0.85 };
      case 2:
        return { rotate: 15, y: 35, scale: 0.85, opacity: 0.45 };
      default:
        return { rotate: 0, y: 0, scale: 1, opacity: 1 };
    }
  };

  return (
    <section id="partners" className="w-full py-20 sm:py-28 md:py-36 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        {/* Gear Squircle Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mx-auto mb-4 sm:mb-5 shadow-sm">
          <Cog className="w-6 h-6 sm:w-7 sm:h-7 animate-spin" style={{ animationDuration: "14s" }} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
          Integrate with leading global <br className="hidden sm:inline" />
          brands in seconds
        </h2>
        <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed px-2">
          We engineer systems with direct OEM partner hardware, ensuring genuine warranty, maximum uptime, and official certifications.
        </p>

        {/* INTERACTIVE ARC CAROUSEL WITH TOUCH SWIPE */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="relative mt-12 sm:mt-20 mb-8 sm:mb-10 h-[210px] sm:h-[240px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-pan-y"
        >
          <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8">
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
                  transition={{ type: "spring", stiffness: 340, damping: 28 }}
                  className={`w-20 h-24 xs:w-24 xs:h-28 sm:w-32 sm:h-32 rounded-[24px] sm:rounded-[28px] bg-white border cursor-pointer flex flex-col items-center justify-center p-2.5 sm:p-3 transition-shadow duration-300 ${
                    isCenter
                      ? "border-orange-500 shadow-[0_20px_45px_rgba(234,88,12,0.22)] ring-4 ring-orange-100"
                      : "border-slate-200/90 shadow-sm sm:shadow-md hover:border-slate-300"
                  }`}
                  style={{ zIndex: styles.zIndex || 1 }}
                >
                  <span
                    className={`text-sm xs:text-base sm:text-xl font-black tracking-tight flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl mb-1.5 sm:mb-2 ${
                      isCenter
                        ? "bg-orange-600 text-white shadow-md shadow-orange-600/30"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {brand.initials}
                  </span>
                  <span className="text-[11px] sm:text-sm font-black text-slate-900 tracking-tight text-center line-clamp-1 px-1">
                    {brand.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Active Brand Information */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBrand.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-1.5 sm:space-y-2 mt-2 sm:mt-4 px-4"
          >
            <h3 className="text-xl sm:text-3xl font-black text-slate-950">
              {currentBrand.name}
            </h3>
            <p className="text-xs sm:text-base font-bold text-orange-600">
              {currentBrand.category}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              {currentBrand.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-90 shadow-sm"
            aria-label="Previous Brand"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5 sm:gap-2">
            {brands.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 sm:h-2.5 rounded-full cursor-pointer transition-all ${
                  activeIndex === i
                    ? "w-6 sm:w-8 bg-orange-600"
                    : "w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-110 active:scale-90 shadow-sm"
            aria-label="Next Brand"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
