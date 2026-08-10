# Blog Audit Report — Single Post

**Audit Date:** 2026-08-09
**Scope:** Single post only (per request) — `/blog/caregiving/retirement-cost-of-caregiving`
**File:** `app/(site)/blog/caregiving/retirement-cost-of-caregiving/page.tsx`
**Note:** This skill's canonical `scripts/analyze_blog.py` analyzer is not present in this environment (only `SKILL.md` ships here). Scores below were produced by manually applying the same rubric described in the skill directly against the source file, `lib/seo.ts`, `ArticleLayout.tsx`, `Schema/*`, `lib/blog.ts`, `sitemap.ts`, `robots.ts`, and `llms.txt`.

## Score: 86/100

| Content | SEO | E-E-A-T | Technical | AI Citation |
|---------|-----|---------|-----------|--------------|
| 27/30 | 20/25 | 12/15 | 15/15 | 12/15 |

## What's working

- **Answer-first structure**: `KeyTakeaways` box up top gives 5 self-contained, evidence-backed bullets — exactly what AI Overviews/LLM extraction favors.
- **Strong sourcing**: 10 external links, all to primary/authoritative sources (AARP ×3, MetLife/NAC 2011 study, SSA.gov, Congress.gov CRS report + 2 bill texts, Pew Research, CareScout/Genworth). Every major stat is attributed and dated, including an honest caveat that the $303,880 lifetime-loss figure is from 2011 ("treat it as an order of magnitude, not a quote").
- **Concrete, checkable math**: the $18K → $77K contribution-gap walkthrough and the Social Security 35-year-average explanation are exactly the kind of self-contained, quotable passages that get lifted into AI answers.
- **FAQ block** (5 Q&As) is well-formed and independently answerable — good for both `FAQPageSchema` entity markup and passage-level citation.
- **Full schema coverage**: `ArticleSchema`, `BreadcrumbSchema`, `FAQPageSchema` all present and valid; `dateModified` correctly falls back to `datePublished`.
- **Technical**: server-rendered (no client-side gating of content), listed in `sitemap.ts`, `robots.ts` allows all crawlers including GPTBot/ClaudeBot/PerplexityBot, canonical + OG/Twitter cards complete via `createPageMetadata`.
- **No cannibalization**: checked against the two nearest topical relatives — `grieving-the-years-lost-to-caregiving` (grief/emotional) and `caregiver-guide-aging-parents` (practical checklist: home safety, meds, legal). Neither competes with this post's financial/retirement angle. No merge/redirect/differentiate action needed.
- **Meta description**: 157 characters, page-specific, and leads with the sourced $7,242/26% stat — hits the "visible and sourced" bar.

## Issues found

| Priority | Issue | Detail | Recommended Action |
|----------|-------|--------|--------------------|
| 1 | **Zero in-body internal links** | The 30-paragraph body links out 10 times but never links to another Kaizen post. It only gets inbound traffic help from the automatic "Keep Reading" widget and the `/blog` index listing — it does not pass any outbound authority itself, making it a dead-end page. | Add 2–3 contextual links: `/blog/family-history/caregiver-guide-aging-parents` (practical checklist — natural fit from "Protecting your own retirement" or "Dividing the cost" sections), `/blog/caregiving/grieving-the-years-lost-to-caregiving` (emotional counterpart), and `/blog/family-history/organizing-medical-records` (records/insurance/legal — relevant to the family-conversation checklist). |
| 2 | **Missing from `public/llms.txt`** | `llms.txt` lists 11 blog posts under "Family Health & Caregiving Guides" / "Health Topics" but is stale — this post and the 4 other most recent posts (`grieving-the-years-lost-to-caregiving`, `kidney-transplant-evaluation-gap`, `medicare-glp1-weight-loss-coverage`, `genetic-risk-score-heart-disease`) are absent. This is a direct discoverability gap for AI assistants that consult `llms.txt` as a directory. | Add an entry under "Family Health & Caregiving Guides": `[The Hidden Retirement Cost of Caregiving](https://kaizenhealth.io/blog/caregiving/retirement-cost-of-caregiving): What lost wages, paused 401(k) contributions, and Social Security gaps actually cost family caregivers.` Consider a pass to catch up the other 4 missing posts too, though that's outside this post's scope. |
| 3 | **Generic author byline for a finance-adjacent topic** | Byline defaults to "Kaizen Health Editorial Team / Reviewed by healthcare professionals." The post is materially about Social Security, 401(k) mechanics, and retirement math — a health-credential line doesn't match the claims being made, which is a weaker E-E-A-T signal for YMYL-adjacent financial content than a clinical piece would need. | Consider a named reviewer credential suited to the content (e.g., "Reviewed by a CFP®" or elder-law/financial planning credential) via the existing `authorCredentials` prop, if such review actually occurred. Don't fabricate a credential that wasn't real. |
| 4 | **Title tag below ideal band** | `"Retirement Cost of Caregiving \| Kaizen Health"` is 45 characters — inside the 40–60 acceptable range but under the 50–60 ideal band, leaving SERP real estate unused. | Non-blocking; optional tightening if revisited (e.g., include a qualifier like "How Much Does Caregiving Cost..."). |

## Freshness

Published today (`datePublished: 2026-08-09`), `dateModified` not explicitly set (schema correctly falls back to publish date). No staleness — this is a non-issue for now. Flag for review when it's ~12 months old given several dependent stats (AARP 2025/2026 figures, Congress bill status) are time-sensitive and likely to be updated or superseded.

## Not applicable / skipped

- Site-wide dashboards, per-post comparison table, orphan-page graph, and stale-content sweep were skipped — out of scope per "audit only this blog."
- `SKIPPED: credentials unavailable` — GSC/GA4/CrUX field data, Core Web Vitals, and PageSpeed checks (Step 2.5) were not run; no Google API credentials configured in this session.
