# Blog Quality Report: Managing Diabetes as a Family — What to Track Between Doctor Visits

**Analyzed:** 2026-09-10 · `/blog analyze`
**Target:** `app/(site)/blog/family-history/managing-diabetes-as-a-family/page.tsx`
**Context:** Next September piece in the pipeline — Dr. Kaur paid physician partnership. Currently marked NOT PUBLISH-READY; not in `components/Blog/blogData.tsx`.
**Companion docs:** `briefs/managing-diabetes-as-a-family-dr-kaur-brief.md`, `drafts/managing-diabetes-as-a-family-dr-kaur-review.md`

---

**Score: 79/100 — Acceptable (targeted improvements needed)**

> ⚠️ The score measures the editorial scaffolding and sourcing, which are strong. It does **not** mean "near ready." This draft has 7 blocking items and cannot publish in its current state. Read the score as "good skeleton, blocked on completion," not the usual 70–79 "targeted polish."

## Score Breakdown

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Content Quality | 23 | 30 | Excellent India-specific synthesis; one body section empty; readability a touch above the consumer band |
| SEO Optimization | 24 | 25 | Clean H1→H2 hierarchy, consistent topic, page-specific meta; internal links at the floor |
| E-E-A-T Signals | 10 | 15 | Tier 1–3 inline-linked sources, but the named physician's credentials, bio, and Person schema are all unfilled placeholders |
| Technical Elements | 9 | 15 | Schema/OG wired, but zero real images, author modeled as Organization not Person, placeholder strings leak into JSON-LD |
| AI Citation Readiness | 13 | 15 | Citable takeaways and clean entities; placeholder passages and no comparison table hold it back |
| **Total** | **79** | **100** | |

## Editorial Style Diagnostics (descriptive only — no score effect)

- **Sentence-length variation:** moderate–high. Short declaratives ("Organize the log before the visit rather than during it.") mixed with 45–55 word enumerated sentences in the diet and check-up sections.
- **Configured style phrases:** none of the 18 flagged phrases present. **1 em-dash** (`&mdash;`, line 357) in article prose — flag only against the project's U+2014 preference; the rest of the draft already uses commas/parentheses.
- **Repetition:** "reviewed and co-authored with Dr. Prabhleen Kaur" appears in the layout description, meta description, and intro.
- **Vocabulary diversity:** healthy; domain terms (diabetologist, log, reading, track) repeat as expected for a how-to.

## Issues Found

### Critical (blocks publish — mostly "unfinished," not "wrong")

- [ ] The **"Publication status — do not publish as-is" banner is in the returned JSX** (lines 82–107) and renders to readers.
- [ ] **2 of 5 FAQ answers are literal `[RESERVED FOR DR. KAUR …]` strings** (lines 35, 40) — they render on the page *and* get injected into FAQPage JSON-LD. Fill or drop those two items.
- [ ] **4 `PhysicianQuotePlaceholder` blocks + the entire "A physician's perspective" H2 section** (200–300 words) are empty — the physician content that justifies a paid co-authored piece does not exist yet.
- [ ] **Author credentials + bio are `[PENDING]` placeholders** (lines 76–77) that render on-page and flow into `jobTitle` in Article schema.
- [ ] **No hero or supporting images** — 2 `ImagePlaceholder` components. OG image and Article-schema image both fall back to the Kaizen logo.
- [ ] **NMC professional-conduct sign-off** for named paid physician co-authorship is unconfirmed (compliance gate, not editorial).
- [ ] **`datePublished="2026-08-31"` is stale** — set to the real publish date (mid-September per the calendar) and add `dateModified`.

### High Priority

- [ ] Article schema `author` is `@type: Organization` (no `authorUrl` passed) despite a named physician co-author — model **Dr. Kaur as `Person`** (with practice URL / `sameAs`) and/or add `reviewedBy`.
- [ ] Consider **`MedicalWebPage` + `reviewedBy` (Person = Dr. Kaur)** schema for a physician-reviewed medical post — strong E-E-A-T and AI-citation lever currently unused.
- [ ] **Brand mentions exceed the 1-mention guideline:** "a platform like Kaizen Health" (FAQ), the "Using Kaizen Health…" H2 + paragraph, and the `ProductCallout` — 3–4 touchpoints beyond author bio. Trim to the ProductCallout + one contextual mention.
- [ ] **`/blog factcheck` not yet run** (the banner asks for it). The **₹2,500–5,500 14-day sensor price** (used twice, lines 45 and 196) has no citation — add a source or an "as of 2026" hedge.
- [ ] **Path/taxonomy mismatch:** URL is under `/blog/family-history/…` but `categoryKey="health-records"`, so the breadcrumb (Home › Blog › Health records › …) won't match the URL segment. Confirm intended category vs. path.

