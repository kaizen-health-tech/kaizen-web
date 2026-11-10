# Editorial Calendar for November 2026

Kaizen Health. Updated November 10, 2026. This replaces the October 23 schedule. Source audit: [blog audit](../reports/blog-audit-2026-11-10.md). Topic evidence: [caregiver community research](../reports/caregiver-community-research-2026-11-10.md). December continuation: [December calendar](2026-12-editorial-calendar.md).

Publication override, November 10: at Snehal's request, ids 25, 26 and 27 now have `draft: false` for dates through today. They become public on the next deployment; deployment has not been verified. Id 28 is dated November 12 and remains a draft. This catch-up release overrides the later release targets for ids 25–27.

## Publishing cadence

One article release per week, with small reviews and distribution work alongside it. A completed draft counts as work in progress until its publication flag is cleared and the deployed page is verified. Dates below are editorial targets, not an instruction to publish automatically.

The previous calendar claimed six new posts but scheduled seven, including two releases in each of two November weeks. Its cut order also protected five posts within a four-week capacity. This version uses one release slot per week and moves the remaining work explicitly.

## Status as of November 10

Checked against `components/Blog/blogData.tsx`, article source files, `lib/blog.ts`, `components/Blog/ArticleLayout.tsx`, and `app/sitemap.ts`.

| Article or task | Verified repository status | Next action |
|---|---|---|
| The Real Cost of Family Caregiving, id 25 | `draft: false` set November 10; stored date October 29 retained | Enabled for next deployment; verify deployed route |
| Getting Paid to Care for a Family Member, id 26 | `draft: false` set November 10; stored date November 3 retained | Enabled for next deployment; verify deployed route |
| When Your Parent Refuses Help, id 27 / R1 | `draft: false` set November 10; publication date November 10 retained | Enabled for next deployment; verify deployed route |
| Collect Your Family Health History This Thanksgiving, id 28 | Draft exists; `draft: true`; planned date November 12 | First release target, November 12, to preserve seasonal lead time |
| Managing Diabetes as a Family, id 24 | Not marked draft; live status and fact-check clearance recorded by Snehal October 23 | Correct tracker row 13; repurpose only if capacity allows |
| One Person Knows Everything / R2 | No article route or listing found | Brief for December 8 |
| Choosing Home Care, Assisted Living or Memory Care / R8 | No article route or listing found | Keep as its own article; target December 15 |
| Caregiver depression, anxiety and resentment / R5 | No article route or listing found | Replace broad research brief with practical respite topic, December 22 |
| Medicare GLP-1 review | `dateModified` remains August 25; no evidence here of a later completed source review | Verify current CMS terms November 10–13; record outcome even if no edit is needed |
| November 5 diabetes repurpose | No completion evidence located in calendar/tracker | Unconfirmed; do not mark complete |

There are 29 article source files: 27 posts enabled for publication in blogData, one unlisted published article (`family-history/research`), and one draft. The remaining draft returns 404 through `ArticleLayout` and is excluded from listings and sitemap. Its stored `datePublished` value does not schedule release. The audit report records the earlier, pre-override four-draft snapshot. These are repository findings; deployment was not checked in this pass.

## November schedule

| Date | Work | Article or task | Priority | Completion condition |
|---|---|---|---|---|
| November 10–13 | Review | Medicare GLP-1 coverage source review | Should | Check current CMS eligibility and program terms; log review outcome; change modification date only for substantive changes |
| Thursday November 12 | Release existing draft | Collect Your Family Health History This Thanksgiving, id 28 | Must | Verify sources, consent framing, images and links; release and check deployed route |
| November 10, next deployment | Enable past-date article | The Real Cost of Family Caregiving, id 25 | Requested | `draft: false` set; confirm deployed route and links |
| November 10, next deployment | Enable past-date article | Getting Paid to Care for a Family Member, id 26 | Requested | `draft: false` set; confirm deployed route and links |
| November 10, next deployment | Enable today's article | When Your Parent Refuses Help, id 27 | Requested | `draft: false` set; confirm deployed route and links |
| November 24–26 | Distribution | Reshare Thanksgiving article | Should | Prepare email/social copy; retain a voluntary, privacy-conscious family-history invitation |
| November 26 | No article release | Thanksgiving | — | No extra publication slot |

If a release misses its review gate, move it to the next weekly slot and shift later evergreen work. If the Thanksgiving draft cannot clear review by November 19, use existing family-history content for seasonal distribution and return the draft to backlog. Do not squeeze missed releases into the same week.

## Community findings and editorial response

The November 10 Agent Reach pass searched public discussions in r/eldercare, r/cancer, r/CaregiverSupport, r/CancerFamilySupport, and AgingCare. Recurring needs include relief from constant care, affordable services, division of family work, safe transitions home, and keeping cancer treatment information together. These are editorial priorities inferred from a search-selected sample. They are not measured community-wide prevalence or search-volume rankings.

Direct Reddit/OpenCLI access failed, so this pass used Agent Reach's Exa search backend. Returned discussions were mostly from January–September 2026, with some older results. October and November searches did not establish fresh November activity. The October 23 calendar's reported 382-post corpus and percentages have not been revalidated and do not support the current schedule.

