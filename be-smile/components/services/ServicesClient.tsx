"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Hand,
  Brain,
  Activity,
  BookOpen,
  Users,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Smile,
  LineChart,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Phone,
  MapPin,
  Flame,
  Filter,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";

export interface ServiceItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  subDescription?: string;
  image: string;
  accentColor: string;
  iconBg: string;
  iconBorder: string;
  icon: React.ReactNode;
  highlightsTitle: string;
  highlights: string[];
  learnMoreHref: string;
}

const SERVICES_DATA: ServiceItem[] = [
  // 1. Developmental Assessments
  {
    id: "developmental-assessments",
    number: "01",
    badge: "DEVELOPMENTAL SCREENINGS & MILESTONES (0–15 YRS)",
    title: "Developmental Assessments",
    tagline:
      "Comprehensive diagnostic screening to understand your child's cognitive, physical, and emotional profile from ages 0 to 15.",
    description:
      "Every child develops at their own unique pace. Our clinical developmental assessment is the essential first step to accurately identify milestone achievements, recognize developmental delays, and formulate a targeted, personalized care plan. Our experienced pediatric psychologists and specialists evaluate your child in a supportive, play-infused environment where they feel completely comfortable.",
    subDescription:
      "Our detailed assessment reports give parents clear milestone tracking, objective developmental scoring, and coordinated recommendations for schools and pediatricians.",
    image: "/images/gallery/consultation-room.jpg",
    accentColor: "#00A3E0",
    iconBg: "bg-[#E0F8FB]",
    iconBorder: "border-[#B4EFF3]",
    icon: <ClipboardCheck className="w-4 h-4 text-[#00A3E0]" />,
    highlightsTitle: "Comprehensive Assessment Services Include:",
    highlights: [
      "Developmental screening (0–15 years)",
      "Milestone tracking & progress evaluation",
      "Cognitive, social, and emotional assessment",
      "School-readiness & academic evaluation",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 2. Paediatric Physiotherapy
  {
    id: "paediatric-physiotherapy",
    number: "02",
    badge: "GROSS MOTOR SKILLS, MOBILITY & POSTURE",
    title: "Paediatric Physiotherapy",
    tagline:
      "Strengthening muscles, refining posture, and helping children achieve physical milestones with balance and agility.",
    description:
      "Gross motor coordination is the foundation for an active, joyful childhood. Our pediatric physiotherapists evaluate and address motor milestone delays, muscle tone challenges (hypotonia or hypertonia), poor balance, and gait irregularities. Through playful movement circuits, therapeutic gym balls, posture alignment exercises, and balance beams, we help children achieve physical milestones at their own pace.",
    subDescription:
      "From crawling and first steps to running and jumping, we support each child's physical development with safe, encouraging, and evidence-based guidance.",
    image: "/images/services/physio.jpg",
    accentColor: "#10B981",
    iconBg: "bg-[#E7F8EE]",
    iconBorder: "border-[#D1F2C2]",
    icon: <Activity className="w-4 h-4 text-[#10B981]" />,
    highlightsTitle: "Physiotherapy Clinical Focus Areas:",
    highlights: [
      "Gross motor skill development",
      "Balance & coordination training",
      "Strengthening & endurance exercises",
      "Therapy for delayed motor milestones",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 3. Occupational Therapy
  {
    id: "occupational-therapy",
    number: "03",
    badge: "FINE MOTOR, SENSORY & DAILY LIVING",
    title: "Occupational Therapy",
    tagline:
      "Empowering children to master daily routines, regulate sensory responses, and build self-reliant independence.",
    description:
      "Everyday activities—like writing, buttoning clothes, eating independently, or playing with friends—rely on a complex balance of sensory processing and motor coordination. Our specialized Occupational Therapy program helps children overcome sensory sensitivities, improve fine motor dexterity, and build body awareness. Inside our modern sensory gym equipped with therapeutic swings, tactile paths, and balance courses, children gain the physical and emotional regulation needed to thrive.",
    subDescription:
      "Our therapists help turn everyday challenges into proud achievements, fostering self-esteem and independence step by step in school and home settings.",
    image: "/images/services/ot.jpg",
    accentColor: "#7A43D8",
    iconBg: "bg-[#F1EBFC]",
    iconBorder: "border-[#E3D7FC]",
    icon: <Hand className="w-4 h-4 text-[#7A43D8]" />,
    highlightsTitle: "Occupational Therapy Focus Areas:",
    highlights: [
      "Motor skill development (Fine & Gross)",
      "Handwriting & pencil grip improvement",
      "Sensory integration therapy",
      "Activities of daily living (ADL) training",
      "Attention & concentration improvement",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 4. Behavioural & Psychological Services
  {
    id: "behavioural-psychological-services",
    number: "04",
    badge: "EMOTIONAL REGULATION, CBT & PSYCHOLOGY",
    title: "Behavioural & Psychological Services",
    tagline:
      "Fostering positive habits, emotional calm, and cooperative social relationships through compassionate therapy.",
    description:
      "Children often communicate unmet needs, anxiety, or developmental frustrations through challenging behaviors—such as intense tantrums, difficulty focusing, or social hesitation. Our pediatric behavioural therapy team uses proven, gentle interventions, positive reinforcement, and Applied Behavior Analysis (ABA) principles to guide children toward healthy emotional expression. We work closely alongside parents to create nurturing routines that replace frustration with understanding.",
    subDescription:
      "We provide specialized ADHD and Autism support programs that strengthen social engagement, attention span, and cooperative family routines.",
    image: "/images/services/behavioral.jpg",
    accentColor: "#EA580C",
    iconBg: "bg-[#FFF0E6]",
    iconBorder: "border-[#FFD9C2]",
    icon: <Brain className="w-4 h-4 text-[#EA580C]" />,
    highlightsTitle: "Behavioural & Psychological Support Includes:",
    highlights: [
      "Behavioural modification therapy",
      "Cognitive Behavioural Therapy (CBT)",
      "Child counselling & emotional support",
      "ADHD & Autism support programs",
      "Emotional development & regulation sessions",
      "ABA Sessions & Positive Behaviour Support (PBS)",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 5. Speech & Language Therapy
  {
    id: "speech-language-therapy",
    number: "05",
    badge: "SPEECH CLARITY, LANGUAGE & ORAL MOTOR",
    title: "Speech & Language Therapy",
    tagline:
      "Helping children find their voice, articulate words with clarity, and express thoughts with confidence.",
    description:
      "Clear communication is essential for a child's confidence, emotional expression, and social belonging. At Be Smile, our certified Speech & Language Pathologists work compassionately with children experiencing speech delays, unclear pronunciation, stuttering, and difficulties understanding or forming sentences. Through engaging, play-based oral motor exercises, phonic play, and storytelling, we make speech development a natural, happy journey.",
    subDescription:
      "Whether your child is taking their first words or working through expressive language delays, our customized 1-on-1 sessions ensure steady, noticeable milestone progress.",
    image: "/images/services/speech.jpg",
    accentColor: "#00A3E0",
    iconBg: "bg-[#E0F8FB]",
    iconBorder: "border-[#B4EFF3]",
    icon: <MessageCircle className="w-4 h-4 text-[#00A3E0]" />,
    highlightsTitle: "Speech Therapy Clinical Focus Areas:",
    highlights: [
      "Speech clarity & articulation improvement",
      "Language delay therapy & sentence building",
      "Stammering / Stuttering fluency therapy",
      "Social communication & pragmatic skills",
      "Feeding & oral-motor therapy",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 6. Early Intervention Program (EIP)
  {
    id: "early-intervention-program",
    number: "06",
    badge: "CRITICAL FORMATIVE YEARS (AGES 0 TO 6)",
    title: "Early Intervention Program (EIP)",
    tagline:
      "Timely developmental stimulation during the critical formative years when brain neuroplasticity is at its highest.",
    description:
      "The first six years of life represent a unique window of rapid brain development. When developmental delays or milestone gaps are identified and nurtured early, a child's future learning trajectory can be dramatically transformed. Our Early Intervention program combines multisensory stimulation, motor play, communication encouragement, and cognitive games to support children facing early delays. We guide parents every step of the way, creating a supportive bridge between therapy and home.",
    subDescription:
      "Early action creates lifelong positive outcomes, ensuring your little one gets the absolute best start in life with confidence and joy.",
    image: "/images/services/early-intervention.jpg",
    accentColor: "#7A43D8",
    iconBg: "bg-[#F1EBFC]",
    iconBorder: "border-[#E3D7FC]",
    icon: <Users className="w-4 h-4 text-[#7A43D8]" />,
    highlightsTitle: "Early Intervention Focus Areas:",
    highlights: [
      "Early stimulation activities & neurodevelopment",
      "Play-based sensory & motor learning",
      "Parent guidance & home routine integration",
      "Educational readiness & developmental support",
      "Comprehensive therapeutic clinical services",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 7. Special Education
  {
    id: "special-education",
    number: "07",
    badge: "INDIVIDUALIZED EDUCATION PLANS (IEP)",
    title: "Special Education & Remedial Learning",
    tagline:
      "Individualized academic learning programs that adapt to your child's unique cognitive pace and learning style.",
    description:
      "Every child learns differently, and traditional classroom settings don't always accommodate diverse learning curves. Our Special Education team crafts structured Individualized Education Plans (IEPs) that break reading, writing, comprehension, and math into multisensory, easy-to-grasp concepts. Whether addressing ADHD, Dyslexia, slow processing, or general academic delays, we celebrate neurodiversity and equip every child with the tools and self-belief they need.",
    subDescription:
      "We bridge academic gaps with patience and multisensory techniques, turning learning anxiety into a rewarding sense of personal achievement.",
    image: "/images/services/special-ed.jpg",
    accentColor: "#0284C7",
    iconBg: "bg-[#E0F2FE]",
    iconBorder: "border-[#BAE6FD]",
    icon: <BookOpen className="w-4 h-4 text-[#0284C7]" />,
    highlightsTitle: "Special Education Academic Focus Areas:",
    highlights: [
      "Individualized Education Plans (IEP) per child",
      "Academic skill training (Reading, Writing, Math)",
      "Learning disability support (Dyslexia, Dysgraphia, Dyscalculia)",
      "Cognitive reasoning, memory & conceptual logic",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 8. Sensory Integration Therapy
  {
    id: "sensory-integration-therapy",
    number: "08",
    badge: "SENSORY PROCESSING & REGULATION",
    title: "Sensory Integration Therapy",
    tagline:
      "Helping children process sights, sounds, textures, and balance to feel calm, organized, and focused.",
    description:
      "Sensory processing differences can cause a child to feel overwhelmed by loud noises, avoid touch, crave excessive spinning, or struggle to sit still. In our specialized sensory integration gym—equipped with vestibular swings, tactile tunnels, weighted tools, and dynamic balance courses—our therapists guide children through tailored sensory diets. This regulates the nervous system, decreases sensory meltdowns, and enhances attention.",
    subDescription:
      "A well-regulated sensory system unlocks a child's natural ability to learn, socialize, and explore their environment fearlessly.",
    image: "/images/gallery/sensory-swings.jpg",
    accentColor: "#FFAA18",
    iconBg: "bg-[#FFF6E5]",
    iconBorder: "border-[#FFE5B4]",
    icon: <Sparkles className="w-4 h-4 text-[#FFAA18]" />,
    highlightsTitle: "Sensory Room Interventions Include:",
    highlights: [
      "Sensory room intervention & tailored diets",
      "Regulation of sensory processing & vestibular balance",
      "Activities to improve attention & behaviour",
      "Tactile desensitization & emotional calming",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 9. Group Therapy Programs
  {
    id: "group-therapy-programs",
    number: "09",
    badge: "PEER INTERACTION & SOCIAL SKILLS",
    title: "Group Therapy Programs",
    tagline:
      "Guided small-group activities that foster cooperative play, peer friendships, and joyful communication.",
    description:
      "Translating one-on-one therapy progress into natural social environments is a critical milestone for growing children. Our small, therapist-facilitated group programs provide a safe, structured setting where children practice turn-taking, cooperative play, active listening, and social problem-solving. Through shared games, art projects, and circle time, children build genuine peer bonds and confidence.",
    subDescription:
      "Our parent-child bonding groups also nurture secure attachment, mutual understanding, and shared moments of joy.",
    image: "/images/gallery/group-activities.jpg",
    accentColor: "#10B981",
    iconBg: "bg-[#E7F8EE]",
    iconBorder: "border-[#D1F2C2]",
    icon: <HeartHandshake className="w-4 h-4 text-[#10B981]" />,
    highlightsTitle: "Group Program Focus Areas:",
    highlights: [
      "Social skills groups & conversation circles",
      "Activity-based learning & collaborative games",
      "Parent-child bonding & interaction sessions",
      "Peer empathy, sharing & conflict resolution",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 10. Workshops & Parent Training
  {
    id: "workshops-parent-training",
    number: "10",
    badge: "FAMILY EMPOWERMENT & EDUCATION",
    title: "Workshops & Parent Training",
    tagline:
      "Empowering parents, caregivers, and educators with practical therapeutic knowledge and home strategies.",
    description:
      "Parents are a child's most influential and enduring advocates. We conduct structured parent training workshops, developmental awareness camps, and school collaboration programs to bridge the gap between clinic sessions and everyday life. We teach practical behavior management, sensory calming techniques, speech stimulation tips, and milestone identification.",
    subDescription:
      "We partner with local schools and preschool teachers to create inclusive, supportive classroom environments for every student.",
    image: "/images/about/approach.jpg",
    accentColor: "#7A43D8",
    iconBg: "bg-[#F1EBFC]",
    iconBorder: "border-[#E3D7FC]",
    icon: <Compass className="w-4 h-4 text-[#7A43D8]" />,
    highlightsTitle: "Workshops & Community Training Include:",
    highlights: [
      "Parenting guidance programs & home strategies",
      "Developmental awareness camps & screenings",
      "School collaboration workshops & teacher training",
      "Practical behavior management & routine coaching",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 11. Play Therapy
  {
    id: "play-therapy",
    number: "11",
    badge: "EXPRESSIVE & THERAPEUTIC PLAY",
    title: "Play Therapy",
    tagline:
      "Using the universal language of play to help children express emotions, process trauma, and resolve anxieties.",
    description:
      "Play is the natural, spontaneous language of childhood. Through child-centered play therapy, children express feelings, fears, and life events that they may lack the words to talk about. In our thoughtfully curated play therapy room with sand trays, puppets, expressive toys, and art supplies, certified therapists help children work through anxieties, emotional turmoil, grief, and behavioral stress.",
    subDescription:
      "Play therapy fosters emotional healing, self-awareness, problem-solving skills, and a resilient, happy mindset.",
    image: "/images/gallery/play-area.jpg",
    accentColor: "#00A3E0",
    iconBg: "bg-[#E0F8FB]",
    iconBorder: "border-[#B4EFF3]",
    icon: <Smile className="w-4 h-4 text-[#00A3E0]" />,
    highlightsTitle: "Play Therapy Focus Areas:",
    highlights: [
      "Child-led expressive play intervention",
      "Emotional healing & anxiety reduction",
      "Self-discovery & positive self-esteem building",
      "Safe emotional expression through toys & storytelling",
    ],
    learnMoreHref: "/contact#book-assessment",
  },

  // 12. Taekwondo
  {
    id: "taekwondo",
    number: "12",
    badge: "DISCIPLINE, MOTOR COORDINATION & CONFIDENCE",
    title: "Taekwondo & Martial Arts Training",
    tagline:
      "Building physical agility, core discipline, balance, and self-confidence through structured martial arts.",
    description:
      "Taekwondo provides structured physical conditioning that significantly benefits pediatric gross motor planning, core balance, and mental focus. Especially beneficial for children with attention difficulties, low muscle tone, or coordination challenges, our specialized pediatric martial arts sessions combine energetic kicking and blocking drills with mindful discipline, respect, and emotional self-control.",
    subDescription:
      "Children earn badges and belts, experiencing immense pride as their physical strength and mental discipline flourish.",
    image: "/images/gallery/stepping-stones.jpg",
    accentColor: "#FFAA18",
    iconBg: "bg-[#FFF6E5]",
    iconBorder: "border-[#FFE5B4]",
    icon: <Flame className="w-4 h-4 text-[#FFAA18]" />,
    highlightsTitle: "Taekwondo Training Benefits:",
    highlights: [
      "Gross motor discipline, agility & posture training",
      "Focus, concentration & self-control enhancement",
      "Balance, core physical strength & body coordination",
      "Confidence, self-defense & achievement mindset",
    ],
    learnMoreHref: "/contact#book-assessment",
  },
];

const CARE_STEPS = [
  {
    step: "01",
    title: "Comprehensive Assessment",
    description:
      "We begin with a detailed developmental screening evaluating speech, sensory, motor, and cognitive milestones.",
    icon: <ClipboardCheck className="w-5 h-5 text-[#00A3E0]" />,
    accent: "#00A3E0",
    bg: "bg-[#E0F8FB]",
  },
  {
    step: "02",
    title: "Customized Care Plan (IEP)",
    description:
      "Our multidisciplinary specialists design clear, measurable developmental goals personalized to your child's pace.",
    icon: <Compass className="w-5 h-5 text-[#7A43D8]" />,
    accent: "#7A43D8",
    bg: "bg-[#F1EBFC]",
  },
  {
    step: "03",
    title: "Play-Infused 1-on-1 Sessions",
    description:
      "Therapy is delivered in safe, sensory-rich environments where therapeutic milestones feel natural, engaging, and joyful.",
    icon: <Smile className="w-5 h-5 text-[#10B981]" />,
    accent: "#10B981",
    bg: "bg-[#E7F8EE]",
  },
  {
    step: "04",
    title: "Continuous Progress & Guidance",
    description:
      "We provide regular milestone reviews, report cards, and practical home carryover routines for empowering families.",
    icon: <LineChart className="w-5 h-5 text-[#FFAA18]" />,
    accent: "#FFAA18",
    bg: "bg-[#FFF6E5]",
  },
];

export default function ServicesClient() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  // Filtered Services list
  const filteredServices =
    selectedFilter === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((service) => service.id === selectedFilter);

  // Handler for capsule clicks
  const handleCapsuleClick = (id: string) => {
    setSelectedFilter(id);
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedFilter);

  return (
    <div className="min-h-screen text-slate-800 bg-gradient-to-b from-[#F1FBFC] via-[#FCFEFE] via-20% via-[#F8F5FE]/60 via-60% to-[#EAF8FA] relative overflow-hidden">
      {/* Soft Ambient Floating Glow Mists */}
      <div className="absolute top-20 -left-28 w-[550px] h-[550px] rounded-full bg-[#10B9C3]/8 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[500px] -right-28 w-[600px] h-[600px] rounded-full bg-[#7A43D8]/6 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[1200px] left-10 w-[550px] h-[550px] rounded-full bg-[#FFAA18]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 right-10 w-[600px] h-[600px] rounded-full bg-[#10B9C3]/8 blur-[130px] pointer-events-none -z-10" />

      {/* ======================================================== */}
      {/* 1. HERO BANNER - Clean & Uncluttered (Services Removed)  */}
      {/* ======================================================== */}
      <section className="relative w-full pt-8 sm:pt-12 md:pt-14 pb-2 sm:pb-4 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          {/* Breadcrumb: Home > Services */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] font-medium text-slate-500 mb-2 sm:mb-3 tracking-wide"
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-[#10B9C3] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-slate-300 select-none text-xs">&gt;</span>
            <span className="text-[#102A5C] font-semibold">Services</span>
          </nav>

          {/* Slogan Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#00A3E0]/30 text-[#00A3E0] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{BRAND_INFO.slogan}</span>
          </div>

          {/* Main Title: Services */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#102A5C] tracking-tight leading-[1.15] mb-2 sm:mb-3">
            Our Ser<span className="text-[#7A43D8]">vices</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto pb-4">
            Child-centered developmental, therapeutic and rehabilitation services
            crafted to support every child&apos;s growth, independence, and full potential.
          </p>
        </div>

        {/* Refined Layered Soft Turquoise Organic Wave Ribbon */}
        <div className="w-full overflow-hidden leading-none relative -mb-1 pointer-events-none select-none">
          <svg
            className="w-full h-8 sm:h-12 md:h-16 block"
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
      {/* 2. SIMPLE FILTER CAPSULES (No Scrollbar - Simple & Clean) */}
      {/* ======================================================== */}
      <section
        id="services-container"
        ref={servicesSectionRef}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {/* "All Services (12)" Capsule */}
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              selectedFilter === "all"
                ? "bg-[#102A5C] text-white shadow-md shadow-[#102A5C]/25 ring-2 ring-[#00A3E0]"
                : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs hover:border-[#00A3E0]/40"
            }`}
          >
            <Sparkles
              className={`w-3.5 h-3.5 ${
                selectedFilter === "all" ? "text-[#FFAA18]" : "text-slate-400"
              }`}
            />
            <span>All Services</span>
            <span
              className={`text-[11px] px-1.5 py-0.5 rounded-full font-extrabold ${
                selectedFilter === "all"
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              12
            </span>
          </button>

          {/* Individual 12 Service Filter Capsules */}
          {SERVICES_DATA.map((service) => {
            const isActive = selectedFilter === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => handleCapsuleClick(service.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white shadow-md ring-2 ring-white/60"
                    : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs hover:border-[#00A3E0]/40"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: service.accentColor,
                        boxShadow: `0 4px 14px -2px ${service.accentColor}50`,
                      }
                    : {}
                }
              >
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ACTIVE FILTER BANNER (When single service is selected)*/}
      {/* ======================================================== */}
      {selectedFilter !== "all" && selectedService && (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-8">
          <div className="bg-gradient-to-r from-[#F0FCFD] via-white to-[#F9F7FE] rounded-2xl p-3.5 sm:p-4 border border-[#10B9C3]/30 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                style={{ backgroundColor: `${selectedService.accentColor}20` }}
              >
                {selectedService.icon}
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Currently Viewing
                </p>
                <h3 className="text-sm sm:text-base font-extrabold text-[#102A5C]">
                  {selectedService.number}. {selectedService.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => setSelectedFilter("all")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#102A5C] hover:bg-[#00A3E0] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Show All 12 Services</span>
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. ZIG-ZAG ALTERNATING SERVICES LIST                     */}
      {/* ======================================================== */}
      <section className="py-8 sm:py-12 md:py-14">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-14 sm:space-y-18 md:space-y-20">
          {filteredServices.map((service, index) => {
            // isEven determines alternating layout:
            // true -> Photo Left, Info Right
            // false -> Info Left, Photo Right
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center scroll-mt-36 ${
                  index !== filteredServices.length - 1
                    ? "pb-14 sm:pb-18 md:pb-20 border-b border-slate-200/60"
                    : ""
                }`}
              >
                {/* Photo Column - Alternating */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-slate-200/70 border-4 border-white bg-slate-50 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating Pill on Photo */}
                    <div
                      className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full ${service.iconBg} border ${service.iconBorder} text-xs font-bold text-slate-800 shadow-sm flex items-center gap-2 backdrop-blur-md`}
                    >
                      {service.icon}
                      <span>
                        {service.number}. {service.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Information Column - Alternating */}
                <div
                  className={`lg:col-span-7 flex flex-col items-start text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Category Eyebrow with Brand Accent Bar */}
                  <div className="mb-2.5">
                    <span
                      className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] uppercase"
                      style={{ color: service.accentColor }}
                    >
                      {service.badge}
                    </span>
                    <div
                      className="w-12 h-0.5 rounded-full mt-1"
                      style={{ backgroundColor: service.accentColor }}
                    />
                  </div>

                  {/* Main Service Title */}
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#102A5C] tracking-tight leading-tight mb-2.5">
                    <span className="text-slate-300 font-black mr-2">
                      {service.number}.
                    </span>
                    {service.title}
                  </h2>

                  {/* Tagline / Subtitle */}
                  <p className="text-base sm:text-lg font-semibold text-slate-700 leading-snug mb-3.5">
                    {service.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {service.subDescription && (
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-5">
                      {service.subDescription}
                    </p>
                  )}

                  {/* Key Therapeutic Focus Highlights (From Brochure) */}
                  <div className="w-full mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      {service.highlightsTitle}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full">
                      {service.highlights.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2.5 bg-white/90 p-2.5 sm:p-3 rounded-2xl border border-slate-100 shadow-2xs hover:border-slate-200 transition-colors"
                        >
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${service.accentColor}18` }}
                          >
                            <CheckCircle2
                              className="w-4 h-4 shrink-0"
                              style={{ color: service.accentColor }}
                            />
                          </div>
                          <span className="text-xs sm:text-[13.5px] font-semibold text-slate-700">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto">
                    <Link
                      href={service.learnMoreHref}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-extrabold text-xs sm:text-sm text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 text-center"
                      style={{
                        backgroundColor: service.accentColor,
                        boxShadow: `0 8px 20px -4px ${service.accentColor}40`,
                      }}
                    >
                      <span>Book an Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#102A5C] hover:text-[#00A3E0] px-4 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-2xs text-center"
                    >
                      <Phone className="w-4 h-4 text-[#00A3E0]" />
                      <span>Call: {BRAND_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. OUR 4-STEP CARE JOURNEY                               */}
      {/* ======================================================== */}
      <section className="py-10 sm:py-16 bg-white/75 backdrop-blur-xs border-y border-slate-100/90 relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F8FB] border border-[#10B9C3]/30 text-[#00A3E0] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight mb-2.5">
              Our 4-Step Care Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A structured, empathetic pathway designed to guide your child from
              initial milestone assessment to lasting independence and joy.
            </p>
          </div>

          {/* 4 Steps Grid: 2x2 on Mobile, 4 on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 relative">
            {CARE_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-3.5 sm:p-6 border border-slate-100 shadow-sm shadow-slate-200/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Top Bar: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${item.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-base sm:text-xl font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-base font-bold text-[#102A5C] mb-1 sm:mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] sm:text-xs text-slate-600 font-normal leading-tight sm:leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle colored accent bar */}
                <div
                  className="w-8 h-1 rounded-full mt-3 sm:mt-4 transition-all duration-300 group-hover:w-14"
                  style={{ backgroundColor: item.accent }}
                />
              </div>
            ))}
          </div>

          {/* Clinical Assurance Banner */}
          <div className="mt-8 sm:mt-10 bg-gradient-to-r from-[#F0FCFD] via-[#F8FDFF] to-[#F7F4FD] rounded-2xl p-4 sm:p-6 border border-[#10B9C3]/20 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5">
            <div className="flex items-center gap-3 sm:gap-3.5 text-center lg:text-left">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10B9C3]/15 text-[#10B9C3] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-base font-bold text-[#102A5C]">
                  Multidisciplinary Collaborative Pediatric Care
                </h4>
                <p className="text-[11px] sm:text-sm text-slate-600">
                  Our team meets weekly across disciplines so your child receives
                  unified developmental milestones support across clinic, home, and school.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${BRAND_INFO.secondaryPhone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#102A5C] text-xs font-bold shadow-xs hover:shadow-md transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#7A43D8]" />
                <span>Call Priti Mankar</span>
              </a>

              <Link
                href="/contact#book-assessment"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#00A3E0] hover:bg-[#0284C7] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all text-center"
              >
                <span>Consult Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. BOTTOM BANNER CARD (Clinic Address & Contact)         */}
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

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Left Column: Heading, Address & Subtitle */}
              <div className="max-w-2xl text-left">
                {/* Eyebrow */}
                <div className="mb-2">
                  <span className="text-xs font-bold text-[#00A3E0] tracking-[0.2em] uppercase">
                    {BRAND_INFO.slogan}
                  </span>
                  <div className="w-10 h-0.5 bg-[#00A3E0] rounded-full mt-1" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A5C] tracking-tight leading-snug mb-2">
                  Let&apos;s Support Your{" "}
                  <span className="text-[#00A3E0]">Child&apos;s</span>{" "}
                  <span className="text-[#7A43D8]">Journey</span>
                </h2>

                {/* Real Address from Flyer */}
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium mb-2">
                  <MapPin className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.address}</span>
                </div>

                {/* Contact numbers */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00A3E0]" />
                    Darshan Hote:{" "}
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-[#102A5C] hover:text-[#00A3E0]"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#7A43D8]" />
                    Priti Mankar:{" "}
                    <a
                      href={`tel:${BRAND_INFO.secondaryPhone}`}
                      className="text-[#102A5C] hover:text-[#7A43D8]"
                    >
                      {BRAND_INFO.secondaryPhone}
                    </a>
                  </span>
                </div>
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
    </div>
  );
}
