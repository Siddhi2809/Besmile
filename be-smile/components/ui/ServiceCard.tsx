

import React from "react";
import Link from "next/link";
import {
  MessageCircleHeart,
  HandHeart,
  BrainCircuit,
  Activity,
  GraduationCap,
  Sparkles,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  MessageCircleHeart,
  HandHeart,
  BrainCircuit,
  Activity,
  GraduationCap,
  Sparkles,
};

export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div
      className={`group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 soft-shadow soft-shadow-hover flex flex-col justify-between transition-all duration-300 hover:border-[#10B9C3]/30 ${className}`}
    >
      {/* Top decorative accent badge */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
            style={{ backgroundColor: service.bgColor }}
          >
            <IconComponent className="w-7 h-7" style={{ color: service.color }} />
          </div>

          <span
            className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border"
            style={{
              backgroundColor: service.bgColor,
              borderColor: service.borderColor,
              color: service.textColor,
            }}
          >
            {service.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#102A5C] mb-3 group-hover:text-[#10B9C3] transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
          {service.shortDesc}
        </p>

        {/* Benefits mini pill tags */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-100">
            {service.benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-center text-xs text-slate-600 gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: service.color }}
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Learn more link */}
      <div className="pt-2">
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center text-sm font-bold transition-all duration-200 group-hover:gap-2 gap-1.5"
          style={{ color: service.color }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Subtle corner hover highlight */}
      <div
        className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: service.color }}
      />
    </div>
  );
}