| ID | Topic | Editorial decision | Distinct reader intent |
|---|---|---|---|
| R1 | Parent refuses help | Enabled November 10; next deployment | What a family can try while respecting autonomy and identifying when professional assessment is needed |
| R2 | When One Person Knows Everything About Mom's Care: How Families Share the Load | December 8; retain strong product fit | Assign specific tasks, capture a handoff and agree on updates; avoid another general records guide |
| R8 | Assisted Living, Memory Care or Home Care: How Families Decide, and How They Pay | December 15; retain separate article | Compare care needs, staffing, hours and local total costs; do not duplicate caregiver-pay eligibility |
| C1 / R5 | How to Arrange Respite Care When You Feel Guilty Taking a Break | December 22; replaces broad depression/resentment article | Arrange reliable relief and prepare a handoff; include guilt and support without treating respite as a cure |
| R9 | Hospital Discharge Checklist for Family Caregivers: Before You Bring Someone Home | January 5 provisional | Confirm equipment, medication instructions, training, follow-up and who to contact; keep generic record filing elsewhere |
| C2 | Cancer Caregiver Checklist: Appointments, Medicines, Results and Questions for the Care Team | January 12 provisional | Coordinate across oncology visits and portals; make a reusable visit packet, not treatment recommendations |
| C3 | Working While Caring for Someone With Cancer: Planning Leave and Backup Help | January 19 provisional | Map appointment demands, leave questions and backup coverage; US scope with current DOL sources |
| C4 | What Happens If the Family Caregiver Gets Sick? Make a Backup Care Plan | January 26 provisional | Prepare an emergency handoff, contacts and coverage; distinct from routine sibling task-sharing |
| C5 | How to Get Updates From a Loved One's Care Team When You Live Far Away | Backlog | Establish consent, an agreed contact and a question log; fold into C2 if a separate brief is too thin |
| R7 | How to Hire In-Home Care for a Parent: Questions to Ask | Backlog | Agency vetting, coverage, qualifications and a missed-shift plan; avoid duplicating R8's care-setting decision |

The January sequence is provisional. Recheck the backlog and community evidence in December before assigning deadlines. No new cancer pillar is planned; the first cancer-care article extends the existing family coordination and records work.

## Overlap and linking rules

- Keep the caregiving pillar broad. Link to `retirement-cost-of-caregiving` for retirement calculations and `grieving-the-years-lost-to-caregiving` for grief and identity. Do not repeat those articles' full arguments.
- R2 owns task division and handoffs. `organizing-medical-records` owns filing; `shared-family-medical-record` owns shared access. Link both ways when the new article is published.
- R8 owns the care-setting decision and total cost. Getting Paid owns program eligibility and application routes. Respite owns temporary relief and coverage.
- R9 owns the transition from hospital or rehab to home. C2 owns ongoing cancer treatment coordination. Cross-link rather than copying the same checklist.
- Thanksgiving owns a seasonal conversation. `documenting-family-health` owns ongoing family-history documentation. Keep the seasonal article concise and link to the evergreen guide.
- Check existing and drafted titles, H1s, opening paragraphs and intended reader action before commissioning each brief. Search performance and SERP overlap were unavailable; these are intent boundaries, not confirmed cannibalization findings.

## Sourcing and product boundaries

Use community themes to choose questions and tone. Do not reuse personal stories, usernames, diagnoses or distinctive wording. Public thread links belong only in the internal research record; published articles should cite primary factual sources. Use clearly labeled synthetic examples if needed.

Health, benefits, tax and legal claims need current primary sources and appropriate review before release. State and country differences must remain explicit. Reddit replies are not evidence for eligibility, discharge rights, medication decisions or prognosis. Community discussion about burnout must not become a claim that an app treats depression or replaces professional help.

The shared note is a health record of type “note”: the creator edits it, and members of the shared group can read it (confirmed by Snehal October 23). Confirm other product claims before drafting. Do not invent task assignment, shared note editing, medication alerts, clinical monitoring or a power-of-attorney feature. A printable checklist can work without a product feature.

## Backlog and deferred work

- Caregiver Tax Breaks and Benefits remains unscheduled. First review the tax and benefits references already in the financial drafts before year-end. A standalone tax article needs current IRS evidence and a capacity tradeoff; do not silently add another December release.
- AI Agents spokes 4–8, Family Medical Record Organization pillar, Genetic & Hereditary Risk pillar, Healthy Aging pillar and medical alert comparisons remain backlog. December has four assigned release slots; these items do not all move into December.
- Depression and anxiety evidence can support the respite article. Commission a separate mental-health research article only if it answers a distinct question and has suitable review.
- Empty `sleep-mind` category is not a reason to commission content. Choose categories by the article's intent.

## Distribution and release checks

Prepare LinkedIn and email copy after each article clears review. The diabetes repurpose is optional and must retain the paid-partnership disclosure. Reddit research does not authorize posting; check community rules and obtain a separate instruction before posting or commenting.

For each release, confirm the intended `draft` change, real publication date, visible date/schema/sitemap parity, hero and alt text, contextual links, and deployed response. Draft-only links should remain guarded with `WhenPublished` until their targets are public. Next unused blog id is **29**; keep existing ids 25–28.

Do not move `dateModified` for a calendar edit, a source check with no content change, or a link-only maintenance change. Record the review separately. No GSC/GA4 data was available to establish traffic decay.

## Decisions retained from October 23

1. R8 remains its own article, separate from Getting Paid to Care.
2. Dr. Kaur's article is live and its fact-check items were cleared before deployment, as confirmed by Snehal.
3. Shared-note wording is limited to the confirmed behavior above.
4. Power of attorney is not a product feature; the proposed legal article remains parked.

The earlier question about a named outside reviewer for the caregiving pillar and R8 remains unresolved. Publication targets do not imply that a reviewer has signed off. Assign source and review ownership before release.
