"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AppDemo from "@/components/AppDemo";
import Cta from "@/components/Cta";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Page() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionsRef.current?.querySelectorAll("[data-animate]");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="aurora" />
      <div className="pixel-grid" />
      <Nav />
      <div ref={sectionsRef}>
        <Hero />
        <AppDemo />
        <Features />
        <HowItWorks />
        <Pricing />
        <Cta />
      </div>
      <Footer />
    </>
  );
}
