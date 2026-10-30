import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function TeamPreview() {
  return (
    <section id="team" className="py-14 sm:py-20 bg-[#F7F3FF]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Compassionate Specialists"
          badgeVariant="purple"
          title={
            <span>
              Meet Our{" "}
              <span className="text-[#7A43D8] relative">
                Caring Team
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.5C25 1.5 75 1.5 99 4.5"
                    stroke="#10B9C3"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          }
          subtitle="Our multidisciplinary clinical staff combines rigorous clinical certifications with patient, playful hearts dedicated to your child's well-being."
          align="center"
        />

        {/* 4 Team Member Cards: 2-Columns on Mobile, 4 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-100/70 shadow-sm hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col group"
            >
              {/* Profile Image with 1:1 Aspect */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />

                {/* Experience pill badge */}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9.5px] sm:text-[11px] font-bold text-[#102A5C] shadow-2xs">
                  {member.experience}
                </div>
              </div>

              {/* Details */}
              <div className="p-3 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#102A5C] mb-0.5 sm:mb-1 group-hover:text-[#7A43D8] transition-colors line-clamp-1">
                    {member.name}
                  </h3>

                  <p className="text-[10px] sm:text-xs lg:text-sm font-semibold text-[#10B9C3] mb-1 sm:mb-2 line-clamp-1">
                    {member.role}
                  </p>

                  <p className="text-[9.5px] sm:text-xs text-slate-500 font-medium mb-2 sm:mb-4 line-clamp-1">
                    {member.qualification}
                  </p>

                  {/* Specialty tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1.5 sm:pt-2 border-t border-slate-100">
                    {member.specialties.slice(0, 2).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 rounded-md bg-[#F7F3FF] text-[#7A43D8] border border-purple-100 truncate max-w-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {member.specialties.length > 2 && (
                      <span className="hidden sm:inline-block text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#F7F3FF] text-[#7A43D8] border border-purple-100">
                        +{member.specialties.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Team Members CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Button
            variant="purple"
            size="lg"
            href="/team"
            showArrow
            leftIcon={<Users className="w-5 h-5" />}
          >
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  );
}
