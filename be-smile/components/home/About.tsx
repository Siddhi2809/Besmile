import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* 1. Large Background Image with Soft Translucent Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/about/about-therapy.jpg"
          alt="Be Smile Pediatric Therapy and Child Development"
          fill
          unoptimized
          priority={false}
          className="object-cover object-center w-full h-full opacity-30 scale-105 filter blur-[0.5px]"
        />
        {/* Seamless Soft Translucent Layer merging from Services to Why Choose Us */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-[#F7F4FD]" />

        {/* Ambient Brand Color Glow Blooms */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#10B9C3]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#7A43D8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFAA18]/8 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Small Decorative Elements inspired by BE SMILE logo */}
      {/* Top Left: Turquoise Leaf */}
      <div className="hidden lg:block absolute top-8 left-8 xl:left-14 pointer-events-none opacity-40 animate-float">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M20 4C20 4 12 5 8 10C4 15 4 20 4 20C4 20 9 20 14 16C19 12 20 4 20 4Z" fill="#10B9C3" />
        </svg>
      </div>

      {/* Top Right: Orange Star */}
      <div className="hidden lg:block absolute top-8 right-10 xl:right-16 pointer-events-none opacity-40 animate-float-reverse">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFAA18">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>

      {/* Mid Right: Purple Leaf */}
      <div className="hidden lg:block absolute top-1/2 right-6 xl:right-12 pointer-events-none opacity-35 animate-sway">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path d="M4 20C4 20 5 12 10 8C15 4 20 4 20 4C20 4 20 9 16 14C12 19 4 20 4 20Z" fill="#7A43D8" />
        </svg>
      </div>

      {/* Lower Left: Green Sprout */}
      <div className="hidden lg:block absolute bottom-8 left-8 xl:left-14 pointer-events-none opacity-35 animate-sway">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22V12M12 12C12 7 7 4 2 4C2 9 5 12 12 12ZM12 12C12 7 17 4 22 4C22 9 19 12 12 12Z"
            stroke="#63C32D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Floating Sparkle Heart */}
      <div className="hidden sm:block absolute top-1/3 left-10 xl:left-20 pointer-events-none opacity-35 animate-glow">
        <Heart className="w-5 h-5 fill-[#FFAA18] text-[#FFAA18]" />
      </div>

      {/* 3. Centered Main Content Container with Large Width and Compact Vertical Spacing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top: Small Turquoise Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B9C3]/12 border border-[#10B9C3]/25 text-[#10B9C3] text-xs sm:text-sm font-bold tracking-[0.22em] uppercase mb-3 sm:mb-3.5 shadow-xs backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#10B9C3] animate-pulse" />
          <span>ABOUT BE SMILE</span>
        </div>

        {/* Main Heading: Wide width */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-[#102A5C] tracking-tight leading-tight sm:leading-[1.2] mb-3 sm:mb-4 max-w-5xl mx-auto">
          Every Child Has Their Own Way to{" "}
          <span className="text-[#FFAA18] relative inline-block">
            Shine
            {/* Playful curved wave highlight under "Shine" */}
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              height="8"
              viewBox="0 0 100 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5C25 1.5 75 1.5 99 5.5"
                stroke="#7A43D8"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-[#7A43D8]">.</span>
        </h2>

        {/* Warm, Professional Paragraph: Wide width & balanced line length */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-5xl mx-auto mb-6 sm:mb-8">
          At <strong className="font-bold text-[#102A5C]">BE SMILE</strong>, we provide a safe, supportive, and nurturing environment where children with developmental needs flourish. Through individualized, play-infused therapy programs guided by our certified multidisciplinary team, we partner with families to unlock each child&apos;s unique potential—celebrating every breakthrough with joy and confidence.
        </p>

        {/* Prominent Orange Rounded Button */}
        <div className="flex justify-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#FFAA18] hover:bg-[#E89608] text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#FFAA18]/25 hover:shadow-lg hover:shadow-[#FFAA18]/35 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Know More About Us</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
