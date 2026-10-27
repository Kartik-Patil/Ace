import { CheckCircle2, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { boards, classes, contact, programs } from "@/data/ace";
import { enquirySchema } from "@/lib/enquiry";

type Errors = Partial<Record<string, string>>;

const field = "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-sky-border focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";

export function EnquiryForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = enquirySchema.safeParse(data);
    if (!res.success) {
      const errs: Errors = {};
      for (const issue of res.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setDone(res.data.studentName);
    e.currentTarget.reset();
  }

  if (done) {
    return (
      <div role="status" className="rounded-2xl border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-12 text-success" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold text-primary">Details look good, thank you!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          This is a demo form, so <strong>{done}</strong>'s enquiry has not been sent to ACE yet. Please call or WhatsApp us to complete your enquiry.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={contact.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"><Phone className="size-4" aria-hidden />Call {contact.phoneDisplay}</a>
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border-2 border-primary px-5 py-3 text-sm font-bold text-primary">WhatsApp</a>
          <button onClick={() => setDone(null)} className="px-3 text-sm font-semibold text-muted-foreground underline">New enquiry</button>
        </div>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p id={`${k}-err`} className="mt-1 text-xs font-medium text-destructive">{errors[k]}</p>;
  const aria = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl border bg-card p-6 shadow-card sm:grid-cols-2 md:p-8">
      <label className="text-sm font-semibold text-primary">Student name<input name="studentName" autoComplete="off" className={field} {...aria("studentName")} />{err("studentName")}</label>
      <label className="text-sm font-semibold text-primary">Parent name<input name="parentName" autoComplete="name" className={field} {...aria("parentName")} />{err("parentName")}</label>
      <label className="text-sm font-semibold text-primary sm:col-span-2">Phone number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" className={field} {...aria("phone")} />{err("phone")}</label>
      <label className="text-sm font-semibold text-primary">Class
        <select name="studentClass" defaultValue="" className={field} {...aria("studentClass")}>
          <option value="" disabled>Select class</option>
          {classes.map((c) => <option key={c}>{c}</option>)}
        </select>{err("studentClass")}
      </label>
      <label className="text-sm font-semibold text-primary">Board
        <select name="board" defaultValue="" className={field} {...aria("board")}>
          <option value="" disabled>Select board</option>
          {boards.map((b) => <option key={b}>{b}</option>)}
        </select>{err("board")}
      </label>
      <label className="text-sm font-semibold text-primary sm:col-span-2">Program of interest
        <select name="program" defaultValue={defaultProgram} className={field} {...aria("program")}>
          <option value="" disabled>Select program</option>
          {programs.map((p) => <option key={p.id}>{p.name}</option>)}
        </select>{err("program")}
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">Demo form: details are checked here but not sent anywhere yet.</p>
        <button type="submit" className="rounded-full bg-gold px-7 py-3 font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-card">Submit enquiry</button>
      </div>
    </form>
  );
}
