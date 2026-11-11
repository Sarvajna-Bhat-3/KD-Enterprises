"use client";

import React from "react";
import { companyInfo, mapsLink } from "@/data/companyData";
import { Logo } from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full relative bg-white text-slate-800 pt-16 sm:pt-24 pb-8 overflow-hidden border-t border-slate-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16 relative z-10">
        {/* Top Minimalist 4-Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-14 pb-14 sm:pb-20">
          {/* Col 1: Platform Statement */}
          <div className="col-span-2 lg:col-span-5 space-y-4">
            <Logo />

            <p className="text-base text-slate-600 max-w-md leading-relaxed">
              KD Enterprises is an integrated contracting company delivering safer spaces and stronger infrastructure across security, networking, civil works and fabrication — all under one roof.
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
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  CCTV & Surveillance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Access Control
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  IT & Structured LAN
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Civil Restoration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Waterproofing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600 transition-colors">
                  Steel Fabrication
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <a href="#solutions" className="hover:text-orange-600 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-orange-600 transition-colors">
                  Brand partners
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-600 transition-colors">
                  Our Work & Projects
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-orange-600 transition-colors">
                  Why KD Enterprises
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-600 transition-colors">
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect Squircles */}
          <div className="col-span-2 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest">
              Direct Connect
            </h4>
            <div className="flex items-center gap-3 pt-1">
              {/* WhatsApp Squircle */}
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                title="WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Phone Squircle */}
              <a
                href={`tel:+${companyInfo.phoneRaw}`}
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                title="Call"
                aria-label={`Call ${companyInfo.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Mail Squircle */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                title="Email"
                aria-label={`Email ${companyInfo.email}`}
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Office Map Squircle */}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                title="Directions"
                aria-label="Get directions to our Santacruz office"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 pt-2 leading-relaxed">
              {companyInfo.address.full}
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              <a href={`tel:+${companyInfo.phoneRaw}`} className="font-semibold text-slate-700 hover:text-orange-600">
                {companyInfo.phone}
              </a>
              <br />
              Mon – Sat, 9:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* Micro-bar with Back to Top */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>{companyInfo.name}</strong>. All rights reserved.
          </div>
          <a
            href="#home"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-orange-600" />
          </a>
        </div>
      </div>

      {/* HUGE BLURRED GLOW WATERMARK TEXT ACROSS FULL EDGE-TO-EDGE SCREEN WIDTH */}
      <div aria-hidden="true" className="mt-6 select-none pointer-events-none overflow-hidden w-full flex justify-center items-center">
        <span className="text-[11.5vw] font-extrabold text-orange-500/12 blur-[2px] tracking-tight leading-[0.9] whitespace-nowrap uppercase text-center">
          KD Enterprises
        </span>
      </div>
    </footer>
  );
};
