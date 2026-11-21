import { useState, useEffect, type FormEvent } from "react";
import {
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Lock,
  ArrowRight,
  RefreshCw,
  Send,
  FileCheck2,
  AlertCircle,
  Printer,
} from "lucide-react";
import { boards, classes, contact, programs } from "@/data/ace";
import { enquirySchema } from "@/lib/enquiry";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { sendOtpServerFn, sendEnquiryServerFn } from "@/lib/mail";
import { AceWord } from "./AceWord";

type Errors = Partial<Record<string, string>>;

interface SubmissionDetails {
  refId: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  studentClass: string;
  board: string;
  program: string;
  submittedAt: string;
}

const fieldClass =
  "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 aria-[invalid=true]:border-destructive disabled:opacity-60 disabled:cursor-not-allowed";

export function EnquiryForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  // Email & OTP States
  const [email, setEmail] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [resendTimer, setResendTimer] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isRealDelivery, setIsRealDelivery] = useState(false);

  // Form Submission States
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<SubmissionDetails | null>(null);

  // Countdown for OTP resend
  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Generate and send 6-digit OTP
  async function handleSendOtp() {
    setEmailError(null);
    setOtpError(null);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const cleanEmail = emailInput.trim();
    setIsSending(true);

    try {
      const code = String(Math.floor(100000 + Math.random() * 900000));
      setGeneratedOtp(code);
      setEmail(cleanEmail);

      const res = await sendOtpServerFn({ data: { email: cleanEmail, otp: code } });
      if (res && "error" in res && res.error) {
        setEmailError(res.error as string);
        return;
      }
      setOtpSent(true);
      setResendTimer(45);
      setIsRealDelivery(Boolean(res?.delivered));
    } catch {
      setEmailError("Unable to connect to email service. Please try again or contact the admissions desk.");
    } finally {
      setIsSending(false);
    }
  }

  // Verify entered OTP
  function handleVerifyOtp() {
    setOtpError(null);
    if (!enteredOtp || enteredOtp.length !== 6) {
      setOtpError("Please enter the complete 6-digit OTP");
      return;
    }

    if (enteredOtp === generatedOtp) {
      setIsVerified(true);
      setOtpError(null);
    } else {
      setOtpError("Incorrect OTP code. Please enter the code dispatched to your email.");
    }
  }

  // Handle final form submit
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isVerified) {
      if (!otpSent) {
        handleSendOtp();
      }
      setEmailError("Please verify your email with the 6-digit OTP code to submit.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData);
    const dataWithEmail = { ...rawData, email };

    const res = enquirySchema.safeParse(dataWithEmail);
    if (!res.success) {
      const errs: Errors = {};
      for (const issue of res.error.issues) {
        errs[String(issue.path[0])] ??= issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const refId = `ACE-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const result: SubmissionDetails = {
        refId,
        studentName: res.data.studentName,
        parentName: res.data.parentName,
        email,
        phone: res.data.phone,
        studentClass: res.data.studentClass,
        board: res.data.board,
        program: res.data.program,
        submittedAt: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Persist legitimate submission to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem("ace_enquiries") || "[]");
        existing.push(result);
        localStorage.setItem("ace_enquiries", JSON.stringify(existing));
      } catch {
        // storage fallback
      }

      // Send official email notifications via Gmail / SMTP to office & parent
      await sendEnquiryServerFn({ data: result });

      setSubmission(result);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── Success State ──
  if (submission) {
    return (
      <div role="status" className="rounded-3xl border-2 border-emerald-500/30 bg-card p-8 text-center shadow-lift">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="size-10" aria-hidden />
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
          Official Admission Enquiry Registered
        </span>

        <h3 className="mt-3 font-display text-3xl font-bold text-primary">
          Enquiry Submitted Successfully!
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Thank you, <strong>{submission.parentName}</strong>. Your enquiry for{" "}
          <strong>{submission.studentName}</strong> has been registered with the admissions desk.
        </p>

        {/* Official Reference Box */}
        <div className="mt-6 rounded-2xl border bg-secondary/50 p-5 text-left text-sm space-y-2">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Reference ID</span>
            <span className="font-mono font-bold text-primary">{submission.refId}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Student Name</span>
            <span className="font-semibold text-primary">{submission.studentName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Verified Email</span>
            <span className="font-semibold text-primary">{submission.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Contact Mobile</span>
            <span className="font-semibold text-primary">+91 {submission.phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Class &amp; Board</span>
            <span className="font-semibold text-primary">
              {submission.studentClass} · {submission.board}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Program</span>
            <span className="font-semibold text-primary">{submission.program}</span>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Our admissions counsellor will contact you within 24 hours. A copy of this enquiry has also been dispatched to{" "}
          <span className="font-semibold text-primary">{submission.email}</span>.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-secondary px-5 py-2.5 text-xs font-bold text-primary transition hover:border-primary"
          >
            <Printer className="size-3.5" /> Print Receipt
          </button>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground transition hover:opacity-95"
          >
            <Phone className="size-3.5" aria-hidden /> Call Admissions ({contact.phoneDisplay})
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-xs font-bold text-primary transition hover:bg-secondary"
          >
            WhatsApp Admissions
          </a>
        </div>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] && (
      <p id={`${k}-err`} className="mt-1 text-xs font-medium text-destructive">
        {errors[k]}
      </p>
    );

  const aria = (k: string) => ({
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-err` : undefined,
  });

  return (
    <div className="rounded-3xl border-2 border-amber-300/80 bg-white p-5 sm:p-6 shadow-sm">
      {/* ── Form Header ── */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
        <div className="flex items-center gap-2">


        </div>
        {isVerified && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
            <CheckCircle2 className="size-3" /> Email Verified
          </span>
        )}
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-4 space-y-3.5">
        {/* Row 1: Student Name & Parent Name */}
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-xs sm:text-sm font-semibold text-primary">
            Student Full Name <span className="text-destructive">*</span>
            <input
              name="studentName"
              autoComplete="off"
              placeholder="e.g. Rahul Patil"
              className={fieldClass}
              {...aria("studentName")}
            />
            {err("studentName")}
          </label>

          <label className="text-xs sm:text-sm font-semibold text-primary">
            Parent / Guardian Name <span className="text-destructive">*</span>
            <input
              name="parentName"
              autoComplete="name"
              placeholder="e.g. Suresh Patil"
              className={fieldClass}
              {...aria("parentName")}
            />
            {err("parentName")}
          </label>
        </div>

        {/* Row 2: Mobile Number & Email Address */}
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-xs sm:text-sm font-semibold text-primary">
            Mobile Number (WhatsApp) <span className="text-destructive">*</span>
            <div className="relative mt-1">
              <span className="absolute left-3.5 top-2 sm:top-2.5 text-xs sm:text-sm font-bold text-muted-foreground">
                +91
              </span>
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="98765 43210"
                className={`${fieldClass} pl-12 mt-0`}
                {...aria("phone")}
              />
            </div>
            {err("phone")}
          </label>

          <div>
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-primary">
              <label htmlFor="email-input">
                Email Address <span className="text-destructive">*</span>
              </label>
              {isVerified ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsVerified(false);
                    setOtpSent(false);
                    setEnteredOtp("");
                  }}
                  className="text-xs text-muted-foreground hover:text-primary underline font-normal"
                >
                  Change
                </button>
              ) : null}
            </div>
            <div className="relative mt-1 flex gap-2">
              <input
                id="email-input"
                type="email"
                disabled={isVerified}
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                  setEmail(e.target.value);
                }}
                placeholder="name@example.com"
                className={`${fieldClass} mt-0 flex-1`}
              />
              {!isVerified && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isSending}
                  className="whitespace-nowrap rounded-xl bg-navy px-3.5 py-2 text-xs font-bold text-white transition hover:bg-primary disabled:opacity-50 shrink-0"
                >
                  {isSending ? "Sending..." : otpSent ? "Resend" : "Send OTP"}
                </button>
              )}
            </div>
            {emailError && <p className="mt-1 text-xs font-medium text-destructive">{emailError}</p>}
          </div>
        </div>

        {/* Inline OTP Verification Strip if OTP Sent */}
        {otpSent && !isVerified && (
          <div className="rounded-xl border border-amber-300 bg-amber-50/90 p-3 text-xs animate-in fade-in slide-in-from-top-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 text-amber-950 font-medium">
                <Send className="size-3.5 text-amber-700 shrink-0" />
                <span>
                  Code sent to <strong>{email}</strong>. Enter 6-digit OTP:
                </span>
              </div>
              <div className="flex items-center gap-2">
                <InputOTP maxLength={6} value={enteredOtp} onChange={setEnteredOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="size-7 text-xs bg-white font-mono" />
                    <InputOTPSlot index={1} className="size-7 text-xs bg-white font-mono" />
                    <InputOTPSlot index={2} className="size-7 text-xs bg-white font-mono" />
                    <InputOTPSlot index={3} className="size-7 text-xs bg-white font-mono" />
                    <InputOTPSlot index={4} className="size-7 text-xs bg-white font-mono" />
                    <InputOTPSlot index={5} className="size-7 text-xs bg-white font-mono" />
                  </InputOTPGroup>
                </InputOTP>
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="rounded-lg bg-gold px-3 py-1.5 text-xs font-bold text-gold-foreground transition hover:opacity-90 shadow-2xs"
                >
                  Verify
                </button>
              </div>
            </div>
            {otpError && (
              <p className="mt-1 text-xs font-medium text-destructive flex items-center gap-1">
                <AlertCircle className="size-3" /> {otpError}
              </p>
            )}
          </div>
        )}

        {/* Row 3: Class, Board, Program */}
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-xs sm:text-sm font-semibold text-primary">
            Class <span className="text-destructive">*</span>
            <select name="studentClass" defaultValue="" className={fieldClass} {...aria("studentClass")}>
              <option value="" disabled>Select class</option>
              <option value="Class VII">Class VII (7th)</option>
              <option value="Class VIII">Class VIII (8th)</option>
              <option value="Class IX">Class IX (9th)</option>
              <option value="Class X">Class X (10th)</option>
            </select>
            {err("studentClass")}
          </label>

          <label className="text-xs sm:text-sm font-semibold text-primary">
            Board <span className="text-destructive">*</span>
            <select name="board" defaultValue="" className={fieldClass} {...aria("board")}>
              <option value="" disabled>Select board</option>
              {boards.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            {err("board")}
          </label>

          <label className="text-xs sm:text-sm font-semibold text-primary">
            Program <span className="text-destructive">*</span>
            <select name="program" defaultValue={defaultProgram} className={fieldClass} {...aria("program")}>
              <option value="" disabled>Select program</option>
              {programs.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
            {err("program")}
          </label>
        </div>

        {/* Row 4: Optional Notes */}
        <label className="text-xs sm:text-sm font-semibold text-primary block">
          Specific Query / Notes <span className="text-muted-foreground font-normal">(Optional)</span>
          <input
            name="notes"
            placeholder="Any specific learning needs or questions..."
            className={fieldClass}
          />
        </label>

        {/* Submit Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 pt-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">


          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-2.5 text-xs sm:text-sm font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Submit Official Enquiry <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
