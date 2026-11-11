"use client";

import React from "react";
import { whyChooseUs } from "@/data/companyData";
import {
  ShieldCheck,
  Zap,
  Target,
  Clock,
  Coins,
  Headphones,
  Layers,
  Sliders,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const WhyUs = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-orange-600" />;
      case 1:
        return <Zap className="w-5 h-5 text-orange-600" />;
      case 2:
        return <Target className="w-5 h-5 text-orange-600" />;
      case 3:
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 4:
        return <Coins className="w-5 h-5 text-orange-600" />;
      case 5:
        return <Headphones className="w-5 h-5 text-orange-600" />;
      case 6:
        return <Layers className="w-5 h-5 text-orange-600" />;
      case 7:
        return <Sliders className="w-5 h-5 text-orange-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="why-us" className="w-full py-20 sm:py-28 md:py-36 bg-[#f8fafc] text-slate-900 relative border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span>Why Choose KD Enterprises</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Your trusted partner for <br className="hidden sm:inline" />
            complete solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed px-2">
            Engineered excellence, strict accountability, and seamless multi-trade coordination that saves you time and cost.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-200/90 hover:border-orange-400 rounded-[26px] sm:rounded-[30px] p-5 sm:p-7 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center shadow-md shadow-orange-600/30">
                  {idx + 1}
                </span>
                <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-orange-50 group-hover:bg-orange-100 transition-colors">
                  {getIcon(idx)}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Box: ONE TRUSTED PARTNER */}
        <div className="mt-12 sm:mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50/80 via-white to-orange-50/80 border-2 border-orange-300/80 rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 shadow-xl relative text-center">
            <span className="text-orange-700 text-[11px] sm:text-xs font-black uppercase tracking-widest block mb-1.5 sm:mb-2">
              The KD Advantage
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              ONE TRUSTED PARTNER
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto px-2">
              Security, networking, civil, fabrication, and maintenance services — all professionally coordinated under one roof. No juggling multiple sub-contractors.
            </p>
            <div className="mt-5 sm:mt-7 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="px-3.5 sm:px-4 py-1.5 bg-white rounded-full border border-slate-300 shadow-sm">
                Single Point of Contact
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full border border-slate-300 shadow-sm">
                Direct Accountability
              </span>
              <span className="px-4 py-1.5 bg-white rounded-full border border-slate-300 shadow-sm">
                Consistent High Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
