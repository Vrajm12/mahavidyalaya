import { AppLayout } from "@/components/layout/AppLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useLocation } from "wouter";
import { 
  BookOpen, 
  GraduationCap, 
  ChevronDown, 
  FileDown, 
  Atom, 
  TrendingUp, 
  Code, 
  Palette, 
  Microscope, 
  Sparkles,
  FileCheck, 
  Award, 
  Clock, 
  Layers, 
  HelpCircle,
  Search,
  CheckCircle2
} from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";

interface Subject {
  code: string;
  name: string;
  type: "Theory" | "Practical" | "Theory & Lab";
  domain: "Language" | "Social Sciences" | "Commerce & Accounts" | "Physical Sciences" | "Computer Science" | "Mathematics";
  credits?: number;
  hoursPerWeek: string;
  keyUnits: string[];
  careerRelevance: string;
}

interface SemesterData {
  semesterName: string;
  subjects: Subject[];
}

interface YearData {
  yearName: string;
  semesters: SemesterData[];
}

interface ProgramData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  bgAccent: string;
  iconColor: string;
  bannerGradient: string;
  stats: {
    totalCredits: string;
    schema: string;
    theoryCount: string;
    labCount: string;
    affiliation: string;
  };
  downloadUrl: string;
  fileSize: string;
  years: YearData[];
}

