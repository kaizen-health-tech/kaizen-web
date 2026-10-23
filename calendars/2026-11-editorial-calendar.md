# Editorial Calendar: Late October to November 2026

Kaizen Health. Generated 2026-10-23. Builds on `calendars/2026-10-editorial-calendar.md` (re-baselined 2026-10-05, updated 2026-10-21) and `reports/blog-strategy-family-health-ai-agents-2026-08-09.md`.

## Publishing Cadence: 1 new post per week, plus small refreshes
## Content Mix: 6 new / 1 freshness update / 1 repurposed (8 actions, Oct 27 to Nov 26)

The cadence stays at one new post per week. That is what shipped between Aug 11 and Oct 21 (ids 16 to 24). A 2/week grid has not been met once, so this plan does not assume it. Items are tagged **Must**, **Should** or **Stretch** so the cut order is decided now, not under deadline pressure.

---

## Status Check (2026-10-23)

Checked against `components/Blog/blogData.tsx`, `app/(site)/blog/`, and `git log`.

| Item | Status |
|------|--------|
| Voice AI post (id 23, `kai-ai`) | **Shipped.** Committed with v1.17.0. |
| Dr. Kaur "Managing Diabetes as a Family" (id 24) | **Live** (confirmed by Snehal 2026-10-23). Snehal confirmed 2026-10-23 that the three fact-check items were cleared before going live. |
| Caregiving pillar "The Real Cost of Family Caregiving" | **Not drafted.** Missed Oct 1 and Oct 8. Still the anchor for the cluster. |
| Getting Paid to Care for a Family Member | Not drafted. |
| Caregiver Tax Breaks and Benefits | Not drafted. Moved to early December (see below). |
| Medicare GLP-1 refresh (`health/medicare-glp1-weight-loss-coverage`) | No commit found. Open Enrollment opened Oct 15, so the trigger has passed. Unconfirmed whether it was checked. |
| AI Agents spokes 4 to 8, two September pillars | Not drafted. Deferred to December. |

Caregiving cluster today: 2 spokes published (`retirement-cost-of-caregiving`, `grieving-the-years-lost-to-caregiving`) plus the older `caregiver-guide-aging-parents` and `organizing-medical-records` posts that support it. No pillar.

---

## New Idea: Reddit Question Mining (r/eldercare, r/caregiving, r/AgingParents)

**Verdict: yes, worth doing, with two conditions.** Real caregiver questions in the caregivers' own words are the best input for keyword and intent research, and they fill the "Caregiving Financial & Emotional Reality" cluster with posts people already search for.

### Data pass (2026-10-23, read-only, via OpenCLI)

Pulled with `agent-reach`'s Reddit backend (OpenCLI, logged-in Chrome session). Scratch files are in the session scratchpad, not in the repo, and contain post text, so they are not kept here.

- **Corpus A, top of year:** 255 posts (r/eldercare 100, r/AgingParents 100, r/caregiving 55; r/caregiving returned only 55).
- **Corpus B, themed searches:** 15 theme queries x 3 subs. Merged and de-duplicated with A: 1,263 posts, Oct 2025 to Oct 2026.
- **Corpus C, unbiased recent sample:** newest 100 plus top-of-month 100 per sub, 382 posts. No keyword selection, so this is the only corpus where theme shares are meaningful.

**Limits.** Theme tagging is keyword matching on title and body, not manual coding. Body matching over-counts (words like "house" or "will" appear everywhere), so treat the title-only share as the floor and title+body as the ceiling. Corpus B reflects the searches I chose, so do not read frequency from it. Corpus C is one month of posts, not a year. r/caregiving is small (about 100 posts in the sample window). A manual read of 50 to 100 posts per theme is still needed before any number is published.

**Finding 1: top-of-year is grief and venting, not questions.** The most upvoted posts are about parents dying, resentment and "am I a bad person." Those posts do not ask for information, so they are poor SEO targets but good for tone. Question posts get far fewer upvotes and are found in the recent sample.

