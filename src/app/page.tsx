import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ECEEF1] p-0 sm:p-4 lg:p-6 flex flex-col items-center">
      <Navbar />

      {/* Main Dribbble Canvas Card Container */}
      <main className="w-full max-w-[1400px] bg-white sm:rounded-[36px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.07)] border border-slate-200/90 flex flex-col">
        <Hero />
        <About />
        <Partners />
        <Services />
        <Products />
        <Projects />
        <WhyUs />
        <Contact />
        <Footer />
      </main>

      <FloatingActions />
    </div>
  );
}
