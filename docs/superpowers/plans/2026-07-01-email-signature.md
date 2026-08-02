# Email Signature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional HTML email signature for EXCEL with embedded logo and SVG icons, ready to copy-paste into Gmail, Outlook, and Apple Mail.

**Architecture:** Single self-contained HTML file with all assets (logo PNG and 4 SVG icons) embedded as base64 data URIs. Table-based layout with inline CSS for maximum email client compatibility. No external dependencies.

**Tech Stack:** HTML5, inline CSS, base64 data URIs, SVG icons

## Global Constraints

- All CSS must be inline (`style="..."`) — no external stylesheets
- Table-based layout only (no flexbox, grid, or CSS Grid)
- Logo: base64-encoded PNG from `public/logo.png`
- Icons: 4 custom SVG icons (email, phone, web, LinkedIn), base64-encoded
- Total file size: ~300–350KB (due to base64 embedding)
- Brand colors: `#171717` (primary text), `#0068d6` (links/accents), `#666666` (muted), `#ebebeb` (borders)
- Typography: Helvetica, Arial fallback stack only
- Output: Single `.html` file, ready to open in browser and copy-paste into email clients

---

## Task 1: Create SVG Icons and Encode as Base64

**Files:**
- Create: `/private/tmp/claude-501/-Users-walinoorzad-Desktop-Claude-Code-excel-website/600e3bdc-c62c-4656-89f3-251d999b9e9e/scratchpad/icons.json` (temporary storage of base64 icons)

**Interfaces:**
- Produces: Four base64-encoded SVG strings:
  - `icon_email_base64` — envelope outline
  - `icon_phone_base64` — phone receiver outline
  - `icon_web_base64` — globe outline
  - `icon_linkedin_base64` — LinkedIn logo outline

---

- [ ] **Step 1: Create SVG icon source files**

Create 4 SVG icons with 20px × 20px viewBox, 2px stroke, `#0068d6` color. Use a Python script to create and base64-encode them:

```python
import base64
import json

# Email icon (envelope)
email_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0068d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>'''

# Phone icon (receiver)
phone_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0068d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>'''

# Web icon (globe)
web_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0068d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>'''

# LinkedIn icon (official style, simplified outline)
linkedin_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0068d6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
  <circle cx="4" cy="4" r="2"/>
</svg>'''

icons = {
    'email': base64.b64encode(email_svg.encode()).decode(),
    'phone': base64.b64encode(phone_svg.encode()).decode(),
    'web': base64.b64encode(web_svg.encode()).decode(),
    'linkedin': base64.b64encode(linkedin_svg.encode()).decode(),
}

with open('/private/tmp/claude-501/-Users-walinoorzad-Desktop-Claude-Code-excel-website/600e3bdc-c62c-4656-89f3-251d999b9e9e/scratchpad/icons.json', 'w') as f:
    json.dump(icons, f, indent=2)

print("✓ SVG icons created and base64-encoded")
for name, b64 in icons.items():
    print(f"  {name}: {len(b64)} chars")
```

- [ ] **Step 2: Run the icon generation script**

Run via Python in the project directory:

```bash
cd /Users/walinoorzad/Desktop/Claude\ Code/excel-website
python3 << 'PYSCRIPT'
import base64
import json

# [Copy code from Step 1 above]
PYSCRIPT
```

Expected: Script creates `icons.json` with 4 base64-encoded SVG strings (~1–2KB each). Output should print each icon name and base64 length.

---

## Task 2: Extract Logo and Encode as Base64

**Files:**
- Read: `/Users/walinoorzad/Desktop/Claude Code/excel-website/public/logo.png`
- Create: `/private/tmp/claude-501/-Users-walinoorzad-Desktop-Claude-Code-excel-website/600e3bdc-c62c-4656-89f3-251d999b9e9e/scratchpad/logo_base64.txt`

**Interfaces:**
- Produces: `logo_base64` — base64-encoded PNG string (~293KB)

---

- [ ] **Step 1: Encode logo PNG to base64**

```bash
base64 -i /Users/walinoorzad/Desktop/Claude\ Code/excel-website/public/logo.png > /private/tmp/claude-501/-Users-walinoorzad-Desktop-Claude-Code-excel-website/600e3bdc-c62c-4656-89f3-251d999b9e9e/scratchpad/logo_base64.txt
wc -c /private/tmp/claude-501/-Users-walinoorzad-Desktop-Claude-Code-excel-website/600e3bdc-c62c-4656-89f3-251d999b9e9e/scratchpad/logo_base64.txt
```

