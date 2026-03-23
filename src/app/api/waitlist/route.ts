import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, plan, emailOptIn } = await req.json();

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (sheetUrl) {
      // Google Apps Script can be slow (cold starts, redirects)
      // Use AbortController to timeout after 8 seconds
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      try {
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
          redirect: "follow",
          signal: controller.signal,
        });
        clearTimeout(timeout);

        const text = await res.text();
        try {
          const data = JSON.parse(text);
          if (data.duplicate) {
            return NextResponse.json({ success: true, duplicate: true });
          }
        } catch {
          // Response wasn't JSON (common with Apps Script redirects)
          // Row was likely still written
          console.log("[WAITLIST] Non-JSON response from sheet:", res.status, text.slice(0, 200));
        }
      } catch (fetchErr) {
        clearTimeout(timeout);
        // Timeout or network error — log but don't fail the user
        console.error("[WAITLIST] Sheet fetch error:", fetchErr);
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
