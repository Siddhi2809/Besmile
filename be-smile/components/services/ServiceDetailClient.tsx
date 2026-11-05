"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  CalendarCheck,
  Star,
  Play,
  UserCheck,
  Clock,
  MapPin,
  Sparkles,
  ChevronDown,
  Quote,
  ShieldCheck,
  LucideIcon,
  HelpCircle,
} from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { DetailedService } from "@/lib/services-data";
import { WhatsAppIcon, getWhatsAppBookingUrl } from "@/components/ui/WhatsAppIcon";

interface ServiceDetailClientProps {
  service: DetailedService;
  relatedServices: DetailedService[];
}

export default function ServiceDetailClient({
  service,
  relatedServices,
}: ServiceDetailClientProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeGalleryImg, setActiveGalleryImg] = useState<string>(
    service.galleryImages[0] || service.image
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-[#FAFDFE] to-white text-slate-800 pb-16">
      {/* ======================================================== */}
      {/* 1. TOP BREADCRUMB & BACK NAVIGATION                      */}
      {/* ======================================================== */}
      <div className="w-full bg-slate-50/70 border-b border-slate-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between text-xs sm:text-sm">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-slate-500 font-medium overflow-x-auto whitespace-nowrap"
          >
            <Link href="/" className="hover:text-[#10B9C3] transition-colors">
              Home
            </Link>
            <span className="text-slate-300">&gt;</span>
            <Link href="/services" className="hover:text-[#10B9C3] transition-colors">
              Services
            </Link>
            <span className="text-slate-300">&gt;</span>
            <span className="text-[#102A5C] font-bold truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A5C] hover:text-[#00A3E0] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. HERO / SERVICE OVERVIEW HEADER                        */}
      {/* ======================================================== */}
      <section className="relative w-full pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-hidden border-b border-slate-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title & Key Highlights */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge + Service Number */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-7 h-7 rounded-xl bg-[#102A5C] text-white text-xs font-black flex items-center justify-center shadow-xs">
                  {service.number}
                </span>
                <span
                  className="text-xs font-bold px-3.5 py-1 rounded-full text-white shadow-xs tracking-wider uppercase"
                  style={{ backgroundColor: service.accentColor }}
                >
                  {service.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102A5C] tracking-tight leading-tight mb-4">
                {service.title}
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-semibold text-slate-700 leading-snug mb-4">
                {service.tagline}
              </p>

              {/* Short Intro */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                {service.fullDesc}
              </p>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap items-center gap-3 mb-6 w-full">
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-2xl">
                  <UserCheck className="w-4 h-4 text-[#00A3E0]" />
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Age Group</span>
                    <span className="font-bold text-slate-700">{service.ageGroup}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-2xl">
                  <Clock className="w-4 h-4 text-[#7A43D8]" />
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Duration</span>
                    <span className="font-bold text-slate-700">{service.sessionDuration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-2xl">
                  <Sparkles className="w-4 h-4 text-[#FFAA18]" />
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Session Format</span>
                    <span className="font-bold text-slate-700">{service.format}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={getWhatsAppBookingUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm shadow-md transition-all hover:scale-105 active:scale-95 bg-[#25D366] hover:bg-[#20bd5a] shadow-[#25D366]/30"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Book Assessment on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#102A5C] text-sm font-bold shadow-xs hover:border-[#10B9C3]/50 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#00A3E0]" />
                  <span>Call: {BRAND_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Main Image & Mini Gallery */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white bg-slate-100 group">
                <Image
                  src={activeGalleryImg}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  priority
                  className="object-cover object-center transition-all duration-500"
                />

                {/* Floating pill over image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-white/60 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: service.accentColor }}
                    />
                    <span className="text-xs font-bold text-slate-800">
                      Center-Equipped Sensory &amp; Motor Facility
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold text-[#102A5C]">
                    Pune Clinic
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {service.galleryImages.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-4 w-full">
                  {service.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveGalleryImg(img)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeGalleryImg === img
                          ? "ring-2 ring-[#00A3E0] border-transparent scale-105"
                          : "border-slate-200 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. KEY BENEFITS & WHO NEEDS THIS                         */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white"
                  style={{ backgroundColor: service.accentColor }}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#102A5C]">
                    Key Therapeutic Benefits
                  </h3>
                  <p className="text-xs text-slate-500">Measurable milestones and developmental gains</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {service.keyBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100"
                  >
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: service.accentColor }}
                    />
                    <span className="text-sm font-semibold text-slate-700 leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Needs This Service? */}
            <div className="bg-gradient-to-br from-[#F8FDFF] to-white rounded-3xl p-7 sm:p-9 border border-[#10B9C3]/20 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#102A5C] text-white flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#102A5C]">
                    Is This Right for Your Child?
                  </h3>
                  <p className="text-xs text-slate-500">Common indicators and developmental concerns</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {service.whoNeedsThis.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#10B9C3] shrink-0 mt-2" />
                    <span className="text-sm font-medium text-slate-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Consultation prompt */}
              <div className="mt-6 p-4 rounded-2xl bg-[#E0F8FB] border border-[#B4EFF3] flex items-center justify-between">
                <p className="text-xs text-[#00A3E0] font-bold">
                  Unsure about developmental signs? Schedule a screening.
                </p>
                <a
                  href={getWhatsAppBookingUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-extrabold text-[#102A5C] hover:text-[#25D366] inline-flex items-center gap-1.5 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>Book via WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CLINICAL APPROACH / HOW WE WORK                       */}
      {/* ======================================================== */}
      <section className="py-12 bg-white/70 backdrop-blur-xs border-y border-slate-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span
              className="text-xs font-extrabold tracking-widest uppercase"
              style={{ color: service.accentColor }}
            >
              STRUCTURED CLINICAL METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight mt-1">
              How We Deliver {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our 4-phase therapeutic cycle ensures structured, evidence-based milestone progression for every individual child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.clinicalApproach.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-200">
                      0{idx + 1}
                    </span>
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: service.accentColor }}
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#102A5C] mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. MENTOR & SPECIALIST DETAILS (CORE REQUIREMENT)        */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A43D8]">
                CLINICAL EXPERTISE &amp; LEADERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight">
                Mentors &amp; Specialists for this Service
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              RCI-registered psychologists &amp; certified pediatric therapists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-[#10B9C3]/50 transition-all"
              >
                {/* Mentor Photo */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shrink-0 border-4 border-white shadow-lg bg-slate-100">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Mentor Details */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E0F8FB] text-[#00A3E0] text-[11px] font-bold uppercase mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{mentor.experience}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#102A5C] mb-1">
                    {mentor.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-bold text-[#7A43D8] mb-1.5">
                    {mentor.role}
                  </p>

                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {mentor.qualification}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {mentor.bio}
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-slate-100">
                    <a
                      href={getWhatsAppBookingUrl(`${service.title} with ${mentor.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>Consult {mentor.name.split(" ")[0]} on WhatsApp</span>
                    </a>

                    {mentor.phone && (
                      <a
                        href={`tel:${mentor.phone}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#102A5C] text-xs font-semibold transition-all"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#00A3E0]" />
                        <span>{mentor.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. VIDEO SECTION (CORE REQUIREMENT)                      */}
      {/* ======================================================== */}
      {service.video && (
        <section className="py-12 bg-gradient-to-b from-slate-900 via-[#102A5C] to-slate-900 text-white relative overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#10B9C3]">
                THERAPY IN ACTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {service.video.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                {service.video.description}
              </p>
            </div>

            <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black">
              {isPlayingVideo && service.video.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${service.video.youtubeId}?autoplay=1`}
                  title={service.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full group">
                  <Image
                    src={service.video.fallbackPoster}
                    alt={service.video.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#10B9C3] hover:bg-[#00A3E0] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:ring-8 group-hover:ring-white/20 cursor-pointer"
                      aria-label="Play Video"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-1" />
                    </button>
                    <span className="mt-4 text-xs sm:text-sm font-bold text-white bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md">
                      Click to Watch Video Overview ({service.video.duration})
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 7. PARENT REVIEWS & RATINGS (CORE REQUIREMENT)           */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FFAA18]">
                REAL STORIES FROM FAMILIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight">
                Parent Reviews for {service.title}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700">
              <div className="flex text-[#FFAA18]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>5.0 / 5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#FFAA18]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-sm font-bold text-[#102A5C]">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {rev.parentOf}
                    </p>
                  </div>
                  {rev.verified && (
                    <span className="text-[11px] font-bold text-[#10B981] bg-[#E7F8EE] px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Parent</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FAQS ACCORDION                                        */}
      {/* ======================================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 bg-slate-50/60 border-y border-slate-100">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] mt-1">
                Got Questions About {service.title}?
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-[#102A5C] text-sm sm:text-base hover:text-[#00A3E0] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#00A3E0] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#00A3E0]" : "text-slate-400"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 9. EXPLORE RELATED SERVICES                              */}
      {/* ======================================================== */}
      {relatedServices.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0]">
                  COMPLEMENTARY CARE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C]">
                  Other Services You May Need
                </h2>
              </div>
              <Link
                href="/services"
                className="text-xs sm:text-sm font-bold text-[#102A5C] hover:text-[#00A3E0] flex items-center gap-1"
              >
                <span>View All 12</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: rel.accentColor }}
                      >
                        {rel.badge}
                      </span>
                      <span className="text-xs font-black text-slate-300">
                        {rel.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#102A5C] group-hover:text-[#00A3E0] transition-colors mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold"
                    style={{ color: rel.accentColor }}
                  >
                    <span>Read Details &amp; Mentors</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 10. BOTTOM CLINIC BOOKING BANNER                         */}
      {/* ======================================================== */}
      <section className="pt-6">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative w-full bg-[#EAF8FA] rounded-3xl p-7 sm:p-10 border border-[#10B9C3]/20 shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold text-[#00A3E0] tracking-widest uppercase">
                CHILD REHABILITATION IN PUNE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#102A5C] mt-1 mb-2">
                Ready to Book an Assessment for {service.title}?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Visit us at Pimple Nilakh, Pune or call our specialists directly to understand how we can support your child&apos;s developmental goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#102A5C] text-xs sm:text-sm font-bold shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-[#00A3E0]" />
                <span>Call {BRAND_INFO.phone}</span>
              </a>

              <a
                href={getWhatsAppBookingUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-[#25D366]/30 transition-all hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Book Assessment on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

