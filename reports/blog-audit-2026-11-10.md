# Blog Audit Report for November 10 2026

The editorial calendar understated progress: four planned posts are already drafted, but all four remain unpublished. The calendar also scheduled more releases than its stated weekly capacity. The updated [November calendar](../calendars/2026-11-editorial-calendar.md) separates drafted work from published work, protects the Thanksgiving release and moves remaining work into an explicit [December calendar](../calendars/2026-12-editorial-calendar.md).

This is a repository health and calendar audit, not a completed content-quality scorecard. The canonical `scripts/analyze_blog.py` is absent from the repository and installed blog skill directories. Per-post scores, category scores, score bands and average score are unavailable; no replacement rubric was used. The older August report used a manual score and is not comparable to a canonical batch analysis.

## Summary

| Metric | Finding |
|---|---|
| Article source files found | 29 in `app/(site)/blog/` |
| Published posts listed in blogData | 24 |
| Additional published article | 1, `family-history/research`, manually included in sitemap |
| Drafts | 4, ids 25–28 |
| Average score and score bands | Not available; canonical analyzer missing |
| Critical content-quality issues | Not measured |
| Missing literal blog-link targets | 0 in the scoped source scan |
| Contextual inbound-link candidates | 7 published articles lack literal inbound article links; not confirmed site orphans |
| Contextual outbound-link candidates | 9 published articles lack literal outbound blog links; shared layout links still exist |
| Confirmed cannibalization | Not measured; 6 intent boundaries reviewed |
| Confirmed traffic decay | Not measured; GSC/GA4 unavailable |

The inventory treats pages using `ArticleLayout` as articles and excludes the blog index, category and pagination routes. JSON contains one record per article, with `file`, nullable `score`/`categories`, `issues` and source-derived `metadata`.

## Prioritized action queue

| Priority | Finding | Action and status |
|---|---|---|
| 1 | Calendar says “not drafted” for four completed drafts and treats past planned dates as progress | Fixed calendar statuses; drafts and publication flags remain unchanged |
| 2 | Stated 1/week cadence conflicts with seven scheduled new posts and a six-post mix count | Fixed weekly release sequence and explicit carryover |
| 3 | Thanksgiving article is still a draft with a November 12 date | Release target protected; final review and deployment verification remain required |
| 4 | Dr. Kaur tracker row says not deployed, contrary to October 23 user confirmation and published listing | Fixed tracker row 13; no new live verification claimed |
| 5 | New demand research could duplicate drafts or become an unsupported popularity claim | Added five candidate briefs; used recurring themes and explicit intent boundaries; separate research evidence register |
| 6 | GLP-1 coverage post's last recorded change is August 25 | Scheduled current CMS review; no claim of stale facts or traffic loss |
| 7 | Generic family-records content overlaps with seasonal and planned coordination content | Differentiate intent before briefing; no merge or redirect without evidence |
| 8 | Canonical analyzer and performance data unavailable | Complete scoring and rendered crawl in a future audit; do not infer quality from age or file structure |

## Technical and AI extraction review

`ArticleLayout` is a server component. It renders the article body, one shared H1, `BlogPosting` and `BreadcrumbList` schema. Its draft check calls `notFound()` before rendering. `lib/blog.ts` filters drafts from listings and related posts; `app/sitemap.ts` derives published article URLs from that filtered inventory. `WhenPublished` suppresses links to draft targets.

For listed posts, the layout uses `blogData` dates for schema and visible updates; the sitemap uses the same fields. The unlisted `research` article and its manual sitemap entry both use January 8, 2025. The older calendar's February date was not a reliable source for that page. Schema author type depends on `authorUrl`; organization publishers and breadcrumbs are defined centrally. FAQ markup is optional and is not evidence of rich-result eligibility. Rendered schema validation was not performed.

`createPageMetadata` supplies canonical URLs, social metadata and descriptions; descriptions are normalized at 160 characters. Title preview length is a review signal rather than a pass/fail threshold. The shared layout provides hero alt-text fallback, but this pass does not establish meaningful alt coverage for every in-article image.

`app/robots.ts` allows `/` for wildcard crawlers and disallows `/join/`. No explicit exclusions for GPTBot, ClaudeBot, PerplexityBot, Googlebot or Google-Extended were found in that source. This does not establish deployed access, asset access or crawler-specific indexing behavior. `public/llms.txt` exists, but its curated links omit some published articles and some descriptions need alignment with current article framing. Treat it as a maintenance review, not an indexing requirement.

Source sitemap coverage includes all 24 listed published posts plus the unlisted research article, and excludes the four drafts. Canonical generation uses `https://kaizenhealth.io` with normalized trailing slashes. Live HTTP status, redirects, canonical consistency, hreflang, deployed noindex, crawler rendering and blocked assets were not crawled. Nothing in this documentation update changes routing or production settings.

SKIPPED: GSC, GA4, URL Inspection, Core Web Vitals and query-to-URL overlap; credentials/exports unavailable. SKIPPED: canonical analyzer scores; script unavailable. SKIPPED: live technical crawl and source-by-source medical fact-check; outside this calendar update pass. The absence of those checks is a limit on the audit, not a passing result.

