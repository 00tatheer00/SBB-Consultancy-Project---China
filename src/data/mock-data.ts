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
  scholarshipTier: "100% CSC Full" | "Provincial Full" | "Merit Waiver";
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
  badge: "100% Full" | "Government" | "Provincial" | "Merit";
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
  { value: 5000, suffix: "+", label: "Students Guided to China", detail: "Placed in Chinese state universities with JW202 visa approval" },
  { value: 100, suffix: "+", label: "Chinese Partner Universities", detail: "Direct official admission representations with WHO recognition" },
  { value: 99, suffix: "%", label: "JW202 Visa Success Rate", detail: "Industry leading Chinese embassy visa approval ratio" },
  { value: 15, suffix: "+", label: "Academic Hub Cities", detail: "Beijing, Shanghai, Hangzhou, Nanjing, Wuhan, Guangzhou & more" },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "hangzhou",
    name: "Hangzhou Hub",
    region: "East China",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    tagline: "Home of Zhejiang University & China's Silicon Valley Tech Hub",
    featuredPrograms: ["MBBS (Clinical Medicine)", "Software Engineering", "AI & Data Science", "Biotechnology"],
    avgTuition: "CNY 18,000 - 30,000 / year ($2,500 - $4,200)",
    scholarshipsAvailable: "100% Full CSC Government & Zhejiang Provincial Scholarships (Stipend CNY 2,500/mo)",
    visaSuccessRate: "99.5%",
    popularCities: ["Zhejiang Univ (QS #44)", "Zhejiang Tech Univ", "Hangzhou Dianzi Univ"],
    highlights: ["WHO & ECFMG Accredited Medical Campus", "Headquarters of Alibaba & High-Tech Parks", "Vibrant International Student Community"]
  },
  {
    id: "beijing",
    name: "Beijing Capital Hub",
    region: "North China",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Academic Prestige & Top 20 Global Universities (Tsinghua & Peking)",
    featuredPrograms: ["Civil & Structural Engineering", "International MBA", "Computer Science", "Public Health"],
    avgTuition: "CNY 22,000 - 35,000 / year ($3,000 - $4,800)",
    scholarshipsAvailable: "100% Full CSC Type A & B Grants + Beijing Belt & Road Fellowship",
    visaSuccessRate: "99.0%",
    popularCities: ["Tsinghua Univ (QS #20)", "Peking Univ (QS #14)", "Capital Medical Univ"],
    highlights: ["China's Capital Cultural & Political Heart", "Top Ranked State Labs & Medical Hospitals", "Direct Embassy & Ministry Access"]
  },
  {
    id: "shanghai",
    name: "Shanghai Financial Hub",
    region: "East China",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab396?auto=format&fit=crop&w=1200&q=80",
    tagline: "Global Megacity & Financial Capital of Asia (Fudan & SJTU)",
    featuredPrograms: ["Finance & Fintech", "BDS (Dentistry)", "Robotics Engineering", "International Law"],
    avgTuition: "CNY 24,000 - 38,000 / year ($3,300 - $5,200)",
    scholarshipsAvailable: "Shanghai Government Scholarship (SGS Class A Full Waiver + Allowance)",
    visaSuccessRate: "99.2%",
    popularCities: ["Fudan Univ (QS #39)", "Shanghai Jiao Tong (QS #45)", "Tongji Univ"],
    highlights: ["World's #1 Transport & Financial Infrastructure", "High English Fluency & Foreign Corporate Internships", "Modern Metro & Halal Dining Networks"]
  },
  {
    id: "nanjing",
    name: "Nanjing Educational Hub",
    region: "East China",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1200&q=80",
    tagline: "Historic Academic Capital & Premier Medical Specialization Hub",
    featuredPrograms: ["MBBS (English)", "PharmD (Pharmaceutical Science)", "Electrical Engineering"],
    avgTuition: "CNY 19,000 - 28,000 / year ($2,600 - $3,900)",
    scholarshipsAvailable: "100% Full CSC & Jiangsu Jasmine Provincial Full Grant",
    visaSuccessRate: "99.3%",
    popularCities: ["Nanjing Univ (QS #141)", "Southeast Univ", "China Pharmaceutical Univ"],
    highlights: ["China's Top Ranked Pharmacy Research Center", "Affordable Campus Dormitories", "Rich Historic Heritage & Green Parks"]
  },
  {
    id: "wuhan",
    name: "Wuhan Central Engineering Hub",
    region: "Central China",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    tagline: "Largest Student City in China & High-Tech Optics Valley",
    featuredPrograms: ["MBBS", "Mechanical Engineering", "Software Engineering", "Nursing"],
    avgTuition: "CNY 16,000 - 25,000 / year ($2,200 - $3,500)",
    scholarshipsAvailable: "100% Full CSC + Wuhan Municipal Government Scholarship",
    visaSuccessRate: "99.6%",
    popularCities: ["Wuhan Univ (QS #194)", "Huazhong Univ of Sci & Tech (HUST)", "Wuhan Tech"],
    highlights: ["Over 1 Million University Students", "WHO Approved Medical Affiliated Teaching Hospitals", "Ultra-Low Cost of Living"]
  },
  {
    id: "guangzhou",
    name: "Guangzhou & Southern Hub",
    region: "South China",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    tagline: "Canton Trade Hub & Warm Tropical Coastal Climate",
    featuredPrograms: ["International Trade & E-Commerce", "BDS (Dentistry)", "Chemical Engineering"],
    avgTuition: "CNY 20,000 - 32,000 / year ($2,800 - $4,400)",
    scholarshipsAvailable: "Guangdong Provincial Government Scholarship + University Grants",
    visaSuccessRate: "99.1%",
    popularCities: ["Sun Yat-sen Univ", "South China Univ of Tech", "Jinan Univ"],
    highlights: ["Host of World Canton Trade Fair", "Direct Proximity to Hong Kong & Macao", "Warm Mild Climate Year Round"]
  },
  {
    id: "xian",
    name: "Xi'an Silk Road Hub",
    region: "Northwest China",
    flag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80",
    tagline: "Ancient Silk Road Gateway & Heavy Machinery Technical Excellence",
    featuredPrograms: ["Aeronautics & Mechanical Engineering", "MBBS", "Architecture", "Computer Science"],
    avgTuition: "CNY 15,000 - 24,000 / year ($2,100 - $3,300)",
    scholarshipsAvailable: "Xi'an Silk Road 100% Full Scholarship + CSC Type B",
    visaSuccessRate: "99.4%",
    popularCities: ["Xi'an Jiaotong Univ (QS #295)", "Northwestern Polytechnical Univ"],
    highlights: ["Official Silk Road Belt & Road Partner", "Famous Terracotta Warriors Heritage", "Vibrant Halal Food Street & Culture"]
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "mbbs-china",
    title: "MBBS (Bachelor of Medicine & Bachelor of Surgery) in China",
    category: "Medical",
    duration: "6 Years (5 Years Academic + 1 Year Clinical Internship)",
    iconName: "Stethoscope",
    description: "Globally accredited medical degree taught entirely in English at MOE-approved Chinese state universities. Fully compliant with WHO, ECFMG (USA), GMC (UK), and national medical licensing boards.",
    careerPathways: ["Hospital Physician", "Medical Specialist", "USMLE / PLAB Practitioner", "Global Health Officer"],
    startingSalary: "$65,000 - $120,000 / yr",
    topCountries: ["Zhejiang University", "Capital Medical", "Wuhan University", "Nanjing Medical"],
    prerequisites: "FSc Pre-Medical / High School Biology & Chemistry 70%+"
  },
  {
    id: "bds-china",
    title: "BDS (Bachelor of Dental Surgery) in China",
    category: "Medical",
    duration: "5 Years (Taught 100% in English)",
    iconName: "Smile",
    description: "Advanced clinical dental training with 3D dental simulation technology, digital orthodontics, and hospital rotations in China's top dental state clinics.",
    careerPathways: ["Orthodontist", "Dental Surgeon", "Cosmetic Dentist", "Clinic Director"],
    startingSalary: "$60,000 - $110,000 / yr",
    topCountries: ["Shanghai Jiao Tong", "Fudan University", "Sun Yat-sen University"],
    prerequisites: "High School Pre-Medical stream with strong Chemistry & Biology"
  },
  {
    id: "cs-ai-china",
    title: "BSc / MSc Computer Science & Artificial Intelligence",
    category: "Technology",
    duration: "4 Years (Bachelor) / 2.5 Years (Master)",
    iconName: "Terminal",
    description: "World-leading computing curriculum integrated with Hangzhou & Shanghai tech giants (Alibaba, Tencent, Huawei). Focus on AI, Cloud Computing, and Robotics.",
    careerPathways: ["AI Researcher", "Cloud Engineer", "Full Stack Developer", "Data Scientist"],
    startingSalary: "$70,000 - $130,000 / yr",
    topCountries: ["Tsinghua University", "Zhejiang University", "Peking University", "SJTU"],
    prerequisites: "Strong High School Mathematics & Physics foundation"
  },
  {
    id: "engineering-china",
    title: "BEng Software, Civil & Mechanical Engineering",
    category: "Engineering",
    duration: "4 Years",
    iconName: "Cpu",
    description: "Study under China's world-famous infrastructure engineers. Hands-on access to state key laboratories, high-speed rail design, and smart automation.",
    careerPathways: ["Structural Engineer", "Robotics Lead", "Project Manager", "Systems Architect"],
    startingSalary: "$60,000 - $105,000 / yr",
    topCountries: ["Tsinghua University", "SEU Nanjing", "HUST Wuhan", "Tongji Shanghai"],
    prerequisites: "Mathematics & Physics background"
  },
  {
    id: "pharmacy-china",
    title: "PharmD / Bachelor of Pharmaceutical Science",
    category: "Medical",
    duration: "4 - 5 Years",
    iconName: "Pill",
    description: "Comprehensive pharmaceutical science and clinical trial design at China Pharmaceutical University (CPU), global leader in pharmaceutical research.",
    careerPathways: ["Clinical Pharmacist", "Drug Safety Officer", "Pharma R&D Specialist"],
    startingSalary: "$55,000 - $95,000 / yr",
    topCountries: ["China Pharmaceutical Univ", "Zhejiang Univ", "Peking University"],
    prerequisites: "High School Pre-Medical or Chemistry background"
  },
  {
    id: "nursing-china",
    title: "BSc Nursing & International Healthcare Management",
    category: "Medical",
    duration: "4 Years",
    iconName: "HeartPulse",
    description: "WHO-recognized international nursing qualifications preparing graduates for high-demand healthcare careers in foreign and Sino-foreign hospitals.",
    careerPathways: ["Registered Nurse (RN)", "ICU Head Nurse", "Clinical Hospital Manager"],
    startingSalary: "$50,000 - $90,000 / yr",
    topCountries: ["Peking Union Medical", "Central South Univ", "Zhejiang Univ"],
    prerequisites: "High School Diploma / Biology background"
  },
  {
    id: "mba-china",
    title: "MBA & MSc International Business in China",
    category: "Business",
    duration: "2 Years",
    iconName: "TrendingUp",
    description: "Cross-border e-commerce, global supply chain, and Chinese business ecosystem executive training taught at Asia's premier business schools.",
    careerPathways: ["Supply Chain Director", "Management Consultant", "Tech Venture Entrepreneur"],
    startingSalary: "$75,000 - $140,000 / yr",
    topCountries: ["CEIBS Shanghai", "Tsinghua SEM", "Peking Guanghua", "Fudan School of Management"],
    prerequisites: "Bachelor Degree in any field"
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
    scholarshipTier: "100% CSC Full",
    tuitionRange: "CNY 28,000 / yr (CSC 100% Grant)",
    popularFields: ["Computer Science", "Engineering", "Architecture"],
    accreditation: "MOE China / World Top 20 State University"
  },
  {
    id: "peking",
    name: "Peking University",
    qsRank: 14,
    country: "China",
    city: "Beijing",
    logoBg: "bg-red-950",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% CSC Full",
    tuitionRange: "CNY 26,000 / yr (CSC Type A)",
    popularFields: ["International Relations", "Medicine", "Economics"],
    accreditation: "Premier National University of China"
  },
  {
    id: "zhejiang",
    name: "Zhejiang University (ZJU)",
    qsRank: 44,
    country: "China",
    city: "Hangzhou",
    logoBg: "bg-blue-900",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% CSC Full",
    tuitionRange: "CNY 24,000 / yr (Full Tuition Waiver)",
    popularFields: ["MBBS (Medicine)", "Software Engineering", "AI"],
    accreditation: "WHO / ECFMG Approved Top 50 Global Campus"
  },
  {
    id: "fudan",
    name: "Fudan University",
    qsRank: 39,
    country: "China",
    city: "Shanghai",
    logoBg: "bg-sky-900",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab396?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% CSC Full",
    tuitionRange: "CNY 30,000 / yr (Shanghai Gov Grant)",
    popularFields: ["Clinical Medicine", "Journalism", "MBA"],
    accreditation: "C9 League Member / MOE Key Campus"
  },
  {
    id: "sjtu",
    name: "Shanghai Jiao Tong University",
    qsRank: 45,
    country: "China",
    city: "Shanghai",
    logoBg: "bg-indigo-950",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% CSC Full",
    tuitionRange: "CNY 28,000 / yr (Full Stipend)",
    popularFields: ["BDS (Dentistry)", "Naval Engineering", "Biomedical"],
    accreditation: "C9 League Founder / Top Medical Hospital Network"
  },
  {
    id: "nanjing",
    name: "Nanjing University",
    qsRank: 141,
    country: "China",
    city: "Nanjing",
    logoBg: "bg-emerald-950",
    image: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "Provincial Full",
    tuitionRange: "CNY 21,000 / yr (Jiangsu Jasmine Grant)",
    popularFields: ["Environmental Science", "Astronomy", "MBBS"],
    accreditation: "National Double First Class University"
  },
  {
    id: "wuhan",
    name: "Wuhan University",
    qsRank: 194,
    country: "China",
    city: "Wuhan",
    logoBg: "bg-amber-900",
    image: "https://images.unsplash.com/photo-1527838832700-54595d244535?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% CSC Full",
    tuitionRange: "CNY 20,000 / yr (Full Waiver)",
    popularFields: ["MBBS", "Software Engineering", "Law"],
    accreditation: "WHO / WDOMS Recognized Medical Campus"
  },
  {
    id: "xjtu",
    name: "Xi'an Jiaotong University",
    qsRank: 295,
    country: "China",
    city: "Xi'an",
    logoBg: "bg-[#003875]",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    scholarshipTier: "100% CSC Full",
    tuitionRange: "CNY 19,000 / yr (Silk Road Grant)",
    popularFields: ["Mechanical Engineering", "Energy", "MBBS"],
    accreditation: "Ministry of Education Project 985 State Campus"
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "csc-type-a-b",
    title: "Chinese Government Scholarship (CSC Type A & Type B)",
    country: "China (All Provinces)",
    coverage: "100% All-Inclusive Full Coverage",
    benefits: [
      "100% Tuition Fee Exemption for Full Degree Duration",
      "Free Campus Accommodation (Single or Double En-Suite Room)",
      "Monthly Living Stipend (CNY 2,500/mo Bachelor, CNY 3,000/mo Master, CNY 3,500/mo PhD)",
      "Comprehensive Medical & Hospitalization Insurance Included"
    ],
    deadline: "April 30, 2026",
    eligibility: "High school score 75%+ or Bachelor GPA 3.0+ for Masters; Age below 25 (Bachelor) / 35 (Master)",
    badge: "100% Full"
  },
  {
    id: "zhejiang-gov",
    title: "Zhejiang Provincial Government International Scholarship",
    country: "China (Zhejiang Province)",
    coverage: "CNY 20,000 - 30,000 / Year Tuition Waiver",
    benefits: [
      "Direct reduction on annual tuition fee",
      "Priority allocation for university dormitory rooms",
      "Opportunity to upgrade to CSC Full Scholarship upon year 1 academic distinction"
    ],
    deadline: "May 20, 2026",
    eligibility: "High school completion with strong academic transcripts",
    badge: "Provincial"
  },
  {
    id: "shanghai-gov",
    title: "Shanghai Government Scholarship (SGS Class A Full Grant)",
    country: "China (Shanghai Megacity)",
    coverage: "100% Full Waiver + Living Allowance",
    benefits: [
      "100% Tuition & Registration Fee Waiver",
      "Free Campus Housing at Fudan / SJTU / Tongji",
      "Monthly Living Allowance (CNY 2,500 - 3,000 / month)",
      "Accident & Health Insurance Coverage"
    ],
    deadline: "March 31, 2026",
    eligibility: "Outstanding high school or university academic records",
    badge: "Government"
  },
  {
    id: "jiangsu-jasmine",
    title: "Jiangsu Jasmine Belt & Road Full Scholarship",
    country: "China (Jiangsu Province)",
    coverage: "100% Full Tuition + Free Dormitory",
    benefits: [
      "Full Tuition Exemption at Nanjing / Southeast University",
      "Free Dormitory Room Accommodation",
      "CNY 10,000 annual living grant for Belt & Road countries"
    ],
    deadline: "June 15, 2026",
    eligibility: "Applicants holding passport from Belt & Road partner nations",
    badge: "100% Full"
  },
  {
    id: "president-merit",
    title: "University President Merit Academic Award",
    country: "China (Selected State Campuses)",
    coverage: "50% - 100% First Class Tuition Deduction",
    benefits: [
      "Fast-track application processing within 7 days",
      "Guaranteed English Medium Program placement",
      "Free 1-Year HSK Chinese Language coaching included"
    ],
    deadline: "July 10, 2026",
    eligibility: "High school score 70%+ or good recommendation letter",
    badge: "Merit"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Free Profile Evaluation",
    subtitle: "China Academic Audit & Goal Alignment",
    description: "Sit down with SBB's China admissions specialists to evaluate your FSc / High School / Bachelor marksheets, budget preferences, and target CSC scholarship quotas.",
    duration: "Day 1",
    deliverables: ["Personalized China Study Roadmap", "University shortlist (3-5 Chinese state campuses)", "CSC Scholarship probability assessment"]
  },
  {
    stepNumber: 2,
    title: "Document Verification",
    subtitle: "Ministry & Foreign Office Attestation",
    description: "Our compliance team audits your marksheets, police character certificate, physical examination form, and recommendation letters for 100% Chinese embassy alignment.",
    duration: "Days 2 - 3",
    deliverables: ["JW202 Verified Dossier", "Foreigner Physical Examination report guidance", "English Medium Certificate (IELTS Waiver)"]
  },
  {
    stepNumber: 3,
    title: "University & CSC Selection",
    subtitle: "Target Chinese Campus & Major Finalization",
    description: "We select the optimal Chinese state universities offering maximum CSC government quotas, WHO accreditation, and modern en-suite dormitories.",
    duration: "Days 4 - 5",
    deliverables: ["Finalized Chinese University list", "CSC Agency Code strategy", "Fee transparency breakdown"]
  },
  {
    stepNumber: 4,
    title: "Direct Portal Submission",
    subtitle: "MOE Direct System Filing",
    description: "We submit your application directly through SBB's official Chinese university portal agreements, bypassing general international queues for fast-track processing.",
    duration: "Days 6 - 10",
    deliverables: ["CSC Portal Application Tracking IDs", "SOP & Study Plan polishing", "Direct Dean Office liaison"]
  },
  {
    stepNumber: 5,
    title: "JW202 & Admission Approval",
    subtitle: "Official Ministry JW202 / JW201 Visa Form Grant",
    description: "Receive your official University Admission Notice along with the Chinese Ministry of Education Visa Application Form (JW202 or JW201).",
    duration: "Weeks 2 - 4",
    deliverables: ["Official Chinese Admission Notice", "JW202 / JW201 Government Visa Form", "100% Scholarship Award Certificate"]
  },
  {
    stepNumber: 6,
    title: "Chinese Embassy Visa Filing",
    subtitle: "X1 / X2 Student Visa Stamping",
    description: "Our visa desk prepares your Chinese embassy file, embassy appointment booking, bank proof verification, and conducts 1-on-1 mock embassy interviews.",
    duration: "Weeks 4 - 6",
    deliverables: ["Chinese Embassy X1/X2 Visa File", "1-on-1 Mock Interview session", "Guaranteed Visa Stamping support"]
  },
  {
    stepNumber: 7,
    title: "Fly to China & Dorm Setup",
    subtitle: "Flight Arrival, Campus Pick-Up & Dorm Check-In",
    description: "Fly to China with total peace of mind! SBB arranges airport pickup in Beijing, Shanghai, Hangzhou, or Guangzhou, dormitory key handover, SIM card setup, and residence permit registration.",
    duration: "Departure Day",
    deliverables: ["Direct Flight Ticket guidance", "Dormitory Room key handover", "24/7 On-ground Chinese student support"]
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
    quote: "SBB handled everything from my 100% CSC Full Scholarship application to my JW202 visa. Now I am practicing medicine confidently with international WHO & ECFMG accreditation!",
    image: "https://images.unsplash.com/photo-1594824813571-24a390747414?auto=format&fit=crop&w=600&q=80",
    flag: "🇨🇳",
    roleNow: "Junior Medical Officer",
    scholarshipWon: "100% CSC Government Scholarship"
  },
  {
    id: "hassan",
    studentName: "Hassan Ali",
    program: "MSc Data Science & AI",
    university: "Shanghai Jiao Tong University",
    country: "China",
    year: "Graduated 2025",
    quote: "Studying Artificial Intelligence in Shanghai on a full Shanghai Government Scholarship was the best decision of my life. SBB's team secured my JW202 visa in 2 weeks!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    flag: "🇨🇳",
    roleNow: "AI Engineer at Tech Firm",
    scholarshipWon: "Shanghai Gov Class A Full Grant"
  },
  {
    id: "fatima",
    studentName: "Fatima Omar",
    program: "BDS (Dentistry)",
    university: "Capital Medical University",
    country: "China",
    year: "Class of 2025",
    quote: "Studying Dentistry in Beijing on a full scholarship was a dream come true for my family. The campus dorms, halal dining halls, and clinical labs are top-notch.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    flag: "🇨🇳",
    roleNow: "Dental Resident",
    scholarshipWon: "Beijing Belt & Road Scholarship"
  }
];

