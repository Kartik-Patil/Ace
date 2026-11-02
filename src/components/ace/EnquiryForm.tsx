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
  "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-sky-border focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive disabled:opacity-60 disabled:cursor-not-allowed";

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
      setEmailError("Please verify your email with OTP before submitting.");
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
    <div className="rounded-3xl border-2 border-sky-border/40 bg-card p-6 shadow-card md:p-8">
      {/* ── Form Header ── */}
      <div className="border-b pb-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky px-3 py-1 text-xs font-bold text-primary">
            <ShieldCheck className="size-4 text-sky-border" /> Official Enquiry Form
          </span>
          <span className="text-xs font-semibold text-muted-foreground">Academic Year {contact.admissionYear}</span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-primary">Begin Your Admission Process</h3>
        <p className="text-xs text-muted-foreground">
          Step 1: Verify your email with a 6-digit OTP to unlock the admission enquiry details.
        </p>
      </div>

      {/* ── STEP 1: Email & OTP Verification ── */}
      <div className="mt-6 rounded-2xl border-2 border-dashed border-sky-border/50 bg-sky/40 p-5">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-primary flex items-center gap-2">
            <Mail className="size-4 text-sky-border" />
            <span>Parent / Student Email Address</span>
            <span className="text-destructive">*</span>
          </label>
          {isVerified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
              <CheckCircle2 className="size-3.5" /> Verified
            </span>
          )}
        </div>

        {!isVerified ? (
          <div className="mt-3 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                disabled={otpSent}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address (e.g. name@example.com)"
                className={fieldClass}
              />
              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isSending}
                  className="mt-1.5 whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
                >
                  {isSending ? "Sending OTP..." : "Send OTP"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setOtpSent(false);
                    setEnteredOtp("");
                    setOtpError(null);
                  }}
                  className="mt-1.5 whitespace-nowrap rounded-xl border border-input bg-card px-4 py-3 text-xs font-semibold text-muted-foreground hover:bg-secondary"
                >
                  Change Email
                </button>
              )}
            </div>
            {emailError && <p className="text-xs font-medium text-destructive">{emailError}</p>}

            {/* OTP Entry Box */}
            {otpSent && (
              <div className="rounded-xl border border-sky-border/50 bg-card p-4 transition-all">
                {/* Dispatch Status Banner */}
                <div className="flex items-start gap-3 rounded-lg bg-emerald-50 p-3.5 text-xs text-emerald-900 border border-emerald-200">
                  <Send className="size-4 shrink-0 mt-0.5 text-emerald-600" />
                  <div>
                    <p className="font-bold">Verification code dispatched to your email!</p>
                    <p className="mt-0.5 leading-relaxed">
                      We have sent a 6-digit verification code to <strong>{email}</strong>. Please check your inbox (including Promotions or Spam) and enter the code below to proceed.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                      Enter 6-Digit Verification Code
                    </label>
                    <InputOTP maxLength={6} value={enteredOtp} onChange={setEnteredOtp}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:-translate-y-0.5 shadow-sm"
                    >
                      <CheckCircle2 className="size-4" /> Verify Code
                    </button>
                    {resendTimer > 0 ? (
                      <span className="text-xs font-medium text-muted-foreground">
                        Resend in {resendTimer}s
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary underline"
                      >
                        <RefreshCw className="size-3" /> Resend Code
                      </button>
                    )}
                  </div>
                </div>

                {otpError && (
                  <p className="mt-2 text-xs font-medium text-destructive flex items-center gap-1">
                    <AlertCircle className="size-3.5" /> {otpError}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-2 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 border border-emerald-200 text-sm">
            <span className="font-semibold text-emerald-900">
              Verified: <span className="font-mono">{email}</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setIsVerified(false);
                setOtpSent(false);
                setEnteredOtp("");
              }}
              className="text-xs font-bold text-emerald-800 underline hover:text-emerald-900"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* ── STEP 2: Main Form Details (Locked until OTP Verified) ── */}
      <form onSubmit={onSubmit} noValidate className="mt-6">
        <div className="relative">
          {/* Overlay lock when email is not verified */}
          {!isVerified && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-card/85 backdrop-blur-[2px] p-6 text-center border-2 border-dashed border-muted">
              <div className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <Lock className="size-6 text-sky-border" />
              </div>
              <h4 className="mt-3 font-display text-base font-bold text-primary">
                Verify Email to Unlock Admission Form
              </h4>
              <p className="mt-1 max-w-sm text-xs text-muted-foreground">
                Please enter your email address above and verify the 6-digit OTP code. All subsequent admission details will unlock immediately.
              </p>
            </div>
          )}

          <div className={`grid gap-4 sm:grid-cols-2 ${!isVerified ? "pointer-events-none opacity-40" : ""}`}>
            <label className="text-sm font-semibold text-primary">
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

            <label className="text-sm font-semibold text-primary">
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

            <label className="text-sm font-semibold text-primary sm:col-span-2">
              Primary Mobile Number (WhatsApp enabled) <span className="text-destructive">*</span>
              <div className="relative mt-1.5">
                <span className="absolute left-4 top-3.5 text-sm font-bold text-muted-foreground">
                  +91
                </span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="98765 43210"
                  className={`${fieldClass} pl-14 mt-0`}
                  {...aria("phone")}
                />
              </div>
              {err("phone")}
            </label>

            <label className="text-sm font-semibold text-primary">
              Current / Target Class <span className="text-destructive">*</span>
              <select name="studentClass" defaultValue="" className={fieldClass} {...aria("studentClass")}>
                <option value="" disabled>
                  Select class
                </option>
                <option value="Class VII">Class VII (7th)</option>
                <option value="Class VIII">Class VIII (8th)</option>
                <option value="Class IX">Class IX (9th)</option>
                <option value="Class X">Class X (10th)</option>
              </select>
              {err("studentClass")}
            </label>

            <label className="text-sm font-semibold text-primary">
              School Board <span className="text-destructive">*</span>
              <select name="board" defaultValue="" className={fieldClass} {...aria("board")}>
                <option value="" disabled>
                  Select board
                </option>
                {boards.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
              {err("board")}
            </label>

            <label className="text-sm font-semibold text-primary sm:col-span-2">
              Program of Interest <span className="text-destructive">*</span>
              <select
                name="program"
                defaultValue={defaultProgram}
                className={fieldClass}
                {...aria("program")}
              >
                <option value="" disabled>
                  Select program
                </option>
                {programs.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} {p.highlight ? `(${p.highlight})` : ""}
                  </option>
                ))}
              </select>
              {err("program")}
            </label>

            <label className="text-sm font-semibold text-primary sm:col-span-2">
              Specific Query or Notes (Optional)
              <textarea
                name="notes"
                rows={2}
                placeholder="Mention any specific learning requirements or morning batch preference..."
                className={fieldClass}
              />
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileCheck2 className="size-4 text-emerald-600 shrink-0" />
            <span>Enquiry is directly submitted to <AceWord /> admissions desk.</span>
          </div>

          <button
            type="submit"
            disabled={!isVerified || isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 font-bold text-gold-foreground transition hover:-translate-y-0.5 hover:shadow-card disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              "Submitting Enquiry..."
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
