import { initials, SafeImage } from "./SafeImage";
import {
  BookOpenCheck, Calculator, ClipboardCheck, Languages, Layers, Rocket, type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, type Achiever, type Program } from "@/data/ace";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-border">{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
    </div>
  );
}

const icons: Record<string, LucideIcon> = {
  bridge: Layers, foundation: Rocket, board: BookOpenCheck, tests: ClipboardCheck, math: Calculator, language: Languages,
};

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  const Icon = icons[program.id] ?? Layers;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border-2 border-sky-border/40 bg-sky p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-border hover:shadow-lift">
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
          <Icon className="size-6" aria-hidden />
        </span>
        <span className="font-display text-3xl text-sky-border/30">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-primary">{program.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{program.summary}</p>
      {program.highlight && (
        <p className="mt-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">{program.highlight}</p>
      )}
    </article>
  );
}

export function AchieverCard({ a }: { a: Achiever }) {
  return (
    <figure className="group overflow-hidden rounded-2xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-lift">
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
        <p className="font-bold text-primary">{a.name}</p>
        <p className="text-sm text-muted-foreground">{a.institution ?? a.tag}</p>
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
    <div className="rounded-2xl border-2 border-dashed border-sky-border/40 bg-sky p-8 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-sky-border">Content coming soon</p>
      <h3 className="mt-2 text-2xl font-semibold text-primary">{title}</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
