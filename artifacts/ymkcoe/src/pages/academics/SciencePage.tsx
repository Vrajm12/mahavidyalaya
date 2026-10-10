import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ScienceCanvas3D } from "@/components/3d/ScienceCanvas3D";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Atom,
  FlaskConical,
  Microscope,
  Cpu,
  GraduationCap,
  Users,
  CheckCircle2,
  ArrowRight,
  Download,
  Dna,
  Binary,
  Layers,
  Sparkles,
  Mail,
  ExternalLink,
  Info,
  Radio,
  FileCode,
} from "lucide-react";

export default function SciencePage() {
  const [activeTab, setActiveTab] = useState<"programs" | "labs" | "faculty" | "eligibility">("programs");

  const scienceWings = [
    {
      level: "Junior College Wing",
      name: "Class 11 (FYJC) & Class 12 (SYJC) Science",
      duration: "2 Academic Years",
      affiliation: "Maharashtra State Board (MSBSHSE Pune)",
      description: "Rigorous scientific foundation covering core physical and biological sciences with intensive laboratory experiments. Ideal for students aspiring towards medical, engineering, research, and technical careers.",
      subjects: [
        "Physics (Mechanics, Wave Optics, Electromagnetism, Modern Physics)",
        "Chemistry (Physical, Organic & Inorganic Chemical Principles)",
        "Mathematics & Statistics (Algebra, Calculus, Coordinate Geometry)",
        "Biology (Botany, Zoology, Genetics & Human Physiology)",
        "Information Technology / Bifocal Computer Science Option",
        "Compulsory English & Environmental Education",
      ],
      link: "/junior-college",
      badge: "Junior College",
    },
    {
      level: "Senior College Undergraduate",
      name: "B.Sc. — Bachelor of Science",
      duration: "3 Years (6 Semesters)",
      affiliation: "Savitribai Phule Pune University (SPPU)",
      description: "Comprehensive undergraduate university degree providing theoretical depth and rigorous experimental laboratory training in pure and applied sciences.",
      subjects: [
        "Advanced Organic & Analytical Chemistry",
        "Solid State, Condensed Matter & Nuclear Physics",
        "Plant Morphology, Taxonomy & Environmental Botany",
        "Applied Mathematics, Linear Algebra & Real Analysis",
        "Instrumentation & Laboratory Quality Assurance",
      ],
      link: "/bsc",
      badge: "SPPU Degree",
    },
    {
      level: "Senior College Undergraduate",
      name: "BCS — Bachelor of Computer Science",
      duration: "3 Years (6 Semesters)",
      affiliation: "Savitribai Phule Pune University (SPPU)",
      description: "Premier specialized professional program in computational science, modern software development, enterprise database architecture, algorithms, and applied machine learning.",
      subjects: [
        "Data Structures, Algorithms & Computational Complexity",
        "Object Oriented Programming (C++, Java, Python)",
        "Relational & Distributed Database Management Systems",
        "Modern Full Stack Web Architecture & Cloud Systems",
        "Operating Systems, Linux Internals & Computer Networks",
      ],
      link: "/bcs",
      badge: "SPPU Professional",
    },
  ];

  const scienceLabs = [
    {
      name: "Physics Research & Mechanics Laboratory",
      icon: Atom,
      desc: "Fully equipped with optical spectrometer benches, laser diffraction systems, cathode ray oscilloscopes, potentiometer kits, and semiconductor diode characteristic rigs.",
    },
    {
      name: "Chemical Synthesis & Instrumentation Laboratory",
      icon: FlaskConical,
      desc: "Dedicated titration workstations, digital analytical balances, fume exhausts, spectrophotometers, and inorganic salt analysis benches adhering to industrial safety standards.",
    },
    {
      name: "Life Sciences & Botanical Heritage Lab",
      icon: Microscope,
      desc: "High-resolution binocular compound microscopes, botanical herbarium collection from the Western Ghats (Maval flora), permanent cytology slides, and plant physiology apparatus.",
    },
    {
      name: "High-Performance Computer Science Lab",
      icon: Cpu,
      desc: "Dual-boot Linux and Windows workstations connected via high-speed gigabit LAN, configured with modern compilers (GCC, JDK, Python, Node.js), and database development servers.",
    },
  ];

  const facultyScience = [
    {
      name: "Dr. Ramesh M. Kadam",
      role: "Head of Department (Science) & Associate Professor",
      qualification: "M.Sc. (Physics), Ph.D.",
      specialization: "Solid State Physics, Thin Film Nanomaterials & Experimental Optics",
      email: "physics.dept@indrayanicollege.com",
    },
    {
      name: "Prof. Sujata P. Patil",
      role: "Head of Department (Computer Science / BCS)",
      qualification: "M.Sc. (Computer Science), MCA, NET",
      specialization: "Software Engineering, Cloud Computing, Database Architecture & Machine Learning",
      email: "bcs.dept@indrayanicollege.com",
    },
    {
      name: "Dr. Nilesh V. Pawar",
      role: "Assistant Professor in Chemistry",
      qualification: "M.Sc. (Organic Chemistry), Ph.D.",
      specialization: "Green Chemical Synthesis, Spectroscopic Analysis & Environmental Chemistry",
      email: "chemistry.dept@indrayanicollege.com",
    },
    {
      name: "Prof. Sandeep R. Gaikwad",
      role: "Assistant Professor (CS) & Training Placement Coordinator",
      qualification: "M.Sc. (CS), MBA",
      specialization: "Algorithms, Distributed Systems Architecture & Corporate Placement Training",
      email: "tpo@indrayanicollege.com",
    },
  ];

  return (
    <AppLayout>
      {/* 1. CINEMATIC FULL-WIDTH INTEGRATED 3D SCIENCE HERO */}
      <section className="relative w-full min-h-[660px] lg:min-h-[760px] bg-[#020d18] text-white overflow-hidden flex items-center">
        {/* Quantum cyan and deep indigo ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_35%,rgba(6,182,212,0.22),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(99,102,241,0.14),transparent_70%)] pointer-events-none" />

        {/* Precision orbital coordinate lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d408_1px,transparent_1px),linear-gradient(to_bottom,#06b6d408_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* 3D Atmospheric Canvas Layer */}
        <div className="absolute inset-0 z-0 opacity-90 lg:opacity-100 pointer-events-auto">
          <ScienceCanvas3D className="w-full h-full" />
        </div>

        {/* Soft atmospheric gradient falloff on the left */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#020d18] via-[#020d18]/90 to-transparent lg:w-[62%]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
          <div className="max-w-2xl space-y-6 text-left">
            
            {/* Stream badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 backdrop-blur-md text-cyan-300 text-xs font-semibold tracking-widest uppercase">
              <Atom className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Junior (11th & 12th) & Senior College (B.Sc. & BCS)</span>
            </div>

            {/* Frontier Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.08]">
              The Frontier of <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
                Discovery & Computation
              </span>
            </h1>

            {/* Academic Narrative */}
            <p className="text-base sm:text-lg text-cyan-100/80 leading-relaxed font-sans max-w-xl">
              From quantum mechanics and molecular synthesis to advanced algorithmic computing and software systems. Indrayani Mahavidyalaya delivers Class 11 & 12 Science alongside university undergraduate degrees in B.Sc. and BCS.
            </p>

            {/* Verified Academic Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-cyan-500/20 max-w-lg">
              <div>
                <span className="block text-xs uppercase tracking-wider text-cyan-400/80 font-mono">Academic Wings</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-cyan-100 mt-0.5 block">Junior + Senior</span>
                <span className="text-[11px] text-cyan-200/60">11th, 12th, B.Sc., BCS</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-cyan-400/80 font-mono">University Body</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-cyan-100 mt-0.5 block">SPPU Affiliated</span>
                <span className="text-[11px] text-cyan-200/60">Pune University</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-xs uppercase tracking-wider text-cyan-400/80 font-mono">Laboratories</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-cyan-100 mt-0.5 block">4 Major Labs</span>
                <span className="text-[11px] text-cyan-200/60">Physics, Chem, Bio, CS</span>
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 h-12 shadow-lg shadow-cyan-950/60 rounded-xl transition-all">
                  Apply for Science Admissions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="#wings">
                <Button size="lg" variant="outline" className="border-cyan-400/30 text-cyan-200 hover:bg-white/10 hover:text-white h-12 rounded-xl backdrop-blur-sm">
                  Explore Academic Wings
                </Button>
              </a>
            </div>

            {/* 3D Interaction Hint */}
            <div className="flex items-center gap-2 pt-2 text-xs text-cyan-300/70 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Interactive 3D Quantum Lab: Move cursor to rotate atomic orbits, fullerene lattice & chemical flask</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NAVIGATION TABS */}
      <section className="sticky top-[64px] md:top-[80px] z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 overflow-x-auto">
          <div className="flex items-center gap-2 py-3 min-w-max">
            {[
              { id: "programs", label: "Academic Wings (11th, 12th, B.Sc., BCS)", icon: Layers },
              { id: "labs", label: "Research Laboratories", icon: Microscope },
              { id: "faculty", label: "Science & Computing Faculty", icon: Users },
              { id: "eligibility", label: "Eligibility & Board/SPPU Guidelines", icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-cyan-700 text-white shadow-sm shadow-cyan-900/30"
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
      <section className="py-16 md:py-24 bg-muted/20" id="wings">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* TAB 1: ACADEMIC WINGS */}
          {activeTab === "programs" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <Atom className="w-3.5 h-3.5" />
                  Structured Academic Progression
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Junior College Science & University Undergraduate Degrees
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Indrayani Mahavidyalaya offers complete scientific education starting from foundational Higher Secondary Education (Classes 11 & 12 under MSBSHSE) through to 3-year University Undergraduate Degrees (B.Sc. & BCS under SPPU).
                </p>
              </div>

              {/* Wings Cards */}
              <div className="space-y-8">
                {scienceWings.map((wing, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-card border border-border/70 hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 space-y-6"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/50 pb-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                            {wing.level}
                          </span>
                          <Badge variant="outline" className="text-[10px] font-mono">
                            {wing.duration}
                          </Badge>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-sans font-bold text-foreground">
                          {wing.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-mono">
                          Affiliation: {wing.affiliation}
                        </p>
                      </div>

                      <Link href={wing.link}>
                        <Button className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold shrink-0">
                          View Detailed Syllabus & Regulations <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {wing.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-3">
                        Curriculum Highlights:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {wing.subjects.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/40 text-xs text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: RESEARCH LABORATORIES */}
          {activeTab === "labs" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <Microscope className="w-3.5 h-3.5" />
                  Experimental Facilities
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Modern Science & Computing Laboratories
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Science education at Indrayani Mahavidyalaya is built upon empirical demonstration, rigorous laboratory procedures, and hands-on programming.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {scienceLabs.map((lab, idx) => {
                  const Icon = lab.icon;
                  return (
                    <div key={idx} className="p-8 rounded-3xl bg-card border border-border/70 space-y-4 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-sans font-bold text-foreground">{lab.name}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{lab.desc}</p>
                      </div>
                      <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Laboratory Safety</span>
                        <span className="font-semibold text-emerald-600">Standard Protocols Enforced</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: FACULTY */}
          {activeTab === "faculty" && (
            <div className="space-y-12">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <Users className="w-3.5 h-3.5" />
                  Academic Staff
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Faculty of Science & Computer Applications
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our faculty members hold doctoral degrees, university research publications, and corporate software experience, providing attentive mentorship across both Junior and Senior college cohorts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facultyScience.map((fac, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border/70 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-sans font-bold text-foreground">{fac.name}</h3>
                        <p className="text-xs font-medium text-cyan-700 dark:text-cyan-400">{fac.role}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-mono">
                        Faculty
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground"><strong>Qualifications:</strong> {fac.qualification}</p>
                    <p className="text-xs text-muted-foreground"><strong>Specialization:</strong> {fac.specialization}</p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="w-3.5 h-3.5 text-cyan-600" />
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Official Admission Regulations
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground">
                  Admission Regulations & Eligibility Criteria
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Admissions to Junior College Science (Class 11) follow the Maharashtra State Board CAP system. Admissions to Undergraduate B.Sc. and BCS are governed by Savitribai Phule Pune University (SPPU) eligibility criteria.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 11th Science */}
                <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                  <Badge variant="outline" className="text-xs font-mono">Junior College</Badge>
                  <h3 className="text-xl font-sans font-bold text-foreground">
                    Class 11 (FYJC) Science
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Passed Class 10 (SSC) examination with Science and Mathematics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Centralized Online CAP round allotment form submission.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Original 10th Marks Sheet & School Leaving Certificate (SLC).</span>
                    </li>
                  </ul>
                </div>

                {/* B.Sc. */}
                <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                  <Badge variant="outline" className="text-xs font-mono">Senior College (SPPU)</Badge>
                  <h3 className="text-xl font-sans font-bold text-foreground">
                    B.Sc. (Bachelor of Science)
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Passed Higher Secondary Certificate (12th Science / HSC) of MSBSHSE or equivalent.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Subject eligibility based on chosen specialization (PCM / PCB groups).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Direct university merit list enrollment at college office.</span>
                    </li>
                  </ul>
                </div>

                {/* BCS */}
                <div className="p-8 rounded-2xl bg-card border border-border/70 space-y-4">
                  <Badge variant="outline" className="text-xs font-mono">Senior College (SPPU)</Badge>
                  <h3 className="text-xl font-sans font-bold text-foreground">
                    BCS (Computer Science)
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Passed 12th Standard (HSC Science) with Mathematics as a compulsory subject.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Diploma holders in Engineering / Technology recognized by MSBTE eligible.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>Counseling and merit allocation through college admission desk.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-[#020e1a] text-white border-t border-cyan-900/40">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-6">
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-xs px-3 py-1 font-mono">
            Academic Year 2026-27
          </Badge>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight">
            Launch Your Scientific & Computing Career
          </h2>
          <p className="text-cyan-100/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Applications for Class 11 (FYJC) Science, B.Sc., and BCS are welcoming prospective students for the upcoming academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/admissions">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 h-12 rounded-xl shadow-xl shadow-cyan-950/60">
                Explore Admissions Information
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-cyan-400/30 text-cyan-200 hover:bg-white/10 h-12 rounded-xl">
                Contact Science Department
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
