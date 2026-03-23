/**
 * Google Apps Script — Flip Engine X Waitlist
 *
 * SETUP:
 * 1. Create a new Google Sheet (name it "Flip Engine X Waitlist")
 * 2. Add headers in row 1: Name | Email | Timestamp | Source
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

    sheet.appendRow([
      data.name || "",
      data.email || "",
      data.timestamp || new Date().toISOString(),
      data.source || "unknown",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
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
