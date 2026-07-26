export interface Destination {
  id: string;
  name: string;
  region: string;
  flag: string;
  image: string;
  tagline: string;
  featuredPrograms: string[];
  avgTuition: string;
  scholarshipsAvailable: string;
  visaSuccessRate: string;
  popularCities: string[];
  highlights: string[];
}

export interface Program {
  id: string;
  title: string;
  category: "Medical" | "Engineering" | "Business" | "Technology";
  duration: string;
  iconName: string;
  description: string;
  careerPathways: string[];
  startingSalary: string;
  topCountries: string[];
  prerequisites: string;
}

export interface University {
  id: string;
  name: string;
  qsRank: number;
  country: string;
  city: string;
  logoBg: string;
  image: string;
  scholarshipTier: "100% Full" | "50% Partial" | "Merit Waiver";
  tuitionRange: string;
  popularFields: string[];
  accreditation: string;
}

export interface Scholarship {
  id: string;
  title: string;
  country: string;
  coverage: string;
  benefits: string[];
  deadline: string;
  eligibility: string;
  badge: "100% Full" | "Partial" | "Merit" | "Government";
}

export interface SuccessStory {
  id: string;
  studentName: string;
  program: string;
  university: string;
  country: string;
  year: string;
  quote: string;
  image: string;
  flag: string;
  videoUrl?: string;
  roleNow: string;
  scholarshipWon: string;
}

