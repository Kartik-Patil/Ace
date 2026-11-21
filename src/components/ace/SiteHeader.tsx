import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useState, useRef, useEffect, type ReactNode } from "react";
import { contact } from "@/data/ace";
import { LogoFallback, SafeImage } from "./SafeImage";

interface NavItem {
  to: string;
  label: ReactNode;
  enabled?: boolean;
}

interface CourseOption {
  name: string;
  to?: string;
  enabled: boolean;
  badge?: string;
}

const courseOptions: CourseOption[] = [
  { name: "Foundation", to: "/courses", enabled: true },
  { name: "IIT, JEE", enabled: false },
  { name: "NEET", enabled: false },
  { name: "KCET", enabled: false },
  { name: "Longterm", enabled: false },
];

const navBefore: NavItem[] = [
  { to: "/about", label: "About Us" },
];

const navAfter: NavItem[] = [
  {
    to: "/events",
    label: "Events",
    enabled: false,
  },
  { to: "/results", label: "Results" },
  { to: "/partner", label: "Partner with Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const coursesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const isCoursesActive =
    location.pathname === "/courses" ||
    location.pathname === "/stem-foundation" ||
    location.pathname === "/board-prep" ||
    location.pathname === "/language-assistance";

  // Auto-close dropdowns when route changes
  useEffect(() => {
    setCoursesOpen(false);
    setOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCoursesOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCoursesMouseEnter = () => {
    if (coursesTimeoutRef.current) clearTimeout(coursesTimeoutRef.current);
    setCoursesOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    coursesTimeoutRef.current = setTimeout(() => {
      setCoursesOpen(false);
    }, 180);
  };

  const handleCoursesToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setCoursesOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 xl:h-20 max-w-[90rem] items-center justify-between px-3 sm:px-6 lg:px-8 gap-2 xl:gap-4">
        {/* Logo */}
        <Link to="/about" className="shrink-0" aria-label="ACE – Education Redefined, home">
          <SafeImage
            src="/images/ace-logo.png"
            alt="ACE – Education Redefined"
            width={700}
            height={250}
            className="h-11 sm:h-12 xl:h-14 w-auto object-contain"
            fallback={<LogoFallback />}
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          {/* About Us */}
          {navBefore.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap rounded-full px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-muted-foreground transition-colors hover:text-primary hover:bg-secondary/60"
              activeProps={{ className: "bg-secondary text-primary font-bold shadow-2xs" }}
            >
              {n.label}
            </Link>
          ))}

          {/* Courses Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleCoursesMouseEnter}
            onMouseLeave={handleCoursesMouseLeave}
          >
            <button
              type="button"
              onClick={handleCoursesToggle}
              aria-expanded={coursesOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold transition-all hover:text-primary hover:bg-secondary/60 cursor-pointer ${
                isCoursesActive || coursesOpen
                  ? "bg-secondary text-primary font-bold shadow-2xs"
                  : "text-muted-foreground"
              }`}
            >
              <span>Courses</span>
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  coursesOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                }`}
              />
            </button>

            {/* Floating Dropdown Card */}
            {coursesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                <div className="w-64 rounded-2xl border border-slate-200/90 bg-white p-2 shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground border-b border-slate-100">
                    Courses &amp; Programs
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5">
                    {courseOptions.map((item) => {
                      if (item.enabled && item.to) {
                        const isCurrent = location.pathname === item.to;
                        return (
                          <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setCoursesOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
                              isCurrent
                                ? "bg-slate-100 text-primary font-bold"
                                : "text-slate-700 hover:bg-slate-100/80 hover:text-primary"
                            }`}
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="size-3.5 text-slate-400" />
                          </Link>
                        );
                      }
                      return (
                        <div
                          key={item.name}
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-600 bg-slate-50/50 select-none cursor-default"
                        >
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Remaining Nav Items */}
          {navAfter.map((n) => {
            if (n.enabled === false) {
              return (
                <span
                  key={typeof n.label === "string" ? n.label : (n.to ?? "nav-item")}
                  className="whitespace-nowrap rounded-full px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-muted-foreground/70 select-none cursor-default"
                >
                  {n.label}
                </span>
              );
            }
            return (
              <Link
                key={n.to}
                to={n.to!}
                className="whitespace-nowrap rounded-full px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-muted-foreground transition-colors hover:text-primary hover:bg-secondary/60"
                activeProps={{ className: "bg-secondary text-primary font-bold shadow-2xs" }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="rounded-lg p-2 text-primary lg:hidden cursor-pointer"
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
            {/* About Us */}
            {navBefore.map((n) => (
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

            {/* Courses Accordion on Mobile */}
            <div className="rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileCoursesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-semibold text-sm transition-colors hover:bg-secondary text-left cursor-pointer"
              >
                <span className={isCoursesActive ? "font-bold text-primary" : ""}>Courses</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    mobileCoursesOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>

              {mobileCoursesOpen && (
                <div className="pl-3 pr-2 py-1.5 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100 animate-in fade-in slide-in-from-top-1 duration-150">
                  {courseOptions.map((item) => {
                    if (item.enabled && item.to) {
                      const isCurrent = location.pathname === item.to;
                      return (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => {
                            setOpen(false);
                            setCoursesOpen(false);
                          }}
                          className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition ${
                            isCurrent
                              ? "bg-white text-primary font-bold shadow-2xs"
                              : "text-slate-700 hover:text-primary hover:bg-white"
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronRight className="size-3.5 text-slate-400" />
                        </Link>
                      );
                    }
                    return (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-slate-600 bg-slate-50/50 select-none cursor-default"
                      >
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Remaining Nav Items */}
            {navAfter.map((n) => {
              if (n.enabled === false) {
                return (
                  <span
                    key={typeof n.label === "string" ? n.label : (n.to ?? "nav-item")}
                    className="block rounded-lg px-3 py-2.5 font-semibold text-sm text-muted-foreground/70 select-none cursor-default"
                  >
                    {n.label}
                  </span>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to!}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 font-semibold text-sm transition-colors hover:bg-secondary"
                  activeProps={{ className: "bg-secondary text-primary font-bold" }}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
