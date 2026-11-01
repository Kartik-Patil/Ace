import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { contact } from "@/data/ace";
import { LogoFallback, SafeImage } from "./SafeImage";

const nav = [
  { to: "/home", label: "ACE Experience" },
  { to: "/admissions", label: "Join ACE" },
  { to: "/courses", label: "Explore Programs" },
  { to: "/results", label: "Our Achievers" },
  { to: "/career", label: "Career" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-ace flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/home" className="shrink-0" aria-label="ACE – Education Redefined, home">
          <SafeImage
            src="/images/ace-logo.png"
            alt="ACE – Education Redefined"
            width={700}
            height={250}
            className="h-[66px] w-auto object-contain"
            fallback={<LogoFallback />}
          />
        </Link>

        {/* Desktop nav — same row as logo */}
        <nav aria-label="Main" className="hidden flex-1 items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href={contact.phoneHref} className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary">
            <Phone className="size-4" aria-hidden /> {contact.phoneDisplay}
          </a>
          <a
            href="#enquire"
            className="whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-card"
          >
            Enquire now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav aria-label="Mobile" className="border-t bg-background lg:hidden">
          <div className="container-ace flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={contact.phoneHref} className="px-3 py-3 font-semibold text-primary">
              Call {contact.phoneDisplay}
            </a>
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-gold px-5 py-3 text-center font-bold text-gold-foreground"
            >
              Enquire now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
