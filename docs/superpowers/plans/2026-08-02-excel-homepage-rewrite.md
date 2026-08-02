# EXCEL Homepage Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the EXCEL homepage (`app/[locale]/page.tsx`) to shift from corporate/feature-focused messaging to problem-aware consultant positioning with real client proof, founder credibility, and full-stack integration focus.

**Architecture:** Preserve all React component structure, layout, imports, and styling. Modify only the copy/messaging by updating static data arrays (SERVICES, AI_FEATURES, STATS, RESULTS), hero section JSX and messaging, adding new problem statement and solution sections, updating the Why Excel section with founder credibility, enhancing testimonials with case studies, and expanding FAQ schema.

**Tech Stack:** Next.js 14, React Server Components, TypeScript, Tailwind CSS, Lucide icons

## Global Constraints

- Preserve all component imports, exports, and structure
- Preserve all Tailwind CSS classes (no styling changes)
- Preserve all responsive grid layouts and breakpoints
- Preserve Navigation and Footer components
- Preserve metadata and JSON-LD schemas
- All new copy must match the design spec tone (direct, results-focused, consultant-style)
- Real client data: Speed Wreckers (66 → 787.67 conversions, 8.4× clicks), Auto Point (39 conversions, $81 CPA)
- Founder positioning: Wali's genuine, conviction-driven voice
- No placeholders or vague messaging — everything grounded in specific claims

---

## File Structure

**Single file modification:**
- `app/[locale]/page.tsx` — Complete copy/messaging rewrite while preserving component structure

---

## Tasks

### Task 1: Update SERVICES Array Descriptions

**Files:**
- Modify: `app/[locale]/page.tsx:45-94` (SERVICES constant)

**Interfaces:**
- Consumes: None (beginning of task sequence)
- Produces: Updated SERVICES array with 6 services, each with integration-focused benefit description

**Steps:**

- [ ] **Step 1: Review current SERVICES array structure**

Read `app/[locale]/page.tsx` lines 45-94 to understand current structure (icon, title, label, description, highlights).

- [ ] **Step 2: Replace SERVICES array with new copy**

Replace the entire SERVICES constant (lines 45-94) with new descriptions emphasizing integration and business outcomes:
- SEO: "Build authority through technical SEO, strategic content, and link building—your organic foundation for paid amplification."
- PPC: "Scale proven organic keywords with paid ads. AI-powered bidding eliminates waste and maximizes return on every pound spent."
- Social: "Reach your ideal customers where they are—Meta, LinkedIn, TikTok—with precision targeting and strategic creative."
- Web Dev: "Fast, high-converting websites built to turn traffic into revenue. Every page optimized for your goals."
- Automation: "Nurture leads automatically through intelligent email, CRM workflows, and behavioral triggers. Never lose a warm lead."
- Analytics: "Know exactly where your revenue comes from. Full-funnel tracking, GDPR-compliant, no black boxes."

Update highlights for each service to reflect integration and outcomes (remove generic features, add business impact).

- [ ] **Step 3: Verify array syntax**

Ensure all closing braces/brackets and commas are correct. Run TypeScript check.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "refactor: update services descriptions for integration-focused positioning"
```

---

### Task 2: Update AI_FEATURES Array

**Files:**
- Modify: `app/[locale]/page.tsx:96-133` (AI_FEATURES constant)

**Interfaces:**
- Consumes: SERVICES array structure from Task 1 (same file pattern)
- Produces: AI_FEATURES array with 6 capabilities, each grounded in specific business outcome

**Steps:**

- [ ] **Step 1: Review current AI_FEATURES array**

Read lines 96-133 to understand structure (icon, title, description).

- [ ] **Step 2: Replace AI_FEATURES with business-outcome framing**

Replace the entire AI_FEATURES constant with new descriptions that address skepticism and frame AI as enabler, not gimmick:
- Smart Bid Management: AI optimizes ad spend across channels in real-time, shifts budget toward high-intent, high-converting keywords
- Predictive Analytics: Anticipate customer behavior, identify high-conversion prospects to focus budget
- Intelligent Attribution: ML-powered attribution cuts through last-click bias, reveals true revenue drivers
- AI-Assisted Content: Create SEO content at scale without sacrificing quality, AI identifies gaps, optimizes for intent
- Conversion Modeling: Privacy-compliant conversion modeling keeps bidding signal strong while staying GDPR-compliant
- Automated Optimization: Continuous A/B testing, bid adjustments, audience refinement happen 24/7

- [ ] **Step 3: Verify syntax**

Ensure all closing braces and property names are correct.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "refactor: update AI features descriptions with business problem framing"
```

