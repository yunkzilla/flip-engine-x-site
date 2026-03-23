import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, plan, emailOptIn } = await req.json();

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (sheetUrl) {
      const res = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          plan: plan || "undecided",
          emailOptIn: !!emailOptIn,
          timestamp: new Date().toISOString(),
          source: "website",
        }),
      });

      if (!res.ok) {
        console.error("Google Sheet webhook failed:", res.status);
        return NextResponse.json({ success: true });
      }

      const data = await res.json();
      if (data.duplicate) {
        return NextResponse.json({ success: true, duplicate: true });
      }
    } else {
      console.log("[WAITLIST]", {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        plan: plan || "undecided",
        emailOptIn: !!emailOptIn,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
