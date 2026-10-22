# Blog Quality Report: Managing Diabetes as a Family: What to Track Between Doctor Visits

**Analyzed:** 2026-10-21 · `/blog analyze`
**Target:** Dr. Kaur's returned Word document (`Managing Diabetes as a Family What to Track Between Doctor Visits.docx`), the article-draft portion only (about 2,100 words)
**Supersedes:** `drafts/managing-diabetes-as-a-family-analysis-2026-09-10.md` (that report scored the placeholder page, not her returned text)
**Companion docs:** `briefs/managing-diabetes-as-a-family-dr-kaur-brief.md`, `drafts/managing-diabetes-as-a-family-dr-kaur-review.md`

---

**Score: 66/100, Below Standard as delivered. Projected 84 to 88 once the page is built and the fixes below land.**

The document is a Word file, so the technical and SEO categories cannot be measured from it (no schema, no meta, no images, no URL). Those points are scored on what is present in the document. The article text itself is strong. The score is low because of the build work still to do and four source-fidelity problems, not because of the writing.

## Score Breakdown

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Content Quality | 25 | 30 | Strong India-specific coverage and real physician voice in every section. Byline bracket is unbalanced, her closing section arrived formatted as headings, spelling mixes "hypoglycemic" and "hypoglycaemic". |
| SEO Optimization | 14 | 25 | Title and heading topic are consistent. No meta description, no URL, one internal link only as a placeholder ("we link to our existing guide on that here"). |
| E-E-A-T Signals | 12 | 15 | Named physician with credentials, bio and clinic. Source fidelity loses points for four unverified or unsupported claims (below). |
| Technical Elements | 4 | 15 | No schema, OG tags, or real images in the file. Lists are present. All of this is built in the page. |
| AI Citation Readiness | 11 | 15 | Key Takeaways box is citable and entities are clear. No comparison table. |
| **Total** | **66** | **100** | |

## Editorial Style Diagnostics (descriptive only, no score effect)

- **Sentence-length variation:** mean 25.0 words, standard deviation 12.9 (84 sentences). Moderate to high. The long sentences cluster in the physician sections, which is expected for a clinician's own voice.
- **Configured style phrases:** none of the 17 listed phrases present.
- **Em dashes (U+2014):** 7 in the article text, against the project's prose rule. Some fall inside Dr. Kaur's own paragraphs. Replace with commas or full stops and tell her we only changed punctuation.
- **Vocabulary diversity sample:** 0.35 type-token ratio on about 2,100 words. Normal for a how-to with repeated domain terms (reading, log, patient, diabetologist).

## Issues Found

### Critical (blocks publish)

- [ ] **The NMC question is unanswered.** The returned document still contains the "BEFORE YOU START" section with all three questions (is named paid co-authorship okay under her registration, does her practice or hospital need to approve, is the disclosure wording acceptable) and no answer to any of them. The draft disclosure line was also deleted from the document, so nothing in the file shows she saw or accepted the wording. The September calendar lists this as a publish gate. Her returned text does not clear it.
- [ ] **The practice named in the byline is a skin and medicine clinic and the byline credential string is malformed** ("[MBBS, MD (Medicine), Consultant Physician, Dr. Chawla's Skin & Medicine Clinic, Zirakpur, Punjab, India" has an opening bracket and no closing one). Confirm the exact wording and whether the clinic must approve a paid piece that names it.
- [ ] **Four source claims are not verified against a primary source** (details below). Until they are, the "evidence-backed" framing in the diet section and Key Takeaways overstates what we can show.
- [ ] **Internal drafting notes are still in the document** ("Hi Dr. Kaur...", the "[PLACEHOLDER]" and "[STAT CALLOUT]" and "[PRODUCT CALLOUT]" markers, "[YOUR INPUT NEEDED]" labels). None may reach the page.

### Fact-check results (run 2026-10-21)

The Lancet, Diabetes Care and SAGE pages returned HTTP 403 to automated fetch, so those rows were corroborated by search, not read in full. Mordor Intelligence was read directly.

| Claim | Result | Action |
|-------|--------|--------|
| 101 million with diabetes, 136 million with prediabetes (ICMR-INDIAB, Lancet Diabetes & Endocrinology, 2023) | Confirmed by multiple news summaries of the paper. Survey of 113,043 adults aged 20+ across 31 states and union territories, 2008 to 2020. Several outlets describe these as modelled estimates extrapolated to 2021. | Keep. Say "estimated" (already done) and add "modelled estimate" in the intro. Link text should say 2023 publication, 2008 to 2020 survey. |
| Shukla et al., Diabetes Care 2015: 28.6%, 36.7%, 16.8% lower mean glucose at 30, 60, 120 minutes | Percentages confirmed. It was a **pilot study of 11 adults** on metformin, crossover design. | Keep numbers. State "small pilot study of 11 adults" in the text. "Controlled study" in Key Takeaways oversells it. |
| Shukla: "73% lower post-meal glucose rise" | **Not confirmed** in anything I could read. | Do not publish until someone reads the full letter and confirms what the 73% measures (incremental area under the curve, peak, or something else). This number is in Key Takeaways and the stat callout. |
| Shukla: vegetables and protein "15 minutes before" carbohydrate | **Not confirmed.** A later prediabetes study from the same group used a 10 minute gap. | Read the full letter. If it does not say 15 minutes, remove the number. |
| India CGM market USD 207.5 million in 2025, nearly double by 2031 (Mordor Intelligence) | Confirmed: USD 207.52 million in 2025, USD 399.69 million in 2031 (1.93x), 11.55% CAGR 2026 to 2031. | Keep. |
| 14-day CGM sensor costs ₹2,500 to ₹5,500 | **Partly unsupported.** The same Mordor report puts a 14-day Libre sensor at about ₹5,000 and a BeatO rental program at ₹3,500 per fortnight. Nothing there supports ₹2,500. | Change to "about ₹3,500 to ₹5,000" and attribute it, or hedge with "as of 2026". |
| RSSDI: glucose monitoring including HbA1c reassessed roughly every 2 to 3 months when treatment changes | **Not confirmed.** The linked SAGE paper was not readable. The search found only that HbA1c reflects the past 2 to 3 months, which is a different statement from a reassessment interval. | Read the consensus text. If the interval is not stated, reword to what it does say. The same claim sits in Key Takeaways and the check-up section. |

