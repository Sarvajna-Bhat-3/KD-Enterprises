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
      <div className="min-h-screen bg-[#ECEEF1] p-0 sm:p-4 lg:p-6 flex flex-col items-center">
        <Navbar />

        {/* Main Dribbble Canvas Card Container with Rounded Outer Frame */}
        <main className="w-full max-w-[1400px] bg-white sm:rounded-[40px] overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.06)] border border-slate-200/90 flex flex-col">
          {/* 1. Hero with Connected Node Tree (frame_004.jpg) */}
          <Hero />

          {/* 2. Symmetrical Floating Photo Mosaic (frame_008.jpg) */}
          <About />

          {/* 3. Interactive Brand Arc Carousel (frame_011.jpg) */}
          <Partners />

          {/* 4. Words of Appreciation 3D Tilted Card Carousel (frame_026.jpg) */}
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

          {/* 10. Minimalist Footer with Huge Blurred Watermark (frame_015.jpg) */}
          <Footer />
        </main>

        <FloatingActions />
      </div>
    </SmoothScroll>
  );
}
