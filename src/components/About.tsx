"use client";

import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/companyData";
import {
  ShieldCheck,
  ArrowRight,
  Eye,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const leftCards = [
    {
      title: "CCTV & Surveillance",
      desc: "4K IP Camera Deployment",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80",
      anim: "animate-float-slow",
    },
    {
      title: "Data Networking",
      desc: "Cat6 & Rack Infrastructure",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80",
      anim: "animate-float-delayed",
    },
    {
      title: "Structural Civil Works",
      desc: "RCC Column Retrofitting",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=500&q=80",
      anim: "animate-float-fast",
    },
  ];

  const rightCards = [
    {
      title: "Steel Fabrication",
      desc: "MS/SS Industrial Trusses",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80",
      anim: "animate-float-delayed",
    },
    {
      title: "Waterproofing",
      desc: "Leakage & Membrane Fix",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80",
      anim: "animate-float-slow",
    },
    {
      title: "Access Control",
      desc: "Biometrics & Smart Locks",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80",
      anim: "animate-float-fast",
    },
  ];

  const allCards = [...leftCards, ...rightCards];

  return (
    <section id="solutions" className="w-full py-20 sm:py-28 md:py-36 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Symmetrical Column of Floating Photo Cards (Desktop) */}
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-6 2xl:gap-8">
            {leftCards.map((c, i) => (
              <div
                key={i}
                className={`${c.anim} group bg-white p-3 rounded-[26px] border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-orange-400 transition-all hover:scale-105 duration-300`}
              >
                <div className="relative h-36 w-full rounded-[20px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 1200px) 250px, 320px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-11 bg-gradient-to-t from-black/75 to-transparent backdrop-blur-[1px] flex items-center px-3.5">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {c.title}
                    </span>
                  </div>
                </div>
                <div className="px-2 pt-2.5 pb-1 text-center">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {c.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Core Content */}
          <div className="lg:col-span-6 text-center space-y-6 px-2 sm:px-6">
            {/* Center Little Squircle Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-orange-500/25"
            >
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]"
            >
              Integrated multi-trade <br />
              solutions
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed"
            >
              Streamline security, networking, civil repairs, and metal fabrication under one centralized partner, eliminating the chaos of multiple sub-contractors.
            </motion.p>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/25 transition-all transform hover:scale-105 active:scale-95"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile & Tablet Smooth Touch Carousel for the 6 Cards */}
            <div className="lg:hidden pt-4">
              <div className="text-left mb-2 px-1 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Featured Capabilities
                </span>
                <span className="text-[10px] text-orange-600 font-bold">
                  Swipe horizontally →
                </span>
              </div>
              <div className="flex overflow-x-auto no-scrollbar gap-3.5 pb-2 -mx-2 px-2 snap-x snap-mandatory">
                {allCards.map((c, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-48 sm:w-56 snap-start bg-white p-2.5 rounded-[22px] border border-slate-200/90 shadow-sm"
                  >
                    <div className="relative h-28 sm:h-32 w-full rounded-[16px] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent flex items-center px-3">
                        <span className="text-[11px] font-bold text-white tracking-wide truncate">
                          {c.title}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 pb-1 text-center">
                      <span className="text-[10px] font-semibold text-slate-500 block truncate">
                        {c.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision & Mission Squircles */}
            <div className="pt-4 sm:pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div className="p-5 sm:p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {companyInfo.about.vision}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {companyInfo.about.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Right Symmetrical Column of Floating Photo Cards (Desktop) */}
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-6 2xl:gap-8">
            {rightCards.map((c, i) => (
              <div
                key={i}
                className={`${c.anim} group bg-white p-3 rounded-[26px] border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-orange-400 transition-all hover:scale-105 duration-300`}
              >
                <div className="relative h-36 w-full rounded-[20px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 1200px) 250px, 320px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-11 bg-gradient-to-t from-black/75 to-transparent backdrop-blur-[1px] flex items-center px-3.5">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {c.title}
                    </span>
                  </div>
                </div>
                <div className="px-2 pt-2.5 pb-1 text-center">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {c.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
