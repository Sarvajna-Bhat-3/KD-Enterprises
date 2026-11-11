import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col selection:bg-orange-500 selection:text-white">
          <Navbar />
          <main className="w-full flex flex-col flex-1">
            <Hero />
            <About />
            <Partners />
            <Testimonials />
            <Services />
            <Products />
            <Projects />
            <WhyUs />
            <Faq />
            <Contact />
            <Footer />
          </main>
          <FloatingActions />
        </div>
      </SmoothScroll>
    </MotionConfig>
  );
}

