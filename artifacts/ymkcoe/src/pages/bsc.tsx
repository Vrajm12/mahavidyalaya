import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Atom,
  FlaskConical,
  GraduationCap,
  Download,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Users,
  Microscope,
} from "lucide-react";

export default function BscPage() {
  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-[#071f38] to-[#041224] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 text-xs font-semibold mb-3">
            Savitribai Phule Pune University (SPPU)
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            B.Sc. — Bachelor of Science
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 mt-4 max-w-2xl leading-relaxed">
            A prestigious 3-year undergraduate degree program offering deep experimental foundations in Physics, Chemistry, Botany, and Mathematics under Indrayani Mahavidyalaya.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-blue-500/20">
            <div>
              <span className="text-xs text-blue-200/70 block uppercase">Duration</span>
              <strong className="text-lg font-mono text-white">3 Years (6 Sems)</strong>
            </div>
            <div>
              <span className="text-xs text-blue-200/70 block uppercase">Sanctioned Intake</span>
              <strong className="text-lg font-mono text-white">120 Seats</strong>
            </div>
            <div>
              <span className="text-xs text-blue-200/70 block uppercase">Pattern</span>
              <strong className="text-lg font-mono text-white">SPPU CBCS System</strong>
            </div>
            <div>
              <span className="text-xs text-blue-200/70 block uppercase">Eligibility</span>
              <strong className="text-lg font-mono text-white">12th Science Pass</strong>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/admissions">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                Apply for B.Sc. 2026-27 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/science">
              <Button size="lg" variant="outline" className="border-blue-400/30 text-blue-200 hover:bg-blue-950/40">
                Explore 3D Science Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CURRICULUM BREAKDOWN */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Program Structure & Syllabus Outline</h2>
            <p className="text-muted-foreground mt-2">
              Designed as per Savitribai Phule Pune University guidelines, integrating core theoretical subjects with hands-on laboratory practicals every semester.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-border/60 space-y-4">
              <Badge variant="outline" className="text-blue-700 border-blue-700/30">First Year (F.Y. B.Sc.)</Badge>
              <h3 className="text-xl font-bold text-foreground">Foundation Courses</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Physics: Mechanics & Heat Thermodynamics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Chemistry: Inorganic & Organic Synthesis Basics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Mathematics: Algebra & Geometry Analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Botany: Plant Diversity & Morphology</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Compulsory Practical Laboratory Modules</li>
              </ul>
            </Card>

            <Card className="p-6 border-border/60 space-y-4">
              <Badge variant="outline" className="text-blue-700 border-blue-700/30">Second Year (S.Y. B.Sc.)</Badge>
              <h3 className="text-xl font-bold text-foreground">Core Specialization</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Physical & Analytical Chemistry Spectroscopy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Electronics, Magnetism & Wave Optics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Differential Equations & Numerical Techniques</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Plant Physiology & Biochemistry</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Environmental Studies & Fieldwork Projects</li>
              </ul>
            </Card>

            <Card className="p-6 border-border/60 space-y-4">
              <Badge variant="outline" className="text-blue-700 border-blue-700/30">Third Year (T.Y. B.Sc.)</Badge>
              <h3 className="text-xl font-bold text-foreground">Advanced Research</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Quantum Mechanics & Nuclear Physics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Advanced Organic Synthesis & Catalysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Green Chemistry & Environmental Analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Independent Research Dissertation / Project</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Seminar Presentations & Viva-Voce</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ADMISSION & ELIGIBILITY */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Eligibility & Application Procedure</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Admission to F.Y. B.Sc. is granted on the basis of merit in the qualifying Higher Secondary Certificate (HSC 10+2) examination. Students from Maharashtra State Board, CBSE, ICSE, and recognized boards are eligible.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Passed HSC (10+2) in Science stream.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Direct submission of application form at college office.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Scholarships available via MahaDBT portal for eligible categories.</li>
            </ul>
            <div className="pt-2">
              <Link href="/admissions">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                  Start Admission Online
                </Button>
              </Link>
            </div>
          </div>

          <Card className="p-8 border-border/60 space-y-4 bg-background">
            <h3 className="text-xl font-bold text-foreground">Download B.Sc. Information Pack</h3>
            <p className="text-xs text-muted-foreground">
              Get the complete SPPU syllabus document, laboratory manuals list, and previous semester question sets.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-between text-xs">
                <span>B.Sc. Complete Syllabus PDF</span>
                <Download className="w-3.5 h-3.5 text-muted-foreground" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-xs">
                <span>Chemistry & Physics Lab Manuals</span>
                <Download className="w-3.5 h-3.5 text-muted-foreground" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-xs">
                <span>Fee Structure & Concessions</span>
                <Download className="w-3.5 h-3.5 text-muted-foreground" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </AppLayout>
  );
}
