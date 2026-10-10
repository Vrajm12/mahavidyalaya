import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Mail, Phone, Award, CheckCircle2 } from "lucide-react";

export default function PrincipalsMessagePage() {
  return (
    <AppLayout>
      {/* HEADER */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 text-xs font-semibold mb-3">
            Institutional Leadership
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Principal's Message
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-2 max-w-2xl">
            A message of vision, purpose, and commitment from the Principal of Indrayani Mahavidyalaya.
          </p>
        </div>
      </section>

      {/* MESSAGE CONTENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Principal Photo Card */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="overflow-hidden border-border/60 shadow-xl">
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                    alt="Dr. S. K. Malghe - Principal"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold">Dr. S. K. Malghe</h3>
                    <p className="text-sm text-accent font-medium">M.Sc., Ph.D.</p>
                    <p className="text-xs text-white/80">Principal, Indrayani Mahavidyalaya</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-3 bg-card">
                  <div className="text-xs text-muted-foreground space-y-2">
                    <p className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Over 25 years of Academic Leadership</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href="mailto:principal@indrayanicollege.com" className="hover:text-primary">
                        principal@indrayanicollege.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 2114 222225 / 223555</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badge */}
              <div className="p-6 rounded-2xl bg-muted/40 border border-border space-y-2">
                <span className="text-xs uppercase font-bold text-muted-foreground tracking-wider block">Parent Institution</span>
                <h4 className="font-bold text-foreground text-base">Indrayani Vidya Mandir Trust</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Founded with the noble mission to bring accessible, affordable, and high-quality modern education to students across Maval, Pune, and Maharashtra.
                </p>
              </div>
            </div>

            {/* Message Letter */}
            <div className="lg:col-span-7 space-y-6 text-foreground/90 leading-relaxed text-base">
              <Quote className="w-12 h-12 text-primary/20" />

              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                "Welcome to Indrayani Mahavidyalaya — Where Education Inspires Transformation"
              </h2>

              <p>
                It gives me immense pleasure and honor to welcome you to <strong>Indrayani Mahavidyalaya</strong>, a premier educational sanctum founded and nurtured under the benevolent aegis of <strong>Indrayani Vidya Mandir Trust</strong> in Talegaon Dabhade, Pune.
              </p>

              <p>
                Education at Indrayani Mahavidyalaya is not merely the acquisition of textbook knowledge; it is the comprehensive cultivation of intellect, character, ethical consciousness, and social empathy. Whether in our <strong>Junior College streams (Arts, Commerce, and Science)</strong> or our <strong>Senior College undergraduate programs (B.Sc. and BCS)</strong>, our core philosophy remains unchanged: to provide world-class academic learning coupled with holistic human values.
              </p>

              <p>
                We take immense pride in our state-of-the-art laboratory facilities, our enriched central library with thousands of volumes and digital journal access, our high-speed computer science center, and our vibrant sports and cultural wings. Our distinguished faculty members serve not just as teachers, but as true mentors, guiding each student towards personal, academic, and professional excellence.
              </p>

              <p>
                Over the decades, thousands of our alumni have distinguished themselves across corporate boardrooms, civil services, scientific research institutions, judicial systems, and entrepreneurship. We invite every young student entering our portals to dream ambitiously, work persistently, and make meaningful contributions to our society and nation.
              </p>

              <div className="pt-6 border-t border-border space-y-1">
                <p className="font-bold text-lg text-foreground">Dr. S. K. Malghe</p>
                <p className="text-sm text-muted-foreground">Principal, Indrayani Mahavidyalaya</p>
                <p className="text-xs text-muted-foreground">Indrayani Vidya Mandir Trust, Talegaon Dabhade</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </AppLayout>
  );
}
