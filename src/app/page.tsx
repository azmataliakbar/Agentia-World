"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import NeuralCapabilities from "./components/neural-capabilities";
import AISolutions from "./components/ai-solutions";
import PoweredByAI from "./components/powered-by-ai";
import PricingSection from "./components/pricing-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";

function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 56; // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Handle initial load with hash in URL
    handleScroll();

    // Re-run the effect when the URL changes
    searchParams.toString();

    // Listen for hash changes
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [searchParams]);

  return null; // This component is only handling side effects
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Navbar />
      <HeroSection />
      <section id="neural-capabilities" className="scroll-mt-14">
        <NeuralCapabilities />
      </section>
      <section id="ai-solutions" className="scroll-mt-14">
        <AISolutions />
      </section>
      <section id="powered-by-ai" className="scroll-mt-14">
        <PoweredByAI />
      </section>
      <section id="pricing-section" className="scroll-mt-14">
        <PricingSection />
      </section>
      <section id="contact-section" className="scroll-mt-14">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}



