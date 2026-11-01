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
          <div className="inline-block rounded-xl bg-card p-3">
            <SafeImage src="/images/ace-logo.png" alt="ACE – Education Redefined" className="h-10 w-auto" loading="lazy" fallback={<LogoFallback />} />
          </div>
          <p className="mt-4 max-w-sm font-display text-2xl italic">“{contact.tagline}”</p>
          <p className="mt-2 text-sm opacity-75">Programs for Classes VIII, IX & X · ICSE · CBSE · State Board</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/admissions" className="hover:text-gold">Admissions & Achievers</Link></li>
            <li><Link to="/courses" className="hover:text-gold">Programs</Link></li>
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
        © {new Date().getFullYear()} <AceWord dark /> – Education Redefined, Hubballi
      </div>
    </footer>
  );
}
