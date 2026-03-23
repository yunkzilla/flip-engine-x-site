/**
 * Google Apps Script — Flip Engine X Waitlist
 *
 * SETUP:
 * 1. Create a new Google Sheet (name it "Flip Engine X Waitlist")
 * 2. Add headers in row 1: Name | Email | Plan | Email Opt-In | Timestamp | Source
 * 3. Go to Extensions → Apps Script
 * 4. Paste this entire script and save
 * 5. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL
 * 7. Add it to your Vercel env as GOOGLE_SHEET_WEBHOOK_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var email = (data.email || "").toLowerCase().trim();

    // Check for duplicate email
    var emails = sheet.getRange("B:B").getValues();
    for (var i = 0; i < emails.length; i++) {
      if (emails[i][0].toString().toLowerCase().trim() === email) {
        return ContentService
          .createTextOutput(JSON.stringify({ success: true, duplicate: true }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    sheet.appendRow([
      data.name || "",
      email,
      data.plan || "undecided",
      data.emailOptIn ? "Yes" : "No",
      data.timestamp || new Date().toISOString(),
      data.source || "unknown",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, duplicate: false }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Waitlist webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
