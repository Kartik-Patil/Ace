import type { ReactNode } from "react";
import { MapPin, Phone } from "lucide-react";
import { contact } from "@/data/ace";
import { EnquiryForm } from "./EnquiryForm";
import { Eyebrow } from "./blocks";
import { AceWord } from "./AceWord";

export function ContactSection({ title }: { title?: ReactNode }) {
  const displayTitle = title ?? <>Begin your <AceWord /> journey</>;

  return (
    <section id="enquire" className="scroll-mt-24 bg-secondary py-20">
      <div className="container-ace grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>Admission enquiry · {contact.admissionYear}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">{displayTitle}</h2>
          <p className="mt-3 text-muted-foreground">Share a few details, or reach us directly. We teach Classes VIII, IX & X across ICSE, CBSE and State Board.</p>
          <div className="mt-8 space-y-4">
            <a href={contact.phoneHref} className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-card transition hover:shadow-lift">
              <span className="grid size-11 place-items-center rounded-xl bg-gold text-gold-foreground"><Phone className="size-5" aria-hidden /></span>
              <span><span className="block text-xs text-muted-foreground">Call us</span><span className="font-bold text-primary">{contact.phoneDisplay}</span></span>
            </a>
            <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-card transition hover:shadow-lift">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><MapPin className="size-5" aria-hidden /></span>
              <span className="text-sm font-semibold text-primary">{contact.addressLines.join(" ")}</span>
            </a>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
