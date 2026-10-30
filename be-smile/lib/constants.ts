import {
  NavLink,
  ServiceItem,
  StatItem,
  FeatureItem,
  GalleryItem,
  TestimonialItem,
  TeamMember,
  TrustHighlight,
} from "@/types";

export const BRAND_INFO = {
  name: "BE SMILE",
  legalName: "Be Smile Child Development Center & Rehabilitation Centre",
  tagline: "Child Development Center & Rehabilitation Centre",
  slogan: "We try to make your life beautiful",
  phone: "+91 82089 04217",
  secondaryPhone: "+91 80803 95229",
  contactPerson1: "Darshan Hote",
  contactPerson2: "Priti Mankar",
  email: "info@besmile.com",
  secondaryEmail: "care@besmilecenter.com",
  address: "2nd Floor Shop No. 203, Vasundhara Plaza, Opp. Baskin Robbins, DP Road, Pimple Nilakh, Pune - 411027",
  workingHours: "Monday - Saturday: 8:30 AM – 7:30 PM (Sunday: By Appointment)",
  emergencySupport: "24/7 Helpline Available for Registered Families",
  whatsapp: "918308677051",
  whatsappDisplay: "+91 83086 77051",
  bookingUrl: "/contact#book-assessment",
};

export const FOUNDERS_INFO = [
  {
    id: "darshan-hote",
    name: "Darshan Hote",
    role: "Founder & Director",
    title: "Rehabilitation Counselor & Psychologist",
    experience: "13+ Years Experience",
    image: "/images/about/darshan-hote.png",
    about:
      "Psychologist and Rehabilitation Professional with 13+ years of experience in child development, behavioural interventions, psychological counselling, and rehabilitation services. Experienced in evidence-informed therapeutic approaches, developmental support, parent guidance, and individualized care planning to enhance emotional well-being and functional independence.",
    quote:
      "Every child has their own unique abilities, strengths, and developmental pace. At Be Smile, we tailor evidence-informed support to help every child flourish with confidence.",
    education: [
      {
        degree: "M.A. in Clinical Psychology",
        institution: "Sant Gadge Baba Amravati University",
      },
      {
        degree: "Post Graduate Diploma in Rehabilitation Psychology (PGDRP)",
        institution: "Sahara Institute of Rehabilitation & Development Studies",
      },
    ],
    coreExpertise: [
      "Cognitive Behavioural Therapy (CBT)",
      "Rational Emotive Behaviour Therapy (REBT)",
      "Psychological Counselling & Behaviour Modification",
      "Child Development & Developmental Screening",
      "Autism & Neurodevelopmental Support",
      "Emotional Regulation & Social Skills",
      "Parent Training & Family Psychoeducation",
      "Individualized Rehabilitation Planning",
    ],
    email: "darshanhote34@gmail.com",
    phones: ["+91 82089 04217", "+91 94204 01735"],
    location: "Pune, Maharashtra, India",
    accentColor: "#00A3E0",
    badgeBg: "bg-[#E0F8FB]",
    badgeBorder: "border-[#B4EFF3]",
    badgeText: "text-[#00A3E0]",
  },
  {
    id: "priti-mankar",
    name: "Priti Mankar",
    role: "Co-Founder & Director",
    title: "Rehabilitation Counselor & Psychologist",
    experience: "13+ Years Experience",
    image: "/images/about/priti-mankar.png",
    about:
      "Psychologist and Rehabilitation Professional with 13+ years of experience dedicated to empowering children with developmental needs and supporting families. Specializing in psychological assessments, cognitive-behavioral techniques, student mental health, and family psychoeducation to nurture lasting confidence and independence.",
    quote:
      "A compassionate, holistic environment transforms a child's confidence. We walk hand-in-hand with parents to celebrate every developmental victory.",
    education: [
      {
        degree: "M.A. in Clinical Psychology",
        institution: "Sant Gadge Baba Amravati University",
      },
      {
        degree: "Post Graduate Diploma in Rehabilitation Psychology (PGDRP)",
        institution: "Sahara Institute of Rehabilitation & Development Studies",
      },
    ],
    coreExpertise: [
      "Psychological Assessment & Diagnosis",
      "Cognitive-Behavioral Techniques",
      "Student Counseling & Mental Health Support",
      "Crisis Intervention & Emotional Support",
      "Case Documentation & Report Writing",
      "Empathy & Active Listening",
      "Child Development & Neurodevelopmental Care",
    ],
    email: "mankarp84@gmail.com",
    phones: ["+91 80803 95229", "+91 83086 77051"],
    location: "Pune, Maharashtra, India",
    accentColor: "#7A43D8",
    badgeBg: "bg-[#F1EBFC]",
    badgeBorder: "border-[#E3D7FC]",
    badgeText: "text-[#7A43D8]",
  },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://instagram.com/besmilechildcare", handle: "@besmilecenter" },
  { name: "Facebook", url: "https://facebook.com/besmilechildcare", handle: "Be Smile Center" },
  { name: "YouTube", url: "https://youtube.com/@besmilecenter", handle: "Be Smile Child Development" },
  { name: "LinkedIn", url: "https://linkedin.com/company/besmile-child-care", handle: "Be Smile Center" },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_HIGHLIGHTS: TrustHighlight[] = [
  {
    id: "licensed-therapists",
    title: "Certified Specialists",
    description: "Multidisciplinary team of RCI licensed pediatric therapists.",
    iconName: "ShieldCheck",
    accent: "#10B9C3",
  },
  {
    id: "child-centric",
    title: "100% Child-Centered",
    description: "Play-based, gentle methods tailored to each child's pace.",
    iconName: "Sparkles",
    accent: "#FFAA18",
  },
  {
    id: "sensory-clinic",
    title: "Sensory-Equipped",
    description: "Modern, hygienic sensory integration and motor gyms.",
    iconName: "Smile",
    accent: "#7A43D8",
  },
  {
    id: "parent-partnership",
    title: "Family Counseling",
    description: "Continuous parental guidance, home plans & progress milestones.",
    iconName: "HeartHandshake",
    accent: "#63C32D",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "speech-therapy",
    title: "Speech Therapy",
    slug: "speech-therapy",
    shortDesc:
      "Empowering children to express their thoughts, improve articulation, overcome stammering, and enhance overall language communication skills.",
    fullDesc:
      "Our speech and language therapy programs address articulation delays, phonological difficulties, expressive and receptive language delays, stuttering, and alternative augmentative communication (AAC).",
    iconName: "MessageCircleHeart",
    badge: "Communication",
    color: "#10B9C3",
    bgColor: "#F0FCFD",
    borderColor: "#B4EFF3",
    textColor: "#079BA5",
    accentColor: "#10B9C3",
    benefits: [
      "Articulation & Clarity Improvement",
      "Vocabulary & Sentence Building",
      "Social Pragmatic Skills",
      "Oral Motor Strengthening",
    ],
  },
  {
    id: "occupational-therapy",
    title: "Occupational Therapy",
    slug: "occupational-therapy",
    shortDesc:
      "Building independence in daily activities, fine motor coordination, hand-eye balance, sensory processing, and handwriting posture.",
    fullDesc:
      "Pediatric occupational therapy supports children in mastering everyday functional tasks such as self-feeding, dressing, holding pencils, sensory regulation, and self-organization in academic and home environments.",
    iconName: "HandHeart",
    badge: "Independence",
    color: "#7A43D8",
    bgColor: "#F7F3FF",
    borderColor: "#E0D2FC",
    textColor: "#6431B8",
    accentColor: "#7A43D8",
    benefits: [
      "Fine Motor & Handwriting Skills",
      "Sensory Processing Regulation",
      "Activities of Daily Living (ADL)",
      "Bilateral Coordination",
    ],
  },
  {
    id: "behavioural-therapy",
    title: "Behavioural Therapy",
    slug: "behavioural-therapy",
    shortDesc:
      "Positive behavioral interventions that reduce anxiety, manage tantrums, boost attention span, and encourage positive social interactions.",
    fullDesc:
      "Utilizing evidence-based Applied Behavior Analysis (ABA) principles and gentle reinforcement strategies, our behavioral therapy fosters self-regulation, attention focus, cooperative habits, and emotional resilience.",
    iconName: "BrainCircuit",
    badge: "Self-Regulation",
    color: "#FFAA18",
    bgColor: "#FFF8E9",
    borderColor: "#FFE2A6",
    textColor: "#C97F00",
    accentColor: "#FFAA18",
    benefits: [
      "Positive Behavioral Reinforcement",
      "Emotional & Tantrum Regulation",
      "Attention Span Enhancement",
      "Peer & Group Interaction Skills",
    ],
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    slug: "physiotherapy",
    shortDesc:
      "Enhancing gross motor milestones, muscle tone, posture alignment, walking gait, core stability, and balance through fun physical exercises.",
    fullDesc:
      "Targeted pediatric physical therapy addressing neuromuscular conditions, cerebral palsy, torticollis, toe walking, hypotonia/hypertonia, and developmental gross motor delays with playful exercise gear.",
    iconName: "Activity",
    badge: "Mobility",
    color: "#63C32D",
    bgColor: "#F3FBF0",
    borderColor: "#D2F2C0",
    textColor: "#4B9A1E",
    accentColor: "#63C32D",
    benefits: [
      "Gross Motor Milestone Tracking",
      "Muscle Strength & Postural Balance",
      "Gait & Walking Training",
      "Neurodevelopmental Therapy (NDT)",
    ],
  },
  {
    id: "special-education",
    title: "Special Education",
    slug: "special-education",
    shortDesc:
      "Tailored educational programs for children with learning differences, ADHD, dyslexia, and autism to thrive in school and life.",
    fullDesc:
      "Individualized Education Plans (IEP) designed by licensed special educators using multi-sensory teaching methods, remedial phonics, numerical literacy, and customized classroom readiness modules.",
    iconName: "GraduationCap",
    badge: "Learning",
    color: "#10B9C3",
    bgColor: "#F0FCFD",
    borderColor: "#B4EFF3",
    textColor: "#079BA5",
    accentColor: "#10B9C3",
    benefits: [
      "Individualized Education Plan (IEP)",
      "Remedial Phonics & Math Literacy",
      "Attention & Task Completion",
      "School Readiness & Shadow Support",
    ],
  },
  {
    id: "early-intervention",
    title: "Early Intervention",
    slug: "early-intervention",
    shortDesc:
      "Critical support during early developmental windows (0–6 years) to accelerate milestone acquisition and bridge growth gaps early.",
    fullDesc:
      "Scientific developmental assessments and multi-disciplinary stimulation programs that leverage brain neuroplasticity during the first six formative years of a child's life.",
    iconName: "Sparkles",
    badge: "Ages 0 - 6",
    color: "#7A43D8",
    bgColor: "#F7F3FF",
    borderColor: "#E0D2FC",
    textColor: "#6431B8",
    accentColor: "#7A43D8",
    benefits: [
      "Early Developmental Screening",
      "Sensory & Cognitive Stimulation",
      "Parent Coaching & Home Program",
      "Comprehensive Milestone Catch-up",
    ],
  },
];

export const ABOUT_POINTS = [
  {
    title: "Child-Centered Care",
    description:
      "Every treatment plan is personalized around your child's specific strengths, interests, and emotional comfort.",
    iconName: "Smile",
    accent: "#10B9C3",
  },
  {
    title: "Experienced Professionals",
    description:
      "Certified pediatric therapists with extensive clinical background across speech, occupational, physical, and behavioral sciences.",
    iconName: "Award",
    accent: "#7A43D8",
  },
  {
    title: "Family-Focused Approach",
    description:
      "We partner closely with parents through transparent counseling, weekly progress updates, and home guidance routines.",
    iconName: "Users",
    accent: "#FFAA18",
  },
  {
    title: "Holistic Development",
    description:
      "Integrating physical, sensory, cognitive, and social milestones to empower confident, well-rounded growth.",
    iconName: "Sparkles",
    accent: "#63C32D",
  },
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: "personalized-support",
    title: "Personalized Support",
    description:
      "Tailored developmental roadmaps with 1-on-1 therapist attention, ensuring every child receives precisely what they need.",
    iconName: "HeartPulse",
    color: "#10B9C3",
    bgColor: "#E5F9FA",
    borderColor: "#AEECEF",
  },
  {
    id: "expert-team",
    title: "Expert & Caring Team",
    description:
      "Our empathetic therapists create a joyful, fearless environment where children look forward to every therapy session.",
    iconName: "ShieldCheck",
    color: "#7A43D8",
    bgColor: "#F1EAFE",
    borderColor: "#D6C3FA",
  },
  {
    id: "goal-oriented",
    title: "Goal-Oriented Programs",
    description:
      "Evidence-backed assessments, objective milestone measurements, and systematic progress reviews every 8 to 12 weeks.",
    iconName: "Target",
    color: "#FFAA18",
    bgColor: "#FFF4DD",
    borderColor: "#FFE09B",
  },
  {
    id: "positive-environment",
    title: "Positive & Nurturing Environment",
    description:
      "Play-filled, colorful, sanitized, and child-safe spaces designed to inspire curiosity, self-confidence, and happiness.",
    iconName: "Sparkles",
    color: "#63C32D",
    bgColor: "#EDF9E8",
    borderColor: "#C5F0B2",
  },
];

