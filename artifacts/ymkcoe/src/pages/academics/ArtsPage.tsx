import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ArtsCanvas3D } from "@/components/3d/ArtsCanvas3D";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  FileText,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Download,
  Scroll,
  PenTool,
  Sparkles,
  Compass,
  Globe2,
  Mail,
  ChevronRight,
  Library,
  Feather,
  Landmark,
  ExternalLink,
  Info,
} from "lucide-react";

export default function ArtsPage() {
  const [activeTab, setActiveTab] = useState<"curriculum" | "faculty" | "eligibility" | "resources">("curriculum");

  const subjectsFYJC = [
    {
      code: "ENG-01",
      name: "Compulsory English",
      category: "Language & Literature",
      desc: "Core communicative competence, classical and contemporary prose, poetry analysis, and critical literary argumentation.",
    },
    {
      code: "MAR/HIN-02",
      name: "Modern Indian Language",
      category: "Regional Literature",
      desc: "Marathi / Hindi literary heritage, including Sant Sahitya, modern Marathi drama, linguistic syntax, and creative expression.",
    },
    {
      code: "HIST-03",
      name: "History & Heritage",
      category: "Social Sciences",
      desc: "Historiography, ancient, medieval and modern world history with an in-depth focus on Maratha history and cultural preservation.",
    },
    {
      code: "GEOG-04",
      name: "Geography & Earth Systems",
      category: "Spatial & Physical",
      desc: "Physical geomorphology, climate patterns, human resource geography, cartography, and spatial field methodologies.",
    },
    {
      code: "POL-05",
      name: "Political Science & Civics",
      category: "Governance & Law",
      desc: "Foundations of political theory, the Indian Constitution, parliamentary democratic institutions, public administration, and human rights.",
    },
    {
      code: "ECON-06",
      name: "Economics",
      category: "Socio-Economics",
      desc: "Microeconomic fundamentals, price determination, national income, agricultural economics, and developmental challenges in India.",
    },
    {
      code: "SOC-07",
      name: "Sociology & Social Thought",
      category: "Behavioral Sciences",
      desc: "Structure of Indian society, caste, family, social movements, stratification, and institutional sociology.",
    },
    {
      code: "EVS-08",
      name: "Environmental Education & PE",
      category: "Mandatory Board Unit",
      desc: "Ecological stewardship, water conservation in the Western Ghats / Maval basin, and physical fitness evaluation.",
    },
  ];

  const facultyMembers = [
    {
      name: "Prof. Vilas R. Deshmukh",
      role: "Vice Principal & Head, Faculty of Arts",
      qualification: "M.A. (English), M.Phil., SET",
      specialization: "Modern English Literature, Linguistics & Cultural Studies",
      email: "arts.dept@indrayanicollege.com",
    },
    {
      name: "Prof. Sachin K. Shinde",
      role: "Assistant Professor in History",
      qualification: "M.A. (History), B.Ed., NET",
      specialization: "Maratha Historiography, Archival Research & Fort Architecture",
      email: "history.dept@indrayanicollege.com",
    },
    {
      name: "Dr. Anupama R. Kulkarni",
      role: "Assistant Professor in Economics",
      qualification: "M.A. (Economics), Ph.D.",
      specialization: "Agricultural Economics, Public Finance & Rural Development",
      email: "economics.dept@indrayanicollege.com",
    },
    {
      name: "Prof. Madhav P. Joshi",
      role: "Lecturer in Marathi Literature",
      qualification: "M.A. (Marathi), NET",
      specialization: "Sant Sahitya, Modern Marathi Theatre & Creative Writing",
      email: "marathi.dept@indrayanicollege.com",
    },
  ];

  return (
    <AppLayout>
      {/* 1. CINEMATIC FULL-WIDTH INTEGRATED 3D ARTS HERO */}
      <section className="relative w-full min-h-[660px] lg:min-h-[760px] bg-[#120307] text-white overflow-hidden flex items-center">
        {/* Subtle ambient lighting gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(180,83,9,0.18),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(159,18,57,0.12),transparent_70%)] pointer-events-none" />
        
        {/* Subtle literary watermark grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* 3D Atmospheric Canvas Layer - Integrated into the scene */}
        <div className="absolute inset-0 z-0 opacity-90 lg:opacity-100 pointer-events-auto">
          <ArtsCanvas3D className="w-full h-full" />
        </div>

        {/* Soft atmospheric gradient falloff on the left for crisp typography */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#120307] via-[#120307]/85 to-transparent lg:w-[62%]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
          <div className="max-w-2xl space-y-6 text-left">
            
            {/* Stream badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/25 backdrop-blur-md text-amber-300 text-xs font-semibold tracking-widest uppercase">
              <Scroll className="w-3.5 h-3.5 text-amber-400" />
              <span>Junior College • 11th & 12th Arts</span>
            </div>

            {/* Regal Editorial Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-white leading-[1.08]">
              The Eloquence of <br />
              <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100">
                Thought, Language & Culture
              </span>
            </h1>

            {/* Academic Narrative */}
            <p className="text-base sm:text-lg text-amber-100/80 leading-relaxed font-sans max-w-xl">
              Nurturing philosophical inquiry, literary command, historical consciousness, and constitutional reasoning. Indrayani Mahavidyalaya Junior College offers Class 11 (FYJC) and Class 12 (SYJC) Arts under the Maharashtra State Board.
            </p>

            {/* Verified Academic Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-amber-500/20 max-w-lg">
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-400/80 font-mono">Academic Wings</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mt-0.5 block">FYJC & SYJC</span>
                <span className="text-[11px] text-amber-200/60">Class 11 & Class 12</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-400/80 font-mono">Board Affiliation</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mt-0.5 block">MSBSHSE</span>
                <span className="text-[11px] text-amber-200/60">Pune Divisional Board</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-xs uppercase tracking-wider text-amber-400/80 font-mono">Medium of Instruction</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mt-0.5 block">Marathi & Eng</span>
                <span className="text-[11px] text-amber-200/60">Bilingual Support</span>
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 h-12 shadow-lg shadow-amber-950/50 rounded-xl transition-all">
                  Apply for FYJC Arts 2026-27 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="#curriculum">
                <Button size="lg" variant="outline" className="border-amber-400/30 text-amber-200 hover:bg-white/10 hover:text-white h-12 rounded-xl backdrop-blur-sm">
                  View Prescribed Subjects
                </Button>
              </a>
            </div>

            {/* 3D Interaction Hint */}
            <div className="flex items-center gap-2 pt-2 text-xs text-amber-300/70 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Interactive 3D Study Desk: Move cursor to explore manuscript, inkwell & feather quill</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NAVIGATION TABS */}
      <section className="sticky top-[64px] md:top-[80px] z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 overflow-x-auto">
          <div className="flex items-center gap-2 py-3 min-w-max">
            {[
              { id: "curriculum", label: "Subject Curriculum", icon: BookOpen },
              { id: "pathways", label: "Career & Civil Services", icon: Compass },
              { id: "faculty", label: "Faculty & Mentorship", icon: Users },
              { id: "eligibility", label: "Eligibility & Board Guidelines", icon: GraduationCap },
              { id: "resources", label: "Academic Resources", icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-700 text-white shadow-sm shadow-amber-900/30"
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <Library className="w-3.5 h-3.5" />
                  Maharashtra State Board (HSC) Syllabus
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
                  Class 11 (FYJC) & Class 12 (SYJC) Arts Curriculum
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  The Arts curriculum at Indrayani Mahavidyalaya balances linguistic fluency, historical inquiry, socio-political comprehension, and economic reasoning. Subjects are taught in accordance with the Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE), Pune.
                </p>
              </div>

              {/* Subject Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {subjectsFYJC.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-card border border-border/70 hover:border-amber-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {sub.code}
                        </span>
                        <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                          {sub.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/40 mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>Annual Board Scheme</span>
                      <span className="font-semibold text-foreground">Theory + Internal</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Admissions Notice */}
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">
                      Subject Combinations & Second Language Allocation
                    </p>
                    <p>
                      Optional modern language seats (Marathi or Hindi) and social science electives are finalized during the in-person counseling round post Centralized Admission (CAP) merit list declaration.
                    </p>
                  </div>
                </div>
                <Link href="/admissions">
                  <Button size="sm" variant="outline" className="border-amber-600/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/10 shrink-0">
                    Admissions Helpdesk
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: PATHWAYS */}
          {activeTab === "pathways" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  Academic Horizons
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
                  Where Does a Classical Humanities Foundation Lead?
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Students graduating from 12th Arts at Indrayani Mahavidyalaya possess the linguistic eloquence, analytical clarity, and societal awareness required for prestigious civil services, legal careers, journalism, and research.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Civil Services & Public Policy",
                    focus: "UPSC / MPSC / Administrative Cadres",
                    desc: "Rigorous command of History, Geography, Political Science, and Economics gives Arts students an immediate head start in competitive civil services examinations.",
                  },
                  {
                    title: "Legal Studies & Judiciary",
                    focus: "5-Year Integrated B.A. LL.B.",
                    desc: "Critical reasoning, constitutional familiarity, and debate training prepare students for premier national law universities and judicial careers.",
                  },
                  {
                    title: "Journalism & Mass Media",
                    focus: "Print, Digital & Investigative Media",
                    desc: "Linguistic precision and socio-cultural comprehension form the bedrock for investigative journalism, public relations, and editorial leadership.",
                  },
                  {
                    title: "Academia, Archival & Research",
                    focus: "Higher Studies & Historiography",
                    desc: "Direct progression into university B.A., M.A., and Ph.D. programs in Literature, Heritage Conservation, Sociology, and International Relations.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs font-mono text-amber-700 dark:text-amber-400 mt-1">{item.focus}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FACULTY */}
          {activeTab === "faculty" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  Department Directory
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
                  Faculty of Arts & Humanities
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our faculty members are dedicated scholars with decades of classroom experience under the Maharashtra State Board, guiding students through literary appreciation, critical analysis, and competitive preparations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facultyMembers.map((fac, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground">{fac.name}</h3>
                        <p className="text-xs font-medium text-amber-700 dark:text-amber-400">{fac.role}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono">
                        Arts Faculty
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground"><strong>Qualifications:</strong> {fac.qualification}</p>
                    <p className="text-xs text-muted-foreground"><strong>Specialization:</strong> {fac.specialization}</p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="w-3.5 h-3.5 text-amber-600" />
                      <span>{fac.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ELIGIBILITY */}
          {activeTab === "eligibility" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Official Admission Guidelines
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
                  Eligibility & Admission Regulations (FYJC Arts)
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Admissions to Class 11 Arts are conducted strictly as per the rules of the Maharashtra State Board of Secondary & Higher Secondary Education and the Directorate of Higher Secondary Education, Pune.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Requirements */}
                <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    Qualifying Criteria
                  </h3>
                  <ul className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>Passed Class 10 (SSC) examination of the Maharashtra State Board or any equivalent recognized board (CBSE, ICSE, NIOS).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>English passed as a compulsory subject in 10th standard.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>Applicable reservation policies (SC/ST/OBC/EWS/SEBC) followed as per Government of Maharashtra directives.</span>
                    </li>
                  </ul>
                </div>

                {/* Documents */}
                <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-600" />
                    Mandatory Documents
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {[
                      "Original 10th Standard Marks Sheet + 3 Photocopies",
                      "Original School Leaving Certificate (SLC / TC)",
                      "Government Centralized Admission (CAP) Registration Slip",
                      "Aadhaar Card Copy",
                      "Caste Certificate & Validity (if seeking reservation)",
                      "Recent passport size color photographs (4 copies)",
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Admissions Desk */}
                <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/30 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      In-House Admissions Guidance
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Visit our on-campus Admissions Information Desk at Talegaon Dabhade for assistance with document verification, subject selection, and online portal submission.
                    </p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <Link href="/admissions">
                      <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold">
                        Visit Admissions Portal
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-border">
                        Campus Office Location & Timings
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RESOURCES */}
          {activeTab === "resources" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <Download className="w-3.5 h-3.5" />
                  Academic Material
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
                  Syllabi & Board Study References
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Official course structure outlines, past Maharashtra State Board question paper formats, and departmental study notices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Class 11 (FYJC) Arts State Board Syllabus", type: "Official PDF", size: "1.8 MB" },
                  { title: "Class 12 (SYJC) Board Examination Paper Pattern", type: "Question Blueprint", size: "2.4 MB" },
                  { title: "History & Maratha Historiography Reference Notes", type: "Study Compendium", size: "3.2 MB" },
                  { title: "Economics Statistical Data Tables (Class 12)", type: "Reference Handbook", size: "1.5 MB" },
                  { title: "Marathi Bhasha Gaurav Din Literary Schedule", type: "Department Notice", size: "640 KB" },
                  { title: "College Central Library Book Bank Rules", type: "Library Circular", size: "480 KB" },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border/70 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-[10px] font-mono text-amber-700 dark:text-amber-400 border-amber-600/30">
                          {item.type}
                        </Badge>
                        <span className="text-[11px] text-muted-foreground font-mono">{item.size}</span>
                      </div>
                      <h4 className="font-serif font-bold text-foreground text-sm leading-snug">{item.title}</h4>
                    </div>
                    <Button variant="ghost" className="w-full mt-4 text-xs text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 flex items-center justify-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Document</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. AUTHENTIC CULTURAL LIFE AT INDRAYANI */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Intellectual & Cultural Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Literary Forums & Co-Curricular Traditions
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Rooted in the soil of Maval and guided by Indrayani Vidya Mandir Trust, Arts students develop real-world public speaking, historical appreciation, and cultural expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground">Marathi Sahitya & Natya Parishad</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Organizes annual elocution competitions, poetry reading circles, one-act drama workshops, and celebrations of Marathi Bhasha Sanvardhan Pandharwada.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground">Youth Parliament (Yuva Sansad)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mock parliamentary sessions developing parliamentary decorum, public policy debate, constitutional study, and civic leadership among students.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border/70 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground">Maval Historical Fort Study Circle</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Field research trips to historical forts across Maval (Lohagad, Visapur, and ancient Karla-Bhaja rock-cut caves) studying local Maratha archaeology and regional historiography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 bg-[#140409] text-white border-t border-amber-900/40">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-6">
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/30 text-xs px-3 py-1">
            Academic Year 2026-27
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
            Step Into the Living World of Literature & Thought
          </h2>
          <p className="text-amber-100/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Class 11 (FYJC) Arts admissions for the upcoming academic session are conducted through the Centralized Online Admission Process (CAP) of Pune Division.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/admissions">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 h-12 rounded-xl shadow-xl shadow-amber-950/60">
                Explore Admissions Information
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-amber-400/30 text-amber-200 hover:bg-white/10 h-12 rounded-xl">
                Contact College Campus Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
