# Email Signature Design Spec
**Date:** 2026-07-01  
**Project:** EXCEL Digital Marketing  
**Author:** Wali Nori

---

## Overview

Design and build a single professional HTML email signature for Wali Nori (Managing Director, EXCEL). The signature must render correctly across Gmail, Outlook, and Apple Mail using table-based layout with inline CSS only.

## Requirements

### Functional
- Must work in Gmail, Outlook (Windows & Mac), and Apple Mail
- All contact details must be clickable (mailto, tel, http links)
- Logo embedded as base64 PNG to survive copy-paste into Gmail signature settings
- No external stylesheets or dependencies — inline CSS only
- Table-based layout (no flexbox/grid, which most email clients strip)

### Brand Alignment
- Use EXCEL brand colors: `#171717` (primary text), `#0068d6` (links/accents), `#666666` (muted text), `#ebebeb` (borders)
- Typography: Helvetica, Arial fallback stack
- Design philosophy: Minimalist, sophisticated, premium-feeling
- Logo: 70px × 70px square rounded corners

### Content
- **Name:** Wali Nori
- **Title:** Managing Director
- **Email:** excel@theexcelagency.com
- **Phone:** +39 (0) 3444 424 021
- **Website:** theexcelagency.com
- **LinkedIn:** https://www.linkedin.com/in/wali-nori/

---

## Design Specification

### Layout
**Structure:** Horizontal, three-column arrangement
- **Column 1 (Logo):** EXCEL logo, 70px wide, centered vertically
- **Column 2 (Divider):** Thin vertical line (1px, `#ebebeb`), spacing only
- **Column 3 (Contact Block):** Name, title, and contact details

**Total width:** ~480px (mobile-safe, fits small screens without horizontal scroll)

### Hierarchy

**Name Section (Top)**
- Font: 14px, bold, `#171717`
- Content: "Wali Nori"
- Spacing: Top padding 0, bottom 4px

**Title Section (Below Name)**
- Font: 12px, regular, `#666666`
- Content: "Managing Director"
- Spacing: Bottom padding 12px

**Contact Section (Below Title)**
- Top border: 1px solid `#ebebeb` (visual separation)
- Padding: 12px top, 0 bottom

### Contact Details

Each contact row contains:
1. **Icon:** 20px × 20px SVG, minimalist line style, `#0068d6`
2. **Label:** 11px, `#666666` (e.g., "Email:", "Phone:")
3. **Link:** 11px, `#0068d6`, clickable

**Order of Details:**
1. Email (mailto link)
2. Phone (tel link)
3. Web (http link)
4. LinkedIn (http link)

**Link Behavior:**
- Email: `mailto:excel@theexcelagency.com`
- Phone: `tel:+393444424021`
- Web: `https://theexcelagency.com`
- LinkedIn: `https://www.linkedin.com/in/wali-nori/`

### Icons

**Style:** Minimalist SVG icons (outlined, not filled)
- Email: envelope outline
- Phone: phone receiver outline
- Web: globe outline
- LinkedIn: LinkedIn logo (official, outlined)

**Specs:**
- Size: 20px × 20px
- Color: `#0068d6` (brand blue)
- Stroke width: 2px for clarity
- Embedded as base64 data URIs (like logo)

### Typography
- **Font stack:** `Helvetica, Arial, sans-serif` (email-client safe)
- **Line height:** 1.4 for contact details section
- **No decorations:** No underlines except on hover (email clients vary)

### Colors
| Element | Color | Usage |
|---------|-------|-------|
| Primary text (name) | `#171717` | Name, labels |
| Accent (links) | `#0068d6` | Clickable links, icons |
| Secondary text (title) | `#666666` | Title, contact labels |
| Border/divider | `#ebebeb` | Vertical divider, section border |

### Spacing & Padding
- Logo cell: 0 padding, 20px right margin (space before divider)
- Divider: 20px left/right spacing
- Contact block: 0 left padding, generous internal spacing
- Row spacing in contact section: 6–8px between rows
- Top/bottom padding: Minimal (email client rendering varies)

---

## Technical Implementation

### HTML Structure
```
<table> (480px total width, border-collapse)
  <tr>
    <td> (logo cell)
      <img> (base64 PNG, 70px)
    </td>
    <td> (divider cell)
      (border-right: 1px #ebebeb)
    </td>
    <td> (contact block)
      <table> (contact rows)
        <tr> (name)
        <tr> (title)
        <tr> (top border)
        <tr> (email)
        <tr> (phone)
        <tr> (web)
        <tr> (linkedin)
      </table>
    </td>
  </tr>
</table>
```

### CSS Approach
- All styles inline (`style="..."`)
- Use `cellpadding="0"` and `cellspacing="0"` on tables
- `border-collapse: collapse` for nested tables
- Explicit width/height on images to avoid email client scaling issues
- Link colors: inline `style="color: #0068d6; text-decoration: none;"`

### Assets
- **Logo:** Base64-encoded PNG from `public/logo.png` (~293KB base64)
- **Icons:** 4 custom SVG icons (email, phone, web, LinkedIn), base64-encoded (~2–5KB each)

### Output Format
Single `.html` file that can be:
1. Opened in a browser to preview the rendered signature
2. Copy-pasted (rendered) into Gmail signature settings
3. Saved and shared with Outlook/Apple Mail users

---

## Success Criteria

1. ✅ Logo displays correctly (no broken image)
2. ✅ All links are clickable (mailto, tel, http work)
3. ✅ Renders identically in Gmail, Outlook, Apple Mail
4. ✅ Mobile-friendly (under 500px width, readable on small screens)
5. ✅ No horizontal scroll on mobile devices
6. ✅ Professional appearance with clear visual hierarchy
7. ✅ Brand colors and typography consistent with EXCEL brand
8. ✅ Icons are recognizable and align with minimalist aesthetic

---

## Out of Scope

- Multiple layout variations (stacked, compact) — single horizontal design only
- Custom fonts (email clients don't support; font-stack only)
- Animations or interactive elements (email clients don't support)
- Background colors or images (inconsistent rendering)
- Responsive/media queries (limited email client support)

---

## Deliverable

Single HTML file: `email_signature_excel_final.html`
- Contains complete, self-contained signature (base64 logo + icons)
- Ready to open in browser for preview
- Ready to copy-paste into email signature settings
- File size: ~300–350KB (due to base64 embedding)

---

## Notes

- The large file size (~300KB) is due to base64-encoding the PNG logo and SVG icons. This is necessary to ensure the signature survives copy-paste into Gmail without losing images.
- Email clients render tables slightly differently; minor padding/spacing variations are normal and expected.
- All links are clickable, but email clients may show different visual feedback (underlines, color changes on hover).
