import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ChevronRight, Sparkles, Atom, Palette, Briefcase, GraduationCap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Dropdown states
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showJuniorDropdown, setShowJuniorDropdown] = useState(false);
  const [showSeniorDropdown, setShowSeniorDropdown] = useState(false);
  const [showAcademicsDropdown, setShowAcademicsDropdown] = useState(false);
  const [showAdmissionDropdown, setShowAdmissionDropdown] = useState(false);
  const [showNoticesDropdown, setShowNoticesDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);

  const [lockedDropdown, setLockedDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setLockedDropdown(null);
        setShowAboutDropdown(false);
        setShowJuniorDropdown(false);
        setShowSeniorDropdown(false);
        setShowAcademicsDropdown(false);
        setShowAdmissionDropdown(false);
        setShowNoticesDropdown(false);
        setShowSupportDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Mobile state toggles
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileJunior, setMobileJunior] = useState(false);
  const [mobileSenior, setMobileSenior] = useState(false);
  const [mobileAcademics, setMobileAcademics] = useState(false);
  const [mobileAdmission, setMobileAdmission] = useState(false);
  const [mobileNotices, setMobileNotices] = useState(false);
  const [mobileSupport, setMobileSupport] = useState(false);

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur-md shadow-sm sticky top-0 z-50" ref={navRef}>
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        {/* LOGO & INSTITUTION IDENTITY */}
        <Link href="/" className="flex items-center gap-2.5 md:gap-4 hover:opacity-95 transition-opacity">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary text-white flex flex-col items-center justify-center font-bold shadow-md shrink-0 border border-white/20">
            <span className="text-[10px] md:text-xs tracking-wider uppercase opacity-80">IVM</span>
            <span className="text-base md:text-xl font-extrabold font-serif -mt-1 text-accent">IM</span>
          </div>

          <div className="flex flex-col justify-center items-start text-left select-none">
            <span className="text-[10px] md:text-[11px] lg:text-[12px] text-muted-foreground font-semibold uppercase tracking-wider leading-none">
              Indrayani Vidya Mandir Trust's
            </span>
            <span className="font-extrabold text-sm md:text-base lg:text-lg xl:text-xl text-primary tracking-tight leading-tight mt-0.5">
              INDRAYANI MAHAVIDYALAYA
            </span>
            <span className="text-[10px] md:text-[11px] text-accent font-semibold leading-tight">
              Junior & Senior College (Arts • Commerce • Science • B.Sc. • BCS)
            </span>
            <span className="hidden md:block text-[9px] md:text-[10px] text-muted-foreground/80 font-medium leading-none mt-0.5">
              Talegaon-Chakan Road, Talegaon Dabhade, Tal. Maval, Dist. Pune 410507
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 select-none flex-wrap justify-end">
          <Link href="/">
            <span className={`px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location === "/" ? "text-accent font-bold" : "text-foreground"}`}>
              Home
            </span>
          </Link>

          {/* ABOUT DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => { if (lockedDropdown !== "about") setShowAboutDropdown(false) }}
          >
            <span
              onClick={() => setLockedDropdown(lockedDropdown === "about" ? null : "about")}
              className={`cursor-pointer flex items-center gap-1 px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/about") || location.startsWith("/principal") || location.startsWith("/vision") || location.startsWith("/trust") || location.startsWith("/campus") ? "text-accent font-bold" : "text-foreground"}`}>
              About Us <ChevronDown className="h-3 w-3" />
            </span>
            {showAboutDropdown && (
              <div className="absolute top-full left-0 w-[260px] bg-background border border-border rounded-xl shadow-xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in duration-150">
                <Link href="/about"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">About the College</span></Link>
                <Link href="/principal-message"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Principal's Message</span></Link>
                <Link href="/vision-mission"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Vision & Mission</span></Link>
                <Link href="/trust"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Indrayani Vidya Mandir Trust</span></Link>
                <Link href="/campus"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Campus & Facilities</span></Link>
              </div>
            )}
          </div>

          {/* JUNIOR COLLEGE DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setShowJuniorDropdown(true)}
            onMouseLeave={() => { if (lockedDropdown !== "junior") setShowJuniorDropdown(false) }}
          >
            <Link href="/junior-college">
              <span
                onClick={() => setLockedDropdown(lockedDropdown === "junior" ? null : "junior")}
                className={`cursor-pointer flex items-center gap-1 px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/junior-college") ? "text-accent font-bold" : "text-foreground"}`}>
                Junior College <ChevronDown className="h-3 w-3" />
              </span>
            </Link>
            {showJuniorDropdown && (
              <div className="absolute top-full left-0 w-[240px] bg-background border border-border rounded-xl shadow-xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in duration-150">
                <Link href="/junior-college"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-bold text-primary">Class 11 & 12 Overview</span></Link>
                <Link href="/arts"><span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent"><span>Arts (FYJC & SYJC)</span><span className="text-[10px] bg-amber-500/15 text-amber-700 px-1.5 py-0.5 rounded font-mono font-bold">3D</span></span></Link>
                <Link href="/commerce"><span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent"><span>Commerce (FYJC & SYJC)</span><span className="text-[10px] bg-emerald-500/15 text-emerald-700 px-1.5 py-0.5 rounded font-mono font-bold">3D</span></span></Link>
                <Link href="/science"><span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent"><span>Science (FYJC & SYJC)</span><span className="text-[10px] bg-cyan-500/15 text-cyan-700 px-1.5 py-0.5 rounded font-mono font-bold">3D</span></span></Link>
              </div>
            )}
          </div>

          {/* SENIOR COLLEGE DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setShowSeniorDropdown(true)}
            onMouseLeave={() => { if (lockedDropdown !== "senior") setShowSeniorDropdown(false) }}
          >
            <Link href="/senior-college">
              <span
                onClick={() => setLockedDropdown(lockedDropdown === "senior" ? null : "senior")}
                className={`cursor-pointer flex items-center gap-1 px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/senior-college") || location.startsWith("/bsc") || location.startsWith("/bcs") ? "text-accent font-bold" : "text-foreground"}`}>
                Senior College <ChevronDown className="h-3 w-3" />
              </span>
            </Link>
            {showSeniorDropdown && (
              <div className="absolute top-full left-0 w-[240px] bg-background border border-border rounded-xl shadow-xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in duration-150">
                <Link href="/senior-college"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-bold text-primary">Undergraduate Programs</span></Link>
                <Link href="/bsc"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">B.Sc. (Bachelor of Science)</span></Link>
                <Link href="/bcs"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">BCS (Bachelor of Computer Science)</span></Link>
              </div>
            )}
          </div>

          {/* 3D ACADEMIC STREAMS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setShowAcademicsDropdown(true)}
            onMouseLeave={() => { if (lockedDropdown !== "academics") setShowAcademicsDropdown(false) }}
          >
            <span
              onClick={() => setLockedDropdown(lockedDropdown === "academics" ? null : "academics")}
              className={`cursor-pointer flex items-center gap-1 px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/arts") || location.startsWith("/commerce") || location.startsWith("/science") || location.startsWith("/academics") || location.startsWith("/courses") ? "text-accent font-bold" : "text-foreground"}`}>
              <Sparkles className="w-3 h-3 text-accent" />
              Academics & 3D Portals <ChevronDown className="h-3 w-3" />
            </span>
            {showAcademicsDropdown && (
              <div className="absolute top-full left-0 w-[280px] bg-background border border-border rounded-xl shadow-xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in duration-150">
                <div className="px-3 py-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Immersive 3D Portals</div>
                <Link href="/arts"><span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-amber-500/10 font-semibold text-amber-900 dark:text-amber-300"><span>Arts (Humanities & Culture)</span><Badge className="bg-amber-600 text-white text-[10px] h-5">3D</Badge></span></Link>
                <Link href="/commerce"><span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-emerald-500/10 font-semibold text-emerald-900 dark:text-emerald-300"><span>Commerce (Finance & Wealth)</span><Badge className="bg-emerald-600 text-white text-[10px] h-5">3D</Badge></span></Link>
                <Link href="/science"><span className="flex items-center justify-between px-3 py-2 rounded-lg text-xs hover:bg-cyan-500/10 font-semibold text-cyan-900 dark:text-cyan-300"><span>Science (Discovery & Tech)</span><Badge className="bg-cyan-600 text-white text-[10px] h-5">3D</Badge></span></Link>
                <div className="my-1 border-t border-border" />
                <Link href="/courses"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">All Programs Directory</span></Link>
                <Link href="/syllabus"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Syllabus Portal</span></Link>
                <Link href="/calendar/current"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Academic Calendar</span></Link>
                <Link href="/results"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Results & Toppers</span></Link>
              </div>
            )}
          </div>

          {/* ADMISSIONS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setShowAdmissionDropdown(true)}
            onMouseLeave={() => { if (lockedDropdown !== "admission") setShowAdmissionDropdown(false) }}
          >
            <Link href="/admissions">
              <span
                onClick={() => setLockedDropdown(lockedDropdown === "admission" ? null : "admission")}
                className={`cursor-pointer flex items-center gap-1 px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/admissions") ? "text-accent font-bold" : "text-foreground"}`}>
                Admissions <ChevronDown className="h-3 w-3" />
              </span>
            </Link>
            {showAdmissionDropdown && (
              <div className="absolute top-full left-0 w-[240px] bg-background border border-border rounded-xl shadow-xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in duration-150">
                <Link href="/admissions"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-bold text-primary">Admission Overview 2026-27</span></Link>
                <Link href="/admissions/check-eligibility"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Check Eligibility Calculator</span></Link>
                <Link href="/admissions?tab=process"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Admission Process (CAP)</span></Link>
                <Link href="/admissions?tab=documents"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Required Documents</span></Link>
                <Link href="/admissions?tab=fee-structure"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Fee Structure & TFWS</span></Link>
              </div>
            )}
          </div>

          {/* FACULTY & DEPARTMENTS */}
          <Link href="/faculty">
            <span className={`px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/faculty") ? "text-accent font-bold" : "text-foreground"}`}>
              Faculty & Depts
            </span>
          </Link>

          {/* NOTICES & DOWNLOADS */}
          <div 
            className="relative"
            onMouseEnter={() => setShowNoticesDropdown(true)}
            onMouseLeave={() => { if (lockedDropdown !== "notices") setShowNoticesDropdown(false) }}
          >
            <Link href="/notices">
              <span
                onClick={() => setLockedDropdown(lockedDropdown === "notices" ? null : "notices")}
                className={`cursor-pointer flex items-center gap-1 px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/notices") || location.startsWith("/downloads") || location.startsWith("/news") ? "text-accent font-bold" : "text-foreground"}`}>
                Notices & Downloads <ChevronDown className="h-3 w-3" />
              </span>
            </Link>
            {showNoticesDropdown && (
              <div className="absolute top-full left-0 w-[220px] bg-background border border-border rounded-xl shadow-xl p-2 mt-1 flex flex-col gap-1 z-50 animate-in fade-in duration-150">
                <Link href="/notices"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Notices & Circulars</span></Link>
                <Link href="/downloads"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Downloads & Forms</span></Link>
                <Link href="/calendar/current"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Academic Calendar</span></Link>
                <Link href="/news"><span className="block px-3 py-2 rounded-lg text-xs hover:bg-muted font-medium hover:text-accent">Latest News</span></Link>
              </div>
            )}
          </div>

          {/* STUDENT CORNER */}
          <Link href="/student-corner">
            <span className={`px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/student-corner") || location.startsWith("/support") ? "text-accent font-bold" : "text-foreground"}`}>
              Student Corner
            </span>
          </Link>

          {/* PLACEMENTS */}
          <Link href="/placements">
            <span className={`px-2 py-2 rounded-md text-xs font-semibold transition-colors hover:bg-muted ${location.startsWith("/placements") ? "text-accent font-bold" : "text-foreground"}`}>
              Placements
            </span>
          </Link>

          {/* CONTACT */}
          <Link href="/contact">
            <Button size="sm" className="bg-primary hover:bg-accent text-white text-xs font-semibold ml-1">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="xl:hidden p-2 text-foreground ml-auto rounded-lg hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      {isOpen && (
        <div className="xl:hidden border-t border-border bg-background animate-in slide-in-from-top-2 max-h-[75vh] overflow-y-auto px-4 py-4 space-y-2">
          <Link href="/"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted" onClick={() => setIsOpen(false)}>Home</span></Link>

          {/* About Mobile */}
          <div>
            <button onClick={() => setMobileAbout(!mobileAbout)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted text-left">
              About Us <ChevronDown className={`h-4 w-4 transition-transform ${mobileAbout ? "rotate-180" : ""}`} />
            </button>
            {mobileAbout && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-border ml-3">
                <Link href="/about"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>About the College</span></Link>
                <Link href="/principal-message"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Principal's Message</span></Link>
                <Link href="/vision-mission"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Vision & Mission</span></Link>
                <Link href="/trust"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Indrayani Vidya Mandir Trust</span></Link>
                <Link href="/campus"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Campus & Facilities</span></Link>
              </div>
            )}
          </div>

          {/* Junior College Mobile */}
          <div>
            <button onClick={() => setMobileJunior(!mobileJunior)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted text-left">
              Junior College (11th & 12th) <ChevronDown className={`h-4 w-4 transition-transform ${mobileJunior ? "rotate-180" : ""}`} />
            </button>
            {mobileJunior && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-border ml-3">
                <Link href="/junior-college"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted font-bold" onClick={() => setIsOpen(false)}>Class 11 & 12 Overview</span></Link>
                <Link href="/arts"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted text-amber-700 font-semibold" onClick={() => setIsOpen(false)}>Arts (FYJC & SYJC) — 3D</span></Link>
                <Link href="/commerce"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted text-emerald-700 font-semibold" onClick={() => setIsOpen(false)}>Commerce (FYJC & SYJC) — 3D</span></Link>
                <Link href="/science"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted text-cyan-700 font-semibold" onClick={() => setIsOpen(false)}>Science (FYJC & SYJC) — 3D</span></Link>
              </div>
            )}
          </div>

          {/* Senior College Mobile */}
          <div>
            <button onClick={() => setMobileSenior(!mobileSenior)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted text-left">
              Senior College <ChevronDown className={`h-4 w-4 transition-transform ${mobileSenior ? "rotate-180" : ""}`} />
            </button>
            {mobileSenior && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-border ml-3">
                <Link href="/senior-college"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted font-bold" onClick={() => setIsOpen(false)}>Undergraduate Overview</span></Link>
                <Link href="/bsc"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>B.Sc. (Bachelor of Science)</span></Link>
                <Link href="/bcs"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>BCS (Bachelor of Computer Science)</span></Link>
              </div>
            )}
          </div>

          {/* 3D Academics Mobile */}
          <div>
            <button onClick={() => setMobileAcademics(!mobileAcademics)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted text-left">
              3D Stream Portals <ChevronDown className={`h-4 w-4 transition-transform ${mobileAcademics ? "rotate-180" : ""}`} />
            </button>
            {mobileAcademics && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-border ml-3">
                <Link href="/arts"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted text-amber-700 font-semibold" onClick={() => setIsOpen(false)}>3D Arts Portal</span></Link>
                <Link href="/commerce"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted text-emerald-700 font-semibold" onClick={() => setIsOpen(false)}>3D Commerce Portal</span></Link>
                <Link href="/science"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted text-cyan-700 font-semibold" onClick={() => setIsOpen(false)}>3D Science Portal</span></Link>
                <Link href="/syllabus"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Syllabus Portal</span></Link>
                <Link href="/results"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Results & Toppers</span></Link>
              </div>
            )}
          </div>

          {/* Admissions Mobile */}
          <div>
            <button onClick={() => setMobileAdmission(!mobileAdmission)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted text-left">
              Admissions <ChevronDown className={`h-4 w-4 transition-transform ${mobileAdmission ? "rotate-180" : ""}`} />
            </button>
            {mobileAdmission && (
              <div className="pl-4 flex flex-col gap-1 mt-1 border-l border-border ml-3">
                <Link href="/admissions"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted font-bold" onClick={() => setIsOpen(false)}>Admissions Portal 2026-27</span></Link>
                <Link href="/admissions/check-eligibility"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Check Eligibility</span></Link>
                <Link href="/admissions?tab=process"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Admission Process</span></Link>
                <Link href="/admissions?tab=documents"><span className="block px-3 py-1.5 rounded-md text-xs hover:bg-muted" onClick={() => setIsOpen(false)}>Documents Required</span></Link>
              </div>
            )}
          </div>

          <Link href="/faculty"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted" onClick={() => setIsOpen(false)}>Faculty & Departments</span></Link>
          <Link href="/notices"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted" onClick={() => setIsOpen(false)}>Notices & Circulars</span></Link>
          <Link href="/downloads"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted" onClick={() => setIsOpen(false)}>Downloads & Forms</span></Link>
          <Link href="/student-corner"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted" onClick={() => setIsOpen(false)}>Student Corner</span></Link>
          <Link href="/placements"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted" onClick={() => setIsOpen(false)}>Placements</span></Link>
          <Link href="/contact"><span className="block px-3 py-2 rounded-lg text-sm font-semibold hover:bg-muted text-accent" onClick={() => setIsOpen(false)}>Contact Us</span></Link>
        </div>
      )}
    </header>
  );
}
