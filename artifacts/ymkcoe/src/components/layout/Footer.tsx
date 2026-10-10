import { Link } from "wouter";
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-[#173B75]/40 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#173B75] text-white flex items-center justify-center font-bold text-lg border border-blue-400/30 shadow-sm">
                IM
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white leading-tight">Indrayani Mahavidyalaya</h3>
                <span className="text-xs text-blue-200">Indrayani Vidya Mandir Trust</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Premier educational institution offering Junior College in Arts, Commerce, and Science (Classes 11 & 12) along with Savitribai Phule Pune University undergraduate degrees in B.Sc. and BCS in Talegaon Dabhade.
            </p>

            <div className="flex gap-2.5 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-[#173B75]/60 hover:bg-[#173B75] text-slate-200 hover:text-white transition-colors flex items-center justify-center" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#173B75]/60 hover:bg-[#173B75] text-slate-200 hover:text-white transition-colors flex items-center justify-center" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#173B75]/60 hover:bg-[#173B75] text-slate-200 hover:text-white transition-colors flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#173B75]/60 hover:bg-[#173B75] text-slate-200 hover:text-white transition-colors flex items-center justify-center" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Academic Portals & 3D Streams */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-[#173B75] pb-2 text-blue-300">
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
                    <span className="text-xs text-slate-300 hover:text-blue-300 transition-colors flex items-center group cursor-pointer">
                      <ChevronRight className="h-3 w-3 mr-1 text-blue-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-[#173B75] pb-2 text-blue-300">
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
                    <span className="text-xs text-slate-300 hover:text-blue-300 transition-colors flex items-center group cursor-pointer">
                      <ChevronRight className="h-3 w-3 mr-1 text-blue-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-[#173B75] pb-2 text-blue-300">
              Campus Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Indrayani Mahavidyalaya, Talegaon-Chakan Road, Talegaon Dabhade, Tal. Maval, Dist. Pune 410507</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="h-4 w-4 text-blue-400 shrink-0" />
                <span>+91 2114 222225 / 223555</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a href="mailto:info@indrayanimahavidyalaya.org" className="hover:text-blue-300 transition-colors">
                  info@indrayanimahavidyalaya.org
                </a>
              </li>
              <li className="pt-2">
                <div className="p-3 rounded-xl bg-[#173B75]/40 border border-[#173B75]/60 text-[11px] text-slate-200 leading-tight">
                  <strong className="block text-blue-300 mb-0.5">Office Hours:</strong>
                  Mon – Sat: 9:00 AM – 5:00 PM (Admin Wing)
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Sub-footer */}
      <div className="bg-[#071527] border-t border-[#173B75]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-400">
          <p>&copy; {currentYear} Indrayani Mahavidyalaya — Indrayani Vidya Mandir Trust. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy"><span className="hover:text-blue-300 cursor-pointer">Privacy Policy</span></Link>
            <span>•</span>
            <Link href="/terms"><span className="hover:text-blue-300 cursor-pointer">Terms of Use</span></Link>
            <span>•</span>
            <Link href="/admin-login"><span className="hover:text-blue-300 cursor-pointer">Staff / Admin Login</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
