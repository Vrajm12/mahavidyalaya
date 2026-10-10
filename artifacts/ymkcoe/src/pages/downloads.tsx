import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Search, BookOpen, Calendar, Award } from "lucide-react";

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const downloadsList = [
    { title: "Indrayani Mahavidyalaya College Prospectus 2026-27", category: "Prospectus", size: "6.8 MB", date: "April 2026" },
    { title: "Class 11 (FYJC) Arts, Commerce & Science Admission Form", category: "Admissions", size: "1.2 MB", date: "May 2026" },
    { title: "Senior College B.Sc. & BCS Undergraduate Admission Form", category: "Admissions", size: "1.4 MB", date: "June 2026" },
    { title: "Class 12 (SYJC) Board Examination Time Table 2026", category: "Examinations", size: "850 KB", date: "March 2026" },
    { title: "SPPU B.Sc. Semester Examination Schedule 2026", category: "Examinations", size: "1.1 MB", date: "March 2026" },
    { title: "SPPU BCS (Computer Science) Semester Examination Schedule", category: "Examinations", size: "1.1 MB", date: "March 2026" },
    { title: "Academic Calendar 2026-27 (Junior & Senior College)", category: "Academic Calendar", size: "920 KB", date: "June 2026" },
    { title: "MahaDBT Government Scholarship Scheme Guidelines & Form", category: "Scholarships", size: "2.3 MB", date: "July 2026" },
    { title: "Class 11 & 12 Arts Complete Syllabus (MSBSHSE)", category: "Syllabus", size: "3.4 MB", date: "May 2026" },
    { title: "Class 11 & 12 Commerce Complete Syllabus (MSBSHSE)", category: "Syllabus", size: "3.1 MB", date: "May 2026" },
    { title: "Class 11 & 12 Science Complete Syllabus (MSBSHSE)", category: "Syllabus", size: "3.8 MB", date: "May 2026" },
    { title: "SPPU B.Sc. Detailed 3-Year Curriculum Document", category: "Syllabus", size: "4.2 MB", date: "May 2026" },
    { title: "SPPU BCS Detailed 3-Year Computing Curriculum Document", category: "Syllabus", size: "4.5 MB", date: "May 2026" },
    { title: "Library Book Bank & Reference Section Application", category: "Forms", size: "450 KB", date: "June 2026" },
    { title: "Anti-Ragging Undertaking & Compliance Affidavit", category: "Forms", size: "380 KB", date: "June 2026" },
  ];

  const categories = ["All", "Prospectus", "Admissions", "Examinations", "Academic Calendar", "Syllabus", "Scholarships", "Forms"];

  const filtered = downloadsList.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <AppLayout>
      {/* HEADER */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            Resource Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Downloads & Official Documents
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-2 max-w-2xl">
            Download admission brochures, academic calendars, examination schedules, syllabi, and official application forms.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search forms, syllabi, timetables..."
                className="w-full pl-10 pr-4 py-2 bg-muted/30 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* DOWNLOADS LIST */}
          <div className="space-y-4">
            {filtered.map((item, idx) => (
              <Card key={idx} className="p-6 border-border/60 hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-primary border-primary/30">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.size} • {item.date}</span>
                  </div>
                  <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                </div>

                <Button variant="outline" className="text-xs shrink-0 flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download Document</span>
                </Button>
              </Card>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No matching documents found. Please adjust your search criteria.
              </div>
            )}
          </div>

        </div>
      </section>
    </AppLayout>
  );
}