Expected: File created with ~292KB of base64 text (single long line, no newlines).

---

## Task 3: Build HTML Signature with Embedded Assets

**Files:**
- Create: `/Users/walinoorzad/Desktop/email_signature_excel_final.html`

**Interfaces:**
- Consumes: 
  - `logo_base64` from Task 2
  - `icon_email_base64`, `icon_phone_base64`, `icon_web_base64`, `icon_linkedin_base64` from Task 1
- Produces: Single `.html` file with complete signature, ready to open and render

---

- [ ] **Step 1: Read logo and icons base64 strings**

Read the files created in Tasks 1 and 2 to extract the base64 strings.

- [ ] **Step 2: Write HTML signature with embedded assets**

Create the final HTML file using Python to inject the base64 strings safely:

```python
import base64
import json

# Read logo base64
with open('/private/tmp/claude-501/-Users-walinoorzad-Desktop-Claude-Code-excel-website/600e3bdc-c62c-4656-89f3-251d999b9e9e/scratchpad/logo_base64.txt', 'r') as f:
    logo_base64 = f.read().strip()

# Read icons base64
with open('/private/tmp/claude-501/-Users-walinoorzad-Desktop-Claude-Code-excel-website/600e3bdc-c62c-4656-89f3-251d999b9e9e/scratchpad/icons.json', 'r') as f:
    icons = json.load(f)

# Build HTML
html = f'''<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EXCEL Email Signature</title>
  <style>
    body {{ margin: 0; padding: 20px; background: #f5f5f5; font-family: Helvetica, Arial, sans-serif; }}
    .preview {{ background: white; padding: 20px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
    .preview p {{ margin: 0 0 12px 0; color: #666; font-size: 12px; }}
  </style>
</head>
<body>
  <div class="preview">
    <p><strong>Email Signature Preview</strong> — Copy the content below into your email client signature settings.</p>
    
    <table cellpadding="0" cellspacing="0" style="width: 480px; border-collapse: collapse; font-family: Helvetica, Arial, sans-serif;">
      <!-- Logo + Divider + Contact Block -->
      <tr>
        <!-- Logo Column -->
        <td style="padding: 0; vertical-align: middle; width: 70px; text-align: center;">
          <img src="data:image/png;base64,{logo_base64}" alt="EXCEL" style="width: 70px; height: auto; display: block; border-radius: 8px;">
        </td>
        
        <!-- Divider Column -->
        <td style="padding: 0 12px; vertical-align: top; width: 1px;">
          <div style="width: 1px; height: 120px; background: #ebebeb;"></div>
        </td>
        
        <!-- Contact Block Column -->
        <td style="padding: 0 0 0 12px; vertical-align: top;">
          <table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
            <!-- Name -->
            <tr>
              <td style="padding: 0 0 4px 0;">
                <div style="font-size: 14px; font-weight: bold; color: #171717;">Wali Nori</div>
              </td>
            </tr>
            
            <!-- Title -->
            <tr>
              <td style="padding: 0 0 12px 0;">
                <div style="font-size: 12px; color: #666666;">Managing Director</div>
              </td>
            </tr>
            
            <!-- Contact Details with Border -->
            <tr>
              <td style="padding: 12px 0 0 0; border-top: 1px solid #ebebeb;">
                <table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                  <!-- Email -->
                  <tr>
                    <td style="padding: 0 8px 0 0; vertical-align: top;">
                      <img src="data:image/svg+xml;base64,{icons['email']}" alt="Email" style="width: 16px; height: 16px; display: block;">
                    </td>
                    <td style="padding: 0 0 8px 0; font-size: 11px;">
                      <span style="color: #666666;">Email:</span> <a href="mailto:excel@theexcelagency.com" style="color: #0068d6; text-decoration: none;">excel@theexcelagency.com</a>
                    </td>
                  </tr>
                  
                  <!-- Phone -->
                  <tr>
                    <td style="padding: 0 8px 0 0; vertical-align: top;">
                      <img src="data:image/svg+xml;base64,{icons['phone']}" alt="Phone" style="width: 16px; height: 16px; display: block;">
                    </td>
                    <td style="padding: 0 0 8px 0; font-size: 11px;">
                      <span style="color: #666666;">Phone:</span> <a href="tel:+393444424021" style="color: #0068d6; text-decoration: none;">+39 (0) 3444 424 021</a>
                    </td>
                  </tr>
                  
                  <!-- Web -->
                  <tr>
                    <td style="padding: 0 8px 0 0; vertical-align: top;">
                      <img src="data:image/svg+xml;base64,{icons['web']}" alt="Web" style="width: 16px; height: 16px; display: block;">
                    </td>
                    <td style="padding: 0 0 8px 0; font-size: 11px;">
                      <span style="color: #666666;">Web:</span> <a href="https://theexcelagency.com" style="color: #0068d6; text-decoration: none;">theexcelagency.com</a>
                    </td>
                  </tr>
                  
                  <!-- LinkedIn -->
                  <tr>
                    <td style="padding: 0 8px 0 0; vertical-align: top;">
                      <img src="data:image/svg+xml;base64,{icons['linkedin']}" alt="LinkedIn" style="width: 16px; height: 16px; display: block;">
                    </td>
                    <td style="padding: 0; font-size: 11px;">
                      <span style="color: #666666;">LinkedIn:</span> <a href="https://www.linkedin.com/in/wali-nori/" style="color: #0068d6; text-decoration: none;">linkedin.com/in/wali-nori</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>'''

with open('/Users/walinoorzad/Desktop/email_signature_excel_final.html', 'w') as f:
    f.write(html)

print("✓ HTML signature created: email_signature_excel_final.html")
print(f"  File size: {len(html) / 1024:.1f} KB")
```

