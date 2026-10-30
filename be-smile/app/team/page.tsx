import React from "react";
import Image from "next/image";
import { Users, Award, Sparkles, CheckCircle2, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata = {
  title: "Our Clinical Team | Be Smile Child Development Centre",
  description:
    "Meet our licensed pediatric therapists, speech-language pathologists, occupational therapists, and special educators.",
};

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F7F3FF] to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7A43D8]/30 text-[#7A43D8] text-xs sm:text-sm font-bold uppercase mb-4 shadow-xs">
            <Users className="w-4 h-4 text-[#7A43D8]" />
            <span>EXPERT CLINICAL FACULTY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#102A5C] tracking-tight mb-4">
            Meet Our Dedicated <span className="text-[#7A43D8]">Team</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Every therapist at Be Smile brings licensed credentials, specialized pediatric expertise, and a heartfelt passion for watching children blossom.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-7 md:p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-8 items-center sm:items-start group"
              >
                {/* Photo */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 144px, 192px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#102A5C] shadow-xs">
                    {member.experience}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between h-full text-center sm:text-left w-full">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#102A5C] mb-1">
                      {member.name}
                    </h3>

                    <div className="text-sm font-bold text-[#10B9C3] mb-1">
                      {member.role}
                    </div>

                    <div className="text-xs text-slate-500 font-medium mb-3">
                      {member.qualification}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start mb-5 sm:mb-6">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-[#F0FCFD] text-[#079BA5] border border-cyan-100"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="orange"
                    size="sm"
                    href="/contact#book-assessment"
                    className="w-full sm:w-auto text-center justify-center text-xs sm:text-sm px-4 py-2.5"
                    rightIcon={<CalendarCheck className="w-3.5 h-3.5 ml-1" />}
                  >
                    Consult With {member.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
