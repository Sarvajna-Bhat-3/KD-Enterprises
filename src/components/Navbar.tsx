"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyData";
import { Logo } from "./Logo";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Product", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "solutions", "services", "partners", "projects", "why-us", "contact"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.07)] px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all"
      >
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-600/30 group-hover:scale-105 transition-transform">
            KD
          </div>
          <span className="font-extrabold text-lg text-slate-950 tracking-tight">
            KD<span className="text-orange-600 font-semibold text-xs ml-1 tracking-widest uppercase">Enterprises</span>
          </span>
        </Link>

        {/* Center Minimalist Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="activePillIndicator"
                  className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp / Call Link */}
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>WhatsApp</span>
          </a>

          {/* Dribbble Style Pill Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-full shadow-sm hover:shadow transition-all transform hover:scale-105"
          >
            <span>Request Quote</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-slate-700 hover:text-slate-950 rounded-full"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-sm mx-auto mt-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl p-5 space-y-3 pointer-events-auto"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Contact & Office
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 rounded-full"
              >
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>Call {companyInfo.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-orange-600 rounded-full shadow-md"
              >
                <span>Book Site Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