const SYLLABUS_DATABASE: Record<string, ProgramData> = {
  junior_arts: {
    title: "Junior College — Arts (XI & XII)",
    subtitle: "Maharashtra State Board (MSBSHSE) Curriculum",
    description: "The Arts stream fosters critical thinking, cultural appreciation, historical context, and communicative eloquence. Curated for civil service aspirants, media practitioners, literary scholars, and legal luminaries.",
    accent: "text-amber-600",
    bgAccent: "bg-amber-600 hover:bg-amber-700",
    iconColor: "text-amber-500",
    bannerGradient: "from-amber-600/20 via-primary to-[#011a2a]",
    stats: {
      totalCredits: "600 Marks / Year",
      schema: "Maharashtra State Board HSC Scheme",
      theoryCount: "6 Core Subjects",
      labCount: "Continuous Internal Assessment",
      affiliation: "MSBSHSE, Pune Board"
    },
    downloadUrl: "/documents/Indrayani_Junior_Arts_Syllabus.pdf",
    fileSize: "1.4 MB",
    years: [
      {
        yearName: "Class 11 (FYJC)",
        semesters: [
          {
            semesterName: "Annual Curriculum",
            subjects: [
              {
                code: "ART-101",
                name: "Compulsory English",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Prose & Literary Appreciation", "Poetry & Poetic Devices", "Writing Skills (Summary, Mind Mapping, Framing)", "Drama: History of English Drama"],
                careerRelevance: "Global communication proficiency, competitive entrance preparation, and analytical drafting."
              },
              {
                code: "ART-102",
                name: "Second Language: Marathi / Hindi",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Gadhya (Prose) & Padhya (Poetry)", "Vyavaharik Marathi / Prayojanmulak Hindi", "Vyakaran & Bhasha Abhyas", "Sahitya Pravah"],
                careerRelevance: "Civil services regional paper, regional media, publishing, translation, and administrative competence."
              },
              {
                code: "ART-103",
                name: "History",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Early Societies & Ancient Civilizations", "Imperial States & Feudal Transformations", "Colonial Encounters & Modern Historiography", "Cultural Heritage & Archeological Sites of Maharashtra"],
                careerRelevance: "Foundational baseline for UPSC/MPSC civil services, archeological research, and heritage management."
              },
              {
                code: "ART-104",
                name: "Political Science",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["The State & Sovereignty", "Basic Concepts: Liberty, Equality, Justice", "Indian Constitution: Preamble, Rights & Directive Principles", "Organs of Government: Legislature, Executive & Judiciary"],
                careerRelevance: "Essential groundwork for Law (LLB), Public Administration, Public Policy, and Judicial Services."
              },
              {
                code: "ART-105",
                name: "Economics",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Basic Concepts in Economics", "Money & Banking System", "Economic Growth vs Development", "Rural Development in India & Agriculture Economy"],
                careerRelevance: "Prerequisite for banking, economic analytics, corporate consulting, and public planning."
              },
              {
                code: "ART-106",
                name: "Sociology / Psychology",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Introduction to Sociology / Human Behavior", "Social Institutions: Family, Marriage, Kinship", "Social Stratification & Change in India", "Cognitive Processes & Emotional Well-being"],
                careerRelevance: "Counseling psychology, human resource development, NGO leadership, and societal research."
              }
            ]
          }
        ]
      },
      {
        yearName: "Class 12 (SYJC - HSC)",
        semesters: [
          {
            semesterName: "HSC Board Curriculum",
            subjects: [
              {
                code: "ART-201",
                name: "English (HSC Board Standard)",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Advanced Reading & Textual Analytics", "Communication & Interview Techniques", "Report Writing & Expansion of Ideas", "Novel Appreciation: To Sir, With Love; Around the World"],
                careerRelevance: "Standardized HSC board competence required for national university admissions and professional aptitude tests."
              },
              {
                code: "ART-202",
                name: "Second Language: Marathi / Hindi (HSC)",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Adhunik Marathi/Hindi Sahitya", "Mudrit Madhyamasathi Lekhan (Print & Electronic Journalism)", "Nivadak Nibandh Va Samalochna", "Upyojit Vyakaran"],
                careerRelevance: "State administrative exams, state legislative documentation, media anchoring, and content curation."
              },
              {
                code: "ART-203",
                name: "History (India and the World)",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Renaissance in Europe & Scientific Inventions", "Colonial Dominance & Anti-Colonial Struggles in India", "Mahatma Gandhi & Mass Mobilization", "Post-Independence India & Nation Building"],
                careerRelevance: "Crucial for UPSC General Studies Papers, defense academy tests (CDS/NDA), and educational pedagogy."
              },
              {
                code: "ART-204",
                name: "Political Science (Contemporary World Politics & India)",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["World Politics since 1991 & Globalization", "Key Concepts: Human Rights & Environmental Security", "India's Foreign Policy & Regional Cooperation (SAARC, ASEAN)", "National Integration & Challenges to Security"],
                careerRelevance: "Diplomatic affairs, international relations, legal clerkships, and governance think tanks."
              },
              {
                code: "ART-205",
                name: "Economics (Micro & Macro Economics)",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Introduction to Microeconomics & Utility Analysis", "Demand & Elasticity of Demand Analysis", "National Income Accounting", "Public Finance in India & Central Budgeting"],
                careerRelevance: "Financial analysis, civil services economics paper, academic research, and market intelligence."
              },
              {
                code: "ART-206",
                name: "Sociology / Psychology (HSC Board)",
                type: "Theory",
                domain: "Social Sciences",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Structure of Indian Society & Cultural Diversity", "Social Movements in Contemporary India", "Social Problems: Poverty, Unemployment, Elderly Care", "Personality Development, Mental Health & Stress Coping"],
                careerRelevance: "Corporate HR, social work (MSW), mental health advocacy, and public community leadership."
              }
            ]
          }
        ]
      }
    ]
  },
  junior_commerce: {
    title: "Junior College — Commerce (XI & XII)",
    subtitle: "Maharashtra State Board (MSBSHSE) Curriculum",
    description: "The Commerce program bridges the fundamentals of accounting, corporate organization, mercantile law, and economic markets. Tailored for future Chartered Accountants, Company Secretaries, bankers, and fintech entrepreneurs.",
    accent: "text-emerald-600",
    bgAccent: "bg-emerald-600 hover:bg-emerald-700",
    iconColor: "text-emerald-500",
    bannerGradient: "from-emerald-600/20 via-primary to-[#011a2a]",
    stats: {
      totalCredits: "600 Marks / Year",
      schema: "Maharashtra State Board HSC Scheme",
      theoryCount: "6 Core Subjects",
      labCount: "Tally & Accounting Practical Projects",
      affiliation: "MSBSHSE, Pune Board"
    },
    downloadUrl: "/documents/Indrayani_Junior_Commerce_Syllabus.pdf",
    fileSize: "1.5 MB",
    years: [
      {
        yearName: "Class 11 (FYJC)",
        semesters: [
          {
            semesterName: "Annual Curriculum",
            subjects: [
              {
                code: "COM-101",
                name: "Book-Keeping & Accountancy",
                type: "Theory & Lab",
                domain: "Commerce & Accounts",
                hoursPerWeek: "5 Hours",
                keyUnits: ["Meaning & Fundamentals of Double Entry Book Keeping", "Source Documents & Journalizing", "Ledger Accounts & Subsidiary Books", "Bank Reconciliation Statement (BRS)", "Depreciation & Final Accounts of Sole Trader"],
                careerRelevance: "Fundamental foundation for CA Foundation, CMA, accounting auditing, and commercial finance."
              },
              {
                code: "COM-102",
                name: "Organization of Commerce & Management (OCM)",
                type: "Theory",
                domain: "Commerce & Accounts",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Introduction to Commerce & Business", "Forms of Business Organization: Sole Trader, Partnership, Joint Hindu Family", "Joint Stock Company & Co-operative Society", "Business Services: Banking, Insurance, Warehousing, Transport"],
                careerRelevance: "Corporate management principles, startup establishment, operational logistics, and trade administration."
              },
              {
                code: "COM-103",
                name: "Secretarial Practice (SP) / Mathematics",
                type: "Theory",
                domain: "Commerce & Accounts",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Secretary: Concept, Types & Qualities", "Joint Stock Company: Formation & Capital Structure", "Documents Related to Company: MOA, AOA & Prospectus", "Commercial Mathematics / Statistics for Business"],
                careerRelevance: "Direct stepping stone to Company Secretary (CS) licensure, corporate governance, and quantitative risk."
              },
              {
                code: "COM-104",
                name: "Economics",
                type: "Theory",
                domain: "Commerce & Accounts",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Basic Economic Problems of India", "Poverty, Unemployment & Population Explosion", "Economic Reforms of 1991 (LPG Policies)", "Financial Institutions & Capital Markets"],
                careerRelevance: "Corporate planning, commercial banking exams (IBPS/SBI), financial consultancy, and wealth advisory."
              },
              {
                code: "COM-105",
                name: "Compulsory English",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Corporate Vocabulary & Business Writing", "Email Drafting, Notice & Resolution Framing", "Comprehension & Critical Reading", "Speech Writing & Group Discussion"],
                careerRelevance: "Executive business correspondence, boardroom presentations, and international commerce communications."
              },
              {
                code: "COM-106",
                name: "Second Language: Marathi / Hindi / Information Technology",
                type: "Theory & Lab",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Commercial Translation & Banking Terminology", "MS Office / Advanced Excel for Accounts (for IT)", "Web Development Basics (for IT)", "Literary Appreciation & Official Drafting"],
                careerRelevance: "Digital bookkeeping, state commerce compliance, localized advertising, and office automation."
              }
            ]
          }
        ]
      },
      {
        yearName: "Class 12 (SYJC - HSC)",
        semesters: [
          {
            semesterName: "HSC Board Curriculum",
            subjects: [
              {
                code: "COM-201",
                name: "Book-Keeping & Accountancy (HSC Board)",
                type: "Theory & Lab",
                domain: "Commerce & Accounts",
                hoursPerWeek: "5 Hours",
                keyUnits: ["Partnership Final Accounts & Reconstitution (Admission, Retirement, Death)", "Dissolution of Partnership Firm", "Accounts of 'Not for Profit' Concerns", "Bills of Exchange & Accounting for Shares & Debentures", "Computer in Accounting (Tally ERP/Prime)"],
                careerRelevance: "Core benchmark for CA Foundation / CS Executive exams, corporate tax compliance, and ledger audits."
              },
              {
                code: "COM-202",
                name: "Organization of Commerce & Management (OCM)",
                type: "Theory",
                domain: "Commerce & Accounts",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Principles of Management (Henri Fayol & Taylor)", "Functions of Management: Planning, Organizing, Staffing, Directing, Controlling", "Entrepreneurship Development", "Emerging Modes of Business (E-Commerce)", "Consumer Protection Act 2019 & Marketing Mix"],
                careerRelevance: "BBA/BMS entrance exams, managerial decision making, product brand strategies, and enterprise compliance."
              },
              {
                code: "COM-203",
                name: "Secretarial Practice (SP) / Mathematics",
                type: "Theory",
                domain: "Commerce & Accounts",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Corporate Finance: Sources of Owned & Borrowed Capital", "Capital Raising: Issue of Shares & Debentures", "Deposits, Dividend & Interest Payouts", "Depository System (NSDL & CDSL), Stock Exchange Trading Mechanisms"],
                careerRelevance: "Stock market trading, SEBI compliance, corporate registrar protocols, and mutual fund management."
              },
              {
                code: "COM-204",
                name: "Economics (Micro & Macroeconomics)",
                type: "Theory",
                domain: "Commerce & Accounts",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Theory of Consumer Behavior & Price Elasticity", "Supply Analysis & Forms of Market Structure", "National Income & Money Market in India", "Foreign Trade of India & Central Budget Allocation"],
                careerRelevance: "Treasury management, banking operations, economic forecasting, and commercial real estate modeling."
              },
              {
                code: "COM-205",
                name: "English (Commercial & Literary Communication)",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Formal Business Reports & Press Releases", "Executive Summaries & Resume Writing", "Literature, Drama & Fiction Critical Evaluation", "Applied Grammar & Syntax Precision"],
                careerRelevance: "Campus recruitment interviews, global business negotiations, and corporate communication officer tracks."
              },
              {
                code: "COM-206",
                name: "Second Language / Information Technology",
                type: "Theory & Lab",
                domain: "Commerce & Accounts",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Advanced E-Commerce & E-Governance", "Database Management with RDBMS / Access", "Cyber Security Laws & Digital Signatures", "Practical Application of Accounting Packages"],
                careerRelevance: "Fintech analyst, billing system operator, electronic clearing services, and IT-enabled commerce services."
              }
            ]
          }
        ]
      }
    ]
  },
  junior_science: {
    title: "Junior College — Science (XI & XII)",
    subtitle: "Maharashtra State Board (MSBSHSE) Curriculum",
    description: "Rigorous scientific training integrating deep theoretical concepts with extensive hands-on experimentation in fully equipped physics, chemistry, biology, and computer labs. Pathway to engineering, medical, and pure science careers.",
    accent: "text-cyan-600",
    bgAccent: "bg-cyan-600 hover:bg-cyan-700",
    iconColor: "text-cyan-500",
    bannerGradient: "from-cyan-600/20 via-primary to-[#011a2a]",
    stats: {
      totalCredits: "600 Marks / Year",
      schema: "Maharashtra State Board HSC Scheme",
      theoryCount: "4 Science Modules + Languages",
      labCount: "Weekly 3-Hour Labs per Discipline",
      affiliation: "MSBSHSE, Pune Board"
    },
    downloadUrl: "/documents/Indrayani_Junior_Science_Syllabus.pdf",
    fileSize: "1.8 MB",
    years: [
      {
        yearName: "Class 11 (FYJC)",
        semesters: [
          {
            semesterName: "Annual Curriculum",
            subjects: [
              {
                code: "SCI-101",
                name: "Physics (Theory & Practical)",
                type: "Theory & Lab",
                domain: "Physical Sciences",
                hoursPerWeek: "6 Hours",
                keyUnits: ["Units and Measurements", "Mathematical Methods (Vectors & Calculus)", "Motion in a Plane & Laws of Motion", "Gravitation, Mechanical Properties of Solids", "Sound, Optics, Electrostatics & Semiconductor Basics"],
                careerRelevance: "Essential foundation for MHT-CET, JEE Main, NEET, NDA, and aerospace/mechanical engineering."
              },
              {
                code: "SCI-102",
                name: "Chemistry (Theory & Practical)",
                type: "Theory & Lab",
                domain: "Physical Sciences",
                hoursPerWeek: "6 Hours",
                keyUnits: ["Some Basic Concepts of Chemistry (Mole Concept)", "Structure of Atom & Modern Periodic Table", "Chemical Bonding & Molecular Structure", "Redox Reactions, Hydrogen, s-Block & p-Block Elements", "Basic Principles and Techniques of Organic Chemistry"],
                careerRelevance: "Core prerequisite for chemical engineering, pharmacy, material sciences, and forensic sciences."
              },
              {
                code: "SCI-103",
                name: "Mathematics & Statistics",
                type: "Theory",
                domain: "Mathematics",
                hoursPerWeek: "5 Hours",
                keyUnits: ["Angle and Its Measurement & Trigonometry I & II", "Determinants and Matrices", "Complex Numbers, Permutations and Combinations", "Functions, Limits, Continuity & Differentiation", "Measures of Dispersion & Probability"],
                careerRelevance: "Critical core for JEE, computer science data algorithms, actuarial science, and quantitative finance."
              },
              {
                code: "SCI-104",
                name: "Biology (Theory & Practical) / Computer Science",
                type: "Theory & Lab",
                domain: "Physical Sciences",
                hoursPerWeek: "6 Hours",
                keyUnits: ["Living World & Systematics of Living Organisms", "Kingdom Plantae, Kingdom Animalia", "Cell Structure and Organization, Biomolecules", "Plant Water Relations, Animal Tissues & Human Respiration"],
                careerRelevance: "Mandatory qualification for NEET, MBBS, BDS, B.Pharm, biotechnology, and agricultural sciences."
              },
              {
                code: "SCI-105",
                name: "Compulsory English",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Scientific Reportage & Technical Summaries", "Listening Comprehension & Elocution", "Prose and Poetry Modules", "Mind Mapping & Analytical Drafting"],
                careerRelevance: "Technical communication, competitive exam comprehension, and academic paper presentation."
              },
              {
                code: "SCI-106",
                name: "Marathi / Hindi / Environmental Education",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "3 Hours",
                keyUnits: ["Environmental Projects & Sustainable Development", "Regional Literature & Value Education", "Applied Grammar & Functional Writing"],
                careerRelevance: "Mandatory state board environmental certification and holistic cultural balance."
              }
            ]
          }
        ]
      },
      {
        yearName: "Class 12 (SYJC - HSC)",
        semesters: [
          {
            semesterName: "HSC Board Curriculum",
            subjects: [
              {
                code: "SCI-201",
                name: "Physics (Theory & Practical - HSC)",
                type: "Theory & Lab",
                domain: "Physical Sciences",
                hoursPerWeek: "6 Hours",
                keyUnits: ["Rotational Dynamics & Mechanical Properties of Fluids", "Kinetic Theory of Gases and Radiation", "Thermodynamics & Oscillations", "Wave Optics & Electrostatics", "Current Electricity, Magnetic Fields, AC Circuits & Dual Nature of Radiation"],
                careerRelevance: "Major weighting for MHT-CET, JEE Advanced, robotics, electronics, and quantum engineering."
              },
              {
                code: "SCI-202",
                name: "Chemistry (Theory & Practical - HSC)",
                type: "Theory & Lab",
                domain: "Physical Sciences",
                hoursPerWeek: "6 Hours",
                keyUnits: ["Solid State, Solutions & Ionic Equilibria", "Chemical Thermodynamics & Electrochemistry", "Chemical Kinetics, Elements of Groups 16, 17 and 18", "Coordination Compounds, Halogen Derivatives, Alcohols & Phenols", "Aldehydes, Ketones, Carboxylic Acids, Amines & Biomolecules"],
                careerRelevance: "Petrochemicals, pharmaceutical synthesis, nanotechnology, polymer engineering, and research laboratories."
              },
              {
                code: "SCI-203",
                name: "Mathematics & Statistics (HSC)",
                type: "Theory",
                domain: "Mathematics",
                hoursPerWeek: "5 Hours",
                keyUnits: ["Mathematical Logic, Matrices & Trigonometric Functions", "Pair of Straight Lines, Vectors & 3D Geometry", "Linear Programming Problems (LPP)", "Differentiation, Applications of Derivatives, Indefinite & Definite Integrals", "Differential Equations, Probability Distribution & Binomial Distribution"],
                careerRelevance: "Core mathematical backbone for all engineering specializations, AI/ML, and computational modeling."
              },
              {
                code: "SCI-204",
                name: "Biology (Botany & Zoology) / Computer Science",
                type: "Theory & Lab",
                domain: "Physical Sciences",
                hoursPerWeek: "6 Hours",
                keyUnits: ["Reproduction in Lower and Higher Plants / Animals", "Inheritance and Variation & Molecular Basis of Inheritance", "Origin and Evolution of Life, Plant Growth and Mineral Nutrition", "Respiration and Circulation, Control and Coordination", "Biotechnology: Principles and Processes, Organisms and Populations"],
                careerRelevance: "Medical (NEET), clinical diagnostics, molecular genetics, bioinformatics, and environmental biology."
              },
              {
                code: "SCI-205",
                name: "English (HSC Board Standard)",
                type: "Theory",
                domain: "Language",
                hoursPerWeek: "4 Hours",
                keyUnits: ["Technical Comprehension, Novel Study", "Virtual Communication, Interview Scripts", "Writing Skills & Expansion of Scientific Concepts", "Board Grammar Drills & Fluency"],
                careerRelevance: "Standardized qualification for national entrance eligibility, TOEFL/IELTS baseline, and technical writing."
              },
              {
                code: "SCI-206",
                name: "Environmental Education & Water Security (EVS)",
                type: "Theory & Lab",
                domain: "Physical Sciences",
                hoursPerWeek: "2 Hours",
                keyUnits: ["Water Conservation Techniques & Watershed Management", "Ecosystem Conservation & Biodiversity Hotspots", "Carbon Footprint & Renewable Energy Projects", "Field Project & Viva Voce"],
                careerRelevance: "State mandated environmental certification, green technology awareness, and sustainability ethics."
              }
            ]
          }
        ]
      }
    ]
  },
  senior_bsc: {
    title: "Senior College — B.Sc. (Bachelor of Science)",
    subtitle: "3-Year Degree Program Affiliated with Savitribai Phule Pune University (SPPU)",
    description: "A comprehensive undergraduate program emphasizing empirical scientific inquiry, modern laboratory instrumentation, statistical modeling, and experimental research. Designed to prepare candidates for M.Sc., CSIR-NET, and scientific R&D.",
    accent: "text-blue-600",
    bgAccent: "bg-blue-600 hover:bg-blue-700",
    iconColor: "text-blue-500",
    bannerGradient: "from-blue-600/20 via-primary to-[#011a2a]",
    stats: {
      totalCredits: "132 Credits (CBCS)",
      schema: "SPPU Choice Based Credit System (CBCS)",
      theoryCount: "6 Semesters of Core & Discipline Specific",
      labCount: "Hands-on Analytical & Wet Labs Every Semester",
      affiliation: "Savitribai Phule Pune University"
    },
    downloadUrl: "/documents/Indrayani_SPPU_BSc_Curriculum.pdf",
    fileSize: "2.1 MB",
    years: [
      {
        yearName: "First Year B.Sc. (Semesters I & II)",
        semesters: [
          {
            semesterName: "Semester I",
            subjects: [
              {
                code: "PHY-111",
                name: "Mechanics and Properties of Matter",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Newton's Laws of Motion & Applications", "Rotational Motion & Moment of Inertia", "Elasticity: Modulus of Elasticity, Poisson's Ratio", "Surface Tension & Viscosity: Poiseuille's Equation"],
                careerRelevance: "Fundamental physics foundation for materials testing, mechanical characterization, and applied instrumentation."
              },
              {
                code: "CH-101",
                name: "Physical and Inorganic Chemistry",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Chemical Energetics & First Law of Thermodynamics", "Chemical Equilibrium & Le Chatelier's Principle", "Atomic Structure & Periodic Properties", "Chemical Bonding & VSEPR Theory"],
                careerRelevance: "Essential for chemical processing plants, analytical labs, pharmaceutical quality control, and metallurgical analysis."
              },
              {
                code: "MT-111",
                name: "Algebra and Calculus - I",
                type: "Theory",
                domain: "Mathematics",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Real Numbers & Completeness Axiom", "Sequences, Series & Tests of Convergence", "Differential Calculus: Successive Differentiation, Leibnitz Rule", "Mean Value Theorems & Taylor's Theorem"],
                careerRelevance: "Mathematical modeling, quantitative research, data analytics, and computational science."
              },
              {
                code: "BOT-111 / ZOO-111",
                name: "Plant Diversity / Animal Systematics",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Morphology and Anatomy of Cryptogams", "Taxonomy of Angiosperms", "Invertebrate Diversity & Evolutionary Trends", "Cytology & Cell Division"],
                careerRelevance: "Bio-pharmaceutical research, agro-chemicals, environmental consulting, and ecological conservation."
              },
              {
                code: "PHY-113 & CH-103",
                name: "Physics & Chemistry Practical Laboratory I",
                type: "Practical",
                domain: "Physical Sciences",
                credits: 3,
                hoursPerWeek: "6 Hours",
                keyUnits: ["Measurement of Surface Tension by Jaeger's Method", "Young's Modulus by Cantilever", "Volumetric Titrations (Acid-Base, Redox)", "Qualitative Inorganic Salt Analysis"],
                careerRelevance: "Hands-on mastery of laboratory measurement equipment, precision balances, and chemical reagents."
              }
            ]
          },
          {
            semesterName: "Semester II",
            subjects: [
              {
                code: "PHY-121",
                name: "Heat and Thermodynamics",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Carnot Engine & Second Law of Thermodynamics", "Entropy, Maxwell's Thermodynamic Relations", "Black Body Radiation, Planck's Law", "Liquefaction of Gases"],
                careerRelevance: "Thermal power management, energy auditing, cryogenics, and aerospace heating systems."
              },
              {
                code: "CH-102",
                name: "Organic and Inorganic Chemistry",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Fundamentals of Organic Reaction Mechanisms", "Alkanes, Alkenes, Alkynes & Aromaticity", "Comparative Chemistry of s & p Block Elements", "Principles of Metallurgy"],
                careerRelevance: "Organic synthesis, API manufacturing, plastics, petrochemicals, and agrochemical formulations."
              },
              {
                code: "MT-121",
                name: "Analytical Geometry and Matrices",
                type: "Theory",
                domain: "Mathematics",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Two-Dimensional Coordinate Systems & Conics", "Three-Dimensional Planes, Straight Lines, Spheres", "Matrices, Rank, Eigenvalues and Eigenvectors", "System of Linear Equations"],
                careerRelevance: "Computer graphics algorithms, cryptographic ciphers, and orbital trajectory analysis."
              },
              {
                code: "LAB-123",
                name: "Practical Laboratory Course II",
                type: "Practical",
                domain: "Physical Sciences",
                credits: 3,
                hoursPerWeek: "6 Hours",
                keyUnits: ["Spectrometer Experiments: Angle of Prism & Refractive Index", "Thermal Conductivity by Lee's Disc", "Organic Compound Functional Group Identification", "Standard Buffer Solutions & pH Metry"],
                careerRelevance: "Direct industrial readiness for wet chemical labs and quality inspection centers."
              }
            ]
          }
        ]
      },
      {
        yearName: "Second Year B.Sc. (Semesters III & IV)",
        semesters: [
          {
            semesterName: "Semester III & IV",
            subjects: [
              {
                code: "PHY-231",
                name: "Mathematical Methods in Physics & Electromagnetics",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Vector Calculus: Divergence, Curl, Gauss's & Stokes' Theorems", "Electrostatic Potential & Dielectrics", "Biot-Savart Law, Ampere's Law & Faraday's Law", "Maxwell's Equations & Electromagnetic Waves"],
                careerRelevance: "Telecommunications, antenna design, radar operations, and electromagnetic shielding."
              },
              {
                code: "CH-231",
                name: "Physical and Analytical Chemistry",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Chemical Kinetics: Rate Laws & Arrhenius Equation", "Photochemistry & Beer-Lambert Law", "Spectrophotometry, Flame Photometry", "Chromatography: TLC, Column, Paper"],
                careerRelevance: "Instrumental chemical testing, environmental effluent monitoring, and forensic toxicology."
              },
              {
                code: "CH-232",
                name: "Organic and Inorganic Chemistry",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Alcohols, Phenols, Ethers & Carbonyl Compounds", "Carboxylic Acids and Derivatives", "Transition Metal Chemistry & Crystal Field Theory", "Bioinorganic Chemistry Basics"],
                careerRelevance: "Dye industries, pharmaceutical formulation, paint technologies, and catalyst production."
              },
              {
                code: "EVS-201",
                name: "Environmental Science & Sustainable Ecology",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 2,
                hoursPerWeek: "2 Hours",
                keyUnits: ["Natural Resources Management & Conservation", "Pollution Control: Air, Water, Noise, Solid Waste", "Environmental Impact Assessment (EIA) Regulations", "Field Visit to Sahyadri Western Ghats Ecosystem"],
                careerRelevance: "Environmental governance, CSR officer, pollution control board compliance."
              }
            ]
          }
        ]
      },
      {
        yearName: "Third Year B.Sc. (Semesters V & VI)",
        semesters: [
          {
            semesterName: "Semester V & VI (Specialization & Research)",
            subjects: [
              {
                code: "SPEC-351",
                name: "Advanced Core Physics / Chemistry / Mathematics",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 4,
                hoursPerWeek: "4 Hours",
                keyUnits: ["Quantum Mechanics & Atomic Spectra", "Nuclear Physics & Particle Detectors", "Advanced Coordination Chemistry & Organometallics", "Spectroscopic Identification of Organic Compounds (NMR, IR, UV, MS)"],
                careerRelevance: "National laboratory research (BARC, ISRO, CSIR, TIFR) and higher postgraduate university admissions."
              },
              {
                code: "SPEC-352",
                name: "Instrumentation, Industrial Chemistry & Spectroscopy",
                type: "Theory",
                domain: "Physical Sciences",
                credits: 4,
                hoursPerWeek: "4 Hours",
                keyUnits: ["Gas Chromatography (GC) & High-Performance Liquid Chromatography (HPLC)", "X-ray Diffraction (XRD) & Electron Microscopy", "Industrial Safety, Green Chemistry & Waste Treatment", "Computational Chemistry & Molecular Docking"],
                careerRelevance: "Immediate job placement in QA/QC analytical labs, API manufacturing, and materials science testing."
              },
              {
                code: "PROJ-360",
                name: "Undergraduate Dissertation & Experimental Project",
                type: "Practical",
                domain: "Physical Sciences",
                credits: 4,
                hoursPerWeek: "6 Hours",
                keyUnits: ["Literature Review & Problem Formulation", "Design of Experiments (DoE) & Data Acquisition", "Statistical Analysis & Error Propagation", "Dissertation Writing, Viva Voce & Poster Presentation"],
                careerRelevance: "Essential publication portfolio for M.Sc. scholarship applications and corporate R&D recruitments."
              }
            ]
          }
        ]
      }
    ]
  },
  senior_bcs: {
    title: "Senior College — BCS (Bachelor of Computer Science)",
    subtitle: "3-Year Degree Program Affiliated with Savitribai Phule Pune University (SPPU)",
    description: "An intensive software engineering and computer science curriculum covering modern programming languages, data structures, cloud systems, relational databases, AI fundamentals, and full-stack software development.",
    accent: "text-indigo-600",
    bgAccent: "bg-indigo-600 hover:bg-indigo-700",
    iconColor: "text-indigo-500",
    bannerGradient: "from-indigo-600/20 via-primary to-[#011a2a]",
    stats: {
      totalCredits: "132 Credits (CBCS)",
      schema: "SPPU Choice Based Credit System (CBCS)",
      theoryCount: "6 Semesters of Core Computing & Applied Math",
      labCount: "Hands-on High-Performance Terminal & Web Labs",
      affiliation: "Savitribai Phule Pune University"
    },
    downloadUrl: "/documents/Indrayani_SPPU_BCS_Curriculum.pdf",
    fileSize: "2.3 MB",
    years: [
      {
        yearName: "First Year BCS (Semesters I & II)",
        semesters: [
          {
            semesterName: "Semester I",
            subjects: [
              {
                code: "CS-101",
                name: "Problem Solving Using Computer and 'C' Programming",
                type: "Theory",
                domain: "Computer Science",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Problem Solving & Algorithm Design, Flowcharts", "Basics of 'C': Data Types, Operators, Control Structures", "Functions, Recursion, Storage Classes", "Arrays, Strings, Pointers and Dynamic Memory Allocation (DMA)", "Structures, Unions and File Handling"],
                careerRelevance: "Core algorithmic thinking, systems programming, and prerequisite for all modern programming stacks."
              },
              {
                code: "CS-102",
                name: "Database Management Systems (DBMS)",
                type: "Theory",
                domain: "Computer Science",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["File Systems vs DBMS Architecture", "Entity-Relationship (ER) Modeling & Relational Model", "Relational Algebra & Structured Query Language (SQL)", "Integrity Constraints, Views, Triggers, Stored Procedures", "Normalization (1NF, 2NF, 3NF, BCNF)"],
                careerRelevance: "Backend database engineering, data administration, SQL developer roles, and cloud data stores."
              },
              {
                code: "EL-101",
                name: "Basic Electronics & Digital Electronics",
                type: "Theory",
                domain: "Computer Science",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Number Systems, Boolean Algebra & Logic Gates", "Combinational Circuits: Adders, MUX, DEMUX, Encoders", "Sequential Circuits: Flip-Flops, Counters, Shift Registers", "Microprocessor 8085 Architecture Overview"],
                careerRelevance: "Hardware-software interfacing, embedded computing, IoT firmware development, and computer architecture."
              },
              {
                code: "MT-101",
                name: "Discrete Mathematics & Graph Theory",
                type: "Theory",
                domain: "Mathematics",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Set Theory, Relations & Equivalence Classes", "Mathematical Induction & Recurrence Relations", "Graph Theory: Paths, Circuits, Trees & Spanning Trees", "Boolean Algebras & Switching Circuits"],
                careerRelevance: "Algorithm complexity analysis, networking topology design, compiler construction, and AI logic."
              },
              {
                code: "CS-103",
                name: "Computer Science Practical Lab I ('C' & SQL)",
                type: "Practical",
                domain: "Computer Science",
                credits: 4,
                hoursPerWeek: "6 Hours",
                keyUnits: ["Implementation of 25+ Algorithmic 'C' Programs", "Pointer Arithmetic and Linked Memory Management", "DDL, DML, DCL Query Execution in MySQL/PostgreSQL", "Complex Joins, Subqueries & Trigger Implementation"],
                careerRelevance: "Practical coding fluency tested during initial rounds of campus technical placement tests."
              }
            ]
          },
          {
            semesterName: "Semester II",
            subjects: [
              {
                code: "CS-104",
                name: "Advanced 'C' & Data Structures Basics",
                type: "Theory",
                domain: "Computer Science",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Abstract Data Types (ADT) & Complexity (Big-O)", "Linear Data Structures: Stacks, Queues (Circular, Priority)", "Linked Lists: Singly, Doubly, Circular Implementations", "Searching (Linear, Binary) & Sorting (Bubble, Insertion, Quick, Merge)"],
                careerRelevance: "Technical interview preparation for product and service MNCs like TCS, Infosys, Wipro, and Cognizant."
              },
              {
                code: "CS-105",
                name: "Relational Database Management Systems (RDBMS)",
                type: "Theory",
                domain: "Computer Science",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Transaction Processing & ACID Properties", "Concurrency Control Techniques (Locks, Timestamps)", "Crash Recovery: Log-Based, Checkpointing", "PL/pgSQL Programming: Cursors, Exceptions, Packages"],
                careerRelevance: "High-concurrency banking database support, fintech backend engineering, and cloud DB deployment."
              },
              {
                code: "CS-106",
                name: "Computer Science Practical Lab II (Data Structures)",
                type: "Practical",
                domain: "Computer Science",
                credits: 4,
                hoursPerWeek: "6 Hours",
                keyUnits: ["Stack Applications: Infix to Postfix Conversion & Evaluation", "Queue Implementations in System Scheduling", "Linked List Manipulation & Polynomial Addition", "Benchmarking Sorting Algorithms Against Execution Time"],
                careerRelevance: "Applied algorithmic mastery and competitive programming skills."
              }
            ]
          }
        ]
      },
      {
        yearName: "Second Year BCS (Semesters III & IV)",
        semesters: [
          {
            semesterName: "Semester III & IV",
            subjects: [
              {
                code: "CS-231",
                name: "Data Structures and Algorithms - II (Advanced)",
                type: "Theory",
                domain: "Computer Science",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Non-Linear Data Structures: Trees, Binary Search Trees (BST), AVL Trees", "B-Trees & B+ Trees in Databases", "Graph Algorithms: BFS, DFS, Dijkstra's Shortest Path, Prim's & Kruskal's", "Hashing Techniques: Hash Functions, Collision Resolution"],
                careerRelevance: "Advanced algorithmic problem-solving for top-tier software engineering roles."
              },
              {
                code: "CS-232",
                name: "Software Engineering & Agile Methodologies",
                type: "Theory",
                domain: "Computer Science",
                credits: 2,
                hoursPerWeek: "3 Hours",
                keyUnits: ["Software Development Life Cycle (SDLC) Models (Waterfall, Spiral, Agile/Scrum)", "Requirements Engineering & SRS Document Creation", "System Modeling using UML: Use Case, Class, Sequence, Activity Diagrams", "Software Testing: Black Box, White Box, Unit & Integration Testing"],
                careerRelevance: "Quality assurance engineering, Scrum Master foundations, systems analysis, and enterprise architecture."
              },
              {
                code: "CS-241",
                name: "Object-Oriented Concepts Using C++ & Java",
                type: "Theory & Lab",
                domain: "Computer Science",
                credits: 4,
                hoursPerWeek: "5 Hours",
                keyUnits: ["OOP Principles: Encapsulation, Inheritance, Polymorphism, Abstraction", "Constructors, Destructors, Operator Overloading, Templates & STL", "Java Fundamentals: JVM Architecture, Packages, Interfaces", "Exception Handling, Multithreading & Event-Driven GUI Programming"],
                careerRelevance: "Enterprise application engineering, Android development, and enterprise Java/Spring development."
              },
              {
                code: "CS-242",
                name: "Operating Systems & Linux Shell Scripting",
                type: "Theory & Lab",
                domain: "Computer Science",
                credits: 3,
                hoursPerWeek: "4 Hours",
                keyUnits: ["OS Concepts: Process Management, CPU Scheduling Algorithms", "Deadlocks: Prevention, Avoidance (Banker's Algorithm), Detection", "Memory Management: Paging, Segmentation, Virtual Memory", "Unix/Linux Architecture, Bash Shell Scripting & System Calls"],
                careerRelevance: "DevOps engineering, Linux system administration, cloud infrastructure, and site reliability engineering."
              }
            ]
          }
        ]
      },
      {
        yearName: "Third Year BCS (Semesters V & VI)",
        semesters: [
          {
            semesterName: "Semester V & VI",
            subjects: [
              {
                code: "CS-351",
                name: "Web Technologies (Full-Stack Architecture)",
                type: "Theory & Lab",
                domain: "Computer Science",
                credits: 4,
                hoursPerWeek: "5 Hours",
                keyUnits: ["HTML5, CSS3, Responsive Design & CSS Frameworks", "JavaScript (ES6+), DOM Manipulation, Fetch API & Async/Await", "Server-Side Scripting: Node.js & Express / PHP", "RESTful API Design, JSON Data Exchange & React.js Overview"],
                careerRelevance: "Full-stack web developer, frontend engineer, API architect, and freelance digital developer."
              },
              {
                code: "CS-352",
                name: "Python Programming & Data Analytics",
                type: "Theory & Lab",
                domain: "Computer Science",
                credits: 4,
                hoursPerWeek: "5 Hours",
                keyUnits: ["Python Syntax, Data Structures (Lists, Tuples, Dictionaries, Sets)", "Functional Programming, OOP in Python, File & Exception Handling", "Scientific Computing: NumPy (Arrays), Pandas (DataFrames), Matplotlib/Seaborn", "Machine Learning Basics: Scikit-Learn Regression & Classification"],
                careerRelevance: "Data analyst, machine learning engineer, automation specialist, and computational scientist."
              },
              {
                code: "CS-353",
                name: "Computer Networks & Cloud Computing",
                type: "Theory",
                domain: "Computer Science",
                credits: 3,
                hoursPerWeek: "3 Hours",
                keyUnits: ["OSI & TCP/IP Reference Models, IP Addressing & Subnetting", "Routing Protocols, Transport Layer (TCP, UDP), DNS, HTTP/HTTPS", "Cloud Models: IaaS, PaaS, SaaS & Virtualization Technologies", "Public Cloud Platforms: AWS EC2/S3 basics, Cloud Security & Containers (Docker)"],
                careerRelevance: "Network administration, cloud solutions associate, cyber defense, and cloud operations."
              },
              {
                code: "CS-360",
                name: "Capstone Industry Project & Technical Viva",
                type: "Practical",
                domain: "Computer Science",
                credits: 4,
                hoursPerWeek: "6 Hours",
                keyUnits: ["Project Inception, Problem Identification & SRS Documentation", "Architecture Design, Database Schema & UI Mockups", "Agile Sprint Development & Git Version Control Integration", "Live Deployment, Automated Testing & Final Defense before SPPU Board"],
                careerRelevance: "Primary showcase portfolio piece for hiring managers and campus technical recruitments."
              }
            ]
          }
        ]
      }
    ]
  }
};

