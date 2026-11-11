"use client";

import React from "react";
import Image from "next/image";
import { productsAndSolutions } from "@/data/companyData";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <section id="products" className="w-full py-28 md:py-36 bg-[#f8fafc] text-slate-900 relative border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Certified Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            Right solutions. <br className="hidden sm:inline" />
            Better performance.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Engineered hardware, certified high-speed cabling, heavy fabrication steel, and high-performance civil restoration products.
          </p>
        </div>

        {/* Dribbble Style Bento Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productsAndSolutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group bg-white rounded-[30px] border border-slate-200/90 hover:border-orange-400 overflow-hidden flex flex-col transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Product Media */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span className="group-hover:underline">Inquire Specs</span>
                  <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Hero Card (WE COVER IT ALL!) */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 rounded-[36px] p-8 sm:p-14 shadow-[0_25px_60px_rgba(234,88,12,0.25)] relative overflow-hidden text-center text-white">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest uppercase bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full inline-block">
              Turnkey Accountability
            </span>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight">
              From Installation to Maintenance
            </h3>
            <div className="inline-block px-6 py-2.5 bg-slate-950 text-white rounded-full font-black text-lg sm:text-xl tracking-wider uppercase shadow-xl">
              — WE COVER IT ALL! —
            </div>
            <p className="text-orange-100 text-base sm:text-lg leading-relaxed pt-1 max-w-2xl mx-auto">
              Whether you need a new commercial installation, routine maintenance contract (AMC), or emergency repair, our team is equipped to handle every phase.
            </p>
            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm sm:text-base bg-white text-slate-950 hover:bg-slate-100 shadow-xl transition-all transform hover:scale-105 active:scale-95"
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
