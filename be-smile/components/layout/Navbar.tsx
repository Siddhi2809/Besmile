"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  CalendarCheck,
  ChevronRight,
  Home,
  HeartHandshake,
  Activity,
  Users,
  Camera,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";
import { NAV_LINKS, BRAND_INFO } from "@/lib/constants";
import Button from "@/components/ui/Button";

const navIcons: Record<string, React.ReactNode> = {
  "/": <Home className="w-4 h-4" />,
  "/about": <HeartHandshake className="w-4 h-4" />,
  "/services": <Activity className="w-4 h-4" />,
  "/team": <Users className="w-4 h-4" />,
  "/gallery": <Camera className="w-4 h-4" />,
  "/contact": <MessageSquare className="w-4 h-4" />,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open and listen for Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${
          isScrolled
            ? "shadow-md shadow-slate-200/50 py-3"
            : "py-3.5 sm:py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative h-11 w-11 sm:h-14 sm:w-14 overflow-hidden rounded-2xl p-1 bg-white border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/images/logo.png"
                  alt="BE SMILE Logo"
                  fill
                  sizes="(max-width: 640px) 44px, 56px"
                  className="object-contain object-top"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#10B9C3]">
                    BE
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#FFAA18]">
                    SMI
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#7A43D8]">
                    LE
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#7A43D8] uppercase -mt-1 hidden sm:block">
                  Child Development & Rehabilitation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-[#10B9C3] bg-[#F0FCFD]"
                        : "text-[#102A5C] hover:text-[#10B9C3] hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#10B9C3]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Book Assessment CTA (Orange on Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="orange"
                size="md"
                href="/contact#book-assessment"
                rightIcon={<CalendarCheck className="w-4 h-4 ml-1" />}
              >
                Book an Assessment
              </Button>
            </div>

            {/* Mobile Actions: Book button + Hamburger Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="orange"
                size="sm"
                href="/contact#book-assessment"
                className="text-xs px-3 py-1.5 sm:hidden font-bold"
              >
                Book
              </Button>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="p-2 rounded-xl text-[#102A5C] hover:text-[#10B9C3] hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Open Navigation Drawer"
                aria-expanded={isDrawerOpen}
              >
                <Menu className="w-6 h-6 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MOBILE SIDE DRAWER & BACKDROP OVERLAY                    */}
      {/* ======================================================== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Side Drawer Panel (Slides in from Right) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-white via-[#F0FCFD]/50 to-white">
          <Link
            href="/"
            onClick={() => setIsDrawerOpen(false)}
            className="flex items-center gap-2.5"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl p-0.5 bg-white border border-slate-100 shadow-2xs">
              <Image
                src="/images/logo.png"
                alt="BE SMILE Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5">
                <span className="text-lg font-black text-[#10B9C3]">BE</span>
                <span className="text-lg font-black text-[#FFAA18]">SMI</span>
                <span className="text-lg font-black text-[#7A43D8]">LE</span>
              </div>
              <span className="text-[8.5px] font-bold text-[#7A43D8] tracking-wider uppercase -mt-0.5">
                Child Development Centre
              </span>
            </div>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
            aria-label="Close Navigation Drawer"
          >
            <X className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Drawer Body - Navigation Links */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1">
          <div className="px-3 pb-2">
            <span className="text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
              Navigation Menu
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const Icon = navIcons[link.href] || <ChevronRight className="w-4 h-4" />;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`px-3.5 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-all duration-200 ${
                    isActive
                      ? "bg-[#10B9C3]/10 text-[#00A3E0] shadow-2xs border border-[#10B9C3]/20"
                      : "text-[#102A5C] hover:bg-slate-50 hover:text-[#00A3E0]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                        isActive
                          ? "bg-[#00A3E0] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {Icon}
                    </span>
                    <span>{link.label}</span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#00A3E0] translate-x-0.5" : "text-slate-300"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Clinic Hours & Address Snippet */}
          <div className="mt-5 p-3.5 rounded-2xl bg-[#F0FCFD]/80 border border-[#10B9C3]/20 space-y-2 text-xs">
            <div className="flex items-start gap-2 text-slate-700">
              <Clock className="w-3.5 h-3.5 text-[#00A3E0] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium leading-tight">
                Mon – Sat: 8:30 AM – 7:30 PM
              </span>
            </div>
            <div className="flex items-start gap-2 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#7A43D8] shrink-0 mt-0.5" />
              <span className="text-[11px] font-medium leading-tight">
                Pimple Nilakh, Pune
              </span>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-white space-y-2.5">
          <Button
            variant="orange"
            size="md"
            href="/contact#book-assessment"
            onClick={() => setIsDrawerOpen(false)}
            showArrow
            className="w-full text-center justify-center font-bold shadow-md shadow-[#FFAA18]/25 py-3 text-xs sm:text-sm"
          >
            Book Assessment
          </Button>

          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="flex items-center justify-center gap-2 text-xs font-bold text-[#102A5C] hover:text-[#00A3E0] py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>Call: {BRAND_INFO.phone}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
