"use client";

import React from "react";
import { brandPartners } from "@/data/companyData";
import { Award } from "lucide-react";

export const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-slate-50 text-slate-900 relative border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-widest uppercase">
            <span>05</span>
            <span>•</span>
            <span>BRANDS & TECHNOLOGY PARTNERS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Trusted Brands. <span className="text-orange-600">Advanced Technology.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We work with leading global and national brands to deliver reliable, high-performance, and future-ready solutions.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 12 Brands Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {brandPartners.map((brand, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-200 hover:border-orange-500 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-3 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors tracking-wide">
                {brand.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500 font-semibold">
                {brand.category}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 max-w-2xl mx-auto italic">
            &ldquo;We integrate genuine components backed by official brand warranties, verified technical certifications, and direct manufacturer support.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
