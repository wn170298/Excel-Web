from docx import Document
from docx.shared import Pt, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement


def apply_font(run, name="Calibri", size=12, bold=False, italic=False):
    run.font.name = name
    run.font.size = Pt(size)
    run.bold = bold
    run.italic = italic


def set_para_spacing(para, before=0, after=4):
    para.paragraph_format.space_before = Pt(before)
    para.paragraph_format.space_after = Pt(after)


def set_line_spacing_multiple(para, multiple=1.15):
    """Set line spacing as a multiple using OOXML (twips = pt * 20)."""
    pPr = para._p.get_or_add_pPr()
    spacing_el = pPr.find(qn("w:spacing"))
    if spacing_el is None:
        spacing_el = OxmlElement("w:spacing")
        pPr.append(spacing_el)
    spacing_el.set(qn("w:line"), str(int(240 * multiple)))
    spacing_el.set(qn("w:lineRule"), "auto")


doc = Document()

# --- Page margins: 2.54 cm all sides ---
for section in doc.sections:
    section.top_margin = Cm(2.54)
    section.bottom_margin = Cm(2.54)
    section.left_margin = Cm(2.54)
    section.right_margin = Cm(2.54)

# --- Normal style baseline ---
normal = doc.styles["Normal"]
normal.font.name = "Calibri"
normal.font.size = Pt(12)
normal.paragraph_format.space_before = Pt(0)
normal.paragraph_format.space_after = Pt(4)

# ==========================================================
# SECTION 1: HEADER BLOCK
# ==========================================================
header_lines = [
    "Wali Noorzad",
    "Master’s Thesis Proposal — Abstract",
    "Sapienza University of Rome",
    "Department of Management",
    "Proposed Supervisor: Prof. Francesco Bellini",
    "Date: 20 May 2026",
]
for line in header_lines:
    p = doc.add_paragraph()
    set_para_spacing(p, before=0, after=0)
    r = p.add_run(line)
    apply_font(r, size=11)
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT

# Spacer
sp = doc.add_paragraph()
set_para_spacing(sp, before=0, after=8)

# ==========================================================
# SECTION 2: TITLE
# ==========================================================
title_text = (
    "Designing, Deploying, and Productizing a Multi-Agent AI System "
    "for Service-Delivery Transformation in a Micro-Firm Digital Marketing Agency: "
    "A Design Science Research Case Study"
)
p_title = doc.add_paragraph()
p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_para_spacing(p_title, before=0, after=14)
r_title = p_title.add_run(title_text)
apply_font(r_title, size=14, bold=True)

# ==========================================================
# SECTION 3: ABSTRACT
# ==========================================================
p_al = doc.add_paragraph()
set_para_spacing(p_al, before=0, after=4)
r_al = p_al.add_run("Abstract")
apply_font(r_al, size=12, bold=True)

abstract_text = (
    "Micro-enterprises — 93% of EU enterprises (Eurostat, 2023) — remain peripheral "
    "to digital transformation research, which has examined enterprise-scale adopters and informal "
    "microentrepreneurs (Kolade et al., 2026) while leaving formal service-delivery contexts "
    "empirically unstudied. This thesis designs, deploys, and productizes a multi-agent AI system "
    "for EXCEL — a micro-firm digital marketing agency serving automotive SMBs in Perth, "
    "Australia under formalized multi-tier contracts. The guiding research question asks: how can "
    "a multi-agent AI system be designed, refined, and productized to measurably improve "
    "micro-scale service-firm performance, and under what conditions is the artifact transferable "
    "to comparable agencies? The study applies Design Science Research (Hevner et al., 2004) with "
    "Action Research cycles, grounded in Digital Transformation (Vial, 2019), Dynamic Capabilities "
    "(Teece, 2007), and Service-Dominant Logic (Vargo & Lusch, 2004). The artifact — built on "
    "the n8n platform — comprises three agents: a Monthly Reporting Agent, a Google Ads "
    "Optimization Agent, and a Proposal/Onboarding Agent. Data collection spans two bounded cases "
    "— Speed Wreckers (campaign data March–July 2025) and Auto Point Car Removal — "
    "combining a four-week time-tracking baseline, before/after metrics, and structured client "
    "feedback. A Data Management Plan governs all sources — Google Ads API exports, CRM "
    "records, and call-tracking logs — specifying GDPR compliance, governance protocols, "
    "retention schedules, and access controls. A productization phase converts the system into an "
    "open-source n8n template repository and SMB adoption playbook — the study’s "
    "technology transfer contribution. Across three proof-of-concept cycles (March–May 2025), "
    "the Monthly Reporting Agent reduced per-cycle preparation time from over 120 minutes to an "
    "average of 38 minutes — at least 68% — producing structured pre-call "
    "briefs from Google Ads exports and call-tracking data. The thesis contributes a replicable "
    "DSR framework, a validated artifact with measurable operational impact, and the "
    "construct of agentic cognitive reallocation — defined as the dynamic capability by which "
    "micro-firm operators delegate rule-based workflows to AI agents, extending Teece (2007) — "
    "and secondarily, evidence for organizational sustainability through reduced cognitive load."
)

