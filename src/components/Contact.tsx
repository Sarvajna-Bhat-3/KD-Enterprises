"use client";

import React, { useState } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/companyData";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "CCTV & Security Systems",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Also craft an optional direct WhatsApp link with user query
    const text = encodeURIComponent(
      `*New Inquiry from Website*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Location:* ${formData.location || "Mumbai"}\n*Requirements:* ${formData.message}`
    );
    const directUrl = `https://wa.me/917208844793?text=${text}`;

    // Open WhatsApp
    window.open(directUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold tracking-widest uppercase">
            <span>08</span>
            <span>•</span>
            <span>CONTACT US</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="text-orange-600">Great Together</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Reach out today for a free site visit, consultation, or project estimation.
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & WhatsApp QR */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span>Get in Touch for Your Next Project</span>
              </h3>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Office Address
                    </strong>
                    <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                      {companyInfo.address.line1},<br />
                      {companyInfo.address.line2},<br />
                      {companyInfo.address.city} – {companyInfo.address.pincode}, {companyInfo.address.state}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Phone / Mobile
                    </strong>
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="mt-1 text-base font-bold text-orange-600 hover:underline block"
                    >
                      {companyInfo.phone}
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5 font-medium">
                      (Call / WhatsApp Available)
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Official Email
                    </strong>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="mt-1 text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors block break-all"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Working Hours
                    </strong>
                    <p className="mt-1 text-sm text-slate-700">
                      Monday – Saturday: 9:00 AM to 8:00 PM<br />
                      Sunday: By Project Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Visiting Card View */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="relative w-28 h-18 rounded-lg overflow-hidden border border-slate-300 shrink-0 shadow-sm">
                <Image
                  src="/images/kd-card-back.jpg"
                  alt="KD Enterprises Services Card"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block">
                  Visiting Card Back
                </span>
                <p className="text-xs text-slate-600 mt-1 leading-snug font-medium">
                  CCTV • Access Control • Audio Video • LAN Networking • Civil • Waterproofing • RCC
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Estimation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-950 mb-2">
                Request a Free Quote / Consultation
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Fill out the details below and Mr. Mihir Gandhi or a senior technician will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Thank You, {formData.name || "Valued Client"}!
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been received. We have opened WhatsApp with your details so you can also message us instantly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Ramesh Shah"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 98200 12345"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. contact@client.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Site / Project Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="e.g. Bandra, Andheri, Navi Mumbai"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    >
                      <option value="CCTV & Surveillance Systems">
                        CCTV & Surveillance Systems
                      </option>
                      <option value="Access Control & Biometrics">
                        Access Control & Biometrics
                      </option>
                      <option value="Networking & Structured Cabling">
                        Networking & Structured Cabling
                      </option>
                      <option value="Civil Repair & Maintenance">
                        Civil Repair & Maintenance
                      </option>
                      <option value="RCC Structural Repair & Retrofitting">
                        RCC Structural Repair & Retrofitting
                      </option>
                      <option value="Waterproofing Solutions">
                        Waterproofing Solutions
                      </option>
                      <option value="Painting Works (Interior & Exterior)">
                        Painting Works (Interior & Exterior)
                      </option>
                      <option value="MS / SS Structural Fabrication">
                        MS / SS Structural Fabrication
                      </option>
                      <option value="Complete Annual Maintenance Contract (AMC)">
                        Complete Annual Maintenance Contract (AMC)
                      </option>
                      <option value="Other Multi-Trade Services">
                        Other Multi-Trade Services
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Brief Description of Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please mention your approximate project size, site type (commercial/residential), or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base text-white bg-orange-600 hover:bg-orange-500 shadow-xl shadow-orange-600/30 transition-all cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit & Connect on WhatsApp</span>
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    We respect your privacy. Your information is strictly used to discuss your project requirements.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
