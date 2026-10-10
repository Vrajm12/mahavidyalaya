import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Cpu,
  Binary,
  Code2,
  Terminal,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Download,
  Users,
  Briefcase,
  Laptop,
} from "lucide-react";

export default function BcsPage() {
  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-950 via-[#042033] to-[#02121e] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-xs font-semibold mb-3">
            Savitribai Phule Pune University (SPPU)
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            BCS — Bachelor of Computer Science
          </h1>
          <p className="text-lg md:text-xl text-cyan-100/80 mt-4 max-w-2xl leading-relaxed">
            Our premier 3-year undergraduate computing degree program engineering future full-stack software architects, algorithmic innovators, and data intelligence leaders.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-cyan-500/20">
            <div>
              <span className="text-xs text-cyan-200/70 block uppercase">Duration</span>
              <strong className="text-lg font-mono text-white">3 Years (6 Sems)</strong>
            </div>
            <div>
              <span className="text-xs text-cyan-200/70 block uppercase">Sanctioned Intake</span>
              <strong className="text-lg font-mono text-white">80 Seats</strong>
            </div>
            <div>
              <span className="text-xs text-cyan-200/70 block uppercase">Pattern</span>
              <strong className="text-lg font-mono text-white">SPPU CBCS System</strong>
            </div>
            <div>
              <span className="text-xs text-cyan-200/70 block uppercase">Eligibility</span>
              <strong className="text-lg font-mono text-white">12th Sci + Maths</strong>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/admissions">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold">
                Apply for BCS 2026-27 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/placements">
              <Button size="lg" variant="outline" className="border-cyan-400/30 text-cyan-200 hover:bg-cyan-950/40">
                View IT Placement Records
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Computer Science Technical Curriculum</h2>
            <p className="text-muted-foreground mt-2">
              Comprehensive semester-wise coursework bridging fundamental computing theory and hands-on software development using modern developer toolchains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-border/60 space-y-4">
              <Badge variant="outline" className="text-cyan-700 border-cyan-700/30">First Year (F.Y. BCS)</Badge>
              <h3 className="text-xl font-bold text-foreground">Programming Foundations</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Problem Solving & C Programming</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Computer Organization & Digital Logic</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Discrete Mathematics & Graph Theory</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Statistics for Computer Science</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> C & Electronic Circuit Simulation Labs</li>
              </ul>
            </Card>

            <Card className="p-6 border-border/60 space-y-4">
              <Badge variant="outline" className="text-cyan-700 border-cyan-700/30">Second Year (S.Y. BCS)</Badge>
              <h3 className="text-xl font-bold text-foreground">Core Systems Architecture</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Data Structures using C++ & Algorithms</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Relational Database Systems (RDBMS & SQL)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Linux Operating Systems & Shell Scripting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Computer Networks & Network Protocols</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Database & Data Structure Coding Practicals</li>
              </ul>
            </Card>

            <Card className="p-6 border-border/60 space-y-4">
              <Badge variant="outline" className="text-cyan-700 border-cyan-700/30">Third Year (T.Y. BCS)</Badge>
              <h3 className="text-xl font-bold text-foreground">Modern Web & Cloud AI</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Java Enterprise Technologies & Frameworks</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Full Stack Web Development (React, Node, APIs)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Python, Data Analytics & Machine Learning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Cloud Computing & Software Testing (QA)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> Major Industrial Live Capstone Project</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPUTING LABS & INDUSTRY COLLABORATIONS */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground">Computer Science Labs & Career Placements</h2>
            <p className="text-muted-foreground mt-2">
              Equipped with 100+ high-end computers, gigabit LAN connectivity, dedicated Linux servers, and placement drives connecting directly to Hinjawadi IT Park.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Terminal, title: "100+ Workstations", desc: "Dual boot Linux/Windows with high-speed processors." },
              { icon: Cloud, title: "1 Gbps Fiber Link", desc: "Uninterrupted gigabit connectivity across development labs." },
              { icon: Code2, title: "CyberNova Tech Fest", desc: "Annual hackathons, coding contests, and paper presentations." },
              { icon: Briefcase, title: "Top IT Recruiters", desc: "Campus drives with TCS, Infosys, Wipro, and Cognizant." },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 border-border/60 hover:shadow-lg transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADMISSION & ELIGIBILITY */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">BCS Eligibility & Admissions</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Admissions to the Bachelor of Computer Science program follow the merit guidelines of Savitribai Phule Pune University.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Passed HSC (10+2) in Science with Mathematics.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> 3-Year Engineering Polytechnic Diploma holders also eligible.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" /> Admissions granted strictly on merit basis.</li>
            </ul>
            <div className="pt-2">
              <Link href="/admissions">
                <Button className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold">
                  Apply for BCS Degree 2026-27
                </Button>
              </Link>
            </div>
          </div>

          <Card className="p-8 border-border/60 space-y-4">
            <h3 className="text-xl font-bold text-foreground">Download BCS Resources</h3>
            <p className="text-xs text-muted-foreground">
              Access the official SPPU BCS curriculum, lab assignment repositories, and admission prospectus.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-between text-xs">
                <span>Complete BCS 3-Year Syllabus PDF</span>
                <Download className="w-3.5 h-3.5 text-muted-foreground" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-xs">
                <span>Data Structures & Python Lab Exercises</span>
                <Download className="w-3.5 h-3.5 text-muted-foreground" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-xs">
                <span>BCS Placement Brochure & Recruiters</span>
                <Download className="w-3.5 h-3.5 text-muted-foreground" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </AppLayout>
  );
}
