"use client";

import React from "react";
import Image from "next/image";
import { productsAndSolutions } from "@/data/companyData";
import { ArrowUpRight } from "lucide-react";

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-widest uppercase">
            <span>04</span>
            <span>•</span>
            <span>SOLUTIONS & PRODUCTS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Right Solutions. <span className="text-orange-600">Better Performance.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Engineered hardware, certified cabling, heavy fabrication steel, and high-performance civil restoration products.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 8 Products Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-orange-500 overflow-hidden flex flex-col transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-white/95 backdrop-blur-sm text-orange-700 border border-slate-200 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span className="group-hover:underline">Request Specs</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner from Brochure: "From Installation to Maintenance — WE COVER IT ALL!" */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-center text-white">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest uppercase bg-white/20 px-3.5 py-1.5 rounded-full inline-block">
              Turnkey Accountability
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
              From Installation to Maintenance
            </h3>
            <div className="inline-block px-5 py-2 bg-slate-950 text-white rounded-xl font-black text-lg sm:text-xl tracking-wider uppercase shadow-lg">
              — WE COVER IT ALL! —
            </div>
            <p className="text-orange-100 text-sm sm:text-base max-w-xl mx-auto pt-2">
              Whether you need a new commercial installation, routine maintenance contract (AMC), or emergency repair, our team is equipped to handle every phase.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-white text-orange-600 hover:bg-orange-50 shadow-xl transition-all"
              >
                <span>Get a Customized Project Proposal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
