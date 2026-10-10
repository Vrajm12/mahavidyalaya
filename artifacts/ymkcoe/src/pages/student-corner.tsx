import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Users,
  Trophy,
  Palette,
  Heart,
  ShieldAlert,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function StudentCornerPage() {
  const sections = [
    {
      title: "Student Council",
      icon: Users,
      desc: "Elected student representatives collaborating with faculty leadership to foster vibrant student democracy, organizing collegiate forums, and voicing student needs.",
      link: "/support/student-council",
    },
    {
      title: "National Service Scheme (NSS)",
      icon: Heart,
      desc: "Active NSS unit conducting rural empowerment camps, blood donation drives, tree plantations, literacy campaigns, and cleanliness drives across Maval taluka.",
      link: "/support/nss-events",
    },
    {
      title: "Cultural & Theatrical Society",
      icon: Palette,
      desc: "Annual 'Indrayani Tarang' youth festival, one-act drama competitions, musical orchestras, folk dance showcases, and literary elocution events.",
      link: "/support/cultural",
    },
    {
      title: "Sports & Physical Education",
      icon: Trophy,
      desc: "Extensive athletic coaching and university tournaments in cricket, football, kabaddi, volleyball, badminton, athletics, chess, and table tennis.",
      link: "/support/sports-events",
    },
    {
      title: "Anti-Ragging & Safety Committee",
      icon: ShieldAlert,
      desc: "Zero-tolerance anti-ragging policy with 24/7 helpline, internal complaints committee, and CCTV-monitored student safety corridors.",
      link: "/support/anti-ragging",
    },
    {
      title: "MahaDBT Scholarship Guidance",
      icon: GraduationCap,
      desc: "Dedicated administrative desk assisting students with state and central scholarship portals (SC, ST, VJNT, OBC, SBC, EBC, Minority schemes).",
      link: "/support/mahadbt",
    },
  ];

  return (
    <AppLayout>
      {/* HEADER */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            Campus Ecosystem
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Student Corner
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-2xl leading-relaxed">
            Empowering student life beyond academics through leadership councils, community service, cultural arts, athletic tournaments, and welfare cells.
          </p>
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <Card key={idx} className="p-8 border-border/60 hover:shadow-xl transition-all flex flex-col justify-between group space-y-4">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{sec.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{sec.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <Link href={sec.link}>
                      <Button variant="ghost" className="w-full justify-between text-xs text-primary group-hover:text-accent p-0">
                        <span>Explore Section</span>
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
    </AppLayout>
  );
}