export interface ParentReview {
  id: string;
  parentName: string;
  childName: string;
  destination: string;
  review: string;
  rating: number;
  location: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export const STATS = [
  { value: 5000, suffix: "+", label: "Students Guided", detail: "Successfully placed in global universities" },
  { value: 100, suffix: "+", label: "Partner Universities", detail: "Direct official admission representations" },
  { value: 98, suffix: "%", label: "Visa Success Rate", detail: "Industry-leading embassy approval ratio" },
  { value: 10, suffix: "+", label: "Global Destinations", detail: "Premier study hubs across 4 continents" },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "china",
    name: "China",
    region: "Asia",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    tagline: "World-Class Infrastructure & Full Government Scholarships",
    featuredPrograms: ["MBBS (English)", "Software Engineering", "Civil Engineering", "Biotechnology"],
    avgTuition: "$2,500 - $4,500 / year",
    scholarshipsAvailable: "100% Full Tuition + Free Dorm + Monthly Stipend (CSC & Provincial)",
    visaSuccessRate: "99.2%",
    popularCities: ["Hangzhou", "Nanjing", "Shanghai", "Wuhan", "Beijing"],
    highlights: ["WHO & WFME Recognized Medical Unis", "Zero HSK requirement for year 1", "Modern High-Tech Labs"]
  },
  {
    id: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    tagline: "Academic Prestige & 2-Year Post-Study Graduate Visa",
    featuredPrograms: ["MSc Data Science", "MBA", "International Law", "Finance & Fintech"],
    avgTuition: "£12,000 - £22,000 / year",
    scholarshipsAvailable: "Up to £5,000 Merit Bursaries & Chevening Grants",
    visaSuccessRate: "97.8%",
    popularCities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    highlights: ["1-Year Master's Degrees", "2-Year PSW Work Rights", "Russell Group Prestige"]
  },
  {
    id: "turkey",
    name: "Turkey",
    region: "Europe/Asia",
    flag: "🇹🇷",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    tagline: "European Standard Education at Affordable Tuition",
    featuredPrograms: ["Dentistry (BDS)", "MBBS", "Pharmacy", "Architecture"],
    avgTuition: "$3,000 - $7,500 / year",
    scholarshipsAvailable: "Türkiye Bursları 100% Full Scholarship & University Waivers",
    visaSuccessRate: "98.5%",
    popularCities: ["Istanbul", "Ankara", "Izmir", "Bursa"],
    highlights: ["No IELTS mandatory for many unis", "EU Bologna Process Alignment", "Vibrant Mediterranean Lifestyle"]
  },
  {
    id: "malaysia",
    name: "Malaysia",
    region: "Asia",
    flag: "🇲🇾",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    tagline: "Global Branch Campuses & Twinning Dual Degrees",
    featuredPrograms: ["Computer Science", "Business Administration", "Engineering", "Culinary Management"],
    avgTuition: "$4,000 - $8,000 / year",
    scholarshipsAvailable: "20% - 50% Academic Merit Waivers",
    visaSuccessRate: "99.0%",
    popularCities: ["Kuala Lumpur", "Penang", "Johor Bahru"],
    highlights: ["UK/Australian Dual Degrees", "Affordable Living Costs", "100% English Medium"]
  },
  {
    id: "europe",
    name: "Europe (Germany/Hungary)",
    region: "Europe",
    flag: "🇪🇺",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    tagline: "Low/No Tuition & Schengen Access Across 27 Countries",
    featuredPrograms: ["Automotive Engineering", "Biomedical Sciences", "Computer Science", "Renewable Energy"],
    avgTuition: "€0 - €4,500 / year",
    scholarshipsAvailable: "Stipendium Hungaricum 100% & DAAD Fellowships",
    visaSuccessRate: "96.5%",
    popularCities: ["Munich", "Berlin", "Budapest", "Vienna"],
    highlights: ["Tuition-Free Public German Unis", "Travel Across Schengen Zone", "High Quality of Life"]
  },
  {
    id: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    tagline: "World Top 50 Universities & 3 to 5 Year Work Permits",
    featuredPrograms: ["Cybersecurity", "Nursing & Healthcare", "Civil Engineering", "Data Analytics"],
    avgTuition: "AU$20,000 - AU$36,000 / year",
    scholarshipsAvailable: "Destination Australia & International Excellence Grants",
    visaSuccessRate: "96.0%",
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    highlights: ["High Minimum Wage for Part-time", "Long Post-Study Work Visa", "Group of Eight Excellence"]
  },
  {
    id: "canada",
    name: "Canada",
    region: "Americas",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935703375-2519793910c0?auto=format&fit=crop&w=1200&q=80",
    tagline: "Co-op Paid Internships & Clear Immigration Pathways",
    featuredPrograms: ["AI & Machine Learning", "Healthcare Administration", "Business Analytics", "Robotics"],
    avgTuition: "CA$18,000 - CA$32,000 / year",
    scholarshipsAvailable: "Entrance Scholarships up to CA$10,000",
    visaSuccessRate: "95.5%",
    popularCities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    highlights: ["Paid Co-op Work Semesters", "3-Year Post Graduation Work Permit (PGWP)", "Permanent Residency Opportunities"]
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "mbbs",
    title: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
    category: "Medical",
    duration: "5 - 6 Years (Including Internship)",
    iconName: "Stethoscope",
    description: "Globally accredited medical program taught entirely in English. Fully compliant with WHO, ECFMG, GMC UK, and NMC guidelines.",
    careerPathways: ["Hospital Physician", "Medical Researcher", "Surgical Specialist", "Global Health Officer"],
    startingSalary: "$65,000 - $120,000 / yr",
    topCountries: ["China", "Turkey", "Malaysia", "Hungary"],
    prerequisites: "Biology & Chemistry 70%+ in High School / FSc / A-Levels"
  },
  {
    id: "bds",
    title: "BDS (Bachelor of Dental Surgery)",
    category: "Medical",
    duration: "5 Years",
    iconName: "Smile",
    description: "Hands-on clinical dental training with state-of-the-art simulation labs and modern orthodontic technique instruction.",
    careerPathways: ["Orthodontist", "Dental Surgeon", "Cosmetic Dentist", "Clinic Owner"],
    startingSalary: "$60,000 - $110,000 / yr",
    topCountries: ["Turkey", "China", "Malaysia", "UK"],
    prerequisites: "High School Pre-Medical background with strong Chemistry & Biology"
  },
  {
    id: "pharmacy",
    title: "PharmD / Bachelor of Pharmacy",
    category: "Medical",
    duration: "4 - 5 Years",
    iconName: "Pill",
    description: "Comprehensive pharmaceutical science, pharmacology, clinical trial design, and hospital pharmacy residency training.",
    careerPathways: ["Clinical Pharmacist", "Pharmaceutical R&D Specialist", "Drug Safety Officer"],
    startingSalary: "$55,000 - $95,000 / yr",
    topCountries: ["China", "UK", "Turkey", "Australia"],
    prerequisites: "Pre-Medical or High School Science stream"
  },
  {
    id: "nursing",
    title: "BSc Nursing & Healthcare Science",
    category: "Medical",
    duration: "4 Years",
    iconName: "HeartPulse",
    description: "High-demand healthcare discipline with guaranteed international employment prospects and fast-track residency pathways.",
    careerPathways: ["Registered Nurse (RN)", "ICU Specialist Nurse", "Healthcare Manager"],
    startingSalary: "$50,000 - $90,000 / yr",
    topCountries: ["Australia", "UK", "Canada", "Malaysia"],
    prerequisites: "High School Diploma / Science background"
  },
  {
    id: "engineering",
    title: "BEng / MEng Software & Civil Engineering",
    category: "Engineering",
    duration: "3 - 4 Years",
    iconName: "Cpu",
    description: "Cutting-edge engineering curricula integrating AI tools, smart infrastructure design, and robotics engineering.",
    careerPathways: ["Structural Engineer", "Systems Architect", "Robotics Lead", "Project Manager"],
    startingSalary: "$60,000 - $105,000 / yr",
    topCountries: ["Germany", "China", "UK", "Canada"],
    prerequisites: "Mathematics & Physics background"
  },
  {
    id: "cs-ai",
    title: "BSc / MSc Computer Science & Artificial Intelligence",
    category: "Technology",
    duration: "3 - 4 Years",
    iconName: "Terminal",
    description: "Advanced computing, machine learning, cloud architecture, and cybersecurity engineering with industry partner projects.",
    careerPathways: ["AI Researcher", "Full Stack Developer", "Cloud Security Engineer", "Data Scientist"],
    startingSalary: "$70,000 - $130,000 / yr",
    topCountries: ["UK", "Canada", "China", "Australia", "Germany"],
    prerequisites: "Strong Mathematics foundation"
  },
  {
    id: "mba",
    title: "MBA & MSc International Business",
    category: "Business",
    duration: "1 - 2 Years",
    iconName: "TrendingUp",
    description: "Executive business leadership, cross-border corporate strategy, financial analytics, and tech venture creation.",
    careerPathways: ["Management Consultant", "Investment Banker", "Product Manager", "Entrepreneur"],
    startingSalary: "$75,000 - $140,000 / yr",
    topCountries: ["UK", "Canada", "Australia", "Malaysia"],
    prerequisites: "Bachelor degree in any field + leadership interest"
  }
];