---

### Task 3: Update RESULTS Array

**Files:**
- Modify: `app/[locale]/page.tsx:142-147` (RESULTS constant)

**Interfaces:**
- Consumes: SERVICES and AI_FEATURES arrays from Tasks 1-2
- Produces: Updated RESULTS array with 4 metrics reflecting real client impact

**Steps:**

- [ ] **Step 1: Review current RESULTS array**

Read lines 142-147 to understand structure (label, value, desc fields).

- [ ] **Step 2: Update RESULTS with new metrics**

Replace RESULTS constant with:
```
- Cost Per Lead: 52% reduction (vs. previous agency)
- Organic Traffic: +89% growth in 6 months
- E-Commerce ROAS: 3.8× average across clients
- Wasted Budget: 61% eliminated on first audit
```

Ensure labels are clear and values communicate impact, not just numbers.

- [ ] **Step 3: Commit**

```bash
git commit -m "refactor: update results metrics labels for clarity"
```

---

### Task 4: Rewrite Hero Section

**Files:**
- Modify: `app/[locale]/page.tsx:286-328` (Hero h1, p, CTA buttons)

**Interfaces:**
- Consumes: Design spec Section 1 (hero messaging), RESULTS from Task 3
- Produces: New hero JSX with problem-aware headline and subheading

**Steps:**

- [ ] **Step 1: Replace h1 headline**

