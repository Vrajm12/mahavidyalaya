import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark, Award, Building2, Users, CheckCircle2, History, HeartHandshake } from "lucide-react";

export default function TrustPage() {
  const trustInstitutions = [
    {
      name: "Indrayani Mahavidyalaya",
      type: "Junior & Senior College (Arts, Commerce, Science, B.Sc., BCS)",
      established: "Affiliated to MSBSHSE & Savitribai Phule Pune University",
      desc: "Flagship arts, commerce, and science institution offering junior college and undergraduate university programs.",
    },
    {
      name: "Krishnarao Bhegade Institute of Pharmaceutical Education & Research",
      type: "Pharmacy College (D.Pharm, B.Pharm, M.Pharm)",
      established: "Approved by PCI & AICTE, Affiliated to DBATU / MSBTE",
      desc: "Premier pharmaceutical technical institution conducting research and healthcare education.",
    },
    {
      name: "Indrayani English Medium School & Junior College",
      type: "Primary, Secondary & Higher Secondary Education",
      established: "CBSE & State Board Curriculum",
      desc: "Comprehensive school education imparting foundational knowledge, sports, and life skills.",
    },
    {
      name: "Indrayani Institute of Management & Research",
      type: "Management Studies (MBA)",
      established: "Affiliated to SPPU, Approved by AICTE",
      desc: "Advanced postgraduate management education preparing corporate executives and business consultants.",
    },
  ];

  return (
    <AppLayout>
      {/* HEADER */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            Foundational Trust
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Indrayani Vidya Mandir Trust
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-2xl leading-relaxed">
            Six decades of philanthropic dedication to academic empowerment, ethical leadership, and rural-urban educational bridging in Talegaon Dabhade, Pune.
          </p>
        </div>
      </section>

      {/* TRUST HISTORY & HERITAGE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <History className="w-5 h-5 text-accent" />
                <span>Established in 1965</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Pioneering Quality Education for the Maval Region
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Indrayani Vidya Mandir Trust was founded in the historic town of Talegaon Dabhade in 1965 by visionary social reformers, educationists, and local philanthropists. At a time when higher education avenues were scarce outside Pune city, the Trust pledged to bring modern schooling, collegiate arts, science, commerce, and technical programs directly to the doorsteps of aspiring rural and semi-urban students.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Over the decades, the trust has grown exponentially into a vibrant educational sanctuary, nurturing thousands of school children, junior college students, undergraduates, pharmacists, and managers across an expansive campus.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "1965", label: "Year Founded" },
                { number: "15+ Acres", label: "Green Educational Campus" },
                { number: "12,000+", label: "Students Across Trust Units" },
                { number: "50,000+", label: "Proud Alumni Network" },
              ].map((stat, idx) => (
                <Card key={idx} className="p-6 text-center border-border/60 bg-muted/20">
                  <span className="text-2xl md:text-3xl font-bold text-primary block font-mono">{stat.number}</span>
                  <span className="text-xs text-muted-foreground mt-1 block">{stat.label}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* SISTER INSTITUTIONS UNDER THE TRUST */}
          <div className="space-y-8">
            <div className="max-w-2xl">
              <Badge className="bg-primary/10 text-primary mb-2">Institutional Network</Badge>
              <h2 className="text-3xl font-bold text-foreground">Institutions Under Indrayani Vidya Mandir</h2>
              <p className="text-sm text-muted-foreground mt-1">
                The Trust administers multiple reputed institutions providing comprehensive education from kindergarten to doctoral research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trustInstitutions.map((inst, idx) => (
                <Card key={idx} className="p-6 border-border/60 hover:shadow-lg transition-all space-y-3">
                  <Badge variant="outline" className="text-xs text-primary border-primary/30">
                    {inst.type}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">{inst.name}</h3>
                  <p className="text-xs font-medium text-accent">{inst.established}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{inst.desc}</p>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>
    </AppLayout>
  );
}