### Medium Priority

- [ ] Readability sits slightly above the consumer band (est. grade ~9–10). Split the 45–55 word list-sentences in "Diet and daily patterns" (karela/methi/millets/curd) and "Preparing for the check-up" (the RSSDI sentence).
- [ ] **No comparison table** — a glucometer log vs. CGM table (cost, data captured, when it's worth it) would add an extractable structure and answers a question the FAQ already raises.
- [ ] **No worked example** — a short sample "good log entry" (date, reading, meal context, how they felt) would make a how-to more concrete and is highly citable.
- [ ] External links use `target="_blank"` without `rel="noopener noreferrer"` (4 links).
- [ ] Internal links at the floor (3). Add a link to the sibling `diabetes-magnesium-vitamin-d` from the intro, and to the Sep 15 Family Medical Record Organization pillar once live. Confirm the 3 target posts link back.
- [ ] Consider **one chart**: the Shukla glucose reduction at 30/60/120 min (28.6% / 36.7% / 16.8%) is a natural small bar/line chart — better for the visual-media pillar than `StatTrio` alone.

### Low Priority

- [ ] Vary one of the three "reviewed and co-authored with Dr. Prabhleen Kaur" instances.
- [ ] `readTime="11 min read"` — recount after Dr. Kaur's ~400–500 added words (likely 12–13 min).
- [ ] `StatTrio` says "ICMR-INDIAB, 2023" while the intro says data collected "between 2008 and 2020" — make the year attribution consistent (published 2023, data 2008–2020).
- [ ] Confirm `NumberedPoints` renders a semantic `<ol>` (matters for extraction).

## Quick Stats

- **Word count:** ~2,000 publish-ready prose (finished target ~2,500 once physician content lands)
- **Paragraphs:** ~18, none over 150 words
- **H2 sections:** 8 (7 content + FAQ); 0 as questions; answer-first ~5/7
- **Statistics:** 5 sourced with inline links (ICMR-INDIAB/Lancet, Shukla/Diabetes Care, RSSDI consensus, Mordor Intelligence) / 1 unsourced (₹ sensor price, ×2) / `/blog factcheck` not yet run
- **Images:** 0 real, 2 placeholders (alt text drafted); no hero → OG + Article schema image = fallback logo
- **Charts:** 0 (1 `StatTrio` callout, not a chart)
- **Internal links:** 3 (descriptive anchors) · **External links:** 4 (tier 1: Lancet, Diabetes Care, RSSDI; tier 3: Mordor) — missing `rel`
- **Schema types:** Article, BreadcrumbList, FAQPage · missing: Person (Dr. Kaur), `reviewedBy`/MedicalWebPage
- **OG/social:** present (og:image = fallback logo)

## Recommended Actions

1. **Treat as blocked, not near-ready.** 7 Critical items (rendered banner, placeholder FAQ/quotes/bio, empty physician section, no images, NMC sign-off, stale date) gate publication regardless of the 79.
2. **Get Dr. Kaur's inputs in one pass** — NMC/disclosure confirmation, credentials + bio + headshot, 4 quote blocks, the 200–300 word perspective section, 2 FAQ answers. `drafts/managing-diabetes-as-a-family-dr-kaur-review.md` already itemizes this; send it.
3. **On her return:** model her as `Person` (+ `reviewedBy`/`MedicalWebPage`), swap both `ImagePlaceholder`s for real WebP images (pass a hero to `ArticleLayout` so OG + schema stop defaulting to the logo), set real `datePublished`/`dateModified`, remove the status banner and the DRAFT header comment, run `/blog factcheck`, then add to `blogData.tsx` (next id 21) and cross-link from the records pillar.
4. **Polish (non-blocking, `/blog rewrite` can handle this layer):** trim brand mentions to ~2, split the two long list-sentences, add a glucometer-vs-CGM table and a sample log entry, source/hedge the sensor price, add `rel="noopener noreferrer"`.