**Finding 2: theme shares in the unbiased sample (n=382).**

| Theme | Title match | Title+body | Notes |
|-------|-------------|------------|-------|
| Choosing and paying for facility or in-home care | 9% | 37% | Largest title-level question theme. 716 comments on title-matched posts |
| Falls, safety, incontinence, daily care | 8% | 47% | Many small practical how-tos |
| Emotional load: burnout, resentment, guilt, grief | 5% | 40% | Highest comment volume (405 on title-matched posts) |
| Legal: POA, estate, guardianship, clearing a house | 4% | 51% (loose) | Body figure is inflated; judge by title |
| Dementia and cognitive decline behavior | 3% | 30% | Mostly "how do I handle X" |
| Hospital, rehab, discharge, appointments | 2% | 29% | Strong in r/eldercare |
| Family coordination (siblings, sharing the work) | 2% | 24% | Low title share, but see Finding 4 |
| Parent refuses help | 2% | 12% | Small share, steady |
| Scams and financial exploitation | 1% | 4% | In corpus A it is high (viral posts), in C it is low |
| Driving | 0% | 9% | Not a title theme |

**Finding 3: question types that recur by title.** Which facility or care option to choose and how to pay (including "what are our options" for a parent who needs help at home); how to find and vet a private-pay or agency caregiver; fall prevention and alert devices; medication changes in a parent (for example stopping a drug); what to do after a hospital or rehab discharge; how to clear out or handle a parent's house; how to cope with anger and guilt toward a parent; and what one tip to give a new caregiver.

**Finding 4: the coordination gap is the Kaizen-fit signal, even though it is rare by title.** Three recent posts, each from a different angle, describe the same problem: one relative holds all the knowledge (pills, appointments, what the nurse said), the rest of the family cannot help because it is "all in her head," and that person burns out; a caregiver who becomes the family's medical translator and tries to re-memorize medication changes; and a question about whether AI care coordination can be trusted with personal medical data. This is the strongest alignment with the product, and the AI-trust post connects to the existing `is-ai-safe-for-medical-records` and `agent-vs-chatbot` posts. Only one post matched each exact framing, so it is a signal to test, not a ranked demand figure.

**What this changes in the plan.** See the revised candidate table below. R2 is reframed from "siblings who won't help" to "the one person who knows everything," which matches how these caregivers describe it and avoids a conflict-and-blame angle.

### Rules for using Reddit as a source

