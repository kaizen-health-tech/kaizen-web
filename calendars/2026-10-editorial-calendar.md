# Editorial Calendar: October 2026

Kaizen Health — built on `reports/blog-strategy-family-health-ai-agents-2026-08-09.md`. Picks up where `calendars/2026-09-editorial-calendar.md` leaves off. Generated 2026-09-10.

## Publishing Cadence: 2 posts/week (Tue/Thu)
## Content Mix: 6 new / 2 freshness updates / 1 repurposed (9 actions)

October has five Thursdays, so the Tue/Thu grid yields 9 slots (Thu Oct 1, then Tue/Thu weekly through Thu Oct 29). This mix is new-heavy relative to the strategy's default 60/30/10 for one deliberate reason: **October's job is to finish the Caregiving Financial & Emotional Reality cluster** (currently 2/6) and land it 4+ weeks before National Family Caregivers Month in November. Everything else this month is either a genuine material-change refresh (Medicare Open Enrollment opens Oct 15) or a seasonal spoke with a real hook (Breast Cancer Awareness Month, World Mental Health Day).

Active clusters in build-out this month: **Caregiving Financial & Emotional Reality** (completing) and, as a stretch item, **Healthy Aging** (new). That is within the max-3-active guideline, and the Caregiving work is a 4-piece completion of a cluster that already has 2 spokes — not a cold start.

---

## Carryover Risk From September (read first)

As of 2026-09-10, **none of the September forward-plan has shipped yet** — `components/Blog/blogData.tsx` tops out at id 20 (the Dr. Benur guest post, Sep 5). Still pending in September:

- AI Agents Spokes 4–8 (scheduled Sep 1, 3, 8, 17, 24)
- Family Medical Record Organization pillar (Sep 15)
- Genetic & Hereditary Risk pillar (Sep 22)
- Sep 29 records-checklist repurpose
- Dr. Kaur "Managing Diabetes as a Family" partnership piece (target mid-September, gated on her review)

This October plan **assumes the back half of September lands roughly on schedule**. If items slip past Sep 30, they take priority over anything marked _stretch_ below, in this order:

1. Any unfinished **AI Agents spoke** — the cluster's "100% / maintenance only" status this month depends on all 8 being live.
2. The two **September pillars** (Family Records, Hereditary Risk) — three October pieces cross-link them.
3. The **Sep 29 repurpose**.

**Release valves, drop in this order:** (1) the Oct 27 Healthy Aging pillar, (2) the Oct 20 bonus hereditary-risk spoke. Do not sacrifice the Caregiving pillar or its three spokes — that cluster completion is the point of the month.

---

## Editorial Recommendation

If September is still visibly behind by the last week of the month, **run the lighter 8-action version of this calendar**: Caregiving pillar + 3 spokes, both freshness updates, the repurpose, and the Oct 20 hereditary spoke — and defer the Healthy Aging pillar to November. Standing up two net-new pillars (Caregiving + Healthy Aging) in a month that opens with a backlog is how quality slips. The Healthy Aging pillar is a low-urgency housekeeping move (it organizes four already-published posts); it will keep.

---

## Topic Cluster Progress

Assumes September completes. Adjust the "Published" counts down if carryover items slip.

| Cluster | Pillar | Spokes Published | Spokes Planned (October) | Coverage |
|---------|--------|-------------------|---------------------------|----------|
| AI Agents in Family Health | Published Aug 11 | 8/8 + 1 bonus guest spoke (Dr. Benur) — _if all Sept spokes ship_ | 0 new | 100% — maintenance only; run `/blog analyze` across the 9 pieces once complete |
| Family Medical Record Organization | Publishing Sep 15 | 5/7 + 1 bonus (Dr. Kaur, if shipped) | 0 dedicated; 2 gap-fillers (insurance/legal doc checklist, multi-generational record sharing) deferred to November | ~85% |
| Genetic & Hereditary Risk Awareness | Publishing Sep 22 | 4/4 + 1 bonus this month (Oct 20, Breast Cancer Awareness Month) | +1 bonus spoke | 100% spokes, enriched |
| Caregiving Financial & Emotional Reality | **Publishing Oct 1** | 2/6 (`grieving-the-years-lost-to-caregiving`, `retirement-cost-of-caregiving`) → **6/6 by Oct 15** | 1 pillar + 3 spokes | **33% → 100%** |
| Healthy Aging (new — resolves "Uncategorized Health Topics") | **Publishing Oct 27 (stretch)** | 4 existing orphan posts become spokes: `health/creatine`, `health/sunshine`, `health/kidney-transplant-evaluation-gap`, `health/medicare-glp1-weight-loss-coverage` | +1 pillar | 0 → pillar + 4 spokes if it ships |

