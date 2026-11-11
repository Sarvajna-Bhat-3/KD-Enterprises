"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Rajesh Parekh",
    role: "Secretary, Green Meadows Society",
    company: "Santacruz West, Mumbai",
    content:
      "KD Enterprises upgraded our complete 32-camera IP CCTV surveillance and completed terrace waterproofing before the monsoons. Mihir Gandhi and his team are exceptionally organized, transparent with billing, and dependable.",
  },
  {
    id: 2,
    name: "Sanjay Mehta",
    role: "Director of Operations",
    company: "Apex Logistics Hub, Bhiwandi",
    content:
      "We contracted KD Enterprises for our heavy structural steel mezzanine fabrication and complete workstation Cat6 network cabling. Top-notch workmanship, prompt communication, and zero delays.",
  },
  {
    id: 3,
    name: "Anjali Deshmukh",
    role: "Facility Head",
    company: "Innovate Tech, Andheri East",
    content:
      "Their biometric access control systems and server rack infrastructure deployment was seamless. Having one trusted partner for both IT networking and electrical cabling saved us immense time and vendor follow-up.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

const Avatar = ({ name, size = "md" }: { name: string; size?: "sm" | "md" }) => (
  <span
    aria-hidden="true"
    className={`mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-extrabold ${
      size === "md" ? "w-14 h-14 text-lg shadow-lg shadow-orange-500/25" : "w-11 h-11 text-sm opacity-70"
    }`}
  >
    {initials(name)}
  </span>
);

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const go = (i: number) => setCurrentIndex(((i % reviews.length) + reviews.length) % reviews.length);

  const active = reviews[currentIndex]!;
  const prevReview = reviews[(currentIndex - 1 + reviews.length) % reviews.length]!;
  const nextReview = reviews[(currentIndex + 1) % reviews.length]!;

  const sideCard =
    "hidden md:flex flex-col absolute w-[320px] lg:w-[350px] h-[300px] rounded-[32px] bg-white border border-slate-200 shadow-lg p-7 cursor-pointer z-0 hover:opacity-70 transition-opacity text-center";

  return (
    <section
      id="testimonials"
      className="w-full py-20 md:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
          Words of appreciation
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Housing societies, corporate offices and industrial sites across Mumbai trust KD Enterprises with their
          infrastructure.
        </p>

        <div className="relative mt-12 md:mt-20 mb-8 md:h-[360px] flex items-center justify-center select-none">
          <motion.button
            type="button"
            key={`prev-${prevReview.id}`}
            onClick={() => go(currentIndex - 1)}
            aria-label={`Previous review: ${prevReview.name}`}
            animate={{ rotate: -10, x: -230, y: 20, scale: 0.88, opacity: 0.45 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className={sideCard}
          >
            <Avatar name={prevReview.name} size="sm" />
            <span className="mt-3 text-sm font-bold text-slate-800">{prevReview.name}</span>
            <span className="text-xs text-slate-400">{prevReview.role}</span>
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.figure
              key={`active-${active.id}`}
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -12 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(currentIndex + 1);
                else if (info.offset.x > 60) go(currentIndex - 1);
              }}
              className="relative z-20 w-full max-w-[440px] rounded-[32px] bg-white border border-slate-200 shadow-[0_25px_60px_rgba(15,23,42,0.08)] p-7 sm:p-9 flex flex-col items-center text-center cursor-grab active:cursor-grabbing"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-orange-100" aria-hidden="true" />
              <Avatar name={active.name} />
              <figcaption className="mt-3.5">
                <span className="block text-lg font-bold text-slate-950">{active.name}</span>
                <span className="block text-sm text-slate-500 font-medium mt-0.5">
                  {active.role} • {active.company}
                </span>
              </figcaption>
              <div className="flex items-center justify-center gap-1 my-4" aria-label="Rated 5 out of 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                &ldquo;{active.content}&rdquo;
              </blockquote>
            </motion.figure>
          </AnimatePresence>

          <motion.button
            type="button"
            key={`next-${nextReview.id}`}
            onClick={() => go(currentIndex + 1)}
            aria-label={`Next review: ${nextReview.name}`}
            animate={{ rotate: 10, x: 230, y: 20, scale: 0.88, opacity: 0.45 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className={sideCard}
          >
            <Avatar name={nextReview.name} size="sm" />
            <span className="mt-3 text-sm font-bold text-slate-800">{nextReview.name}</span>
            <span className="text-xs text-slate-400">{nextReview.role}</span>
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(currentIndex - 1)}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5">
            {reviews.map((r, i) => (
              <button type="button" key={r.id} onClick={() => go(i)} aria-label={`Show review ${i + 1}`} className="p-1">
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-7 bg-orange-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(currentIndex + 1)}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
