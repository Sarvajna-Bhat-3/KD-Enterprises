"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyData";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "About", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "solutions", "services", "partners", "projects", "why-us", "testimonials", "contact"];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto transition-all"
        >
          {/* Brand Logo */}
          <Link href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 shrink-0 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-600/30 group-hover:scale-105 transition-transform">
              KD
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline">
              <span className="font-extrabold text-base sm:text-lg text-slate-950 tracking-tight leading-none">
                KD<span className="text-orange-600 font-bold text-xs ml-1 tracking-wider uppercase">Enterprises</span>
              </span>
            </div>
          </Link>

          {/* Center Minimalist Nav Links (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-3 lg:px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activePillIndicator"
                    className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right CTA Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Quick WhatsApp Link (tablet/desktop) */}
            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            {/* Quote Pill Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-full shadow-sm hover:shadow transition-all transform hover:scale-105 active:scale-95"
            >
              <span>Get Quote</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Drawer Dropdown Backdrop & Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Floating Drawer Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 max-w-sm mx-auto z-50 md:hidden rounded-3xl bg-white/98 backdrop-blur-2xl border border-slate-200/90 shadow-2xl p-5 space-y-4 pointer-events-auto overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    KD
                  </div>
                  <span className="font-extrabold text-sm text-slate-900">
                    Navigation Menu
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100 transition-colors flex items-center justify-between"
                >
                  <span>Contact & Office Address</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-600" />
                  <span>Call {companyInfo.phone}</span>
                </a>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-md shadow-emerald-600/30 transition-all active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-full shadow-md transition-all active:scale-95"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                  <span>Book Free Consultation</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
