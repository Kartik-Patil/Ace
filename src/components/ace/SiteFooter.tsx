import { Link } from "@tanstack/react-router";
import { Globe, Instagram, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/ace";
import { LogoFallback, SafeImage } from "./SafeImage";
import { AceWord } from "./AceWord";

export function SiteFooter() {
  return (
    <footer className="bg-navy-pattern text-navy-foreground">
      <div className="container-ace grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/about" className="inline-block rounded-xl bg-card p-3 shadow-sm" aria-label="ACE – Education Redefined">
            <SafeImage src="/images/ace-logo.png" alt="ACE – Education Redefined" className="h-10 w-auto" loading="lazy" fallback={<LogoFallback />} />
          </Link>
          <p className="mt-4 max-w-sm font-display text-xl sm:text-2xl font-medium text-white/95">{contact.tagline}</p>

          {/* 3 Contact Buttons below logo */}
          <div className="mt-6 flex flex-col gap-2.5 max-w-sm">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 rounded-2xl bg-white p-3 shadow-xs border border-white/20 transition-all duration-300 hover:shadow-md hover:border-emerald-500 hover:-translate-y-0.5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white shadow-xs">
                <Phone className="size-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-500">WhatsApp Desk</span>
                <span className="block font-bold text-slate-900 text-sm">{contact.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={contact.phoneHref}
              className="flex items-center gap-3.5 rounded-2xl bg-white p-3 shadow-xs border border-white/20 transition-all duration-300 hover:shadow-md hover:border-gold hover:-translate-y-0.5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gold text-gold-foreground shadow-xs">
                <Phone className="size-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-500">Direct Call</span>
                <span className="block font-bold text-slate-900 text-sm">{contact.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 rounded-2xl bg-white p-3 shadow-xs border border-white/20 transition-all duration-300 hover:shadow-md hover:border-primary hover:-translate-y-0.5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-navy text-white shadow-xs">
                <MapPin className="size-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-500">Lakeside Commercial Complex</span>
                <span className="block font-bold text-slate-900 text-xs truncate">2nd Floor, Opp. Tolankere, Hubballi</span>
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-gold">Courses</Link></li>
            <li><Link to="/events" className="hover:text-gold">Events</Link></li>
            <li><Link to="/results" className="hover:text-gold">Results</Link></li>
            <li><Link to="/career" className="hover:text-gold">Careers</Link></li>
            <li><Link to="/partner" className="hover:text-gold">Partner with Us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Reach us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /><a href={contact.mapsHref} target="_blank" rel="noreferrer" className="hover:text-gold">{contact.addressLines.join(" ")}</a></li>
            <li className="flex gap-2"><Phone className="size-4" aria-hidden /><a href={contact.phoneHref} className="hover:text-gold">{contact.phoneDisplay}</a></li>
            <li className="flex gap-2"><Globe className="size-4" aria-hidden /><a href={contact.websiteHref} target="_blank" rel="noreferrer" className="hover:text-gold">{contact.website}</a></li>
            <li className="flex gap-2"><Instagram className="size-4" aria-hidden /><a href={contact.instagramHref} target="_blank" rel="noreferrer" className="hover:text-gold">{contact.instagram}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} JETMAC EDU SERVICES PVT LTD.
      </div>
    </footer>
  );
}
