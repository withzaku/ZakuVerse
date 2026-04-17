import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizePayload(payload: ContactPayload) {
  return {
    name: payload.name?.trim() ?? "",
    email: payload.email?.trim() ?? "",
    message: payload.message?.trim() ?? "",
  };
}

function validatePayload(payload: ReturnType<typeof normalizePayload>) {
  if (!payload.name) {
    return "Name is required.";
  }

  if (!payload.email) {
    return "Email is required.";
  }

  if (!emailRegex.test(payload.email)) {
    return "Please provide a valid email address.";
  }

  if (!payload.message) {
    return "Message is required.";
  }

  if (payload.message.length < 20) {
    return "Please provide more project details (at least 20 characters).";
  }

  return null;
}

export async function POST(request: Request) {
  let json: ContactPayload;

  try {
    json = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = normalizePayload(json);
  const validationError = validatePayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? smtpUser;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !toEmail || !fromEmail || Number.isNaN(smtpPort)) {
    return NextResponse.json(
      { error: "Contact service is not configured. Please use WhatsApp for now." },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `ZakuVerse Website <${fromEmail}>`,
      to: toEmail,
      replyTo: payload.email,
      subject: `New Project Inquiry from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
      html: `
        <div style="font-family:Segoe UI,Arial,sans-serif;line-height:1.6;color:#111827;">
          <h2 style="margin-bottom:12px;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-line;">${escapeHtml(payload.message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Your message has been sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unable to send message right now. Please try WhatsApp." },
      { status: 500 },
    );
  }
}
