"use client";

import React from "react";
import Link from "next/link";
import { companyInfo } from "@/data/companyData";
import { Logo } from "./Logo";
import {
  MapPin,
  Phone,
  Mail,
  Shield,
  ArrowUp,
  Heart,
  ExternalLink,
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start">
              <Logo variant="dark" showTagline />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              {companyInfo.about.description}
            </p>

            <div className="pt-2 text-xs text-orange-400 font-bold uppercase tracking-wider">
              {companyInfo.subTagline}
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">
                Proprietor: {companyInfo.proprietor}
              </span>
              <span>•</span>
              <span>Mumbai, MH</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#home" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-orange-400 transition-colors">
                  Solutions & Products
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-orange-400 transition-colors">
                  Technology Partners
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-orange-400 transition-colors">
                  Our Work & Projects
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-orange-400 transition-colors">
                  Why KD Enterprises
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Verticals */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Service Verticals
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>CCTV & Surveillance</li>
              <li>Access Control Systems</li>
              <li>Enterprise Networking & LAN</li>
              <li>Structured & Electrical Cabling</li>
              <li>Civil Repairs & Maintenance</li>
              <li>RCC Structural Works</li>
              <li>Terrace & Basement Waterproofing</li>
              <li>Interior & Exterior Painting</li>
              <li>MS / SS Steel Fabrication</li>
              <li>Industrial Frames & Trusses</li>
            </ul>
          </div>

          {/* Col 5: Direct Contact Info */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Office No. 2, Sai Prasad Chawl, Prabhat Colony, Santacruz East, Mumbai – 400055
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="font-bold text-orange-400 hover:underline"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-orange-400 transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 rounded-lg hover:bg-emerald-900 transition-all"
              >
                <span>WhatsApp Instant Inquiry</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>{companyInfo.name}</strong>. All rights reserved. Managed by Proprietor <strong>{companyInfo.proprietor}</strong>.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
