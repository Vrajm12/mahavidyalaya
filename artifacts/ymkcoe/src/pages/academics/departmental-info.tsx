import { AppLayout } from "@/components/layout/AppLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Palette, Briefcase, Atom, Layers, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEPARTMENTS = [
  {
    id: "arts",
    title: "Junior College Arts",
    subtitle: "Classes 11 (FYJC) & 12 (SYJC)",
    duration: "2 Years",
    intake: 240,
    accent: "text-amber-500",
    bgAccent: "bg-amber-500",
    description: "A comprehensive higher secondary humanities program cultivating critical reasoning, linguistic eloquence, historical inquiry, and socio-political awareness. Serves as a prime foundation for civil services, law, journalism, and social research.",
    modules: [
      { title: "Languages & Literature", desc: "Compulsory English and Modern Indian Languages (Marathi / Hindi)." },
      { title: "Historical & Cultural Studies", desc: "Indian history, ancient civilizations, and Maval heritage historiography." },
      { title: "Social & Political Governance", desc: "Constitutional democracy, governance structures, and international relations." },
      { title: "Economic & Human Geography", desc: "Microeconomics, national development, cartography, and physical geography." }
    ],
    link: "/arts",
    icon: Palette
  },
  {
    id: "commerce",
    title: "Junior College Commerce",
    subtitle: "Classes 11 (FYJC) & 12 (SYJC)",
    duration: "2 Years",
    intake: 360,
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500",
    description: "Foundational commercial and financial curriculum designed to develop proficient accountants, enterprise managers, and financial analysts. Provides springboard training for CA, CS, CMA, and MBA degrees.",
    modules: [
      { title: "Book-Keeping & Accountancy", desc: "Double-entry bookkeeping, ledger systems, partnership accounts, and balance sheets." },
      { title: "Organization of Commerce", desc: "Forms of enterprise, corporate management, marketing, and consumer law." },
      { title: "Commercial Mathematics / SP", desc: "Secretarial practice compliance or commercial statistics and calculus." },
      { title: "Macro & Applied Economics", desc: "National income, monetary and fiscal policy, banking, and public finance." }
    ],
    link: "/commerce",
    icon: Briefcase
  },
  {
    id: "science",
    title: "Junior College Science",
    subtitle: "Classes 11 (FYJC) & 12 (SYJC)",
    duration: "2 Years",
    intake: 240,
    accent: "text-cyan-500",
    bgAccent: "bg-cyan-500",
    description: "Rigorous scientific instruction combined with hands-on laboratory experimentation. Aligned with state board requirements and competitive national entrance examinations (MHT-CET, JEE, NEET).",
    modules: [
      { title: "Physics Laboratory & Theory", desc: "Mechanics, thermodynamics, electrodynamics, optics, and semiconductor physics." },
      { title: "Chemical Synthesis & Analysis", desc: "Organic mechanisms, inorganic periodicity, physical chemistry, and qualitative analysis." },
      { title: "Mathematics & Computing", desc: "Calculus, differential equations, vectors, statistics, and information technology." },
      { title: "Biological Sciences", desc: "Cellular biology, genetics, plant physiology, animal taxonomy, and ecology." }
    ],
    link: "/science",
    icon: Atom
  },
  {
    id: "bsc",
    title: "B.Sc. — Bachelor of Science",
    subtitle: "Undergraduate Degree (SPPU)",
    duration: "3 Years",
    intake: 120,
    accent: "text-blue-500",
    bgAccent: "bg-blue-500",
    description: "Three-year comprehensive university undergraduate program affiliated with Savitribai Phule Pune University (SPPU). Focuses on deep experimental research across physical, chemical, and biological sciences.",
    modules: [
      { title: "Advanced Chemistry", desc: "Spectroscopy, coordination compounds, physical chemistry, and green synthesis." },
      { title: "Experimental & Modern Physics", desc: "Quantum mechanics, solid state physics, nuclear physics, and optics." },
      { title: "Botanical & Life Sciences", desc: "Plant morphology, biochemistry, physiology, and microbiology laboratory work." },
      { title: "Applied Mathematics", desc: "Linear algebra, multivariable calculus, and numerical computation." }
    ],
    link: "/bsc",
    icon: Layers
  },
  {
    id: "bcs",
    title: "BCS — Bachelor of Computer Science",
    subtitle: "Undergraduate Degree (SPPU)",
    duration: "3 Years",
    intake: 80,
    accent: "text-indigo-500",
    bgAccent: "bg-indigo-500",
    description: "Our premier technical computing degree affiliated with Savitribai Phule Pune University. Equips students with software development skills, algorithmic analysis, full stack engineering, database systems, and AI.",
    modules: [
      { title: "Software Development Toolchains", desc: "C/C++, Core Java, Python, and modern web application development." },
      { title: "Data Structures & Algorithms", desc: "Time complexity analysis, trees, graphs, dynamic programming, and data systems." },
      { title: "Database & Cloud Architecture", desc: "SQL relational databases, NoSQL, Linux systems, and cloud fundamentals." },
      { title: "Applied AI & Data Analytics", desc: "Machine learning algorithms, predictive modeling, and capstone software projects." }
    ],
    link: "/bcs",
    icon: Cpu
  }
];

export default function DepartmentalInfo() {
  const [activeTab, setActiveTab] = useState(DEPARTMENTS[0].id);

  // Sync tab with query parameters if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam && DEPARTMENTS.some(d => d.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  const currentDept = DEPARTMENTS.find(d => d.id === activeTab) || DEPARTMENTS[0];
  const IconComponent = currentDept.icon;

  return (
    <AppLayout>
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-3">
          <span className="text-accent text-xs font-bold tracking-widest uppercase">Academic Disciplines</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Departmental Information</h1>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Detailed overview of academic streams and degree programs offered at Indrayani Mahavidyalaya under Indrayani Vidya Mandir Trust.
          </p>
        </div>
      </section>

      {/* Tabs Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-[64px] md:top-[80px] z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-5xl overflow-x-auto pb-2 -mb-2">
          <div className="flex gap-2 min-w-max">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon;
              const isActive = activeTab === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveTab(dept.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{dept.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Department Detail View */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-card border border-border/70 rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/70 pb-6">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${currentDept.bgAccent}/15 ${currentDept.accent} flex items-center justify-center shrink-0`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{currentDept.title}</h2>
                  <p className="text-sm text-muted-foreground">{currentDept.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                <div className="bg-muted px-3 py-1.5 rounded-lg">
                  Duration: <strong className="text-foreground">{currentDept.duration}</strong>
                </div>
                <div className="bg-muted px-3 py-1.5 rounded-lg">
                  Intake: <strong className="text-foreground">{currentDept.intake} Seats</strong>
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed text-base">
              {currentDept.description}
            </p>

            {/* Modules Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Curriculum & Subject Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentDept.modules.map((mod, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-muted/30 border border-border/60 space-y-1.5">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{mod.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-6">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="pt-4 border-t border-border flex flex-wrap justify-between items-center gap-4">
              <Link href={currentDept.link}>
                <Button className="bg-primary hover:bg-accent text-white font-semibold flex items-center gap-2">
                  <span>Visit Dedicated {currentDept.title} Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/admissions">
                <Button variant="outline">
                  Apply for Admission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
