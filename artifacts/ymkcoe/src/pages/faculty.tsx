import { AppLayout } from "@/components/layout/AppLayout";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Search, 
  X, 
  Briefcase, 
  FileText, 
  Calendar,
  Linkedin,
  ArrowRight
} from "lucide-react";
import { useLocation } from "wouter";

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialization: string;
  experience: string;
  email: string;
  bio: string;
  publications?: string;
  projects?: string;
  isHOD?: boolean;
  isPrincipal?: boolean;
  photoUrl?: string;
  programs: string[];
}

const DEPARTMENTS = [
  "All",
  "Administration",
  "Arts (Humanities)",
  "Commerce & Management",
  "Science",
  "Computer Science (BCS)"
];

const INDRAYANI_FACULTY: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dr. S. K. Malghe",
    designation: "Principal",
    department: "Administration",
    qualification: "M.Sc., Ph.D.",
    specialization: "Physical Chemistry, Higher Education Administration, NAAC Quality Framework",
    experience: "25+ Years",
    email: "principal@indrayanicollege.com",
    bio: "Dr. S. K. Malghe leads Indrayani Mahavidyalaya with over 25 years of educational and administrative stewardship, spearheading curriculum modernization and student empowerment.",
    isPrincipal: true,
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    programs: ["Science", "BCS", "B.Sc."]
  },
  {
    id: "fac-2",
    name: "Prof. Vilas R. Deshmukh",
    designation: "Vice Principal & HOD Arts",
    department: "Arts (Humanities)",
    qualification: "M.A. (English), M.Phil., SET",
    specialization: "Modern English Literature, Linguistics, Comparative Cultural Studies",
    experience: "20+ Years",
    email: "vilas.deshmukh@indrayanicollege.com",
    bio: "Prof. Deshmukh heads the Faculty of Arts, fostering literary appreciation, public speaking forums, and interdisciplinary cultural humanities initiatives.",
    publications: "12+ Papers on Comparative Literature and Cultural Studies",
    projects: "Coordinator for State-level Literary Youth Festival and Elocution Competitions",
    isHOD: true,
    photoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
    programs: ["Arts"]
  },
  {
    id: "fac-3",
    name: "Dr. Pratibha S. Bhalerao",
    designation: "HOD Commerce & Associate Professor",
    department: "Commerce & Management",
    qualification: "M.Com., Ph.D., GDC&A",
    specialization: "Advanced Financial Accounting, Corporate Taxation, Banking Operations",
    experience: "18+ Years",
    email: "pratibha.bhalerao@indrayanicollege.com",
    bio: "Dr. Bhalerao oversees commerce education, fintech workshops, and industry interaction for Junior and Senior commerce students.",
    publications: "15+ Research papers in National and International Banking Journals",
    projects: "Lead Advisor for Student Entrepreneurship & Financial Literacy Cell",
    isHOD: true,
    photoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80",
    programs: ["Commerce"]
  },
  {
    id: "fac-4",
    name: "Dr. Ramesh M. Kadam",
    designation: "HOD Science & Associate Professor",
    department: "Science",
    qualification: "M.Sc. (Physics), Ph.D.",
    specialization: "Solid State Physics, Thin Film Nanomaterials, Material Science",
    experience: "19+ Years",
    email: "ramesh.kadam@indrayanicollege.com",
    bio: "Dr. Kadam oversees modern experimental physics laboratories and guides undergraduate student research projects recognized by SPPU.",
    publications: "22+ Peer-reviewed research publications in international journals",
    projects: "Principal Investigator for University-sponsored Material Synthesis Grant",
    isHOD: true,
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
    programs: ["Science", "B.Sc."]
  },
  {
    id: "fac-5",
    name: "Prof. Sujata P. Patil",
    designation: "HOD Computer Science (BCS)",
    department: "Computer Science (BCS)",
    qualification: "M.Sc. (Comp. Sci.), MCA, NET",
    specialization: "Full Stack Development, Database Architecture, Machine Learning, Cloud Systems",
    experience: "14+ Years",
    email: "sujata.patil@indrayanicollege.com",
    bio: "Prof. Patil guides the BCS program, supervising hackathons, industrial software internships, and coding bootcamps for student placements.",
    publications: "8+ Papers on Applied AI and Intelligent Information Systems",
    projects: "Director of College Coding Club and Technical Symposium 'CyberNova'",
    isHOD: true,
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    programs: ["BCS"]
  },
  {
    id: "fac-6",
    name: "Prof. Sachin K. Shinde",
    designation: "Assistant Professor in History",
    department: "Arts (Humanities)",
    qualification: "M.A. (History), B.Ed., NET",
    specialization: "Maratha History, Archaeology, Heritage Conservation, Socio-Political Dynamics",
    experience: "12+ Years",
    email: "sachin.shinde@indrayanicollege.com",
    bio: "Prof. Shinde specializes in regional historiography, conducting heritage treks and archival documentation across Maval and Pune districts.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    programs: ["Arts"]
  },
  {
    id: "fac-7",
    name: "Prof. Anjali D. Joshi",
    designation: "Assistant Professor in Commerce",
    department: "Commerce & Management",
    qualification: "M.Com., MBA (Finance), SET",
    specialization: "Cost Accounting, Auditing, Capital Markets & Stock Trading",
    experience: "11+ Years",
    email: "anjali.joshi@indrayanicollege.com",
    bio: "Prof. Joshi conducts virtual stock market simulation labs and GST compliance workshops for commerce students.",
    photoUrl: "https://images.unsplash.com/photo-1580894732454-def9cd8a38ff?w=600&auto=format&fit=crop&q=80",
    programs: ["Commerce"]
  },
  {
    id: "fac-8",
    name: "Dr. Nilesh V. Pawar",
    designation: "Assistant Professor in Chemistry",
    department: "Science",
    qualification: "M.Sc. (Organic Chemistry), Ph.D.",
    specialization: "Green Synthesis, Spectroscopy, Environmental Chemistry",
    experience: "10+ Years",
    email: "nilesh.pawar@indrayanicollege.com",
    bio: "Dr. Pawar leads organic chemistry practicals and oversees water quality assessment community outreach programs in Talegaon Dabhade.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    programs: ["Science", "B.Sc."]
  },
  {
    id: "fac-9",
    name: "Prof. Sandeep R. Gaikwad",
    designation: "Training & Placement Officer (TPO)",
    department: "Computer Science (BCS)",
    qualification: "M.Sc. (CS), MBA (HR)",
    specialization: "Campus Recruitment, Aptitude Training, Corporate Relations",
    experience: "13+ Years",
    email: "tpo@indrayanicollege.com",
    bio: "Prof. Gaikwad connects graduating B.Sc. and BCS students with premier software houses and IT firms across Hinjawadi and Pune IT corridors.",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80",
    programs: ["BCS", "B.Sc."]
  }
];