Update h1 (around line 286-292) from "We Help Brands Reach Their Full Online Digital Marketing Potential" to: "Most agencies optimize one channel. We deliver growth across all of them." with "We deliver growth across all of them" in blue (#0068d6).

- [ ] **Step 2: Replace p subheading**

Update p (around line 294-298) to: "Siloed marketing wastes time and money. You need a growth partner who connects every touchpoint, measures what actually matters, and scales what works. That's Excel."

- [ ] **Step 3: Verify classNames unchanged**

Ensure all Tailwind classes, spacing, and styling remain identical. Only text content changed.

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: rewrite hero section with problem-aware positioning"
```

---

### Task 5: Add Problem Statement Section

**Files:**
- Modify: `app/[locale]/page.tsx` (Insert new section after hero stats bar, before services)

**Interfaces:**
- Consumes: Hero section from Task 4
- Produces: New JSX section that articulates the core problem (siloed marketing)

**Steps:**

- [ ] **Step 1: Find insertion point**

Locate the closing `</section>` of the stats bar (around line 488).

- [ ] **Step 2: Insert problem statement section**

Add new section with problem copy addressing siloed marketing waste, lack of coordination, attribution confusion, and vendor complexity. Structure: opener → problem list → transition to solution.

- [ ] **Step 3: Match styling**

Use consistent spacing (py-24), max-width (700px), text sizes (16px body, 18px bold accent), and dark mode support.

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: add problem statement section"
```

---

### Task 6: Add Solution Section

**Files:**
- Modify: `app/[locale]/page.tsx` (Insert between problem statement and services section)

**Interfaces:**
- Consumes: Problem statement from Task 5
- Produces: New solution section explaining integrated model + AI

**Steps:**

- [ ] **Step 1: Find insertion point**

Right after problem statement section closes, before SERVICES section begins.

- [ ] **Step 2: Insert solution section**

Add new section explaining: integrated system approach, SEO informs paid, analytics reveals converters, website compounds ad spend, automation nurtures, AI enables all of this.

Key message: "We connect everything" and "stop wasting money on channels that look good but don't drive revenue."

- [ ] **Step 3: Match styling**

Use bg-[#faf7f2] dark:bg-[#0d0d0d], same spacing and text hierarchy.

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: add solution section with integration messaging"
```

---

### Task 7: Add Speed Wreckers Case Study Section

**Files:**
- Modify: `app/[locale]/page.tsx` (Insert after solution, before services)

**Interfaces:**
- Consumes: Solution section from Task 6, Speed Wreckers metrics (66→787.67 conversions, 3K→25.2K clicks, $115→$102 CPA)
- Produces: New case study section with before/after comparison and Auto Point referral validation

**Steps:**

- [ ] **Step 1: Create case study container**

Insert new section "See It In Action" heading with Speed Wreckers as primary case study.

- [ ] **Step 2: Build before/after metrics grid**

Create two-column grid (sm:grid-cols-2) with:
- **Before Excel:** 3K clicks, 66 conversions, $7.62K spend, ~$115 CPA
- **After Excel (15 months):** 25.2K clicks (8.4×), 787.67 conversions (+1,092%), $80.7K spend, ~$102 CPA

Use bg-[#faf7f2] for before, bg-[#eef5ff] for after with blue accent border.

- [ ] **Step 3: Add Auto Point referral validation**

Below Speed Wreckers, add subsection showing Auto Point's early results: 39 conversions, $3.17K spend, $81 CPA, with "Referred by Speed Wreckers" note.

- [ ] **Step 4: Verify layout**

Ensure responsive grid collapses to single column on mobile, metrics are readable, colors match design spec.

- [ ] **Step 5: Commit**

```bash
git commit -m "feat: add Speed Wreckers case study and Auto Point referral section"
```

---

### Task 8: Update Why Excel Section (Founder + Differentiators)

**Files:**
- Modify: `app/[locale]/page.tsx:561-646` (Why Excel section, founder callout, differentiators)

**Interfaces:**
- Consumes: Case study section from Task 7
- Produces: Updated founder quote with genuine conviction + 4 differentiators with new messaging

**Steps:**

- [ ] **Step 1: Replace founder quote**

Update Wali's founder callout p element (around line 578-580) with genuine, conviction-driven quote:
"I built Excel because I was tired of watching smart businesses hire broken agencies. Most agencies specialize in one channel, hide behind reports, and hand you off to a junior coordinator. That's not partnership—that's waste. So I do it differently. I work directly with every client. I run your strategy. I'm in your account. I'm accountable for your growth—not hiding behind dashboards and account manager layers. When you work with Excel, you get someone who actually knows what they're doing, who cares about your results, and who won't disappear when things get complex."

- [ ] **Step 2: Update 4 differentiators**

Replace differentiator items with:
1. **Flat-Fee, Aligned Pricing** — Our incentives aligned with your results, not budget size. Only win when you grow.
2. **Full-Stack Integration** — Connect SEO, paid, web, analytics, automation into one system. No silos.
3. **AI-Powered Optimization** — ML handles bidding, content scoring, attribution at scale. Faster, smarter than manual.
4. **Founder-Led, Client-Focused** — Wali works on every client. No junior coordinator handoffs.

- [ ] **Step 3: Verify styling**

Ensure differentiators maintain layout (flex, gap, border-bottom), colors intact, responsive behavior preserved.

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: update founder quote and differentiators messaging"
```

---

### Task 9: Update Testimonials Section Title

**Files:**
- Modify: `app/[locale]/page.tsx:654-686` (Testimonials section title and intro)

**Interfaces:**
- Consumes: Why Excel section from Task 8
- Produces: Updated testimonials section framing to reflect case studies

**Steps:**

- [ ] **Step 1: Update section title**

Change "What Our Clients Say" to "Trusted by Growing Businesses" with "Client Testimonials" label.

- [ ] **Step 2: Keep testimonial cards unchanged**

The Speed Wreckers and Auto Point testimonials from the case study are sufficient. No changes needed to individual cards.

- [ ] **Step 3: Verify section hierarchy**

Ensure title styling matches other section titles (font size, weight, spacing).

- [ ] **Step 4: Commit**

```bash
git commit -m "refactor: update testimonials section title to reflect case studies"
```

---

### Task 10: Update AI Section Intro

**Files:**
- Modify: `app/[locale]/page.tsx:722-738` (AI section intro paragraph)

**Interfaces:**
- Consumes: Testimonials update from Task 9
- Produces: Updated AI section intro that addresses skepticism

**Steps:**

- [ ] **Step 1: Find AI section intro**

Locate the p element introducing the AI section (around line 722-738).

- [ ] **Step 2: Replace intro copy**

Change to: "We don't use AI as a marketing gimmick. It's the backbone of how we optimize your entire system in real-time—faster and smarter than any manual process."

- [ ] **Step 3: Verify text color and styling**

Ensure text color is consistent with other section intros (text-white/55 or similar).

- [ ] **Step 4: Commit**

```bash
git commit -m "refactor: update AI section intro to address skepticism"
```

---

### Task 11: Expand FAQ Schema

**Files:**
- Modify: `app/[locale]/page.tsx:234-243` (faqSchema in organizationSchema)

**Interfaces:**
- Consumes: AI section from Task 10
- Produces: Expanded faqSchema with 6 substantive Q&A pairs

**Steps:**

- [ ] **Step 1: Review current FAQ schema**

Read lines 234-243 to understand JSON-LD structure.

- [ ] **Step 2: Expand to 6 Q&A pairs**

Replace faqSchema mainEntity array with 6 FAQ items:
1. How is Excel different from other agencies? — Most specialize in one channel and hide behind reports. We integrate everything, founder-led, flat-fee pricing, AI-powered.
2. How long before I see results? — PPC within days, SEO 3-6 months, meaningful improvement usually 30-60 days.
3. What is the pricing model? — Flat-fee based on scope, not percentage of spend. Aligned incentives. Most from €1,200/month.
4. Do you work with businesses outside Europe? — Yes, worldwide, fully GDPR-compliant, across time zones.
5. Will I work directly with Wali? — Yes, Wali works on strategy for every client, involved in key decisions.
6. What is the minimum commitment? — Recommend 3 months to see meaningful results. Discuss in strategy session.

Ensure all Q&A are schema-valid JSON-LD (@type: Question, acceptedAnswer, etc.).

- [ ] **Step 3: Verify JSON syntax**

Check for balanced quotes, braces, commas. No typos in property names.

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: expand FAQ schema to 6 comprehensive questions and answers"
```

---

### Task 12: Update Blog Section Intro

**Files:**
- Modify: `app/[locale]/page.tsx:784-786` (Blog section intro paragraph)

**Interfaces:**
- Consumes: FAQ schema from Task 11
- Produces: Updated blog section description emphasizing real-world application

**Steps:**

- [ ] **Step 1: Find blog section intro**

Locate around line 784, the p element describing the blog section.

- [ ] **Step 2: Replace blog intro copy**

Change to: "Practical guides on growth strategy, paid media, SEO, and marketing automation. Built from real client work and actual results."

- [ ] **Step 3: Verify styling**

Ensure color, size, and spacing match other section descriptions.

- [ ] **Step 4: Commit**

```bash
git commit -m "refactor: update blog section intro to emphasize real-world application"
```

---

### Task 13: Verify All Imports, Exports, and TypeScript

**Files:**
- Verify: `app/[locale]/page.tsx:1-26` (imports, metadata, export) and full compilation

**Interfaces:**
- Consumes: All previous task changes
- Produces: Verified file integrity and TypeScript compilation success

**Steps:**

- [ ] **Step 1: Run TypeScript build check**

Execute `npm run build 2>&1 | head -100` and verify no errors related to `app/[locale]/page.tsx`.

- [ ] **Step 2: Verify exports**

Confirm line 220 (or thereabouts) exports HomePage component correctly with proper TypeScript types.

- [ ] **Step 3: Verify imports**

Check that all Lucide icons used in updated sections (Search, MousePointerClick, Share2, Globe, Zap, BarChart3, Bot, Brain, Sparkles, TrendingUp, Target, ShieldCheck) are imported at top of file.

- [ ] **Step 4: Quick spot-check structure**

Scan first 50 lines for imports, then last 20 lines for export — confirm no broken syntax from task edits.

- [ ] **Step 5: Commit**

```bash
git commit -m "verify: page.tsx imports, exports, and TypeScript compilation successful"
```

---

### Task 14: Start Dev Server and Visual Verification

**Files:**
- Run: Development server via `npm run dev`

**Interfaces:**
- Consumes: All rewritten content from Tasks 1-13
- Produces: Running dev server at http://localhost:3000, verified visual appearance

**Steps:**

- [ ] **Step 1: Start dev server**

Run `npm run dev` and wait for server to report it's running on http://localhost:3000 (or similar).

- [ ] **Step 2: Open homepage in browser**

Navigate to http://localhost:3000 (English locale, no prefix per as-needed i18n strategy).

- [ ] **Step 3: Visual check — Hero section**

Verify:
- h1: "Most agencies optimize one channel. We deliver growth across all of them."
- Subheading matches spec
- CTAs present and functional
- Layout unchanged, responsive on mobile

- [ ] **Step 4: Visual check — Stats bar through Problem section**

Verify stats are visible, spacing is correct, problem statement section appears with proper styling, dark mode toggles correctly.

- [ ] **Step 5: Visual check — Solution + Case Studies**

Verify:
- Solution section "We connect everything" is readable
- Speed Wreckers before/after metrics visible and styled correctly
- "66 → 787.67 conversions" shows impact clearly
- Auto Point referral card displays below with $81 CPA
- Responsive grid works on mobile

- [ ] **Step 6: Visual check — Services section**

Verify all 6 services display with new descriptions, icons intact, highlights match new content.

- [ ] **Step 7: Visual check — Why Excel / Founder section**

Verify:
- Wali's quote displays with full text (multi-paragraph if needed)
- 4 differentiators visible with updated titles and descriptions
- Styling matches original layout

- [ ] **Step 8: Visual check — AI section**

Verify:
- AI section intro reads "We don't use AI as a marketing gimmick..."
- 6 AI features display with new descriptions
- Icons and styling intact

- [ ] **Step 9: Visual check — Stats + Blog + FAQ**

Verify:
- Stats section metrics visible and clear (52% CPL, +89% organic, 3.8× ROAS, 61% waste eliminated)
- Blog section intro reads new copy
- FAQs are schema-correct (inspect page source for JSON-LD)

- [ ] **Step 10: Screenshot or note for user review**

If helpful, take a screenshot of key sections (hero, case study, founder) to show user.

- [ ] **Step 11: Keep dev server running**

Do NOT commit yet. Wait for user approval.

---

### Task 15: Wait for User Approval

**Interfaces:**
- Consumes: Visual verification from Task 14
- Produces: User feedback/approval before final commit

**Steps:**

- [ ] **Step 1: Report to user**

Present homepage review link and key sections that changed. Ask if tone, messaging, metrics, and layout feel right.

- [ ] **Step 2: Await user feedback**

Do NOT proceed with commit until user approves.

---

### Task 16: Commit Rewrite to GitHub

**Files:**
- Commit: `app/[locale]/page.tsx` (final rewrite)

**Interfaces:**
- Consumes: User approval from Task 15
- Produces: Committed changes on main branch with comprehensive commit message

**Steps:**

- [ ] **Step 1: Stage final changes**

```bash
git add app/[locale]/page.tsx
```

- [ ] **Step 2: Create comprehensive commit message**

Use HEREDOC to pass full commit message describing all sections rewritten, new sections added, and spec alignment.

- [ ] **Step 3: Verify commit created**

```bash
git log --oneline -1
```

Expected: Latest commit shows the homepage rewrite message.

- [ ] **Step 4: Confirm with user**

Message: "Homepage rewrite committed to main."

---

## Plan Complete

All tasks outlined. Each task is scoped to ensure independent review and testing. Tasks build sequentially:
- Tasks 1-3: Data arrays (services, AI, results)
- Tasks 4-7: Hero, problem, solution, case study sections
- Tasks 8-10: Why Excel, testimonials, AI intro
- Tasks 11-12: FAQ schema, blog intro
- Task 13: Compilation verification
- Task 14: Dev server testing
- Task 15: User approval gate
- Task 16: Final commit

---

**Execution:** Use superpowers:subagent-driven-development to dispatch fresh implementer subagent per task. Task reviewer gates spec compliance + code quality after each task. Whole-branch final review after all tasks complete.
