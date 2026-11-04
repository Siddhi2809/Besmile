"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ClipboardCheck,
  Compass,
  HeartHandshake,
  Phone,
  MapPin,
  ArrowRight,
  Filter,
  CalendarCheck,
} from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { DETAILED_SERVICES } from "@/lib/services-data";
import ServiceGridCard from "@/components/services/ServiceGridCard";

const CARE_STEPS = [
  {
    step: "01",
    title: "Comprehensive Assessment",
    description: "Detailed developmental evaluation screening cognitive, motor, sensory, and language milestones.",
    accent: "#00A3E0",
    bg: "bg-[#E0F8FB]",
    icon: <ClipboardCheck className="w-5 h-5 text-[#00A3E0]" />,
  },
  {
    step: "02",
    title: "Personalized IEP Plan",
    description: "Multi-disciplinary roadmap with customized milestones matched to your child's learning pace.",
    accent: "#7A43D8",
    bg: "bg-[#F1EBFC]",
    icon: <Compass className="w-5 h-5 text-[#7A43D8]" />,
  },
  {
    step: "03",
    title: "Engaging 1-on-1 Therapy",
    description: "Joyful play-based intervention in state-of-the-art sensory, speech, and physical rehabilitation gyms.",
    accent: "#FFAA18",
    bg: "bg-[#FFF6E5]",
    icon: <Sparkles className="w-5 h-5 text-[#FFAA18]" />,
  },
  {
    step: "04",
    title: "Parent Guidance & Review",
    description: "Continuous progress monitoring, routine home strategies, and transparent milestone celebrations.",
    accent: "#10B981",
    bg: "bg-[#E7F8EE]",
    icon: <HeartHandshake className="w-5 h-5 text-[#10B981]" />,
  },
];

