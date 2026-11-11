"use client";

import React, { useState, useEffect } from "react";
import { companyInfo } from "@/data/companyData";
import { MessageCircle, Phone, X } from "lucide-react";

export const FloatingActions = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Tooltip banner */}
      {showTooltip && (
        <div className="relative bg-slate-900 border border-slate-700 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2 max-w-[220px] animate-bounce">
          <span>Need quick estimation? Chat with us on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          title="Direct Phone Call"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={companyInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-transform hover:scale-110 active:scale-95 relative"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
          </span>
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

