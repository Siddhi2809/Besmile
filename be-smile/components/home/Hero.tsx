import React from "react";
import Image from "next/image";
import {
  Sparkles,
  CalendarCheck,
  Compass,
  ShieldCheck,
  Smile,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { TRUST_HIGHLIGHTS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Sparkles,
  Smile,
  HeartHandshake,
};

export default function Hero() {
  return (
    <section className="relative w-full h-auto min-h-0 sm:min-h-[500px] md:h-[75vh] md:min-h-[460px] md:max-h-[75vh] bg-white overflow-hidden flex flex-col justify-between pt-1 sm:pt-7 md:pt-6 pb-3 sm:pb-3 md:pb-2.5">
      {/* ======================================================== */}
      {/* BACKGROUND IMAGE LAYER (Blurred on Mobile, Sharp Desktop) */}
      {/* Full width 100% edge-to-edge - text written directly on it */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/images/hero/be-smile-hero.png"
          alt="Be Smile Child Development & Rehabilitation Centre"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="w-full h-full object-cover object-[80%_30%] sm:object-[76%_center] md:object-[center_20%] lg:object-center select-none blur-[4px] sm:blur-none scale-105 sm:scale-100 transition-all duration-300"
        />
      </div>

      {/* Mobile-optimized soft glass backdrop feather: keeps text 100% readable with a smooth aesthetic depth */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/30 backdrop-blur-[1.5px] pointer-events-none z-0" />

      {/* ======================================================== */}
      {/* LOGO COLOR GRADIENT BLEND (At the bottom of Hero)        */}
      {/* Melts the hero image seamlessly into the section below   */}
      {/* ======================================================== */}
      <div className="absolute -bottom-1 inset-x-0 h-20 sm:h-28 md:h-36 bg-gradient-to-t from-[#F0FCFD] via-[#F0FCFD]/85 to-transparent pointer-events-none z-[1]" />
      <div className="absolute -bottom-10 left-10 w-80 h-24 rounded-full bg-[#10B9C3]/15 blur-3xl pointer-events-none z-[1]" />
      <div className="absolute -bottom-10 left-1/3 w-80 h-24 rounded-full bg-[#7A43D8]/10 blur-3xl pointer-events-none z-[1]" />
      <div className="absolute -bottom-10 right-16 w-80 h-24 rounded-full bg-[#FFAA18]/12 blur-3xl pointer-events-none z-[1]" />

      {/* ======================================================== */}
      {/* HERO CONTENT CONTAINER - Snug gap and large font style   */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-full flex flex-col justify-start md:justify-between gap-3 sm:gap-4 md:gap-0 flex-1">
        {/* Top/Middle Area: Large text on Left with clean tight gap */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-2.5 sm:gap-4 lg:gap-6 mt-1 mb-0 sm:my-auto pt-0 sm:pt-4">
          {/* Left Column: Hero Text Content - Full width */}
          <div className="md:col-span-7 lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left w-full max-w-none">
            {/* Eyebrow Badge - Large clear text */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#F0FCFD]/95 backdrop-blur-xs border border-[#10B9C3]/30 shadow-2xs mb-1.5 sm:mb-2">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#63C32D] shrink-0 animate-pulse" />
              <span className="text-xs sm:text-xs md:text-sm font-extrabold text-[#7A43D8] tracking-wider uppercase">
                CHILD DEVELOPMENT &amp; REHABILITATION CENTRE
              </span>
            </div>

            {/* Main Multi-color Headline - LARGE font style */}
            <h1 className="text-[1.75rem] xs:text-[2rem] sm:text-4xl md:text-[2.35rem] lg:text-[2.85rem] xl:text-[3.25rem] font-black text-[#102A5C] tracking-tight leading-[1.12] sm:leading-[1.1] mb-2 sm:mb-2.5 drop-shadow-2xs">
              Helping Little Minds{" "}
              <span className="text-[#10B9C3] relative inline-block">
                Grow
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.5C25 1.5 75 1.5 99 4.5"
                    stroke="#10B9C3"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ,{" "}
              <span className="text-[#FFAA18]">Learn</span>{" "}
              <span className="text-[#102A5C]">&amp;</span>{" "}
              <span className="text-[#7A43D8] inline-flex items-center gap-1">
                Shine
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FFAA18] inline fill-[#FFAA18] -mt-1 animate-bounce" />
              </span>
            </h1>

            {/* Supporting Description - Large font style with snug margin */}
            <p className="text-[14px] sm:text-base md:text-lg lg:text-[1.1rem] text-slate-800 md:text-slate-700 leading-snug sm:leading-relaxed max-w-xl mb-2.5 sm:mb-3.5 font-semibold md:font-medium">
              Child-centered developmental and rehabilitation care designed to help every child discover their potential and live a happier, brighter future.
            </p>

            {/* CTA Buttons - Large bold text */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                variant="orange"
                size="sm"
                href="/contact#book-assessment"
                showArrow
                rightIcon={<CalendarCheck className="w-4 h-4 ml-0.5" />}
                className="flex-1 sm:flex-initial text-center shadow-md shadow-[#FFAA18]/25 hover:shadow-lg hover:shadow-[#FFAA18]/35 text-xs xs:text-sm sm:text-base font-bold px-3.5 sm:px-5 py-2.5"
              >
                Book Assessment
              </Button>

              <Button
                variant="secondary"
                size="sm"
                href="#services"
                leftIcon={<Compass className="w-4 h-4" />}
                className="flex-1 sm:flex-initial text-center text-xs xs:text-sm sm:text-base font-bold px-3.5 sm:px-5 py-2.5 bg-white/80 backdrop-blur-xs"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Column Spacer: Keeps right area open for the child and leaves */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5 xl:col-span-6 pointer-events-none min-h-[220px] lg:min-h-[280px]" />
        </div>

        {/* ======================================================== */}
        {/* FLOATING 4 FEATURE CARDS (Responsive 2x2 on Mobile)      */}
        {/* ======================================================== */}
        <div className="w-full pt-1 sm:pt-2.5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-3.5">
            {TRUST_HIGHLIGHTS.map((item) => {
              const Icon = iconMap[item.iconName] || Sparkles;

              return (
                <div
                  key={item.id}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-slate-100/90 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-2 sm:gap-3"
                >
                  <div
                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-2xs"
                    style={{ backgroundColor: `${item.accent}18` }}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: item.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#102A5C] leading-snug group-hover:text-[#10B9C3] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight sm:leading-relaxed mt-0.5 line-clamp-1 sm:line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