export const PARENT_REVIEWS: ParentReview[] = [
  {
    id: "tariq",
    parentName: "Mr. Tariq Khan",
    childName: "Zain Khan (MBBS Student @ ZJU)",
    destination: "Hangzhou, China",
    review: "Sending your child abroad for medical study is a huge emotional decision. SBB provided weekly updates, verified campus dorm safety, and ensured my son had halal dining right next to his room.",
    rating: 5,
    location: "Parent from Lahore"
  },
  {
    id: "rashid",
    parentName: "Dr. Rashid Mahmud",
    childName: "Ayesha Mahmud (Software Eng @ SJTU)",
    destination: "Shanghai, China",
    review: "As an academic myself, I was impressed by SBB's complete transparency. No hidden agency surcharges, direct JW202 ministry tracking, and 100% scholarship delivery.",
    rating: 5,
    location: "Parent from Islamabad"
  },
  {
    id: "kamran",
    parentName: "Engr. Kamran Zubair",
    childName: "Bilal Zubair (BEng Civil @ SEU)",
    destination: "Nanjing, China",
    review: "SBB's Chinese visa team is top notch. My son's Chinese student X1 visa was stamped in less than 10 days without any hassle.",
    rating: 5,
    location: "Parent from Karachi"
  }
];

export const FAQS = [
  {
    category: "General",
    question: "Why should I study in China through Study Beyond Borders?",
    answer: "China is home to world-renowned state universities offering WHO/ECFMG accredited medical programs, cutting-edge AI & engineering labs, and the world's largest government scholarship system (CSC). SBB holds direct official university representations, ensuring 100% fee transparency and a 99% JW202 visa approval rate."
  },
  {
    category: "Scholarships",
    question: "What is the CSC Chinese Government Scholarship and how do I get 100% coverage?",
    answer: "The CSC (Chinese Scholarship Council) grant provides 100% tuition exemption, free single/double campus en-suite accommodation, monthly living allowance (CNY 2,500 - 3,500/mo), and full health insurance. SBB evaluates your marksheets to submit your application directly under official University Type B quotas."
  },
  {
    category: "Medical (MBBS/BDS)",
    question: "Are Chinese MBBS medical degrees recognized by WHO, ECFMG, GMC UK, and national medical councils?",
    answer: "Yes! All SBB partner medical universities (Zhejiang, Capital Medical, Wuhan, Nanjing Medical) are listed in the World Directory of Medical Schools (WDOMS) and approved by WHO, ECFMG (USA), GMC (UK), AMC (Australia), and national medical councils for global licensing exams."
  },
  {
    category: "Visa & Process",
    question: "What is a JW202 / JW201 form and how long does Chinese visa processing take?",
    answer: "The JW202 (or JW201) is the official student visa authorization form issued directly by the Chinese Ministry of Education and Ministry of Foreign Affairs. Once issued, embassy X1 student visa stamping takes just 5-10 business days."
  },
  {
    category: "Finances",
    question: "Are halal food and safe dormitories available for international students in China?",
    answer: "Yes! All major Chinese state university campuses feature dedicated Muslim Halal Canteens certified by local Islamic associations, 24/7 campus security, en-suite air-conditioned dormitory rooms, and high-speed Wi-Fi."
  }
];
