"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Parekh",
      role: "Secretary, Green Meadows Society",
      company: "Santacruz West, Mumbai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: "5.0",
      content:
        "KD Enterprises upgraded our complete 32-camera IP CCTV surveillance and completed terrace waterproofing before the monsoons. Mihir Gandhi and his team are exceptionally organized, transparent with billing, and dependable.",
    },
    {
      id: 2,
      name: "Sanjay Mehta",
      role: "Director of Operations",
      company: "Apex Logistics Hub, Bhiwandi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: "5.0",
      content:
        "We contracted KD Enterprises for our heavy structural steel mezzanine fabrication and complete workstation Cat6 network cabling. Top-notch workmanship, prompt communication, and zero delays.",
    },
    {
      id: 3,
      name: "Anjali Deshmukh",
      role: "Facility Head",
      company: "Innovate Tech, Andheri East",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: "5.0",
      content:
        "Their biometric access control systems and server rack infrastructure deployment was seamless. Having one trusted partner for both IT networking and electrical cabling saved us immense time and vendor follow-up.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? reviews.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === reviews.length - 1 ? 0 : c + 1));
  };

  const activeReview = reviews[currentIndex];
  const prevReview = reviews[(currentIndex - 1 + reviews.length) % reviews.length];
  const nextReview = reviews[(currentIndex + 1) % reviews.length];

  return (
    <section id="why-us" className="w-full py-28 md:py-36 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
          Words of Appreciation
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Thousands of properties, corporate offices, and housing societies trust KD Enterprises to handle their infrastructure.
        </p>

        {/* 3D Tilted Card Stage */}
        <div className="relative mt-20 mb-10 h-[400px] sm:h-[380px] flex items-center justify-center select-none perspective-[1200px]">
          {/* Left Tilted Card */}
          <motion.div
            key={`prev-${prevReview.id}`}
            onClick={prev}
            animate={{
              rotate: -12,
              x: -220,
              y: 20,
              scale: 0.88,
              opacity: 0.45,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="hidden md:block absolute w-[320px] lg:w-[350px] h-[330px] rounded-[32px] bg-white border border-slate-200/90 shadow-lg p-7 text-left cursor-pointer z-0 hover:opacity-60 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-3 opacity-60">
              <Image
                src={prevReview.avatar}
                alt={prevReview.name}
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-slate-800">{prevReview.name}</h4>
              <p className="text-xs text-slate-400">{prevReview.role}</p>
            </div>
          </motion.div>

          {/* Center Active Flat Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`active-${activeReview.id}`}
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -15 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative z-20 w-full max-w-[360px] sm:max-w-[420px] min-h-[340px] rounded-[32px] bg-white border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-8 flex flex-col justify-between items-center text-center"
            >
              <div>
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3.5 border-2 border-orange-200 shadow-md">
                  <Image
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name & Role */}
                <h4 className="text-lg font-bold text-slate-950">
                  {activeReview.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {activeReview.role} • {activeReview.company}
                </p>

                {/* Stars Rating */}
                <div className="flex items-center justify-center gap-1 my-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs sm:text-sm font-bold text-slate-700 ml-1.5">
                    {activeReview.rating}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{activeReview.content}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Tilted Card */}
          <motion.div
            key={`next-${nextReview.id}`}
            onClick={next}
            animate={{
              rotate: 12,
              x: 220,
              y: 20,
              scale: 0.88,
              opacity: 0.45,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="hidden md:block absolute w-[320px] lg:w-[350px] h-[330px] rounded-[32px] bg-white border border-slate-200/90 shadow-lg p-7 text-left cursor-pointer z-0 hover:opacity-60 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-3 opacity-60">
              <Image
                src={nextReview.avatar}
                alt={nextReview.name}
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-slate-800">{nextReview.name}</h4>
              <p className="text-xs text-slate-400">{nextReview.role}</p>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Prev / Next Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center shadow-sm hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center shadow-sm hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
