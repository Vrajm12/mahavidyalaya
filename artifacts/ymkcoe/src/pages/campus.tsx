import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  BookOpen,
  FlaskConical,
  Cpu,
  Trophy,
  Coffee,
  ShieldCheck,
  Trees,
  Wifi,
  Sparkles,
} from "lucide-react";

export default function CampusPage() {
  const facilities = [
    {
      title: "Sprawling 15-Acre Green Campus",
      icon: Trees,
      desc: "Lush green landscaped campus situated along Talegaon-Chakan Road, offering an eco-friendly, serene, and pollution-free learning environment.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "State-of-the-Art Science Laboratories",
      icon: FlaskConical,
      desc: "Modern Physics, Chemistry, Botany, and Microbiology labs equipped with digital spectrometers, chemical fume hoods, microscopes, and safety stations.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "High-Tech Computer Science Hub (BCS)",
      icon: Cpu,
      desc: "Air-conditioned computer center with 100+ high-end workstations, Linux/Windows environments, gigabit LAN, and 1 Gbps fiber optic internet.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Central Knowledge & Digital Library",
      icon: BookOpen,
      desc: "Extensive repository containing over 25,000 reference volumes, textbooks, national journals, research magazines, and automated book-bank facilities.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Athletic Grounds & Sports Complex",
      icon: Trophy,
      desc: "Spacious outdoor playground for cricket, football, volleyball, and athletics, complemented by indoor sports facilities for table tennis, carrom, and chess.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
    },
    {
      title: "Multipurpose Auditorium & Seminar Halls",
      icon: Building2,
      desc: "Acoustically designed seminar halls equipped with digital projectors, audio-visual systems, and seating capacity for academic symposia and cultural fests.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <AppLayout>
      {/* HEADER */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            World-Class Infrastructure
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Campus & Facilities
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-2xl leading-relaxed">
            Discover the premier academic, technological, athletic, and cultural infrastructure of Indrayani Mahavidyalaya at Talegaon Dabhade.
          </p>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <Card key={idx} className="overflow-hidden border-border/60 hover:shadow-xl transition-all group">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-primary font-bold text-lg">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">{fac.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{fac.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CAMPUS AMENITIES BANNER */}
          <div className="p-8 md:p-12 rounded-3xl bg-muted/40 border border-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <Wifi className="w-6 h-6 text-primary mx-auto mb-2" />
              <strong className="block text-sm font-bold text-foreground">High-Speed Wi-Fi</strong>
              <span className="text-xs text-muted-foreground">Campus-wide coverage</span>
            </div>
            <div className="space-y-1">
              <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
              <strong className="block text-sm font-bold text-foreground">CCTV Security</strong>
              <span className="text-xs text-muted-foreground">24/7 Monitored Campus</span>
            </div>
            <div className="space-y-1">
              <Coffee className="w-6 h-6 text-primary mx-auto mb-2" />
              <strong className="block text-sm font-bold text-foreground">Hygienic Canteen</strong>
              <span className="text-xs text-muted-foreground">Healthy, subsidized meals</span>
            </div>
            <div className="space-y-1">
              <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
              <strong className="block text-sm font-bold text-foreground">Girls Hostel Facility</strong>
              <span className="text-xs text-muted-foreground">Secure on-campus stay</span>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
