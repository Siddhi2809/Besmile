"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CalendarCheck,
  CheckCircle2,
  Sparkles,
  Send,
  HelpCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { BRAND_INFO, SERVICES } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    service: "speech-therapy",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What happens during the initial developmental assessment?",
      a: "Our clinical team spends 45–60 minutes in interactive, play-based observations with your child, evaluating language, motor skills, sensory responses, and attention. Afterward, we review findings in detail with parents.",
    },
    {
      q: "Do I need a doctor's referral to book an assessment?",
      a: "No prior referral is mandatory. Parents can reach out directly if they notice milestone delays, speech articulation difficulties, or behavioral hurdles.",
    },
    {
      q: "Are parents allowed to accompany the child in therapy rooms?",
      a: "Yes! We strongly encourage parental participation and observation, especially during early sessions, to help children feel relaxed and empower parents with home reinforcement strategies.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F0FCFD] to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B9C3]/30 text-[#079BA5] text-xs sm:text-sm font-bold uppercase mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#FFAA18]" />
            <span>WE ARE HERE FOR YOUR FAMILY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#102A5C] tracking-tight mb-4">
            Get in Touch &amp; <span className="text-[#10B9C3]">Book Assessment</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Take the first step toward your child&apos;s joyful developmental milestones. Reach out directly or submit your appointment request below.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section id="book-assessment" className="py-10 sm:py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="bg-[#F7F3FF]/70 p-5 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] border border-purple-100 shadow-md">
                <h2 className="text-xl sm:text-2xl font-black text-[#102A5C] mb-5 sm:mb-6">
                  Center Information
                </h2>

                <div className="space-y-5 sm:space-y-6 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white text-[#10B9C3] flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#102A5C] text-sm sm:text-base mb-0.5 sm:mb-1">Our Location</div>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{BRAND_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white text-[#FFAA18] flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#102A5C] text-sm sm:text-base mb-0.5 sm:mb-1">Call Us Directly</div>
                      <div className="flex flex-col gap-1 text-xs sm:text-sm">
                        <a href={`tel:${BRAND_INFO.phone}`} className="text-slate-800 font-semibold hover:text-[#10B9C3] transition-colors">
                          {BRAND_INFO.phone} (Darshan Hote)
                        </a>
                        <a href={`tel:${BRAND_INFO.secondaryPhone}`} className="text-slate-600 hover:text-[#10B9C3] transition-colors">
                          {BRAND_INFO.secondaryPhone} (Priti Mankar)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white text-[#7A43D8] flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#102A5C] text-sm sm:text-base mb-0.5 sm:mb-1">Email Inquiries</div>
                      <a href={`mailto:${BRAND_INFO.email}`} className="text-slate-800 font-semibold hover:text-[#10B9C3] transition-colors break-all text-xs sm:text-sm">
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white text-[#63C32D] flex items-center justify-center shrink-0 shadow-xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#102A5C] text-sm sm:text-base mb-0.5 sm:mb-1">Clinic Timings</div>
                      <p className="text-slate-600 leading-relaxed text-xs">{BRAND_INFO.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ Box */}
              <div className="bg-white p-5 sm:p-8 rounded-3xl sm:rounded-[2rem] border border-slate-100 shadow-md">
                <h3 className="text-base sm:text-lg font-bold text-[#102A5C] mb-3.5 sm:mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#10B9C3]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3.5 sm:space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                      <div className="text-xs font-bold text-[#102A5C] mb-1">{faq.q}</div>
                      <p className="text-[11.5px] sm:text-xs text-slate-500 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assessment Booking Form Right */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2.5rem] border border-slate-200/80 shadow-xl">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#FFAA18] tracking-wider mb-2">
                  <CalendarCheck className="w-4 h-4" />
                  <span>ONLINE APPOINTMENT DESK</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#102A5C]">
                  Book an Initial Assessment
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2 font-normal">
                  Fill in your child&apos;s details and our chief pediatric counselor will contact you within 24 hours to confirm your appointment.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-3xl bg-[#F0FCFD] border border-[#B4EFF3] text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#63C32D]/20 text-[#63C32D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#102A5C]">Assessment Request Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.parentName || "Parent"}</strong>. We look forward to meeting <strong>{formData.childName || "your child"}</strong>. Our clinical team will reach out at <strong>{formData.phone}</strong> promptly.
                  </p>
                  <Button
                    variant="orange"
                    size="md"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: "",
                        childName: "",
                        childAge: "",
                        phone: "",
                        email: "",
                        service: "speech-therapy",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Meera Sharma"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#10B9C3] focus:ring-2 focus:ring-[#10B9C3]/20 text-sm font-medium transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Child&apos;s Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#10B9C3] focus:ring-2 focus:ring-[#10B9C3]/20 text-sm font-medium transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Child&apos;s Age *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 4 Years"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#10B9C3] focus:ring-2 focus:ring-[#10B9C3]/20 text-sm font-medium transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#10B9C3] focus:ring-2 focus:ring-[#10B9C3]/20 text-sm font-medium transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="parent@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#10B9C3] focus:ring-2 focus:ring-[#10B9C3]/20 text-sm font-medium transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Service / Therapy Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#10B9C3] focus:ring-2 focus:ring-[#10B9C3]/20 text-sm font-semibold transition-all outline-none text-[#102A5C]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.slug}>
                          {s.title} ({s.badge})
                        </option>
                      ))}
                      <option value="general-assessment">Comprehensive Multi-Disciplinary Screening</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Tell Us What Concerns You Have
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share any developmental observations (speech delay, sensory sensitivities, motor balance, attention span, etc.)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#10B9C3] focus:ring-2 focus:ring-[#10B9C3]/20 text-sm font-medium transition-all outline-none resize-none"
                    />
                  </div>

                  <Button
                    variant="orange"
                    size="lg"
                    type="submit"
                    className="w-full text-center justify-center py-4 text-base font-bold shadow-lg shadow-amber-500/25"
                    rightIcon={<Send className="w-4 h-4 ml-1" />}
                  >
                    Confirm &amp; Book Assessment
                  </Button>

                  <p className="text-[11px] text-slate-400 text-center font-normal pt-1">
                    Your family&apos;s privacy is strictly protected. Information is kept 100% confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
