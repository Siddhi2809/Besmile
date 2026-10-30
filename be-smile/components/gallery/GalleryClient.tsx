"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export type CategoryType =
  | "All"
  | "Our Centre"
  | "Therapy Sessions"
  | "Activities"
  | "Events"
  | "Team"
  | "Facilities";

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: "Our Centre" | "Therapy Sessions" | "Activities" | "Events" | "Team" | "Facilities";
  image: string;
}

const CATEGORIES: CategoryType[] = [
  "All",
  "Our Centre",
  "Therapy Sessions",
  "Activities",
  "Events",
  "Team",
  "Facilities",
];

const GALLERY_PHOTOS: GalleryPhoto[] = [
  // --- ROW 1 (3 Items: Wide Aspect) ---
  {
    id: "reception",
    title: "Reception & Welcome Lounge",
    subtitle: "Warm, child-friendly check-in area",
    category: "Our Centre",
    image: "/images/gallery/reception.jpg",
  },
  {
    id: "therapy-rings",
    title: "1-on-1 Cognitive Therapy",
    subtitle: "Joyful milestone development",
    category: "Therapy Sessions",
    image: "/images/gallery/therapy-rings.jpg",
  },
  {
    id: "sensory-gym-swings",
    title: "Sensory Integration Gym",
    subtitle: "Specialized swings & motor mats",
    category: "Facilities",
    image: "/images/gallery/sensory-swings.jpg",
  },

  // --- ROW 2 (4 Items) ---
  {
    id: "fine-motor-pegboard",
    title: "Fine Motor Training",
    subtitle: "Hand dexterity & coordination",
    category: "Therapy Sessions",
    image: "/images/gallery/fine-motor.jpg",
  },
  {
    id: "classroom-learning",
    title: "Activity & Learning Room",
    subtitle: "Safe, child-sized group space",
    category: "Facilities",
    image: "/images/gallery/classroom.jpg",
  },
  {
    id: "stepping-stones",
    title: "Balance & Gait Therapy",
    subtitle: "Step-by-step motor agility",
    category: "Therapy Sessions",
    image: "/images/gallery/stepping-stones.jpg",
  },
  {
    id: "events-celebration",
    title: "Centre Celebrations",
    subtitle: "Milestone triumphs & festivals",
    category: "Events",
    image: "/images/gallery/group-activities.jpg",
  },

  // --- ROW 3 (4 Items) ---
  {
    id: "outdoor-play-lawn",
    title: "Outdoor Play Space",
    subtitle: "Fresh air sensory exploration",
    category: "Facilities",
    image: "/images/gallery/outdoor-play.jpg",
  },
  {
    id: "activities-puzzle",
    title: "Activities",
    subtitle: "Learning through fun activities",
    category: "Activities",
    image: "/images/gallery/play-area.jpg",
  },
  {
    id: "speech-articulation",
    title: "Speech & Language Room",
    subtitle: "Phonics & expressive articulation",
    category: "Therapy Sessions",
    image: "/images/gallery/speech-therapy.jpg",
  },
  {
    id: "physio-climbing-gym",
    title: "Physiotherapy & Mobility",
    subtitle: "Strengthening core balance",
    category: "Facilities",
    image: "/images/gallery/physio-gym.jpg",
  },

  // --- ROW 4 (4 Items) ---
  {
    id: "clinical-specialists-team",
    title: "Specialist Clinical Team",
    subtitle: "Certified pediatric therapists",
    category: "Team",
    image: "/images/gallery/clinical-team.jpg",
  },
  {
    id: "block-tower-building",
    title: "Spatial & Block Play",
    subtitle: "Focus, balance & creativity",
    category: "Activities",
    image: "/images/gallery/special-ed-learning.jpg",
  },
  {
    id: "centre-corridor-murals",
    title: "Centre Hallways & Murals",
    subtitle: "Cheerful, hygienic environment",
    category: "Our Centre",
    image: "/images/gallery/consultation-room.jpg",
  },
  {
    id: "creative-finger-arts",
    title: "Creative Sensory Arts",
    subtitle: "Tactile play & artistic expression",
    category: "Activities",
    image: "/images/gallery/creative-arts.jpg",
  },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered Photos
  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredPhotos.length : 0
      );
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
          : 0
      );
    }
  }, [lightboxIndex, filteredPhotos.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  // Render individual gallery photo item
  const renderPhotoCard = (photo: GalleryPhoto, index: number) => {
    const isSpecialHighlight = photo.id === "activities-puzzle";

    return (
      <div
        key={photo.id}
        onClick={() => openLightbox(index)}
        className="group relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100 bg-slate-100"
      >
        <Image
          src={photo.image}
          alt={photo.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
        />

        {/* Floating Category Tag for quick glance */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md text-[9.5px] sm:text-[11px] font-bold text-slate-800 shadow-2xs border border-white/60 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
          {photo.category}
        </div>

        {/* Hover / Active Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent flex flex-col justify-end p-2.5 sm:p-5 transition-opacity duration-300 ${
            isSpecialHighlight ? "opacity-90" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="flex items-end justify-between gap-2 sm:gap-3">
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[11px] font-bold tracking-wider text-[#00A3E0] uppercase mb-0.5 block truncate">
                {photo.category}
              </span>
              <h3 className="text-white text-xs sm:text-base lg:text-lg font-bold leading-tight drop-shadow-xs truncate">
                {photo.title}
              </h3>
              <p className="text-white/80 text-[10px] sm:text-xs leading-snug line-clamp-1 mt-0.5 hidden sm:block">
                {photo.subtitle}
              </p>
            </div>

            {/* Circular Zoom Button */}
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 active:scale-95 transition-transform duration-200">
              <ZoomIn className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-800" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-b from-[#F1FBFC] via-[#FCFEFE] via-20% via-[#F8F5FE]/60 via-60% to-[#EAF8FA] relative overflow-hidden">
      {/* Soft Ambient Floating Glow Mists */}
      <div className="absolute top-20 -left-28 w-[550px] h-[550px] rounded-full bg-[#10B9C3]/8 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[500px] -right-28 w-[600px] h-[600px] rounded-full bg-[#7A43D8]/6 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[1200px] left-10 w-[550px] h-[550px] rounded-full bg-[#FFAA18]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-10 w-[600px] h-[600px] rounded-full bg-[#10B9C3]/8 blur-[130px] pointer-events-none -z-10" />

      {/* ======================================================== */}
      {/* 1. HERO BANNER & BREADCRUMB (Exact Mockup Match)         */}
      {/* ======================================================== */}
      <section className="relative w-full pt-10 sm:pt-12 md:pt-14 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          {/* Breadcrumb: Home > Gallery */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] font-medium text-slate-500 mb-4 tracking-wide"
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-[#10B9C3] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-slate-300 select-none text-xs">&gt;</span>
            <span className="text-[#102A5C] font-semibold">Gallery</span>
          </nav>

          {/* Main Title: Gallery with Purple "ery" */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#102A5C] tracking-tight leading-[1.15] mb-3">
            Gall<span className="text-[#7A43D8]">ery</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto pb-6 sm:pb-8">
            A glimpse into our centre, activities, therapy spaces and the moments
            that make Be Smile special.
          </p>
        </div>

        {/* Refined Layered Soft Turquoise Organic Wave Ribbon */}
        <div className="w-full overflow-hidden leading-none relative -mb-1 pointer-events-none select-none">
          <svg
            className="w-full h-10 sm:h-14 md:h-18 lg:h-20 block"
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
      {/* 2. CATEGORY PILL FILTER TABS                             */}
      {/* ======================================================== */}
      <section className="py-4 sm:py-8">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#00A3E0] text-white shadow-md shadow-[#00A3E0]/30 scale-105"
                      : "bg-white hover:bg-slate-50 text-slate-700 hover:text-[#00A3E0] border border-slate-200/80 shadow-2xs hover:border-[#00A3E0]/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. GALLERY MOSAIC GRID (2-Columns on Mobile, 4 on Desktop) */}
      {/* ======================================================== */}
      <section className="pb-12 sm:pb-16 md:pb-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          {activeCategory === "All" ? (
            // Exact Mosaic layout with 2-Cols on Mobile
            <div className="space-y-3 sm:space-y-5 lg:space-y-6">
              {/* Row 1: 3 Cards (2-Cols on Mobile, 3rd card full-width on mobile) */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
                {GALLERY_PHOTOS.slice(0, 3).map((photo, i) => (
                  <div key={photo.id} className={i === 2 ? "col-span-2 md:col-span-1" : ""}>
                    {renderPhotoCard(photo, i)}
                  </div>
                ))}
              </div>

              {/* Row 2: 4 Cards (2x2 on Mobile, 4 on Desktop) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                {GALLERY_PHOTOS.slice(3, 7).map((photo, i) =>
                  renderPhotoCard(photo, 3 + i)
                )}
              </div>

              {/* Row 3: 4 Cards (2x2 on Mobile, 4 on Desktop) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                {GALLERY_PHOTOS.slice(7, 11).map((photo, i) =>
                  renderPhotoCard(photo, 7 + i)
                )}
              </div>

              {/* Row 4: 4 Cards (2x2 on Mobile, 4 on Desktop) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                {GALLERY_PHOTOS.slice(11, 15).map((photo, i) =>
                  renderPhotoCard(photo, 11 + i)
                )}
              </div>
            </div>
          ) : (
            // Dynamic Grid for Filtered Items (2-Cols on Mobile)
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
              {filteredPhotos.map((photo, i) => renderPhotoCard(photo, i))}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BOTTOM BANNER CARD: VISIT OUR CENTRE TODAY (Exact)    */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative w-full bg-[#EAF8FA] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#10B9C3]/20 shadow-md shadow-slate-200/50 p-6 sm:p-8 lg:p-10">
            {/* Background layered organic wave decor in bottom corners */}
            <div className="absolute -bottom-6 -left-6 w-80 h-32 pointer-events-none opacity-40">
              <svg viewBox="0 0 300 100" fill="none">
                <path
                  d="M0,60 C80,20 160,80 300,40 L300,100 L0,100 Z"
                  fill="#10B9C3"
                />
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 w-80 h-32 pointer-events-none opacity-40">
              <svg viewBox="0 0 300 100" fill="none">
                <path
                  d="M0,40 C140,80 220,20 300,60 L300,100 L0,100 Z"
                  fill="#7A43D8"
                />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Left Column: Heading, Eyebrow & Subtitle */}
              <div className="max-w-2xl text-left">
                {/* Eyebrow */}
                <div className="mb-2">
                  <span className="text-xs font-bold text-[#00A3E0] tracking-[0.2em] uppercase">
                    SEE THE BE SMILE DIFFERENCE
                  </span>
                  <div className="w-10 h-0.5 bg-[#00A3E0] rounded-full mt-1" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight leading-snug mb-1.5">
                  Visit Our Centre{" "}
                  <span className="text-[#7A43D8]">Today</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Book an assessment and experience a supportive environment
                  designed around every child.
                </p>
              </div>

              {/* Right Column: Orange Pill Action Button */}
              <div className="shrink-0 flex items-center">
                <Link
                  href="/contact#book-assessment"
                  className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#FFAA18] hover:bg-[#E89608] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Book an Assessment</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. LIGHTBOX MODAL POPUP                                  */}
      {/* ======================================================== */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-colors z-50 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Photo Info Bar Below */}
            <div className="mt-4 text-center text-white">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#00A3E0]/20 border border-[#00A3E0]/40 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-1.5">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {filteredPhotos[lightboxIndex].title}
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-0.5">
                {filteredPhotos[lightboxIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