---

## Week 1: Sep 28 – Oct 4

| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Thu Oct 1 | New | The Real Cost of Family Caregiving: Money, Health, and the Self You Put on Hold | pillar-page | Caregiving Financial & Emotional Reality (pillar) | cost of family caregiving | Brief needed |

Anchors the cluster. Pull the two existing spokes (`retirement-cost-of-caregiving`, `grieving-the-years-lost-to-caregiving`) into the pillar's internal-link structure and forward-link the three spokes below. Publishes 4+ weeks ahead of National Family Caregivers Month (November) for indexing lead time. Use original framing from the existing posts' data (the ~$7,242/yr out-of-pocket figure, lost retirement contributions, "loss of self" clinical literature) rather than restating generic caregiving statistics.

## Week 2: Oct 5 – 11

| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Tue Oct 6 | New | Caregiver Tax Breaks and Benefits You're Probably Missing in 2026 | how-to-guide | Caregiving Financial & Emotional Reality (spoke) | caregiver tax deductions | Brief needed |
| Thu Oct 8 | New | Caregiver Depression and Anxiety: What the Research Shows and What Actually Helps | data-research | Caregiving Financial & Emotional Reality (spoke) — also seeds the empty **Sleep & mind** category | caregiver depression | Brief needed |

**Oct 6** is the financial-reality spoke: dependent-care credit, medical-expense deductions, HSA/FSA rules, Dependent Care FSA, state caregiver credits. Verify every threshold and dollar figure against IRS primary sources for tax year 2026 — this is a `/blog factcheck` piece before publish. Timed ahead of year-end planning and Medicare Open Enrollment.

**Oct 8** is the emotional-reality spoke, timed to **World Mental Health Day (Sat Oct 10)**. Cite tier-1 sources on caregiver mental-health prevalence (CDC, NAC/AARP "Caregiving in the US", peer-reviewed depression-in-caregivers literature). This is the first post to land in the `sleep-mind` category — confirm the category chip renders correctly on a live post.

## Week 3: Oct 12 – 18

| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Tue Oct 13 | Update | Refresh "Who Qualifies for Medicare's $50 Weight-Loss Drug Copay?" (`health/medicare-glp1-weight-loss-coverage`) | - | Health Topics / Aging well | medicare glp-1 coverage | Freshness review |
| Thu Oct 15 | New | Getting Paid to Care for a Family Member: Medicaid, VA, and State Programs in 2026 | how-to-guide | Caregiving Financial & Emotional Reality (spoke) | get paid to care for a family member | Brief needed |

**Oct 13** has a real material-change trigger, not a date bump: **Medicare Open Enrollment opens Oct 15 (runs through Dec 7)**. Re-verify the GLP-1 Bridge copay, the covered-drug list (Wegovy, Zepbound, Foundayo), and eligibility rules against current CMS guidance. Update `lastUpdated` **only if** the program terms actually changed; if they're unchanged, add an Open Enrollment note and leave the date.

**Oct 15** is the third and final new caregiving spoke — publishing it **takes the cluster to 6/6**. Cover Medicaid self-directed/consumer-directed care, the VA Program of Comprehensive Assistance for Family Caregivers, and structured-family-caregiving state programs. Eligibility varies by state; frame as "how to find out what your state offers," not a definitive list.

## Week 4: Oct 19 – 25

| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Tue Oct 20 | New | Hereditary Breast and Ovarian Cancer: What a Family History Actually Changes About Your Screening | data-research | Genetic & Hereditary Risk Awareness (bonus spoke) | hereditary breast cancer family history | Brief needed |
| Thu Oct 22 | Update | Freshness review — `pregnancy-genetic` (if the Sep 10 review slipped), else `family-history/research` | - | Genetic & Hereditary Risk / Family Medical Record Organization | genetic conditions during pregnancy | Freshness review |

**Oct 20** rides **Breast Cancer Awareness Month**. This sits in high-authority-competition space (NCI, ACS, USPSTF, Mayo Clinic) — do not try to out-rank them head-on. Prioritize E-E-A-T, cite tier-1 exclusively, and win on the specific, underserved angle: what a *family* does operationally once a first-degree relative is diagnosed — documenting the pedigree, when genetic counseling is indicated, how risk changes screening age/modality. Cross-link the Sep 22 Hereditary Risk pillar and `heart/genetic-risk-score-heart-disease`. Run `/blog cannibalization` against the pillar and `diabetes-magnesium-vitamin-d` before publish.

**Oct 22** depends on what happened Sep 10: if the September `pregnancy-genetic` freshness review shipped, refresh `family-history/research` (Feb 2025) instead. Either way — verify claims against current ACOG / primary-source prenatal-screening guidance, and add cross-links from the refreshed post to **both** new September pillars regardless of whether any facts changed. Cross-links are not a content change; only move `lastUpdated` if the substance did.

## Week 5: Oct 26 – Nov 1

| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Tue Oct 27 | New _(stretch — first to cut)_ | Healthy Aging After 60: A Family Guide to Staying Ahead of Decline | pillar-page | Healthy Aging (new) | healthy aging guide | Brief needed |
| Thu Oct 29 | Repurposed | Repurpose the Oct 1 Caregiving pillar → downloadable "Caregiver Financial & Wellbeing Checklist" + LinkedIn carousel | - | Caregiving Financial & Emotional Reality | cost of family caregiving | Use `/blog repurpose` |

**Oct 27** resolves the "Uncategorized Health Topics" decision that both prior calendars deferred. Stand up a Healthy Aging pillar that pulls `health/creatine`, `health/sunshine`, `health/kidney-transplant-evaluation-gap`, and `health/medicare-glp1-weight-loss-coverage` into a coherent cluster with proper internal linking. This is housekeeping, not net-new research — **drop it first if September carryover needs the slot.**

**Oct 29** times the repurpose to publish into the first days of **National Family Caregivers Month**. A caregiver financial + wellbeing checklist is strong download material and gives the whole Caregiving cluster a November social payload.

---

## Content Mix This Month

- New posts: 6 (2 pillar-page, 2 how-to-guide, 2 data-research)
- Freshness updates: 2 (`medicare-glp1-weight-loss-coverage`, `pregnancy-genetic`/`family-history/research`)
- Repurposed content: 1 (Caregiving pillar → checklist + carousel)
- Type gap this month: no listicle, comparison, or thought-leadership. Acceptable for a cluster-completion month; rebalance in November.

## Content Decay Report

No GSC/GA4 export was available for this pass, so all performance-trend evidence is marked unavailable rather than assumed. This is a material-change and topic-volatility screen only — a starting queue, not a confirmed decay finding.

