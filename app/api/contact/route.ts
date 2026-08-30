import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Types ──────────────────────────────────────────────────────────────────

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

// ─── Email template ─────────────────────────────────────────────────────────

function buildEmailHtml({ name, email, message }: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: #0C0910;
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .wrapper {
      max-width: 560px;
      margin: 40px auto;
    }
    .card {
      background-color: #0C0910;
      border: 1px solid rgba(245,236,205,0.08);
      border-top: 3px solid #E6AF2E;
    }
    .header {
      padding: 32px 32px 0;
    }
    .label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: rgba(245,236,205,0.3);
      font-family: 'Courier New', monospace;
      margin-bottom: 4px;
    }
    .title {
      font-size: 28px;
      font-weight: 700;
      color: #F5ECCD;
      letter-spacing: -0.02em;
    }
    .title span { color: #E6AF2E; }
    .body {
      padding: 28px 32px 32px;
    }
    .field {
      margin-bottom: 20px;
    }
    .field:last-child { margin-bottom: 0; }
    .field-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: rgba(245,236,205,0.35);
      font-family: 'Courier New', monospace;
      margin-bottom: 6px;
    }
    .field-value {
      font-size: 14px;
      color: #F5ECCD;
      line-height: 1.5;
      padding: 10px 14px;
      background-color: rgba(245,236,205,0.04);
      border: 1px solid rgba(245,236,205,0.1);
      border-radius: 0;
    }
    .divider {
      height: 1px;
      background-color: rgba(245,236,205,0.06);
      margin: 0 32px;
    }
    .footer {
      padding: 20px 32px 32px;
      text-align: center;
    }
    .footer p {
      font-size: 11px;
      color: rgba(245,236,205,0.2);
      font-family: 'Courier New', monospace;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <p class="label">§ Incoming</p>
        <h1 class="title">New <span>Message</span></h1>
      </div>
      <div class="divider"></div>
      <div class="body">
        <div class="field">
          <p class="field-label">From</p>
          <div class="field-value">${name} &lt;${email}&gt;</div>
        </div>
        <div class="field">
          <p class="field-label">Reply To</p>
          <div class="field-value" style="color: #E6AF2E;">${email}</div>
        </div>
        <div class="field">
          <p class="field-label">Message</p>
          <div class="field-value" style="white-space: pre-wrap; line-height: 1.7;">${message}</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="footer">
        <p>portfolio contact form · adamstandish.dev</p>
      </div>
    </div>
  </div>
</body>
</html>`.trim();
}

// ─── Route ──────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, message } = body;

    // Server-side validation
    if (
      !name?.trim() || name.trim().length < 2 ||
      !email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      !message?.trim() || message.trim().length < 10
    ) {
      return NextResponse.json({ error: "Invalid submission." }, { status: 422 });
    }

    const emailUser = process.env.CONTACT_EMAIL_USER;
    const emailPass = process.env.CONTACT_EMAIL_PASS;
    const emailTo   = process.env.CONTACT_EMAIL_TO;

    if (!emailUser || !emailPass || !emailTo) {
      console.error("Missing email environment variables.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: emailUser, pass: emailPass },
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailTo,
      replyTo: email.trim(),
      subject: `New portfolio message — ${name.trim()}`,
      html: buildEmailHtml({ name: name.trim(), email: email.trim(), message: message.trim() }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}