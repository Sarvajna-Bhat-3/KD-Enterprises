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
    <section id="why-us" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-widest uppercase">
            <span>07</span>
            <span>•</span>
            <span>WHY KD ENTERPRISES</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Your Trusted Partner for{" "}
            <span className="text-orange-600">Complete Solutions</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Engineered excellence, strict accountability, and seamless multi-trade coordination that saves you time and cost.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 8 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-200 hover:border-orange-500 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 relative overflow-hidden"
            >
              {/* Number Badge from Brochure */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center shadow-md">
                  {idx + 1}
                </span>
                <div className="p-2 rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors">
                  {getIcon(idx)}
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Box from Page 7: ONE TRUSTED PARTNER */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50/70 via-white to-orange-50/70 border-2 border-orange-400 rounded-3xl p-8 sm:p-10 shadow-lg relative text-center">
            <span className="text-orange-700 text-xs font-black uppercase tracking-widest block mb-2">
              The KD Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-wider">
              ONE TRUSTED PARTNER
            </h3>
            <p className="mt-4 text-base text-slate-700 leading-relaxed max-w-xl mx-auto">
              Security, networking, civil, fabrication, and maintenance services — all professionally coordinated under one roof. No juggling multiple sub-contractors.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-600">
              <span className="px-3 py-1 bg-white rounded-full border border-slate-300 shadow-sm">
                Single Point of Contact
              </span>
              <span className="px-3 py-1 bg-white rounded-full border border-slate-300 shadow-sm">
                Direct Accountability
              </span>
              <span className="px-3 py-1 bg-white rounded-full border border-slate-300 shadow-sm">
                Consistent High Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
