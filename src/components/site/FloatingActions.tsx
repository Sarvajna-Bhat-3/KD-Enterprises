"use client";

import React, { useState, useEffect } from "react";
import { companyInfo } from "@/data/companyData";
import { MessageCircle, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const DISMISS_KEY = "kd-wa-tip-dismissed";

export const FloatingActions = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  // Stay hidden over the hero so the main buttons aren't covered.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    // Appear once after the visitor has had a moment to look around, then get out of the way.
    const show = setTimeout(() => setShowTooltip(true), 6000);
    const hide = setTimeout(() => {
      setShowTooltip(false);
      sessionStorage.setItem(DISMISS_KEY, "1");
    }, 16000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  const dismiss = () => {
    setShowTooltip(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 select-none transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={visible ? undefined : true}
    >
      <AnimatePresence>
        {showTooltip && visible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            className="hidden sm:flex relative bg-slate-900 text-white text-sm pl-4 pr-2 py-2.5 rounded-2xl shadow-2xl items-center gap-2 max-w-[260px]"
            role="status"
          >
            <span>Need a quick estimate? Chat with us on WhatsApp.</span>
            <button
              type="button"
              onClick={dismiss}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <a
          href={`tel:+${companyInfo.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-orange-400 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          title="Call us"
          aria-label={`Call ${companyInfo.phone}`}
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={companyInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={dismiss}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-transform hover:scale-110 active:scale-95 relative"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
          </span>
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};
