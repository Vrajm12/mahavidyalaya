import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Search, FileText, ArrowRight, Download, AlertCircle } from "lucide-react";

export default function NoticesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const notices = [
    {
      id: 1,
      title: "Admissions Open 2026-27: Junior College (Arts, Commerce, Science) & Senior College (B.Sc., BCS)",
      category: "Admissions",
      date: "May 10, 2026",
      isNew: true,
      desc: "Indrayani Mahavidyalaya invites applications for admission into Class 11 (FYJC) Arts, Commerce, and Science, along with Senior College undergraduate programs B.Sc. and BCS. Merit lists and counseling schedules are posted on the college portal.",
    },
    {
      id: 2,
      title: "SPPU Semester Examination Timetables Released for B.Sc. & BCS Programs",
      category: "Examinations",
      date: "May 08, 2026",
      isNew: true,
      desc: "Savitribai Phule Pune University (SPPU) examination branch has released the theoretical and practical schedules for second and final year B.Sc. and BCS examinations. Hall tickets are available in the administrative wing.",
    },
    {
      id: 3,
      title: "Class 12 (SYJC) Board Practical Examination Schedule 2026",
      category: "Examinations",
      date: "May 04, 2026",
      isNew: false,
      desc: "Detailed batch-wise timetable for Maharashtra State Board SYJC Science, Commerce, and Arts practical and oral assessments. Students must report in uniform with signed lab journals.",
    },
    {
      id: 4,
      title: "Annual Cultural & Youth Festival 'Indrayani Tarang' Dates Announced",
      category: "Events",
      date: "April 28, 2026",
      isNew: false,
      desc: "Indrayani Mahavidyalaya will host its prestigious inter-collegiate festival celebrating literature, theatre, debate, classical arts, music, and digital creativity under the patronage of Indrayani Vidya Mandir Trust.",
    },
    {
      id: 5,
      title: "MahaDBT Government Scholarship Renewal Notice for 2026-27",
      category: "Scholarships",
      date: "April 22, 2026",
      isNew: false,
      desc: "All SC, ST, VJNT, OBC, and EBC scholarship holders are instructed to complete their Aadhaar seeding and submit renewal applications on the MahaDBT portal before the deadline.",
    },
    {
      id: 6,
      title: "Mega Campus Placement Drive for Final Year BCS and B.Sc. Students",
      category: "Placements",
      date: "April 15, 2026",
      isNew: false,
      desc: "The Training & Placement Cell announces on-campus recruitment with top software firms including TCS, Infosys, and Wipro. Eligible candidates must register with the TPO.",
    },
  ];

  const categories = ["All", "Admissions", "Examinations", "Events", "Scholarships", "Placements"];

  const filtered = notices.filter((n) => {
    const matchCat = filter === "All" || n.category === filter;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) || n.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <AppLayout>
      {/* HEADER */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            Official Bulletin
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Notices & Circulars
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-2 max-w-2xl">
            Stay updated with official institutional announcements, examination schedules, university circulars, and campus events.
          </p>
        </div>
      </section>

      {/* FILTER & LIST */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search circulars, exams, notices..."
                className="w-full pl-10 pr-4 py-2 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filter === cat
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* NOTICES LIST */}
          <div className="space-y-4">
            {filtered.map((notice) => (
              <Card key={notice.id} className="p-6 border-border/60 hover:shadow-md transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-primary border-primary/30">
                      {notice.category}
                    </Badge>
                    {notice.isNew && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{notice.date}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground leading-snug">{notice.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{notice.desc}</p>
              </Card>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No circulars found matching your search.
              </div>
            )}
          </div>

        </div>
      </section>
    </AppLayout>
  );
}
