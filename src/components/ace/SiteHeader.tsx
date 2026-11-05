import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { contact } from "@/data/ace";
import { LogoFallback, SafeImage } from "./SafeImage";

interface NavItem {
  to: string;
  label: ReactNode;
}

const nav: NavItem[] = [
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/admissions", label: "Admissions" },
  {
    to: "/events",
    label: (
      <span className="inline-flex items-center gap-1.5">
        Events

      </span>
    ),
  },
  { to: "/results", label: "Results" },
  { to: "/career", label: "Careers" },
  { to: "/partner", label: "Partner with Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 xl:h-20 max-w-[90rem] items-center justify-between px-3 sm:px-6 lg:px-8 gap-2 xl:gap-4">
        {/* Logo */}
        <Link to="/home" className="shrink-0" aria-label="ACE – Education Redefined, home">
          <SafeImage
            src="/images/ace-logo.png"
            alt="ACE – Education Redefined"
            width={700}
            height={250}
            className="h-11 sm:h-12 xl:h-14 w-auto object-contain"
            fallback={<LogoFallback />}
          />
        </Link>

        {/* Desktop nav — strictly in the same line with compressed spacing */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap rounded-full px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold text-muted-foreground transition-colors hover:text-primary hover:bg-secondary/60"
              activeProps={{ className: "bg-secondary text-primary font-bold shadow-2xs" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: WhatsApp + CTA Button */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-primary transition hover:text-emerald-600 hover:bg-secondary/50"
            title={`WhatsApp ${contact.phoneDisplay}`}
          >
            <Phone className="size-3.5 xl:size-4 text-emerald-600" aria-hidden />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
          <a
            href="#enquire"
            className="whitespace-nowrap rounded-full bg-gold px-4 xl:px-5 py-2 text-xs xl:text-sm font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-card"
          >
            Enquire Now
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
        <nav aria-label="Mobile" className="border-t bg-background lg:hidden shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="container-ace flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-semibold text-sm transition-colors hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary font-bold" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 border-t pt-3 flex flex-col gap-2">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 font-semibold text-sm text-primary"
              >
                <Phone className="size-4 text-emerald-600" /> WhatsApp {contact.phoneDisplay}
              </a>
              <a
                href="#enquire"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gold px-5 py-2.5 text-center text-sm font-bold text-gold-foreground shadow-sm"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
