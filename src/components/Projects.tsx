"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects, companyInfo } from "@/data/companyData";
import { MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Security", "Networking", "Fabrication", "Civil"];

  const filteredProjects =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Quality in every detail
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            A showcase of successfully delivered installations, structural projects, and maintenance contracts in Mumbai.
          </p>
        </div>

        {/* Minimalist Pill Filter Bar */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/80 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  filter === cat ? "text-white" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeProjectFilterPill"
                    className="absolute inset-0 rounded-full bg-slate-950 shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[28px] border border-slate-200/90 hover:border-orange-400 overflow-hidden flex flex-col transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/95 backdrop-blur-md text-slate-950 shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-orange-600 font-bold mb-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Brochure Highlight Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-ping"></span>
            <span>{companyInfo.onePartnerBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