- **Use themes, never posts.** Do not quote, paraphrase closely, or link to individual users' threads. Caregiver posts often contain a parent's diagnosis and family conflict. Treat them like the PHI-adjacent material they are. Write composite, synthetic examples and label them as synthetic.
- **No health or legal claims from Reddit.** Every factual claim needs a tier-1 source (CMS, IRS, VA, state Medicaid pages, AARP/NAC, Alzheimer's Association, peer-reviewed work). Legal topics (power of attorney, Medicaid look-back, guardianship) vary by state. Frame as "how to find out what applies to you" and recommend an elder-law attorney.
- **Reddit distribution is separate from sourcing.** The October calendar already plans r/CaregiverSupport and r/AgingParents sharing 2 to 3 days after publish. Those subs have self-promotion rules. Read each sub's rules first, and draft replies with the `kaizen-social-message-manager` skill. Add value in the thread; do not drop links.

### Candidate topics (R1 to R7 from the first search pass; R2 reframed and R8, R9 added after the data pass)

| # | Theme seen in search | Working title | Template | Kaizen angle | Cluster fit |
|---|----------------------|---------------|----------|--------------|-------------|
| R1 | Parent refuses help; dementia and lack of insight | "When Your Parent Refuses Help: What You Can and Cannot Do" | how-to-guide | Product fit confirmed 2026-10-23: the shared note, which records what a parent can and cannot do. Use it to keep one agreed record of what the parent still manages and where help is needed. Describe it only as a note-type health record: creator edits, shared group reads | Caregiving spoke |
| R2 | One relative holds all the knowledge, others cannot help (reframed after the data pass, Finding 4) | "When One Person Knows Everything About Mom's Care: How Families Share the Load" | how-to-guide | Core product fit: shared note (live) plus shared records, so pills, appointments and what the nurse said are not in one person's head. Family meeting plan as the how-to. Shared note: creator edits, every member of the shared group can read. Do not describe more than that | Caregiving spoke |
| R8 | Choosing and paying for facility or in-home care (largest title-level theme in the unbiased sample) | "Assisted Living, Memory Care or Home Care: How Families Decide, and How They Pay" | how-to-guide | Cost calculator in `/tools`; checklist of records to bring to a facility tour. Verify cost figures against primary sources (Genworth/CareScout, CMS) | Caregiving spoke |
| R9 | After a hospital or rehab discharge: what to ask, what help to arrange | "Hospital Discharge Checklist for Family Caregivers" | how-to-guide | Medication list and records handoff. Strong in r/eldercare | Family Records / Caregiving |
| R3 | Power of attorney, guardianship, resigning as agent | "Power of Attorney Before the Crisis" | how-to-guide | **Parked 2026-10-23.** Kaizen has no power of attorney feature today; whether to build one is a later product decision. A post would be pure education with no product link, and legal content varies by state. Revisit if the feature is decided | Family Records / Caregiving |
| R4 | Affording care; Medicaid asset limits | Fold into the existing "Getting Paid to Care for a Family Member" spoke plus a link to the cost-of-caregiving calculator in `/tools` | how-to-guide | Cost calculator is already live | Caregiving spoke |
| R5 | Burnout, resentment, "is this normal" | Re-scope the planned "Caregiver Depression and Anxiety" spoke to cover resentment and guilt | data-research | Links to `grieving-the-years-lost-to-caregiving` | Caregiving spoke |
| R6 | Is a medical alert button worth it | "Medical Alert Systems: Who Needs One, and What the Alternatives Are" | comparison or listicle | Product claims go stale. Needs a source review before briefing. Not yet scheduled | Healthy Aging |
| R7 | Finding and hiring private caregivers | "How to Hire In-Home Care for a Parent: Questions to Ask" | how-to-guide | Not yet scheduled | Caregiving |

R1, R2, R8 and R9 are the strongest fit. They are decision-point questions a caregiver can act on, and R1 and R2 connect to the live shared note and shared records. Do not describe a power of attorney or legal-document feature in any post; none exists. Confirm every other Kaizen angle against what the app ships before writing it.

**Overlap check:** R9 will sit near `organizing-medical-records` and the unwritten Family Medical Record Organization pillar. R8 will sit near `retirement-cost-of-caregiving` and Getting Paid to Care. R1 and R5 will sit near `grieving-the-years-lost-to-caregiving` and `caregiver-guide-aging-parents`. Run `/blog cannibalization` on each before briefing.

---

## Topic Cluster Progress

| Cluster | Pillar | Spokes Published | Spokes Planned (to Nov 26) | Coverage |
|---------|--------|------------------|----------------------------|----------|
| Caregiving Financial & Emotional Reality | Not published | 2 | Pillar + Getting Paid + R1 + R2 + R5 (depression/resentment) | ~33% now, ~100% if all ship |
| Family Medical Record Organization | Not published | 5 plus Dr. Kaur bonus | Holiday family-history piece | ~70% |
| AI Agents in Family Health | Published | 3 plus comparison, safety post, Dr. Benur, Voice AI | 0 (maintenance) | Spokes 4 to 8 deferred to December |
| Genetic & Hereditary Risk | Not published | 4 existing | Holiday piece cross-links | Pillar deferred |

Rule applied: finish the cluster nearest completion (Caregiving) before opening a new one. The Healthy Aging pillar and R6 stay parked.

---

## Calendar

### Week of Oct 26

| Day | Type | Title | Template | Cluster | Target Keyword | Priority |
|-----|------|-------|----------|---------|----------------|----------|
| Tue Oct 27 | Update | Check `health/medicare-glp1-weight-loss-coverage` against current CMS GLP-1 Bridge terms | - | Health | medicare glp-1 coverage | Should |
| Thu Oct 29 | New | The Real Cost of Family Caregiving: Money, Health, and the Self You Put on Hold | pillar-page | Caregiving (pillar) | cost of family caregiving | **Must** |

Oct 27: update `lastUpdated` only if the terms changed. Otherwise add an Open Enrollment note and leave the date.
Oct 29: goes live two days before National Family Caregivers Month. Use `/tools` cost calculator as the primary data link and the two published spokes as internal links. This is a pillar in six days; if the brief and draft cannot be done by Oct 28, publish on Tue Nov 3 and move everything below by one slot.

### Week of Nov 2 (National Family Caregivers Month begins; American Diabetes Month)

| Day | Type | Title | Template | Cluster | Target Keyword | Priority |
|-----|------|-------|----------|---------|----------------|----------|
| Tue Nov 3 | New | Getting Paid to Care for a Family Member: Medicaid, VA, and State Programs in 2026 (include R4 affording-care section) | how-to-guide | Caregiving (spoke) | get paid to care for a family member | **Must** |
| Thu Nov 5 | Repurposed | Dr. Kaur diabetes piece, social carousel and LinkedIn post | - | Family Records | managing diabetes as a family | Should. Page is live; keep the paid-partnership disclosure on every repurposed asset |

### Week of Nov 9

| Day | Type | Title | Template | Cluster | Target Keyword | Priority |
|-----|------|-------|----------|---------|----------------|----------|
| Tue Nov 10 | New | When Your Parent Refuses Help: What You Can and Cannot Do (R1) | how-to-guide | Caregiving (spoke) | elderly parent refuses help | **Must** |
| Thu Nov 12 | New | Collect Your Family Health History This Thanksgiving | how-to-guide | Family Records / Hereditary | family health history thanksgiving | **Must** (date-bound; needs indexing lead before Nov 26) |

### Week of Nov 16

| Day | Type | Title | Template | Cluster | Target Keyword | Priority |
|-----|------|-------|----------|---------|----------------|----------|
| Tue Nov 17 | New | When One Person Knows Everything About Mom's Care: How Families Share the Load (R2) | how-to-guide | Caregiving (spoke) | sharing caregiving with siblings | Should. Raise to Must: strongest product fit in the data |
| Thu Nov 19 | New | Caregiver Depression, Anxiety and Resentment: What the Research Shows | data-research | Caregiving (spoke), `sleep-mind` | caregiver depression | Should |

### Week of Nov 23

| Day | Type | Title | Template | Cluster | Target Keyword | Priority |
|-----|------|-------|----------|---------|----------------|----------|
| Tue Nov 24 | New | Assisted Living, Memory Care or Home Care: How Families Decide, and How They Pay (R8) | how-to-guide | Caregiving (spoke) | assisted living vs memory care vs home care | Should (Snehal chose R8 as its own post, 2026-10-23). Cost figures need a source check |
| Thu Nov 26 | None | Thanksgiving. Social only: reshare the Nov 12 post | - | - | - | - |

### Cut order if throughput stays at 1/week

Four weeks hold four to five realistic posts. Drop in this order: (1) Nov 24 R8, (2) Nov 5 repurpose, (3) Nov 19 depression and resentment, (4) Oct 27 refresh. Do not drop the pillar, Getting Paid, R1, R2 or the Thanksgiving piece. R8 is the largest question theme in the data, so if it is cut it goes first in December.

### Moved out of this window

- **Caregiver Tax Breaks and Benefits:** early December. Needs `/blog factcheck` against IRS tax year 2026 figures, and year-end planning still applies.
- **AI Agents spokes 4 to 8, Family Medical Record Organization pillar, Genetic & Hereditary Risk pillar:** December calendar. Do not backfill in November.
- **Healthy Aging pillar, R6 medical alerts, R7 hiring in-home care:** parked until Caregiving reaches 75% coverage.

---

## Distribution Schedule

| Post | Publish Date | LinkedIn | Reddit | Email | YouTube |
|------|--------------|----------|--------|-------|---------|
| Caregiving pillar | Oct 29 | Same day, lead with the lost-retirement angle | +2 to 3 days, only where the sub's rules allow; answer a real question | Next weekly batch | Optional companion for pillar |
| Getting Paid to Care | Nov 3 | Same day | +2 to 3 days | Next weekly batch | - |
| Parent Refuses Help (R1) | Nov 10 | Same day | +2 to 3 days | Next weekly batch | - |
| Thanksgiving family history | Nov 12 | Same day, again Nov 24 | - | Include in batch, resend week of Nov 23 | - |
| One person knows everything (R2) | Nov 17 | Same day | +2 to 3 days | Next weekly batch | - |
| Caregiver depression and resentment | Nov 19 | Same day | +2 to 3 days | Next weekly batch | - |

## Content Decay Report

No GSC or GA4 export was available, so performance is unavailable rather than assumed.

| Post | Material Change Evidence | Performance Context | Priority | Action |
|------|--------------------------|---------------------|----------|--------|
| `health/medicare-glp1-weight-loss-coverage` | Open Enrollment opened Oct 15; GLP-1 Bridge terms are new | Unavailable | High | Verify Oct 27 |
| `family-history/caregiver-guide-aging-parents` | Needs inbound links to the new caregiving posts; Dr. Kaur link removed 2026-10-05 and not confirmed restored | Unavailable | Low | Add cross-links when the pillar ships; no date change |
| `caregiving/*` spokes | No factual change; need links to the pillar | Unavailable | Low | Cross-link only |

## Seasonal Hooks

- **National Family Caregivers Month (November):** pillar, Getting Paid, R1, R2, depression and resentment.
- **American Diabetes Month (November):** Dr. Kaur repurpose (page is live).
- **Medicare Open Enrollment (to Dec 7):** Getting Paid to Care and the GLP-1 refresh.
- **Surgeon General's Family Health History Day (Thanksgiving, Nov 26):** Nov 12 post.
- Trend timing for these is from the existing October calendar and has not been checked against Google Trends this pass.

## Decisions Recorded (2026-10-23)

1. **R8 is its own post**, on Tue Nov 24. Getting Paid to Care keeps the paying-through-programs angle; R8 covers choosing between facility and home care and how families pay.
2. **Dr. Kaur page is live** and its fact-check items were cleared before deploy (Snehal, 2026-10-23). The Nov 5 repurpose is no longer gated.
3. **Shared note is live.** It is a health record of type "note." The person who creates it can edit it, and every member of the group it is shared with can read it. R1 and R2 may describe it in exactly those terms.
4. **Power of attorney is not a product feature.** R3 is parked and no post may imply one. Revisit when the product decision is made.

## Open Questions for Snehal

1. Do you want a named outside reviewer for R8 (Medicaid and cost content) and the caregiving pillar, or is "Kaizen Health editorial team" with a not-advice line enough? See the pillar brief's Open Items.

## Next Steps

1. Hand-code 50 to 100 posts per top theme (R1, R2, R8, R9) from the recent sample to confirm the keyword counts before any number is published. Pull the exact questions each post asks and use them as H2s and FAQ entries, written in your own words.
2. `/blog brief` for the Caregiving pillar today. Hard deadline for the draft is Oct 28.
3. `/blog brief` for Getting Paid to Care, then R1 and the Thanksgiving piece.
4. `/blog cannibalization` on R1, R2, R8 before briefing.
5. `/blog factcheck` every legal, Medicaid and VA claim against primary sources.
6. Add each new post to `components/Blog/blogData.tsx` (next id is 25) and `app/sitemap.ts`.
7. Re-run `/blog calendar` in early December for tax breaks and the deferred AI spokes.
