import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ace-logo.png.asset.json";
import { contact } from "@/data/ace";

const nav = [
  { to: "/admissions", label: "Admissions & Achievers" },
  { to: "/programs", label: "Programs" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-ace flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/admissions" className="shrink-0" aria-label="ACE – Education Redefined, home">
          <img src={logo.url} alt="ACE – Education Redefined" width={700} height={250} className="h-11 w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="size-4" aria-hidden /> {contact.phoneDisplay}
          </a>
          <a href="#enquire" className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-card">
            Enquire now
          </a>
        </div>
        <button
          className="rounded-lg p-2 text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t bg-background md:hidden">
          <div className="container-ace flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold" activeProps={{ className: "bg-secondary text-primary" }}>
                {n.label}
              </Link>
            ))}
            <a href={contact.phoneHref} className="px-3 py-3 font-semibold text-primary">Call {contact.phoneDisplay}</a>
            <a href="#enquire" onClick={() => setOpen(false)} className="mt-1 rounded-full bg-gold px-5 py-3 text-center font-bold text-gold-foreground">Enquire now</a>
          </div>
        </nav>
      )}
    </header>
  );
}