export const UNIVERSITIES: University[] = [
  {
    id: "tsinghua",
    name: "Tsinghua University",
    qsRank: 20,
    country: "China",
    city: "Beijing",
    logoBg: "bg-purple-900",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% Full",
    tuitionRange: "$3,800 / yr (Waiver available)",
    popularFields: ["Computer Science", "Engineering", "Business"],
    accreditation: "Ministry of Education China / World Top 20"
  },
  {
    id: "zhejiang",
    name: "Zhejiang University",
    qsRank: 44,
    country: "China",
    city: "Hangzhou",
    logoBg: "bg-blue-900",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% Full",
    tuitionRange: "$4,200 / yr (CSC Grant)",
    popularFields: ["MBBS", "Software Engineering", "Biomedical"],
    accreditation: "WHO / ECFMG Approved Medical Campus"
  },
  {
    id: "manchester",
    name: "University of Manchester",
    qsRank: 32,
    country: "United Kingdom",
    city: "Manchester",
    logoBg: "bg-purple-950",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "50% Partial",
    tuitionRange: "£19,500 / yr",
    popularFields: ["Fintech", "Data Science", "Law"],
    accreditation: "Russell Group Member"
  },
  {
    id: "um",
    name: "Universiti Malaya (UM)",
    qsRank: 60,
    country: "Malaysia",
    city: "Kuala Lumpur",
    logoBg: "bg-amber-800",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "Merit Waiver",
    tuitionRange: "$4,500 / yr",
    popularFields: ["Medicine", "Computer Science", "Economics"],
    accreditation: "Premier National University of Malaysia"
  },
  {
    id: "istanbul",
    name: "Istanbul University",
    qsRank: 700,
    country: "Turkey",
    city: "Istanbul",
    logoBg: "bg-red-900",
    image: "https://images.unsplash.com/photo-1527838832700-54595d244535?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% Full",
    tuitionRange: "$3,200 / yr",
    popularFields: ["Dentistry (BDS)", "MBBS", "Pharmacy"],
    accreditation: "Bologna EU Accord Standard"
  },
  {
    id: "tum",
    name: "Technical University of Munich (TUM)",
    qsRank: 28,
    country: "Germany",
    city: "Munich",
    logoBg: "bg-sky-900",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% Full",
    tuitionRange: "€0 (Public Tuition-Free)",
    popularFields: ["Automotive Engineering", "AI", "Physics"],
    accreditation: "German Excellence University"
  },
  {
    id: "melbourne",
    name: "University of Melbourne",
    qsRank: 14,
    country: "Australia",
    city: "Melbourne",
    logoBg: "bg-indigo-950",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "50% Partial",
    tuitionRange: "AU$28,000 / yr",
    popularFields: ["Cybersecurity", "Nursing", "Biotechnology"],
    accreditation: "Group of Eight Australia"
  },
  {
    id: "toronto",
    name: "University of Toronto",
    qsRank: 21,
    country: "Canada",
    city: "Toronto",
    logoBg: "bg-blue-950",
    image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "Merit Waiver",
    tuitionRange: "CA$24,000 / yr",
    popularFields: ["AI & Robotics", "Finance", "Healthcare"],
    accreditation: "Canada Top Ranked University"
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "csc",
    title: "Chinese Government Scholarship (CSC Type A & B)",
    country: "China",
    coverage: "100% Full Coverage",
    benefits: [
      "100% Tuition Fee Waiver",
      "Free Campus Accommodation (Single/Double Room)",
      "Monthly Living Allowance (CNY 2,500 - 3,500 / month)",
      "Comprehensive Medical Insurance Included"
    ],
    deadline: "April 30, 2026",
    eligibility: "High school score 75%+ or Bachelor GPA 3.0+ for Masters",
    badge: "100% Full"
  },
  {
    id: "turkiye-burslari",
    title: "Türkiye Bursları Government Full Grant",
    country: "Turkey",
    coverage: "100% All-Inclusive Grant",
    benefits: [
      "Full Tuition Exemption",
      "Free Flight Ticket (Round Trip)",
      "Free Dormitory Accommodation",
      "Monthly Stipend + 1-Year Turkish Language Course"
    ],
    deadline: "February 20, 2026",
    eligibility: "Undergraduate age below 21; Academic score 70%+ (85%+ for MBBS)",
    badge: "Government"
  },
  {
    id: "stipendium",
    title: "Stipendium Hungaricum EU Scholarship",
    country: "Hungary (Europe)",
    coverage: "100% Full European Grant",
    benefits: [
      "Full Tuition Exemption for Bachelor & Master",
      "Monthly Accommodation Allowance",
      "Health Insurance for Hungary & Schengen Travel",
      "Monthly Living Stipend"
    ],
    deadline: "January 15, 2026",
    eligibility: "High school completion with strong background in chosen major",
    badge: "100% Full"
  },
  {
    id: "uk-merit",
    title: "UK Vice-Chancellor International Merit Award",
    country: "United Kingdom",
    coverage: "£3,000 - £6,000 Fee Deduction",
    benefits: [
      "Direct reduction on first-year tuition fee",
      "Automatic evaluation upon early application submission",
      "Guaranteed accommodation priority placement"
    ],
    deadline: "June 30, 2026",
    eligibility: "Offer holder with 80%+ overall academic performance",
    badge: "Merit"
  },
  {
    id: "aus-global",
    title: "Australian Global Excellence Award",
    country: "Australia",
    coverage: "Up to 50% Tuition Waiver",
    benefits: [
      "25% to 50% Tuition Fee discount for full course duration",
      "Access to exclusive university mentoring program",
      "Fast-track internship placement support"
    ],
    deadline: "July 15, 2026",
    eligibility: "Outstanding academic record & English proficiency",
    badge: "Partial"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Free Consultation",
    subtitle: "Profile Analysis & Goal Alignment",
    description: "Sit down with our senior education advisors (online or in-person) to review your academic transcripts, career ambitions, budget, and destination preferences.",
    duration: "Day 1",
    deliverables: ["Personalized Study Roadmap", "University shortlist (3-5 options)", "Scholarship probability report"]
  },
  {
    stepNumber: 2,
    title: "Eligibility Check",
    subtitle: "Transcript & Document Evaluation",
    description: "Our compliance team audits your marksheets, passport, and recommendation letters to ensure 100% alignment with embassy and university requirements.",
    duration: "Days 2 - 3",
    deliverables: ["Verified Document Dossier", "Equivalency Certificate guidance", "IELTS/TOEFL waiver assessment"]
  },
  {
    stepNumber: 3,
    title: "University Selection",
    subtitle: "Target Program Finalization",
    description: "We select the optimal blend of target universities offering maximum scholarship potential and strong post-graduation employment rates.",
    duration: "Days 4 - 5",
    deliverables: ["Finalized University applications list", "Scholarship portal strategy", "Fee breakdown transparency document"]
  },
  {
    stepNumber: 4,
    title: "Application Submission",
    subtitle: "Direct Portal Submission",
    description: "We submit your applications through SBB's direct official university portal access, bypassing general queues for priority fast-track processing.",
    duration: "Days 6 - 10",
    deliverables: ["Application Tracking IDs", "SOP & Recommendation letter polishing", "Direct admissions office liaison"]
  },
  {
    stepNumber: 5,
    title: "Admission Letter",
    subtitle: "Official Offer & JW202 / CAS Grant",
    description: "Receive your official University Admission Letter along with government visa clearance documentation (JW202 / CAS / Offer Letter).",
    duration: "Weeks 2 - 4",
    deliverables: ["Official Admission Letter", "JW202 / CAS Visa Form", "Scholarship Confirmation Award"]
  },
  {
    stepNumber: 6,
    title: "Visa Processing",
    subtitle: "Embassy File Preparation & Interview Mock",
    description: "Our expert visa team prepares your embassy file, bank statements verification, medical checkup scheduling, and conducts 1-on-1 mock interviews.",
    duration: "Weeks 4 - 6",
    deliverables: ["Embassy Visa File", "1-on-1 Mock Interview session", "Guaranteed Visa Stamping support"]
  },
  {
    stepNumber: 7,
    title: "Fly Abroad",
    subtitle: "Pre-Departure & Airport Pick Up",
    description: "Fly to your destination with total confidence! We arrange pre-departure briefings, flight bookings, foreign exchange, dorm room setup, and airport pickup.",
    duration: "Departure Day",
    deliverables: ["Flight Ticket & Baggage guidance", "Foreign Dormitory key handover", "24/7 On-ground student support"]
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "sarah",
    studentName: "Dr. Sarah Ahmed",
    program: "MBBS (Clinical Medicine)",
    university: "Zhejiang University",
    country: "China",
    year: "Graduated 2024",
    quote: "SBB handled everything from my 100% CSC Full Scholarship application to my JW202 visa. Now I am practicing medicine confidently with international accreditation!",
    image: "https://images.unsplash.com/photo-1594824813571-24a390747414?auto=format&fit=crop&w=600&q=80",
    flag: "🇨🇳",
    roleNow: "Junior Medical Officer",
    scholarshipWon: "100% CSC Government Scholarship"
  },
  {
    id: "hassan",
    studentName: "Hassan Ali",
    program: "MSc Data Science & AI",
    university: "University of Manchester",
    country: "United Kingdom",
    year: "Graduated 2025",
    quote: "The personalized guidance from SBB counsellors helped me secure a £5,000 merit scholarship and a 2-year UK Post-Study Work visa. Highly professional service!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    flag: "🇬🇧",
    roleNow: "Data Analyst at FinTech Firm",
    scholarshipWon: "£5,000 Merit Bursary"
  },
  {
    id: "fatima",
    studentName: "Fatima Omar",
    program: "BDS (Dentistry)",
    university: "Istanbul University",
    country: "Turkey",
    year: "Class of 2025",
    quote: "Studying Dentistry in Istanbul on a full scholarship was a dream come true. SBB made the entire admission and visa process seamless for my family.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    flag: "🇹🇷",
    roleNow: "Dental Resident",
    scholarshipWon: "100% Türkiye Bursları Grant"
  }
];