p_abs = doc.add_paragraph()
p_abs.alignment = WD_ALIGN_PARAGRAPH.LEFT
set_para_spacing(p_abs, before=0, after=10)
set_line_spacing_multiple(p_abs, 1.15)
r_abs = p_abs.add_run(abstract_text)
apply_font(r_abs, size=12)

# ==========================================================
# SECTION 4: KEYWORDS
# ==========================================================
p_kw = doc.add_paragraph()
set_para_spacing(p_kw, before=0, after=10)
r_kw1 = p_kw.add_run("Keywords: ")
apply_font(r_kw1, size=12, bold=True)
r_kw2 = p_kw.add_run(
    "Multi-agent AI systems; Digital transformation; Design Science Research; "
    "Agentic cognitive reallocation; Organizational sustainability"
)
apply_font(r_kw2, size=12)

# ==========================================================
# SECTION 5: SUPERVISOR AREAS
# ==========================================================
p_sh = doc.add_paragraph()
set_para_spacing(p_sh, before=0, after=4)
r_sh = p_sh.add_run("Proposed Supervisor Areas Addressed")
apply_font(r_sh, size=11, bold=True)

supervisor_text = (
    "Digital Transformation — the central research subject, examined through a multi-agent "
    "AI deployment in a formal micro-firm service context. "
    "Innovation Management — a productization phase formalizes findings into a transferable "
    "template repository and SMB adoption playbook. "
    "Technology Transfer — the open-source n8n repository constitutes an explicit artifact "
    "transfer mechanism to comparable micro-firm agencies. "
    "Data Management — a formal Data Management Plan governs all sources under GDPR "
    "compliance with governance protocols, retention schedules, and access controls. "
    "Sustainability — reduced cognitive load through AI agent delegation is framed as an "
    "organizational sustainability outcome for micro-scale service delivery."
)
p_sup = doc.add_paragraph()
set_para_spacing(p_sup, before=0, after=14)
r_sup = p_sup.add_run(supervisor_text)
apply_font(r_sup, size=11)

# ==========================================================
# SECTION 6: TITLE ALTERNATIVES
# ==========================================================
p_tah = doc.add_paragraph()
set_para_spacing(p_tah, before=0, after=4)
r_tah = p_tah.add_run("Title Alternatives")
apply_font(r_tah, size=11, bold=True, italic=True)

alt_a = doc.add_paragraph()
set_para_spacing(alt_a, before=0, after=2)
r_a = alt_a.add_run(
    "A.  Multi-Agent AI Systems for Micro-Firm Service Transformation: "
    "A Design Science Research Study"
)
apply_font(r_a, size=11)

alt_b = doc.add_paragraph()
set_para_spacing(alt_b, before=0, after=2)
r_b = alt_b.add_run(
    "B.  Automating Service Delivery at the Micro-Enterprise Scale: "
    "A DSR Case Study of AI Agent Deployment in Digital Marketing"
)
apply_font(r_b, size=11)

# ==========================================================
# SAVE
# ==========================================================
output_path = (
    "/Users/walinoorzad/Desktop/Claude Code/excel-website/exports/"
    "EXCEL_Thesis_Abstract_Bellini_Submission.docx"
)
doc.save(output_path)
print(f"SAVED: {output_path}")

# Word count: exclude standalone punctuation (matches Word's counter)
import re
word_count_split = len(abstract_text.split())
word_count_word = len(re.findall(r"(?<![—–])\b\w[\w''-]*\b(?![—–])", abstract_text))
print(f"Abstract word count (split, overcounts): {word_count_split}")
print(f"Abstract word count (Word-style, alpha/numeric tokens): {word_count_word}")
