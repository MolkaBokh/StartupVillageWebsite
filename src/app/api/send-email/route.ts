import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Email-sending endpoint for the two site forms (Contact + Espace de Vie).
 *
 * Expects JSON: { fields: { label: string; value: string }[]; replyTo?: string }
 * Sends the submission via Resend. The API key is read from the environment
 * (RESEND_API_KEY) and is never hardcoded.
 */

// Recipient of the form submissions.
// TODO: replace with contact@startupvillage.com once that mailbox is ready.
const TO_EMAIL = "molkaboukhris224@gmail.com";

// Sender address. Resend's shared testing sender works without a verified
// domain (it can only deliver to the Resend account owner's address).
// TODO: once a domain is verified in Resend, replace this with a branded
// address, e.g. "Startup Village <contact@startupvillage.com>".
const FROM_EMAIL = "Startup Village <onboarding@resend.dev>";

const SUBJECT = "Nouvelle demande depuis Startup Village";

type Field = { label: string; value: string };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured (missing RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  let body: { fields?: Field[]; replyTo?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fields = Array.isArray(body.fields) ? body.fields : [];
  if (fields.length === 0) {
    return NextResponse.json({ error: "No fields to send." }, { status: 400 });
  }

  const rows = fields
    .map(
      (f) =>
        `<tr><td style="padding:6px 12px;font-weight:bold;color:#0a1733;vertical-align:top;">${escapeHtml(
          f.label
        )}</td><td style="padding:6px 12px;color:#0a1733;white-space:pre-wrap;">${escapeHtml(
          f.value || "—"
        )}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#0a1733;">
      <h2 style="color:#0a1733;">${SUBJECT}</h2>
      <table style="border-collapse:collapse;">${rows}</table>
    </div>`;

  const text = fields.map((f) => `${f.label}: ${f.value || "—"}`).join("\n");

  const resend = new Resend(apiKey);

  const validReplyTo =
    body.replyTo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.replyTo) ? body.replyTo : undefined;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: SUBJECT,
      html,
      text,
      ...(validReplyTo ? { replyTo: validReplyTo } : {}),
    });

    if (error) {
      return NextResponse.json({ error: error.message || "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
  }
}
