import React from "react";
import { Star, Quote, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#FFAA18]/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#10B9C3]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Parent Testimonials"
          badgeVariant="orange"
          className="mb-8 sm:mb-12"
          title={
            
            <span>
              What Parents{" "}
              <span className="text-[#FFAA18] relative">
                Say About Us
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.5C25 1.5 75 1.5 99 4.5"
                    stroke="#7A43D8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          }
          subtitle="Real stories of developmental breakthroughs, renewed confidence, and big smiles from families who trusted us with their children."
          align="center"
        />

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FFF8E9]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-[#FFE2A6]/70 shadow-md shadow-amber-950/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col justify-between relative group"
            >
              {/* Quote Mark Icon */}
              <div className="mb-4 sm:mb-6 flex items-center justify-between">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-[#FFAA18] shadow-xs">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FFAA18]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FFAA18]" />
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-normal mb-5 sm:mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Parent Info & Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-amber-200/50">
                <div
                  className={`w-11 h-11 rounded-full ${testimonial.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-xs shrink-0`}
                >
                  {testimonial.avatarInitials}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-extrabold text-[#102A5C]">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-[#7A43D8] font-semibold">
                    {testimonial.parentOf}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {testimonial.therapyType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
