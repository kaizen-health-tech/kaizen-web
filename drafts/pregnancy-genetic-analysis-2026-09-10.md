# Blog Quality Report: Genetic Conditions During Pregnancy

**Analyzed:** 2026-09-10 · `/blog analyze`
**Target:** `app/(site)/blog/pregnancy-genetic/page.tsx` (published; `components/Blog/blogData.tsx` id 2)
**Context:** Scheduled for a Sep 10 freshness review (September editorial calendar) to feed the Sep 22 hereditary-risk pillar.

---

**Score: 67/100 — Below Standard (significant rework required)**

> The calendar's instinct to refresh this is right. Scope it as a **substantive rewrite, not a date bump** — the content omits the current standard of care, so moving `dateModified` alone would violate the Substantive Maintenance pillar.

## Score Breakdown

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Content Quality | 18 | 30 | Plain and clean, but thin (~900 words), generic, no data, off-topic CRISPR bullet |
| SEO Optimization | 18 | 25 | Good title/meta/hierarchy; **zero internal links** (orphan page); external links at the floor |
| E-E-A-T Signals | 7 | 15 | No named author or medical reviewer on YMYL content; no authoritative prenatal-screening source (ACOG absent) |
| Technical Elements | 13 | 15 | Real hero + full schema/OG; weak alt text, no `reviewedBy`, stale `dateModified` |
| AI Citation Readiness | 11 | 15 | Citable condition list, but missing the domain's key entities (NIPT, cfDNA) and no table |
| **Total** | **67** | **100** | |

## Editorial Style Diagnostics (descriptive only — no score effect)

- **Sentence-length variation:** low–moderate; mostly uniform short/medium declaratives and bullets.
- **Configured style phrases:** none of the 18 present. No em-dashes in body. Mild filler ("As always, review the results…").
- **Vocabulary:** domain terms (genetic, condition, screening, test, pregnancy) repeat as expected.

## Issues Found

### Critical (rework required for the scheduled refresh)

- [ ] **Zero internal links — the page is an orphan.** Add contextual links to `heart/genetic-risk-score-heart-disease`, `family-history/documenting-family-health`, `family-health-monitoring`, `diabetes-magnesium-vitamin-d`, and the Sep 22 hereditary-risk pillar once live. This is the calendar's stated reason for pulling the update forward.
- [ ] **Omits the current standard of care.** No mention of **NIPT / cell-free DNA (cfDNA) screening**, ACOG's 2020 guidance to offer cfDNA and diagnostic testing to *all* pregnancies regardless of age/risk, first-trimester combined screening, or diagnostic tests (CVS, amniocentesis). A 2026 reader expects all of these. Verify against current ACOG Practice Bulletins / committee opinions and ACMG expanded carrier screening guidance before rewriting.
- [ ] **No authoritative prenatal-screening source.** ACOG is absent. Make ACOG the anchor citation; keep CDC/Mayo as secondary.
- [ ] **Verify reference [3]** — the ACMG URL contains a typo ("Prenatal-Preconeption-…") and ACMG has restructured its site; the link is likely dead. Replace with a current ACMG carrier-screening page or the 2021 ACMG expanded carrier screening statement.

### High Priority

- [ ] **Originality is very low** — generic explainer, no quantitative data (no prevalence figures, no detection-rate ranges, no screening-uptake data), a vague "How AI can help" section, and an off-topic CRISPR/gene-editing bullet that doesn't serve someone currently pregnant. Add real figures with tier-1 citations; cut or refocus the CRISPR bullet.
- [ ] **Self-promotion is disproportionate** — ~5 Kaizen/Kai/product touchpoints plus a full "Tracking and sharing your records" feature-list section in a ~900-word article. Compress to one contextual mention + a single `ProductCallout`, matching the newer posts.
- [ ] **No named medical reviewer** on YMYL content. Add a "Medically reviewed by [clinician]" byline + `reviewedBy` Person schema. The site's default bio already claims clinician review — make it real and visible here.
- [ ] **`datePublished` inconsistency:** page says `2025-01-06`; `blogData.tsx` and the references block say February 2025. Reconcile, and set `dateModified` when the rewrite ships.

### Medium Priority

- [ ] **No summary box** — add a `KeyTakeaways` block (newer posts use it); helps readers and is highly citable.
- [ ] **No table** — a conditions table (condition · inheritance pattern · typically screened via · who's offered screening) would be the most extractable structure on the page.
- [ ] **Thin length** (~900 words; genuine ~3–4 min, not the stated "6 min read"). The topic supports 1,500–2,000 words done well; recount read time after the rewrite.
- [ ] **Hero alt text** just repeats the title — make it descriptive ("Pregnant person reviewing prenatal genetic screening options with a clinician").
- [ ] **Contents-rail labels don't match heading text** on 2 of 5 sections ("potential genetic risks" vs "genetic risks"; "prior to pregnancy" vs "before pregnancy").
- [ ] **FAQ could close the gaps:** add "What is NIPT / cfDNA screening?", "When is CVS or amniocentesis recommended?", and optionally an insurance/cost question.

### Low Priority

- [ ] Inline citation markers render as bare `[1] CDC - "..."` italic spans mid-sentence — consider superscript links to the References block.
- [ ] The "How AI can help" section leads with unsourced capability claims — either cite a study on AI risk-stratification in prenatal screening or soften to product-scoped language.
- [ ] Consider moving the URL under the `pregnancy` category segment for consistency with newer posts (non-urgent; needs a redirect).

## Quick Stats

- **Word count:** ~900
- **Paragraphs:** ~11, none over 150 words
- **H2 sections:** 6 (5 content + FAQ); 0 as questions; answer-first ~4/5
- **Statistics:** 0 quantitative; 3 qualitative claims cited (CDC, Mayo, ACMG); textbook condition facts uncited
- **Images:** 1 real hero (PNG, weak alt text); 0 in-body
- **Charts:** 0
- **Internal links:** 0 ← orphan
- **External links:** 3 (CDC, Mayo, ACMG PDF — verify live); ACOG missing; all `rel` correct
- **Schema types:** Article, BreadcrumbList, FAQPage; no Person / `reviewedBy`
- **OG/social:** present, real OG image
- **Dates:** `datePublished="2025-01-06"` conflicts with `blogData.tsx` and the references block (Feb 2025); no `dateModified`

## Recommended Actions

1. **Scope as a substantive rewrite** via `/blog rewrite` (freshness mode) with a research pass on current ACOG/ACMG prenatal screening guidance.
2. **Fix the standard-of-care gap first:** add NIPT/cfDNA, universal-offer guidance, diagnostic testing (CVS/amnio), expanded carrier screening — each with a tier-1 citation, ACOG as anchor. Verify or replace the dead ACMG link.
3. **De-orphan it:** 4–5 contextual internal links into the genetic/hereditary cluster; inbound links from the Sep 22 pillar when it ships.
4. **Cut promo to one mention + one callout; add originality:** prevalence/detection-rate figures, a conditions table, a `KeyTakeaways` box, a named medical reviewer with `reviewedBy` schema.
5. **On publish:** reconcile `datePublished`, set `dateModified`, recount `readTime`, rewrite the alt text, fix the rail/heading label mismatches.
