import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { CommerceCanvas3D } from "@/components/3d/CommerceCanvas3D";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  TrendingUp,
  BarChart3,
  Coins,
  Building,
  GraduationCap,
  Users,
  CheckCircle2,
  ArrowRight,
  Download,
  FileSpreadsheet,
  LineChart,
  ShieldCheck,
  Calculator,
  Briefcase,
  Mail,
  PieChart,
  Sparkles,
  Info,
  DollarSign,
  Layers,
} from "lucide-react";

export default function CommercePage() {
  const [activeTab, setActiveTab] = useState<"curriculum" | "pathways" | "labs" | "faculty" | "admissions">("curriculum");

  const subjectsCommerce = [
    {
      code: "BK-01",
      name: "Book-Keeping & Accountancy",
      category: "Core Professional",
      desc: "Fundamental principles of double-entry accounting, ledger posting, trial balance, final accounts of proprietary & partnership firms, and company accounts.",
    },
    {
      code: "OCM-02",
      name: "Organization of Commerce & Management",
      category: "Management & Enterprise",
      desc: "Forms of business ownership, domestic and international trade, principles and functions of modern management, entrepreneurship, and consumer protection acts.",
    },
    {
      code: "ECON-03",
      name: "Economics (Micro & Macro)",
      category: "Applied Economics",
      desc: "Consumer behavior, market price determination, national income, public revenue and expenditure, monetary policy, and Reserve Bank of India framework.",
    },
    {
      code: "SP/MATH-04",
      name: "Secretarial Practice / Maths & Stats",
      category: "Elective Specialization",
      desc: "Choice between corporate governance, company meetings and capital formation (SP) OR financial mathematics, commercial algebra, and statistical calculus.",
    },
    {
      code: "ENG-05",
      name: "Compulsory English",
      category: "Business Communications",
      desc: "Formal commercial correspondence, corporate reporting, analytical reading, oral presentation skills, and professional discourse.",
    },
    {
      code: "LANG/IT-06",
      name: "Modern Language / Information Tech",
      category: "Language & Computing",
      desc: "Choice between regional literary expression (Marathi / Hindi) or Information Technology applied to business documentation, spreadsheets, and databases.",
    },
    {
      code: "EVS-07",
      name: "Environmental Education & PE",
      category: "Mandatory Board Unit",
      desc: "Corporate environmental responsibility, industrial sustainable development, resource conservation, and mandatory physical fitness grading.",
    },
  ];

  const facultyCommerce = [
    {
      name: "Dr. Pratibha S. Bhalerao",
      role: "Head of Department (Commerce) & Associate Professor",
      qualification: "M.Com., Ph.D., GDC&A",
      specialization: "Advanced Financial Accounting, Corporate Taxation & Banking Operations",
      email: "commerce.dept@indrayanicollege.com",
    },
    {
      name: "Prof. Anjali D. Joshi",
      role: "Assistant Professor in Commerce & Costing",
      qualification: "M.Com., MBA (Finance), SET",
      specialization: "Cost Accounting, Auditing & Financial Capital Markets",
      email: "costing.dept@indrayanicollege.com",
    },
    {
      name: "Prof. Mahesh V. Shinde",
      role: "Lecturer in Organization of Commerce (OCM)",
      qualification: "M.Com., B.Ed., NET",
      specialization: "Business Management Principles, Retail Logistics & Entrepreneurship",
      email: "ocm.dept@indrayanicollege.com",
    },
    {
      name: "Prof. Swapnil G. Patil",
      role: "Lecturer in Commercial Mathematics & Statistics",
      qualification: "M.Sc. (Applied Maths), SET",
      specialization: "Financial Mathematics, Commercial Matrices & Applied Probability",
      email: "maths.dept@indrayanicollege.com",
    },
  ];

  return (
    <AppLayout>
      {/* 1. CINEMATIC FULL-WIDTH INTEGRATED 3D COMMERCE HERO */}
      <section className="relative w-full min-h-[660px] lg:min-h-[760px] bg-[#021313] text-white overflow-hidden flex items-center">
        {/* Deep emerald and bronze ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_35%,rgba(5,150,105,0.2),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(13,148,136,0.12),transparent_70%)] pointer-events-none" />

        {/* Precision financial grid wireframe background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* 3D Atmospheric Canvas Layer - Seamless integration */}
        <div className="absolute inset-0 z-0 opacity-90 lg:opacity-100 pointer-events-auto">
          <CommerceCanvas3D className="w-full h-full" />
        </div>

        {/* Soft atmospheric gradient falloff on the left */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#021313] via-[#021313]/90 to-transparent lg:w-[62%]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
          <div className="max-w-2xl space-y-6 text-left">
            
            {/* Stream badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/25 backdrop-blur-md text-emerald-300 text-xs font-semibold tracking-widest uppercase">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Junior College • 11th & 12th Commerce</span>
            </div>

            {/* Architectural Modern Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.08]">
              The Architecture of <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
                Modern Commerce & Finance
              </span>
            </h1>

            {/* Academic Narrative */}
            <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-sans max-w-xl">
              Cultivating mastery over financial accounting, enterprise systems, economic dynamics, and modern taxation. Indrayani Mahavidyalaya Junior College offers Class 11 (FYJC) and Class 12 (SYJC) Commerce under the Maharashtra State Board.
            </p>

            {/* Verified Academic Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-emerald-500/20 max-w-lg">
              <div>
                <span className="block text-xs uppercase tracking-wider text-emerald-400/80 font-mono">Academic Levels</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-100 mt-0.5 block">FYJC & SYJC</span>
                <span className="text-[11px] text-emerald-200/60">Class 11 & Class 12</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-emerald-400/80 font-mono">Affiliated Board</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-100 mt-0.5 block">MSBSHSE</span>
                <span className="text-[11px] text-emerald-200/60">Pune Divisional Board</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-xs uppercase tracking-wider text-emerald-400/80 font-mono">Practical Lab</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-100 mt-0.5 block">Tally & IT</span>
                <span className="text-[11px] text-emerald-200/60">Digital Accounting</span>
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 h-12 shadow-lg shadow-emerald-950/60 rounded-xl transition-all">
                  Apply for FYJC Commerce 2026-27 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="#curriculum">
                <Button size="lg" variant="outline" className="border-emerald-400/30 text-emerald-200 hover:bg-white/10 hover:text-white h-12 rounded-xl backdrop-blur-sm">
                  View Commerce Subjects
                </Button>
              </a>
            </div>

            {/* 3D Interaction Hint */}
            <div className="flex items-center gap-2 pt-2 text-xs text-emerald-300/70 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Interactive 3D Economic Core: Move cursor to rotate financial towers, frosted ledger & minted currency</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NAVIGATION TABS */}
      <section className="sticky top-[64px] md:top-[80px] z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 overflow-x-auto">
          <div className="flex items-center gap-2 py-3 min-w-max">
            {[
              { id: "curriculum", label: "Subject Curriculum", icon: LineChart },
              { id: "pathways", label: "CA / CS / Professional Pathways", icon: Briefcase },
              { id: "labs", label: "Computerized Accounting Lab", icon: FileSpreadsheet },
              { id: "faculty", label: "Faculty Directory", icon: Users },
              { id: "admissions", label: "Eligibility & Board Guidelines", icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-emerald-700 text-white shadow-sm shadow-emerald-900/30"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT BODY */}
      <section className="py-16 md:py-24 bg-muted/20" id="curriculum">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* TAB 1: CURRICULUM */}
          {activeTab === "curriculum" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <Calculator className="w-3.5 h-3.5" />
                  MSBSHSE Prescribed Commerce Stream
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Class 11 & Class 12 Commerce Subject Framework
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  The Commerce stream at Indrayani Mahavidyalaya builds foundational analytical precision in accounting methodologies, corporate business structures, macroeconomic indicators, and trade regulation.
                </p>
              </div>

              {/* Subject Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {subjectsCommerce.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-card border border-border/70 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {sub.code}
                        </span>
                        <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium font-mono">
                          {sub.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-sans font-bold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/40 mt-4 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                      <span>Assessment</span>
                      <span className="font-semibold text-foreground">Board 80 + 20 Marks</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Elective Note */}
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">
                      Elective Choice: Secretarial Practice (SP) vs. Commercial Mathematics
                    </p>
                    <p>
                      Students intending to pursue CA/CS/Corporate Law typically opt for Secretarial Practice, while students aspiring toward Actuarial Science, Econometrics, and Quantitative Finance can choose Mathematics & Statistics.
                    </p>
                  </div>
                </div>
                <Link href="/admissions">
                  <Button size="sm" variant="outline" className="border-emerald-600/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/10 shrink-0">
                    Consult Admission Counselor
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: PATHWAYS */}
          {activeTab === "pathways" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Professional Horizons
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Professional Accreditations & Career Pathways
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Junior College Commerce serves as the essential launchpad for prestigious national professional certifications and university finance degrees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Chartered Accountancy (CA)",
                    body: "Institute of Chartered Accountants of India (ICAI)",
                    desc: "Rigorous preparation for CA Foundation, leading toward auditing, corporate taxation, statutory reporting, and CFO roles.",
                  },
                  {
                    title: "Company Secretary (CS)",
                    body: "Institute of Company Secretaries of India (ICSI)",
                    desc: "Focus on corporate secretarial law, board compliance, SEBI securities regulations, and capital market advisory.",
                  },
                  {
                    title: "Cost & Management Accounting (CMA)",
                    body: "Institute of Cost Accountants of India (ICMAI)",
                    desc: "Specialization in operational cost analysis, industrial audit, budget forecasting, and corporate strategy.",
                  },
                  {
                    title: "Banking & Financial Services",
                    body: "IBPS / RBI / Investment Banking",
                    desc: "Foundation for banking officer examinations, equity research, financial modeling, and wealth management portfolios.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-sans font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 mt-1">{item.body}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LABS */}
          {activeTab === "labs" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  Practical Infrastructure
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Computerized Accounting & Financial Systems Lab
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Bridging traditional manual ledgers with modern electronic enterprise tools to ensure students are immediately job-capable and commercially literate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-card border border-border/70 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-foreground">Tally Prime & Ledger Automation</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Practical sessions on creating company profiles, voucher entries, bank reconciliations, inventory books, and automated balance sheets.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-card border border-border/70 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-foreground">GST & Taxation Simulation</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Understanding CGST, SGST, IGST tax invoicing, input tax credits (ITC), and practical e-way bill generation mechanics.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-card border border-border/70 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-foreground">Spreadsheet Financial Modeling</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Advanced Microsoft Excel / Calc workflows covering financial functions (NPV, IRR, PMT), pivot tables, and statistical trend projections.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FACULTY */}
          {activeTab === "faculty" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <Users className="w-3.5 h-3.5" />
                  Faculty Directory
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Faculty of Commerce & Accountancy
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our Commerce faculty members combine academic scholarship with professional audit, taxation, and management credentials under the Maharashtra State Board.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facultyCommerce.map((fac, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-sans font-bold text-foreground">{fac.name}</h3>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">{fac.role}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono">
                        Commerce Faculty
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground"><strong>Qualifications:</strong> {fac.qualification}</p>
                    <p className="text-xs text-muted-foreground"><strong>Specialization:</strong> {fac.specialization}</p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{fac.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ADMISSIONS */}
          {activeTab === "admissions" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Official Admission Guidelines
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Eligibility & Admission Regulations (FYJC Commerce)
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Admissions to Class 11 Commerce are conducted strictly through the Centralized Admission Process (CAP) of Pune Division and institutional reservation norms.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Requirements */}
                <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                  <h3 className="text-xl font-sans font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Qualifying Criteria
                  </h3>
                  <ul className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Candidate must have passed Class 10 (SSC) examination from the Maharashtra State Board or any recognized equivalent board (CBSE, ICSE).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Mathematics in 10th standard is mandatory only if opting for Commercial Mathematics in 11th Commerce.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>Centralized CAP round merit list and option form submission required.</span>
                    </li>
                  </ul>
                </div>

                {/* Documents */}
                <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                  <h3 className="text-xl font-sans font-bold text-foreground flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                    Required Documents
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {[
                      "Original 10th Marks Sheet + 3 Attested Copies",
                      "Original School Leaving Certificate (SLC / TC)",
                      "Online CAP Registration & Option Form Allotment Copy",
                      "Aadhaar Card Photocopy",
                      "Caste Certificate & Validity (if applicable)",
                      "Passport size recent photographs (4 copies)",
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Admissions Desk */}
                <div className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/30 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-sans font-bold text-foreground">
                      Commerce Admission Guidance Desk
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Assistance with choosing between Secretarial Practice and Mathematics, verification of original certificates, and CAP confirmation is available at our Talegaon Dabhade campus.
                    </p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <Link href="/admissions">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">
                        Visit Admissions Portal
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-border">
                        Campus Office & Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-[#021415] text-white border-t border-emerald-900/40">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-6">
          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 text-xs px-3 py-1 font-mono">
            Academic Year 2026-27
          </Badge>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight">
            Build Your Future in Enterprise & Financial Leadership
          </h2>
          <p className="text-emerald-100/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Class 11 (FYJC) Commerce admissions are conducted through the Centralized Online Admission Process (CAP) of Pune Division.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/admissions">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 h-12 rounded-xl shadow-xl shadow-emerald-950/60">
                Explore Admissions Information
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-emerald-400/30 text-emerald-200 hover:bg-white/10 h-12 rounded-xl">
                Contact College Campus Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
