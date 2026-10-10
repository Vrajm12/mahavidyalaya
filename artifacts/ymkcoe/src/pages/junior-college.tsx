import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Download,
  Sparkles,
  Palette,
  Briefcase,
  Atom,
} from "lucide-react";

export default function JuniorCollegePage() {
  const streams = [
    {
      title: "Arts Stream (FYJC & SYJC)",
      tag: "Class 11 & Class 12",
      color: "from-amber-950 to-rose-950",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50",
      badgeBg: "bg-amber-600/15 text-amber-700 border-amber-600/30",
      icon: Palette,
      intake: "240 Seats",
      link: "/arts",
      overview: "Humanities, languages, literature, history, and social sciences with a strong orientation towards civil services, law, journalism, and public administration.",
      subjects: ["Compulsory English", "Marathi / Hindi", "History & Heritage", "Geography", "Political Science", "Economics", "Sociology / Psychology"],
    },
    {
      title: "Commerce Stream (FYJC & SYJC)",
      tag: "Class 11 & Class 12",
      color: "from-emerald-950 to-teal-950",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      badgeBg: "bg-emerald-600/15 text-emerald-700 border-emerald-600/30",
      icon: Briefcase,
      intake: "360 Seats",
      link: "/commerce",
      overview: "Foundational commercial and financial education covering bookkeeping, corporate management, economics, secretarial practice, and commercial mathematics.",
      subjects: ["Compulsory English", "Book-Keeping & Accountancy", "Organization of Commerce & Management", "Economics", "Secretarial Practice / Math & Stats", "Marathi / Hindi / IT"],
    },
    {
      title: "Science Stream (FYJC & SYJC)",
      tag: "Class 11 & Class 12",
      color: "from-cyan-950 to-blue-950",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50",
      badgeBg: "bg-cyan-600/15 text-cyan-700 border-cyan-600/30",
      icon: Atom,
      intake: "240 Seats",
      link: "/science",
      overview: "Rigorous scientific education with laboratory experimentation across physics, chemistry, biology, mathematics, and computer information technology.",
      subjects: ["Compulsory English", "Physics", "Chemistry", "Mathematics & Statistics", "Biology", "Information Technology / Geography"],
    },
  ];

  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-accent/20 text-accent border-accent/40 text-sm font-semibold">
              Higher Secondary Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Junior College at Indrayani Mahavidyalaya
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Affiliated with the Maharashtra State Board of Secondary and Higher Secondary Education (Pune Division). Delivering academic excellence across Arts, Commerce, and Science for Class 11 (FYJC) and Class 12 (SYJC).
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/admissions">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                  FYJC Admissions 2026-27 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/admissions/check-eligibility">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STREAM OVERVIEW CARDS */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore Our Three Academic Streams</h2>
            <p className="text-muted-foreground mt-3">
              Each stream features a dedicated curriculum, experienced faculty, interactive 3D virtual immersion pages, and student support societies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {streams.map((stream, idx) => {
              const Icon = stream.icon;
              return (
                <Card key={idx} className={`border-border/60 ${stream.border} hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden`}>
                  <div>
                    {/* Header Banner */}
                    <div className={`p-8 bg-gradient-to-r ${stream.color} text-white space-y-3`}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider font-semibold opacity-80">{stream.tag}</span>
                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <Icon className={`w-5 h-5 ${stream.accent}`} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight">{stream.title}</h3>
                      <p className="text-xs text-white/80">Intake: {stream.intake}</p>
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 space-y-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {stream.overview}
                      </p>

                      <div className="space-y-2">
                        <span className="text-xs font-bold text-foreground uppercase tracking-wider block">Subjects Offered:</span>
                        <ul className="space-y-1.5">
                          {stream.subjects.map((s, sIdx) => (
                            <li key={sIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  {/* Footer Action */}
                  <div className="p-8 pt-0">
                    <Link href={stream.link}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium flex items-center justify-center gap-2 group-hover:bg-accent transition-colors">
                        <span>Experience 3D {stream.title.split(" ")[0]} Portal</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* JUNIOR COLLEGE ADMISSIONS & GUIDELINES */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-primary/10 text-primary mb-2">Centralized Process</Badge>
            <h2 className="text-3xl font-bold text-foreground">Class 11 (FYJC) Online Admission Guidelines</h2>
            <p className="text-muted-foreground mt-2">
              Admissions are conducted through the Pune Division Centralized Admission Process (CAP) as mandated by the Directorate of Education, Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-border/60 space-y-3">
              <span className="text-2xl font-bold text-primary font-mono">01.</span>
              <h3 className="text-lg font-bold text-foreground">Online CAP Registration</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Register on the official 11th admission portal (11thadmission.org.in), complete Part 1 (Student Profile) and Part 2 (Junior College Option Preferences).
              </p>
            </Card>

            <Card className="p-6 border-border/60 space-y-3">
              <span className="text-2xl font-bold text-primary font-mono">02.</span>
              <h3 className="text-lg font-bold text-foreground">Merit List Allotment</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Select Indrayani Mahavidyalaya as your preferred choice. Track CAP regular merit rounds and institutional quota counseling rounds.
              </p>
            </Card>

            <Card className="p-6 border-border/60 space-y-3">
              <span className="text-2xl font-bold text-primary font-mono">03.</span>
              <h3 className="text-lg font-bold text-foreground">Document Verification & Fee</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Report to the college admission desk with original Class 10 marksheet, School Leaving Certificate, and online allotment slip to finalize admission.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
