import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Building,
  Trophy,
  Calendar,
  CheckCircle2,
  MessageSquare,
  Landmark,
  History,
  Sparkles,
  BookOpen,
  Atom,
  Briefcase,
  Layers,
  Cpu,
  ChevronRight,
  Scroll,
  BarChart3,
  FlaskConical,
  Compass,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { ArtsCanvas3D } from "@/components/3d/ArtsCanvas3D";
import { CommerceCanvas3D } from "@/components/3d/CommerceCanvas3D";
import { ScienceCanvas3D } from "@/components/3d/ScienceCanvas3D";
import { CampusShowcase } from "@/components/layout/CampusShowcase";

export default function Home() {
  const [activeStreamTab, setActiveStreamTab] = useState<"arts" | "commerce" | "science">("arts");

  return (
    <AppLayout>
      {/* 1. CINEMATIC COLLEGIATE HERO */}
      <section className="relative w-full min-h-[660px] lg:min-h-[780px] flex items-center bg-[#0B1F3A] overflow-hidden text-white">
        
        {/* Campus Architectural Background Image with Deep Collegiate Lighting */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] h-full z-0 select-none">
          <img
            src={`${import.meta.env.BASE_URL}hero-building.png`}
            alt="Indrayani Mahavidyalaya Campus Building"
            className="w-full h-full object-cover object-center lg:object-right opacity-85"
          />
          {/* Subtle vignette and cinematic lighting falloffs */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/75 to-transparent lg:hidden" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Headline & Identity */}
          <div className="lg:col-span-8 space-y-6 text-left max-w-3xl">
            
            {/* Sanstha Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-blue-200 text-xs font-semibold tracking-wider uppercase">
              <Landmark className="w-3.5 h-3.5 text-blue-300" />
              <span>Indrayani Vidya Mandir Trust • Est. 1965</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-blue-300 uppercase font-bold block">
                Junior & Senior College • Talegaon Dabhade, Pune
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.06]">
                INDRAYANI <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">
                  MAHAVIDYALAYA
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-sans font-normal">
              An esteemed institution under Indrayani Vidya Mandir Trust fostering academic rigor, character, and professional competence. Offering Higher Secondary education in <strong>Arts, Commerce, and Science (11th & 12th)</strong> alongside Savitribai Phule Pune University undergraduate degrees in <strong>B.Sc. and BCS</strong>.
            </p>

            {/* Quick Program Links */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
              <Link href="/arts">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white cursor-pointer transition-all flex items-center gap-1.5">
                  <Scroll className="w-3 h-3 text-blue-300" /> Arts (11th & 12th)
                </span>
              </Link>
              <Link href="/commerce">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white cursor-pointer transition-all flex items-center gap-1.5">
                  <BarChart3 className="w-3 h-3 text-blue-300" /> Commerce (11th & 12th)
                </span>
              </Link>
              <Link href="/science">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white cursor-pointer transition-all flex items-center gap-1.5">
                  <Atom className="w-3 h-3 text-blue-300" /> Science (11th & 12th)
                </span>
              </Link>
              <Link href="/senior-college">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white cursor-pointer transition-all flex items-center gap-1.5">
                  <GraduationCap className="w-3 h-3 text-blue-300" /> Senior College (B.Sc. & BCS)
                </span>
              </Link>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-[#173B75] hover:bg-[#244F82] text-white font-bold px-8 h-12 rounded-xl shadow-xl border border-blue-400/30 text-sm">
                  Admissions Open 2026-27 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="#stream-showcase">
                <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 h-12 rounded-xl backdrop-blur-sm text-sm">
                  Explore 3D Stream Worlds
                </Button>
              </a>
            </div>

          </div>

          <div className="hidden lg:block lg:col-span-4" />
        </div>

        {/* Heritage Corner Seal */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-white/90 select-none">
          <div className="w-8 h-8 rounded-lg bg-[#173B75] border border-blue-400/30 flex items-center justify-center font-serif font-bold text-white text-sm">
            IVM
          </div>
          <div className="text-left text-xs leading-tight">
            <span className="block font-bold">Indrayani Vidya Mandir</span>
            <span className="text-[10px] text-blue-200 font-mono">Talegaon Dabhade • Maval</span>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED INSTITUTIONAL TELEMETRY STRIP */}
      <section className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            
            <div className="py-6 px-4 text-center sm:text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <History className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-foreground">Est. 1965</span>
                <span className="text-xs text-muted-foreground font-medium">IVM Trust Philanthropic Heritage</span>
              </div>
            </div>

            <div className="py-6 px-4 text-center sm:text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-foreground">Talegaon Dabhade</span>
                <span className="text-xs text-muted-foreground font-medium">Maval, Pune District, Maharashtra</span>
              </div>
            </div>

            <div className="py-6 px-4 text-center sm:text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-foreground">MSBSHSE & SPPU</span>
                <span className="text-xs text-muted-foreground font-medium">Board & University Affiliated</span>
              </div>
            </div>

            <div className="py-6 px-4 text-center sm:text-left flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold font-serif text-foreground">Junior & Senior</span>
                <span className="text-xs text-muted-foreground font-medium">Higher Secondary & Undergrad Degrees</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 3D ACADEMIC STREAM SHOWCASE */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="stream-showcase">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Academic 3D Environments
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
              Distinctive Discipline Worlds
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every academic stream at Indrayani Mahavidyalaya possesses its own intellectual culture. Explore our interactive 3D digital environments representing the physical workspace of each discipline.
            </p>
          </div>

          {/* Interactive Stream Switcher Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-4">
            <button
              onClick={() => setActiveStreamTab("arts")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                activeStreamTab === "arts"
                  ? "bg-[#290912] text-amber-200 border border-amber-500/40 shadow-lg shadow-amber-950/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Scroll className="w-4 h-4 text-amber-400" />
              <span>Arts: Literature & Culture</span>
            </button>

            <button
              onClick={() => setActiveStreamTab("commerce")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                activeStreamTab === "commerce"
                  ? "bg-[#042422] text-emerald-200 border border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Commerce: Finance & Markets</span>
            </button>

            <button
              onClick={() => setActiveStreamTab("science")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                activeStreamTab === "science"
                  ? "bg-[#041a2e] text-cyan-200 border border-cyan-500/40 shadow-lg shadow-cyan-950/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Atom className="w-4 h-4 text-cyan-400" />
              <span>Science: Quantum & Computing</span>
            </button>
          </div>

          {/* DYNAMIC STREAM ENVIRONMENT PANEL */}
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl min-h-[580px] flex flex-col lg:flex-row">
            
            {/* ARTS TAB CONTENT */}
            {activeStreamTab === "arts" && (
              <>
                {/* Left Narrative Panel */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#1a050b] via-[#240810] to-[#120307] text-white flex flex-col justify-between space-y-6 z-10">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono">
                      <Scroll className="w-3.5 h-3.5 text-amber-400" />
                      <span>Junior College • Class 11 & 12 Arts</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                      The Living World of <br />
                      <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-200 to-amber-100">
                        Literature & Cultural Form
                      </span>
                    </h3>

                    <p className="text-amber-100/80 text-sm leading-relaxed">
                      Immersive literary humanities study. Explores ancient manuscripts, Maratha historiography, classical poetry, constitutional democracy, and philosophical inquiry.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-amber-500/20">
                      <span className="text-xs uppercase font-mono tracking-wider text-amber-400 block font-bold">
                        Key Subjects (MSBSHSE Board):
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-amber-100/90">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Compulsory English</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Marathi / Hindi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>History & Heritage</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Political Science</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Geography</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Economics / Sociology</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link href="/arts">
                      <Button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 rounded-xl">
                        Enter Arts 3D Experience <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/admissions">
                      <Button variant="outline" className="border-amber-400/30 text-amber-200 hover:bg-white/10 rounded-xl">
                        Apply for Arts FYJC
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Interactive 3D Canvas */}
                <div className="lg:w-1/2 min-h-[380px] lg:min-h-full bg-[#120307] relative">
                  <ArtsCanvas3D className="w-full h-full" />
                </div>
              </>
            )}

            {/* COMMERCE TAB CONTENT */}
            {activeStreamTab === "commerce" && (
              <>
                {/* Left Narrative Panel */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#021817] via-[#042422] to-[#01100f] text-white flex flex-col justify-between space-y-6 z-10">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono">
                      <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Junior College • Class 11 & 12 Commerce</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white">
                      The Architecture of <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 font-extrabold">
                        Finance & Enterprise
                      </span>
                    </h3>

                    <p className="text-emerald-100/80 text-sm leading-relaxed">
                      Sophisticated economic structures, corporate balance sheets, Tally computerized accounting labs, and foundational training for CA, CS, and CMA certifications.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-emerald-500/20">
                      <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 block font-bold">
                        Key Subjects (MSBSHSE Board):
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-emerald-100/90 font-mono">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Book-Keeping & Accountancy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Organization of Commerce (OCM)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Economics (Micro & Macro)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Secretarial Practice (SP)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Commercial Mathematics</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Compulsory English & IT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link href="/commerce">
                      <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 rounded-xl">
                        Enter Commerce 3D Experience <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/admissions">
                      <Button variant="outline" className="border-emerald-400/30 text-emerald-200 hover:bg-white/10 rounded-xl">
                        Apply for Commerce FYJC
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Interactive 3D Canvas */}
                <div className="lg:w-1/2 min-h-[380px] lg:min-h-full bg-[#021313] relative">
                  <CommerceCanvas3D className="w-full h-full" />
                </div>
              </>
            )}

            {/* SCIENCE TAB CONTENT */}
            {activeStreamTab === "science" && (
              <>
                {/* Left Narrative Panel */}
                <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#02101f] via-[#041c30] to-[#010b14] text-white flex flex-col justify-between space-y-6 z-10">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
                      <Atom className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Junior (11th & 12th) & Senior College (B.Sc. & BCS)</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white">
                      The Frontier of <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 font-extrabold">
                        Discovery & Computation
                      </span>
                    </h3>

                    <p className="text-cyan-100/80 text-sm leading-relaxed">
                      Quantum atomic mechanics, chemical molecular synthesis, life sciences laboratories, and professional undergraduate software degrees in B.Sc. and BCS under SPPU.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-cyan-500/20">
                      <span className="text-xs uppercase font-mono tracking-wider text-cyan-400 block font-bold">
                        Academic Structure:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cyan-100/90 font-mono">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>11th & 12th Science (MSBSHSE)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>B.Sc. 3-Year Degree (SPPU)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>BCS Computer Science (SPPU)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Modern Research Labs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link href="/science">
                      <Button className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 rounded-xl">
                        Enter Science 3D Experience <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/admissions">
                      <Button variant="outline" className="border-cyan-400/30 text-cyan-200 hover:bg-white/10 rounded-xl">
                        Apply for Science
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Interactive 3D Canvas */}
                <div className="lg:w-1/2 min-h-[380px] lg:min-h-full bg-[#020d18] relative">
                  <ScienceCanvas3D className="w-full h-full" />
                </div>
              </>
            )}

          </div>

          {/* 3 Stream Quick Gateway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <Link href="/arts">
              <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-amber-500/50 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">Class 11 & 12</span>
                  <Scroll className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="text-xl font-serif font-bold text-foreground group-hover:text-amber-600 transition-colors">
                  Arts Stream Portal
                </h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Languages, History, Political Science, Economics & Civil Services foundation.
                </p>
                <div className="pt-4 flex items-center text-xs font-bold text-amber-600">
                  <span>Explore Arts Curriculum</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link href="/commerce">
              <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">Class 11 & 12</span>
                  <BarChart3 className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-xl font-sans font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                  Commerce Stream Portal
                </h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Book-Keeping, OCM, Economics, Tally Accounting Lab, and CA/CS pathways.
                </p>
                <div className="pt-4 flex items-center text-xs font-bold text-emerald-600">
                  <span>Explore Commerce Curriculum</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            <Link href="/science">
              <div className="p-6 rounded-2xl bg-card border border-border/80 hover:border-cyan-500/50 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">11th, 12th, B.Sc., BCS</span>
                  <Atom className="w-5 h-5 text-cyan-600" />
                </div>
                <h4 className="text-xl font-sans font-bold text-foreground group-hover:text-cyan-600 transition-colors">
                  Science & Computing Portal
                </h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Physics, Chemistry, Biology, Computer Science, B.Sc. & BCS degrees.
                </p>
                <div className="pt-4 flex items-center text-xs font-bold text-cyan-600">
                  <span>Explore Science & Degrees</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. SENIOR COLLEGE DEGREE PROGRAMS (B.Sc. & BCS) */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                Savitribai Phule Pune University (SPPU)
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Senior College Undergraduate Programs
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Beyond Higher Secondary, Indrayani Mahavidyalaya delivers 3-year undergraduate degree programs affiliated with Savitribai Phule Pune University.
              </p>
            </div>

            <Link href="/senior-college">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white rounded-xl">
                Senior College Overview <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* B.Sc. Card */}
            <div className="p-8 rounded-3xl bg-card border border-border/80 hover:shadow-xl transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-mono text-xs">3-Year Degree • 6 Semesters</Badge>
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  B.Sc. — Bachelor of Science
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Comprehensive university degree covering Physics, Chemistry, Botany, Zoology, and Mathematics with intensive practical laboratory training.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/50 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>Affiliated with Savitribai Phule Pune University (SPPU)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>Eligibility: 12th Science (HSC) pass in relevant groups</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <Link href="/bsc">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl">
                    View B.Sc. Curriculum & Laboratory Details
                  </Button>
                </Link>
              </div>
            </div>

            {/* BCS Card */}
            <div className="p-8 rounded-3xl bg-card border border-border/80 hover:shadow-xl transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-mono text-xs">3-Year Professional Degree • 6 Semesters</Badge>
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-foreground">
                  BCS — Bachelor of Computer Science
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Professional computational degree focused on modern software engineering, data structures, Java, Python, web architecture, cloud systems, and machine learning.
                </p>
                <div className="space-y-2 pt-2 border-t border-border/50 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>Affiliated with Savitribai Phule Pune University (SPPU)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>Eligibility: 12th Science with Mathematics</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <Link href="/bcs">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl">
                    View BCS Curriculum & Software Labs
                  </Button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PARENT TRUST HERITAGE & VISION */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Founding Philanthropic Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Indrayani Vidya Mandir Trust
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Serving the educational aspirations of Maval, Pune, and Maharashtra since 1965 through values of academic integrity, social upliftment, and holistic student growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="p-8 md:p-10 rounded-3xl bg-card border border-border/80 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Historical Foundation
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">Talegaon Dabhade • Established 1965</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Indrayani Vidya Mandir Trust was established in 1965 under the inspiring counsel of celebrated litterateur <strong>Acharya P. K. Atre</strong>, distinguished scholar Dr. M. M. Altekar, and committed public leaders of Maval.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                The Trust has continually created higher educational opportunities for generations of students from rural and semi-urban backgrounds, instilling civic responsibility alongside contemporary academic prowess.
              </p>

              <div className="pt-2">
                <Link href="/trust">
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white rounded-xl">
                    Read Complete Sanstha History & Trustees <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-muted/40 border border-border/80 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Sprawling Educational Campus
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">Talegaon-Chakan Road • Maval</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Situated along the scenic Talegaon-Chakan route, the collegiate campus features dedicated academic wings for Arts, Commerce, and Science, modern analytical laboratories, a computerized accounting facility, an automated knowledge library, sports grounds, and seminar halls.
              </p>

              <div className="pt-2">
                <Link href="/campus">
                  <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white rounded-xl">
                    View Campus Facilities & Infrastructure <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. VERIFIED INSTITUTIONAL LEADERSHIP */}
      <section className="py-20 md:py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Administrative Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Messages from the Leadership
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Guiding the visionary path of Indrayani Mahavidyalaya towards holistic student excellence and civic leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* President */}
            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-border/60 pb-4">
                  <img
                    src={`${import.meta.env.BASE_URL}president.jpg`}
                    alt="Hon. Shri Ramdas Kakade"
                    className="w-16 h-16 rounded-2xl object-cover shrink-0 shadow-sm border border-border bg-muted"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-base text-foreground leading-snug">Hon. Shri Ramdas Kakade</h3>
                    <p className="text-xs text-muted-foreground">President</p>
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-mono font-bold uppercase">Indrayani Vidya Mandir Trust</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "Indrayani Vidya Mandir has an abiding mission to empower every student with knowledge, character, and leadership skills. Indrayani Mahavidyalaya is committed to equipping youth across Maval and Maharashtra to meet modern challenges with confidence."
                </p>
              </div>

              <Link href="/trust">
                <Button variant="link" className="p-0 text-amber-600 dark:text-amber-400 text-xs font-bold">
                  Read Trust Profile →
                </Button>
              </Link>
            </div>

            {/* Secretary */}
            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-border/60 pb-4">
                  <img
                    src={`${import.meta.env.BASE_URL}secretary.jpg`}
                    alt="Hon. Shri Chandrakant Shete"
                    className="w-16 h-16 rounded-2xl object-cover shrink-0 shadow-sm border border-border bg-muted"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-base text-foreground leading-snug">Hon. Shri Chandrakant Shete</h3>
                    <p className="text-xs text-muted-foreground">Secretary</p>
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-mono font-bold uppercase">Indrayani Vidya Mandir Trust</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "Education is a lifelong journey of empowerment. We provide modern laboratories, dedicated faculty, and an environment of mutual respect to ensure every student realizes their highest potential."
                </p>
              </div>

              <Link href="/trust">
                <Button variant="link" className="p-0 text-amber-600 dark:text-amber-400 text-xs font-bold">
                  Read Leadership Overview →
                </Button>
              </Link>
            </div>

            {/* Principal */}
            <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-border/60 pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-serif font-bold text-xl shrink-0">
                    SK
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-foreground leading-snug">Dr. S. K. Malghe</h3>
                    <p className="text-xs text-muted-foreground">Principal (M.Sc., Ph.D.)</p>
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-mono font-bold uppercase">Indrayani Mahavidyalaya</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "Welcome to Indrayani Mahavidyalaya. Whether enrolling in Junior College Arts, Commerce, and Science or undergraduate degrees in B.Sc. and BCS, you will find an inspiring environment for scientific inquiry, literary expression, and professional development."
                </p>
              </div>

              <Link href="/principal-message">
                <Button variant="link" className="p-0 text-primary text-xs font-bold">
                  Read Principal's Message →
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 7. AUTHENTIC CAMPUS SHOWCASE */}
      <CampusShowcase />

      {/* 8. ADMISSIONS CALL TO ACTION */}
      <section className="py-20 md:py-24 bg-[#071626] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl space-y-6">
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/30 text-xs px-3.5 py-1 font-mono">
            Admissions 2026-27 Open
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Begin Your Academic Journey at Indrayani Mahavidyalaya
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Applications for Class 11 (FYJC) Arts, Commerce, and Science (via CAP), and undergraduate B.Sc. and BCS are now welcoming students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/admissions">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 h-12 rounded-xl text-sm shadow-xl shadow-amber-950/50">
                Explore Admissions Information
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 rounded-xl text-sm">
                Contact College Campus Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
