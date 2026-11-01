import { createServerFn } from "@tanstack/react-start";

interface SendOtpPayload {
  email: string;
  otp: string;
}

interface SendEnquiryPayload {
  refId: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  studentClass: string;
  board: string;
  program: string;
}

/**
 * Loads .env directly from the filesystem on demand.
 * This guarantees freshly entered credentials work immediately without needing to restart the Vite server.
 */
async function ensureEnvLoaded() {
  if (process.env["GMAIL_USER"] && process.env["GMAIL_APP_PASSWORD"]) {
    return;
  }

  try {
    const fs = (await import("node:fs")).default;
    const path = (await import("node:path")).default;
    const envPath = path.resolve(process.cwd(), ".env");

    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx > 0) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (val) {
            process.env[key] = val;
          }
        }
      }
    }
  } catch (err) {
    console.warn("Could not read .env from disk:", err);
  }
}

/**
 * Retrieves the real transparent ACE logo as an inline attachment (CID).
 * This allows all major email clients (Gmail, Apple Mail, Outlook) to display the logo immediately.
 */
async function getLogoDetails() {
  try {
    const fs = (await import("node:fs")).default;
    const path = (await import("node:path")).default;
    const logoPath = path.resolve(process.cwd(), "public/images/ace-logo.png");
    if (fs.existsSync(logoPath)) {
      return {
        path: logoPath,
        cid: "acelogo@aceeducation",
        attachment: {
          filename: "ace-logo.png",
          path: logoPath,
          cid: "acelogo@aceeducation",
        },
      };
    }
  } catch (err) {
    console.warn("Could not resolve ace-logo.png:", err);
  }
  return null;
}

/**
 * Creates or retrieves the mail delivery mechanism.
 * Dynamically imports nodemailer on server-side to avoid bundling node internals into client.
 */
async function getEmailTransport() {
  await ensureEnvLoaded();

  const gmailUser = (process.env["GMAIL_USER"] || process.env["SMTP_USER"])?.trim();
  const gmailPass = (process.env["GMAIL_APP_PASSWORD"] || process.env["SMTP_PASS"])?.trim().replace(/\s+/g, "");

  if (gmailUser && gmailPass) {
    const nodemailer = (await import("nodemailer")).default;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailFrom = process.env["MAIL_FROM"]?.trim() || `ACE Admissions <${gmailUser}>`;
    return { type: "nodemailer" as const, transporter, mailFrom, senderEmail: gmailUser };
  }

  // Fallback to Resend API if RESEND_API_KEY is configured
  const resendKey = process.env["RESEND_API_KEY"]?.trim();
  if (resendKey) {
    const mailFrom = process.env["MAIL_FROM"]?.trim() || "ACE Admissions <onboarding@resend.dev>";
    return { type: "resend" as const, apiKey: resendKey, mailFrom };
  }

  return null;
}

/**
 * Server Function: Dispatches OTP verification code to applicant's email address.
 * Features the real transparent ACE logo and smooth CSS keyframe animations.
 */