| Post | Material Change Evidence | Performance Context | Priority | Action |
|------|--------------------------|---------------------|----------|--------|
| `health/medicare-glp1-weight-loss-coverage` (refreshed Aug 25) | GLP-1 Bridge program is new and volatile; Medicare Open Enrollment opens Oct 15 | Unavailable | High — verify | Re-check CMS terms Oct 13; update only if rules changed |
| `pregnancy-genetic` (Feb 5, 2025) | 20 months old; prenatal genetic-testing guidance/products shift periodically. Status depends on the Sep 10 review outcome — if that shipped, this drops to Low | Unavailable | Medium — verify | Oct 22 review against current ACOG guidance; add pillar cross-links |
| `family-history/research` (Feb 9, 2025) | No confirmed change identified | Unavailable | Low–Medium | Oct 22 fallback slot; add cross-links to both Sept pillars |
| `family-history/documenting-family-health` (Feb 2025) | No confirmed change; will want a cross-link to the Sep 15 Family Records pillar | Unavailable | Low | Fold cross-link into the pillar launch, no standalone edit |
| `health/creatine`, `health/sunshine` (Apr–May 2025) | No confirmed change | Unavailable | Low | Cross-link from the Oct 27 Healthy Aging pillar; no standalone edit |
| AI Agents Spokes 1–3, comparison, `is-ai-safe-for-medical-records` (Aug 2026) | Recent; Big Tech AI-health terms/pricing move fast — watch for CMS/OpenAI/Microsoft/Amazon changes | Unavailable | Low — monitor | Re-screen in the November calendar |

## Freshness Update Queue

| Post | Last Published / Refreshed | Priority | Scheduled |
|------|---------------------------|----------|-----------|
| `health/medicare-glp1-weight-loss-coverage` | 2026-08-25 | High — verify (Open Enrollment trigger) | Tue Oct 13 |
| `pregnancy-genetic` | 2025-02-05 | Medium — verify | Thu Oct 22 |
| `family-history/research` | 2025-02-09 | Low–Medium | Thu Oct 22 (fallback if `pregnancy-genetic` was done Sep 10) |

## Distribution Schedule

| Post | Publish Date | LinkedIn | Reddit | Email | YouTube |
|------|--------------|----------|--------|-------|---------|
| The Real Cost of Family Caregiving (pillar) | Oct 1 | Same day — lead with the lost-retirement-contributions angle | +2–3 days (r/CaregiverSupport, r/AgingParents — genuine insight, not a link drop) | Next weekly batch | Optional companion video (pillar) |
| Caregiver Tax Breaks and Benefits | Oct 6 | Same day | — | Next weekly batch | — |
| Caregiver Depression and Anxiety | Oct 8 | Same day — reference World Mental Health Day (Oct 10) | +2–3 days (r/CaregiverSupport) | Next weekly batch | — |
| Medicare GLP-1 refresh | Oct 13 | Same day — tie to Open Enrollment opening Oct 15 | — | Next weekly batch | — |
| Getting Paid to Care for a Family Member | Oct 15 | Same day | +2–3 days | Next weekly batch | — |
| Hereditary Breast and Ovarian Cancer | Oct 20 | Same day — reference Breast Cancer Awareness Month | +2–3 days | Next weekly batch | — |
| `pregnancy-genetic` / `research` refresh | Oct 22 | Optional — only if the update was substantive | — | Include in batch if substantive | — |
| Healthy Aging After 60 (pillar, stretch) | Oct 27 | Same day | +2–3 days | Next weekly batch | Optional companion video (pillar) |
| Caregiver checklist repurpose | Oct 29 | Carousel post — schedule the push for the first week of November (National Family Caregivers Month) | — | Include in batch | — |

## Material-Change Review Queue (ongoing)

| Post | Review Trigger | Priority | Owner |
|------|----------------|----------|-------|
| `health/medicare-glp1-weight-loss-coverage` | CMS GLP-1 Bridge program changes; Open Enrollment (Oct 15) | High | Editorial |
| AI Agents comparison + `is-ai-safe-for-medical-records` | Copilot Health / ChatGPT Health / Amazon Health AI pricing, HIPAA status, or data-training policy changes | Medium | Editorial |
| `pregnancy-genetic` | ACOG prenatal-screening guidance updates | Medium | Editorial |

Use traffic only as context once a GSC/GA4 export is available; do not update a date without a substantive content change.

## Physician Partnership Follow-Up: Dr. Prabhleen Kaur — "Managing Diabetes as a Family"

Carried over from September (originally Aug 31). Full deliverable spec unchanged — see the "Physician Partnership Content" section of `calendars/2026-08-editorial-calendar.md` and the publish-gate checklist in `calendars/2026-09-editorial-calendar.md`.

