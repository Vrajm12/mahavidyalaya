import { AppLayout } from "@/components/layout/AppLayout";
import { Building2, Target, Eye, Award, Quote, BookOpen, Atom, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <AppLayout>
      {/* Hero Section with Parallax */}
      <section ref={containerRef} className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={`${import.meta.env.BASE_URL}hero-building.png`} 
            alt="Indrayani Mahavidyalaya Campus" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 text-accent rounded-full text-sm font-semibold tracking-wider mb-6">
              IVM TRUST ESTABLISHED 1965
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Indrayani <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e6d080]">Mahavidyalaya</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 border-l-4 border-accent pl-4 max-w-2xl drop-shadow">
              A premier educational institution under Indrayani Vidya Mandir Trust, offering Junior College in Arts, Commerce, and Science, alongside university undergraduate programs in B.Sc. and BCS in Talegaon Dabhade, Pune.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-0">
            {/* Vision Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-7/12 bg-primary text-white p-10 md:p-16 rounded-3xl md:rounded-r-none relative z-10 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <Eye className="w-64 h-64" />
              </div>
              <div className="relative z-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-1 bg-accent rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Vision</h2>
                </div>
                <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                  "To impart value-based quality education, empower youth from diverse socio-economic backgrounds, and nurture students into self-reliant, enlightened, and ethically conscious citizens."
                </p>
              </div>
            </motion.div>

            {/* Mission Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="md:w-6/12 bg-white p-10 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:-ml-12 md:mt-16 relative z-20 border border-muted/50"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Mission</h2>
              </div>
              <ul className="space-y-6 text-muted-foreground">
                {[
                  "To deliver high-standard instruction across Arts, Commerce, Science, and Computer Science.",
                  "To foster scientific temper, literary appreciation, and commercial acumen through state-of-the-art laboratories.",
                  "To build character, leadership, and lifelong learning through sports, NSS, and cultural forums.",
                  "To facilitate meaningful industry internships, skill certifications, and campus placements."
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="flex gap-4 group"
                  >
                    <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1 transition-transform group-hover:scale-125" />
                    <span className="leading-relaxed text-base md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-[#EEF2F6] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Institutional Distinctions
            </h2>
            <p className="text-lg text-muted-foreground">
              Built upon recognized academic affiliations and sprawling infrastructure under Indrayani Vidya Mandir Trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "SPPU Affiliated", desc: "Senior College degrees (B.Sc., BCS) affiliated to Savitribai Phule Pune University." },
              { icon: Award, title: "MSBSHSE Board", desc: "Junior College (Classes 11 & 12) affiliated to Maharashtra State Board, Pune Division." },
              { icon: Building2, title: "15-Acre Campus", desc: "Expansive green campus with modern laboratories, library, and sports complexes." },
              { icon: Building2, title: "Founded in 1965", desc: "Over 60 years of foundational educational service to Maval and Pune region." }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/5 relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white/10 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                  alt="Dr. S. K. Malghe - Principal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-xl">Principal</p>
                <p className="text-xs font-semibold uppercase opacity-90">Indrayani Mahavidyalaya</p>
              </div>
            </div>

            <div className="lg:w-3/5 space-y-6">
              <Quote className="w-16 h-16 text-white/10" />
              <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase">Leadership Desk</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Dr. S. K. Malghe <span className="block text-xl font-normal text-white/70 mt-1">(M.Sc., Ph.D.)</span>
              </h3>
              <p className="text-lg text-white/85 leading-relaxed font-light">
                "Welcome to Indrayani Mahavidyalaya. Our mission has always been to provide high-quality education in Arts, Commerce, Science, and Computer Science to students of Talegaon Dabhade and Maval. We combine academic discipline with creative and sporting opportunities to nurture well-rounded global professionals."
              </p>
              <div className="pt-4 flex gap-4">
                <Link href="/principal-message">
                  <Button className="bg-accent hover:bg-accent/90 text-primary font-bold">
                    Read Full Principal's Message →
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Admission Information
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
