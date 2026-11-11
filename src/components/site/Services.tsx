"use client";

import React, { useState } from "react";
import { Image } from "@/components/site/Image";
import { serviceCategories, whatsappWith } from "@/data/companyData";
import {
  ShieldCheck,
  Building2,
  Hammer,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getTabIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-4 h-4" />;
      case 1:
        return <Building2 className="w-4 h-4" />;
      case 2:
        return <Hammer className="w-4 h-4" />;
      default:
        return <ShieldCheck className="w-4 h-4" />;
    }
  };

  const currentCategory = serviceCategories[activeTab]!;

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-white text-slate-900 relative border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Complete solutions for a safer, stronger tomorrow
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            From smart electronic security to structural rehabilitation, each vertical is managed by licensed engineers.
          </p>
        </div>

        {/* Minimalist Floating Pill Tabs */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <div
            role="tablist"
            aria-label="Service categories"
            className="grid grid-cols-1 w-full sm:w-auto sm:inline-flex p-1.5 rounded-3xl sm:rounded-full bg-slate-100/90 border border-slate-200/80 shadow-inner"
          >
            {serviceCategories.map((cat, idx) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === idx}
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full font-bold text-xs sm:text-sm transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === idx ? "text-white" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeServiceTabPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 shadow-md shadow-orange-500/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{getTabIcon(idx)}</span>
                <span className="relative z-10">{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Panel with Bento Grid Styling */}
        <div className="mt-8 sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50/80 border border-slate-200/90 rounded-[28px] sm:rounded-[36px] p-5 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Info & Sub-services */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                      {currentCategory.badge}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                      {currentCategory.title}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {currentCategory.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentCategory.services.map((srv, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-orange-400 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start gap-3.5">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {srv.name}
                            </h4>
                            <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
                              {srv.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-orange-600 shadow-md transition-all transform hover:scale-105 active:scale-95"
                    >
                      <span>Request Free Site Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                      href={whatsappWith(`Hi KD Enterprises, I'd like to inquire about ${currentCategory.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Right: Clean Squircle Media Showcase */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] rounded-[30px] overflow-hidden border-2 border-white shadow-[0_20px_45px_rgba(0,0,0,0.08)] group">
                    <Image
                      src={currentCategory.image}
                      alt={currentCategory.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-xl">
                        <strong className="text-slate-950 block text-sm font-black mb-1">
                          Turnkey Accountability
                        </strong>
                        All installations backed by official warranties, licensed technicians, and direct support from Mihir Gandhi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