## Intent overlap review

| Pair or group | Recommendation |
|---|---|
| Caregiving pillar / retirement-cost / grief article | Differentiate: broad overview versus retirement calculations versus grief and identity |
| Getting Paid / R8 care-setting comparison | Differentiate: program eligibility versus selecting and funding a care setting |
| R2 workload sharing / organizing-medical-records / shared-family-medical-record | Differentiate: task ownership and handoff versus filing versus access |
| Thanksgiving draft / documenting-family-health / family-history landing article | Differentiate: seasonal conversation versus ongoing collection versus rationale |
| R9 discharge / C2 cancer coordination | Differentiate: transition home versus recurring oncology visit packet |
| C1 respite / existing grief article / prior R5 research idea | Replace the unscheduled R5 brief with practical respite planning; link to grief content rather than repeating it |

These are editorial overlap risks, not proven keyword cannibalization. No GSC query mapping, embeddings or SERP overlap was available. No redirect or merge is recommended from title similarity alone.

## Contextual link review

Seven published articles have no inbound literal article-link candidate in this scan. All seven are listed in blogData, so the index/category/related-post system can still link to them. They must not be reported as confirmed orphans. Candidate contextual link additions are:

| Article | Candidate source articles to review |
|---|---|
| managing-diabetes-as-a-family | caregiver-guide-aging-parents; organizing-medical-records |
| ai-health-assistant-breathing-problem | ai-agents; agent-vs-chatbot |
| colorectal-cancer-risk | family-health-monitoring; documenting-family-health |
| creatine | caregiver-guide-aging-parents; sunshine |
| sunshine | creatine; caregiver-guide-aging-parents |
| medicare-glp1-weight-loss-coverage | managing-diabetes-as-a-family; caregiver-guide-aging-parents |
| kidney-transplant-evaluation-gap | organizing-medical-records; caregiver-guide-aging-parents |

These suggestions require paragraph-level relevance checks, especially before connecting health-condition articles. Nine articles have no literal outbound blog links: diabetes-magnesium-vitamin-d, colorectal-cancer-risk, creatine, sunshine, organizing-medical-records, genetic-risk-score-heart-disease, medicare-glp1-weight-loss-coverage, kidney-transplant-evaluation-gap and family-history/research. Shared related links mean these are not confirmed dead ends.

The JSON link graph is source-only: literal `href` and `url` attributes are candidates. It does not evaluate `WhenPublished`, dynamic link expressions or the shared layout graph. No missing article targets were found within that scope. Links were not rewritten during this calendar update.

## Freshness review

| Article or group | Last recorded update | Review priority | Reason and effort |
|---|---|---|---|
| Medicare GLP-1 coverage | August 25, 2026 | High, verify | Coverage terms can change; light source review, moderate edit only if facts changed |
| AI comparison and AI safety content | Recent 2026 publication dates; see inventory | Medium, verify | Provider policies, availability and pricing can change; source review before reuse |
| Drafts ids 25–28 | Planned dates only | High before release | Confirm dates and source claims at actual release; not a stale-published-content finding |
| pregnancy-genetic | September 10, 2026 | Low absent a specific new trigger | Already reviewed recently; do not call it stale from its original publication date |
| family-history/research and older health articles | 2025 dates; see inventory | Medium, inspect sources | Age alone does not establish inaccuracy; verify evidence before promotion or repurpose |

No traffic decay has been established. Link-only changes and review-without-change do not justify a new modification date under the existing editorial policy.

## Per-article inventory

Scores and category scores are unavailable for every row. Dates below come from repository data; dates on drafts remain planned values and are not publication evidence.

