export interface ServiceMentor {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
  phone?: string;
}

export interface ServiceReview {
  id: string;
  author: string;
  parentOf: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ServiceVideo {
  title: string;
  duration?: string;
  youtubeId?: string; // YouTube embed ID if available
  fallbackPoster: string;
  description: string;
}

export interface DetailedService {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle?: string;
  badge: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  overview: string[];
  image: string;
  galleryImages: string[];
  accentColor: string;
  iconBg: string;
  iconBorder: string;
  iconName: string;
  ageGroup: string;
  sessionDuration: string;
  format: string; // "1-on-1 Personalized" | "Small Group" etc.
  keyBenefits: string[];
  whoNeedsThis: string[];
  clinicalApproach: {
    title: string;
    description: string;
  }[];
  mentors: ServiceMentor[];
  video?: ServiceVideo;
  reviews: ServiceReview[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const DETAILED_SERVICES: DetailedService[] = [
  // 1. Developmental Assessments
  {
    id: "developmental-assessments",
    slug: "developmental-assessments",
    number: "01",
    title: "Developmental Assessments",
    shortTitle: "Assessments",
    badge: "Diagnostic Screening & Milestones",
    tagline: "Comprehensive diagnostic screening to understand your child's cognitive, physical, and emotional profile (Ages 0 to 15).",
    shortDesc: "Accurately evaluate milestone achievements, detect developmental delays early, and create a targeted, personalized care plan.",
    fullDesc: "Every child develops at their own unique pace. Our clinical developmental assessment is the essential first step to accurately identify milestone achievements, recognize developmental delays, and formulate a targeted, personalized care plan. Our experienced pediatric psychologists and specialists evaluate your child in a supportive, play-infused environment where they feel completely comfortable. Our detailed assessment reports give parents clear milestone tracking, objective developmental scoring, and coordinated recommendations for schools and pediatricians.",
    overview: [
      "Standardized pediatric developmental screening batteries across cognitive, speech, motor, and behavioural domains.",
      "Comprehensive diagnostic reporting and individualized intervention roadmap tailored to your child's unique pace.",
      "Collaborative parental feedback sessions to translate assessment findings into practical daily routines.",
    ],
    image: "/images/gallery/consultation-room.jpg",
    galleryImages: [
      "/images/gallery/consultation-room.jpg",
      "/images/gallery/therapy-room.jpg",
      "/images/gallery/clinical-team.jpg",
    ],
    accentColor: "#00A3E0",
    iconBg: "bg-[#E0F8FB]",
    iconBorder: "border-[#B4EFF3]",
    iconName: "ClipboardCheck",
    ageGroup: "0 – 15 Years",
    sessionDuration: "60 – 90 Minutes",
    format: "1-on-1 Child & Parent Clinical Evaluation",
    keyBenefits: [
      "Objective identification of neurodevelopmental milestones and subtle delays",
      "Comprehensive standardized diagnostic report for school and pediatrician coordination",
      "Immediate, personalized intervention plan tailored to your child's specific strengths",
      "Clarity and peace of mind for parents with actionable home strategies",
    ],
    whoNeedsThis: [
      "Children not reaching age-appropriate speech, walking, or motor milestones",
      "Toddlers showing hesitation in making eye contact or responding to names",
      "School-age children experiencing attention, memory, or learning challenges",
      "Parents seeking professional guidance on school readiness and emotional regulation",
    ],
    clinicalApproach: [
      {
        title: "1. Intake & Developmental History",
        description: "In-depth review of prenatal, birth, and early developmental milestones along with parent observations.",
      },
      {
        title: "2. Play-Infused Standardized Testing",
        description: "Engaging diagnostic tools and observational tasks evaluating motor, cognitive, and communicative abilities.",
      },
      {
        title: "3. Multi-Disciplinary Discussion",
        description: "Our psychologist, OT, and speech therapist review findings to build a 360-degree holistic profile.",
      },
      {
        title: "4. Report & Action Plan",
        description: "Transparent, parent-friendly scoring report with exact therapy recommendations and home guidance.",
      },
    ],
    mentors: [
      {
        name: "Darshan Hote",
        role: "Founder & Director, Clinical Psychologist",
        qualification: "M.A. Clinical Psychology, PGDRP (RCI Reg.)",
        experience: "13+ Years Experience",
        image: "/images/about/darshan-hote.png",
        bio: "Specialist in neurodevelopmental screening, standardized diagnostic evaluations, and structured parental counseling for over a decade in Pune.",
        phone: "+91 82089 04217",
      },
      {
        name: "Priti Mankar",
        role: "Co-Founder & Child Psychologist",
        qualification: "M.A. Clinical Psychology, PGDRP",
        experience: "13+ Years Experience",
        image: "/images/about/priti-mankar.png",
        bio: "Dedicated to holistic child assessment, cognitive evaluations, and compassionate family support.",
        phone: "+91 80803 95229",
      },
    ],
    video: {
      title: "Understanding Child Developmental Assessments",
      duration: "3:45",
      youtubeId: "dQw4w9WgXcQ",
      fallbackPoster: "/images/gallery/consultation-room.jpg",
      description: "Take a peek into our warm consultation room and learn how our play-based assessment brings clarity to parents.",
    },
    reviews: [
      {
        id: "rev-1",
        author: "Meenakshi Deshmukh",
        parentOf: "Mother of Advait (Age 3.5)",
        rating: 5,
        date: "October 2026",
        comment: "The assessment gave us so much clarity. Mr. Darshan Hote explained every single score with patience and empathy. We left with a concrete plan instead of anxiety.",
        verified: true,
      },
      {
        id: "rev-2",
        author: "Siddharth Kulkarni",
        parentOf: "Father of Ira (Age 5)",
        rating: 5,
        date: "September 2026",
        comment: "Very detailed report that was readily accepted by her school. The team made Ira feel like she was simply playing fun games rather than undergoing tests.",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "How should I prepare my child for the assessment?",
        answer: "Ensure your child is well-rested and has had a light meal. Frame the visit as a fun activity session where they'll play interactive games with friendly mentors.",
      },
      {
        question: "How long does it take to receive the formal report?",
        answer: "The comprehensive assessment report, complete with clinical scores and tailored therapy suggestions, is delivered within 3 to 5 business days.",
      },
    ],
  },

  // 2. Paediatric Physiotherapy
  {
    id: "paediatric-physiotherapy",
    slug: "paediatric-physiotherapy",
    number: "02",
    title: "Paediatric Physiotherapy",
    shortTitle: "Physiotherapy",
    badge: "Gross Motor, Mobility & Posture",
    tagline: "Strengthening muscles, refining posture, and helping children achieve physical milestones with balance and agility.",
    shortDesc: "Targeted physical therapy addressing motor delays, hypotonia, toe walking, and balance challenges through fun physical exercises.",
    fullDesc: "Gross motor coordination is the foundation for an active, joyful childhood. Our pediatric physiotherapists evaluate and address motor milestone delays, muscle tone challenges (hypotonia or hypertonia), poor balance, and gait irregularities. Through playful movement circuits, therapeutic gym balls, posture alignment exercises, and balance beams, we help children achieve physical milestones at their own pace.",
    overview: [
      "Custom movement circuits designed to stimulate balance, core strength, and bilateral coordination.",
      "Evidence-based Neurodevelopmental Therapy (NDT) approaches for pediatric mobility and tone management.",
      "Gait and walking re-education targeting toe-walking, in-toeing, and postural instabilities.",
    ],
    image: "/images/services/physio.jpg",
    galleryImages: [
      "/images/services/physio.jpg",
      "/images/gallery/physio-gym.jpg",
      "/images/gallery/stepping-stones.jpg",
    ],
    accentColor: "#10B981",
    iconBg: "bg-[#E7F8EE]",
    iconBorder: "border-[#D1F2C2]",
    iconName: "Activity",
    ageGroup: "0 – 16 Years",
    sessionDuration: "45 – 60 Minutes",
    format: "1-on-1 Physiotherapy Clinic Sessions",
    keyBenefits: [
      "Accelerated attainment of motor milestones like rolling, crawling, standing, and walking",
      "Refined postural balance, core stability, and muscle endurance",
      "Correction of abnormal gait patterns, toe walking, and joint hypermobility",
      "Enhanced confidence and athletic coordination on school playgrounds",
    ],
    whoNeedsThis: [
      "Infants showing delayed head control, delayed sitting, or delayed crawling",
      "Toddlers exhibiting persistent toe walking or frequent tripping and falling",
      "Children diagnosed with Cerebral Palsy, Down Syndrome, or hypotonia",
      "Kids recovering from orthopedic injuries or requiring postural rehabilitation",
    ],
    clinicalApproach: [
      {
        title: "1. Neuromuscular & Gait Analysis",
        description: "Checking muscle tone, joint range of motion, postural stability, and gait mechanics.",
      },
      {
        title: "2. Playful Functional Exercises",
        description: "Engaging obstacle courses, Swiss balls, and balance boards disguised as fun games.",
      },
      {
        title: "3. Sensorimotor Integration",
        description: "Combining physical movement with visual and vestibular cues to solidify motor pathways.",
      },
      {
        title: "4. Parent Home-Exercise Coaching",
        description: "Simple, safe daily stretches and play routines for parents to practice at home.",
      },
    ],
    mentors: [
      {
        name: "Dr. Susan Adams",
        role: "Head Paediatric Physiotherapist",
        qualification: "MPT (Pediatrics), NDT Certified, IAP Licensed",
        experience: "10+ Years Experience",
        image: "/images/team/physiotherapist.jpg",
        bio: "Specializing in early infant motor milestones, pediatric gait corrections, and neuromuscular therapy with compassionate care.",
      },
    ],
    video: {
      title: "Pediatric Motor Milestones & Balance Therapy",
      duration: "4:15",
      youtubeId: "kJQP7kiw5Fk",
      fallbackPoster: "/images/services/physio.jpg",
      description: "See our vibrant physiotherapy gym in action with stepping stones, balance beams, and guided therapy exercises.",
    },
    reviews: [
      {
        id: "rev-3",
        author: "Manish & Neha Patel",
        parentOf: "Parents of Kabir (Age 5)",
        rating: 5,
        date: "August 2026",
        comment: "Kabir had low muscle tone and struggled to climb stairs without falling. Dr. Susan made every session a joyful playground. Today he runs with his friends confidently!",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "Is pediatric physiotherapy painful for young children?",
        answer: "Not at all. Our approach is entirely play-based, utilizing gentle stretches, colorful gymnastic equipment, and positive reinforcement to keep children happy and motivated.",
      },
      {
        question: "How many sessions are typically required per week?",
        answer: "Most children benefit from 2 to 3 sessions weekly, accompanied by a simple 10-minute home movement routine.",
      },
    ],
  },

  // 3. Occupational Therapy
  {
    id: "occupational-therapy",
    slug: "occupational-therapy",
    number: "03",
    title: "Occupational Therapy",
    shortTitle: "Occupational Therapy",
    badge: "Fine Motor, Sensory & Daily Living",
    tagline: "Empowering children to master daily routines, regulate sensory responses, and build self-reliant independence.",
    shortDesc: "Building fine motor coordination, hand-eye balance, sensory processing, pencil grip, and independent daily living skills.",
    fullDesc: "Everyday activities—like writing, buttoning clothes, eating independently, or playing with friends—rely on a complex balance of sensory processing and motor coordination. Our specialized Occupational Therapy program helps children overcome sensory sensitivities, improve fine motor dexterity, and build body awareness. Inside our modern sensory gym equipped with therapeutic swings, tactile paths, and balance courses, children gain the physical and emotional regulation needed to thrive.",
    overview: [
      "Targeted fine motor stimulation for pencil grip, handwriting endurance, scissors cutting, and bilateral coordination.",
      "Specialized sensory processing regulation to prevent meltdowns and improve classroom focus.",
      "Activities of Daily Living (ADL) coaching for dressing, feeding, brushing, and self-organization.",
    ],
    image: "/images/services/ot.jpg",
    galleryImages: [
      "/images/services/ot.jpg",
      "/images/gallery/fine-motor.jpg",
      "/images/gallery/sensory-swings.jpg",
    ],
    accentColor: "#7A43D8",
    iconBg: "bg-[#F1EBFC]",
    iconBorder: "border-[#E3D7FC]",
    iconName: "HandHeart",
    ageGroup: "1.5 – 15 Years",
    sessionDuration: "45 – 60 Minutes",
    format: "1-on-1 Personalized Sensory-Motor Sessions",
    keyBenefits: [
      "Mastery of everyday tasks like buttoning, shoe-tying, and independent eating",
      "Significant handwriting legibility and pencil grip improvement without hand fatigue",
      "Enhanced sensory regulation, decreasing sensory overstimulation and tantrums",
      "Strengthened spatial awareness, balance, and motor planning",
    ],
    whoNeedsThis: [
      "Kids who struggle with handwriting, holding crayons, or using scissors",
      "Children who are clumsy, bump into objects, or have weak hand grip",
      "Sensory-sensitive children distressed by textures, tags, or loud noises",
      "Children requiring assistance with dressing, feeding, and personal autonomy",
    ],
    clinicalApproach: [
      {
        title: "1. Sensory-Motor Assessment",
        description: "Evaluating tactile, vestibular, proprioceptive, and fine-motor coordination.",
      },
      {
        title: "2. Sensory Diet & Gym Work",
        description: "Calibrated vestibular swings, tactile textures, and climbing obstacles.",
      },
      {
        title: "3. Fine Motor Precision Tasks",
        description: "Pegboards, therapeutic putty, grasp training tools, and dynamic handwriting drills.",
      },
      {
        title: "4. Functional Life Skills Integration",
        description: "Mock dressing and self-care stations turning routines into confident habits.",
      },
    ],
    mentors: [
      {
        name: "David Evans",
        role: "Senior Occupational Therapist",
        qualification: "BOT, Sensory Integration Certified, AIOTA Reg.",
        experience: "9+ Years Experience",
        image: "/images/team/occupational-therapist.jpg",
        bio: "Specialist in pediatric sensory gyms, fine motor rehabilitation, and helping children achieve joyful daily self-reliance.",
      },
    ],
    video: {
      title: "Sensory Gym & Fine Motor OT at Be Smile",
      duration: "3:30",
      youtubeId: "fJ9rUzIMcZQ",
      fallbackPoster: "/images/services/ot.jpg",
      description: "Discover how our therapeutic swings and sensory equipment help children calm their nervous systems and master fine motor control.",
    },
    reviews: [
      {
        id: "rev-4",
        author: "Ananya Mukherjee",
        parentOf: "Mother of Reyansh (Age 6)",
        rating: 5,
        date: "September 2026",
        comment: "Reyansh couldn't hold a pencil without crying from cramps. Within 3 months with David, his grip corrected and his handwriting is now neat and praised by teachers!",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "How does OT help with handwriting difficulties?",
        answer: "We strengthen the intrinsic hand muscles, shoulder stabilizers, and tactile perception through fun putty and pinching games before transitioning to pencil techniques.",
      },
      {
        question: "What is sensory integration within an OT session?",
        answer: "It uses specialized swings and tactile textures to help your child's nervous system organize sensory information, eliminating agitation and improving attention.",
      },
    ],
  },

  // 4. Behavioural & Psychological Services
  {
    id: "behavioural-psychological-services",
    slug: "behavioural-psychological-services",
    number: "04",
    title: "Behavioural & Psychological Services",
    shortTitle: "Behavioural Services",
    badge: "Emotional Regulation & Psychology",
    tagline: "Fostering positive habits, emotional calm, and cooperative social relationships through compassionate therapy.",
    shortDesc: "Evidence-based Applied Behavior Analysis (ABA) and CBT techniques to reduce tantrums, boost focus, and manage ADHD and Autism.",
    fullDesc: "Children often communicate unmet needs, anxiety, or developmental frustrations through challenging behaviors—such as intense tantrums, difficulty focusing, or social hesitation. Our pediatric behavioural therapy team uses proven, gentle interventions, positive reinforcement, and Applied Behavior Analysis (ABA) principles to guide children toward healthy emotional expression. We work closely alongside parents to create nurturing routines that replace frustration with understanding.",
    overview: [
      "Gentle Applied Behavior Analysis (ABA) and Cognitive Behavioral Therapy (CBT) techniques.",
      "Comprehensive ADHD, Autism Spectrum, and anxiety behavioral coping frameworks.",
      "Parent partnership programs establishing calm, consistent positive reinforcement at home.",
    ],
    image: "/images/services/behavioral.jpg",
    galleryImages: [
      "/images/services/behavioral.jpg",
      "/images/gallery/behavioral-session.jpg",
      "/images/gallery/consultation-room.jpg",
    ],
    accentColor: "#EA580C",
    iconBg: "bg-[#FFF0E6]",
    iconBorder: "border-[#FFD9C2]",
    iconName: "BrainCircuit",
    ageGroup: "2 – 16 Years",
    sessionDuration: "45 – 60 Minutes",
    format: "1-on-1 Child Therapy & Parent Coaching",
    keyBenefits: [
      "Noticeable reduction in aggressive outbursts, meltdowns, and chronic defiance",
      "Prolonged attention span and task completion in classroom and home environments",
      "Enhanced emotional self-awareness and safe self-calming mechanisms",
      "Restored harmony and joyful cooperation in daily family life",
    ],
    whoNeedsThis: [
      "Children prone to severe tantrums, aggression, or head-banging when upset",
      "Kids with diagnosed or suspected ADHD, hyperactivity, or extreme impulsiveness",
      "Children on the Autism Spectrum needing help with social adaptability",
      "Youth dealing with school anxiety, phobias, or low frustration tolerance",
    ],
    clinicalApproach: [
      {
        title: "1. Functional Behavior Assessment (FBA)",
        description: "Identifying the precise antecedents, triggers, and functions behind challenging behaviors.",
      },
      {
        title: "2. Positive Behavior Support (PBS)",
        description: "Teaching communicative and replacement behaviors reinforced with customized rewards.",
      },
      {
        title: "3. Emotional Self-Regulation Drills",
        description: "Visual schedules, breathing exercises, and 'feelings thermometers' for self-monitoring.",
      },
      {
        title: "4. Parent Empowerment Sessions",
        description: "Equipping parents with consistent behavioral strategies to eliminate power struggles.",
      },
    ],
    mentors: [
      {
        name: "Darshan Hote",
        role: "Founder & Director, Psychologist",
        qualification: "M.A. Clinical Psychology, PGDRP",
        experience: "13+ Years Experience",
        image: "/images/about/darshan-hote.png",
        bio: "Veteran practitioner specializing in pediatric behavior modification, crisis intervention, and restorative family counseling.",
        phone: "+91 82089 04217",
      },
      {
        name: "Meera Krishnan",
        role: "Behavioral Interventionist",
        qualification: "M.Ed., Certified ABA Practitioner",
        experience: "7+ Years Experience",
        image: "/images/team/special-educator.jpg",
        bio: "Specializing in gentle ABA therapy, social skill shaping, and ADHD attention coaching for children.",
      },
    ],
    video: {
      title: "Transforming Behaviors with Empathy & Positive Support",
      duration: "4:00",
      youtubeId: "L_LUpnjgPso",
      fallbackPoster: "/images/services/behavioral.jpg",
      description: "Learn how gentle reinforcement replaces frustration with calm communication and strong emotional bonds.",
    },
    reviews: [
      {
        id: "rev-5",
        author: "Rohan & Priya Joshi",
        parentOf: "Parents of Vivaan (Age 5)",
        rating: 5,
        date: "October 2026",
        comment: "We used to dread going outside because of Vivaan's extreme meltdowns. Mr. Darshan Hote identified his sensory triggers and taught us how to calm him without anger. It has brought peace back to our family.",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "Do you use punishment or strict reprimands in therapy?",
        answer: "Never. Our methodology relies 100% on positive reinforcement, empathy, and scientifically proven behavioral replacement techniques.",
      },
      {
        question: "How long before we observe positive changes?",
        answer: "Most families begin seeing a marked drop in frequency of tantrums and improved cooperativeness within 4 to 6 weeks of consistent sessions.",
      },
    ],
  },

  // 5. Speech & Language Therapy
  {
    id: "speech-language-therapy",
    slug: "speech-language-therapy",
    number: "05",
    title: "Speech & Language Therapy",
    shortTitle: "Speech Therapy",
    badge: "Speech Clarity, Language & AAC",
    tagline: "Helping children find their voice, articulate words with clarity, and express thoughts with confidence.",
    shortDesc: "Overcoming speech delays, pronunciation hurdles, stuttering, and expressive language barriers through interactive speech games.",
    fullDesc: "Clear communication is essential for a child's confidence, emotional expression, and social belonging. At Be Smile, our certified Speech & Language Pathologists work compassionately with children experiencing speech delays, unclear pronunciation, stuttering, and difficulties understanding or forming sentences. Through engaging, play-based oral motor exercises, phonic play, and storytelling, we make speech development a natural, happy journey.",
    overview: [
      "Dedicated phonological and articulation clarity therapy for clear, intelligible speech.",
      "Expressive and receptive language stimulation for vocabulary and sentence expansion.",
      "Fluency coaching for stuttering/stammering alongside oral motor strengthening.",
    ],
    image: "/images/services/speech.jpg",
    galleryImages: [
      "/images/services/speech.jpg",
      "/images/gallery/speech-therapy.jpg",
      "/images/gallery/therapy-room.jpg",
    ],
    accentColor: "#00A3E0",
    iconBg: "bg-[#E0F8FB]",
    iconBorder: "border-[#B4EFF3]",
    iconName: "MessageCircleHeart",
    ageGroup: "1 – 15 Years",
    sessionDuration: "45 Minutes",
    format: "1-on-1 Speech & Language Therapy",
    keyBenefits: [
      "Rapid vocabulary expansion and spontaneous multi-word sentence formation",
      "Noticeably clearer articulation and elimination of sound substitutions",
      "Smooth fluency and confidence for children struggling with stammering",
      "Stronger pragmatic social skills for making playground friends and answering in class",
    ],
    whoNeedsThis: [
      "Toddlers over 2 years old who use fewer than 50 words or rely only on gestures",
      "Children whose speech is difficult for family members or teachers to understand",
      "Children repeating sounds or words (stuttering/stammering)",
      "Kids on the Autism Spectrum needing alternative communication tools (PECS / AAC)",
    ],
    clinicalApproach: [
      {
        title: "1. Speech & Oral-Motor Diagnostic",
        description: "Assessing lingual range of motion, palate strength, phonemic awareness, and receptive language.",
      },
      {
        title: "2. Play-Based Phonetic Exercises",
        description: "Mirror feedback, bubble blowing, flashcard games, and auditory discrimination fun.",
      },
      {
        title: "3. Conversational Pragmatics",
        description: "Interactive storytelling, role-playing questions, and structured conversation turns.",
      },
      {
        title: "4. Home Speech Practice Audio Guides",
        description: "Curated word lists and daily parent stimulation routines between sessions.",
      },
    ],
    mentors: [
      {
        name: "Dr. Sarah Jenkins",
        role: "Speech-Language Pathologist",
        qualification: "M.S. Speech Pathology, RCI Licensed Speech Therapist",
        experience: "8+ Years Experience",
        image: "/images/team/speech-therapist.jpg",
        bio: "Specialist in pediatric language acquisition, stuttering remediation, oral-motor placement, and AAC for non-verbal children.",
      },
    ],
    video: {
      title: "Interactive Speech Therapy at Be Smile",
      duration: "3:15",
      youtubeId: "ZXsQAXx_ao0",
      fallbackPoster: "/images/services/speech.jpg",
      description: "Watch how fun phonics games, bubbles, and interactive storytelling inspire children to speak confidently.",
    },
    reviews: [
      {
        id: "rev-6",
        author: "Pooja & Rajesh Sharma",
        parentOf: "Parents of Aarav (Age 4)",
        rating: 5,
        date: "September 2026",
        comment: "When Aarav was 3, he could barely speak 5 words and got frustrated easily. Dr. Sarah Jenkins is magical! Within 6 months he is speaking in full sentences and singing poems.",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "My 2.5-year-old child understands everything but doesn't speak. Should we wait?",
        answer: "Early intervention makes a critical difference. Seeking a speech screening now prevents frustration and accelerates language development when neuroplasticity is highest.",
      },
      {
        question: "Can speech therapy help with stuttering?",
        answer: "Yes, our fluency shaping techniques teach rhythmic breathing, gentle vocal onset, and confidence strategies to manage and overcome stuttering.",
      },
    ],
  },

  // 6. Early Intervention Program (EIP)
  {
    id: "early-intervention-program",
    slug: "early-intervention-program",
    number: "06",
    title: "Early Intervention Program (EIP)",
    shortTitle: "Early Intervention",
    badge: "Formative Years (Ages 0 to 6)",
    tagline: "Timely developmental stimulation during the critical formative years when brain neuroplasticity is at its highest.",
    shortDesc: "Holistic multi-specialty developmental support during the first 6 years to close developmental gaps before formal schooling.",
    fullDesc: "The first six years of life represent a unique window of rapid brain development. When developmental delays or milestone gaps are identified and nurtured early, a child's future learning trajectory can be dramatically transformed. Our Early Intervention program combines multisensory stimulation, motor play, communication encouragement, and cognitive games to support children facing early delays. We guide parents every step of the way, creating a supportive bridge between therapy and home.",
    overview: [
      "Multidisciplinary synergy combining speech, motor, occupational, and cognitive stimulation.",
      "Targeted neurodevelopmental exercises maximizing early neuroplasticity windows.",
      "Intensive parent-coaching to embed milestone building into ordinary home routines.",
    ],
    image: "/images/services/early-intervention.jpg",
    galleryImages: [
      "/images/services/early-intervention.jpg",
      "/images/gallery/early-development.jpg",
      "/images/gallery/play-area.jpg",
    ],
    accentColor: "#7A43D8",
    iconBg: "bg-[#F1EBFC]",
    iconBorder: "border-[#E3D7FC]",
    iconName: "Users",
    ageGroup: "0 – 6 Years",
    sessionDuration: "60 Minutes",
    format: "Integrated Multi-Therapy Sessions",
    keyBenefits: [
      "Minimizes or completely closes developmental milestone gaps before starting school",
      "Boosts cognitive problem-solving, social imitation, and curiosity",
      "Prevents secondary behavioral frustrations rooted in communication delays",
      "Gives parents clear roadmaps and expert reassurance during early childhood",
    ],
    whoNeedsThis: [
      "Infants born prematurely or with low birth weight needing developmental follow-up",
      "Toddlers showing delayed motor, sensory, or speech milestones",
      "Children showing early indicators of Autism Spectrum, GDD, or Down Syndrome",
      "Parents who want structured, expert guidance on optimizing early childhood milestones",
    ],
    clinicalApproach: [
      {
        title: "1. 360° Neurodevelopmental Baseline",
        description: "Assessing sensory, cognitive, fine motor, gross motor, and social-emotional milestones.",
      },
      {
        title: "2. Multisensory Brain Gym",
        description: "Stimulating vestibular balance, tactile exploration, and cause-and-effect cognitive play.",
      },
      {
        title: "3. Social Play & Communication Drills",
        description: "Joint attention games, turn-taking, and vocal imitation in a happy setting.",
      },
      {
        title: "4. Parent-Child Bonding Practice",
        description: "Training parents on therapeutic play techniques for mealtime, bath time, and bedtime.",
      },
    ],
    mentors: [
      {
        name: "Priti Mankar",
        role: "Co-Founder & Child Psychologist",
        qualification: "M.A. Clinical Psychology, PGDRP",
        experience: "13+ Years Experience",
        image: "/images/about/priti-mankar.png",
        bio: "Specializing in infant neurodevelopment, early cognitive stimulation, and parental emotional guidance.",
        phone: "+91 80803 95229",
      },
      {
        name: "Dr. Susan Adams",
        role: "Pediatric Physiotherapist",
        qualification: "MPT, NDT Certified",
        experience: "10+ Years Experience",
        image: "/images/team/physiotherapist.jpg",
        bio: "Expert in infant motor milestones, hypotonia therapy, and early physical coordination.",
      },
    ],
    video: {
      title: "The Power of Early Intervention (Ages 0 to 6)",
      duration: "4:30",
      youtubeId: "9bZkp7q19f0",
      fallbackPoster: "/images/services/early-intervention.jpg",
      description: "Discover why the first 6 years are golden for brain development and how early intervention creates lifelong independence.",
    },
    reviews: [
      {
        id: "rev-7",
        author: "Deepak & Sunita Nair",
        parentOf: "Parents of Samar (Age 2.5)",
        rating: 5,
        date: "October 2026",
        comment: "Samar was born premature and had gross motor and speech delays. Starting Be Smile's Early Intervention program at age 1.5 was the best decision of our lives. He has caught up with all his peers!",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "Why is early intervention considered more effective than waiting?",
        answer: "During ages 0 to 6, a child's brain forms over 1 million new neural connections every second. Intervening early leverages this high neuroplasticity for faster, enduring progress.",
      },
      {
        question: "Can parents be in the room during sessions?",
        answer: "Absolutely! We actively encourage parental participation in early intervention so you can replicate therapeutic play techniques at home.",
      },
    ],
  },

  // 7. Special Education
  {
    id: "special-education",
    slug: "special-education",
    number: "07",
    title: "Special Education & Remedial Learning",
    shortTitle: "Special Education",
    badge: "Individualized Education Plans (IEP)",
    tagline: "Individualized academic learning programs that adapt to your child's unique cognitive pace and learning style.",
    shortDesc: "Multi-sensory remedial instruction for dyslexia, dysgraphia, ADHD, and school readiness, unlocking academic success.",
    fullDesc: "Every child learns differently, and traditional classroom settings don't always accommodate diverse learning curves. Our Special Education team crafts structured Individualized Education Plans (IEPs) that break reading, writing, comprehension, and math into multisensory, easy-to-grasp concepts. Whether addressing ADHD, Dyslexia, slow processing, or general academic delays, we celebrate neurodiversity and equip every child with the tools and self-belief they need.",
    overview: [
      "Customized Individualized Education Plans (IEPs) tailored to school curriculum and cognitive pace.",
      "Multisensory remedial reading (Orton-Gillingham based phonics) and concrete mathematics tools.",
      "Targeted support for Dyslexia, Dyscalculia, Dysgraphia, and Slow Learner profiles.",
    ],
    image: "/images/services/special-ed.jpg",
    galleryImages: [
      "/images/services/special-ed.jpg",
      "/images/gallery/special-ed-learning.jpg",
      "/images/gallery/classroom.jpg",
    ],
    accentColor: "#0284C7",
    iconBg: "bg-[#E0F2FE]",
    iconBorder: "border-[#BAE6FD]",
    iconName: "GraduationCap",
    ageGroup: "3 – 16 Years",
    sessionDuration: "45 – 60 Minutes",
    format: "1-on-1 Remedial & Small Group Academic Prep",
    keyBenefits: [
      "Rapid improvements in reading fluency, spelling, and paragraph comprehension",
      "Demystification of mathematical operations using tactile, visual manipulatives",
      "Rebuilding self-esteem, classroom participation, and test confidence",
      "Teacher coordination to ensure school exams provide fair learning accommodations",
    ],
    whoNeedsThis: [
      "Children falling behind grade-level reading, writing, or mathematics",
      "Students diagnosed with Dyslexia, Dysgraphia, or Dyscalculia",
      "Kids with ADHD who find it difficult to sit and complete school homework",
      "Children with mild intellectual disabilities needing practical life-academic skills",
    ],
    clinicalApproach: [
      {
        title: "1. Psycho-Educational Assessment",
        description: "Pinpointing learning gaps in phonological awareness, working memory, and numerical concepts.",
      },
      {
        title: "2. Individualized Education Plan (IEP)",
        description: "Drafting concrete, quarterly learning goals shared transparently with parents and schools.",
      },
      {
        title: "3. Multisensory Instruction",
        description: "Using sand trays, wooden letters, visual mnemonics, and color-coded grammar scaffolds.",
      },
      {
        title: "4. School Exam Accommodation Advocacy",
        description: "Issuing clinical documentation for extra time, scribes, or oral testing permissions.",
      },
    ],
    mentors: [
      {
        name: "Meera Krishnan",
        role: "Special Educator & Remedial Specialist",
        qualification: "M.Ed. Special Education (Learning Disabilities, RCI Reg.)",
        experience: "7+ Years Experience",
        image: "/images/team/special-educator.jpg",
        bio: "Specializing in multisensory phonics, remedial dyslexia training, and ADHD academic adaptations.",
      },
    ],
    video: {
      title: "Multisensory Learning Strategies in Special Education",
      duration: "3:50",
      youtubeId: "2Vv-BfVoq4g",
      fallbackPoster: "/images/services/special-ed.jpg",
      description: "See how tactile letters, color-coded arithmetic, and encouraging mentors turn learning stress into joyful discovery.",
    },
    reviews: [
      {
        id: "rev-8",
        author: "Vikram & Shilpa Rao",
        parentOf: "Parents of Tanay (Age 8)",
        rating: 5,
        date: "September 2026",
        comment: "Tanay used to cry before school because he couldn't read blackboard words due to dyslexia. Meera ma'am transformed his world. In 4 months, he is reading storybooks with pride!",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "Does special education replace my child's regular school?",
        answer: "No, special education acts as complementary remedial support alongside their regular school, helping them keep pace with academic standards.",
      },
      {
        question: "Will you interact with my child's school teacher?",
        answer: "Yes, with your consent, our educators communicate directly with school teachers to align classroom accommodations and IEP goals.",
      },
    ],
  },

  // 8. Sensory Integration Therapy
  {
    id: "sensory-integration-therapy",
    slug: "sensory-integration-therapy",
    number: "08",
    title: "Sensory Integration Therapy",
    shortTitle: "Sensory Integration",
    badge: "Sensory Processing & Regulation",
    tagline: "Helping children process sights, sounds, textures, and balance to feel calm, organized, and focused.",
    shortDesc: "Equipped with vestibular swings, sensory tunnels, and weighted gear to regulate sensory systems and eliminate meltdowns.",
    fullDesc: "Sensory processing differences can cause a child to feel overwhelmed by loud noises, avoid touch, crave excessive spinning, or struggle to sit still. In our specialized sensory integration gym—equipped with vestibular swings, tactile tunnels, weighted tools, and dynamic balance courses—our therapists guide children through tailored sensory diets. This regulates the nervous system, decreases sensory meltdowns, and enhances attention.",
    overview: [
      "State-of-the-art sensory gym with vestibular swings, climbing walls, crash pads, and balance rings.",
      "Comprehensive sensory profiling identifying hyper-reactive and hypo-reactive profiles.",
      "Custom sensory diet schedules tailored for morning, school, and evening routines.",
    ],
    image: "/images/gallery/sensory-swings.jpg",
    galleryImages: [
      "/images/gallery/sensory-swings.jpg",
      "/images/gallery/sensory-room.jpg",
      "/images/gallery/therapy-rings.jpg",
    ],
    accentColor: "#FFAA18",
    iconBg: "bg-[#FFF6E5]",
    iconBorder: "border-[#FFE5B4]",
    iconName: "Sparkles",
    ageGroup: "1.5 – 15 Years",
    sessionDuration: "45 Minutes",
    format: "1-on-1 Clinic Sensory Integration Gym",
    keyBenefits: [
      "Noticeable reduction in sensory overload meltdowns in crowded or noisy spaces",
      "Calmer, more regulated emotional state enabling focused learning",
      "Overcoming texture aversions with clothing, food, and messy play",
      "Improved motor planning, body boundary awareness, and safety awareness",
    ],
    whoNeedsThis: [
      "Kids who cover their ears at routine noises like blenders, hair dryers, or crowds",
      "Sensory seekers who constantly crash into walls, spin incessantly, or jump non-stop",
      "Children who refuse certain fabric textures, shoe tags, or messy art textures",
      "Children diagnosed with Sensory Processing Disorder (SPD), Autism, or ADHD",
    ],
    clinicalApproach: [
      {
        title: "1. Sensory Profile Assessment",
        description: "Administering standardized Sensory Profile questionnaires across visual, auditory, and tactile modalities.",
      },
      {
        title: "2. Vestibular & Proprioceptive Gym Work",
        description: "Calibrated swinging, deep pressure crash pads, and heavy work activities.",
      },
      {
        title: "3. Tactile Desensitization Stations",
        description: "Gentle gradual exposure to textures, sand, therapy beads, and soothing lights.",
      },
      {
        title: "4. Practical Home Sensory Diet",
        description: "Prescribing calming bedroom lighting, compression garments, and movement breaks.",
      },
    ],
    mentors: [
      {
        name: "David Evans",
        role: "Head of Sensory Integration",
        qualification: "BOT, Ayres Sensory Integration Certified",
        experience: "9+ Years Experience",
        image: "/images/team/occupational-therapist.jpg",
        bio: "Specializing in vestibular rehabilitation, tactile sensory diets, and neurodevelopmental sensory gyms.",
      },
    ],
    video: {
      title: "Inside Be Smile's State-of-the-Art Sensory Gym",
      duration: "4:00",
      youtubeId: "e-ORhEE9VVg",
      fallbackPoster: "/images/gallery/sensory-swings.jpg",
      description: "Take a tour of our swings, ball pits, and tactile pathways that bring sensory peace to children.",
    },
    reviews: [
      {
        id: "rev-9",
        author: "Dr. Shalini Venkat",
        parentOf: "Mother of Riya (Age 6)",
        rating: 5,
        date: "October 2026",
        comment: "As a pediatrician, I have extremely high standards. Be Smile's sensory integration gym is world-class! My daughter used to melt down in shopping malls; now she regulates herself easily.",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "What is a 'sensory diet'?",
        answer: "A sensory diet is a carefully scheduled series of personalized physical activities and sensory inputs that keep your child's nervous system feeling organized and calm throughout the day.",
      },
      {
        question: "Is sensory integration suitable for non-verbal children?",
        answer: "Yes, it is especially effective for non-verbal children who often experience high internal sensory frustration without having words to describe it.",
      },
    ],
  },

  // 9. Group Therapy Programs
  {
    id: "group-therapy-programs",
    slug: "group-therapy-programs",
    number: "09",
    title: "Group Therapy Programs",
    shortTitle: "Group Therapy",
    badge: "Peer Interaction & Social Skills",
    tagline: "Guided small-group activities that foster cooperative play, peer friendships, and joyful communication.",
    shortDesc: "Structured social skill circles, cooperative team games, and parent-child bonding sessions to build real-world friendships.",
    fullDesc: "Translating one-on-one therapy progress into natural social environments is a critical milestone for growing children. Our small, therapist-facilitated group programs provide a safe, structured setting where children practice turn-taking, cooperative play, active listening, and social problem-solving. Through shared games, art projects, and circle time, children build genuine peer bonds and confidence.",
    overview: [
      "Carefully matched small peer groups (3 to 6 children) based on developmental age and social goals.",
      "Cooperative board games, drama circles, circle songs, and collaborative art stations.",
      "Facilitated conflict resolution, perspective taking, and emotional empathy exercises.",
    ],
    image: "/images/gallery/group-activities.jpg",
    galleryImages: [
      "/images/gallery/group-activities.jpg",
      "/images/gallery/play-area.jpg",
      "/images/gallery/classroom.jpg",
    ],
    accentColor: "#10B981",
    iconBg: "bg-[#E7F8EE]",
    iconBorder: "border-[#D1F2C2]",
    iconName: "HeartHandshake",
    ageGroup: "3 – 14 Years",
    sessionDuration: "60 Minutes",
    format: "Small Peer Groups (3 to 6 Children)",
    keyBenefits: [
      "Natural real-world practice of sharing, turn-taking, and conversational waiting",
      "Overcoming social shyness, playground isolation, and fear of group settings",
      "Understanding peer body language, social boundaries, and empathy",
      "Making real friendships in a safe, non-judgmental environment",
    ],
    whoNeedsThis: [
      "Children who play alongside peers but do not know how to join in or initiate play",
      "Kids who struggle with losing board games or sharing toys gracefully",
      "Children preparing to transition into big preschool or elementary school classrooms",
      "Kids on the Autism Spectrum transitioning from 1-on-1 therapy to group socialization",
    ],
    clinicalApproach: [
      {
        title: "1. Peer Matching & Goal Alignment",
        description: "Placing children in harmonious cohorts where communicative abilities complement each other.",
      },
      {
        title: "2. Themed Social Play Cycles",
        description: "Engaging turn-taking games, puppet conversations, and team building puzzles.",
      },
      {
        title: "3. Real-Time Social Coaching",
        description: "Therapists model how to ask to join, say sorry, and celebrate others' wins.",
      },
      {
        title: "4. Parent Briefing Circle",
        description: "Sharing observational video clips and social goals for weekend playdates.",
      },
    ],
    mentors: [
      {
        name: "Darshan Hote",
        role: "Director & Social Skills Facilitator",
        qualification: "M.A. Clinical Psychology, PGDRP",
        experience: "13+ Years Experience",
        image: "/images/about/darshan-hote.png",
        bio: "Specializing in child group dynamics, emotional empathy development, and social-pragmatic facilitation.",
      },
      {
        name: "Meera Krishnan",
        role: "Behavioral Group Coach",
        qualification: "M.Ed. Special Education",
        experience: "7+ Years Experience",
        image: "/images/team/special-educator.jpg",
        bio: "Expert in peer play therapy, collaborative games, and social story crafting.",
      },
    ],
    video: {
      title: "Building Joyful Friendships in Group Therapy",
      duration: "3:20",
      youtubeId: "ScMzIvxBSi4",
      fallbackPoster: "/images/gallery/group-activities.jpg",
      description: "Watch how structured small-group activities inspire sharing, laughter, and lasting friendships.",
    },
    reviews: [
      {
        id: "rev-10",
        author: "Kavita & Amit Saxena",
        parentOf: "Parents of Yash (Age 6)",
        rating: 5,
        date: "September 2026",
        comment: "Yash always preferred playing in corners alone at school. After 8 group therapy sessions at Be Smile, he now happily invites classmates over for playdates!",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "What if my child becomes overwhelmed in a group?",
        answer: "Our groups maintain an ultra-low child-to-therapist ratio (often 2:1 or 3:1). A co-therapist is always available to step aside for a 2-minute calming break if needed.",
      },
      {
        question: "Can group therapy replace individual sessions?",
        answer: "Group therapy works best as a bridge alongside or following individual sessions to test skills in social settings.",
      },
    ],
  },

  // 10. Workshops & Parent Training
  {
    id: "workshops-parent-training",
    slug: "workshops-parent-training",
    number: "10",
    title: "Workshops & Parent Training",
    shortTitle: "Parent Training",
    badge: "Family Empowerment & Education",
    tagline: "Empowering parents, caregivers, and educators with practical therapeutic knowledge and home strategies.",
    shortDesc: "Expert clinical workshops, school collaboration programs, and practical home behavioral coaching for caregivers.",
    fullDesc: "Parents are a child's most influential and enduring advocates. We conduct structured parent training workshops, developmental awareness camps, and school collaboration programs to bridge the gap between clinic sessions and everyday life. We teach practical behavior management, sensory calming techniques, speech stimulation tips, and milestone identification.",
    overview: [
      "Empowering weekend workshops covering tantrums, sensory diets, and speech stimulation at home.",
      "School teacher training programs creating inclusive, supportive classroom accommodations.",
      "Community developmental screening camps raising early neurodevelopmental awareness in Pune.",
    ],
    image: "/images/about/approach.jpg",
    galleryImages: [
      "/images/about/approach.jpg",
      "/images/gallery/clinical-team.jpg",
      "/images/gallery/consultation-room.jpg",
    ],
    accentColor: "#7A43D8",
    iconBg: "bg-[#F1EBFC]",
    iconBorder: "border-[#E3D7FC]",
    iconName: "Compass",
    ageGroup: "Parents & Educators",
    sessionDuration: "90 – 120 Minutes",
    format: "Interactive Workshops & Hands-on Clinics",
    keyBenefits: [
      "Master proven behavior-calming techniques and stop daily household yelling or battles",
      "Learn how to turn meals, toy time, and bedtime into natural therapeutic moments",
      "Connect with a warm community of parents walking similar developmental paths",
      "Receive downloadable visual schedules, charts, and home-activity guides",
    ],
    whoNeedsThis: [
      "Parents feeling exhausted or unsure how to handle challenging behavioral moments",
      "Caregivers of newly diagnosed neurodivergent children seeking clear guidance",
      "Preschool and primary school teachers wanting inclusive classroom management strategies",
      "Families seeking seamless coordination between clinic therapy and home life",
    ],
    clinicalApproach: [
      {
        title: "1. Evidence-Based Curriculum",
        description: "Grounded in RCI psychological frameworks, positive parenting, and sensory science.",
      },
      {
        title: "2. Live Demonstrations & Roleplay",
        description: "Practicing calm responses to refusal, meltdowns, and communication hurdles in real time.",
      },
      {
        title: "3. Take-Home Toolkit",
        description: "Supplying token economy charts, visual timers, and sensory diet planner templates.",
      },
      {
        title: "4. Q&A Community Circle",
        description: "Open floor where parents ask questions and receive tailored, judgment-free clinical advice.",
      },
    ],
    mentors: [
      {
        name: "Darshan Hote",
        role: "Director & Lead Workshop Facilitator",
        qualification: "M.A. Clinical Psychology, PGDRP",
        experience: "13+ Years Experience",
        image: "/images/about/darshan-hote.png",
        bio: "Has conducted over 100+ parent training workshops and school seminars across Maharashtra.",
        phone: "+91 82089 04217",
      },
      {
        name: "Priti Mankar",
        role: "Co-Founder & Family Counselor",
        qualification: "M.A. Clinical Psychology, PGDRP",
        experience: "13+ Years Experience",
        image: "/images/about/priti-mankar.png",
        bio: "Specializing in parental stress reduction, maternal mental health, and home intervention integration.",
        phone: "+91 80803 95229",
      },
    ],
    video: {
      title: "Parent Guidance: Positive Discipline & Home Harmony",
      duration: "5:10",
      youtubeId: "kXYiU_JCYtU",
      fallbackPoster: "/images/about/approach.jpg",
      description: "Watch highlights from our recent parent empowerment workshop on managing sensory meltdowns with empathy.",
    },
    reviews: [
      {
        id: "rev-11",
        author: "Archana & Nilesh Bapat",
        parentOf: "Parents of Vedant (Age 4)",
        rating: 5,
        date: "October 2026",
        comment: "Attending the Be Smile parent workshop was an eye-opener. We stopped getting angry at Vedant's meltdowns once we understood they were sensory-driven. The visual schedule templates work wonders!",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "Are workshops conducted online or in person?",
        answer: "We offer both interactive in-clinic weekend workshops in Pimple Nilakh, Pune, and live interactive webinars for parents further away.",
      },
      {
        question: "Can both parents attend together?",
        answer: "Yes, we strongly encourage both parents (and grandparents or caregivers) to attend so everyone maintains consistent home routines.",
      },
    ],
  },

  // 11. Play Therapy
  {
    id: "play-therapy",
    slug: "play-therapy",
    number: "11",
    title: "Play Therapy",
    shortTitle: "Play Therapy",
    badge: "Expressive & Therapeutic Play",
    tagline: "Using the universal language of play to help children express emotions, process trauma, and resolve anxieties.",
    shortDesc: "Child-centered expressive play, sand trays, and artistic storytelling helping kids work through emotions and build resilience.",
    fullDesc: "Play is the natural, spontaneous language of childhood. Through child-centered play therapy, children express feelings, fears, and life events that they may lack the words to talk about. In our thoughtfully curated play therapy room with sand trays, puppets, expressive toys, and art supplies, certified therapists help children work through anxieties, emotional turmoil, grief, and behavioral stress.",
    overview: [
      "Curated therapeutic play environment with sand play, emotional expression puppets, and creative art tools.",
      "Non-directive and directive play methodologies tailored to your child's emotional stage.",
      "Gentle resolution of trauma, grief, school anxiety, sibling jealousy, or separation stress.",
    ],
    image: "/images/gallery/play-area.jpg",
    galleryImages: [
      "/images/gallery/play-area.jpg",
      "/images/gallery/creative-arts.jpg",
      "/images/gallery/therapy-room.jpg",
    ],
    accentColor: "#00A3E0",
    iconBg: "bg-[#E0F8FB]",
    iconBorder: "border-[#B4EFF3]",
    iconName: "Smile",
    ageGroup: "2.5 – 12 Years",
    sessionDuration: "45 Minutes",
    format: "1-on-1 Child-Centered Play Therapy",
    keyBenefits: [
      "Natural release of bottled-up anxiety, fears, anger, and emotional stress",
      "Boosted emotional vocabulary and spontaneous self-expression",
      "Healthy development of creative problem-solving and psychological resilience",
      "Deepened self-worth, positive self-identity, and trust in caregivers",
    ],
    whoNeedsThis: [
      "Children suffering from intense separation anxiety or school refusal",
      "Kids who have experienced family distress, hospitalizations, or loss of a loved one",
      "Children with selective mutism or difficulty expressing emotions verbally",
      "Kids who exhibit aggressive play themes, nightmares, or sudden behavioral regression",
    ],
    clinicalApproach: [
      {
        title: "1. Safe Emotional Container",
        description: "Establishing unconditional positive regard and firm emotional safety in our dedicated play room.",
      },
      {
        title: "2. Symbolic Expression",
        description: "Allowing children to project internal struggles onto puppets, sand miniatures, and art canvas.",
      },
      {
        title: "3. Therapist Reflection & Support",
        description: "Reflecting feelings with empathy, helping the child process and reframe challenging experiences.",
      },
      {
        title: "4. Parent Debrief & Guidance",
        description: "Sharing underlying emotional themes observed in play without breaching the child's safe space.",
      },
    ],
    mentors: [
      {
        name: "Priti Mankar",
        role: "Co-Founder & Clinical Child Psychologist",
        qualification: "M.A. Clinical Psychology, PGDRP",
        experience: "13+ Years Experience",
        image: "/images/about/priti-mankar.png",
        bio: "Specializing in child-centered play therapy, expressive arts, and emotional trauma processing.",
        phone: "+91 80803 95229",
      },
    ],
    video: {
      title: "How Play Heals: Inside the Play Therapy Room",
      duration: "3:40",
      youtubeId: "YQHsXMglC9A",
      fallbackPoster: "/images/gallery/play-area.jpg",
      description: "Discover how sand trays, dollhouses, and therapeutic toys help children speak the unspoken language of feelings.",
    },
    reviews: [
      {
        id: "rev-12",
        author: "Sneha & Gaurav Joshi",
        parentOf: "Parents of Anvi (Age 5)",
        rating: 5,
        date: "October 2026",
        comment: "After an unexpected family loss, Anvi stopped talking and was wetting her bed again. Priti ma'am's play therapy gave her a gentle voice through dolls and drawing. Within weeks she was smiling and singing again.",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "How is play therapy different from playing at home?",
        answer: "In play therapy, a trained psychologist systematically reads play themes, metaphors, and non-verbal cues, using them to guide emotional processing and resolution.",
      },
      {
        question: "Is play therapy helpful for children who won't talk?",
        answer: "Yes, it is the premier therapy for non-verbal or selectively mute children, because it bypasses words entirely and communicates through symbols and toys.",
      },
    ],
  },

  // 12. Taekwondo
  {
    id: "taekwondo",
    slug: "taekwondo",
    number: "12",
    title: "Taekwondo & Martial Arts Training",
    shortTitle: "Taekwondo",
    badge: "Discipline, Coordination & Focus",
    tagline: "Building physical agility, core discipline, balance, and self-confidence through structured martial arts.",
    shortDesc: "Specialized pediatric martial arts combining energetic kicks, balance drills, and mindfulness to boost focus and self-discipline.",
    fullDesc: "Taekwondo provides structured physical conditioning that significantly benefits pediatric gross motor planning, core balance, and mental focus. Especially beneficial for children with attention difficulties, low muscle tone, or coordination challenges, our specialized pediatric martial arts sessions combine energetic kicking and blocking drills with mindful discipline, respect, and emotional self-control.",
    overview: [
      "Adapted pediatric martial arts curriculum targeting gross motor agility, balance, and bilateral coordination.",
      "Structure-infused training emphasizing respect, mindfulness, focus, and self-restraint.",
      "Rewarding belt progression system providing measurable milestones of personal achievement.",
    ],
    image: "/images/gallery/stepping-stones.jpg",
    galleryImages: [
      "/images/gallery/stepping-stones.jpg",
      "/images/gallery/outdoor-play.jpg",
      "/images/gallery/physio-gym.jpg",
    ],
    accentColor: "#FFAA18",
    iconBg: "bg-[#FFF6E5]",
    iconBorder: "border-[#FFE5B4]",
    iconName: "Flame",
    ageGroup: "4 – 16 Years",
    sessionDuration: "60 Minutes",
    format: "Small Cohort & Adapted 1-on-1 Sessions",
    keyBenefits: [
      "Remarkable enhancement in physical balance, core strength, and motor planning",
      "Strengthened mental concentration, listening focus, and emotional self-control",
      "Healthy, structured outlet for excess physical energy and hyperactivity",
      "Huge boost in self-defense readiness, upright posture, and proud self-confidence",
    ],
    whoNeedsThis: [
      "Children with ADHD or restless energy who need structured physical channels",
      "Kids who struggle with poor balance, clumsiness, or bilateral limb coordination",
      "Children who are shy, timid, or lack physical self-assurance on the playground",
      "Any young child ready to learn discipline, respect, and athletic conditioning",
    ],
    clinicalApproach: [
      {
        title: "1. Sensorimotor Warmup",
        description: "Dynamic stretching, stepping stones, and core alignment preparation.",
      },
      {
        title: "2. Form & Technique Drills",
        description: "Step-by-step stances, blocks, kicks, and focus pads adapted to every child's tone.",
      },
      {
        title: "3. Mindful Breathing & Focus Games",
        description: "Teaching breathing control and the ability to transition quickly from high energy to still focus.",
      },
      {
        title: "4. Belt Progression & Celebration",
        description: "Milestone grading celebrating perseverance, personal bests, and mutual respect.",
      },
    ],
    mentors: [
      {
        name: "Dr. Susan Adams",
        role: "Pediatric Motor Specialist & Physiotherapist",
        qualification: "MPT (Pediatrics), Martial Arts Fitness Advisor",
        experience: "10+ Years Experience",
        image: "/images/team/physiotherapist.jpg",
        bio: "Overseeing safe physical posture, biomechanics, and motor alignment in pediatric martial arts.",
      },
    ],
    video: {
      title: "Pediatric Taekwondo: Discipline, Focus & Fun",
      duration: "3:10",
      youtubeId: "fKopy74weus",
      fallbackPoster: "/images/gallery/stepping-stones.jpg",
      description: "Watch how structured martial arts drills build balance, stamina, and proud smiles in children.",
    },
    reviews: [
      {
        id: "rev-13",
        author: "Ajay & Pooja Verma",
        parentOf: "Parents of Arnav (Age 7)",
        rating: 5,
        date: "October 2026",
        comment: "Arnav had low stamina and struggled to sit still in school. Taekwondo at Be Smile gave him the perfect physical outlet. His core strength, posture, and focus during study time have improved tremendously!",
        verified: true,
      },
    ],
    faqs: [
      {
        question: "Is Taekwondo safe for children who are uncoordinated?",
        answer: "Yes! Our program is specifically designed for pediatric developmental fitness with thick padded safety mats, soft targets, and individualized pacing.",
      },
      {
        question: "Does martial arts encourage aggression?",
        answer: "On the contrary, traditional martial arts teaches deep respect, emotional self-control, and calmness under pressure. Children learn when and how to channel their energy safely.",
      },
    ],
  },
];