export default function Syllabus() {
  const { toast } = useToast();
  const [activeCourseKey, setActiveCourseKey] = useState<string>("junior_arts");
  const [activeYearIndex, setActiveYearIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  const activeProgram = SYLLABUS_DATABASE[activeCourseKey] || SYLLABUS_DATABASE.junior_arts;
  const currentYear = activeProgram.years[activeYearIndex] || activeProgram.years[0];

  const handleDownload = (prog: ProgramData) => {
    toast({
      title: "Downloading Syllabus",
      description: `Downloading ${prog.title} syllabus document (${prog.fileSize})...`,
    });
    const link = document.createElement("a");
    link.href = prog.downloadUrl;
    link.download = prog.downloadUrl.split("/").pop() || "Syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSemesters = useMemo(() => {
    return currentYear.semesters.map(sem => {
      const filteredSubs = sem.subjects.filter(sub => {
        const matchesSearch = 
          sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.keyUnits.some(unit => unit.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesDomain = selectedDomain === "all" || sub.domain === selectedDomain;

        return matchesSearch && matchesDomain;
      });
      return {
        ...sem,
        subjects: filteredSubs
      };
    });
  }, [currentYear, searchQuery, selectedDomain]);

  return (
    <AppLayout>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-primary to-[#011a2a]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4" /> Academic Curricula & Syllabi
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Curriculum & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">Course Schemes</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 font-normal max-w-2xl mx-auto leading-relaxed">
              Explore subject syllabi, module outlines, credit structures, and laboratory practical guidelines for Junior College (Arts, Commerce, Science) and Senior College (B.Sc., BCS) at Indrayani Mahavidyalaya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Selector Tabs */}
      <section className="py-6 bg-muted/40 border-b border-border/50 sticky top-16 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "junior_arts", label: "XI & XII Arts", icon: Palette, tag: "Junior" },
              { id: "junior_commerce", label: "XI & XII Commerce", icon: TrendingUp, tag: "Junior" },
              { id: "junior_science", label: "XI & XII Science", icon: Atom, tag: "Junior" },
              { id: "senior_bsc", label: "B.Sc. (Degree)", icon: Microscope, tag: "SPPU Degree" },
              { id: "senior_bcs", label: "BCS (Comp. Sci)", icon: Code, tag: "SPPU Degree" },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeCourseKey === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCourseKey(tab.id);
                    setActiveYearIndex(0);
                    setSearchQuery("");
                    setSelectedDomain("all");
                  }}
                  className={`cursor-pointer shrink-0 flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 border ${
                    isActive 
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-[1.02]" 
                      : "bg-white/80 text-foreground hover:bg-white border-border/60 hover:border-primary/40"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                    isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {tab.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Program Overview Banner */}
          <div className="bg-white border border-border rounded-3xl p-6 md:p-8 shadow-sm mb-10 relative overflow-hidden">
            <div className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-10 bg-current ${activeProgram.iconColor}`} />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-3xl">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {activeProgram.subtitle}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                  {activeProgram.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeProgram.description}
                </p>

                {/* Quick Meta Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-[10px] font-semibold text-muted-foreground block uppercase">Evaluation Scheme</span>
                    <span className="text-xs font-bold text-foreground">{activeProgram.stats.schema}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-[10px] font-semibold text-muted-foreground block uppercase">Structure</span>
                    <span className="text-xs font-bold text-foreground">{activeProgram.stats.totalCredits}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-[10px] font-semibold text-muted-foreground block uppercase">Practicals</span>
                    <span className="text-xs font-bold text-foreground">{activeProgram.stats.labCount}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/50">
                    <span className="text-[10px] font-semibold text-muted-foreground block uppercase">Affiliation</span>
                    <span className="text-xs font-bold text-foreground">{activeProgram.stats.affiliation}</span>
                  </div>
                </div>
              </div>

              {/* Download Syllabus PDF CTA */}
              <div className="shrink-0 flex flex-col gap-2">
                <button
                  onClick={() => handleDownload(activeProgram)}
                  className={`cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white text-xs md:text-sm font-bold shadow-md transition-all hover:scale-[1.02] ${activeProgram.bgAccent}`}
                >
                  <FileDown className="w-4 h-4" /> Download Official Syllabus PDF
                </button>
                <span className="text-[11px] text-muted-foreground text-center">
                  Official Syllabus Document ({activeProgram.fileSize})
                </span>
              </div>
            </div>
          </div>

          {/* Year / Level Selector & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Year Switcher */}
            <div className="inline-flex p-1 bg-muted rounded-2xl border border-border w-full md:w-auto">
              {activeProgram.years.map((yr, idx) => (
                <button
                  key={yr.yearName}
                  onClick={() => setActiveYearIndex(idx)}
                  className={`cursor-pointer flex-1 md:flex-initial px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeYearIndex === idx
                      ? "bg-white text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {yr.yearName}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject or topic units..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-border rounded-xl text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Subject Cards by Semester/Term */}
          <div className="space-y-10">
            {filteredSemesters.map((sem, sIdx) => (
              <div key={sIdx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-1.5 rounded-full bg-accent" />
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {sem.semesterName}
                  </h3>
                  <span className="text-xs text-muted-foreground font-medium">
                    ({sem.subjects.length} Subjects)
                  </span>
                </div>

                {sem.subjects.length === 0 ? (
                  <div className="text-center py-10 bg-white border border-dashed border-border rounded-2xl">
                    <p className="text-xs text-muted-foreground">No subjects found matching "{searchQuery}".</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {sem.subjects.map((sub, subIdx) => (
                      <motion.div
                        key={sub.code}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: subIdx * 0.04 }}
                        className="bg-white border border-border rounded-2xl p-5 shadow-xs hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-2.5">
                            <div>
                              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                                {sub.code}
                              </span>
                              <span className="ml-2 text-[10px] text-muted-foreground font-medium">
                                {sub.type} {sub.credits ? `• ${sub.credits} Credits` : ""}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                              {sub.hoursPerWeek}
                            </span>
                          </div>

                          <h4 className="text-base font-extrabold text-foreground leading-snug mb-3">
                            {sub.name}
                          </h4>

                          {/* Key Syllabus Modules */}
                          <div className="mb-4">
                            <span className="text-[11px] font-bold text-foreground/80 block mb-1.5 uppercase tracking-wide">
                              Core Curriculum Modules:
                            </span>
                            <ul className="space-y-1.5">
                              {sub.keyUnits.map((unit, uIdx) => (
                                <li key={uIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                  <span className="leading-tight">{unit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Career Relevance */}
                        <div className="pt-3 border-t border-border/60 mt-2 bg-muted/20 -mx-5 -mb-5 p-4 rounded-b-2xl">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-0.5">
                            Practical & Career Significance:
                          </span>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {sub.careerRelevance}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Academic Governance & University Guidelines */}
          <div className="mt-16 bg-muted/30 border border-border rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <HelpCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-foreground">Curriculum & Examination Governance</h3>
                <p className="text-xs text-muted-foreground">Official regulatory framework governing Indrayani Mahavidyalaya</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground">
              <div className="p-4 bg-white rounded-xl border border-border/60 space-y-1.5">
                <span className="font-bold text-foreground block">Junior College (HSC Board Rules)</span>
                <p>Curriculum design, internal evaluation (20 marks continuous assessment) and annual board theory exams (80 marks) follow the Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE), Pune Division regulations.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-border/60 space-y-1.5">
                <span className="font-bold text-foreground block">Senior College (SPPU University Rules)</span>
                <p>Undergraduate B.Sc. and BCS follow the Choice Based Credit System (CBCS) prescribed by Savitribai Phule Pune University (SPPU). Includes Concurrent Evaluation (Continuous Internal Assessment) and End-Semester University Theory & Practical Examinations.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </AppLayout>
  );
}
