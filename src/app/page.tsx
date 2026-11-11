import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Partners } from "@/components/Partners";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Partners />
      <Projects />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
