import React from "react";
import Hero from "@/components/home/Hero";
import TrustHighlights from "@/components/home/TrustHighlights";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import CenterGallery from "@/components/home/CenterGallery";
import Testimonials from "@/components/home/Testimonials";
import TeamPreview from "@/components/home/TeamPreview";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust / Highlights */}
      <TrustHighlights />

      {/* 3. Services */}
      <Services />

      {/* 4. About Be Smile */}
      <About />

      {/* 5. Why Choose Be Smile */}
      <WhyChooseUs />

      {/* 6. Statistics */}
      <Stats />

      {/* 7. Our Center / Gallery */}
      <CenterGallery />

      {/* 8. Parent Testimonials */}
      <Testimonials />

      {/* 9. Our Team */}
      <TeamPreview />

      {/* 10. Final CTA */}
      <CTA />
    </>
  );
}