Run this Python script from the command line.

- [ ] **Step 3: Verify the HTML file was created**

```bash
ls -lh /Users/walinoorzad/Desktop/email_signature_excel_final.html
file /Users/walinoorzad/Desktop/email_signature_excel_final.html
```

Expected: File exists at ~320–350KB, file type is "HTML document text, ASCII text".

---

## Task 4: Test Rendering in Browser

**Files:**
- Test: `/Users/walinoorzad/Desktop/email_signature_excel_final.html` (open in browser)

**Interfaces:**
- Consumes: HTML file from Task 3
- Produces: Visual confirmation that signature renders correctly

---

- [ ] **Step 1: Open the HTML file in a browser**

```bash
open /Users/walinoorzad/Desktop/email_signature_excel_final.html
```

Expected: Browser opens and displays the signature preview.

- [ ] **Step 2: Visually verify the signature**

Check the following:
- ✓ EXCEL logo displays (no broken image icon)
- ✓ Vertical divider line appears between logo and contact block
- ✓ Name "Wali Nori" is bold and prominent (14px)
- ✓ Title "Managing Director" is gray and smaller (12px)
- ✓ All 4 icons (email, phone, web, LinkedIn) are visible and blue (#0068d6)
- ✓ All contact details are present and blue (links)
- ✓ Horizontal line separates name/title from contact details
- ✓ Overall layout is clean, professional, and balanced
- ✓ No horizontal scrolling on narrow windows (test resizing browser)

- [ ] **Step 3: Test clicking links**

In the browser:
- Click on email address → should attempt to open mail client
- Click on phone number → should show phone link (tel:)
- Click on website → should open https://theexcelagency.com in new tab
- Click on LinkedIn → should open LinkedIn profile in new tab

Expected: All links are clickable and functional.

- [ ] **Step 4: Copy rendered signature for Gmail test**

- Triple-click the signature table to select all content
- Copy (Cmd+C)
- Open Gmail in a new tab
- Go to Settings → General → Signature
- Click in the signature text area
- Paste (Cmd+V)
- Scroll down and click "Save Changes"
- Compose a test email and verify the signature appears correctly

Expected: Signature renders correctly in Gmail without broken images or formatting issues.

---

## Summary of Deliverables

- **Primary output:** `/Users/walinoorzad/Desktop/email_signature_excel_final.html`
  - Single self-contained HTML file (~320–350KB)
  - All assets embedded as base64 (logo + 4 SVG icons)
  - Table-based layout with inline CSS
  - Ready to copy-paste into Gmail, Outlook, Apple Mail
  - Browser preview included (can be removed before copying to email clients if needed)

---
