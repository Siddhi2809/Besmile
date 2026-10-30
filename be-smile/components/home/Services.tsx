import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardConfig {
  id: string;
  title: string;
  description: string;
  accent: string;
  tintBg: string;
  tintBorder: string;
  badgeBg: string;
  href: string;
  doodleType: "leaf" | "star" | "sun" | "dots" | "heart" | "spark";
  icon: React.ReactNode;
}

const servicesList: ServiceCardConfig[] = [
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    description: "Improve communication skills & articulation with joyful exercises",
    accent: "#10B9C3",
    tintBg: "bg-gradient-to-b from-[#F0FCFD] via-white to-white",
    tintBorder: "border-[#10B9C3]/20 hover:border-[#10B9C3]/50",
    badgeBg: "bg-[#10B9C3]/12",
    href: "/services#speech-therapy",
    doodleType: "leaf",
    icon: (
      <svg className="w-8 h-8 sm:w-8.5 sm:h-8.5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 6C13.5 6 5 13.8 5 23.5C5 28.3 7.3 32.7 11 35.7C10.8 37.8 10 40.5 8.2 42.4C7.9 42.7 8.1 43.3 8.6 43.2C12.3 42.4 16.2 40.3 18.8 38.9C20.4 39.6 22.2 40 24 40C34.5 40 43 32.2 43 22.5C43 12.8 34.5 6 24 6Z"
          fill="#10B9C3"
        />
        <circle cx="16" cy="23" r="2.8" fill="white" />
        <circle cx="24" cy="23" r="2.8" fill="white" />
        <circle cx="32" cy="23" r="2.8" fill="white" />
        <path
          d="M34 10C35.5 10 38 11.5 38 13.5"
          stroke="#FFAA18"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    description: "Build daily living, fine motor coordination & sensory confidence",
    accent: "#7A43D8",
    tintBg: "bg-gradient-to-b from-[#F7F3FF] via-white to-white",
    tintBorder: "border-[#7A43D8]/20 hover:border-[#7A43D8]/50",
    badgeBg: "bg-[#7A43D8]/12",
    href: "/services#occupational-therapy",
    doodleType: "star",
    icon: (
      <svg className="w-8 h-8 sm:w-8.5 sm:h-8.5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 7C21 8.7 19.7 10 18 10C16.3 10 15 8.7 15 7H9C7.9 7 7 7.9 7 9V15C8.7 15 10 16.3 10 18C10 19.7 8.7 21 7 21V27C7 28.1 7.9 29 9 29H15C15 27.3 16.3 26 18 26C19.7 26 21 27.3 21 29H27C28.1 29 29 28.1 29 27V21C27.3 21 26 19.7 26 18C26 16.3 27.3 15 29 15V9C29 7.9 28.1 7 27 7H21Z"
          fill="#7A43D8"
        />
        <path
          d="M39 15C39 16.7 37.7 18 36 18C34.3 18 33 16.7 33 15H31V21C32.7 21 34 22.3 34 24C34 25.7 32.7 27 31 27V33H37C37 31.3 38.3 30 40 30C41.7 30 43 31.3 43 33H45C46.1 33 47 32.1 47 31V24C45.3 24 44 22.7 44 21C44 19.3 45.3 18 47 18V11C47 9.9 46.1 9 45 9H39C39 10.7 37.7 12 36 12C34.3 12 33 10.7 33 9H31V15H39Z"
          fill="#9462E5"
        />
        <path
          d="M15 33H9C7.9 33 7 33.9 7 35V41C7 42.1 7.9 43 9 43H15C15 41.3 16.3 40 18 40C19.7 40 21 41.3 21 43H27C28.1 43 29 42.1 29 41V35C29 33.9 28.1 33 27 33H21C21 34.7 19.7 36 18 36C16.3 36 15 34.7 15 33Z"
          fill="#5D24B8"
        />
      </svg>
    ),
  },
  {
    id: "behavioural-therapy",
    title: "Behavioural Therapy",
    description: "Support positive behaviour, emotional growth & resilience",
    accent: "#FFAA18",
    tintBg: "bg-gradient-to-b from-[#FFF8E9] via-white to-white",
    tintBorder: "border-[#FFAA18]/25 hover:border-[#FFAA18]/55",
    badgeBg: "bg-[#FFAA18]/14",
    href: "/services#behavioural-therapy",
    doodleType: "sun",
    icon: (
      <svg className="w-8 h-8 sm:w-8.5 sm:h-8.5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26 6C17.2 6 12 11.8 12 19.5C12 24.2 14.1 27.5 16.8 29.8C17.4 30.3 17.8 31.1 17.8 31.9V37C17.8 38.7 19.1 40 20.8 40H27.5C28.9 40 30 38.9 30 37.5V36C32.8 35.2 34.8 32.6 34.8 29.5C34.8 28.8 34.6 28.2 34.3 27.6C36.6 25.8 38 23 38 19.8C38 12.2 32.8 6 26 6Z"
          fill="#FFAA18"
        />
        <circle cx="24" cy="18" r="4.5" stroke="white" strokeWidth="2" strokeDasharray="2 2" fill="none" />
        <path d="M24 15V21M21 18H27" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="34" cy="9" r="1.5" fill="#63C32D" />
      </svg>
    ),
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description: "Enhance physical development, posture, strength & mobility",
    accent: "#63C32D",
    tintBg: "bg-gradient-to-b from-[#F3FBF0] via-white to-white",
    tintBorder: "border-[#63C32D]/20 hover:border-[#63C32D]/50",
    badgeBg: "bg-[#63C32D]/12",
    href: "/services#physiotherapy",
    doodleType: "leaf",
    icon: (
      <svg className="w-8 h-8 sm:w-8.5 sm:h-8.5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="9" r="4.5" fill="#63C32D" />
        <path
          d="M23 15C21.9 15 20.9 15.5 20.2 16.3L15.3 21.8C14.7 22.5 14.8 23.6 15.6 24.2C16.3 24.8 17.4 24.7 18 23.9L21.5 20V27L15.8 30.2C15 30.6 14.5 31.5 14.5 32.4C14.5 34 16.1 35.1 17.5 34.4L24 30.8V38C24 39.1 24.9 40 26 40C27.1 40 28 39.1 28 38V27.5L31.8 30.8L34.2 36.5C34.6 37.5 35.6 38 36.6 37.7C37.6 37.3 38.1 36.3 37.7 35.3L35 29C34.6 28.2 33.9 27.6 33.1 27.3L28.8 25.7L29.8 20.9L32.2 23.3C32.9 24 34 24.2 34.8 23.7C35.7 23.1 36 22 35.4 21.2L31.8 16.8C31 15.7 29.6 15 28.2 15H23Z"
          fill="#63C32D"
        />
        <path d="M12 28C10 26 8 26 6 28" stroke="#10B9C3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "special-education",
    title: "Special Education",
    description: "Personalized learning support, remedial phonics & readiness",
    accent: "#0EA5E9",
    tintBg: "bg-gradient-to-b from-[#F0F9FF] via-white to-white",
    tintBorder: "border-[#0EA5E9]/20 hover:border-[#0EA5E9]/50",
    badgeBg: "bg-[#0EA5E9]/12",
    href: "/services#special-education",
    doodleType: "spark",
    icon: (
      <svg className="w-8 h-8 sm:w-8.5 sm:h-8.5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 6C13 6 4 14.5 4 25C4 32.5 9 38 16 41C17.5 41.6 19 40.5 19 38.9C19 37.8 18.5 36.7 18.5 35.5C18.5 33 20.5 31 23 31H26C35 31 42 24 42 15C42 10 34 6 24 6Z"
          fill="#0EA5E9"
        />
        <circle cx="14" cy="19" r="2.8" fill="#FFAA18" />
        <circle cx="21" cy="14" r="2.8" fill="#63C32D" />
        <circle cx="29" cy="14" r="2.8" fill="#7A43D8" />
        <circle cx="34" cy="20" r="2.8" fill="#F43F5E" />
        <circle cx="27" cy="25" r="3.5" fill="white" fillOpacity="0.45" />
      </svg>
    ),
  },
  {
    id: "early-intervention",
    title: "Early Intervention",
    description: "Support for developmental delays in crucial formative years (0-6)",
    accent: "#7A43D8",
    tintBg: "bg-gradient-to-b from-[#F7F3FF] via-white to-white",
    tintBorder: "border-[#7A43D8]/20 hover:border-[#7A43D8]/50",
    badgeBg: "bg-[#7A43D8]/12",
    href: "/services#early-intervention",
    doodleType: "heart",
    icon: (
      <svg className="w-8 h-8 sm:w-8.5 sm:h-8.5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 6C23 6 22 6.5 21.5 7.5C21 6.5 20 6 19 6C17.3 6 16 7.3 16 9C16 11.5 21.5 15 21.5 15C21.5 15 27 11.5 27 9C27 7.3 25.7 6 24 6Z"
          fill="#FFAA18"
        />
        <circle cx="24" cy="18" r="3.5" fill="#7A43D8" />
        <circle cx="16" cy="22" r="3" fill="#7A43D8" />
        <circle cx="32" cy="22" r="3" fill="#7A43D8" />
        <path d="M24 23C20.7 23 18 25.7 18 29V32H30V29C30 25.7 27.3 23 24 23Z" fill="#7A43D8" />
        <path d="M16 26.5C13.5 26.5 11.5 28.5 11.5 31V33H16.5V29C16.5 28 16.8 27.2 17.3 26.5H16Z" fill="#9055E8" />
        <path d="M32 26.5C30.7 27.2 30 28 30 29V33H35V31C35 28.5 33 26.5 30.5 26.5H32Z" fill="#9055E8" />
      </svg>
    ),
  },
];

function CardCornerDoodle({ type, accent }: { type: string; accent: string }) {
  if (type === "leaf") {
    return (
      <svg className="w-6 h-6 absolute top-3 right-3 opacity-20 pointer-events-none" viewBox="0 0 24 24" fill="none">
        <path d="M20 4C20 4 12 5 8 10C4 15 4 20 4 20C4 20 9 20 14 16C19 12 20 4 20 4Z" fill={accent} />
      </svg>
    );
  }
  if (type === "star" || type === "spark") {
    return (
      <svg className="w-5 h-5 absolute top-3.5 right-3.5 opacity-20 pointer-events-none" viewBox="0 0 24 24" fill={accent}>
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
    );
  }
  if (type === "sun") {
    return (
      <svg className="w-6 h-6 absolute top-3 right-3 opacity-20 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.8">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2V4M12 20V22M2 12H4M20 12H22M5 5L6.5 6.5M17.5 17.5L19 19M5 19L6.5 17.5M17.5 6.5L19 5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "heart") {
    return (
      <svg className="w-5 h-5 absolute top-3.5 right-3.5 opacity-20 pointer-events-none" viewBox="0 0 24 24" fill={accent}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }
  return null;
}

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-gradient-to-b from-[#F0FCFD] via-[#F8FDFF] to-white/70 relative overflow-hidden">
      {/* Subtle decorative leaf outline doodle in top right */}
      <div className="absolute top-2 right-2 sm:right-8 pointer-events-none opacity-20 -z-10">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 10C50 10 75 15 85 35C95 55 85 85 85 85C85 85 55 95 35 85C15 75 10 50 10 50C10 50 30 50 50 10Z"
            stroke="#10B9C3"
            strokeWidth="1.2"
            strokeDasharray="2 2"
          />
          <path d="M50 10C50 10 45 40 85 85" stroke="#10B9C3" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-bold text-[#10B9C3] tracking-[0.25em] uppercase mb-1.5">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight mb-2">
            Comprehensive Care for <span className="text-[#7A43D8]">Every Child</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl mx-auto">
            We offer a range of evidence-based therapies and support programs to help children reach their full potential.
          </p>
        </div>

        {/* 6 Service Cards: 2-Cols on Mobile (grid-cols-2), 3 on Tablet, 6 on Large Screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-4 xl:gap-3.5">
          {servicesList.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={`group relative ${service.tintBg} rounded-2xl p-3 sm:p-4.5 border ${service.tintBorder} shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col items-center text-center justify-between min-h-[215px] sm:min-h-[295px] overflow-hidden`}
              style={{
                boxShadow: "0 4px 14px -4px rgba(16, 42, 92, 0.05)",
              }}
            >
              {/* Subtle Ambient Background Glow matching the accent color */}
              <div
                className="absolute -top-8 -right-8 w-16 sm:w-20 h-16 sm:h-20 rounded-full blur-xl pointer-events-none opacity-25 group-hover:opacity-50 transition-opacity duration-200"
                style={{ backgroundColor: `${service.accent}20` }}
              />

              {/* Minimal Brand Doodle Accent in Top Corner */}
              <CardCornerDoodle type={service.doodleType} accent={service.accent} />

              {/* Attractive Icon in Rounded Squircle Container */}
              <div className="relative mb-2 sm:mb-3 z-10">
                <div
                  className="w-11 h-11 sm:w-15 sm:h-15 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs border-2 border-white ring-1 ring-black/5"
                  style={{
                    backgroundColor: `${service.accent}14`,
                    borderColor: "#FFFFFF",
                    boxShadow: `0 4px 12px -3px ${service.accent}20`,
                  }}
                >
                  <div className="scale-75 sm:scale-100 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Service Title & Description */}
              <div className="flex-1 flex flex-col items-center justify-start z-10 w-full mb-2 sm:mb-3">
                <h3 className="text-xs sm:text-[15px] font-extrabold text-[#102A5C] leading-snug mb-1 sm:mb-1.5 group-hover:text-[#10B9C3] transition-colors line-clamp-1 sm:line-clamp-none">
                  {service.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-slate-500 font-normal leading-tight sm:leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Learn More Action with Subtle Arrow */}
              <div className="z-10 w-full flex items-center justify-center">
                <div
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: `${service.accent}12`,
                  }}
                >
                  <span
                    className="text-[10px] sm:text-xs font-bold transition-colors"
                    style={{ color: service.accent }}
                  >
                    Learn More
                  </span>
                  <div
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
                    style={{
                      backgroundColor: service.accent,
                      color: "#FFFFFF",
                    }}
                  >
                    <ArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Colored Accent Line */}
              <div
                className="absolute bottom-0 inset-x-8 h-0.5 rounded-t-full transition-all duration-200 group-hover:inset-x-4 opacity-40 group-hover:opacity-90"
                style={{ backgroundColor: service.accent }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
