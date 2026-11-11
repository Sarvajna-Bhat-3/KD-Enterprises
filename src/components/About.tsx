"use client";

import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/companyData";
import {
  CheckCircle2,
  Eye,
  Target,
  Sparkles,
  ShieldCheck,
  Award,
} from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase">
            <span>02</span>
            <span>•</span>
            <span>ABOUT KD ENTERPRISES</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Safer Spaces & <br className="hidden sm:inline" />
            <span className="text-orange-500">Stronger Infrastructure</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/60 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <span>Professionally Managed Contracting & Services</span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {companyInfo.about.description}
              </p>

              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                {companyInfo.about.subDescription}
              </p>

              {/* Core Strengths Badges */}
              <div className="mt-6 pt-6 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Quality Workmanship</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Timely Execution</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Client Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-orange-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Our Vision</span>
                </h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {companyInfo.about.vision}
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-orange-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Our Mission</span>
                </h4>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {companyInfo.about.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Visiting Card Spotlight */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Leadership Profile Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-600/30">
                  MG
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {companyInfo.proprietor}
                  </h3>
                  <p className="text-orange-400 font-semibold text-sm">
                    Proprietor & Managing Director
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    KD Enterprises • Santacruz East, Mumbai
                  </p>
                </div>
              </div>

              <blockquote className="mt-6 text-slate-300 italic text-sm border-l-2 border-orange-500 pl-4 py-1">
                &ldquo;We take full ownership of every site we manage — from the smallest surveillance sensor to large-scale structural rehabilitation. Quality and trust are our cornerstones.&rdquo;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Contact:</span>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="font-bold text-orange-400 hover:underline"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Official Card Preview Badge */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 flex items-center gap-4">
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-slate-600 shrink-0 shadow-md">
                <Image
                  src="/images/kd-card-front.jpg"
                  alt="KD Enterprises Business Card"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-wide">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Credentials</span>
                </div>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  KD Enterprises Official Card
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  &ldquo;Turning Ideas Into Reality...&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
