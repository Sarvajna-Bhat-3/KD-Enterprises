"use client";

import React, { useState, useEffect } from "react";
import { companyInfo } from "@/data/companyData";
import { Logo } from "./Logo";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#solutions" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Projects", href: "#projects" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQ", href: "#faq" },
];

const trackedSections = ["home", ...navLinks.map((l) => l.href.slice(1)), "contact"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      let current = "home";
      for (const id of trackedSections) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - 140) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <motion.nav
        aria-label="Main"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`max-w-6xl mx-auto rounded-full border pl-3 pr-2 sm:pl-5 sm:pr-2.5 py-2 flex items-center justify-between gap-3 pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.10)]"
            : "bg-white/80 backdrop-blur-md border-slate-200/70 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
        }`}
      >
        <a href="#home" aria-label="KD Enterprises – back to top" className="shrink-0">
          <Logo compact />
        </a>

        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = activeSection === link.href.slice(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={active ? "true" : undefined}
                  className={`relative block px-3.5 py-2 text-sm font-semibold whitespace-nowrap rounded-full transition-colors ${
                    active ? "text-slate-950" : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            WhatsApp
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-slate-950 hover:bg-orange-600 rounded-full transition-colors whitespace-nowrap"
          >
            Get a Free Quote
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden max-w-md mx-auto mt-2.5 rounded-3xl bg-white border border-slate-200 shadow-2xl p-4 pointer-events-auto"
          >
            <ul className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "text-orange-700 bg-orange-50"
                        : "text-slate-700 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-slate-100 grid gap-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-full transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:+${companyInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-slate-800 bg-slate-100 rounded-full"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  Call
                </a>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-emerald-700 bg-emerald-50 rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
