"use client";

import React from "react";
import { companyInfo } from "@/data/companyData";
import {
  ShieldCheck,
  Building,
  Wrench,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  Award,
  Users,
} from "lucide-react";

export const Hero = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Security & Surveillance",
      desc: "HD CCTV, IP cameras & biometric access control",
    },
    {
      icon: Building,
      title: "Civil & Infrastructure",
      desc: "Structural repair, waterproofing, painting & RCC",
    },
    {
      icon: Wrench,
      title: "Metal Fabrication",
      desc: "MS/SS fabrication, trusses & custom frameworks",
    },
  ];

  const stats = [
    { label: "Execution Quality", value: "100%", icon: Award },
    { label: "Core Verticals", value: "3+", icon: Building },
    { label: "Brand Partnerships", value: "12+", icon: Users },
    { label: "Support & Maintenance", value: "24/7", icon: Clock },
  ];

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Glowing Circles and Patterns */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            {companyInfo.subTagline}
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Proprietor: {companyInfo.proprietor}
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-none">
            Building Safer Spaces & <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Stronger Infrastructure
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted contracting partner for <strong>Security Systems</strong>, <strong>Networking & IT</strong>, <strong>Civil Works</strong>, and <strong>Structural Fabrication</strong> across Mumbai & Maharashtra.
          </p>

          <p className="mt-2 text-sm text-orange-400 font-semibold tracking-wider uppercase">
            &ldquo;{companyInfo.cardSlogan}&rdquo;
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-orange-600 hover:bg-orange-500 shadow-xl shadow-orange-600/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get Free Site Inspection & Quote</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
            >
              <PhoneCall className="w-5 h-5 text-orange-400" />
              <span>Call: {companyInfo.phone}</span>
            </a>
          </div>

          <div className="mt-4 text-xs text-slate-400">
            {companyInfo.coverSlogan}
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-orange-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {h.desc}
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold text-orange-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-12 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-orange-500 mb-1">
                  <Icon className="w-4 h-4" />
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {s.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
