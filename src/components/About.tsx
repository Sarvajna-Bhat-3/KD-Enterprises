"use client";

import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/companyData";
import {
  CheckCircle2,
  Eye,
  Target,
  Sparkles,
  Award,
} from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-widest uppercase">
            <span>02</span>
            <span>•</span>
            <span>ABOUT KD ENTERPRISES</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Building Safer Spaces & <br className="hidden sm:inline" />
            <span className="text-orange-600">Stronger Infrastructure</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span>Professionally Managed Contracting & Services</span>
              </h3>

              <p className="text-slate-700 text-base leading-relaxed">
                {companyInfo.about.description}
              </p>

              <p className="mt-4 text-slate-700 text-base leading-relaxed">
                {companyInfo.about.subDescription}
              </p>

              {/* Core Strengths Badges */}
              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-slate-800 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Quality Workmanship</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Timely Execution</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Client Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-orange-50/40 border border-orange-200/80 hover:border-orange-400 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>Our Vision</span>
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {companyInfo.about.vision}
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-orange-50/40 border border-orange-200/80 hover:border-orange-400 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>Our Mission</span>
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {companyInfo.about.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Visiting Card Spotlight */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Leadership Profile Card */}
            <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-amber-500 absolute top-0 left-0"></div>

              <div className="flex items-center gap-4 mt-2">
                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-600/30">
                  MG
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {companyInfo.proprietor}
                  </h3>
                  <p className="text-orange-600 font-bold text-sm">
                    Proprietor & Managing Director
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    KD Enterprises • Santacruz East, Mumbai
                  </p>
                </div>
              </div>

              <blockquote className="mt-6 text-slate-700 italic text-sm border-l-2 border-orange-500 pl-4 py-1">
                &ldquo;We take full ownership of every site we manage — from the smallest surveillance sensor to large-scale structural rehabilitation. Quality and trust are our cornerstones.&rdquo;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span>Direct Contact:</span>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="font-bold text-orange-600 hover:underline"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Official Card Preview Badge */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-slate-300 shrink-0 shadow-sm">
                <Image
                  src="/images/kd-card-front.jpg"
                  alt="KD Enterprises Business Card"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wide">
                  <Award className="w-3.5 h-3.5" />
                  <span>Official Business Card</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                  KD Enterprises
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 italic">
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
