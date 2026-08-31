# Editorial Calendar: August 2026

Kaizen Health — built on `reports/blog-strategy-family-health-ai-agents-2026-08-09.md`. Today is Aug 9, so this calendar covers what's already shipped (Aug 1-9) plus a forward plan for the remaining three weeks (Aug 10-31). This supersedes the Week 1-2 rows of `calendars/2026-09-editorial-calendar.md`, which has been revised accordingly (see note at the end).

## Already Published: Aug 1-9
| Date | Title | Cluster | Notes |
|------|-------|---------|-------|
| Aug 4 | Grieving the Years Lost to Caregiving | Caregiving Financial & Emotional Reality | Live |
| Aug 6 | Why Nearly Half of Kidney Transplant Candidates Never Start the Evaluation | Health Topics (uncategorized) | Live |
| Aug 9 | The Hidden Retirement Cost of Caregiving | Caregiving Financial & Emotional Reality | Live |

Three posts in nine days is well above the strategy's 2/week target — the forward plan below returns to 2/week rather than continuing that pace, to protect quality-gate pass rates on the more claim-heavy AI Agents content coming up.

## Publishing Cadence: 2 posts/week (Tue/Thu), Aug 10-31
## Content Mix (Aug 10-31): 4 new / 1 refresh / 1 repurposed

### Week 2: Aug 10-16
| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Tue Aug 11 | New | AI Agents in Family Health: The Complete Guide | pillar-page | AI Agents in Family Health | ai agents in healthcare | Live — shipped Aug 9, ahead of schedule (`/blog/ai-agents`) |
| Thu Aug 13 | New | AI Agent vs. Chatbot: What's the Difference for Health Data? | faq-knowledge | AI Agents in Family Health | ai agent vs chatbot healthcare | Live (`/blog/ai-agents/agent-vs-chatbot`) |

### Week 3: Aug 17-23
| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Tue Aug 18 | New | Copilot Health, ChatGPT Health & Amazon Health AI, Compared | comparison | AI Agents in Family Health | ai health assistant comparison | Brief needed — run `/blog factcheck` pre-publish, makes direct competitor claims |
| Thu Aug 20 | New | Is It Safe to Share Family Medical Records with AI? | data-research | AI Agents in Family Health | is ai safe for medical records | Brief needed |

National Senior Citizens Day is Fri Aug 21 — the Aug 20 post lands the day before; reference it in distribution copy rather than delaying publish to land exactly on the day.

### Week 4: Aug 24-30
| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Tue Aug 25 | Update | Medicare GLP-1 Weight-Loss Coverage (verify current CMS guidance) | - | Health Topics | medicare glp1 coverage | Freshness review — check CMS source directly before touching `dateModified` |
| Thu Aug 27 | Repurposed | Repurpose "The Hidden Retirement Cost of Caregiving" (Aug 9) into a LinkedIn carousel + short-form video script | - | Caregiving Financial & Emotional Reality | cost of caregiving | Use `/blog repurpose` — good timing while the post is still fresh |

### Week 5: Aug 31
| Day | Type | Title | Template | Cluster | Target Keyword | Status |
|-----|------|-------|----------|---------|---------------|--------|
| Mon Aug 31 | New — Physician Partnership | Managing Diabetes as a Family: What to Track Between Doctor Visits | how-to-guide (checklist-style, see partnership plan below) | Family Medical Record Organization (bonus spoke, cross-links Sep 15 pillar) | what to track diabetes between doctor visits | **PUSHED to September — new target Tue Sep 8, expected live mid-September.** The brief/draft/review cycle slipped, exactly as the "most likely to move" note anticipated. A brief (`briefs/managing-diabetes-as-a-family-dr-kaur-brief.md`) and a blocked draft (`app/(site)/blog/family-history/managing-diabetes-as-a-family/page.tsx`, marked NOT PUBLISH-READY) exist. Remaining blockers: Dr. Kaur's direct contributions (4 quote callouts, physician's-perspective section, 2 attributed FAQ answers), NMC professional-conduct compliance sign-off, paid-partnership disclosure wording, her bio/headshot/credentials, a real hero image, and `/blog factcheck` on the ICMR-INDIAB and diet-timing stats. Now tracked on `calendars/2026-09-editorial-calendar.md` (Physician Partnership Piece section). The full deliverable spec stays below. |

