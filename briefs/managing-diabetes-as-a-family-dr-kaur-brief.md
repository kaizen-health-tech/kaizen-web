# Content Brief: Managing Diabetes as a Family: What to Track Between Doctor Visits

Paid co-authored partnership piece with Dr. Prabhleen Kaur. Scheduled Aug 31, 2026 per `calendars/2026-08-editorial-calendar.md` (Physician Partnership Content section, added 2026-08-14). Cluster: Family Medical Record Organization (bonus spoke). Built on `reports/blog-strategy-family-health-ai-agents-2026-08-09.md` audience segments.

**Audience scope, confirmed 2026-08-14**: this piece is written for readers living in India (India-domestic, not the diaspora), a deliberate deviation from the rest of the calendar's US-centric framing (CDC, Medicare, ADA). This is scoped to this single piece only — it does not signal a broader audience shift for the rest of the content plan.

**This brief is structural, not just topical.** The partnership only delivers value if Dr. Kaur's contribution is substantial and visible, not a single decorative quote. Every reserved-space element below is a hard requirement on top of the normal template structure.

## Compliance flag (new, India-specific — resolve before writing)
India's National Medical Commission (successor to the Medical Council of India) Professional Conduct Regulations restrict how registered physicians may associate their name with commercial promotion or advertising. A paid partnership where Dr. Kaur is named, quoted, and credited alongside Kaizen Health's product is exactly the kind of arrangement those rules are written to constrain. **Before any drafting begins**, confirm with Dr. Kaur (and Kaizen's legal/partnerships contact) that this specific format — named co-authorship, paid disclosure, and a single soft product mention in a separate, clearly editorial section — is one her registration and any hospital/practice affiliation permit. This is a harder constraint than the US FTC-style disclosure originally scoped for this piece; do not treat it as satisfied by the disclosure line alone.

## Template
**Recommended**: `how-to-guide` (checklist-style adaptation) — the reader's job-to-be-done is "build and maintain a tracking habit," which is a process, not a comparison or survey. Steps are organized as tracking *categories* (blood sugar, medicines, symptoms, diet/lifestyle, appointment logistics) rather than sequential actions, since a reader maintains several simultaneously.
**Template file**: `skills/blog/templates/how-to-guide.md`

## Target Keywords
- **Primary**: what to track between diabetes doctor visits in India — informational, family-caregiver intent. The closest direct competitor found (Swassth.in, "Diabetes Tracking for Families in India") covers similar ground but cites zero statistics or sources — a clear differentiation opening for a sourced, physician-co-authored piece
- **Secondary**: diabetes tracking checklist India, blood sugar log for family diabetic patient, diabetologist visit preparation, HbA1c tracking India, diabetes diet chart Indian family
- **Questions**: How often should a diabetic see a diabetologist in India? What should I carry to a diabetes check-up? What is the difference between a glucometer and a CGM, and is CGM worth it in India? What symptoms should be reported between visits? What Indian foods help or hurt blood sugar control?

## Search Intent
**Informational**, ongoing-management intent (not diagnosis-stage): the reader is already managing diabetes for a family member — very often within a joint or multi-generational household where several family members share caregiving duties — and needs a concrete tracking system for the gap between OPD (outpatient) visits, not a general "what is diabetes" explainer.

## Content Parameters
- **Word count**: 2,200-2,600 words (longer than a standard how-to-guide's 2,000-2,500 ceiling to make room for the physician sections below)
- **Reading level**: Flesch 60-70 (expert-accessible, no unexplained clinical jargon; explain any English medical terms a general Indian reader may not use daily, but do not over-explain terms like "roti" or "dal" for an Indian audience)
- **Format**: JSX/MDX (Next.js App Router `page.tsx`, matching `app/(site)/blog/diabetes-magnesium-vitamin-d/page.tsx`)
- **H2 sections**: 6 tracking-category sections + physician perspective section + FAQ = 8 total
- **Images**: 2-3 (hero + 1 supporting)
- **Charts**: 1-2 via built-in blog-chart (e.g., a donut showing diabetes vs. prediabetes prevalence in India, or a simple visit-frequency timeline) — diverse types if 2 are used
- **FAQ items**: 5, with 2-3 explicitly attributed to Dr. Kaur (see Reserved Physician Space below)
- **Currency**: all costs in INR (₹), not USD

## Recommended Title
Managing Diabetes as a Family: What to Track Between Doctor Visits

Alternative titles:
1. The Family Diabetes Tracking Checklist for Indian Households (Reviewed by Dr. Prabhleen Kaur)
2. What to Track Between Diabetes Check-Ups, According to Dr. Prabhleen Kaur

## Meta Description
What to log between diabetes check-ups in India — blood sugar, medicines, symptoms, and diet — reviewed and co-authored with Dr. Prabhleen Kaur for families managing diabetes together.

## Paid-Partnership Disclosure (required, above the fold)
Place directly under the title/byline, before the intro body copy: *"This article is a paid partnership between Kaizen Health and Dr. Prabhleen Kaur."* Confirm exact wording — and whether it is even permissible in this format — with Dr. Kaur/her practice and Kaizen's partnerships contact before drafting begins; see the Compliance Flag above. This is a harder gate than in the piece's original US-audience scoping.

## TL;DR Draft
> **TL;DR:** Between diabetes check-ups, the highest-value things to track are blood sugar readings (with context: time, meal, activity), all medicines, hypoglycemic/hyperglycemic episodes, and any new symptoms — not just the HbA1c number. Bring an organized log, not raw memory, to every visit. Dr. Prabhleen Kaur, who co-authored this guide, notes [reserve: her specific framing of what she most wishes families tracked but usually don't — collect during her review, do not pre-write this].

## Information Gain Opportunities
- **[PERSONAL EXPERIENCE / EXPERT INSIGHT — reserved]**: Do not fabricate a physician quote or clinical anecdote. Every first-hand clinical claim in the physician sections must come from Dr. Kaur directly.
- **[UNIQUE INSIGHT]**: Editorial can supply the joint-family coordination angle — several adults (spouse, adult children, sometimes in-laws under one roof) sharing tracking duties for one family member's diabetes, and how that coordination fails without a single shared record. The Swassth.in competitor touches caregiving coordination but without sourced data; pairing that angle with ICMR-INDIAB/RSSDI statistics and a named physician is the differentiator.
- **[ORIGINAL DATA]**: None planned; this is an expertise/trust play, not a data piece.

## Content Outline

### Introduction (120-150 words)
- Hook: India has an estimated 101 million people living with diabetes and another 136 million with prediabetes (ICMR-INDIAB) — most families will manage this for someone
- Problem: families often track inconsistently, or track the wrong things, and arrive at appointments with scattered notes instead of a usable record
- Promise: what to track, why, and how to bring it to the diabetologist — reviewed with input from a practicing physician
- TL;DR box placement (after hook, before first H2)
- Paid-partnership disclosure line placed above this section

### H2: Blood Sugar Readings — What to Log Beyond the Number
- **Answer-first**: A reading alone is nearly useless without context; log time, meal relation, activity, and how the person felt
- Cover: glucometer logs vs. CGM data; typical testing cadence (fasting, pre/post-meal, bedtime)
- **Key stat**: India's CGM market was valued at roughly ₹1,730 crore (USD 207.52 million) in 2025 and is projected to nearly double by 2031 (Mordor Intelligence, India CGM market report); a 14-day sensor typically costs ₹2,500-5,500 depending on brand — frame as "an option worth discussing with your diabetologist," not a recommendation to buy a specific product
- **Dr. Kaur's Take callout #1** (reserved): her guidance on what glucose *pattern* details matter most in a visit, beyond the raw numbers

### H2: Medicines — The Full List, Every Time
- **Answer-first**: Bring a complete, current list including OTC drugs and any Ayurvedic/herbal supplements being taken alongside prescribed medicine — a detail Indian diabetologists specifically ask about given how common concurrent use is
- Cover: insulin dosing changes, missed-dose patterns, drug-supplement interactions (cross-link to `diabetes-magnesium-vitamin-d` post on vitamin D/magnesium, which is not India-specific but remains factually applicable)
- **Internal link**: `/blog/diabetes-magnesium-vitamin-d` — anchor: "how supplements like vitamin D and magnesium affect blood sugar control"
- **Dr. Kaur's Take callout #2** (reserved): the most common medicine-tracking mistake she sees from families, and specifically whether/how she wants concurrent Ayurvedic or home-remedy use disclosed

### H2: Symptoms and Red Flags Worth Reporting
- **Answer-first**: Hypoglycemic and hyperglycemic episodes are as important to log as routine readings — most caregivers under-report the mild ones
- Cover: what counts as reportable (dizziness, unusual fatigue, vision changes, slow wound healing, frequent urination changes), how to log an episode
- **Dr. Kaur's Take callout #3** (reserved): which symptoms she'd want flagged immediately vs. noted for the next visit

### H2: Diet and Daily Patterns — Tracking What You Actually Eat
- **Answer-first**: Day-to-day context (meals, activity, stress, illness, sleep) explains blood sugar swings a number alone can't; for Indian households this means tracking staples like rice, roti, and dal portions, not a generic Western food diary
- Cover: practical logging of roti vs. rice choices and portions, dal/vegetable-forward plates, known glucose-friendly foods (karela/bitter gourd, methi/fenugreek, millets — jowar, bajra, ragi), curd, and the effect of eating vegetables/protein before starch; note post-meal walks (commonly cited as reducing post-meal spikes) as a simple habit worth logging alongside food
- **Dr. Kaur's Take callout #4** (reserved): her take on how much daily dietary detail is actually useful vs. overkill for most patients, and any Indian-diet-specific guidance she gives patients
- **Internal link**: none required here unless Kaizen has India-relevant nutrition content; do not force a link to `diabetes-magnesium-vitamin-d` a second time

### H2: Preparing for the Check-Up
- **Answer-first**: Organize the log before the visit — most families arrive with scattered notes instead of a summary
- Cover: what to bring (logbook, medicine list, recent reports, questions), how visit frequency typically works
- **Key stat**: RSSDI (Research Society for the Study of Diabetes in India) guidance recommends glucose monitoring, including HbA1c, roughly every 2-3 months when treatment has recently changed or doses are being adjusted, with self-monitoring frequency individualized by the treating physician (RSSDI Expert Consensus for Optimal Glucose Monitoring in Diabetes Mellitus in India, 2024/2025) — verify the exact interval language against the primary RSSDI PDF before publish rather than the secondary search summary used at brief stage
- **Internal link**: `/blog/family-history/organizing-medical-records` — anchor: "keeping the rest of the family's medical records organized"

### H2: Using Kaizen Health to Keep It All in One Place
- **Answer-first**: A single secure place for logs, medicine lists, and appointment notes removes the "which notebook did I write that in" problem
- Cover: relevant Kaizen features (max 1 brand mention across the piece per the quality gate — keep this section as the single self-promotional touchpoint; given the compliance flag above, confirm this section's existence and framing with Dr. Kaur/legal, not just the disclosure line)
- **Internal link**: `/blog/family-health-monitoring` — anchor: "tracking health trends for the whole family"

### H2: A Physician's Perspective on Family Diabetes Tracking (200-300 words, Dr. Kaur's own voice)
- Reserved entirely for Dr. Kaur — written by her or transcribed from an interview and approved by her
- Suggested prompts to send her: What do you wish every family tracked but few actually do? What's a tracking habit that seems helpful but usually isn't? What changes in a patient's data make you adjust treatment fastest? Anything specific to managing diabetes within a joint-family household worth mentioning?
- Include her full bio block immediately after this section (credentials, practice/hospital affiliation, city, headshot) if not already placed near the top byline

### FAQ Section (5 items, 2-3 attributed to Dr. Kaur)
1. How often should someone with diabetes see their diabetologist? — sourced to RSSDI guidance
2. What should I bring to a diabetes check-up? — editorial, drawing on the outline above
3. **[Dr. Kaur]** What's the one thing families forget to track that you wish they wouldn't?
4. **[Dr. Kaur]** How is tracking different when several family members share caregiving in one household?
5. **[Dr. Kaur, optional third, or editorial]** Is a CGM worth it for most patients in India, or is a glucometer log enough?

### Conclusion (120-150 words)
- Key takeaways (bulleted, 4-5 items pulling from each tracking category)
- Call to action: try Kaizen Health to centralize the log (single brand mention already used above — do not repeat, just link)
- Close by naming Dr. Kaur's contribution again, reinforcing the co-authorship

## Statistics to Include

| # | Statistic | Source | Year | Section |
|---|-----------|--------|------|---------|
| 1 | An estimated 101+ million Indians live with diabetes and 136 million with prediabetes; overall weighted prevalence 11.4%, higher in urban areas | ICMR-INDIAB study (Indian Council of Medical Research), national cross-sectional data collected 2008-2020, widely cited 2024-2025 secondary reporting | Verify against the primary ICMR-INDIAB publication/executive summary before publish, not the secondary aggregator used at brief stage | Introduction |
| 2 | RSSDI guidance: glucose monitoring including HbA1c roughly every 2-3 months when treatment has recently changed; self-monitoring frequency individualized per patient | RSSDI (Research Society for the Study of Diabetes in India), Expert Consensus for Optimal Glucose Monitoring in Diabetes Mellitus in India | 2024/2025 | H2: Preparing for the Check-Up |
| 3 | India's CGM market valued at roughly USD 207.52 million (~₹1,730 crore) in 2025, projected to reach ~USD 399.69 million by 2031; typical 14-day sensor cost ₹2,500-5,500 | Mordor Intelligence, India Continuous Glucose Monitoring Market report | 2025-2026 | H2: Blood Sugar Readings |
| 4 | Diet-timing habits (vegetables/protein before starch, short walks after meals) are commonly cited by Indian clinical-content sources as reducing post-meal blood sugar spikes | Verify against a primary clinical source (e.g., a hospital or RSSDI patient-education page) before publish — the brief-stage source was a secondary health-content aggregator, not sufficiently authoritative to cite as-is | Verify before publish | H2: Diet and Daily Patterns |

Note: three of four statistics above need primary-source verification before publish (marked inline) — the brief-research pass used secondary aggregators for ICMR-INDIAB and the diet-timing claim. Run `/blog factcheck` on the draft before it goes to Dr. Kaur, not after.

## Evidence-Backed Section Plan

| Section | Claim Focus | Supporting Evidence | Source |
|---------|--------------|----------|--------|
| Intro | Diabetes is common enough that most Indian families will manage it for someone | 101M+ diabetics, 136M prediabetic, 11.4% prevalence | ICMR-INDIAB — verify primary source before publish |
| Blood Sugar Readings | CGM is a growing but still cost-sensitive option, not a default expectation | CGM market size and per-sensor cost in India | Mordor Intelligence, 2025-2026 |
| Preparing for the Check-Up | Visit/testing frequency is individualized, not one-size-fits-all | RSSDI 2-3 month HbA1c guidance around treatment changes | RSSDI Expert Consensus, 2024/2025 |
| Diet and Daily Patterns | Small, culturally familiar changes (portion, sequencing, post-meal walks) support control without abandoning staple foods | Diet-timing and Indian-food glycemic guidance | Verify against a primary/hospital source before publish |

## Cover Image

| Option | Details |
|--------|---------|
| Photo cover | Pixabay/Unsplash search: "Indian family kitchen," "multi-generational Indian family," "glucometer blood sugar test India" — avoid stock photos that read as Western suburban households, and avoid any visible unrelated brand logos on devices |
| Generated SVG | Not recommended — this is a trust/expertise piece, not data-heavy; a warm, culturally accurate photo suits the physician-partnership framing better than a stat-graphic cover |
| Dimensions | 1200x630 (OG-compatible) |

## Visual Element Plan

| # | Type | Data | Section |
|---|------|------|---------|
| 1 | Image: photo | Hero — Indian family/caregiving context, see Cover Image above | Introduction |
| 2 | Donut or bar chart | Diabetes vs. prediabetes prevalence in India (ICMR-INDIAB) | Introduction or H2: Blood Sugar Readings |
| 3 | Image: photo | Indian diabetic-friendly plate (dal, vegetables, roti, portion-controlled rice) | H2: Diet and Daily Patterns |
| 4 | Photo | Dr. Kaur's headshot | Byline/bio block |

## Competitive Gaps to Exploit
1. Swassth.in's "Diabetes Tracking for Families in India" covers similar ground (family record-keeping, caregiving coordination) but cites zero statistics or sources — a sourced, ICMR/RSSDI-backed piece with a named physician co-author is a direct, defensible upgrade over the closest existing competitor
2. Most Indian diabetes-diet content (Parashospitals, 1mg, Continental Hospitals) covers "what to eat" but not "what to log about what you eat" for appointment purposes — this piece connects diet guidance to the tracking habit specifically
3. Named-physician co-authorship with a real bio, practice affiliation, and direct quotes is a trust signal generic health-content aggregators can't match

## Internal Link Architecture
- **Link TO** (from this new post to existing pages):
  1. `/blog/diabetes-magnesium-vitamin-d` — anchor: "how supplements like vitamin D and magnesium affect blood sugar control"
  2. `/blog/family-history/organizing-medical-records` — anchor: "keeping the rest of the family's medical records organized"
  3. `/blog/family-health-monitoring` — anchor: "tracking health trends for the whole family"
  4. `/blog/family-history/caregiver-guide-aging-parents` — anchor: "coordinating care for an aging parent" (only if it reads naturally for a joint-family Indian context; don't force a US-caregiving-styled link)
- **Link FROM** (update these existing pages to link to this new post once published):
  1. `/blog/diabetes-magnesium-vitamin-d` — anchor: "what else to track between diabetes check-ups"
  2. `/blog/family-history/organizing-medical-records` — anchor: "a condition-specific tracking example: managing diabetes as a family"
  3. The Sep 15 Family Medical Record Organization pillar (not yet published) — add as a cluster spoke link when that pillar ships
- **Pillar connection**: Family Medical Record Organization cluster (bonus spoke, not one of the original 7 counted spokes)
- **Cluster position**: Spoke

## E-E-A-T Signals to Include
- **Experience**: Dr. Kaur's direct clinical perspective (physician-perspective section + attributed FAQ answers) — do not substitute editorial-written "experience" language for her actual contribution
- **Expertise**: Full physician bio block — credentials, specialty (confirm whether "diabetologist," "endocrinologist," or another title is accurate for her), practice/hospital affiliation, city
- **Authority**: Named co-authorship itself is the authority signal; disclose the partnership plainly, pending the compliance check above
- **Trust**: Above-the-fold disclosure, sourced statistics (ICMR-INDIAB, RSSDI), single brand mention limit respected

## Distribution Plan
- **Reddit**: No India-specific subreddit is confirmed reliable enough to name without verification at brief stage — skip for this cycle rather than guess a community name
- **YouTube**: Optional — a short clip of Dr. Kaur answering one tracking question, only if she's willing to record during the review process
- **LinkedIn**: Same-day post tagging Dr. Kaur; ask her to reshare to her own professional network as part of the partnership value
- **Email**: Include in the next weekly newsletter batch; subject line angle: "What your diabetologist actually wants to see between visits"
- **WhatsApp-shareable framing**: given how much health content circulates via WhatsApp forwards in India, make sure the published piece has a clean, single-scroll mobile summary (the TL;DR box) that reads well if screenshotted or forwarded as a link — not a distribution channel Kaizen runs directly, but worth designing for
- **Twitter/X**: Thread hook: "Most diabetes tracking logs miss the context that actually helps your diabetologist. A physician told us what to log instead." 3-4 follow-up tweets pulling from the tracking-category stats above

## Open Items Before Writing (do not start `/blog write` until these are resolved)
1. Resolve the NMC/professional-conduct compliance question above with Dr. Kaur and Kaizen's legal/partnerships contact — this can change whether the piece runs as currently scoped
2. Confirmed disclosure wording, approved by Dr. Kaur / her practice and Kaizen's partnerships contact
3. Dr. Kaur's bio, credentials, specialty title, practice/hospital affiliation, city, and headshot for byline and Person schema
4. Her direct contribution for the 4 pull-quote callouts, the physician-perspective section, and the 2-3 attributed FAQ answers
5. Primary-source verification for the ICMR-INDIAB and diet-timing statistics flagged above (run `/blog factcheck` on the draft before sending it to her)
