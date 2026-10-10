import { Link, useLocation } from "wouter";
import { 
  Menu, X, ChevronDown, Sparkles, GraduationCap, Phone, Mail, Lock, 
  BookOpen, Building2, ShieldCheck, Users, FileText, Award, Layers, Compass, ExternalLink 
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active Dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Mobile drawer collapse states
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const toggleMobile = (section: string) => {
    setMobileSection(mobileSection === section ? null : section);
  };

  return (
    <header className="w-full font-sans select-none" ref={navRef}>
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Affiliation & NAAC Badges */}
          <div className="flex items-center flex-wrap gap-2 md:gap-3 text-[11px] md:text-xs">
            <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-500/30">
              <Award className="w-3 h-3 text-amber-400" /> NAAC Accredited
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-slate-300 font-medium hidden sm:inline">
              Affiliated to SPPU (ID: PU/PN/AC/038/1971)
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="text-slate-400 font-mono text-[10px] hidden md:inline">
              AISHE: C-42138
            </span>
          </div>

          {/* Right: Direct Contact & Quick Portal Links */}
          <div className="flex items-center gap-3 text-[11px] md:text-xs ml-auto">
            <a href="tel:+9102114222225" className="hidden lg:flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 02114 222225</span>
            </a>
            <span className="hidden lg:inline text-slate-700">|</span>
            <a href="mailto:info@indrayanimahavidyalaya.org" className="hidden xl:flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>info@indrayanimahavidyalaya.org</span>
            </a>
            <span className="hidden xl:inline text-slate-700">|</span>
            
            <Link href="/naac/iqac">
              <span className="hover:text-amber-300 cursor-pointer font-medium text-slate-300">IQAC / NAAC</span>
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/notices">
              <span className="hover:text-amber-300 cursor-pointer font-medium text-slate-300">Notices</span>
            </Link>
            <span className="text-slate-700">|</span>
            
            <Link href="/admin-login">
              <span className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold px-2.5 py-0.5 rounded-full border border-slate-700 cursor-pointer transition-colors text-[10px]">
                <Lock className="w-2.5 h-2.5" /> Admin Login
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRANDING HEADER */}
      <div className="bg-white dark:bg-slate-950 py-3 md:py-4 px-4 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            {/* Crest Badge */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white flex flex-col items-center justify-center font-bold shadow-md shrink-0 border-2 border-amber-400/40 group-hover:border-amber-400 transition-all duration-300 group-hover:shadow-lg">
              <span className="text-[9px] md:text-[10px] tracking-widest uppercase text-amber-300/90 font-semibold">IVM</span>
              <span className="text-base md:text-xl font-extrabold text-amber-400 -mt-1 tracking-tight">IM</span>
            </div>

            {/* Typography */}
            <div className="flex flex-col justify-center items-start text-left">
              <span className="text-[10px] md:text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-widest leading-none">
                INDRAYANI VIDYA MANDIR TRUST'S
              </span>
              <h1 className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl text-slate-900 dark:text-white tracking-tight leading-tight mt-0.5 group-hover:text-primary transition-colors">
                INDRAYANI MAHAVIDYALAYA
              </h1>
              <span className="text-[10px] sm:text-[11px] md:text-[12px] text-slate-600 dark:text-slate-300 font-semibold leading-tight">
                Junior & Senior College <span className="text-amber-600 font-bold">(Arts • Commerce • Science • B.Sc. • BCS)</span>
              </span>
              <span className="hidden md:block text-[10px] text-slate-400 leading-none mt-0.5 font-medium">
                Talegaon-Chakan Road, Talegaon Dabhade, Tal. Maval, Dist. Pune 410507
              </span>
            </div>
          </Link>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/admissions">
              <Button size="sm" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs px-4 shadow-sm hover:shadow transition-all rounded-lg flex items-center gap-1.5 border border-amber-400/30">
                <GraduationCap className="w-4 h-4 text-slate-950" />
                <span>Admissions 2026-27</span>
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-700 font-semibold text-xs px-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="xl:hidden p-2 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6 text-amber-500" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 3. STICKY MAIN NAVIGATION BAR */}
      <nav className={`w-full bg-slate-900 text-slate-100 border-y border-slate-800 sticky top-0 z-50 transition-all duration-200 ${scrolled ? "shadow-xl bg-slate-900/98 backdrop-blur-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* DESKTOP NAV LINKS */}
          <div className="hidden xl:flex items-center gap-1 py-1.5 flex-wrap">

            {/* HOME */}
            <Link href="/">
              <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location === "/" ? "bg-amber-500 text-slate-950 font-bold shadow-sm" : "hover:bg-slate-800 text-slate-200"}`}>
                Home
              </span>
            </Link>

            {/* ABOUT US DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/about") || location.startsWith("/principal") || location.startsWith("/vision") || location.startsWith("/trust") || location.startsWith("/campus") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                About Us <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "about" ? "rotate-180 text-amber-400" : ""}`} />
              </span>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/about">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" /> About the College
                    </span>
                  </Link>
                  <Link href="/principal-message">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                      <Users className="w-3.5 h-3.5 text-amber-400" /> Principal's Message
                    </span>
                  </Link>
                  <Link href="/vision-mission">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                      <Compass className="w-3.5 h-3.5 text-amber-400" /> Vision & Mission
                    </span>
                  </Link>
                  <Link href="/trust">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Indrayani Vidya Mandir Trust
                    </span>
                  </Link>
                  <Link href="/campus">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                      <Layers className="w-3.5 h-3.5 text-amber-400" /> Campus & Infrastructure
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* JUNIOR COLLEGE DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("junior")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/junior-college">
                <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/junior-college") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                  Junior College <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "junior" ? "rotate-180 text-amber-400" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "junior" && (
                <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider">11th & 12th Standard</div>
                  <Link href="/junior-college">
                    <span className="block px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 hover:bg-slate-800">
                      Program Overview
                    </span>
                  </Link>
                  <div className="my-1 border-t border-slate-800" />
                  <Link href="/arts">
                    <span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      <span>Arts Stream (FYJC & SYJC)</span>
                      <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-[10px]">3D</Badge>
                    </span>
                  </Link>
                  <Link href="/commerce">
                    <span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-300">
                      <span>Commerce Stream</span>
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-[10px]">3D</Badge>
                    </span>
                  </Link>
                  <Link href="/science">
                    <span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-300">
                      <span>Science Stream</span>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-[10px]">3D</Badge>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* SENIOR COLLEGE DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("senior")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/senior-college">
                <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/senior-college") || location.startsWith("/bsc") || location.startsWith("/bcs") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                  Senior College <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "senior" ? "rotate-180 text-amber-400" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "senior" && (
                <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider">Undergraduate Degree Programs</div>
                  <Link href="/senior-college">
                    <span className="block px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 hover:bg-slate-800">
                      Degree Programs Overview
                    </span>
                  </Link>
                  <div className="my-1 border-t border-slate-800" />
                  <Link href="/bsc">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      B.Sc. (Bachelor of Science)
                    </span>
                  </Link>
                  <Link href="/bcs">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      BCS (Bachelor of Computer Science)
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* 3D PORTALS */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("3dportals")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5 text-amber-300 ${location.startsWith("/arts") || location.startsWith("/commerce") || location.startsWith("/science") ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "hover:bg-slate-800"}`}>
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>3D Portals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "3dportals" ? "rotate-180" : ""}`} />
              </span>

              {activeDropdown === "3dportals" && (
                <div className="absolute top-full left-0 w-72 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2.5 mt-1 flex flex-col gap-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider">Interactive 3D Environments</div>
                  
                  <Link href="/arts">
                    <span className="flex items-center justify-between p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-900/40 transition-all">
                      <div>
                        <div className="text-xs font-bold text-amber-300">Arts Portal 3D</div>
                        <div className="text-[10px] text-slate-400">Culture & Literature</div>
                      </div>
                      <Badge className="bg-amber-500 text-slate-950 font-bold text-[9px]">3D</Badge>
                    </span>
                  </Link>

                  <Link href="/commerce">
                    <span className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-900/40 transition-all">
                      <div>
                        <div className="text-xs font-bold text-emerald-300">Commerce Portal 3D</div>
                        <div className="text-[10px] text-slate-400">Finance & Markets</div>
                      </div>
                      <Badge className="bg-emerald-500 text-slate-950 font-bold text-[9px]">3D</Badge>
                    </span>
                  </Link>

                  <Link href="/science">
                    <span className="flex items-center justify-between p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-900/40 transition-all">
                      <div>
                        <div className="text-xs font-bold text-cyan-300">Science Portal 3D</div>
                        <div className="text-[10px] text-slate-400">Labs & Technology</div>
                      </div>
                      <Badge className="bg-cyan-500 text-slate-950 font-bold text-[9px]">3D</Badge>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* ACADEMICS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("academics")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/courses") || location.startsWith("/syllabus") || location.startsWith("/calendar") || location.startsWith("/results") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                Academics <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "academics" ? "rotate-180 text-amber-400" : ""}`} />
              </span>

              {activeDropdown === "academics" && (
                <div className="absolute top-full left-0 w-60 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/courses">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" /> All Academic Courses
                    </span>
                  </Link>
                  <Link href="/syllabus">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      <FileText className="w-3.5 h-3.5 text-amber-400" /> Syllabus & Curriculum
                    </span>
                  </Link>
                  <Link href="/calendar/current">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      <Compass className="w-3.5 h-3.5 text-amber-400" /> Academic Calendar
                    </span>
                  </Link>
                  <Link href="/results">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      <Award className="w-3.5 h-3.5 text-amber-400" /> Exam Results & Toppers
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* ADMISSIONS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("admissions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/admissions">
                <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/admissions") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                  Admissions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "admissions" ? "rotate-180 text-amber-400" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "admissions" && (
                <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/admissions">
                    <span className="block px-3 py-2 rounded-lg text-xs font-bold text-amber-300 hover:bg-slate-800">
                      Admissions 2026-27 Portal
                    </span>
                  </Link>
                  <div className="my-1 border-t border-slate-800" />
                  <Link href="/admissions/check-eligibility">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      Eligibility Calculator
                    </span>
                  </Link>
                  <Link href="/admissions?tab=process">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      Admission Process & Guidelines
                    </span>
                  </Link>
                  <Link href="/admissions?tab=documents">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      Required Documents List
                    </span>
                  </Link>
                  <Link href="/admissions?tab=fee-structure">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      Fee Structure & Scholarships
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* FACULTY & DEPTS */}
            <Link href="/faculty">
              <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/faculty") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                Faculty & Depts
              </span>
            </Link>

            {/* NOTICES & DOWNLOADS */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("notices")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/notices">
                <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/notices") || location.startsWith("/downloads") || location.startsWith("/news") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                  Notices & Circulars <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "notices" ? "rotate-180 text-amber-400" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "notices" && (
                <div className="absolute top-full left-0 w-60 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/notices">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      Latest Notices & Announcements
                    </span>
                  </Link>
                  <Link href="/downloads">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      Downloads & Admission Forms
                    </span>
                  </Link>
                  <Link href="/news">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300">
                      News & Media Coverage
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* STUDENT CORNER */}
            <Link href="/student-corner">
              <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/student-corner") || location.startsWith("/support") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                Student Corner
              </span>
            </Link>

            {/* PLACEMENTS */}
            <Link href="/placements">
              <span className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1 ${location.startsWith("/placements") ? "bg-slate-800 text-amber-300 font-bold" : "hover:bg-slate-800 text-slate-200"}`}>
                Placements
              </span>
            </Link>
          </div>

          {/* RIGHT BADGE OR QUICK ICON LINK */}
          <div className="hidden xl:flex items-center gap-2 py-1.5 ml-auto">
            <Link href="/admissions/check-eligibility">
              <span className="text-[11px] font-semibold text-amber-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors inline-flex items-center gap-1 cursor-pointer">
                <Sparkles className="w-3 h-3 text-amber-400" /> Check Eligibility
              </span>
            </Link>
          </div>

        </div>
      </nav>

      {/* 4. MOBILE DRAWER MENU */}
      {isOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 text-slate-100 animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3">
          
          {/* Direct CTA inside drawer */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <Link href="/admissions">
              <Button size="sm" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs">
                Admissions 2026
              </Button>
            </Link>
            <Link href="/admin-login">
              <Button size="sm" variant="outline" className="w-full border-slate-700 text-amber-300 text-xs">
                <Lock className="w-3 h-3 mr-1" /> Admin Login
              </Button>
            </Link>
          </div>

          <Link href="/">
            <span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900" onClick={() => setIsOpen(false)}>
              Home
            </span>
          </Link>

          {/* About Section Mobile */}
          <div>
            <button onClick={() => toggleMobile("about")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900 text-left">
              <span>About Us</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "about" ? "rotate-180 text-amber-400" : ""}`} />
            </button>
            {mobileSection === "about" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-slate-800 ml-3">
                <Link href="/about"><span className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-300" onClick={() => setIsOpen(false)}>About College</span></Link>
                <Link href="/principal-message"><span className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-300" onClick={() => setIsOpen(false)}>Principal's Message</span></Link>
                <Link href="/vision-mission"><span className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-300" onClick={() => setIsOpen(false)}>Vision & Mission</span></Link>
                <Link href="/trust"><span className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-300" onClick={() => setIsOpen(false)}>IVM Trust</span></Link>
                <Link href="/campus"><span className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-300" onClick={() => setIsOpen(false)}>Campus Facilities</span></Link>
              </div>
            )}
          </div>

          {/* Junior College Mobile */}
          <div>
            <button onClick={() => toggleMobile("junior")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900 text-left">
              <span>Junior College (11th & 12th)</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "junior" ? "rotate-180 text-amber-400" : ""}`} />
            </button>
            {mobileSection === "junior" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-slate-800 ml-3">
                <Link href="/junior-college"><span className="block px-3 py-1.5 text-xs font-bold text-amber-400" onClick={() => setIsOpen(false)}>Overview</span></Link>
                <Link href="/arts"><span className="block px-3 py-1.5 text-xs text-amber-300" onClick={() => setIsOpen(false)}>Arts Stream — 3D</span></Link>
                <Link href="/commerce"><span className="block px-3 py-1.5 text-xs text-emerald-300" onClick={() => setIsOpen(false)}>Commerce Stream — 3D</span></Link>
                <Link href="/science"><span className="block px-3 py-1.5 text-xs text-cyan-300" onClick={() => setIsOpen(false)}>Science Stream — 3D</span></Link>
              </div>
            )}
          </div>

          {/* Senior College Mobile */}
          <div>
            <button onClick={() => toggleMobile("senior")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900 text-left">
              <span>Senior College (UG)</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "senior" ? "rotate-180 text-amber-400" : ""}`} />
            </button>
            {mobileSection === "senior" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-slate-800 ml-3">
                <Link href="/senior-college"><span className="block px-3 py-1.5 text-xs font-bold text-amber-400" onClick={() => setIsOpen(false)}>Overview</span></Link>
                <Link href="/bsc"><span className="block px-3 py-1.5 text-xs text-slate-300" onClick={() => setIsOpen(false)}>B.Sc. (Bachelor of Science)</span></Link>
                <Link href="/bcs"><span className="block px-3 py-1.5 text-xs text-slate-300" onClick={() => setIsOpen(false)}>BCS (Bachelor of Computer Science)</span></Link>
              </div>
            )}
          </div>

          {/* 3D Stream Portals Mobile */}
          <div>
            <button onClick={() => toggleMobile("3dportals")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-amber-400 hover:bg-slate-900 text-left">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                3D Stream Portals
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "3dportals" ? "rotate-180" : ""}`} />
            </button>
            {mobileSection === "3dportals" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-slate-800 ml-3">
                <Link href="/arts"><span className="block px-3 py-1.5 text-xs text-amber-300 font-semibold" onClick={() => setIsOpen(false)}>Arts 3D Portal</span></Link>
                <Link href="/commerce"><span className="block px-3 py-1.5 text-xs text-emerald-300 font-semibold" onClick={() => setIsOpen(false)}>Commerce 3D Portal</span></Link>
                <Link href="/science"><span className="block px-3 py-1.5 text-xs text-cyan-300 font-semibold" onClick={() => setIsOpen(false)}>Science 3D Portal</span></Link>
              </div>
            )}
          </div>

          {/* Admissions Mobile */}
          <div>
            <button onClick={() => toggleMobile("admissions")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900 text-left">
              <span>Admissions</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "admissions" ? "rotate-180 text-amber-400" : ""}`} />
            </button>
            {mobileSection === "admissions" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-slate-800 ml-3">
                <Link href="/admissions"><span className="block px-3 py-1.5 text-xs font-bold text-amber-400" onClick={() => setIsOpen(false)}>Admissions 2026 Overview</span></Link>
                <Link href="/admissions/check-eligibility"><span className="block px-3 py-1.5 text-xs text-slate-300" onClick={() => setIsOpen(false)}>Eligibility Calculator</span></Link>
                <Link href="/admissions?tab=process"><span className="block px-3 py-1.5 text-xs text-slate-300" onClick={() => setIsOpen(false)}>Process</span></Link>
                <Link href="/admissions?tab=documents"><span className="block px-3 py-1.5 text-xs text-slate-300" onClick={() => setIsOpen(false)}>Required Documents</span></Link>
              </div>
            )}
          </div>

          <Link href="/faculty"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900" onClick={() => setIsOpen(false)}>Faculty & Departments</span></Link>
          <Link href="/notices"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900" onClick={() => setIsOpen(false)}>Notices & Circulars</span></Link>
          <Link href="/downloads"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900" onClick={() => setIsOpen(false)}>Downloads & Forms</span></Link>
          <Link href="/student-corner"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900" onClick={() => setIsOpen(false)}>Student Corner</span></Link>
          <Link href="/placements"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-slate-900" onClick={() => setIsOpen(false)}>Placements</span></Link>
          <Link href="/contact"><span className="block px-3 py-2 rounded-lg text-sm font-semibold text-amber-400 hover:bg-slate-900" onClick={() => setIsOpen(false)}>Contact Us</span></Link>
        </div>
      )}
    </header>
  );
}
