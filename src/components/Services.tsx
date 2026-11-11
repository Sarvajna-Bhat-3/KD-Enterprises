"use client";

import React, { useState } from "react";
import Image from "next/image";
import { serviceCategories, companyInfo } from "@/data/companyData";
import {
  ShieldCheck,
  Building2,
  Hammer,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getTabIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-5 h-5" />;
      case 1:
        return <Building2 className="w-5 h-5" />;
      case 2:
        return <Hammer className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const currentCategory = serviceCategories[activeTab];

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase">
            <span>03</span>
            <span>•</span>
            <span>OUR SERVICES</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Solutions for a{" "}
            <span className="text-orange-500">Safer & Stronger Tomorrow</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            End-to-end expertise spanning digital surveillance, advanced networking, civil engineering, and specialized steel fabrication.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {serviceCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              <span className={activeTab === idx ? "text-white" : "text-orange-400"}>
                {getTabIcon(idx)}
              </span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Panel */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Info & Grid of Sub-services */}
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded-md bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                {currentCategory.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentCategory.title}
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base">
                {currentCategory.subtitle}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentCategory.services.map((srv, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-orange-500/40 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                          {srv.name}
                        </h4>
                        <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action row */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 shadow-md transition-all"
                >
                  <span>Book Site Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-700/50 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Category Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <Image
                  src={currentCategory.image}
                  alt={currentCategory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 text-xs text-slate-300">
                    <strong className="text-white block text-sm font-bold mb-1">
                      KD Enterprises Guarantee
                    </strong>
                    All works carried out with strictly audited materials, trained technicians, and turnkey project accountability.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
