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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white text-slate-900 rounded-b-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* TOP INTERACTIVE FLOATING NODE DIAGRAM (Exactly like Dribbble Concept) */}
        <div className="relative w-full max-w-3xl mx-auto h-[260px] sm:h-[300px] mb-8 select-none flex items-center justify-center">
          {/* SVG Connector Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 760 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center to Top-Left */}
            <path
              d="M380 150 L275 80"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Center to Bottom-Left */}
            <path
              d="M380 150 L275 220"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Center to Top-Right */}
            <path
              d="M380 150 L485 80"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Center to Bottom-Right */}
            <path
              d="M380 150 L485 220"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Further branch to left photo */}
            <path d="M275 80 L160 120" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d="M275 220 L160 180" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Further branch to right photo & widget */}
            <path d="M485 80 L600 120" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d="M485 220 L600 180" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Small Joint Dots */}
            <circle cx="275" cy="80" r="3.5" fill="#CBD5E1" />
            <circle cx="275" cy="220" r="3.5" fill="#CBD5E1" />
            <circle cx="485" cy="80" r="3.5" fill="#CBD5E1" />
            <circle cx="485" cy="220" r="3.5" fill="#CBD5E1" />
          </svg>

          {/* 1. CENTER MAIN SQUIRCLE: KD Enterprises Platform Hub */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 flex flex-col items-center justify-center text-white shadow-[0_20px_40px_rgba(234,88,12,0.35)] hover:scale-105 transition-transform duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <span className="text-[10px] font-black tracking-widest mt-1 uppercase text-orange-100">
              KD HUB
            </span>
          </motion.div>

          {/* 2. TOP-LEFT SQUIRCLE: Yellow Lightbulb (Engineering Ideas) */}
          <div className="absolute left-[30%] sm:left-[32%] top-[10%] sm:top-[12%] z-10 animate-float-slow">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center text-amber-950 shadow-lg shadow-amber-300/30 hover:scale-110 transition-transform"
              title="Innovative Civil & Engineering Ideas"
            >
              <Lightbulb className="w-6 h-6" />
            </div>
          </div>

          {/* 3. BOTTOM-LEFT SQUIRCLE: Cyan Water/Shield (Waterproofing & Infrastructure) */}
          <div className="absolute left-[30%] sm:left-[32%] bottom-[10%] sm:bottom-[12%] z-10 animate-float-delayed">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-cyan-400/30 hover:scale-110 transition-transform"
              title="Waterproofing & Concrete Rehabilitation"
            >
              <Building2 className="w-6 h-6" />
            </div>
          </div>

          {/* 4. LEFT FLOATING PHOTO: Professional / Site Engineer Card with Glass Blur */}
          <div className="absolute left-[6%] sm:left-[10%] top-[25%] z-10 hidden sm:block animate-float-fast">
            <div className="w-24 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] relative group">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="KD Team Engineer"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[2px] flex items-center justify-center">
                <span className="text-[10px] font-bold text-white tracking-wide">
                  Mihir Gandhi
                </span>
              </div>
            </div>
          </div>

          {/* 5. TOP-RIGHT SQUIRCLE: Red/Coral Security Icon (CCTV Surveillance) */}
          <div className="absolute right-[30%] sm:right-[32%] top-[10%] sm:top-[12%] z-10 animate-float-delayed">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30 hover:scale-110 transition-transform"
              title="Security & CCTV Surveillance"
            >
              <Zap className="w-6 h-6" />
            </div>
          </div>

          {/* 6. BOTTOM-RIGHT SQUIRCLE: White Surveillance Eyes Card */}
          <div className="absolute right-[30%] sm:right-[32%] bottom-[10%] sm:bottom-[12%] z-10 animate-float-slow">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center text-slate-800 shadow-lg shadow-slate-200/60 hover:scale-110 transition-transform"
              title="24/7 Monitoring & AMC"
            >
              <Eye className="w-6 h-6 text-orange-600" />
            </div>
          </div>

          {/* 7. RIGHT FLOATING PHOTO: Operations / Client Satisfaction Card */}
          <div className="absolute right-[6%] sm:right-[10%] top-[25%] z-10 hidden sm:block animate-float-slow">
            <div className="w-24 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] relative group">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                alt="Client Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[2px] flex items-center justify-center">
                <span className="text-[10px] font-bold text-white tracking-wide">
                  Client Partner
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN DISPLAY TYPOGRAPHY (Exactly like CoreShift in frame_004.jpg) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Smart Infrastructure, Strong Future</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            All-in-one infrastructure & <br className="hidden sm:inline" />
            security platform
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            KD Enterprises is a modern contracting platform designed to integrate security systems, IT networking, civil works, and metal fabrication under one roof.
          </p>

          {/* Coral / Orange Pill CTA Button (Like Request a Demo in frame_004.jpg) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all transform hover:scale-105 active:scale-95"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>

          <div className="pt-3 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            {companyInfo.coverSlogan}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
