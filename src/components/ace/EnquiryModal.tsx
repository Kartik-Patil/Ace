import { useState, useEffect, type FormEvent } from "react";
import {
  X,
  CheckCircle2,
  Phone,
  Send,
  AlertCircle,
  Printer,
  ChevronDown,
} from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { contact } from "@/data/ace";
import { enquirySchema } from "@/lib/enquiry";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { sendOtpServerFn, sendEnquiryServerFn } from "@/lib/mail";

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

export function EnquiryModal() {
  const { isOpen, closeModal, defaultProgram } = useEnquiryModal();

  // Email & OTP verification states
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

  // Form submission states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<SubmissionDetails | null>(null);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Resend countdown timer
  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  if (!isOpen) return null;

  // Send 6-digit OTP
  async function handleSendOtp() {
    setEmailError(null);
    setOtpError(null);

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
    } catch {
      setEmailError("Unable to connect to email service. Please try again.");
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
      setOtpError("Incorrect OTP code. Please enter the 6-digit code sent to your email.");
    }
  }

  // Handle Form Submit
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isVerified) {
      if (!otpSent) {
        handleSendOtp();
      }
      setEmailError("Please verify your email with the 6-digit OTP code to submit.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const rawName = String(formData.get("studentName") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const board = String(formData.get("board") || "").trim();
    const studentClass = String(formData.get("studentClass") || "").trim();
    const currentSchool = String(formData.get("currentSchool") || "").trim();

    const dataToValidate = {
      studentName: rawName,
      parentName: rawName,
      email,
      phone,
      studentClass,
      board,
      program: defaultProgram || `${board} Board Prep & Foundation`,
      currentSchool,
      notes: currentSchool ? `Current School: ${currentSchool}` : undefined,
    };

    const res = enquirySchema.safeParse(dataToValidate);
    if (!res.success) {
      const errMap: Record<string, string> = {};
      for (const issue of res.error.issues) {
        errMap[String(issue.path[0])] = issue.message;
      }
      setErrors(errMap);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const refId = `ACE-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const result: SubmissionDetails = {
        refId,
        studentName: res.data.studentName,
        parentName: res.data.studentName,
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

      try {
        const existing = JSON.parse(localStorage.getItem("ace_enquiries") || "[]");
        existing.push(result);
        localStorage.setItem("ace_enquiries", JSON.stringify(existing));
      } catch {
        // storage fallback
      }

      await sendEnquiryServerFn({ data: result });
      setSubmission(result);
    } catch (err) {
      console.error("Enquiry submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setSubmission(null);
    setEmail("");
    setEmailInput("");
    setOtpSent(false);
    setEnteredOtp("");
    setIsVerified(false);
    setErrors({});
    closeModal();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enquire Now Form"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center sm:items-stretch justify-center sm:justify-end p-3 sm:p-6 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="relative w-full max-w-[440px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 my-auto sm:my-0 max-h-[94vh] animate-in slide-in-from-right-6 duration-300">
        {/* ── Top Header Bar (matches reference) ── */}
        <div className="bg-navy px-6 pt-6 pb-5 sm:px-7 sm:pt-7 sm:pb-6 text-white shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              ACE EDUCATION
            </span>
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close form"
              className="size-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-4.5" />
            </button>
          </div>

          <h2 className="mt-2 text-2xl sm:text-[28px] font-bold text-white font-display tracking-tight leading-none">
            Enquire Now
          </h2>
          <p className="mt-1.5 text-xs sm:text-[13px] text-slate-300 font-normal">
            Tell us a little about yourself and we&apos;ll get back to you.
          </p>

          {/* Three progress lines underneath subtitle (from reference) */}
          <div className="mt-4 flex items-center gap-2">
            <span className="h-1 flex-1 rounded-full bg-gold" />
            <span className="h-1 flex-1 rounded-full bg-gold/50" />
            <span className="h-1 flex-1 rounded-full bg-gold/25" />
          </div>
        </div>

        {/* ── Form Content Body ── */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {submission ? (
            /* ── Submission Success Screen ── */
            <div className="text-center py-4 space-y-4 animate-in fade-in">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="size-8" />
              </div>

              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                Official Admission Enquiry Registered
              </span>

              <h3 className="text-2xl font-bold font-display text-primary">
                Enquiry Submitted!
              </h3>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-muted-foreground uppercase">Reference ID</span>
                  <span className="font-mono font-bold text-primary">{submission.refId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-semibold text-primary">{submission.studentName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Verified Email</span>
                  <span className="font-semibold text-primary">{submission.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Mobile</span>
                  <span className="font-semibold text-primary">+91 {submission.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Class &amp; Stream</span>
                  <span className="font-semibold text-primary">
                    {submission.studentClass} · {submission.board}
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Our admissions desk will contact you within 24 hours. A confirmation email has been dispatched to{" "}
                <span className="font-semibold text-primary">{submission.email}</span>.
              </p>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-bold text-primary transition hover:bg-slate-50"
                >
                  <Printer className="size-3.5" /> Print Receipt
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full rounded-xl bg-gold py-2.5 text-xs font-bold text-gold-foreground transition hover:brightness-105"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* ── Reference Form Inputs ── */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Field 1: Your Name */}
              <div>
                <input
                  name="studentName"
                  placeholder="Your Name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                {errors["studentName"] && (
                  <p className="mt-1 text-xs font-medium text-destructive">{errors["studentName"]}</p>
                )}
              </div>

              {/* Field 2: Email Address + Send OTP (Email OTP verification as requested) */}
              <div className="space-y-1">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    value={emailInput}
                    disabled={isVerified}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                      setEmail(e.target.value);
                    }}
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-4 pr-24 py-3 text-sm placeholder:text-slate-400 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 disabled:bg-slate-50 disabled:opacity-75"
                  />
                  <div className="absolute right-2">
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                        <CheckCircle2 className="size-3.5" /> Verified
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={isSending}
                        className="rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-white transition hover:bg-primary disabled:opacity-50"
                      >
                        {isSending ? "Sending..." : otpSent ? "Resend" : "Send OTP"}
                      </button>
                    )}
                  </div>
                </div>
                {emailError && (
                  <p className="mt-1 text-xs font-medium text-destructive">{emailError}</p>
                )}

                {/* Inline OTP Verification Strip */}
                {otpSent && !isVerified && (
                  <div className="rounded-xl border border-amber-300 bg-amber-50/90 p-3 text-xs animate-in fade-in slide-in-from-top-1 space-y-2 mt-2">
                    <div className="flex items-center justify-between text-amber-950 font-medium">
                      <span className="flex items-center gap-1">
                        <Send className="size-3 text-amber-700" /> Enter 6-digit code:
                      </span>
                      {resendTimer > 0 && (
                        <span className="text-[11px] text-amber-700">Resend in {resendTimer}s</span>
                      )}
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
                        className="rounded-lg bg-gold px-3.5 py-1.5 text-xs font-bold text-gold-foreground transition hover:opacity-90 shadow-2xs shrink-0"
                      >
                        Verify
                      </button>
                    </div>
                    {otpError && (
                      <p className="text-xs font-medium text-destructive flex items-center gap-1">
                        <AlertCircle className="size-3" /> {otpError}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Field 3: Phone Number */}
              <div>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-semibold text-muted-foreground">
                    +91
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Phone"
                    className="w-full rounded-xl border border-slate-200 bg-white pl-13 pr-4 py-3 text-sm placeholder:text-slate-400 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                {errors["phone"] && (
                  <p className="mt-1 text-xs font-medium text-destructive">{errors["phone"]}</p>
                )}
              </div>

              {/* Field 4: STREAM */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  STREAM
                </label>
                <div className="relative">
                  <select
                    name="board"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 pr-10"
                  >
                    <option value="" disabled>
                      Select Stream
                    </option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                    <option value="Integrated (CBSE + Foundation)">Integrated (CBSE + Foundation)</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 size-4 text-slate-400" />
                </div>
                {errors["board"] && (
                  <p className="mt-1 text-xs font-medium text-destructive">{errors["board"]}</p>
                )}
              </div>

              {/* Field 5: SELECT/TYPE YOUR CURRENT SCHOOL */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  SELECT/TYPE YOUR CURRENT SCHOOL
                </label>
                <input
                  name="currentSchool"
                  placeholder="e.g. Chinmaya / Kendriya Vidyalaya / St. Paul's..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm placeholder:text-slate-400 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>

              {/* Field 6: PREFERRED CLASS */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  PREFERRED CLASS
                </label>
                <div className="relative">
                  <select
                    name="studentClass"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 pr-10"
                  >
                    <option value="" disabled>
                      Select Class
                    </option>
                    <option value="Class VII">Class VII (7th Std)</option>
                    <option value="Class VIII">Class VIII (8th Std)</option>
                    <option value="Class IX">Class IX (9th Std)</option>
                    <option value="Class X">Class X (10th Std)</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 size-4 text-slate-400" />
                </div>
                {errors["studentClass"] && (
                  <p className="mt-1 text-xs font-medium text-destructive">{errors["studentClass"]}</p>
                )}
              </div>

              {/* Submit Button (matches reference: warm golden orange button) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gold py-3.5 px-6 text-sm font-bold text-gold-foreground shadow-md transition-all duration-300 hover:brightness-105 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
                  <Phone className="size-3 text-gold" /> Need immediate assistance? Call{" "}
                  <a href={contact.phoneHref} className="font-bold text-primary hover:underline">
                    {contact.phoneDisplay}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
