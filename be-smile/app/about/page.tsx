import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  Target,
  Eye,
  Gem,
  MessageCircle,
  Users,
  FileText,
  BarChart3,
  ArrowRight,
  GraduationCap,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  Building2,
} from "lucide-react";
import { FOUNDERS_INFO } from "@/lib/constants";

export const metadata = {
  title: "About Us | Be Smile Child Development & Rehabilitation Centre",
  description:
    "Learn about our mission, vision, founder, and child-centered therapy philosophy at Be Smile Child Development & Rehabilitation Centre.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-b from-[#F1FBFC] via-[#FCFEFE] via-20% via-[#F8F5FE]/60 via-60% to-[#EAF8FA] relative overflow-hidden">
      {/* Soft Ambient Floating Glow Mists for Rich Cohesive Gradient Feel */}
      <div className="absolute top-20 -left-28 w-[550px] h-[550px] rounded-full bg-[#10B9C3]/8 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[480px] -right-28 w-[600px] h-[600px] rounded-full bg-[#7A43D8]/6 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[1100px] left-10 w-[550px] h-[550px] rounded-full bg-[#FFAA18]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-10 w-[600px] h-[600px] rounded-full bg-[#10B9C3]/8 blur-[130px] pointer-events-none -z-10" />

      {/* ======================================================== */}
      {/* 1. HERO BANNER & BREADCRUMB WITH REFINED ORGANIC WAVES   */}
      {/* ======================================================== */}
      <section className="relative w-full pt-10 sm:pt-12 md:pt-14 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 text-center relative z-10">
          {/* Breadcrumb: Home → About Us */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] font-medium text-slate-500 mb-5 tracking-wide"
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-[#10B9C3] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-slate-300 select-none text-xs">&rarr;</span>
            <span className="text-[#102A5C] font-semibold">About Us</span>
          </nav>

          {/* Main Title: About Be Smile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#102A5C] tracking-tight leading-[1.15] mb-4">
            About{" "}
            <span className="text-[#10B9C3]">Be</span>{" "}
            <span className="text-[#7A43D8]">Smile</span>
          </h1>

          {/* Subtitle / Introduction */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto pb-6 sm:pb-8">
            A safe, supportive and nurturing space where every child is encouraged
            to learn, grow and reach their full potential.
          </p>
        </div>

        {/* Refined Layered Soft Turquoise Organic Wave Ribbon */}
        <div className="w-full overflow-hidden leading-none relative -mb-1 pointer-events-none select-none">
          <svg
            className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
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
              fillOpacity="0.75"
            />
          </svg>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MEET OUR FOUNDERS & DIRECTORS SECTION                 */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F8FB] border border-[#10B9C3]/30 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FOUNDERS &amp; CLINICAL LEADERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A5C] tracking-tight leading-tight mb-3">
              Meet Our Founders &amp; <span className="text-[#7A43D8]">Directors</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
              Seasoned psychologists and rehabilitation professionals with over 13+ years of clinical excellence in child development, behavioural interventions, and holistic pediatric rehabilitation.
            </p>
          </div>

          {/* 2 Founder Profile Cards Grid (2 Columns on Desktop, 1 on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 mb-10 sm:mb-12">
            {FOUNDERS_INFO.map((founder) => (
              <div
                key={founder.id}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Profile Header: Photo + Name/Role */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-6 pb-6 border-b border-slate-100 text-center sm:text-left">
                    {/* Portrait Photo with Rounded Frame */}
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 shadow-md border-4 border-white bg-slate-50">
                      <Image
                        src={founder.image}
                        alt={`${founder.name} - ${founder.role} at Be Smile`}
                        fill
                        priority
                        sizes="(max-width: 640px) 144px, 160px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full text-[9.5px] font-bold text-[#102A5C] shadow-2xs">
                        {founder.experience}
                      </div>
                    </div>

                    {/* Name, Designation & Role */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase mb-2 border shadow-2xs"
                        style={{
                          backgroundColor: `${founder.accentColor}12`,
                          borderColor: `${founder.accentColor}30`,
                          color: founder.accentColor,
                        }}
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>{founder.role}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-[#102A5C] tracking-tight mb-1">
                        {founder.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-bold text-[#7A43D8] mb-1">
                        {founder.title}
                      </p>

                      <p className="text-xs text-slate-500 font-medium">
                        Be Smile Child Development &amp; Rehabilitation Center, Pune
                      </p>

                      {/* Contact Badges */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-3">
                        {founder.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s+/g, "")}`}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-[11px] font-bold text-[#102A5C] border border-slate-200/80 transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#00A3E0]" />
                            <span>{phone}</span>
                          </a>
                        ))}
                        <a
                          href={`mailto:${founder.email}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-[11px] font-bold text-[#102A5C] border border-slate-200/80 transition-colors"
                        >
                          <Mail className="w-3 h-3 text-[#7A43D8]" />
                          <span>{founder.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Personal Philosophy Quote */}
                  <div className="w-full bg-[#F0FCFD]/50 rounded-2xl p-4 mb-5 border border-[#E0F8FB] flex gap-3 items-start">
                    <Quote className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5 fill-[#00A3E0]/20" />
                    <p className="text-xs sm:text-[13.5px] text-slate-700 italic font-normal leading-relaxed">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </div>

                  {/* About Paragraph */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-relaxed mb-5">
                    {founder.about}
                  </p>

                  {/* Education & Qualifications */}
                  <div className="mb-5 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#102A5C] uppercase tracking-wider mb-2">
                      <GraduationCap className="w-4 h-4 text-[#7A43D8]" />
                      <span>Education &amp; Certifications</span>
                    </div>
                    <ul className="space-y-1.5">
                      {founder.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#63C32D] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#102A5C]">{edu.degree}</span>
                            <span className="text-slate-500 font-normal"> — {edu.institution}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Clinical Expertise Tags */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Core Clinical Expertise:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.coreExpertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F7F4FD] text-[#7A43D8] border border-purple-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 13+ Years Healthcare & Rehabilitation Settings Summary Banner */}
          <div className="w-full bg-gradient-to-r from-[#F0FCFD] via-white to-[#F7F4FD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A3E0] uppercase tracking-wider mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>EXTENSIVE CLINICAL BACKGROUND</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#102A5C] mb-1.5">
                  13+ Years of Professional Healthcare &amp; Rehabilitation Practice
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our clinical directors bring comprehensive multi-setting experience serving children, parents, and schools with evidence-informed rehabilitation protocols.
                </p>
              </div>

              {/* Badges of practice settings */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 max-w-xl">
                {[
                  "Child Development Centres",
                  "Multispecialty Hospitals",
                  "Pediatric Hospitals",
                  "Rehabilitation Centres",
                  "Special Schools",
                  "Clinics & Private Healthcare",
                ].map((setting, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B9C3]" />
                    <span>{setting}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. TWO HIGHLIGHT CARDS: WHY STARTED & OUR PURPOSE        */}
      {/* ======================================================== */}
      <section className="py-4 sm:py-6">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Why Be Smile Was Started */}
            <div className="bg-white/90 backdrop-blur-xs border border-[#E0F5F7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#102A5C] tracking-tight mb-1.5">
                Why Be Smile Was Started
              </h3>
              <div className="w-10 h-0.5 bg-[#10B9C3] rounded-full mb-3.5" />
              <p className="text-xs sm:text-[14px] text-slate-600 font-normal leading-relaxed">
                Be Smile was founded with a simple belief &ndash; every child deserves a chance to
                learn, grow and shine. We recognized the need for a dedicated center that offers
                comprehensive, evidence-based therapies under one roof, with a focus on
                personalized care and family involvement.
              </p>
            </div>

            {/* Card 2: Our Purpose */}
            <div className="bg-white/90 backdrop-blur-xs border border-[#E0F5F7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#102A5C] tracking-tight mb-1.5">
                Our Purpose
              </h3>
              <div className="w-10 h-0.5 bg-[#10B9C3] rounded-full mb-3.5" />
              <p className="text-xs sm:text-[14px] text-slate-600 font-normal leading-relaxed">
                To empower children with developmental needs by providing high-quality, holistic
                and personalized therapy services, and to support families in their journey
                towards a brighter, more independent future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OUR MISSION, VISION & VALUES                          */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          {/* Section Heading */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#102A5C] tracking-tight mb-1.5">
              Our Mission, Vision &amp; Values
            </h2>
            <div className="w-14 h-0.5 bg-[#10B9C3] rounded-full" />
          </div>

          {/* 3 Horizontal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* 1. Our Mission */}
            <div className="bg-white/90 backdrop-blur-xs border border-[#B4EFF3]/80 rounded-2xl p-6 flex items-center gap-4 shadow-xs hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-[#E0F9FB] flex items-center justify-center shrink-0 border border-[#B4EFF3] transition-transform duration-300 group-hover:scale-105">
                <Target className="w-6 h-6 text-[#00A3E0]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#102A5C] mb-1">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  To provide high-quality, evidence-based therapy and support in a nurturing
                  environment.
                </p>
              </div>
            </div>

            {/* 2. Our Vision */}
            <div className="bg-white/90 backdrop-blur-xs border border-[#E3D7FC]/80 rounded-2xl p-6 flex items-center gap-4 shadow-xs hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-[#F1EBFC] flex items-center justify-center shrink-0 border border-[#E3D7FC] transition-transform duration-300 group-hover:scale-105">
                <Eye className="w-6 h-6 text-[#7A43D8]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#102A5C] mb-1">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  To create a world where every child is empowered to reach their full potential.
                </p>
              </div>
            </div>

            {/* 3. Our Values */}
            <div className="bg-white/90 backdrop-blur-xs border border-[#D1F2C2]/80 rounded-2xl p-6 flex items-center gap-4 shadow-xs hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-[#E7F8E2] flex items-center justify-center shrink-0 border border-[#D1F2C2] transition-transform duration-300 group-hover:scale-105">
                <Gem className="w-6 h-6 text-[#63C32D]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#102A5C] mb-1">
                  Our Values
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Compassion, Inclusion, Professionalism, Continuous Learning and Child-Centered
                  Care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WHAT WE DO SECTION                                    */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-10">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column: Heading, Text & Outline Button */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="mb-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#102A5C] tracking-tight mb-1.5">
                  What We Do
                </h2>
                <div className="w-12 h-0.5 bg-[#10B9C3] rounded-full" />
              </div>

              <p className="text-xs sm:text-[14px] text-slate-600 font-normal leading-relaxed mb-6 max-w-xl">
                We offer a range of specialized therapies and support programs designed to address
                each child&apos;s unique needs. Our multidisciplinary team works closely with
                children and families to create personalized plans that focus on skill development,
                independence and confidence.
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#10B9C3] text-[#00A3E0] hover:bg-[#10B9C3] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <span>Learn More About Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: 2x2 Feature Items with Vertical Divider */}
            <div className="lg:col-span-6 lg:border-l lg:border-slate-200/80 lg:pl-10 xl:pl-14">
              <div className="grid grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6 items-center">
                {/* 1. Therapy Services */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-12 h-12 rounded-full bg-[#E0F8FB] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#B4EFF3]/50">
                    <MessageCircle className="w-5 h-5 text-[#00A3E0]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#102A5C]">
                    Therapy Services
                  </span>
                </div>

                {/* 2. Family Support */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-12 h-12 rounded-full bg-[#F1EBFC] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#E3D7FC]/50">
                    <Users className="w-5 h-5 text-[#7A43D8]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#102A5C]">
                    Family Support
                  </span>
                </div>

                {/* 3. Individualized Programs */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-12 h-12 rounded-full bg-[#E7F8E8] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#D1F2C2]/50">
                    <FileText className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#102A5C]">
                    Individualized Programs
                  </span>
                </div>

                {/* 4. Progress Tracking */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 border border-[#BAE6FD]/50">
                    <BarChart3 className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#102A5C]">
                    Progress Tracking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. STATS BAR (Rounded Ice-Blue Card Container)           */}
      {/* ======================================================== */}
      <section className="py-4 sm:py-6">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="w-full bg-gradient-to-r from-[#EBF8FA] via-[#E4F7FA] to-[#EBF8FA] rounded-2xl py-6 px-4 sm:px-8 border border-[#10B9C3]/25 shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-4 md:divide-x md:divide-[#10B9C3]/20">
              {/* Stat 1: 500+ */}
              <div className="flex flex-col items-center text-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                  500+
                </span>
                <span className="text-xs font-medium text-slate-600">
                  Children Supported
                </span>
              </div>

              {/* Stat 2: 15+ */}
              <div className="flex flex-col items-center text-center pt-2 md:pt-0">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                  15+
                </span>
                <span className="text-xs font-medium text-slate-600">
                  Therapy Programs
                </span>
              </div>

              {/* Stat 3: 10+ */}
              <div className="flex flex-col items-center text-center pt-2 md:pt-0">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                  10+
                </span>
                <span className="text-xs font-medium text-slate-600">
                  Years of Experience
                </span>
              </div>

              {/* Stat 4: Happy Families */}
              <div className="flex flex-col items-center text-center pt-2 md:pt-0">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] leading-none mb-1">
                  Happy
                </span>
                <span className="text-xs font-medium text-slate-600">
                  Families
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. OUR APPROACH SECTION                                  */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-12">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="mb-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#102A5C] tracking-tight mb-1.5">
                  Our Approach
                </h2>
                <div className="w-12 h-0.5 bg-[#10B9C3] rounded-full" />
              </div>

              <p className="text-xs sm:text-[14px] text-slate-600 font-normal leading-relaxed max-w-xl">
                We follow a child-centered and family-focused approach that combines
                evidence-based therapies with a supportive and engaging environment. Our team
                of experienced professionals works together to address the physical, cognitive,
                emotional, social and communication needs of each child.
              </p>
            </div>

            {/* Right Column: Wide Block Play Photo */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 border-2 border-white bg-slate-50 group">
                <Image
                  src="/images/about/approach.jpg"
                  alt="Therapist and child building colorful wooden blocks at Be Smile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. BOTTOM CTA WAVY SECTION: LET'S WORK TOGETHER          */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-[#EDF9FB]/90 via-[#E0F7FA] to-[#C9F0F5] text-center">
        {/* Decorative Top Wave Ribbon */}
        <div className="absolute top-0 inset-x-0 overflow-hidden leading-none pointer-events-none">
          <svg
            className="w-full h-8 sm:h-12 md:h-14 block"
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,25 C1200,55 960,10 720,38 C480,60 240,15 0,35 Z"
              fill="#FFFFFF"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 relative z-10">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight mb-2">
            Let&apos;s Work Together
          </h2>

          {/* Subtitles */}
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-1">
            Support Your Child&apos;s Journey Today
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mb-6 sm:mb-8">
            Book an assessment and take the first step towards a brighter future.
          </p>

          {/* Bold Orange Action Button */}
          <div className="flex justify-center">
            <Link
              href="/contact#book-assessment"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFAA18] hover:bg-[#E89608] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Book an Assessment</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