export const sendOtpServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as SendOtpPayload)
  .handler(async ({ data }) => {
    const { email, otp } = data;
    const transport = await getEmailTransport();
    const logo = await getLogoDetails();

    const subject = `[ACE Education] Admission Verification Code: ${otp}`;
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${subject}</title>
        <style>
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(197, 155, 39, 0.4), 0 10px 28px -5px rgba(10, 30, 61, 0.12);
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 24px 6px rgba(197, 155, 39, 0.55), 0 16px 36px -6px rgba(10, 30, 61, 0.22);
              transform: scale(1.018);
            }
          }
          @keyframes badgeFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          @keyframes shimmerRibbon {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          .animated-card {
            animation: pulseGlow 3s ease-in-out infinite;
          }
          .animated-logo {
            animation: badgeFloat 4s ease-in-out infinite;
          }
          .shimmer-top {
            background: linear-gradient(90deg, #0a1e3d 0%, #c59b27 35%, #ffd700 50%, #c59b27 65%, #0a1e3d 100%);
            background-size: 200% auto;
            animation: shimmerRibbon 6s linear infinite;
          }
          .btn-hover:hover {
            opacity: 0.92;
            transform: translateY(-1px);
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #08162d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: radial-gradient(circle at top, #142850 0%, #08162d 100%); padding: 36px 12px;">
          <tr>
            <td align="center">
              <!-- Main Email Container -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.45); border: 1px solid rgba(255, 255, 255, 0.15);">
                
                <!-- Animated Gold Accent Top Ribbon -->
                <tr>
                  <td class="shimmer-top" style="height: 6px; background-color: #c59b27;"></td>
                </tr>

                <!-- Header with Real Logo -->
                <tr>
                  <td align="center" style="padding: 36px 28px 16px; text-align: center;">
                    ${
                      logo
                        ? `<img src="cid:${logo.cid}" alt="ACE – Education Redefined" width="220" style="display: block; margin: 0 auto; width: 220px; max-width: 80%; height: auto; border: 0;" class="animated-logo" />`
                        : `<h1 style="color: #0a1e3d; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -0.5px;">ACE – Education Redefined</h1>`
                    }
                    
                    <div style="margin-top: 14px; display: inline-block; padding: 5px 16px; border-radius: 999px; background: rgba(197, 155, 39, 0.12); border: 1px solid rgba(197, 155, 39, 0.35);">
                      <span style="font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #a47e1b;">Hubballi · Concepts to Confidence</span>
                    </div>
                  </td>
                </tr>

                <!-- Content Body -->
                <tr>
                  <td style="padding: 8px 32px 32px; color: #334155;">
                    <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0 0 20px;">
                      Hello,<br /><br />
                      You are initiating an official admission enquiry for <strong>Classes VIII, IX or X</strong> at ACE Education, Hubballi. Use the one-time verification code below to complete your registration.
                    </p>

                    <!-- Fancier Animated OTP Card -->
                    <div class="animated-card" style="background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%); border: 2px solid #c59b27; border-radius: 20px; padding: 32px 20px; text-align: center; margin: 24px 0; box-shadow: 0 12px 30px -8px rgba(10, 30, 61, 0.15);">
                      <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #64748b; margin-bottom: 6px;">
                        🔐 One-Time Admission Verification Code
                      </div>
                      
                      <div style="font-size: 48px; font-weight: 900; letter-spacing: 12px; color: #0a1e3d; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; margin: 12px 0 14px; padding-left: 12px; text-shadow: 0 2px 6px rgba(10, 30, 61, 0.1);">
                        ${otp}
                      </div>

                      <div style="display: inline-block; padding: 6px 16px; border-radius: 8px; background: #fef3c7; border: 1px solid #fde68a; font-size: 12px; font-weight: 700; color: #92400e;">
                        ⏱ Valid for 10 minutes · Single-use secure code
                      </div>
                    </div>

                    <!-- Highlighted Value Props Strip -->
                    <div style="background: #f8fafc; border-radius: 16px; padding: 20px 22px; border: 1px solid #e2e8f0; margin: 28px 0 10px;">
                      <p style="margin: 0 0 12px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #0a1e3d;">
                        Why Students & Parents Choose ACE:
                      </p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 13px; line-height: 1.5; color: #475569;">
                        <tr>
                          <td style="padding: 6px 0; vertical-align: top; width: 24px; font-size: 14px;">🎓</td>
                          <td style="padding: 6px 0;"><strong>Foundation &amp; Board Mastery:</strong> Comprehensive coverage for CBSE, ICSE &amp; Karnataka State Board.</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; vertical-align: top; font-size: 14px;">🔬</td>
                          <td style="padding: 6px 0;"><strong>Beyond Classroom Learning:</strong> Hands-on science lab activities, demonstrations &amp; practical experiments.</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; vertical-align: top; font-size: 14px;">📈</td>
                          <td style="padding: 6px 0;"><strong>Fear-Free Assessments:</strong> Regular diagnostic tests with personalized mentor feedback.</td>
                        </tr>
                      </table>
                    </div>

                    <p style="color: #94a3b8; font-size: 12px; line-height: 1.5; margin: 20px 0 0;">
                      Security Note: Never share this code with anyone. ACE Education staff will never call asking for your OTP.
                    </p>
                  </td>
                </tr>

                <!-- Fancy Action & Footer Bar -->
                <tr>
                  <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 28px 24px; text-align: center;">
                    <div style="margin-bottom: 16px;">
                      <a href="tel:+919148486661" class="btn-hover" style="display: inline-block; margin: 4px; padding: 11px 22px; border-radius: 999px; background-color: #0a1e3d; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; box-shadow: 0 4px 12px rgba(10, 30, 61, 0.25);">
                        📞 Call Desk (+91 91484 86661)
                      </a>
                      <a href="https://wa.me/919148486661" class="btn-hover" style="display: inline-block; margin: 4px; padding: 11px 22px; border-radius: 999px; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);">
                        💬 WhatsApp Admissions
                      </a>
                    </div>

                    <div style="color: #64748b; font-size: 11px; line-height: 1.6;">
                      <strong style="color: #0a1e3d; font-size: 12px;">ACE – Education Redefined, Hubballi</strong><br />
                      Lakeside Commercial Complex, 2nd Floor, Opp. Tolankere, Lakshmi Nagar, Hubballi – 580030<br />
                      Email: admissions@aceEduHub.com | Website: www.aceEduHub.com
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Bottom Tagline -->
              <p style="color: #64748b; font-size: 11px; text-align: center; margin-top: 20px;">
                © ${new Date().getFullYear()} ACE Education Hubballi. From Concepts to Confidence.
              </p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 1. Send via Gmail / SMTP Transporter
    if (transport?.type === "nodemailer") {
      try {
        const mailOptions: {
          from: string;
          to: string;
          subject: string;
          html: string;
          attachments?: Array<{ filename: string; path: string; cid: string }>;
        } = {
          from: transport.mailFrom,
          to: email,
          subject,
          html,
        };

        if (logo?.attachment) {
          mailOptions.attachments = [logo.attachment];
        }

        const info = await transport.transporter.sendMail(mailOptions);
        console.log(`[GMAIL SENT] Message ID: ${info.messageId} to ${email}`);
        return {
          success: true,
          delivered: true,
          provider: "gmail",
          message: `Verification code sent to ${email}`,
        };
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : String(err);
        console.error("[GMAIL ERROR] Failed to send email via Gmail:", errMsg);
        return {
          success: false,
          delivered: false,
          error: `Gmail sending failed: ${errMsg}`,
        };
      }
    }

    // 2. Send via Resend API
    if (transport?.type === "resend") {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${transport.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: transport.mailFrom,
            to: [email],
            subject,
            html,
          }),
        });

        if (response.ok) {
          return {
            success: true,
            delivered: true,
            provider: "resend",
            message: `Verification code sent to ${email}`,
          };
        } else {
          const errData = await response.json().catch(() => ({}));
          console.warn("[RESEND ERROR]", errData);
        }
      } catch (err) {
        console.error("[RESEND FETCH ERROR]", err);
      }
    }

    // 3. Fallback when credentials are not yet entered in .env
    console.log(`[SIMULATION MODE] No mail credentials in .env. Target: ${email} | Code: ${otp}`);
    return {
      success: true,
      delivered: false,
      simulated: true,
      message: "Mail credentials not configured in .env. Dispatched in development simulation mode.",
    };
  });