// EDITABLE CONSTANTS: Client can easily modify these statistics
export const STATS: StatItem[] = [
  {
    id: "children-supported",
    value: "500+",
    label: "Children Supported",
    description: "Helped achieve developmental milestones",
    iconName: "Smile",
  },
  {
    id: "therapy-programs",
    value: "15+",
    label: "Therapy Programs",
    description: "Customized multi-disciplinary modules",
    iconName: "Layers",
  },
  {
    id: "years-experience",
    value: "10+",
    label: "Years of Experience",
    description: "Dedicated to pediatric rehabilitation",
    iconName: "Award",
  },
  {
    id: "happy-families",
    value: "98%",
    label: "Happy Families",
    description: "Parent satisfaction and referral rate",
    iconName: "Heart",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "therapy-room",
    title: "Therapy Room",
    category: "Speech & Cognitive",
    image: "/images/gallery/therapy-room.jpg",
    description: "Sunlit child-friendly room equipped for interactive language & learning sessions.",
  },
  {
    id: "play-area",
    title: "Play & Learning Area",
    category: "Motor Development",
    image: "/images/gallery/play-area.jpg",
    description: "Spacious play arena with soft foam obstacles, ball pits, and active coordination gear.",
  },
  {
    id: "sensory-room",
    title: "Sensory Integration",
    category: "Sensory Processing",
    image: "/images/gallery/sensory-room.jpg",
    description: "Multi-sensory environment featuring tactile tubes, soft hammocks, swings, and soothing fiber optics.",
  },
  {
    id: "consultation-room",
    title: "Consultation Room",
    category: "Parent Guidance",
    image: "/images/gallery/consultation-room.jpg",
    description: "Warm and private room for physician evaluation, IEP planning, and compassionate parent counseling.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Pooja & Rajesh Sharma",
    parentOf: "Parents of Aarav (Age 4)",
    therapyType: "Speech & Occupational Therapy",
    quote:
      "When Aarav was 3, he struggled with eye contact and could barely speak 5 words. The team at BE SMILE became family to us. Within 6 months, he was chatting, smiling, and making friends. Their warmth and patience made all the difference!",
    rating: 5,
    avatarInitials: "AS",
    avatarBg: "bg-teal-500",
  },
  {
    id: "testimonial-2",
    name: "Dr. Shalini Venkat",
    parentOf: "Mother of Riya (Age 6)",
    therapyType: "Sensory & Behavioural Therapy",
    quote:
      "As a pediatrician myself, I have very high standards for clinical care. BE SMILE exceeded every expectation. Their sensory gym is world-class, their therapists follow scientific protocols, and my daughter literally runs into the clinic smiling!",
    rating: 5,
    avatarInitials: "RV",
    avatarBg: "bg-purple-500",
  },
  {
    id: "testimonial-3",
    name: "Manish & Neha Patel",
    parentOf: "Parents of Kabir (Age 5)",
    therapyType: "Early Intervention & Physiotherapy",
    quote:
      "Kabir had gross motor delays and low muscle tone. Thanks to BE SMILE's dedicated physiotherapist and early intervention specialists, he is now running, climbing stairs, and loving playground games with confidence. We are forever grateful!",
    rating: 5,
    avatarInitials: "KP",
    avatarBg: "bg-amber-500",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    role: "Speech-Language Pathologist",
    qualification: "M.S. Speech Pathology, RCI Licensed",
    experience: "8+ Years Experience",
    image: "/images/team/speech-therapist.jpg",
    specialties: ["Articulation Therapy", "Autism Communication", "Child AAC"],
    bio: "Specializing in early language acquisition and non-verbal child communication using play-based interactive techniques.",
  },
  {
    id: "david-evans",
    name: "David Evans",
    role: "Occupational Therapist",
    qualification: "BOT, Sensory Integration Certified",
    experience: "9+ Years Experience",
    image: "/images/team/occupational-therapist.jpg",
    specialties: ["Sensory Integration", "Fine Motor Coordination", "ADL Skills"],
    bio: "Passionate about helping children conquer sensory hurdles and gain self-reliance through joyful physical play.",
  },
  {
    id: "dr-susan-adams",
    name: "Dr. Susan Adams",
    role: "Pediatric Physiotherapist",
    qualification: "MPT (Pediatrics), NDT Certified",
    experience: "10+ Years Experience",
    image: "/images/team/physiotherapist.jpg",
    specialties: ["Developmental Milestone Delay", "Gait Training", "Postural Tone"],
    bio: "Dedicated to restoring mobility and functional movement in children with motor developmental challenges.",
  },
  {
    id: "meera-krishnan",
    name: "Meera Krishnan",
    role: "Special Educator & Behaviorist",
    qualification: "M.Ed. Special Education, ABA Trained",
    experience: "7+ Years Experience",
    image: "/images/team/special-educator.jpg",
    specialties: ["ADHD / Learning Difficulties", "Remedial Reading", "Behavioral Shaping"],
    bio: "Empowering children with neurodivergent minds to blossom in school, build confidence, and discover their unique superpowers.",
  },
];