| Article | Status | Recorded update or planned date | Contextual outbound candidates | Score | Source issue count |
|---|---|---|---|---|---|
| [family-history/family-health-history-thanksgiving](../app/(site)/blog/family-history/family-health-history-thanksgiving/page.tsx) | Draft | 2026-11-12 | 5 | N/A | 1 |
| [caregiving/when-your-parent-refuses-help](../app/(site)/blog/caregiving/when-your-parent-refuses-help/page.tsx) | Draft | 2026-11-10 | 5 | N/A | 1 |
| [caregiving/getting-paid-to-care-for-a-family-member](../app/(site)/blog/caregiving/getting-paid-to-care-for-a-family-member/page.tsx) | Draft | 2026-11-03 | 4 | N/A | 1 |
| [caregiving/real-cost-of-family-caregiving](../app/(site)/blog/caregiving/real-cost-of-family-caregiving/page.tsx) | Draft | 2026-10-29 | 4 | N/A | 1 |
| [family-history/managing-diabetes-as-a-family](../app/(site)/blog/family-history/managing-diabetes-as-a-family/page.tsx) | Published | 2026-10-21 | 4 | N/A | 0 |
| [ai-agents/voice-ai-next-generation](../app/(site)/blog/ai-agents/voice-ai-next-generation/page.tsx) | Published | 2026-10-20 | 3 | N/A | 0 |
| [family-history/family-history-depression-children](../app/(site)/blog/family-history/family-history-depression-children/page.tsx) | Published | 2026-09-18 | 4 | N/A | 0 |
| [family-history/shared-family-medical-record](../app/(site)/blog/family-history/shared-family-medical-record/page.tsx) | Published | 2026-09-15 | 8 | N/A | 0 |
| [ai-agents/ai-health-assistant-breathing-problem](../app/(site)/blog/ai-agents/ai-health-assistant-breathing-problem/page.tsx) | Published | 2026-09-05 | 4 | N/A | 0 |
| [ai-agents/is-ai-safe-for-medical-records](../app/(site)/blog/ai-agents/is-ai-safe-for-medical-records/page.tsx) | Published | 2026-08-20 | 5 | N/A | 0 |
| [ai-agents/ai-health-assistant-comparison](../app/(site)/blog/ai-agents/ai-health-assistant-comparison/page.tsx) | Published | 2026-08-21 | 5 | N/A | 0 |
| [family-history](../app/(site)/blog/family-history/page.tsx) | Published | 2025-01-05 | 1 | N/A | 0 |
| [pregnancy-genetic](../app/(site)/blog/pregnancy-genetic/page.tsx) | Published | 2026-09-10 | 5 | N/A | 0 |
| [diabetes-magnesium-vitamin-d](../app/(site)/blog/diabetes-magnesium-vitamin-d/page.tsx) | Published | 2025-01-12 | 0 | N/A | 1 |
| [cancer/colorectal-cancer-risk](../app/(site)/blog/cancer/colorectal-cancer-risk/page.tsx) | Published | 2025-01-25 | 0 | N/A | 1 |
| [family-history/documenting-family-health](../app/(site)/blog/family-history/documenting-family-health/page.tsx) | Published | 2025-01-10 | 1 | N/A | 0 |
| [family-history/caregiver-guide-aging-parents](../app/(site)/blog/family-history/caregiver-guide-aging-parents/page.tsx) | Published | 2026-08-20 | 5 | N/A | 0 |
| [health/creatine](../app/(site)/blog/health/creatine/page.tsx) | Published | 2025-01-15 | 0 | N/A | 1 |
| [health/sunshine](../app/(site)/blog/health/sunshine/page.tsx) | Published | 2025-02-01 | 0 | N/A | 1 |
| [family-history/organizing-medical-records](../app/(site)/blog/family-history/organizing-medical-records/page.tsx) | Published | 2025-01-20 | 0 | N/A | 1 |
| [family-health-monitoring](../app/(site)/blog/family-health-monitoring/page.tsx) | Published | 2025-12-20 | 1 | N/A | 0 |
| [heart/genetic-risk-score-heart-disease](../app/(site)/blog/heart/genetic-risk-score-heart-disease/page.tsx) | Published | 2026-07-02 | 0 | N/A | 1 |
| [health/medicare-glp1-weight-loss-coverage](../app/(site)/blog/health/medicare-glp1-weight-loss-coverage/page.tsx) | Published | 2026-08-25 | 0 | N/A | 1 |
| [caregiving/grieving-the-years-lost-to-caregiving](../app/(site)/blog/caregiving/grieving-the-years-lost-to-caregiving/page.tsx) | Published | 2026-08-04 | 3 | N/A | 0 |
| [health/kidney-transplant-evaluation-gap](../app/(site)/blog/health/kidney-transplant-evaluation-gap/page.tsx) | Published | 2026-08-06 | 0 | N/A | 1 |
| [caregiving/retirement-cost-of-caregiving](../app/(site)/blog/caregiving/retirement-cost-of-caregiving/page.tsx) | Published | 2026-08-09 | 5 | N/A | 0 |
| [ai-agents](../app/(site)/blog/ai-agents/page.tsx) | Published | 2026-08-11 | 8 | N/A | 0 |
| [ai-agents/agent-vs-chatbot](../app/(site)/blog/ai-agents/agent-vs-chatbot/page.tsx) | Published | 2026-08-13 | 5 | N/A | 0 |
| [family-history/research](../app/(site)/blog/family-history/research/page.tsx) | Published, unlisted | 2025-01-08 | 0 | N/A | 2 |

## Deliverables and next audit

Updated the November calendar and tracker, created the December continuation, saved the [community research](caregiver-community-research-2026-11-10.md) and this report's [JSON inventory](blog-audit-2026-11-10.json). Existing August audit files were preserved. No article was published or altered.

Once the canonical analyzer is available, run `/blog analyze` on the caregiving pillar draft first because it anchors the pending cluster. Run `/blog flow optimize` on the pillar and the existing records guides for evidence extraction and citation checks. A future rendered crawl should resolve the link candidates before any “orphan” or “dead-end” count is published.

## Validation

`yarn lint` completed with 0 errors and 6 warnings in unchanged application files. Local Markdown links, release weekdays, article counts, draft counts and null-score fields were checked. `git diff --check` passed. No build was run because only editorial Markdown and audit JSON changed. No code, publication flags, production configuration or commits were changed.