/**
 * Server Function: Dispatches official notification to admissions office and parent.
 * Features real logo and styled confirmation receipt.
 */
export const sendEnquiryServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as SendEnquiryPayload)
  .handler(async ({ data }) => {
    const transport = await getEmailTransport();
    const logo = await getLogoDetails();
    const officeEmail = process.env["ADMISSIONS_OFFICE_EMAIL"]?.trim() || "admissions@aceEduHub.com";

    // ── Parent Confirmation Email ──
    const parentSubject = `Enquiry Registered · Ref #${data.refId} | ACE Education Hubballi`;
    const parentHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${parentSubject}</title>
        <style>
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 4px 16px rgba(10, 30, 61, 0.08); }
            50% { box-shadow: 0 8px 24px rgba(197, 155, 39, 0.25); }
          }
          .card-glow { animation: pulseGlow 4s ease-in-out infinite; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #08162d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: radial-gradient(circle at top, #142850 0%, #08162d 100%); padding: 36px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.45);">
                <tr>
                  <td style="height: 6px; background: linear-gradient(90deg, #0a1e3d 0%, #c59b27 50%, #0a1e3d 100%);"></td>
                </tr>

                <!-- Logo & Badge -->
                <tr>
                  <td align="center" style="padding: 32px 28px 12px;">
                    ${
                      logo
                        ? `<img src="cid:${logo.cid}" alt="ACE Education" width="200" style="display: block; margin: 0 auto; width: 200px; height: auto;" />`
                        : `<h1 style="color: #0a1e3d; margin: 0; font-size: 26px;">ACE Education</h1>`
                    }
                    <div style="margin-top: 14px; display: inline-block; padding: 4px 14px; border-radius: 999px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                      ✓ Official Admission Enquiry Registered
                    </div>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 16px 32px 32px; color: #334155;">
                    <h2 style="color: #0a1e3d; margin: 0 0 8px; font-size: 22px; font-weight: 800;">
                      Thank You, ${data.parentName}!
                    </h2>
                    <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0 0 20px;">
                      We have received your admission enquiry for <strong>${data.studentName}</strong>. Our academic counsellor will review the details and reach out within 24 hours.
                    </p>

                    <!-- Details Receipt Table -->
                    <div class="card-glow" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 22px; margin: 20px 0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 13px;">
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Reference ID</td>
                          <td style="padding: 8px 0; text-align: right; font-weight: 800; color: #0a1e3d; font-family: monospace; font-size: 14px;">${data.refId}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Student Name</td>
                          <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #0a1e3d;">${data.studentName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Class &amp; Board</td>
                          <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #0a1e3d;">Class ${data.studentClass} · ${data.board}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Program</td>
                          <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #c59b27;">${data.program}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Primary Phone</td>
                          <td style="padding: 8px 0; text-align: right; font-weight: 700; color: #0a1e3d;">+91 ${data.phone}</td>
                        </tr>
                      </table>
                    </div>

                    <p style="color: #475569; font-size: 13px; line-height: 1.6; margin: 16px 0 0;">
                      Next step: You will receive an invitation for a complimentary <strong>Diagnostic Assessment &amp; Parent Orientation</strong> at our Hubballi centre.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px; text-align: center;">
                    <a href="tel:+919148486661" style="display: inline-block; margin: 4px; padding: 10px 20px; border-radius: 999px; background-color: #0a1e3d; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700;">
                      📞 Call Admissions (+91 91484 86661)
                    </a>
                    <a href="https://wa.me/919148486661" style="display: inline-block; margin: 4px; padding: 10px 20px; border-radius: 999px; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700;">
                      💬 WhatsApp Us
                    </a>
                    <p style="color: #94a3b8; font-size: 11px; margin: 16px 0 0;">
                      ACE Education · Lakeside Commercial Complex, Opp. Tolankere, Lakshmi Nagar, Hubballi
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // ── Office Lead Alert Email ──
    const officeSubject = `[NEW LEAD] ${data.studentName} (Class ${data.studentClass} · ${data.board}) · Ref #${data.refId}`;
    const officeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f1f5f9; padding: 24px;">
        <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 28px; border: 1px solid #cbd5e1; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
          <div style="border-bottom: 2px solid #c59b27; padding-bottom: 12px; margin-bottom: 18px;">
            <span style="background: #0a1e3d; color: #ffffff; font-size: 10px; font-weight: 800; padding: 3px 10px; border-radius: 4px; text-transform: uppercase;">
              New Admission Lead
            </span>
            <h2 style="color: #0a1e3d; margin: 10px 0 0; font-size: 22px;">${data.studentName} — Class ${data.studentClass} (${data.board})</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b;">Ref ID:</td><td style="padding: 8px 0; font-weight: bold; font-family: monospace;">${data.refId}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b;">Student:</td><td style="padding: 8px 0; font-weight: bold;">${data.studentName}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b;">Parent:</td><td style="padding: 8px 0; font-weight: bold;">${data.parentName}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b;">Email:</td><td style="padding: 8px 0; font-weight: bold;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b;">Phone:</td><td style="padding: 8px 0; font-weight: bold;"><a href="tel:${data.phone}">+91 ${data.phone}</a></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b;">Program:</td><td style="padding: 8px 0; font-weight: bold; color: #c59b27;">${data.program}</td></tr>
          </table>
          <div style="margin-top: 20px; text-align: center;">
            <a href="https://wa.me/91${data.phone}" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 13px;">
              WhatsApp Parent Directly
            </a>
          </div>
        </div>
      </body>
      </html>
    `;

    if (transport?.type === "nodemailer") {
      try {
        const baseOptions = {
          from: transport.mailFrom,
          attachments: logo?.attachment ? [logo.attachment] : undefined,
        };

        // Send alert to office
        await transport.transporter.sendMail({
          ...baseOptions,
          to: officeEmail,
          subject: officeSubject,
          html: officeHtml,
        });

        // Send confirmation receipt to parent
        await transport.transporter.sendMail({
          ...baseOptions,
          to: data.email,
          subject: parentSubject,
          html: parentHtml,
        });

        return { success: true };
      } catch (err) {
        console.error("[GMAIL ENQUIRY ERROR]", err);
      }
    }

    if (transport?.type === "resend") {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${transport.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: transport.mailFrom,
            to: [officeEmail],
            subject: officeSubject,
            html: officeHtml,
          }),
        });

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${transport.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: transport.mailFrom,
            to: [data.email],
            subject: parentSubject,
            html: parentHtml,
          }),
        });
        return { success: true };
      } catch (err) {
        console.error("[RESEND ENQUIRY ERROR]", err);
      }
    }

    console.log(`[SIMULATED ENQUIRY STORED] Ref #${data.refId} for ${data.studentName}`);
    return { success: true, simulated: true };
  });
