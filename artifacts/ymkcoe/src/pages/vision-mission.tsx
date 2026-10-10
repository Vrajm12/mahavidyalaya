import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Compass, Heart, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function VisionMissionPage() {
  const coreValues = [
    { title: "Academic Rigor", desc: "Uncompromising standards in curriculum delivery, laboratory practicals, and university assessment." },
    { title: "Inclusive Empowerment", desc: "Ensuring top-tier higher secondary and degree education is accessible to all socio-economic strata." },
    { title: "Integrity & Ethics", desc: "Instilling honesty, moral responsibility, and transparency in both personal and professional spheres." },
    { title: "Innovation & Inquiry", desc: "Encouraging scientific curiosity, critical debate, creative expression, and technical experimentation." },
    { title: "Social Accountability", desc: "Cultivating national service through NSS, environmental consciousness, and community development." },
    { title: "Holistic Development", desc: "Fostering physical sports, cultural theatrical arts, and psychological resilience alongside academics." },
  ];

  return (
    <AppLayout>
      {/* HEADER */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            Guiding Philosophy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Vision & Mission
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-2 max-w-2xl">
            The core ideals and foundational purpose guiding Indrayani Mahavidyalaya under Indrayani Vidya Mandir Trust.
          </p>
        </div>
      </section>

      {/* VISION & MISSION PANELS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VISION CARD */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                "To emerge as a premier center of higher and secondary learning that imparts value-based quality education, empowers rural and semi-urban youth, and enables students from diverse socio-economic backgrounds to become enlightened, self-reliant global citizens."
              </p>
            </Card>

            {/* MISSION CARD */}
            <Card className="p-8 border-accent/20 bg-gradient-to-br from-accent/5 via-background to-background shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>To provide quality education across Arts, Commerce, Science, and Computer Science to students of Maval and surrounding regions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>To develop critical thinking, scientific temper, and digital competencies through modern laboratories and active teaching.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>To nurture civic responsibility, ecological consciousness, and patriotic values through NSS, sports, and cultural clubs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>To bridge academia and industry through skill certification programs, software training, and placement assistance.</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* CORE VALUES */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge className="bg-muted text-muted-foreground mb-2">Institutional Pillars</Badge>
              <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Every policy, lecture, and student engagement at Indrayani Mahavidyalaya is anchored in these six ethical pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((val, idx) => (
                <Card key={idx} className="p-6 border-border/60 hover:shadow-md transition-all space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-base">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>
    </AppLayout>
  );
}