export default function ServicesClient() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredServices =
    selectedFilter === "all"
      ? DETAILED_SERVICES
      : DETAILED_SERVICES.filter((s) => s.id === selectedFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-[#FAFDFE] to-white text-slate-800">
      {/* ======================================================== */}
      {/* 1. HERO BANNER                                           */}
      {/* ======================================================== */}
      <section className="relative w-full pt-8 sm:pt-12 md:pt-14 pb-4 sm:pb-6 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] font-medium text-slate-500 mb-3 tracking-wide"
          >
            <Link href="/" className="hover:text-[#10B9C3] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">&gt;</span>
            <span className="text-[#102A5C] font-semibold">Services</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#102A5C] tracking-tight leading-[1.15] mb-3">
            Our Child Development <span className="text-[#7A43D8]">Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto pb-4">
            Explore our 12 specialized pediatric disciplines. Each service is tailored with dedicated clinical mentors, evidence-informed interventions, and individualized milestone care.
          </p>
        </div>

        {/* Decorative Wave Ribbon */}
        <div className="w-full overflow-hidden leading-none relative -mb-1 pointer-events-none select-none">
          <svg
            className="w-full h-8 sm:h-12 md:h-16 block"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,45 C280,10 560,75 880,30 C1160,-10 1340,55 1440,35 L1440,120 L0,120 Z"
              fill="#10B9C3"
              fillOpacity="0.08"
            />
            <path
              d="M0,65 C220,95 500,25 780,70 C1060,115 1300,45 1440,60 L1440,120 L0,120 Z"
              fill="#10B9C3"
              fillOpacity="0.14"
            />
            <path
              d="M0,85 C320,118 640,60 980,95 C1220,118 1360,92 1440,88 L1440,120 L0,120 Z"
              fill="#FFFFFF"
              fillOpacity="0.85"
            />
          </svg>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FILTER PILLS / QUICK CATEGORIES                       */}
      {/* ======================================================== */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              selectedFilter === "all"
                ? "bg-[#102A5C] text-white shadow-md shadow-slate-900/20"
                : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>All 12 Services</span>
          </button>

          {DETAILED_SERVICES.map((s) => {
            const isActive = selectedFilter === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedFilter(s.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white shadow-md ring-2 ring-white/60"
                    : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-[#10B9C3]/40"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: s.accentColor,
                        boxShadow: `0 4px 14px -2px ${s.accentColor}50`,
                      }
                    : {}
                }
              >
                <span>{s.shortTitle || s.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. MODERN GRID DISPLAY: PROPER CARDS WITH IMAGE & CTA    */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Section Summary Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-slate-200/60">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0]">
                EVIDENCE-INFORMED PEDIATRIC CARE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C]">
                {selectedFilter === "all"
                  ? "All Specialized Services"
                  : filteredServices[0]?.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Showing {filteredServices.length} of {DETAILED_SERVICES.length} therapeutic disciplines • Click any service for full mentor details, video & reviews
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, idx) => (
              <ServiceGridCard
                key={service.id}
                service={service}
                priority={idx < 3}
              />
            ))}
          </div>

          {/* Bottom callout if single filter is active */}
          {selectedFilter !== "all" && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#102A5C] hover:bg-[#00A3E0] text-white text-xs sm:text-sm font-bold transition-all shadow-md"
              >
                <span>Show All 12 Services Again</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OUR 4-STEP CARE JOURNEY                               */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-white/80 backdrop-blur-xs border-y border-slate-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F8FB] border border-[#10B9C3]/30 text-[#00A3E0] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE BE SMILE METHOD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight mb-2.5">
              Our 4-Step Care Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A structured, empathetic pathway designed to guide your child from initial milestone assessment to lasting independence and joy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CARE_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center shadow-xs`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-200">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#102A5C] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div
                  className="w-10 h-1 rounded-full mt-5"
                  style={{ backgroundColor: step.accent }}
                />
              </div>
            ))}
          </div>

          {/* Quick Consultation Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#F0FCFD] via-[#F8FDFF] to-[#F7F4FD] rounded-3xl p-6 sm:p-8 border border-[#10B9C3]/20 flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#10B9C3]/15 text-[#10B9C3] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#102A5C]">
                  Need Guidance Choosing the Right Service?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Our clinical directors, Darshan Hote and Priti Mankar, personally review each child&apos;s background to recommend the optimal therapeutic mix.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#102A5C] text-xs sm:text-sm font-bold shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-[#00A3E0]" />
                <span>Call Clinic</span>
              </a>
              <Link
                href="/contact#book-assessment"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#00A3E0] hover:bg-[#0284C7] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. CLINIC CONTACT & LOCATION BANNER                      */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative w-full bg-[#EAF8FA] rounded-3xl overflow-hidden border border-[#10B9C3]/20 shadow-md p-6 sm:p-10">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl text-left">
                <div className="mb-2">
                  <span className="text-xs font-bold text-[#00A3E0] tracking-[0.2em] uppercase">
                    {BRAND_INFO.slogan}
                  </span>
                  <div className="w-10 h-0.5 bg-[#00A3E0] rounded-full mt-1" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight leading-snug mb-2">
                  Let&apos;s Support Your{" "}
                  <span className="text-[#00A3E0]">Child&apos;s</span>{" "}
                  <span className="text-[#7A43D8]">Journey Today</span>
                </h2>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium mb-3">
                  <MapPin className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.address}</span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00A3E0]" />
                    Darshan Hote:{" "}
                    <a href={`tel:${BRAND_INFO.phone}`} className="text-[#102A5C] hover:text-[#00A3E0]">
                      {BRAND_INFO.phone}
                    </a>
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#7A43D8]" />
                    Priti Mankar:{" "}
                    <a href={`tel:${BRAND_INFO.secondaryPhone}`} className="text-[#102A5C] hover:text-[#7A43D8]">
                      {BRAND_INFO.secondaryPhone}
                    </a>
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                <Link
                  href="/contact#book-assessment"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFAA18] hover:bg-[#E89608] text-white font-extrabold text-sm shadow-md shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Book an Assessment</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