- If **not live by Oct 1**, it stays at the top of the queue. Do not open any new physician-partnership outreach until this one ships — one incomplete paid partnership at a time.
- Once live: **American Diabetes Month (November)** is the repurpose hook flagged in the August calendar. Brief that repurpose in late October so it's ready for early November. Do not schedule the repurpose until the source post is actually published.
- Blockers still outstanding as of 2026-09-10: Dr. Kaur's 4 quote callouts + physician's-perspective section + 2 attributed FAQ answers, NMC professional-conduct sign-off, paid-partnership disclosure wording, her bio/headshot/credentials, a real hero image, `/blog factcheck` on the ICMR-INDIAB and diet-timing stats.

## Seasonal Hooks

- **Breast Cancer Awareness Month (all of October)** → Oct 20 hereditary breast & ovarian cancer spoke.
- **World Mental Health Day — Sat Oct 10** → Oct 8 caregiver depression/anxiety spoke; reference directly in distribution copy.
- **Health Literacy Month (October)** → framing for the Medicare GLP-1 refresh and the Healthy Aging pillar (plain-language "what this actually means for your family" angle).
- **Medicare Open Enrollment — Oct 15 to Dec 7** → Oct 13 refresh; also a distribution angle for the two caregiver-financial spokes (Oct 6, Oct 15).
- **Looking ahead to November (brief these in October):**
  - **National Family Caregivers Month** — the entire Caregiving cluster is the payload. Oct 29 repurpose + a sustained November social push.
  - **American Diabetes Month** — repurpose the Dr. Kaur piece *if it has shipped*.
  - **Surgeon General's Family Health History Day = Thanksgiving, Thu Nov 26** — produce a "collect your family health history at the holidays" piece for the Family Medical Record Organization / Hereditary Risk clusters. Brief it in mid-October; publish mid-November for indexing lead time.

## Housekeeping Notes

- **Category consistency:** the Caregiving Financial & Emotional Reality cluster currently splits across `family-stories` (`grieving-the-years-lost-to-caregiving`) and `aging-well` (`retirement-cost-of-caregiving`). Pick a convention for the new spokes — suggest `family-stories` for the emotional pieces (Oct 8) and `aging-well` for the financial pieces (Oct 6, Oct 15) — or raise adding a dedicated category key. Decide before Oct 1.
- **Empty category:** `sleep-mind` ("Sleep & mind") has zero posts. The Oct 8 caregiver mental-health spoke is the natural first entry — verify the category hub page (`/blog/category/sleep-mind`) renders once it has a post.
- Every new post this month must be added to `components/Blog/blogData.tsx` with a unique `id` (next is 21) and a `categoryKey`, or it won't appear in listings.

## Next Steps

1. **Resolve the Carryover Risk section first** — confirm what actually shipped in September before briefing anything below.
2. Run `/blog brief` for the Oct 1 Caregiving pillar, then work the three spokes (Oct 6, 8, 15) in publish order — these four are the month's priority.
3. Run `/blog brief` for the Oct 20 hereditary breast/ovarian cancer spoke; tier-1 sources only.
4. Decide the category convention for caregiving posts (Housekeeping Notes) before Oct 1.
5. `/blog rewrite` the Medicare GLP-1 post the week of Oct 13, after re-checking CMS terms.
6. Run `/blog cannibalization` once the Oct 20 hereditary spoke is drafted — it sits near the Sep 22 pillar, `pregnancy-genetic`, `heart/genetic-risk-score-heart-disease`, and `diabetes-magnesium-vitamin-d`.
7. Once the Caregiving cluster hits 6/6 (after Oct 15), run `/blog analyze` across all six pieces to confirm none scores below 80.
8. Brief the November "family health history at the holidays" piece by mid-October.
9. Re-run `/blog calendar` in early November — full month of National Family Caregivers Month, American Diabetes Month, and the Thanksgiving Family Health History Day hook, plus the two deferred Family Medical Record Organization gap-fillers.
10. Chase a GSC/GA4 export before the November pass so the Content Decay Report can use real performance data instead of "unavailable."
