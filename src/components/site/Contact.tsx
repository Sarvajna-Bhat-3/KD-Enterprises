"use client";

import React, { useState } from "react";
import { companyInfo, mapsLink, serviceAreas, whatsappWith } from "@/data/companyData";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  Navigation,
  AlertCircle,
} from "lucide-react";

const serviceOptions = [
  "CCTV & Surveillance Systems",
  "Access Control & Biometrics",
  "Networking & Structured Cabling",
  "Audio Video Systems",
  "Civil Repair & Maintenance",
  "RCC Structural Repair & Retrofitting",
  "Waterproofing Solutions",
  "Painting Works (Interior & Exterior)",
  "MS / SS Structural Fabrication",
  "Complete Annual Maintenance Contract (AMC)",
  "Other Multi-Trade Services",
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string | undefined>>;

/** Indian mobile/landline: 10 digits, optionally prefixed with +91 / 0. */
export const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^\d{10}$/.test(digits);
};

const validate = (d: FormData): Errors => {
  const e: Errors = {};
  if (d.name.trim().length < 2) e.name = "Please enter your name.";
  if (!isValidPhone(d.phone)) e.phone = "Enter a valid 10-digit phone number.";
  if (d.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = "Enter a valid email address.";
  return e;
};

const inputBase =
  "w-full px-4 sm:px-5 py-3.5 rounded-2xl bg-slate-50 border text-slate-900 placeholder-slate-400 text-[15px] focus:outline-hidden focus:bg-white focus:ring-2 transition-all";
const inputOk = "border-slate-300 focus:border-orange-500 focus:ring-orange-500/20";
const inputErr = "border-rose-400 bg-rose-50/40 focus:border-rose-500 focus:ring-rose-500/20";

const Field = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) => (
  <div>
    <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-rose-600">
        <AlertCircle className="w-3.5 h-3.5" />
        {error}
      </p>
    )}
  </div>
);

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: serviceOptions[0]!,
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((d) => ({ ...d, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(formData);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof FormData)[]).find((k) => found[k]);
    if (firstInvalid) {
      const first = firstInvalid;
      const el = document.getElementById(`contact-${first}`);
      el?.focus({ preventScroll: true });
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    const lines = [
      "*New Inquiry from Website*",
      `*Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      formData.email.trim() && `*Email:* ${formData.email.trim()}`,
      `*Service:* ${formData.service}`,
      `*Location:* ${formData.location.trim() || "Mumbai"}`,
      formData.message.trim() && `*Requirements:* ${formData.message.trim()}`,
    ].filter(Boolean);

    window.open(whatsappWith(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const fieldProps = (key: keyof FormData) => ({
    id: `contact-${key}`,
    name: key,
    value: formData[key],
    onChange: update(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
    className: `${inputBase} ${errors[key] ? inputErr : inputOk}`,
  });

  const infoRow = "flex items-start gap-4";
  const infoIcon =
    "w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0";

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-slate-50 text-slate-900 relative border-b border-slate-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Let&apos;s build something great together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Reach out today for a free site visit, consultation, or project estimate.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Form first on phones — it's the main action */}
          <div className="lg:col-span-7 lg:order-2">
            <div className="bg-white border border-slate-200 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/60">
              {submitted ? (
                <div className="py-6 sm:py-10 text-center" role="status">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Thank you, {formData.name.trim().split(" ")[0]}!
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                    WhatsApp has opened with your details — just tap <strong>Send</strong> there. If it didn’t open,
                    call us on{" "}
                    <a href={`tel:+${companyInfo.phoneRaw}`} className="font-bold text-orange-600 hover:underline">
                      {companyInfo.phone}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-7 py-3 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-2">
                    Request a free quote
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-8">
                    Share a few details and {companyInfo.proprietor} or a senior technician will get back to you
                    promptly.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field id="contact-name" label="Full name *" error={errors.name}>
                        <input {...fieldProps("name")} type="text" autoComplete="name" placeholder="e.g. Ramesh Shah" />
                      </Field>
                      <Field id="contact-phone" label="Phone number *" error={errors.phone}>
                        <input
                          {...fieldProps("phone")}
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="e.g. 98200 12345"
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field id="contact-email" label="Email (optional)" error={errors.email}>
                        <input
                          {...fieldProps("email")}
                          type="email"
                          autoComplete="email"
                          placeholder="e.g. you@company.com"
                        />
                      </Field>
                      <Field id="contact-location" label="Site / project location">
                        <input {...fieldProps("location")} type="text" placeholder="e.g. Bandra, Andheri, Thane" />
                      </Field>
                    </div>

                    <Field id="contact-service" label="Service needed *">
                      <select {...fieldProps("service")}>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field id="contact-message" label="Requirements">
                      <textarea
                        {...fieldProps("message")}
                        rows={4}
                        placeholder="Approximate project size, site type (commercial / residential), timeline…"
                      />
                    </Field>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 hover:from-orange-600 hover:to-rose-600 shadow-xl shadow-orange-500/25 transition-all active:scale-[0.99] cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      Your details are only used to discuss your project. Nothing is stored on this website.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5 lg:order-1 space-y-6">
            <div className="bg-white border border-slate-200 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-7">Contact information</h3>

              <div className="space-y-6">
                <div className={infoRow}>
                  <div className={infoIcon}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">Office address</strong>
                    <address className="mt-1 not-italic text-sm text-slate-600 leading-relaxed">
                      {companyInfo.address.line1},<br />
                      {companyInfo.address.line2},<br />
                      {companyInfo.address.city} – {companyInfo.address.pincode}, {companyInfo.address.state}
                    </address>
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:underline underline-offset-4"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Get directions
                    </a>
                  </div>
                </div>

                <div className={infoRow}>
                  <div className={infoIcon}>
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">Phone / WhatsApp</strong>
                    <a
                      href={`tel:+${companyInfo.phoneRaw}`}
                      className="mt-1 text-lg font-bold text-orange-600 hover:underline underline-offset-4 block"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className={infoRow}>
                  <div className={infoIcon}>
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <strong className="text-sm font-bold text-slate-900 block">Email</strong>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="mt-1 text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors block break-all"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className={infoRow}>
                  <div className={infoIcon}>
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-slate-900 block">Working hours</strong>
                    <p className="mt-1 text-sm text-slate-600">
                      Monday – Saturday: 9:00 AM – 8:00 PM
                      <br />
                      Sunday: by appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-slate-200">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start a WhatsApp chat</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[28px] p-6 sm:p-7">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Areas we serve</span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <li
                    key={a}
                    className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
