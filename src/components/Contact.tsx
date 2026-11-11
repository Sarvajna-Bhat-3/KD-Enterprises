"use client";

import React, { useState } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/companyData";
import { MapPin, Phone, Mail, MessageCircle, Send, CircleCheck as CheckCircle2, Clock, Sparkles } from "lucide-react";

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

    const text = encodeURIComponent(
      `*New Inquiry from Website*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Location:* ${formData.location || "Mumbai"}\n*Requirements:* ${formData.message}`
    );
    const directUrl = `https://wa.me/917208844793?text=${text}`;

    window.open(directUrl, "_blank");
  };

  return (
    <section id="contact" className="w-full py-28 md:py-36 bg-white text-slate-900 relative border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            Let&apos;s build something <br className="hidden sm:inline" />
            great together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Reach out today for a free site visit, consultation, or project estimation.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info & Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-[36px] p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-7">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Office Address
                    </strong>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {companyInfo.address.line1},<br />
                      {companyInfo.address.line2},<br />
                      {companyInfo.address.city} – {companyInfo.address.pincode}, {companyInfo.address.state}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Phone / Mobile
                    </strong>
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="mt-1 text-lg font-bold text-orange-600 hover:underline block"
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
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Mail className="w-6 h-6" />
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
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">
                      Working Hours
                    </strong>
                    <p className="mt-1 text-sm text-slate-600">
                      Monday – Saturday: 9:00 AM to 8:00 PM<br />
                      Sunday: By Project Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="mt-9 pt-7 border-t border-slate-200">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all transform hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Visiting Card View */}
            <div className="bg-white border border-slate-200 rounded-[28px] p-5 flex items-center gap-4 shadow-sm">
              <div className="relative w-28 h-20 rounded-2xl overflow-hidden border border-slate-300 shrink-0 shadow-sm">
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
            <div className="bg-white border-2 border-slate-200/90 rounded-[36px] p-8 sm:p-12 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2">
                Request a Free Quote / Consultation
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Fill out the details below and Mr. Mihir Gandhi or a senior technician will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 sm:p-12 rounded-[28px] bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.name || "Valued Client"}!
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been received. We have opened WhatsApp with your details so you can also message us instantly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-7 py-3 rounded-full text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Ramesh Shah"
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 98200 12345"
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. contact@client.com"
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
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
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Service Selection */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
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
                      className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-xl shadow-orange-500/25 transition-all transform hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
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
