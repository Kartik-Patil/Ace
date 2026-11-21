import type { ReactNode } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/ace";
import { Eyebrow } from "./blocks";
import { AceWord } from "./AceWord";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { cn } from "@/lib/utils";

export function ContactSection({
  title,
  variant = "yellow",
  className,
}: {
  title?: ReactNode;
  variant?: "yellow" | "white";
  className?: string;
}) {
  const displayTitle = title ?? <>Begin your <AceWord /> journey</>;
  const { openModal } = useEnquiryModal();
  const isWhite = variant === "white";

  return (
    <section
      id="enquire"
      className={cn(
        "scroll-mt-24 py-14 sm:py-20",
        isWhite
          ? "bg-white border-t border-slate-200/80"
          : "bg-gradient-to-b from-[#fefbf0] via-[#fef7e6] to-[#fcf2d4] border-t border-amber-200/70",
        className
      )}
    >
      <div className="container-ace max-w-4xl mx-auto text-center">
        <div>
          <Eyebrow>Admission enquiry · {contact.admissionYear}</Eyebrow>
          <h2 className="mt-2 text-3xl font-extrabold text-primary md:text-5xl font-display">{displayTitle}</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Have questions about syllabus, batches or our classroom programs? Reach out to our admissions desk or submit an enquiry.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm sm:text-base font-black text-gold-foreground shadow-lg border border-gold/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-105 active:scale-95 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex items-center gap-3.5 rounded-2xl p-4 shadow-2xs transition-all duration-300 hover:shadow-md hover:border-emerald-500 hover:-translate-y-0.5",
              isWhite
                ? "bg-white border border-slate-200"
                : "bg-white/95 border border-amber-200/70"
            )}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-emerald-600 text-white shrink-0 shadow-sm">
              <Phone className="size-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground font-medium">WhatsApp Desk</span>
              <span className="font-bold text-primary text-sm sm:text-base truncate block">{contact.phoneDisplay}</span>
            </span>
          </a>

          <a
            href={contact.phoneHref}
            className={cn(
              "flex items-center gap-3.5 rounded-2xl p-4 shadow-2xs transition-all duration-300 hover:shadow-md hover:border-gold hover:-translate-y-0.5",
              isWhite
                ? "bg-white border border-slate-200"
                : "bg-white/95 border border-amber-200/70"
            )}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-gold text-gold-foreground shrink-0 shadow-sm">
              <Phone className="size-5" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground font-medium">Direct Call</span>
              <span className="font-bold text-primary text-sm sm:text-base truncate block">{contact.phoneDisplay}</span>
            </span>
          </a>

          <a
            href={contact.mapsHref}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex items-center gap-3.5 rounded-2xl p-4 shadow-2xs transition-all duration-300 hover:shadow-md hover:border-primary hover:-translate-y-0.5",
              isWhite
                ? "bg-white border border-slate-200"
                : "bg-white/95 border border-amber-200/70"
            )}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <MapPin className="size-5" aria-hidden />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary leading-snug line-clamp-2">
              {contact.addressLines.join(" ")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
