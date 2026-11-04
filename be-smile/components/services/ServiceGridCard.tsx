import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Activity,
  Hand,
  Brain,
  MessageCircle,
  Users,
  BookOpen,
  HeartHandshake,
  Compass,
  Smile,
  Flame,
  CheckCircle2,
  Clock,
  UserCheck,
} from "lucide-react";
import { DetailedService } from "@/lib/services-data";

interface ServiceGridCardProps {
  service: DetailedService;
  priority?: boolean;
}

const iconComponentMap: Record<string, React.ElementType> = {
  ClipboardCheck,
  Activity,
  HandHeart: Hand,
  BrainCircuit: Brain,
  MessageCircleHeart: MessageCircle,
  Users,
  GraduationCap: BookOpen,
  Sparkles,
  HeartHandshake,
  Compass,
  Smile,
  Flame,
};

export default function ServiceGridCard({ service, priority = false }: ServiceGridCardProps) {
  const IconComponent = iconComponentMap[service.iconName] || Sparkles;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#10B9C3]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Top Part: Image + Badges */}
      <div>
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Gradient Overlay for subtle readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/10" />

          {/* Number & Service Badge Floating */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md text-[#102A5C] text-xs font-black flex items-center justify-center shadow-md">
              {service.number}
            </span>
            <span
              className="text-[11px] font-bold px-3 py-1 rounded-full text-white backdrop-blur-md shadow-sm"
              style={{ backgroundColor: `${service.accentColor}E6` }}
            >
              {service.badge}
            </span>
          </div>

          {/* Icon in Bottom Right of Image */}
          <div
            className="absolute bottom-3 right-3 w-10 h-10 rounded-2xl flex items-center justify-center shadow-md backdrop-blur-md bg-white/95"
            style={{ color: service.accentColor }}
          >
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <h3 className="text-xl font-extrabold text-[#102A5C] group-hover:text-[#00A3E0] transition-colors leading-snug mb-2">
            {service.title}
          </h3>

          {/* Short description */}
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {service.shortDesc}
          </p>

          {/* Mini Meta Badges (Age, Duration) */}
          <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-slate-100 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
              <UserCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>{service.ageGroup}</span>
            </span>
            <span className="inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
              <Clock className="w-3.5 h-3.5 text-[#7A43D8]" />
              <span>{service.sessionDuration}</span>
            </span>
          </div>

          {/* Top 2 Benefits Bullet Points */}
          <div className="space-y-1.5 mb-2">
            {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2
                  className="w-3.5 h-3.5 shrink-0 mt-0.5"
                  style={{ color: service.accentColor }}
                />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / CTA Actions */}
      <div className="p-6 pt-0">
        <Link
          href={`/services/${service.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm text-white shadow-sm transition-all duration-200 group-hover:shadow-md"
          style={{
            backgroundColor: service.accentColor,
            boxShadow: `0 4px 14px -2px ${service.accentColor}40`,
          }}
        >
          <span>Explore Detailed Service</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

