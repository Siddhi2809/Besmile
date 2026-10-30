import React from "react";
import { Heart } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full bg-[#F7F4FD] relative overflow-hidden">
      {/* 1. TOP SECTION: Why Parents Choose Be Smile ? (100% Full Width Edge-to-Edge) */}
      <div className="w-full relative bg-[#F7F4FD] pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        {/* Decorative Doodles spanning across the full width */}
        {/* Top-Left: Outlined lavender floral doodle */}
        <svg
          width="75"
          height="75"
          viewBox="0 0 80 80"
          fill="none"
          className="absolute -top-2 left-2 sm:left-6 md:left-10 lg:left-14 opacity-40 pointer-events-none select-none"
        >
          <path
            d="M20 60C15 45 25 25 45 20C45 20 50 40 35 55C30 60 25 65 20 60Z"
            stroke="#8B5CF6"
            strokeWidth="1.5"
          />
          <path
            d="M45 20C55 25 65 40 55 55C50 62 40 60 35 55"
            stroke="#8B5CF6"
            strokeWidth="1.5"
          />
          <path d="M25 45C35 40 45 35 55 55" stroke="#8B5CF6" strokeWidth="1.2" />
        </svg>

        {/* Mid-Left: Soft green leaf */}
        <svg
          width="28"
          height="38"
          viewBox="0 0 24 32"
          fill="none"
          className="absolute left-2 sm:left-5 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 opacity-75 pointer-events-none select-none"
        >
          <path d="M2 16C2 8 8 2 18 2C18 10 16 26 6 30C4 26 2 21 2 16Z" fill="#86EFAC" />
          <path d="M18 2C12 10 8 18 6 30" stroke="#4ADE80" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {/* Top-Right: Cyan outlined leaf doodle */}
        <svg
          width="42"
          height="52"
          viewBox="0 0 28 36"
          fill="none"
          className="absolute top-3 right-3 sm:right-8 md:right-12 lg:right-18 opacity-65 pointer-events-none select-none"
        >
          <path
            d="M22 2C22 2 10 6 4 18C-2 30 10 34 16 30C22 26 24 14 22 2Z"
            stroke="#38BDF8"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M22 2C16 12 10 22 16 30" stroke="#38BDF8" strokeWidth="1.2" />
        </svg>

        {/* Lower-Right: Soft yellow leaf */}
        <svg
          width="26"
          height="34"
          viewBox="0 0 24 30"
          fill="none"
          className="absolute bottom-5 right-3 sm:right-7 md:right-10 lg:right-16 opacity-80 pointer-events-none select-none"
        >
          <path d="M4 26C2 18 6 8 18 4C18 12 16 22 8 28C6 28 5 27 4 26Z" fill="#FDE047" />
          <path d="M18 4C12 12 8 20 8 28" stroke="#FACC15" strokeWidth="1.2" strokeLinecap="round" />
        </svg>

        {/* Heading */}
        <div className="text-center relative z-10 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A5C] tracking-tight inline-flex items-center justify-center flex-wrap gap-x-2">
            <span>Why Parents Choose</span>
            <span className="text-[#00A3E0]">Be Smile</span>
            <span className="relative inline-block text-[#102A5C]">
              ?
              {/* 3 Playful Purple Rays */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                className="absolute -top-3.5 -right-4.5 pointer-events-none select-none"
              >
                <line x1="3" y1="14" x2="7" y2="12" stroke="#7A43D8" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="6" y1="7" x2="10" y2="9" stroke="#7A43D8" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="14" y1="4" x2="12" y2="8" stroke="#7A43D8" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          {/* Small cyan underline bar directly under Be Smile */}
          <div className="w-8 h-1 rounded-full bg-[#00A3E0] mx-auto mt-2" />
        </div>

        {/* 4 Feature Columns: 2x2 on Mobile, 4 in single row on Desktop */}
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 lg:gap-10 xl:gap-12 relative z-10">
          {/* 1. Personalized Support */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white shadow-md shadow-orange-500/10 flex items-center justify-center mb-2.5 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#FFAA18] flex items-center justify-center shadow-xs">
                <Heart className="w-4 h-4 sm:w-7 sm:h-7 fill-white text-white" />
              </div>
            </div>
            <h3 className="text-xs sm:text-base md:text-lg font-bold text-[#102A5C] leading-snug mb-0.5 sm:mb-1.5">
              Personalized Support
            </h3>
            <p className="text-[10px] sm:text-xs md:text-[13.5px] text-slate-500 font-normal leading-tight sm:leading-relaxed max-w-[260px]">
              Individual attention for every child.
            </p>
          </div>

          {/* 2. Expert & Caring Team */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white shadow-md shadow-purple-500/10 flex items-center justify-center mb-2.5 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#7A43D8] flex items-center justify-center shadow-xs">
                <svg className="w-4 h-4 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="white">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  <path
                    d="M18 10c1.66 0 3-1.34 3-3s-1.34-3-3-3c-.34 0-.66.06-.96.16 1.19.81 1.96 2.18 1.96 3.84s-.77 3.03-1.96 3.84c.3.1.62.16.96.16zm0 2c-.29 0-.61.02-.93.07 1.73 1.05 2.93 2.72 2.93 4.93v2H24v-2c0-2.21-3.58-4-6-4z"
                    opacity="0.75"
                  />
                  <path
                    d="M6 10c1.66 0 3-1.34 3-3S7.66 4 6 4c-.34 0-.66.06-.96.16 1.19.81 1.96 2.18 1.96 3.84s-.77 3.03-1.96 3.84c.3.1.62.16.96.16zm0 2c-.29 0-.61.02-.93.07 1.73 1.05 2.93 2.72 2.93 4.93v2H0v-2c0-2.21 3.58-4 6-4z"
                    opacity="0.75"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xs sm:text-base md:text-lg font-bold text-[#102A5C] leading-snug mb-0.5 sm:mb-1.5">
              Expert &amp; Caring Team
            </h3>
            <p className="text-[10px] sm:text-xs md:text-[13.5px] text-slate-500 font-normal leading-tight sm:leading-relaxed max-w-[260px]">
              Qualified and experienced professionals.
            </p>
          </div>

          {/* 3. Goal-Oriented Programs */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white shadow-md shadow-cyan-500/10 flex items-center justify-center mb-2.5 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#00B4D8] flex items-center justify-center shadow-xs">
                <svg className="w-4 h-4 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="14" width="3.5" height="7" rx="1.5" fill="white" />
                  <rect x="10.25" y="9" width="3.5" height="12" rx="1.5" fill="white" />
                  <rect x="16.5" y="4" width="3.5" height="17" rx="1.5" fill="white" />
                </svg>
              </div>
            </div>
            <h3 className="text-xs sm:text-base md:text-lg font-bold text-[#102A5C] leading-snug mb-0.5 sm:mb-1.5">
              Goal-Oriented Programs
            </h3>
            <p className="text-[10px] sm:text-xs md:text-[13.5px] text-slate-500 font-normal leading-tight sm:leading-relaxed max-w-[260px]">
              Measurable progress and developmental goals.
            </p>
          </div>

          {/* 4. Positive & Nurturing Environment */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white shadow-md shadow-green-500/10 flex items-center justify-center mb-2.5 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#63C32D] flex items-center justify-center shadow-xs">
                <svg
                  className="w-4 h-4 sm:w-7 sm:h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <circle cx="9" cy="9" r="1.2" fill="white" stroke="none" />
                  <circle cx="15" cy="9" r="1.2" fill="white" stroke="none" />
                </svg>
              </div>
            </div>
            <h3 className="text-xs sm:text-base md:text-lg font-bold text-[#102A5C] leading-snug mb-0.5 sm:mb-1.5">
              Positive &amp; Nurturing Environment
            </h3>
            <p className="text-[10px] sm:text-xs md:text-[13.5px] text-slate-500 font-normal leading-tight sm:leading-relaxed max-w-[260px]">
              A safe and happy space for learning and growth.
            </p>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM SECTION: Stats Bar (Directly Attached with No White Gap) */}
      <div className="w-full relative bg-[#EBF8FA] py-7 sm:py-8 md:py-9 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden border-t border-[#10B9C3]/20">
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center sm:justify-items-start lg:justify-items-center">
          {/* Stat 1: 500+ Children Supported */}
          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <svg className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" viewBox="0 0 48 48" fill="none">
              <circle cx="14" cy="18" r="5" fill="#10B9C3" fillOpacity="0.85" />
              <path d="M7 36C7 31 10 27 14 27C18 27 21 31 21 36H7Z" fill="#10B9C3" fillOpacity="0.85" />
              <circle cx="34" cy="18" r="5" fill="#63C32D" fillOpacity="0.85" />
              <path d="M27 36C27 31 30 27 34 27C38 27 41 31 41 36H27Z" fill="#63C32D" fillOpacity="0.85" />
              <circle cx="24" cy="14" r="6.5" fill="#00A3E0" />
              <path d="M15 36C15 29 19 25 24 25C29 25 33 29 33 36H15Z" fill="#00A3E0" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                500+
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-slate-600">
                Children Supported
              </span>
            </div>
          </div>

          {/* Stat 2: 15+ Therapy Programs */}
          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <svg className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient id="whyStarGrad" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD43F" />
                  <stop offset="1" stopColor="#FFA500" />
                </linearGradient>
              </defs>
              <path
                d="M24 4L29.6 16.5L43 18L33 27.5L35.8 41L24 34.2L12.2 41L15 27.5L5 18L18.4 16.5L24 4Z"
                fill="url(#whyStarGrad)"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                15+
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-slate-600">
                Therapy Programs
              </span>
            </div>
          </div>

          {/* Stat 3: 10+ Years of Experience */}
          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <svg className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient id="whyTrophyGrad" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD700" />
                  <stop offset="1" stopColor="#FF9800" />
                </linearGradient>
              </defs>
              <path d="M12 12H7C5.5 12 4.5 13.5 5 15C6.2 19.5 9.5 22 13 22H14V12H12Z" fill="#FFA500" />
              <path d="M36 12H41C42.5 12 43.5 13.5 43 15C41.8 19.5 38.5 22 35 22H34V12H36Z" fill="#FFA500" />
              <path d="M13 8H35V20C35 26.5 30 31 24 31C18 31 13 26.5 13 20V8Z" fill="url(#whyTrophyGrad)" />
              <rect x="22" y="31" width="4" height="6" fill="#FFA500" />
              <path d="M15 37H33C34.1 37 35 37.9 35 39V41H13V39C13 37.9 13.9 37 15 37Z" fill="url(#whyTrophyGrad)" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                10+
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-slate-600">
                Years of Experience
              </span>
            </div>
          </div>

          {/* Stat 4: Happy Families */}
          <div className="flex items-center justify-center sm:justify-start gap-3.5">
            <svg className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient id="whyHeartGrad" x1="12" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF6B7A" />
                  <stop offset="1" stopColor="#E63946" />
                </linearGradient>
              </defs>
              <path
                d="M24 40C24 40 6 28.5 6 16.5C6 10 11.2 5 17.5 5C21.2 5 23.5 7.2 24 8.5C24.5 7.2 26.8 5 30.5 5C36.8 5 42 10 42 16.5C42 28.5 24 40 24 40Z"
                fill="url(#whyHeartGrad)"
              />
              <ellipse cx="15" cy="13" rx="4" ry="2" fill="white" fillOpacity="0.4" transform="rotate(-30 15 13)" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                Happy
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-slate-600">
                Families
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
