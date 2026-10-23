# Analysis and Fact-Check: The Real Cost of Family Caregiving

**File:** `app/(site)/blog/caregiving/real-cost-of-family-caregiving/page.tsx` (committed as `draft: true`)
**Run:** 2026-10-23, after the fixes listed below. This is the internal editorial-readiness heuristic, not a Google ranking factor, and the category scores are my own estimates from the checklist, not output from the `blog-reviewer` agent or the delivery-contract scripts (which expect markdown, not TSX).

## Estimated score: about 87/100 (Strong)

| Category | Est. | Max | Notes |
|----------|------|-----|-------|
| Content Quality | 27 | 30 | Readable (Flesch ease 64, grade 8.2). Original value is synthesis only: the three-ledger frame, the "price your own hours" arithmetic, the one-person-knows-everything section. No original data. |
| SEO Optimization | 23 | 25 | One H1 (layout), 9 H2s, no skipped levels. 7 internal and 9 external links. Descriptive anchors. Inbound links added on 4 posts plus the calculator. |
| E-E-A-T Signals | 11 | 15 | Weakest category. Byline is the editorial team with no named person. "Reviewed by the Kaizen Health editorial team" is not an individual reviewer. No first-hand material, correctly. |
| Technical Elements | 12 | 15 | Article and breadcrumb schema come from `ArticleLayout`. Hero is 1.9 MB PNG (served through `next/image`). Page speed not measured. |
| AI Citation Readiness | 14 | 15 | Answer-first sections, one table with `thead`, FAQ, clear entity. |

Delivery contract gate is 90. This is under it. The gap is mostly E-E-A-T (named reviewer) and visuals (brief planned 10 to 12; the page has 1 hero, 2 bar charts, 1 table, 1 stat trio and no in-body images).

## Style diagnostics (descriptive only)

- Words about 2,180 including FAQ and key takeaways. Brief target was 3,000 to 3,500.
- Average sentence 15.7 words. Longest "sentence" (97 words) is an extraction artifact from list and table text, not prose.
- Em dashes: 0. Configured style phrases: 0.

## Fact-check

Claims checked against primary pages fetched on 2026-10-23.

| # | Claim | Source | Result |
|---|-------|--------|--------|
| 1 | 63 million caregivers, nearly 1 in 4, up 20 million over a decade | AARP release 2025-07-24 | VERIFIED |
| 2 | About $7,200 average out-of-pocket | AARP release | VERIFIED |
| 3 | 6 in 10 employed; half of those report disruptions; nearly half had a major financial impact | AARP release | VERIFIED |
| 4 | 1 in 5 fair or poor health; nearly 1 in 4 struggle to care for own health; nearly 1 in 4 isolated | AARP release | VERIFIED |
| 5 | Nearly 1 in 4 give 40+ hours; a third 5+ years; over half do complex tasks; about 1 in 5 formally trained | AARP release ("just over 20%") | VERIFIED |
| 6 | Nearly 1 in 3 raise a child under 18; 47% of caregivers under 50 | AARP release | VERIFIED |
| 7 | 11.2 million receive some pay; almost 40% say respite would help | AARP release | VERIFIED |
| 8 | Survey of 6,858 caregivers | AARP release | VERIFIED |
| 9 | $7,242 typical; 26% of income; n about 2,400; 2021 | AARP 2021 cost study (n=2,380, March 15 to April 25, 2021) | VERIFIED |
| 10 | About a third report 2+ work strains averaging $10,525 | AARP 2021 cost study | VERIFIED (earlier fetch) |
| 11 | Household "about half", rent or mortgage 30%, home modifications 21% (share of caregivers) | AARP 2021 cost study | PARAPHRASE. Source phrases these as caregiver statements but does not name the base explicitly. |
| 12 | Medical costs 17% | AARP 2021 cost study | **WAS WRONG IN DRAFT, FIXED.** Source: "Medical costs ... accounted for 17% of caregiver spending," a share of dollars, not of caregivers. The draft had it in a "share of caregivers" chart. Removed from the chart; now stated as 17% of spending. |
| 13 | $1.01 trillion, 49.5 billion hours, $20.41 per hour, reference year 2024 | AARP PPI Valuing the Invaluable 2026 update | VERIFIED. Methods report not yet published. |
| 14 | CareScout 2025 medians: $35/hr, $80,080; adult day $95/day, $24,700; assisted living $6,200/month, $74,400; nursing home $315/day $114,975, $355/day $129,575; 25,000+ rates, July to November 2025 | CareScout 2025 release (Genworth investor site) | VERIFIED |
| 15 | MetLife 2011: $303,880 for the average caregiver 50+ caring for a parent, men $283,716 | MetLife study PDF (text extracted locally) | VERIFIED. Link was missing in the draft; added. Wage and Social Security component figures not re-checked (the draft does not use them). |
| 16 | NFCSP funds respite, counseling and training "through local agencies" | ACL NFCSP page | **NOT SUPPORTED AS WORDED, FIXED.** Page says grants go to states and lists information, access assistance, counseling, support groups, training, respite and limited supplemental services. Draft now says "through grants to states." |
| 17 | Eldercare Locator can point you to your area agency on aging | ACL NFCSP page (Eldercare Locator section) | PARAPHRASE. The ACL page says it links visitors to state and local Area Agencies on Aging. The Locator homepage does not say so. |
| 18 | Credit for Caring Act introduced, not law | Congress.gov returned 403 | UNVERIFIED directly. A tracker summary shows referral to House Ways and Means in March 2025 with no later action found. Draft only says it has not become law and points readers to Congress.gov. **Re-check on publish day.** |
| 19 | Medicaid self-directed programs can let participants hire relatives; VA pays a monthly stipend to primary family caregivers of eligible veterans; share of paid caregivers ranges 10% (Iowa) to 28% (New Jersey) | medicaid.gov 1915(j) page; VA PCAFC page; AARP release 2025-10-28 | VERIFIED and linked 2026-10-23. "A few state programs" had no source and was removed. The Medicaid page covers legally liable relatives (spouse, parent) at state option; it does not say friends can be paid. |
| 20 | Caregiving grief has clinical names | Grieving post's sources | Not re-checked here; relies on the existing post. |

## Issues

**Critical (fixed):** claim 12, the 17% base.

**High (fixed):** claim 16 (NFCSP wording); MetLife study had no link.

**High (fixed 2026-10-23):** `retirement-cost-of-caregiving` had the same 17% error in three places (body, FAQ answer, key takeaway, which also said "about half of that spending is household costs"). Corrected. The same wording in `repurposed/retirement-cost-of-caregiving-linkedin-carousel.md` was also corrected; if that carousel was already posted, the posted version still carries the error.

**Medium:** no named author or reviewer; no in-body images; draft is shorter than the brief; hero PNG is 1.9 MB; page speed unmeasured.

**Also fixed 2026-10-23:** the FAQ said "We cover how to find out what your state offers in a separate article." That article (Getting Paid to Care) is scheduled Nov 3, after this post publishes, so the sentence was removed.

**Low:** Credit for Caring status needs a publish-day check; claim 11 base is inferred.
