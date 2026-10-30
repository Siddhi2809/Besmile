import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="w-full bg-[#F7F3FF]/40 relative overflow-hidden select-none">
      {/* 100% Full-Width Turquoise Wave Ribbon */}
      <div className="relative w-full min-h-[290px] sm:min-h-[320px] md:min-h-[350px] flex items-center justify-center">
        {/* SVG Wave Ribbon Background spanning edge-to-edge */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <svg
            className="w-full h-full block"
            viewBox="0 0 1440 320"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,42 C60,15 105,8 155,8 C220,8 270,75 360,75 C460,75 600,20 740,20 C900,20 1070,82 1210,82 C1300,82 1375,32 1440,26 L1440,320 L0,320 Z"
              fill="#00B5C8"
            />
          </svg>
        </div>

        {/* LEFT ELEMENT: White Smile Doodle */}
        <div className="hidden sm:flex absolute left-4 md:left-10 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10">
          <svg
            width="82"
            height="82"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-45"
          >
            <circle cx="42" cy="42" r="36" stroke="white" strokeWidth="2.8" />
            <circle cx="30" cy="34" r="3" fill="white" />
            <circle cx="54" cy="34" r="3" fill="white" />
            <path
              d="M28 47C33 56 51 56 56 47"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* CENTER CONTENT: Heading, Subtitle & Orange Pill Button with generous top & bottom padding */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center pt-14 sm:pt-16 md:pt-20 pb-12 sm:pb-14 md:pb-16 flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white tracking-tight leading-tight mb-2.5">
            Let&apos;s Take the Next Step Together
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-white/95 font-normal mb-6 max-w-xl mx-auto">
            Every little step is a step toward a brighter future.
          </p>

          <Link
            href="/contact#book-assessment"
            className="group inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#FF8A00] hover:bg-[#E87900] text-white font-bold text-xs sm:text-sm md:text-[14px] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Book an Assessment</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* RIGHT ELEMENT: Colorful BE SMILE Leaf Cluster */}
        <div className="hidden sm:flex absolute right-4 md:right-10 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10">
          <svg
            width="120"
            height="110"
            viewBox="0 0 120 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Purple Leaf pointing upward */}
            <path
              d="M62 48C56 34 58 14 74 6C86 16 88 36 78 50C72 58 64 54 62 48Z"
              fill="#A855F7"
              fillOpacity="0.95"
            />
            <path d="M74 6C74 20 72 36 62 48" stroke="#7E22CE" strokeWidth="1.2" opacity="0.6" />

            {/* 2. Light Green Leaf on left */}
            <path
              d="M48 42C38 34 38 20 48 14C56 20 58 34 52 42C50 44 49 43 48 42Z"
              fill="#84CC16"
            />
            <path d="M48 14C50 24 50 34 48 42" stroke="#65A30D" strokeWidth="1" opacity="0.6" />

            {/* 3. Cyan Leaf on right */}
            <path
              d="M82 48C84 34 94 20 106 18C110 30 104 46 92 50C86 52 83 50 82 48Z"
              fill="#06B6D4"
              fillOpacity="0.9"
            />
            <path d="M106 18C100 28 94 40 82 48" stroke="#0891B2" strokeWidth="1" opacity="0.6" />

            {/* 4. Large Orange Leaf at the bottom */}
            <path
              d="M38 78C38 60 56 46 80 46C96 52 104 68 96 86C80 96 50 92 38 78Z"
              fill="#FFAA18"
            />
            <path d="M80 46C74 62 60 76 38 78" stroke="#EA580C" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
