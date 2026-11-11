"use client";

import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyData";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative bg-white text-slate-800 pt-24 pb-8 overflow-hidden border-t border-slate-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        {/* Top Minimalist 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-20">
          {/* Col 1: Platform Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-600/30">
                KD
              </div>
              <span className="text-2xl font-black text-slate-950 tracking-tight">
                KD Enterprises
              </span>
            </div>

            <p className="text-base text-slate-600 max-w-md leading-relaxed">
              KD Enterprises is the integrated contracting platform that delivers safer spaces and stronger infrastructure across security, networking, civil works, and fabrication—all in one place.
            </p>

            <div className="pt-2 text-xs text-orange-600 font-bold uppercase tracking-wider">
              {companyInfo.subTagline}
            </div>

            <p className="text-xs text-slate-500 font-medium">
              Proprietor: <strong>{companyInfo.proprietor}</strong> • Santacruz East, Mumbai
            </p>
          </div>

          {/* Col 2: Services / Products */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <li>
                <Link href="#services" className="hover:text-orange-600 transition-colors">
                  CCTV & Surveillance
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-600 transition-colors">
                  Access Control
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-600 transition-colors">
                  IT & Structured LAN
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-600 transition-colors">
                  Civil Restoration
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-600 transition-colors">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-600 transition-colors">
                  Steel Fabrication
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <li>
                <Link href="#solutions" className="hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-orange-600 transition-colors">
                  Brand Partners
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-orange-600 transition-colors">
                  Our Work & Projects
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-orange-600 transition-colors">
                  Why KD Enterprises
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-600 transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect Squircles */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest">
              Direct Connect
            </h4>
            <div className="flex items-center gap-3 pt-1">
              {/* WhatsApp Squircle */}
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Phone Squircle */}
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="Call Office"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Mail Squircle */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Office Map Squircle */}
              <a
                href="#contact"
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                title="Santacruz Office"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 pt-2 leading-relaxed">
              Office No. 2, Sai Prasad Chawl, Prabhat Colony, Santacruz East, Mumbai – 400055
            </p>
          </div>
        </div>

        {/* Micro-bar with Back to Top */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>{companyInfo.name}</strong>. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-orange-600" />
          </button>
        </div>
      </div>

      {/* HUGE BLURRED GLOW WATERMARK TEXT ACROSS FULL EDGE-TO-EDGE SCREEN WIDTH */}
      <div className="mt-8 select-none pointer-events-none overflow-hidden w-full flex justify-center items-center">
        <span className="text-[14vw] font-black text-orange-500/12 blur-[3px] tracking-tighter leading-none whitespace-nowrap uppercase w-full text-center">
          KD Enterprises
        </span>
      </div>
    </footer>
  );
};
