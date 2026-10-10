import { Link, useLocation } from "wouter";
import { 
  Menu, X, ChevronDown, Sparkles, GraduationCap, Phone, Mail, Lock, 
  BookOpen, Building2, ShieldCheck, Users, FileText, Award, Layers, Compass 
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
      {/* 1. TOP UTILITY BAR (Midnight Navy #0B1F3A) */}
      <div className="bg-[#0B1F3A] text-slate-200 text-xs py-2 px-4 border-b border-[#173B75]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Affiliation & NAAC Badges */}
          <div className="flex items-center flex-wrap gap-2 md:gap-3 text-[11px] md:text-xs">
            <span className="inline-flex items-center gap-1 bg-[#173B75] text-white font-semibold px-2 py-0.5 rounded border border-blue-400/30">
              <Award className="w-3 h-3 text-blue-300" /> NAAC Accredited
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="text-slate-200 font-medium hidden sm:inline">
              Affiliated to SPPU (ID: PU/PN/AC/038/1971)
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="text-slate-300 font-mono text-[10px] hidden md:inline">
              AISHE: C-42138
            </span>
          </div>

          {/* Right: Direct Contact & Quick Portal Links */}
          <div className="flex items-center gap-3 text-[11px] md:text-xs ml-auto">
            <a href="tel:+9102114222225" className="hidden lg:flex items-center gap-1 hover:text-blue-300 transition-colors">
              <Phone className="w-3 h-3 text-blue-400" />
              <span>+91 02114 222225</span>
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a href="mailto:info@indrayanimahavidyalaya.org" className="hidden xl:flex items-center gap-1 hover:text-blue-300 transition-colors">
              <Mail className="w-3 h-3 text-blue-400" />
              <span>info@indrayanimahavidyalaya.org</span>
            </a>
            <span className="hidden xl:inline text-slate-600">|</span>
            
            <Link href="/naac/iqac">
              <span className="hover:text-blue-300 cursor-pointer font-medium text-slate-200">IQAC / NAAC</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/notices">
              <span className="hover:text-blue-300 cursor-pointer font-medium text-slate-200">Notices</span>
            </Link>
            <span className="text-slate-600">|</span>
            
            <Link href="/admin-login">
              <span className="inline-flex items-center gap-1 bg-[#173B75] hover:bg-[#244F82] text-white font-medium px-2.5 py-0.5 rounded-md border border-blue-400/30 cursor-pointer transition-colors text-[10px]">
                <Lock className="w-2.5 h-2.5" /> Admin Login
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRANDING HEADER (Crisp White Surface) */}
      <div className="bg-white py-3 md:py-4 px-4 border-b border-[#DCE4EE]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Identity (Preserve original blue colors & branding) */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            {/* Crest Badge */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0B1F3A] text-white flex flex-col items-center justify-center font-bold shadow-md shrink-0 border-2 border-[#173B75] group-hover:border-blue-500 transition-all duration-300">
              <span className="text-[9px] md:text-[10px] tracking-widest uppercase text-blue-300 font-semibold">IVM</span>
              <span className="text-base md:text-xl font-extrabold text-white -mt-1 tracking-tight">IM</span>
            </div>

            {/* Typography */}
            <div className="flex flex-col justify-center items-start text-left">
              <span className="text-[10px] md:text-[11px] text-[#173B75] font-bold uppercase tracking-widest leading-none">
                INDRAYANI VIDYA MANDIR TRUST'S
              </span>
              <h1 className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl text-[#0B1F3A] tracking-tight leading-tight mt-0.5">
                INDRAYANI MAHAVIDYALAYA
              </h1>
              <span className="text-[10px] sm:text-[11px] md:text-[12px] text-[#526579] font-medium leading-tight">
                Junior & Senior College <span className="text-[#173B75] font-semibold">(Arts • Commerce • Science • B.Sc. • BCS)</span>
              </span>
              <span className="hidden md:block text-[10px] text-[#526579] leading-none mt-0.5 font-normal">
                Talegaon-Chakan Road, Talegaon Dabhade, Tal. Maval, Dist. Pune 410507
              </span>
            </div>
          </Link>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/admissions">
              <Button size="sm" className="bg-[#173B75] hover:bg-[#244F82] text-white font-semibold text-xs px-4 shadow-sm transition-all rounded-lg flex items-center gap-1.5 border border-blue-600/20">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>Admissions 2026-27</span>
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="sm" className="border-[#DCE4EE] text-[#0B1F3A] font-semibold text-xs px-3 hover:bg-[#E8EEF8] rounded-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="xl:hidden p-2 text-[#0B1F3A] rounded-xl hover:bg-[#E8EEF8] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6 text-[#173B75]" /> : <Menu className="h-6 w-6 text-[#0B1F3A]" />}
          </button>
        </div>
      </div>

      {/* 3. STICKY MAIN NAVIGATION BAR (Midnight Navy #0B1F3A) */}
      <nav className={`w-full bg-[#0B1F3A] text-white border-y border-[#173B75]/30 sticky top-0 z-50 transition-all duration-200 ${scrolled ? "shadow-lg bg-[#0B1F3A]/98 backdrop-blur-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* DESKTOP NAV LINKS (Single row layout, no wrapping) */}
          <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1 py-1.5 flex-nowrap overflow-x-auto no-scrollbar">

            {/* HOME */}
            <Link href="/">
              <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center whitespace-nowrap ${location === "/" ? "bg-[#173B75] text-white font-bold shadow-sm" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                Home
              </span>
            </Link>

            {/* ABOUT US DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/about") || location.startsWith("/principal") || location.startsWith("/vision") || location.startsWith("/trust") || location.startsWith("/campus") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                About Us <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "about" ? "rotate-180 text-blue-300" : ""}`} />
              </span>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-64 bg-[#0B1F3A] border border-[#173B75] rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/about">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75] transition-colors">
                      <Building2 className="w-3.5 h-3.5 text-blue-300" /> About the College
                    </span>
                  </Link>
                  <Link href="/principal-message">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75] transition-colors">
                      <Users className="w-3.5 h-3.5 text-blue-300" /> Principal's Message
                    </span>
                  </Link>
                  <Link href="/vision-mission">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75] transition-colors">
                      <Compass className="w-3.5 h-3.5 text-blue-300" /> Vision & Mission
                    </span>
                  </Link>
                  <Link href="/trust">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75] transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-300" /> Indrayani Vidya Mandir Trust
                    </span>
                  </Link>
                  <Link href="/campus">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75] transition-colors">
                      <Layers className="w-3.5 h-3.5 text-blue-300" /> Campus & Infrastructure
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
                <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/junior-college") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                  Junior College <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "junior" ? "rotate-180 text-blue-300" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "junior" && (
                <div className="absolute top-full left-0 w-64 bg-[#0B1F3A] border border-[#173B75] rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-semibold text-blue-300 uppercase tracking-wider">11th & 12th Standard</div>
                  <Link href="/junior-college">
                    <span className="block px-3 py-1.5 rounded-lg text-xs font-bold text-white hover:bg-[#173B75]">
                      Program Overview
                    </span>
                  </Link>
                  <div className="my-1 border-t border-[#173B75]/50" />
                  <Link href="/arts">
                    <span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      <span>Arts Stream (FYJC & SYJC)</span>
                      <Badge className="bg-[#173B75] text-white text-[10px]">3D</Badge>
                    </span>
                  </Link>
                  <Link href="/commerce">
                    <span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      <span>Commerce Stream</span>
                      <Badge className="bg-[#173B75] text-white text-[10px]">3D</Badge>
                    </span>
                  </Link>
                  <Link href="/science">
                    <span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      <span>Science Stream</span>
                      <Badge className="bg-[#173B75] text-white text-[10px]">3D</Badge>
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
                <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/senior-college") || location.startsWith("/bsc") || location.startsWith("/bcs") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                  Senior College <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "senior" ? "rotate-180 text-blue-300" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "senior" && (
                <div className="absolute top-full left-0 w-64 bg-[#0B1F3A] border border-[#173B75] rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-semibold text-blue-300 uppercase tracking-wider">Undergraduate Degree Programs</div>
                  <Link href="/senior-college">
                    <span className="block px-3 py-1.5 rounded-lg text-xs font-bold text-white hover:bg-[#173B75]">
                      Degree Programs Overview
                    </span>
                  </Link>
                  <div className="my-1 border-t border-[#173B75]/50" />
                  <Link href="/bsc">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      B.Sc. (Bachelor of Science)
                    </span>
                  </Link>
                  <Link href="/bcs">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
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
              <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/arts") || location.startsWith("/commerce") || location.startsWith("/science") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>3D Portals</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "3dportals" ? "rotate-180" : ""}`} />
              </span>

              {activeDropdown === "3dportals" && (
                <div className="absolute top-full left-0 w-64 bg-[#0B1F3A] border border-[#173B75] rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-semibold text-blue-300 uppercase tracking-wider">Interactive 3D Environments</div>
                  
                  <Link href="/arts">
                    <span className="flex items-center justify-between p-2 rounded-lg hover:bg-[#173B75] transition-all">
                      <div>
                        <div className="text-xs font-semibold text-white">Arts Portal 3D</div>
                        <div className="text-[10px] text-slate-300">Culture & Humanities</div>
                      </div>
                      <Badge className="bg-[#173B75] text-white text-[9px]">3D</Badge>
                    </span>
                  </Link>

                  <Link href="/commerce">
                    <span className="flex items-center justify-between p-2 rounded-lg hover:bg-[#173B75] transition-all">
                      <div>
                        <div className="text-xs font-semibold text-white">Commerce Portal 3D</div>
                        <div className="text-[10px] text-slate-300">Finance & Markets</div>
                      </div>
                      <Badge className="bg-[#173B75] text-white text-[9px]">3D</Badge>
                    </span>
                  </Link>

                  <Link href="/science">
                    <span className="flex items-center justify-between p-2 rounded-lg hover:bg-[#173B75] transition-all">
                      <div>
                        <div className="text-xs font-semibold text-white">Science Portal 3D</div>
                        <div className="text-[10px] text-slate-300">Labs & Technology</div>
                      </div>
                      <Badge className="bg-[#173B75] text-white text-[9px]">3D</Badge>
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
              <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/courses") || location.startsWith("/syllabus") || location.startsWith("/calendar") || location.startsWith("/results") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                Academics <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "academics" ? "rotate-180 text-blue-300" : ""}`} />
              </span>

              {activeDropdown === "academics" && (
                <div className="absolute top-full left-0 w-60 bg-[#0B1F3A] border border-[#173B75] rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/courses">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      <BookOpen className="w-3.5 h-3.5 text-blue-300" /> All Courses Directory
                    </span>
                  </Link>
                  <Link href="/syllabus">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      <FileText className="w-3.5 h-3.5 text-blue-300" /> Syllabus & Curriculum
                    </span>
                  </Link>
                  <Link href="/calendar/current">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      <Compass className="w-3.5 h-3.5 text-blue-300" /> Academic Calendar
                    </span>
                  </Link>
                  <Link href="/results">
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      <Award className="w-3.5 h-3.5 text-blue-300" /> Exam Results & Toppers
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
                <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/admissions") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                  Admissions <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "admissions" ? "rotate-180 text-blue-300" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "admissions" && (
                <div className="absolute top-full left-0 w-64 bg-[#0B1F3A] border border-[#173B75] rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/admissions">
                    <span className="block px-3 py-2 rounded-lg text-xs font-bold text-white hover:bg-[#173B75]">
                      Admissions 2026-27 Portal
                    </span>
                  </Link>
                  <div className="my-1 border-t border-[#173B75]/50" />
                  <Link href="/admissions/check-eligibility">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      Eligibility Calculator
                    </span>
                  </Link>
                  <Link href="/admissions?tab=process">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      Admission Process & Guidelines
                    </span>
                  </Link>
                  <Link href="/admissions?tab=documents">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      Required Documents List
                    </span>
                  </Link>
                  <Link href="/admissions?tab=fee-structure">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      Fee Structure & Scholarships
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* FACULTY & DEPTS */}
            <Link href="/faculty">
              <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/faculty") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
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
                <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/notices") || location.startsWith("/downloads") || location.startsWith("/news") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                  Notices & Downloads <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "notices" ? "rotate-180 text-blue-300" : ""}`} />
                </span>
              </Link>

              {activeDropdown === "notices" && (
                <div className="absolute top-full left-0 w-60 bg-[#0B1F3A] border border-[#173B75] rounded-xl shadow-2xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/notices">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      Latest Notices & Circulars
                    </span>
                  </Link>
                  <Link href="/downloads">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      Downloads & Admission Forms
                    </span>
                  </Link>
                  <Link href="/news">
                    <span className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-100 hover:bg-[#173B75]">
                      News & Media Coverage
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* STUDENT CORNER */}
            <Link href="/student-corner">
              <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/student-corner") || location.startsWith("/support") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                Student Corner
              </span>
            </Link>

            {/* PLACEMENTS */}
            <Link href="/placements">
              <span className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1 whitespace-nowrap ${location.startsWith("/placements") ? "bg-[#173B75] text-white font-bold" : "hover:bg-[#173B75]/60 text-slate-100"}`}>
                Placements
              </span>
            </Link>
          </div>

          {/* RIGHT ANCHORED CTA BUTTON (No row wrap) */}
          <div className="hidden xl:flex items-center gap-2 py-1.5 ml-auto shrink-0">
            <Link href="/admissions/check-eligibility">
              <span className="text-[11px] font-semibold text-white bg-[#173B75] hover:bg-[#244F82] px-3 py-1.5 rounded-lg border border-blue-400/30 transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-200" /> Check Eligibility
              </span>
            </Link>
          </div>

        </div>
      </nav>

      {/* 4. MOBILE DRAWER MENU */}
      {isOpen && (
        <div className="xl:hidden bg-[#0B1F3A] border-b border-[#173B75] text-white animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto px-4 py-4 space-y-3">
          
          {/* Direct CTA inside drawer */}
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#173B75]/50">
            <Link href="/admissions">
              <Button size="sm" className="w-full bg-[#173B75] hover:bg-[#244F82] text-white font-bold text-xs">
                Admissions 2026
              </Button>
            </Link>
            <Link href="/admin-login">
              <Button size="sm" variant="outline" className="w-full border-blue-400/30 text-slate-100 text-xs hover:bg-[#173B75]">
                <Lock className="w-3 h-3 mr-1" /> Admin Login
              </Button>
            </Link>
          </div>

          <Link href="/">
            <span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75]" onClick={() => setIsOpen(false)}>
              Home
            </span>
          </Link>

          {/* About Section Mobile */}
          <div>
            <button onClick={() => toggleMobile("about")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75] text-left">
              <span>About Us</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "about" ? "rotate-180 text-blue-300" : ""}`} />
            </button>
            {mobileSection === "about" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-[#173B75] ml-3">
                <Link href="/about"><span className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white" onClick={() => setIsOpen(false)}>About College</span></Link>
                <Link href="/principal-message"><span className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white" onClick={() => setIsOpen(false)}>Principal's Message</span></Link>
                <Link href="/vision-mission"><span className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white" onClick={() => setIsOpen(false)}>Vision & Mission</span></Link>
                <Link href="/trust"><span className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white" onClick={() => setIsOpen(false)}>IVM Trust</span></Link>
                <Link href="/campus"><span className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white" onClick={() => setIsOpen(false)}>Campus Facilities</span></Link>
              </div>
            )}
          </div>

          {/* Junior College Mobile */}
          <div>
            <button onClick={() => toggleMobile("junior")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75] text-left">
              <span>Junior College (11th & 12th)</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "junior" ? "rotate-180 text-blue-300" : ""}`} />
            </button>
            {mobileSection === "junior" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-[#173B75] ml-3">
                <Link href="/junior-college"><span className="block px-3 py-1.5 text-xs font-bold text-white" onClick={() => setIsOpen(false)}>Overview</span></Link>
                <Link href="/arts"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Arts Stream — 3D</span></Link>
                <Link href="/commerce"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Commerce Stream — 3D</span></Link>
                <Link href="/science"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Science Stream — 3D</span></Link>
              </div>
            )}
          </div>

          {/* Senior College Mobile */}
          <div>
            <button onClick={() => toggleMobile("senior")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75] text-left">
              <span>Senior College (UG)</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "senior" ? "rotate-180 text-blue-300" : ""}`} />
            </button>
            {mobileSection === "senior" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-[#173B75] ml-3">
                <Link href="/senior-college"><span className="block px-3 py-1.5 text-xs font-bold text-white" onClick={() => setIsOpen(false)}>Overview</span></Link>
                <Link href="/bsc"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>B.Sc. (Bachelor of Science)</span></Link>
                <Link href="/bcs"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>BCS (Bachelor of Computer Science)</span></Link>
              </div>
            )}
          </div>

          {/* 3D Stream Portals Mobile */}
          <div>
            <button onClick={() => toggleMobile("3dportals")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75] text-left">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-300" />
                3D Stream Portals
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "3dportals" ? "rotate-180 text-blue-300" : ""}`} />
            </button>
            {mobileSection === "3dportals" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-[#173B75] ml-3">
                <Link href="/arts"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Arts 3D Portal</span></Link>
                <Link href="/commerce"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Commerce 3D Portal</span></Link>
                <Link href="/science"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Science 3D Portal</span></Link>
              </div>
            )}
          </div>

          {/* Admissions Mobile */}
          <div>
            <button onClick={() => toggleMobile("admissions")} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75] text-left">
              <span>Admissions</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "admissions" ? "rotate-180 text-blue-300" : ""}`} />
            </button>
            {mobileSection === "admissions" && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-[#173B75] ml-3">
                <Link href="/admissions"><span className="block px-3 py-1.5 text-xs font-bold text-white" onClick={() => setIsOpen(false)}>Admissions 2026 Overview</span></Link>
                <Link href="/admissions/check-eligibility"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Eligibility Calculator</span></Link>
                <Link href="/admissions?tab=process"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Process</span></Link>
                <Link href="/admissions?tab=documents"><span className="block px-3 py-1.5 text-xs text-slate-200" onClick={() => setIsOpen(false)}>Required Documents</span></Link>
              </div>
            )}
          </div>

          <Link href="/faculty"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75]" onClick={() => setIsOpen(false)}>Faculty & Departments</span></Link>
          <Link href="/notices"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75]" onClick={() => setIsOpen(false)}>Notices & Circulars</span></Link>
          <Link href="/downloads"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75]" onClick={() => setIsOpen(false)}>Downloads & Forms</span></Link>
          <Link href="/student-corner"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75]" onClick={() => setIsOpen(false)}>Student Corner</span></Link>
          <Link href="/placements"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-[#173B75]" onClick={() => setIsOpen(false)}>Placements</span></Link>
          <Link href="/contact"><span className="block px-3 py-2 rounded-lg text-sm font-semibold text-blue-300 hover:bg-[#173B75]" onClick={() => setIsOpen(false)}>Contact Us</span></Link>
        </div>
      )}
    </header>
  );
}
