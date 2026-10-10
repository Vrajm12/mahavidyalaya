import { Link } from "wouter";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center font-bold text-lg font-serif">
                IM
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">Indrayani Mahavidyalaya</h3>
                <span className="text-xs text-primary-foreground/70">Indrayani Vidya Mandir Trust</span>
              </div>
            </div>

            <p className="text-xs text-primary-foreground/80 leading-relaxed">
              Premier educational institution offering Junior College in Arts, Commerce, and Science (Classes 11 & 12) along with Savitribai Phule Pune University undergraduate degrees in B.Sc. and BCS in Talegaon Dabhade since 1965.
            </p>

            <div className="flex gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors flex items-center justify-center" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-accent hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Academic Portals & 3D Streams */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-primary-foreground/15 pb-2 text-accent">
              Academic Streams
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Junior College (11th & 12th)", href: "/junior-college" },
                { label: "Arts Stream (FYJC & SYJC) — 3D", href: "/arts" },
                { label: "Commerce Stream (FYJC & SYJC) — 3D", href: "/commerce" },
                { label: "Science Stream (FYJC & SYJC) — 3D", href: "/science" },
                { label: "B.Sc. — Bachelor of Science", href: "/bsc" },
                { label: "BCS — Bachelor of Computer Science", href: "/bcs" },
                { label: "Senior College Programs", href: "/senior-college" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-xs text-primary-foreground/80 hover:text-accent transition-colors flex items-center group cursor-pointer">
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Information */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-primary-foreground/15 pb-2 text-accent">
              College Sections
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About Indrayani Mahavidyalaya", href: "/about" },
                { label: "Principal's Message", href: "/principal-message" },
                { label: "Vision & Mission", href: "/vision-mission" },
                { label: "Indrayani Vidya Mandir Trust", href: "/trust" },
                { label: "Admissions 2026-27", href: "/admissions" },
                { label: "Notices & Circulars", href: "/notices" },
                { label: "Downloads & Forms", href: "/downloads" },
                { label: "Campus & Facilities", href: "/campus" },
                { label: "Student Corner", href: "/student-corner" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-xs text-primary-foreground/80 hover:text-accent transition-colors flex items-center group cursor-pointer">
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-primary-foreground/15 pb-2 text-accent">
              Campus Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Indrayani Mahavidyalaya, Talegaon-Chakan Road, Talegaon Dabhade, Tal. Maval, Dist. Pune, Maharashtra 410507</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>+91 2114 222225 / 223555</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a href="mailto:principal@indrayanicollege.com" className="hover:text-accent transition-colors">
                  principal@indrayanicollege.com
                </a>
              </li>
              <li className="pt-2">
                <div className="p-3 rounded-xl bg-white/10 text-[11px] text-primary-foreground/90 leading-tight">
                  <strong className="block text-accent">Office Hours:</strong>
                  Mon – Sat: 9:00 AM – 5:00 PM (Admin Wing)
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Sub-footer */}
      <div className="bg-black/30 border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-primary-foreground/60">
          <p>&copy; {currentYear} Indrayani Mahavidyalaya — Indrayani Vidya Mandir Trust. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy"><span className="hover:text-accent cursor-pointer">Privacy Policy</span></Link>
            <span>•</span>
            <Link href="/terms"><span className="hover:text-accent cursor-pointer">Terms of Use</span></Link>
            <span>•</span>
            <Link href="/admin"><span className="hover:text-accent cursor-pointer">Staff / Admin Login</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