export const PARENT_REVIEWS: ParentReview[] = [
  {
    id: "tariq",
    parentName: "Mr. Tariq Khan",
    childName: "Zain Khan (MBBS Student)",
    destination: "China",
    review: "Sending your child abroad for medical study is a huge emotional decision. SBB provided weekly updates, verified campus dorm safety, and ensured my son was fully cared for.",
    rating: 5,
    location: "Parent from Lahore"
  },
  {
    id: "rashid",
    parentName: "Dr. Rashid Mahmud",
    childName: "Ayesha Mahmud (MSc UK)",
    destination: "United Kingdom",
    review: "As an academic myself, I was impressed by SBB's complete transparency. No hidden charges, zero misleading promises. They delivered exactly what they promised.",
    rating: 5,
    location: "Parent from Islamabad"
  },
  {
    id: "kamran",
    parentName: "Engr. Kamran Zubair",
    childName: "Bilal Zubair (BEng Cyber)",
    destination: "Malaysia",
    review: "SBB's visa team is top notch. My son's Malaysia student visa was stamped in less than 3 weeks without any hassle.",
    rating: 5,
    location: "Parent from Karachi"
  }
];

export const FAQS = [
  {
    category: "General",
    question: "What makes Study Beyond Borders different from other agencies?",
    answer: "Unlike traditional agencies, SBB operates with direct official university representations, absolute fee transparency, zero hidden charges, and a 98% visa success record. We provide end-to-end mentorship from profile analysis to on-ground dormitory setup."
  },
  {
    category: "Scholarships",
    question: "Can I get a 100% full scholarship without IELTS?",
    answer: "Yes! Several top partner universities in China, Turkey, and Malaysia offer English Proficiency Certificate waivers (EPC) based on your high school or Bachelor medium of instruction, qualifying you for 100% tuition and accommodation grants."
  },
  {
    category: "Medical (MBBS/BDS)",
    question: "Are your medical programs recognized by global medical councils?",
    answer: "Absolutely. All our partner medical universities in China, Turkey, and Europe are listed on the World Directory of Medical Schools (WDOMS) and approved by WHO, ECFMG (USA), GMC (UK), AMC (Australia), and national medical councils."
  },
  {
    category: "Visa & Process",
    question: "What is your visa approval success rate?",
    answer: "We maintain a 98% visa success rate. Our dedicated embassy compliance team conducts comprehensive document verification, financial proof structuring, and 1-on-1 mock embassy interviews before submission."
  },
  {
    category: "Finances",
    question: "Are there any hidden costs after arriving at the university?",
    answer: "None. SBB provides a complete, itemized financial statement prior to application, outlining exact tuition, campus dormitory fees, medical insurance, physical exam costs, and living expense estimates."
  }
];
