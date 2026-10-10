import { AppLayout } from "@/components/layout/AppLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const DEPARTMENTS = [
  "All",
  "Junior College — Arts",
  "Junior College — Commerce",
  "Junior College — Science",
  "Senior College — B.Sc.",
  "Senior College — BCS",
];

const STATIC_PROGRAMS = [
  {
    name: "Junior College — Arts (FYJC & SYJC)",
    department: "Junior College — Arts",
    type: "Higher Secondary (Class 11 & 12)",
    duration: "2 Years",
    seats: 240,
    eligibility: "Class 10 (SSC) passed from recognized board with English",
    fees: "Govt. of Maharashtra Grant-in-Aid norms",
    description: "Focuses on English, modern Indian languages, history, geography, economics, political science, and sociology. Strong orientation towards civil services, law, journalism, and humanities.",
    link: "/arts",
  },
  {
    name: "Junior College — Commerce (FYJC & SYJC)",
    department: "Junior College — Commerce",
    type: "Higher Secondary (Class 11 & 12)",
    duration: "2 Years",
    seats: 360,
    eligibility: "Class 10 (SSC) passed from recognized board",
    fees: "Govt. of Maharashtra Grant-in-Aid norms",
    description: "Covers Book-Keeping & Accountancy, Organization of Commerce, Economics, and Secretarial Practice / Mathematics. Preparation for CA, CS, CMA, banking, and commerce degrees.",
    link: "/commerce",
  },
  {
    name: "Junior College — Science (FYJC & SYJC)",
    department: "Junior College — Science",
    type: "Higher Secondary (Class 11 & 12)",
    duration: "2 Years",
    seats: 240,
    eligibility: "Class 10 (SSC) passed with minimum 35% in Science & Maths",
    fees: "Govt. of Maharashtra Grant-in-Aid norms",
    description: "Rigorous curriculum in Physics, Chemistry, Mathematics, Biology, and IT with practical laboratory training. Comprehensive guidance for MHT-CET, JEE, and NEET.",
    link: "/science",
  },
  {
    name: "B.Sc. — Bachelor of Science",
    department: "Senior College — B.Sc.",
    type: "Undergraduate Degree (SPPU)",
    duration: "3 Years (6 Semesters)",
    seats: 120,
    eligibility: "HSC (10+2) passed in Science stream",
    fees: "Affordable fee structure as prescribed by SPPU",
    description: "Three-year comprehensive degree affiliated with Savitribai Phule Pune University in Physics, Chemistry, Mathematics, Botany, and Microbiology with specialized experimental projects.",
    link: "/bsc",
  },
  {
    name: "BCS — Bachelor of Computer Science",
    department: "Senior College — BCS",
    type: "Undergraduate Degree (SPPU)",
    duration: "3 Years (6 Semesters)",
    seats: 80,
    eligibility: "HSC (10+2) Science with Mathematics or 3-Year Polytechnic Diploma",
    fees: "As prescribed by Savitribai Phule Pune University",
    description: "Premier technical undergraduate degree program specializing in Data Structures, Modern Web Architecture, Relational Databases, Python, Cloud Computing, and Artificial Intelligence.",
    link: "/bcs",
  },
];

export default function Courses() {
  const [selectedDept, setSelectedDept] = useState<string>("All");

  const filtered = STATIC_PROGRAMS.filter((p) => {
    if (selectedDept === "All") return true;
    return p.department === selectedDept;
  });

  return (
    <AppLayout>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            Academics Directory
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Academic Programs</h1>
          <p className="text-lg text-primary-foreground/80 mt-2 max-w-2xl leading-relaxed">
            Explore our comprehensive range of Junior College programs in Arts, Commerce, and Science alongside University Undergraduate Degrees in B.Sc. and BCS.
          </p>
        </div>
      </section>

      <section className="py-8 bg-background border-b border-border sticky top-[64px] md:top-[80px] z-40 shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto pb-2 -mb-2">
          <div className="flex gap-2 min-w-max">
            {DEPARTMENTS.map((dept) => (
              <Button
                key={dept}
                variant={selectedDept === dept ? "default" : "outline"}
                onClick={() => setSelectedDept(dept)}
                className={selectedDept === dept ? "bg-primary text-white font-semibold" : "text-xs"}
              >
                {dept}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((course, idx) => (
              <Card key={idx} className="border-border/60 hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden">
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs text-primary border-primary/30">
                      {course.type}
                    </Badge>
                    <span className="text-xs font-mono font-bold text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/60 text-xs">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Eligibility:</strong> {course.eligibility}
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Intake Seats:</strong> {course.seats}
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Fees:</strong> {course.fees}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 flex gap-3">
                  <Link href={course.link} className="flex-1">
                    <Button className="w-full bg-primary hover:bg-accent text-white font-medium flex items-center justify-center gap-2 transition-colors">
                      <span>Explore Program Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/admissions">
                    <Button variant="outline" className="text-xs">
                      Apply
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