### High Priority

- [ ] **Dr. Kaur's closing section arrived as five paragraphs styled as Heading 3.** Render them as body paragraphs under the one H2 ("A physician's perspective on family diabetes tracking"). Left as headings they would create five bogus H3 entries in the contents rail and the schema outline.
- [ ] **Her four "[YOUR INPUT NEEDED]" inputs are written as first-person physician statements, not as quotes.** Present them as "Dr. Kaur's take" callouts under her name, one per section, so attribution is explicit. Do not edit their meaning.
- [ ] **The two attributed FAQ answers (what families forget to track, how sharing caregiving changes tracking) were not returned.** The FAQ in the earlier draft had placeholders for them and her document has no FAQ section. Either send her the two questions again or drop those two items. Do not write them for her.
- [ ] **The paid-partnership disclosure line is missing from the document.** It must appear above the fold on the page. Wording needs her sign-off (see Critical).
- [ ] **Model Dr. Kaur as `Person` in Article schema and add `reviewedBy`** (or `MedicalWebPage`). The previous page passed only an Organization author.
- [ ] **Brand mentions exceed the one-mention guideline** (the "Using Kaizen Health" H2, the ProductCallout, and the FAQ line). Trim to the callout plus one contextual mention.

### Medium Priority

- [ ] Readability is likely at grade 9 to 10, above the consumer band. The long enumerations in "Diet and daily patterns" and the RSSDI sentence in "Preparing for the check-up" are the main causes.
- [ ] No glucometer versus CGM comparison table. The CGM paragraph plus the price fix would support a small three-row table.
- [ ] Physician content mixes spellings ("hypoglycaemic" in her closing section, "hypoglycemic" elsewhere). Standardize to one. The site uses US spelling in prose, but she may prefer British, so confirm.
- [ ] Intro says "five categories" but the guide has four tracking sections (readings, medicines, symptoms, diet) plus check-up preparation. Fix the count.
- [ ] External links need `rel="noopener noreferrer"` with `target="_blank"`.
- [ ] Internal links: add `/blog/diabetes-magnesium-vitamin-d` (the doc says "we link to our existing guide on that here"), `/blog/family-history/organizing-medical-records`, `/blog/family-history/shared-family-medical-record`, and `/blog/family-history/caregiver-guide-aging-parents`.

### Low Priority

- [ ] Stat callout labels ICMR-INDIAB "2023" while the intro says data were collected 2008 to 2020. Make both say "published 2023, survey 2008 to 2020".
- [ ] Recount `readTime` after final edits (expect about 11 to 12 minutes).
- [ ] Hero image needed. `agent-instructions/Hero-Image.md` has the generation brief. Her headshot (`IMG_1301.jpg`, 1065 x 1600) is an author image only, not a hero.

## Quick Stats

- **Word count:** about 2,100 (article text only)
- **Paragraphs:** about 30, none over 150 words
- **H2 sections:** 7 (none as questions); answer-first in about 5 of 7
- **Statistics:** 5 sourced, 3 of those with an unverified element (73%, 15 minutes, 2 to 3 months), 1 with an unsupported range (sensor price)
- **Images:** 0 in the file; 2 placeholders; 1 headshot supplied separately
- **Charts:** 0 (one stat callout)
- **Internal links:** 0 live (1 placeholder) · **External links:** 4 (tier 1: Lancet, Diabetes Care, RSSDI journal; tier 3: Mordor Intelligence)
- **Schema types:** none in the file
- **OG/social tags:** none in the file

## Recommended Actions

1. **Close the compliance gate before anything is wired to go live.** Get Dr. Kaur's written answer to the three NMC questions, the final disclosure wording, and the exact byline wording. If her practice must approve, record that too.
2. **Read the full Shukla letter and the RSSDI consensus** (both returned HTTP 403 to automated fetch, so this is a manual read) and settle the 73%, the 15 minutes, and the 2 to 3 month interval. Until then, soften or remove those three claims.
3. **Build the page** from her text, keeping her words intact apart from punctuation (em dashes) and spelling consistency, with her sections as attributed callouts and the closing section as one H2.
4. **Fix the polish list** (brand mentions, table, internal links, `rel` attributes, schema as `Person` plus `reviewedBy`).
5. **Re-run `/blog analyze`** on the built page. Expect 84 to 88 once the fact-check items and the build are done.

Run `/blog rewrite <file>` to apply the polish items automatically after the page exists.