## Content Mix This Month (Aug 1-31, actual)
- New posts: 4 shipped in the Aug 10-31 window (AI Agents pillar + 3 spokes: Aug 11, 13, 18, 20), plus 3 published Aug 1-9 = **7 new for the month**. The Aug 31 physician-partnership piece (added 2026-08-14) slipped to September, so the month landed at the original 4-post forward plan, not 5.
- Freshness updates: 1 (Medicare GLP-1, Aug 25 — completed; `dateModified` set to 2026-08-25 after STAT's Aug 11 reporting on prior-authorization access barriers)
- Repurposed content: 1 (Retirement Cost of Caregiving → LinkedIn carousel + short-form video script, Aug 27 — completed, in `repurposed/`)
- Content types shipped: 1 pillar-page, 1 faq-knowledge, 1 comparison, 1 data-research (plus the 3 already-published Aug 1-9 pieces). The how-to-guide partnership piece moves to September.
- Tue/Thu cadence held for Weeks 2-4. The partnership piece was always tracked off-cadence on the Aug 31 buffer day; moving it to September does not disturb the weekly plan.

## Topic Cluster Progress (as of Aug 31 target state)
| Cluster | Pillar | Spokes Published | Spokes Planned | Coverage |
|---------|--------|-------------------|-----------------|----------|
| AI Agents in Family Health | Publishing Aug 11 | 0/8 → 3/8 by Aug 20 | 5 remaining, rolls to September | 0% → ~44% by month end |
| Caregiving Financial & Emotional Reality | Not started | 2/6 (`grieving-the-years-lost-to-caregiving`, `retirement-cost-of-caregiving`, both published this month) | 4 remaining | 33% |
| Family Medical Record Organization | Not started | 5/7 (no change this month; the +1 bonus Dr. Kaur piece slipped to September, target Sep 8) | Pillar planned for September | 71% (bonus piece now lands in September, not August) |
| Genetic & Hereditary Risk Awareness | Not started | 4/4 (no change this month) | Pillar planned for September | 100% spokes, pillar pending |
| Health Topics (uncategorized) | N/A | +1 this month (kidney-transplant, Aug 6); Medicare GLP-1 refreshed Aug 25 | Not yet mapped to a pillar | Decision deferred to Q4 planning |

## Content Decay Report
| Post | Material Change Evidence | Performance Context | Priority | Action |
|------|---------------------------|----------------------|----------|--------|
| `health/medicare-glp1-weight-loss-coverage` (Jul 10, 2026) | **Confirmed (Aug 25 review).** Core facts held (dates, drugs, $50 copay, BMI rules, the 18-month extension through Dec 31 2027). New material development: STAT (Aug 11, 2026) reported the Bridge program's prior-authorization/documentation burden is now a real access barrier, with some primary care practices weighing opting out — this contradicted the post's "shouldn't bottleneck at the physician level" line. | Unavailable — no GSC export | Done | Revised the "How the process works" section with the STAT-sourced access-barrier reality, added an FAQ ("what if my doctor's office won't help with the prior authorization?"), set `dateModified="2026-08-25"` |
| `pregnancy-genetic` (Feb 5, 2025) | Not yet confirmed — 19 months old, no specific change identified | Unavailable | Medium — verify | Deferred to September (see revised Sept calendar) |
| Everything else | No confirmed change identified | Unavailable | Low | Monitor; no action this month |

## Distribution Schedule
| Post | Publish Date | LinkedIn | Reddit | Email | YouTube |
|------|--------------|----------|--------|-------|---------|
| AI Agents in Family Health: The Complete Guide | Aug 11 | Same day | +2-3 days (r/CaregiverSupport / r/AgingParents, genuine insight only) | Next weekly batch | Yes — companion demo video (pillar) |
| AI Agent vs. Chatbot | Aug 13 | Same day | — | Next weekly batch | — |
| Copilot Health, ChatGPT Health & Amazon Health AI, Compared | Aug 18 | Same day | +2-3 days | Next weekly batch | — |
| Is It Safe to Share Family Medical Records with AI? | Aug 20 | Same day, reference National Senior Citizens Day (Aug 21) | +2-3 days | Next weekly batch | — |
| Medicare GLP-1 refresh | Aug 25 | Same day | — | Next weekly batch | — |
| Retirement-cost-of-caregiving repurpose | Aug 27 | Carousel post (assets in `repurposed/retirement-cost-of-caregiving-linkedin-carousel.md`) | — | Include in batch | Short-form script ready: `repurposed/retirement-cost-of-caregiving-shorts-script.md` |
| Managing Diabetes as a Family (Dr. Kaur partnership) | ~~Aug 31~~ → Sep 8 target | Moved to September — see `calendars/2026-09-editorial-calendar.md` distribution schedule | — | — | — |

## Seasonal Hooks
- **National Senior Citizens Day — Fri Aug 21, 2026**: the Aug 20 AI-safety post is timed to land the day before; reference the observance directly in distribution copy rather than in the post itself.
- No confirmed August/September diabetes-specific observance day was identified for this piece — do not time distribution copy to one without verifying a source first. American Diabetes Month (November) is a plausible future repurposing hook for this same piece once it's live; revisit in Q4 planning rather than delaying this publish.

## Physician Partnership Content: Dr. Prabhleen Kaur — "Managing Diabetes as a Family"

> **Status (updated 2026-08-30): moved to September.** New target is Tue Sep 8, with a realistic live date of mid-September given Dr. Kaur's review turnaround. The full spec below is unchanged and remains the plan of record; September tracking lives in `calendars/2026-09-editorial-calendar.md` under "Physician Partnership Piece." Brief done (`briefs/managing-diabetes-as-a-family-dr-kaur-brief.md`); draft exists but is marked NOT PUBLISH-READY pending the items in "Process and open items" below.

Added to this calendar 2026-08-14. This is the first paid-partnership piece on the calendar, so it's tracked separately from the standard editorial pipeline above — it has different inputs (a named co-author with credentials, review turnaround outside editorial's control, a paid relationship requiring disclosure) and different value criteria (did the partnership actually deliver visible physician participation, not just a byline).

