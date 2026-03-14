import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send via Resend, Mailgun, or similar — for now use a simple fetch to a mailto-compatible endpoint
    // Using Vercel's built-in email or a simple SMTP relay
    // For MVP: forward to info@flipenginex.com using a free email API

    // Option: Use Formspree, Resend, or similar. For now, we'll store in a simple format
    // and you can connect an email provider later.

    // Basic email sending via Resend (if RESEND_API_KEY is set)
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Flip Engine X <noreply@flipenginex.com>",
          to: "info@flipenginex.com",
          reply_to: email,
          subject: `[Contact] ${subject} — ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json({ error: "Failed to send" }, { status: 500 });
      }
    } else {
      // Fallback: log to console (you'll see this in Vercel logs)
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("===============================");
      // Still return success — messages are captured in Vercel logs
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
