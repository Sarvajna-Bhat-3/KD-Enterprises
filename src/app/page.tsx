import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col selection:bg-orange-500 selection:text-white">
        <Navbar />

        {/* Edge-to-Edge Full Screen Width Main Layout */}
        <main className="w-full flex flex-col flex-1">
          {/* 1. Hero with Connected Node Tree */}
          <Hero />

          {/* 2. Symmetrical Floating Photo Mosaic */}
          <About />

          {/* 3. Interactive Brand Arc Carousel */}
          <Partners />

          {/* 4. Words of Appreciation 3D Tilted Card Carousel */}
          <Testimonials />

          {/* 5. Core Capabilities & Services */}
          <Services />

          {/* 6. Products & Solutions Bento Grid */}
          <Products />

          {/* 7. Work & Projects Portfolio */}
          <Projects />

          {/* 8. Why KD Enterprises & 8 Pillars */}
          <WhyUs />

          {/* 9. Interactive Consultation & WhatsApp Lead Generation */}
          <Contact />

          {/* 10. Minimalist Footer with Full-Width Blurred Watermark */}
          <Footer />
        </main>

        <FloatingActions />
      </div>
    </SmoothScroll>
  );
}
