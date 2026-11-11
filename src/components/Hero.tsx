"use client";

import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/companyData";
import {
  ShieldCheck,
  Lightbulb,
  Building2,
  Eye,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white text-slate-900 border-b border-slate-100"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-orange-100/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 text-center relative">
        {/* INTERACTIVE FLOATING NODE DIAGRAM (Full Width Responsive Architecture) */}
        <div className="relative w-full max-w-4xl mx-auto h-[280px] sm:h-[320px] md:h-[350px] mb-8 select-none flex items-center justify-center">
          {/* SVG Connector Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 840 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center to Top-Left */}
            <path
              d="M420 160 L300 80"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Center to Bottom-Left */}
            <path
              d="M420 160 L300 240"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Center to Top-Right */}
            <path
              d="M420 160 L540 80"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Center to Bottom-Right */}
            <path
              d="M420 160 L540 240"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Left Branches */}
            <path d="M300 80 L160 120" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M300 240 L160 200" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Right Branches */}
            <path d="M540 80 L680 120" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M540 240 L680 200" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Joint Dots */}
            <circle cx="300" cy="80" r="4" fill="#94A3B8" />
            <circle cx="300" cy="240" r="4" fill="#94A3B8" />
            <circle cx="540" cy="80" r="4" fill="#94A3B8" />
            <circle cx="540" cy="240" r="4" fill="#94A3B8" />
          </svg>

          {/* 1. CENTER MAIN SQUIRCLE: KD Hub */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-[32px] bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 flex flex-col items-center justify-center text-white shadow-[0_25px_50px_rgba(234,88,12,0.35)] hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-full border-2 border-white/60 flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <span className="text-[11px] font-black tracking-widest mt-1 uppercase text-orange-100">
              KD HUB
            </span>
          </motion.div>

          {/* 2. TOP-LEFT: Yellow Lightbulb (Engineering Ideas) */}
          <div className="absolute left-[26%] sm:left-[28%] top-[8%] sm:top-[10%] z-10 animate-float-slow">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center text-amber-950 shadow-lg shadow-amber-300/30 hover:scale-110 transition-transform"
              title="Innovative Civil & Engineering Ideas"
            >
              <Lightbulb className="w-7 h-7" />
            </div>
          </div>

          {/* 3. BOTTOM-LEFT: Cyan Water/Shield (Waterproofing & Infrastructure) */}
          <div className="absolute left-[26%] sm:left-[28%] bottom-[8%] sm:bottom-[10%] z-10 animate-float-delayed">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-400/30 hover:scale-110 transition-transform"
              title="Waterproofing & Concrete Rehabilitation"
            >
              <Building2 className="w-7 h-7" />
            </div>
          </div>

          {/* 4. LEFT FLOATING PHOTO: Professional / Site Engineer Card with Glass Blur */}
          <div className="absolute left-[4%] sm:left-[6%] md:left-[8%] top-[25%] z-10 hidden sm:block animate-float-fast">
            <div className="w-28 h-32 rounded-[24px] overflow-hidden border-2 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative group">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="KD team engineer on site"
                fill
                priority
                sizes="(max-width: 768px) 100px, 120px"
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[2px] flex items-center justify-center">
                <span className="text-[11px] font-bold text-white tracking-wide">
                  Site Engineer
                </span>
              </div>
            </div>
          </div>

          {/* 5. TOP-RIGHT: Red/Coral Security Icon (CCTV Surveillance) */}
          <div className="absolute right-[26%] sm:right-[28%] top-[8%] sm:top-[10%] z-10 animate-float-delayed">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30 hover:scale-110 transition-transform"
              title="Security & CCTV Surveillance"
            >
              <Zap className="w-7 h-7" />
            </div>
          </div>

          {/* 6. BOTTOM-RIGHT: White Surveillance Eyes Card */}
          <div className="absolute right-[26%] sm:right-[28%] bottom-[8%] sm:bottom-[10%] z-10 animate-float-slow">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-white border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-lg shadow-slate-200/60 hover:scale-110 transition-transform"
              title="24/7 Monitoring & AMC"
            >
              <Eye className="w-7 h-7 text-orange-600" />
            </div>
          </div>

          {/* 7. RIGHT FLOATING PHOTO: Operations / Client Satisfaction Card */}
          <div className="absolute right-[4%] sm:right-[6%] md:right-[8%] top-[25%] z-10 hidden sm:block animate-float-slow">
            <div className="w-28 h-32 rounded-[24px] overflow-hidden border-2 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative group">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                alt="Client consultation"
                fill
                priority
                sizes="(max-width: 768px) 100px, 120px"
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent backdrop-blur-[2px] flex items-center justify-center">
                <span className="text-[11px] font-bold text-white tracking-wide">
                  Client Partner
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN DISPLAY TYPOGRAPHY */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 text-orange-800 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Smart Infrastructure, Strong Future</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08]">
            All-in-one infrastructure & <br className="hidden sm:inline" />
            security platform
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            KD Enterprises is a modern contracting platform designed to integrate security systems, IT networking, civil works, and metal fabrication under one roof.
          </p>

          {/* Coral / Orange Pill CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all transform hover:scale-105 active:scale-95"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>

          <div className="pt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            {companyInfo.coverSlogan}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
