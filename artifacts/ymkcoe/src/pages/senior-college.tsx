import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  GraduationCap,
  Atom,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";

export default function SeniorCollegePage() {
  const programs = [
    {
      title: "B.Sc. — Bachelor of Science",
      degree: "3-Year Undergraduate Degree (6 Semesters)",
      affiliation: "Savitribai Phule Pune University (SPPU)",
      intake: "120 Seats",
      color: "from-blue-950 via-slate-900 to-indigo-950",
      accent: "text-blue-400",
      link: "/bsc",
      overview: "A multidimensional degree program in pure, physical, and botanical sciences. Emphasizes experimental rigor, scientific methodologies, research documentation, and industrial application.",
      subjects: [
        "Advanced Physical, Inorganic & Organic Chemistry",
        "Classical Mechanics, Electrodynamics & Quantum Physics",
        "Calculus, Differential Equations & Numerical Methods",
        "Plant Morphology, Taxonomy & Botany Practicals",
        "Microbiology & Environmental Sciences",
      ],
      careers: ["Scientific Research Assistant (BARC, IISER, CSIR)", "Chemical Quality Analyst & Formulation Chemist", "Civil Services (UPSC / MPSC / Forest Service)", "Postgraduate M.Sc. / Research Doctorates"],
    },
    {
      title: "BCS — Bachelor of Computer Science",
      degree: "3-Year Undergraduate Degree (6 Semesters)",
      affiliation: "Savitribai Phule Pune University (SPPU)",
      intake: "80 Seats",
      color: "from-cyan-950 via-slate-900 to-teal-950",
      accent: "text-cyan-400",
      link: "/bcs",
      overview: "Our flagship technical program designed to cultivate high-caliber software developers, systems architects, and data scientists equipped with cutting-edge languages, frameworks, and algorithms.",
      subjects: [
        "Data Structures & Advanced Algorithmic Analysis",
        "Object Oriented Programming (C++, Java, Python)",
        "Full Stack Web Technologies & Modern JavaScript",
        "Relational & Distributed Database Management Systems",
        "Operating Systems, Cloud Architecture & Machine Learning",
      ],
      careers: ["Software Engineer & Full Stack Developer", "Data Analyst & Business Intelligence Specialist", "Systems & Cloud Administrator", "Campus Recruitments with TCS, Infosys, Wipro, L&T"],
    },
  ];

  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/40 text-sm font-semibold">
              Undergraduate Degree Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Senior College at Indrayani Mahavidyalaya
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Affiliated with Savitribai Phule Pune University (SPPU). Offering distinguished bachelor degree programs in Bachelor of Science (B.Sc.) and Bachelor of Computer Science (BCS) with robust campus placement support.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  Senior College Admissions 2026-27 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/placements">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  View Placement Records
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Undergraduate Programs (SPPU Affiliated)</h2>
            <p className="text-muted-foreground mt-3">
              Benefit from university Choice Based Credit System (CBCS) curriculum, state-of-the-art computer labs, science research facilities, and direct industrial mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((prog, idx) => (
              <Card key={idx} className="border-border/60 hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden">
                <div>
                  <div className={`p-8 bg-gradient-to-r ${prog.color} text-white space-y-3`}>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-white border-white/30 text-xs">
                        {prog.degree}
                      </Badge>
                      <span className="text-xs text-white/80 font-mono">Intake: {prog.intake}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">{prog.title}</h3>
                    <p className="text-xs text-white/70">{prog.affiliation}</p>
                  </div>

                  <CardContent className="p-8 space-y-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prog.overview}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider block">Key Courses Covered:</span>
                      <ul className="space-y-1.5">
                        {prog.subjects.map((sub, sIdx) => (
                          <li key={sIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-border/60">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider block">Career Pathways:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {prog.careers.map((c, cIdx) => (
                          <span key={cIdx} className="text-[11px] bg-muted px-2.5 py-1 rounded-md text-foreground/80 font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>

                <div className="p-8 pt-0 flex gap-4">
                  <Link href={prog.link} className="flex-1">
                    <Button className="w-full bg-primary hover:bg-accent text-white font-medium flex items-center justify-center gap-2 transition-colors">
                      <span>View Detailed Syllabus & Labs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITY ACCREDITATION & FEATURES */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-primary/10 text-primary mb-2">University Affiliation</Badge>
            <h2 className="text-3xl font-bold text-foreground">Why Study Senior College at Indrayani Mahavidyalaya?</h2>
            <p className="text-muted-foreground mt-2">
              Combining university academic pedigree with top infrastructure and close proximity to Pune's Hinjawadi and Talegaon MIDC industrial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-border/60 space-y-3">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-bold text-foreground">SPPU Degree Recognition</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Degrees awarded by Savitribai Phule Pune University ('A+' Grade NAAC Accredited), recognized globally for higher master programs and overseas admissions.
              </p>
            </Card>

            <Card className="p-6 border-border/60 space-y-3">
              <Cpu className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Industry-Driven Coding Hub</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dedicated computer labs with gigabit optical networks, developer software suites, and technical bootcamps in Python, Cloud, and Web Architecture.
              </p>
            </Card>

            <Card className="p-6 border-border/60 space-y-3">
              <Building className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Placement & Corporate Drives</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Active Training & Placement Cell coordinating on-campus interviews, soft-skills training, and internship avenues with top multinational IT and financial corporations.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
