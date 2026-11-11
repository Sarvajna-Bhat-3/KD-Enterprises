"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyData";
import { Logo } from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  Shield,
} from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Partners", href: "#partners" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar for Contact & Trust */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>{companyInfo.email}</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span>Santacruz East, Mumbai</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Proprietor: <strong className="text-slate-200">{companyInfo.proprietor}</strong>
            </span>
            <span className="h-3 w-[1px] bg-slate-700"></span>
            <span className="text-orange-400 font-medium flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-orange-400" />
              Govt & Commercial Certified Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800"
            : "bg-slate-900 py-4 border-b border-slate-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center">
              <Logo variant="dark" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-orange-400 hover:bg-slate-800/60 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 rounded-lg transition-all"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-400 hover:bg-slate-800 rounded-lg"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-orange-400 hover:bg-slate-800 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-slate-200 bg-slate-800 rounded-lg font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Call {companyInfo.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-white bg-orange-600 hover:bg-orange-500 rounded-lg font-semibold text-sm shadow-md"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
