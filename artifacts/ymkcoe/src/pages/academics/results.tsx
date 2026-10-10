import { AppLayout } from "@/components/layout/AppLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Award, 
  BookOpen, 
  Target, 
  FileSpreadsheet, 
  GraduationCap,
  Sparkles,
  Medal,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Results() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"hsc" | "bsc" | "bcs">("hsc");
  const [academicYear, setAcademicYear] = useState<"2025-26" | "2024-25">("2025-26");

  const handleDownloadGazette = (stream: string) => {
    toast({
      title: "Downloading Result Gazette",
      description: `Downloading official SPPU / HSC Board result statement for ${stream}...`
    });
  };

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-primary to-[#011a2a]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/10 backdrop-blur-md">
              <Trophy className="w-7 h-7 text-accent animate-bounce" />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-bold uppercase tracking-wider mb-3">
              Indrayani Mahavidyalaya Academic Honors
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              Academic Results & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e6d080]">Merit Rankers</span>
            </h1>
            <p className="text-sm md:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Celebrating our students' scholastic excellence across Maharashtra State Board HSC examinations and Savitribai Phule Pune University degree programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Main Stream Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div className="inline-flex p-1.5 bg-muted/80 backdrop-blur rounded-2xl border border-muted/50 shadow-sm gap-1.5 w-full sm:w-auto">
              {[
                { id: "hsc", label: "Junior College (HSC Board)" },
                { id: "bsc", label: "Senior B.Sc. (SPPU)" },
                { id: "bcs", label: "Senior BCS (Comp. Sci)" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`cursor-pointer flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id 
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Academic Year Switcher */}
            <div className="inline-flex p-1 bg-white border border-border rounded-xl shadow-xs">
              {(["2025-26", "2024-25"] as const).map(yr => (
                <button
                  key={yr}
                  onClick={() => setAcademicYear(yr)}
                  className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    academicYear === yr ? "bg-accent/15 text-accent border border-accent/25" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  AY {yr}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* HSC JUNIOR COLLEGE RESULTS */}
            {activeTab === "hsc" && (
              <motion.div
                key="hsc"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                {/* Board Overview Banner */}
                <div className="bg-gradient-to-r from-primary to-[#012238] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider rounded-full mb-2">
                        Maharashtra State Board (MSBSHSE Pune) • Class 12
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold">HSC Board Examination Performance {academicYear}</h2>
                      <p className="text-xs md:text-sm text-white/80 mt-1 max-w-xl">
                        Indrayani Mahavidyalaya junior wing achieved stellar outcomes with hundreds of students securing First Class with Distinction across Science, Commerce, and Arts.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 shrink-0">
                      <div className="text-center">
                        <span className="text-[10px] text-white/70 uppercase block font-semibold">Overall Pass %</span>
                        <span className="text-2xl font-black text-accent">96.8%</span>
                      </div>
                      <div className="w-[1px] h-10 bg-white/20" />
                      <div className="text-center">
                        <span className="text-[10px] text-white/70 uppercase block font-semibold">Distinctions</span>
                        <span className="text-2xl font-black text-white">142+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Stream Breakdowns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* SCIENCE STREAM */}
                  <div className="bg-white border border-border p-6 rounded-3xl shadow-sm flex flex-col justify-between hover:border-cyan-500/40 transition-all">
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold text-xs">
                            SCI
                          </div>
                          <h3 className="font-extrabold text-foreground">12th Science Toppers</h3>
                        </div>
                        <span className="px-2.5 py-1 bg-cyan-50 text-cyan-700 text-[11px] font-bold rounded-lg border border-cyan-100">
                          98.2% Pass
                        </span>
                      </div>

                      <div className="space-y-3 mb-6">
                        {[
                          { rank: "1st", name: "Aarav S. Deshpande", pct: "94.67%", sub: "PCM: 98/100" },
                          { rank: "2nd", name: "Tanvi M. Kulkarni", pct: "93.83%", sub: "PCB: 97/100" },
                          { rank: "3rd", name: "Omkar R. Shinde", pct: "92.50%", sub: "Maths: 99/100" },
                          { rank: "4th", name: "Sneha P. Gaikwad", pct: "91.17%", sub: "Physics: 96/100" }
                        ].map((s, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-muted/30 text-xs">
                            <div className="flex items-center gap-2.5">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                                idx === 0 ? "bg-amber-400 text-amber-950" : idx === 1 ? "bg-slate-300 text-slate-800" : "bg-amber-700 text-white"
                              }`}>
                                {s.rank}
                              </span>
                              <div>
                                <p className="font-bold text-foreground leading-tight">{s.name}</p>
                                <span className="text-[10px] text-muted-foreground">{s.sub}</span>
                              </div>
                            </div>
                            <span className="font-black text-cyan-600 text-xs">{s.pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDownloadGazette("12th Science")}
                      className="cursor-pointer w-full py-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Full Science Gazette
                    </button>
                  </div>

                  {/* COMMERCE STREAM */}
                  <div className="bg-white border border-border p-6 rounded-3xl shadow-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all">
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs">
                            COM
                          </div>
                          <h3 className="font-extrabold text-foreground">12th Commerce Toppers</h3>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-100">
                          96.5% Pass
                        </span>
                      </div>

                      <div className="space-y-3 mb-6">
                        {[
                          { rank: "1st", name: "Riddhi V. Agrawal", pct: "93.40%", sub: "BK & Acc: 99/100" },
                          { rank: "2nd", name: "Sahil N. Bhegade", pct: "92.17%", sub: "OCM: 96/100" },
                          { rank: "3rd", name: "Pranjal K. Patil", pct: "90.83%", sub: "Economics: 95/100" },
                          { rank: "4th", name: "Kunal D. Tapkir", pct: "89.50%", sub: "SP: 94/100" }
                        ].map((s, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-muted/30 text-xs">
                            <div className="flex items-center gap-2.5">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                                idx === 0 ? "bg-amber-400 text-amber-950" : idx === 1 ? "bg-slate-300 text-slate-800" : "bg-amber-700 text-white"
                              }`}>
                                {s.rank}
                              </span>
                              <div>
                                <p className="font-bold text-foreground leading-tight">{s.name}</p>
                                <span className="text-[10px] text-muted-foreground">{s.sub}</span>
                              </div>
                            </div>
                            <span className="font-black text-emerald-600 text-xs">{s.pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDownloadGazette("12th Commerce")}
                      className="cursor-pointer w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Full Commerce Gazette
                    </button>
                  </div>

                  {/* ARTS STREAM */}
                  <div className="bg-white border border-border p-6 rounded-3xl shadow-sm flex flex-col justify-between hover:border-amber-500/40 transition-all">
                    <div>
                      <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">
                            ART
                          </div>
                          <h3 className="font-extrabold text-foreground">12th Arts Toppers</h3>
                        </div>
                        <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[11px] font-bold rounded-lg border border-amber-100">
                          95.4% Pass
                        </span>
                      </div>

                      <div className="space-y-3 mb-6">
                        {[
                          { rank: "1st", name: "Vaishnavi B. Jadhav", pct: "91.83%", sub: "Pol Sci: 97/100" },
                          { rank: "2nd", name: "Aditya S. More", pct: "89.67%", sub: "History: 95/100" },
                          { rank: "3rd", name: "Pooja G. Sawant", pct: "88.50%", sub: "English: 94/100" },
                          { rank: "4th", name: "Mayur T. Chavan", pct: "87.00%", sub: "Sociology: 93/100" }
                        ].map((s, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-muted/30 text-xs">
                            <div className="flex items-center gap-2.5">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                                idx === 0 ? "bg-amber-400 text-amber-950" : idx === 1 ? "bg-slate-300 text-slate-800" : "bg-amber-700 text-white"
                              }`}>
                                {s.rank}
                              </span>
                              <div>
                                <p className="font-bold text-foreground leading-tight">{s.name}</p>
                                <span className="text-[10px] text-muted-foreground">{s.sub}</span>
                              </div>
                            </div>
                            <span className="font-black text-amber-600 text-xs">{s.pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDownloadGazette("12th Arts")}
                      className="cursor-pointer w-full py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Full Arts Gazette
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* B.SC. DEGREE RESULTS */}
            {activeTab === "bsc" && (
              <motion.div
                key="bsc"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-300 font-bold text-xs uppercase tracking-wider rounded-full mb-2">
                        Savitribai Phule Pune University (SPPU)
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold">Bachelor of Science (B.Sc.) Convocation Results</h2>
                      <p className="text-xs md:text-sm text-white/80 mt-1 max-w-xl">
                        Our graduating B.Sc. scholars have registered top university CGPA scores, qualifying for premier post-graduate research institutes across India.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 shrink-0">
                      <div className="text-center">
                        <span className="text-[10px] text-white/70 uppercase block font-semibold">Pass Rate</span>
                        <span className="text-2xl font-black text-accent">94.2%</span>
                      </div>
                      <div className="w-[1px] h-10 bg-white/20" />
                      <div className="text-center">
                        <span className="text-[10px] text-white/70 uppercase block font-semibold">Distinctions</span>
                        <span className="text-2xl font-black text-white">48 Stud.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* B.Sc. Merit Board Table */}
                <div className="bg-white border border-border rounded-3xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-base font-extrabold text-foreground mb-4">University Merit Holders — T.Y. B.Sc.</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-border text-muted-foreground font-bold">
                          <th className="pb-3 pl-2">Rank</th>
                          <th className="pb-3">Candidate Name</th>
                          <th className="pb-3">Specialization</th>
                          <th className="pb-3 text-center">CGPA / %</th>
                          <th className="pb-3 text-right pr-2">Class Awarded</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        {[
                          { rank: "1st College Rank", name: "Pooja V. Jagtap", spec: "Analytical Chemistry", score: "9.62 CGPA (87.5%)", award: "First Class with Distinction" },
                          { rank: "2nd College Rank", name: "Sanket M. Shinde", spec: "Physics", score: "9.45 CGPA (85.2%)", award: "First Class with Distinction" },
                          { rank: "3rd College Rank", name: "Aniket S. Bhalerao", spec: "Botany & Ecology", score: "9.31 CGPA (83.8%)", award: "First Class with Distinction" },
                          { rank: "4th College Rank", name: "Sneha G. Ghadge", spec: "Mathematics", score: "9.20 CGPA (82.6%)", award: "First Class with Distinction" },
                          { rank: "5th College Rank", name: "Rohan D. Patil", spec: "Chemistry", score: "9.12 CGPA (81.9%)", award: "First Class with Distinction" }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-muted/20">
                            <td className="py-3.5 pl-2 font-bold flex items-center gap-2">
                              <Trophy className={`w-4 h-4 ${idx === 0 ? "text-amber-500" : idx === 1 ? "text-slate-400" : "text-amber-700"}`} />
                              {row.rank}
                            </td>
                            <td className="py-3.5 font-bold text-foreground">{row.name}</td>
                            <td className="py-3.5 text-muted-foreground">{row.spec}</td>
                            <td className="py-3.5 text-center font-black text-blue-600">{row.score}</td>
                            <td className="py-3.5 text-right pr-2 font-semibold text-emerald-600">{row.award}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* BCS DEGREE RESULTS */}
            {activeTab === "bcs" && (
              <motion.div
                key="bcs"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                <div className="bg-gradient-to-r from-indigo-900 to-[#101426] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                    <div>
                      <span className="inline-block px-3 py-1 bg-indigo-400/20 text-indigo-300 font-bold text-xs uppercase tracking-wider rounded-full mb-2">
                        Savitribai Phule Pune University (SPPU)
                      </span>
                      <h2 className="text-2xl md:text-3xl font-extrabold">BCS (Bachelor of Computer Science) Graduating Class</h2>
                      <p className="text-xs md:text-sm text-white/80 mt-1 max-w-xl">
                        Exceptional technical problem solving and software project distinction. Over 85% of eligible students placed in top tier IT firms like TCS, Infosys, and Cognizant.
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 shrink-0">
                      <div className="text-center">
                        <span className="text-[10px] text-white/70 uppercase block font-semibold">Pass Rate</span>
                        <span className="text-2xl font-black text-accent">96.0%</span>
                      </div>
                      <div className="w-[1px] h-10 bg-white/20" />
                      <div className="text-center">
                        <span className="text-[10px] text-white/70 uppercase block font-semibold">Placements</span>
                        <span className="text-2xl font-black text-emerald-400">85%+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BCS Merit Table */}
                <div className="bg-white border border-border rounded-3xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-base font-extrabold text-foreground mb-4">University Merit Holders — T.Y. BCS</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-border text-muted-foreground font-bold">
                          <th className="pb-3 pl-2">Rank</th>
                          <th className="pb-3">Candidate Name</th>
                          <th className="pb-3">Capstone Project</th>
                          <th className="pb-3 text-center">CGPA / %</th>
                          <th className="pb-3 text-right pr-2">Placed At</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60">
                        {[
                          { rank: "1st College Rank", name: "Siddharth R. Kadam", proj: "Distributed Cloud File Orchestrator", score: "9.80 CGPA (89.1%)", placed: "TCS Digital" },
                          { rank: "2nd College Rank", name: "Shruti P. Joshi", proj: "AI Medical Diagnostics Assistant", score: "9.68 CGPA (88.0%)", placed: "Infosys" },
                          { rank: "3rd College Rank", name: "Abhishek N. Thorat", proj: "Microservices FinTech Gateway", score: "9.52 CGPA (86.4%)", placed: "Cognizant" },
                          { rank: "4th College Rank", name: "Neha S. Gaikwad", proj: "Secure Blockchain Land Ledger", score: "9.41 CGPA (85.2%)", placed: "Wipro" },
                          { rank: "5th College Rank", name: "Akash V. Mane", proj: "Automated Student Academic CRM", score: "9.30 CGPA (84.1%)", placed: "Persistent Systems" }
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-muted/20">
                            <td className="py-3.5 pl-2 font-bold flex items-center gap-2">
                              <Trophy className={`w-4 h-4 ${idx === 0 ? "text-amber-500" : idx === 1 ? "text-slate-400" : "text-amber-700"}`} />
                              {row.rank}
                            </td>
                            <td className="py-3.5 font-bold text-foreground">{row.name}</td>
                            <td className="py-3.5 text-muted-foreground">{row.proj}</td>
                            <td className="py-3.5 text-center font-black text-indigo-600">{row.score}</td>
                            <td className="py-3.5 text-right pr-2 font-bold text-emerald-600">{row.placed}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </AppLayout>
  );
}
