import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { GALLERY_ITEMS } from "@/lib/constants";
import { Camera, Eye } from "lucide-react";

export default function CenterGallery() {
  return (
    <section id="gallery" className="py-14 sm:py-20 bg-[#F0FCFD]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Infrastructure"
          badgeVariant="turquoise"
          className="mb-8 sm:mb-12"
          title={
            <span>
              Explore Our{" "}
              <span className="text-[#10B9C3] relative">
                Child-Friendly Center
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.5C25 1.5 75 1.5 99 4.5"
                    stroke="#FFAA18"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          }
          subtitle="Designed with soft floor mats, multi-sensory equipment, and joyful colors to ensure every child feels secure, inspired, and engaged."
          align="center"
        />

        {/* 4 Gallery Cards Grid: 2x2 on Mobile, 4 in single row on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container with 4:3 Aspect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />

                {/* Tag Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9.5px] sm:text-[11px] font-bold text-[#102A5C] shadow-2xs">
                  {item.category}
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-[#102A5C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#10B9C3] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-base md:text-lg font-bold text-[#102A5C] mb-1 sm:mb-2 group-hover:text-[#10B9C3] transition-colors line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-normal leading-tight sm:leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Photos Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            href="/gallery"
            showArrow
            leftIcon={<Camera className="w-5 h-5" />}
          >
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  );
}
