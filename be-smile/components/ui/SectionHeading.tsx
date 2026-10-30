import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "turquoise" | "purple" | "orange" | "green";
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeVariant = "turquoise",
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const badgeStyles = {
    turquoise: "bg-[#F0FCFD] text-[#079BA5] border-[#B4EFF3]",
    purple: "bg-[#F7F3FF] text-[#7A43D8] border-[#E0D2FC]",
    orange: "bg-[#FFF8E9] text-[#FFAA18] border-[#FFE2A6]",
    green: "bg-[#F3FBF0] text-[#4B9A1E] border-[#D2F2C0]",
  };

  const isCenter = align === "center";

  const marginClass = className.includes("mb-") ? "" : "mb-10 sm:mb-12";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-3xl ${marginClass} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase border mb-3.5 sm:mb-4 ${badgeStyles[badgeVariant]}`}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A5C] tracking-tight leading-tight sm:leading-snug">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
