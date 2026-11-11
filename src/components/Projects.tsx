"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects, companyInfo } from "@/data/companyData";
import { MapPin, Tag, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Security", "Networking", "Fabrication", "Civil"];

  const filteredProjects =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase">
            <span>06</span>
            <span>•</span>
            <span>OUR WORK & PROJECTS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quality in <span className="text-orange-500">Every Detail</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            A glimpse into our successfully delivered installations, structural projects, and maintenance undertakings.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === cat
                  ? "bg-orange-600 text-white shadow-md shadow-orange-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/90 rounded-2xl border border-slate-700/80 hover:border-orange-500/60 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-bold rounded-lg bg-orange-600 text-white shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-orange-400 font-medium mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/70">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-900 text-slate-300 border border-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Highlight Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 text-sm font-bold shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
            <span>{companyInfo.onePartnerBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
