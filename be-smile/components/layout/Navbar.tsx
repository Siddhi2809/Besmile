"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { NAV_LINKS, BRAND_INFO } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement & Emergency Bar */}
      {/* <div className="bg-[#102A5C] text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <p className="flex items-center gap-2 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#63C32D] animate-ping" />
            <span className="font-medium">Empowering Little Smiles Every Day</span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">{BRAND_INFO.workingHours}</span>
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#10B9C3] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
          isScrolled
            ? "shadow-md shadow-slate-200/50 py-3"
            : "py-4 sm:py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-2xl p-1 bg-white border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/images/logo.png"
                  alt="BE SMILE Logo"
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-contain object-top"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
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

            {/* Right Action: Book Assessment CTA (Orange) */}
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

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="orange"
                size="sm"
                href="/contact#book-assessment"
                className="text-xs px-3 py-1.5 sm:hidden"
              >
                Book
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#102A5C] hover:text-[#10B9C3] hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 pt-4 pb-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-2xl text-base font-semibold flex items-center justify-between ${
                      isActive
                        ? "bg-[#F0FCFD] text-[#10B9C3] font-bold"
                        : "text-[#102A5C] hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#10B9C3]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
              <Button
                variant="orange"
                size="lg"
                href="/contact#book-assessment"
                className="w-full text-center justify-center"
              >
                Book an Assessment
              </Button>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 py-2"
              >
                <Phone className="w-4 h-4 text-[#10B9C3]" />
                <span>Call Us: {BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
