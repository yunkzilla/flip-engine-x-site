import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

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
          email: email.trim(),
          timestamp: new Date().toISOString(),
          source: "website",
        }),
      });

      if (!res.ok) {
        console.error("Google Sheet webhook failed:", res.status);
      }
    } else {
      // Fallback: log to Vercel console (visible in Vercel logs)
      console.log("[WAITLIST]", { name: name.trim(), email: email.trim(), timestamp: new Date().toISOString() });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
