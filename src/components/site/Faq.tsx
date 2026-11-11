"use client";

import { HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, companyInfo } from "@/data/companyData";

export const Faq = () => (
  <section id="faq" className="w-full py-20 md:py-32 bg-white text-slate-900 border-b border-slate-100">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5 space-y-4 text-center lg:text-left lg:sticky lg:top-28 self-start">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
          <span>FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
          Questions clients often ask
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Can’t find what you’re looking for? Message us and we’ll reply the same day.
        </p>
        <a
          href={companyInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Ask on WhatsApp
        </a>
      </div>

      <Accordion type="single" collapsible defaultValue="faq-0" className="lg:col-span-7 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.question}
            value={`faq-${i}`}
            className="rounded-2xl border border-slate-200 bg-slate-50/60 px-5 sm:px-6 data-[state=open]:bg-white data-[state=open]:border-orange-300 data-[state=open]:shadow-md transition-all"
          >
            <AccordionTrigger className="text-left text-[15px] sm:text-base font-bold text-slate-900 hover:no-underline py-5">
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-[15px] text-slate-600 leading-relaxed pb-5">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