**Audience scope, confirmed 2026-08-14**: this piece targets readers in India (India-domestic), not the diaspora and not a shift for the rest of the calendar — the rest of this month's and September's plan stays US-centric as written above. Research, statistics (ICMR-INDIAB, RSSDI), diet references, and currency (INR) are India-specific for this post only. Full detail in `briefs/managing-diabetes-as-a-family-dr-kaur-brief.md`, which also flags an added compliance item: India's National Medical Commission professional-conduct rules constrain how a registered physician can be named in paid commercial content — confirm the format is permissible with Dr. Kaur and legal before drafting, on top of the standard disclosure requirement below.

### Why this cluster placement
The topic doesn't fit an existing content pillar as a genetic-risk or AI-agent piece — it's practical, ongoing chronic-disease tracking for a caregiving family. The closest strategic fit is **Family Medical Record Organization** (organizing/tracking what matters between appointments) rather than **Genetic & Hereditary Risk Awareness**, where the existing `diabetes-magnesium-vitamin-d` post already lives. Cross-link both: the existing post for readers curious about risk factors, and the Sep 15 Family Medical Record Organization pillar once it ships (add the cross-link retroactively to that pillar's launch, or forward-reference it here if this piece publishes first).

### Making sure the partnership is worth the spend
A paid collaboration that reduces to one pull-quote from Dr. Kaur under an editorial byline under-delivers on what's being paid for. The brief for this piece (run `/blog brief` next) should build in, not bolt on:

| Element | Placement | Purpose |
|---------|-----------|---------|
| Co-author byline | Title block: "By Kaizen Health Editorial Team, reviewed and co-authored by Dr. Prabhleen Kaur" + her credentials/specialty | E-E-A-T trust signal; makes the paid relationship visible in the credit, not just a footer disclosure |
| Physician bio block | After intro, before first H2 | Full bio, headshot, practice/credentials — this is deliverable content she should approve, not editorial-written filler |
| 3-4 "Dr. Kaur's Take" pull-quote callouts | One per major tracking category (e.g., glucose logs, medication timing, symptom/red-flag tracking, diet notes) | Reserved space, left as a placeholder in the draft editorial sends her — not pre-written and rubber-stamped |
| Closing physician perspective section (200-300 words) | Before the conclusion, own H2 ("A Physician's Perspective on Family Diabetes Tracking" or her preferred framing) | Meaningfully hers — written by her or from an interview, not paraphrased by editorial |
| 2-3 FAQ answers in her voice | Within the FAQ section | Direct attribution ("Dr. Kaur says...") on the questions families most often ask at appointments |
| Paid-partnership disclosure | Top of post, above the fold | Required — this is a compensated relationship; disclose plainly (e.g., "This article is a paid partnership with Dr. Prabhleen Kaur") rather than only in a byline credential line |

### Process and open items
1. Editorial drafts the structural skeleton and all non-physician content now (research, tracking-category sections, general guidance) — do not wait on her for the parts that don't need her clinical voice
2. Send the draft to Dr. Kaur with the reserved callouts/sections clearly marked as blank/TODO, not filled in with placeholder text she has to overwrite
3. Confirm with her (or Kaizen's legal/partnerships contact) the disclosure language and whether her employer/practice requires its own review before she can be quoted publicly
4. Get her final bio, headshot, and credentials in writing for the byline and Person schema
5. Track deliverable status here until publish — update the Aug 31 row's Status column as the brief, draft, and her review move through each stage

## Reconciliation Note: September Calendar Revised

Because this August plan now covers the AI Agents in Family Health pillar page plus Spokes 1-3, `calendars/2026-09-editorial-calendar.md` has been updated to remove the duplicate Sep 1/3/8/15 entries for those same pieces and resequence the remaining Spokes (4-8), the Family Medical Record Organization pillar, and the Genetic & Hereditary Risk pillar across September instead. See that file for the current September plan.

## Next Steps
1. ~~Run `/blog brief` for the Aug 11 pillar guide~~ — done; pillar + Spokes 1-3 shipped Aug 11-20
2. ~~Briefs/outlines for the Aug 13, 18, 20 pieces~~ — done; all three live
3. ~~Run `/blog factcheck` on the Aug 18 comparison piece~~ — done; shipped Aug 21
4. Check the September calendar for the resequenced plan and the carried-over Dr. Kaur partnership piece
5. GSC - what product details should a family caregiver record before reordering for an older parent?
6. **Dr. Kaur partnership piece (now Sep 8 target):** the brief is done. Next is sending the marked-up draft to Dr. Kaur with the reserved callouts/sections blank, per "Process and open items" above
7. Confirm paid-partnership disclosure language, NMC professional-conduct compliance, and any practice/employer review requirement with Dr. Kaur before the draft goes out
8. Collect Dr. Kaur's bio, headshot, and credentials for the byline and Person schema
9. Run `/blog factcheck` on the ICMR-INDIAB and diet-timing statistics in the diabetes draft before publish