export default function Faculty() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const filteredFaculty = useMemo(() => {
    return INDRAYANI_FACULTY.filter((f) => {
      const matchDept = selectedDept === "All" || f.department === selectedDept;
      const matchSearch =
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.department.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <AppLayout>
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">
            Academic Mentors
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Faculty Directory</h1>
          <p className="text-lg text-primary-foreground/80 mt-2 max-w-2xl leading-relaxed">
            Meet the experienced educators, researchers, and mentors guiding students across Arts, Commerce, Science, and Computer Science at Indrayani Mahavidyalaya.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-background border-b border-border sticky top-[64px] md:top-[80px] z-40 shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDept === dept
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty..."
              className="w-full pl-9 pr-4 py-2 bg-muted/40 border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((fac) => (
              <div
                key={fac.id}
                onClick={() => setSelectedFaculty(fac)}
                className="bg-card border border-border/70 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={fac.photoUrl}
                      alt={fac.name}
                      className="w-16 h-16 rounded-xl object-cover object-top border border-border shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        {fac.isPrincipal && (
                          <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Principal
                          </span>
                        )}
                        {fac.isHOD && (
                          <span className="bg-accent text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                            HOD
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mt-1">
                        {fac.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{fac.designation}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-muted-foreground border-t border-border/50 pt-3">
                    <p>
                      <strong className="text-foreground">Dept:</strong> {fac.department}
                    </p>
                    <p>
                      <strong className="text-foreground">Qual:</strong> {fac.qualification}
                    </p>
                    <p className="line-clamp-2">
                      <strong className="text-foreground">Focus:</strong> {fac.specialization}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-primary font-semibold border-t border-border/40">
                  <span>View Full Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-card border border-border max-w-2xl w-full rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={selectedFaculty.photoUrl}
                  alt={selectedFaculty.name}
                  className="w-20 h-20 rounded-2xl object-cover object-top border border-border"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedFaculty.name}</h3>
                  <p className="text-sm text-primary font-medium">{selectedFaculty.designation}</p>
                  <p className="text-xs text-muted-foreground">{selectedFaculty.qualification}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFaculty(null)}
                className="p-1 rounded-lg text-muted-foreground hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-muted-foreground">
              <div className="p-4 rounded-xl bg-muted/40 space-y-1">
                <p><strong>Department:</strong> {selectedFaculty.department}</p>
                <p><strong>Experience:</strong> {selectedFaculty.experience}</p>
                <p><strong>Specialization:</strong> {selectedFaculty.specialization}</p>
                <p><strong>Email:</strong> <a href={`mailto:${selectedFaculty.email}`} className="text-primary hover:underline">{selectedFaculty.email}</a></p>
              </div>

              <div>
                <strong className="text-foreground text-sm block mb-1">Biography & Leadership:</strong>
                <p className="leading-relaxed">{selectedFaculty.bio}</p>
              </div>

              {selectedFaculty.publications && (
                <div>
                  <strong className="text-foreground text-sm block mb-1">Publications & Research:</strong>
                  <p className="leading-relaxed">{selectedFaculty.publications}</p>
                </div>
              )}

              {selectedFaculty.projects && (
                <div>
                  <strong className="text-foreground text-sm block mb-1">Special Initiatives:</strong>
                  <p className="leading-relaxed">{selectedFaculty.projects}</p>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedFaculty(null)}
                className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-accent hover:text-primary transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
