import { initials, SafeImage } from "./SafeImage";
import {
  BookOpenCheck, Calculator, ClipboardCheck, Languages, Layers, Rocket, type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, type Achiever, type Program } from "@/data/ace";
import { AceWord } from "./AceWord";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-border">{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: ReactNode; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <div className="mb-3"><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary text-center">{title}</h2>
      {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
    </div>
  );
}

const icons: Record<string, LucideIcon> = {
  bridge: Layers, foundation: Rocket, board: BookOpenCheck, tests: ClipboardCheck, math: Calculator, language: Languages,
};

export function ProgramCard({ program }: { program: Program; index?: number }) {
  const Icon = icons[program.id] ?? Layers;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border-2 border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#fdb435] hover:shadow-lift">
      <h3 className="flex items-center gap-2.5 rounded-xl bg-[#2a2273] px-4 py-2.5 font-display text-xl font-bold text-[#fdb435] shadow-xs">
        <Icon className="size-5 shrink-0 text-[#fdb435]" aria-hidden />
        <span>{program.name}</span>
      </h3>
      <p className="mt-3 flex-1 text-sm text-slate-700">{program.summary}</p>
      {program.highlight && (
        <p className="mt-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">{program.highlight}</p>
      )}
    </article>
  );
}

export function AchieverCard({ a }: { a: Achiever }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border-2 border-slate-200/80 bg-white shadow-card transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#fdb435] hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden bg-sky">
        <SafeImage
          src={a.photo}
          alt={`Photo of ${a.name}`}
          loading="lazy"
          width={400}
          height={500}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          fallback={
            <div role="img" aria-label={`Photo of ${a.name}`} className="flex h-full w-full items-center justify-center bg-navy-pattern">
              <span className="font-display text-5xl font-bold text-gold">{initials(a.name)}</span>
            </div>
          }
        />
        <div className="absolute right-3 top-3 rounded-xl bg-gold px-3 py-2 text-center font-display leading-none text-gold-foreground shadow-card">
          <span className="block text-lg font-bold">{a.score}</span>
          {a.scoreSub && <span className="block text-xs font-semibold">{a.scoreSub}</span>}
        </div>
      </div>
      <figcaption className="p-4">
        <p className="rounded-xl bg-[#2a2273] px-3 py-1.5 font-display font-bold text-[#fdb435] text-center shadow-xs">{a.name}</p>
        <p className="mt-2 text-sm text-slate-600 text-center font-medium">{a.institution ?? a.tag}</p>
      </figcaption>
    </figure>
  );
}

export function Faq() {
  return (
    <Accordion type="single" collapsible className="divide-y rounded-2xl border bg-card px-6 shadow-card">
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`f${i}`} className="border-0">
          <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Placeholder({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-slate-200/80 bg-white p-8 text-center shadow-card transition-all duration-300 hover:scale-[1.02] hover:border-[#fdb435] hover:shadow-lift">
      <p className="text-xs font-bold uppercase tracking-widest text-sky-border">Content coming soon</p>
      <h3 className="mt-3 inline-block rounded-xl bg-[#2a2273] px-5 py-2 font-display text-2xl font-bold text-[#fdb435]">{title}</h3>
      <p className="mx-auto mt-3 max-w-lg text-sm text-slate-700">{children}</p>
    </div>
  );
}
