# Kaizen Health search performance and blog growth analysis

November 10, 2026. Analysis of both supplied Google Search Console exports, current article source, and selected live pages.

Kaizen Health has early visibility but very little blog traffic: **20 article URLs received 1,193 URL-level impressions and four clicks in 28 days, a 0.34% CTR**. The strongest business opportunity is helping families organize and share medical information. Improve those existing guides and connect them to useful templates and tools before expanding into more broad health topics. The sunlight article has the most impressions, but its medical advice needs review before stronger promotion.

The immediate priorities are: correct trust and accuracy problems; refresh the records organization and shared-access guides; improve the sunlight and depression articles; establish AI visibility measurement; and investigate published articles absent from the export. These recommendations are proposals. No article, publication flag, application code, or calendar was changed.

## Data scope and interpretation

Source folders:

- [24-hour export](/Users/darkknight/Downloads/kaizenhealth.io-Performance-on-Search-2026-11-10)
- [28-day export](</Users/darkknight/Downloads/kaizenhealth.io-Performance-on-Search-2026-11-10 (1)>)

All seven CSVs in each folder were analyzed: Chart, Pages, Queries, Countries, Devices, Filters, and Search appearance. Both filters specify **Web (text-based)**. These are not all-channel acquisition reports and contain no app installs, registrations, or revenue. The [calculation record](search-console-analysis-2026-11-10.json) preserves every exported page and query row, country/device rows, totals, and source paths.

| Metric | 28 days | Rolling 24 hours |
|---|---:|---:|
| Exported interval | October 13–November 9 | November 9, 20:00–November 10, 19:00, UTC−08:00 |
| Property clicks | 47 | 0 |
| Property impressions | 3,213 | 150 |
| Property CTR, calculated | 1.46% | 0% |
| Approximate average position | 7.63 | 8.84 |
| Article URLs with impressions | 20 | 11 |
| Article clicks | 4 | 0 |
| Article URL-level impressions | 1,193 | 67 |
| Article CTR | 0.34% | 0% |

Average positions above are impression-weighted calculations from the rounded daily/hourly chart rows. They are approximate. Article totals exclude `/blog`, pagination, category hubs, and the downloadable PDF. Including the two category hubs adds four impressions in the 28-day export.

Important limits:

1. **The windows overlap.** The 24-hour view includes four hours on November 9, which is also in the 28-day view. It is not a before/after comparison. Recent data may be preliminary. Zero clicks in one day does not establish a decline.
2. **Property and page impressions use different aggregation.** The 28-day Pages table totals 3,717 impressions; the chart totals 3,213. The 24-hour Pages table totals 159 versus 150 in the chart. Do not divide page impressions by chart impressions to claim traffic share, or call these differences tracking errors. [Google dimension guidance](https://support.google.com/webmasters/answer/17011259).
3. **Most query information is unavailable.** The 28-day Queries table contains 111 rows, nine clicks, and 864 impressions: 19.15% of chart clicks and 26.89% of chart impressions. The 24-hour table contains 18 rows and 49 impressions, 32.67% of chart impressions. Privacy omissions and reporting limits prevent a complete branded/nonbranded split. [Google query limitations](https://support.google.com/webmasters/answer/17011259).
4. **Queries and pages are separate marginal tables.** A query appearing here does not identify which article ranked for it. Every target URL suggested below is an editorial assignment to validate with a page-filtered query export.
5. Empty Search appearance tables do not prove that structured data is absent, broken, or that AI features never showed the site.

## What the traffic shows

### Stable weekly visibility at a small baseline

| Seven-day interval | Clicks | Impressions |
|---|---:|---:|
| October 13–19 | 12 | 866 |
| October 20–26 | 13 | 788 |
| October 27–November 2 | 10 | 766 |
| November 3–9 | 12 | 793 |

The latest complete week gained two clicks and 27 impressions over the preceding week: +20% clicks and +3.52% impressions. These are small absolute changes. CTR moved from 1.31% to 1.51%; approximate position moved from 6.93 to 7.05. There is no evidence here of a sustained growth breakout or major traffic collapse. Four weeks also cannot establish seasonal effects or long-term decay.

### Most clicks do not land on articles

The homepage received 23 clicks, careers 11, support five, about two, and contact two. Together these five pages account for 43 of 47 clicks, or 91.49%. Articles account for the remaining four clicks. Careers traffic should not be treated as evidence of caregiver acquisition; the export cannot identify visitor motivation or conversion.

The homepage has 1,124 URL impressions and 2.05% CTR. About has 467 and 0.43%; contact has 296 and 0.68%. These deserve entity and search-intent review, but a low CTR alone does not prove their snippets are wrong.

### US first; inspect mobile results separately

The US supplies 2,426 property impressions, 75.51% of the total, and 35 clicks, 74.47%. India follows with 144 impressions and four clicks. Prioritize US caregiver workflows, with clearly labeled country-specific exceptions. Retain the India-specific diabetes article's intended audience rather than rewriting it around US demand.

Desktop has 2,102 impressions, 35 clicks, and 1.67% CTR; mobile has 1,086, 12, and 1.10%; tablet has 25 and zero clicks. Mobile average position is better than desktop, 6.69 versus 8.15, despite lower CTR. Inspect mobile search results, title presentation, and query mix. This comparison does **not** establish a mobile usability or speed defect; no Core Web Vitals data was supplied.

## Blog priorities

The six articles below account for 990 of 1,193 article URL impressions, 82.98%, but only two clicks. Work on them before refreshing every article equally. Priority combines observed demand, business relevance, and accuracy needs; it is not a proprietary ranking score.

| Priority | Article | 28-day clicks / impressions | CTR / position | Recommended work |
|---|---|---:|---:|---|
| P0 accuracy, P1 traffic | Sunlight for older adults | 0 / 432 | 0% / 7.64 | Review sun exposure advice, then improve senior-specific practical value and title |
| P1 | Organizing medical records | 1 / 219 | 0.46% / 8.40 | Put usable checklist and example first; remove repeated sales passages; correct access summary |
| P1 | Shared family medical record | 1 / 79 | 1.27% / 5.38 | Resolve reviewer placeholder; answer sharing/emergency-contact questions; add access matrix |
| P1 | Family history of depression in children | 0 / 110 | 0% / 6.55 | Lead with parent question; distinguish family risk from experimental findings |
| P2 | Vitamin D and magnesium for diabetes | 0 / 83 | 0% / 8.06 | Clarify evidence limits and patient questions; obtain documented clinical review |
| P2, seasonal | Documenting family health history | 0 / 67 | 0% / 7.99 | Shift from broad rationale to collection workflow and worksheet; connect Thanksgiving article |

### Organizing medical records

Current title already matches the task reasonably well. The larger gap is usefulness per paragraph. The guide repeatedly returns to Kaizen features, mixes family and agency audiences, and places its quick checklist near the end. Its FAQ and key takeaways rank allergies below several administrative records. Move emergency-relevant details, including allergies and reactions, into the first usable summary after clinical review.

Proposed title: **Organize a Parent's Medical Records: Checklist and Examples**. Proposed description: **Build a practical record for an aging parent: medications, allergies, contacts, visit notes, and a checklist to keep it current.** Use the checklist promise only when the page actually supplies it prominently.

Recommended opening, subject to editorial review:

> Start with a dated summary of current medicines, allergies, diagnoses, doctors, and emergency contacts. Keep visit notes, test results, insurance details, and relevant legal documents behind it. Choose one person to maintain the main copy and agree how authorized family members can access it.

Add a realistic fictional example, a blank printable version, consistent sample file names, and a simple binder/digital/hybrid comparison. Explain what to do when records are missing and link to the existing [request tracker](https://kaizenhealth.io/tools/medical-records-request-tracker). Link the visit-preparation step to the [doctor visit summary](https://kaizenhealth.io/tools/doctor-visit-summary). Verify that each tool supports the promised workflow before writing the link copy.

Reduce repeated product promotion to a relevant worked example and one contextual CTA. Separate the agency use case into a short optional section or relevant existing product explanation. Review claims such as early risk detection and broad HIPAA compliance against documented product capabilities and legal scope. Their presence is not evidence that the claims are false; the export cannot substantiate them.

Two specific corrections matter:

- The introduction calls 53 million Americans “currently” unpaid caregivers. The linked source now presents the 2025 estimate of 63 million caregivers with an expanded definition. Cite the year and matching population; do not substitute the newer number into an unchanged “unpaid” claim without checking definitions. [National Alliance for Caregiving](https://www.caregiving.org/research/caregiving-in-the-us/).
- The key takeaway implies legal access always requires one of three formal arrangements. HHS also describes circumstances where a provider may share relevant information with a person involved in care, with agreement, non-objection, or professional judgment. Distinguish limited disclosure from full record access, portal access, and personal-representative rights. Have a qualified reviewer reconcile the opening, FAQ, and detailed section. [HHS family and friends guidance](https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html).

### Shared family medical records

This is the most interesting recent business-relevant signal: **20 impressions at position 4.90 in 24 hours**, versus 79 at 5.38 across 28 days. It merits attention, not a growth forecast.

The article's 23-minute framing covers substantial legal detail. Add a short practical answer and a matrix near the top: person/role, information needed, permission route, who confirms access, emergency fallback. Keep detailed law below, with state and health-system qualifications.

The highest-impression relevant visible question asks what platforms let parents maintain shared emergency contacts and medical records: 52 impressions, position 7.35, zero clicks. Add a useful section about platform selection here **if page-filtered queries confirm the match**. Compare capabilities rather than declaring Kaizen the winner: separate logins, permission scope, revocation, export, emergency access, child/teen limitations, and provider portal connectivity. Mark unavailable or unverified features plainly.

Proposed title: **Shared Family Medical Records: Access, Permissions, and Setup**. Proposed description: **Set up shared family medical records with clear permissions, caregiver access, emergency contacts, and a practical checklist.**

The source and live page bio say a qualified reviewer “is being added before publication,” although the page is public and receiving impressions. Complete the review and identify the real reviewer and date. Do not manufacture credentials or simply delete the sentence while preserving an unsupported review claim.

### Sunlight for older adults

This article supplies 36.21% of article URL impressions but no clicks. Visible sunlight queries include “benefits of sunlight” at 22 impressions and position 15.86, while “sun exposure benefits for seniors” has ten at 10.30. The article's aggregate position of 7.64 does not mean it ranks seventh for the broad phrase.

The source and live page recommend 15–30 minutes of outdoor sun exposure as a starting point and tie sunscreen to outings longer than 30 minutes. This needs clinical review before promotion. The American Academy of Dermatology advises against seeking vitamin D through sun exposure and recommends sun protection. Distinguish daylight and outdoor activity from intentional UV exposure, avoid universal exposure prescriptions, and qualify claims about fractures, mood, and immunity. [AAD vitamin D guidance](https://www.aad.org/media/stats-vitamin-d).

After review, proposed title: **Sunlight for Older Adults: Benefits, Risks, and Safer Routines**. Add a practical routine that considers heat, mobility, medications, shade, and indoor daylight options. Cite each substantive claim to the appropriate source. Connect to family caregiving through planning and accessibility, without forcing an AI product pitch into every health section.

### Family history of depression in children

Current H1 leads with “your child's brain”; the description leads with a study about attention to sad faces. A parent seeking family-risk guidance may find those angles less useful than clear next steps. This is an intent hypothesis, not a proven explanation for zero clicks.

Proposed title: **Family History of Depression: What Parents Should Know**. Retain the study as supporting evidence, with its limits. Start with what family history can and cannot indicate, what to record, and what to discuss with a pediatrician. Distinguish association from prediction and experimental measures from clinical screening. Add a named clinical reviewer and a small fictional tracking example. Do not imply that Kaizen can diagnose or predict depression.

### Diabetes supplements and family history documentation

For the diabetes article, proposed title: **Vitamin D and Magnesium for Diabetes: Evidence and Limits**. Answer whether evidence supports routine supplementation, who needs individualized advice, and how to prepare questions for the care team. A clinical reviewer should verify benefit claims, interactions, contraindications, and any dosing discussion. The export provides no query-to-page evidence to justify expanding into a large supplement cluster.

For documentation, the metadata targets “Documenting Family Health History,” while the H1 emphasizes longevity and prevention. Proposed title and H1: **How to Document Family Health History: Questions and Template**. Supply the actual template, fields for unknown information, consent-aware conversation prompts, and a clinician handoff example. Keep separate purposes: this article teaches collection; the organizing guide manages an individual's records; shared records covers access; Thanksgiving provides the seasonal conversation starter.

## Query opportunities and topics to avoid

These are observed query rows, not estimated monthly search volumes. Target URLs are proposed, not measured query-to-page associations.

| Observed query or question | 28-day impressions / position | Proposed response |
|---|---:|---|
| Platforms for shared emergency contacts and medical records | 52 / 7.35 | Shared-records guide: capability comparison and setup example |
| how to family history for healthcare workers | 31 / 6.13 | Validate actual landing URL; improve collection-to-clinician handoff, without pivoting entire blog to professionals |
| managing medical records for parents | 13 / 16.92 | Organization guide: task-led instructions, checklist, internal links |
| family medical history ai agent | 10 / 5.70 | Existing AI agents guide: verified worked example and limitations |
| sun exposure benefits for seniors | 10 / 10.30 | Clinically reviewed sunlight refresh |
| can medication records be shared with caregivers? | 7 / 10.29 | Shared-records guide: permissions, minimum necessary information, revocation |
| organize aging parents medical information | 6 / 7.33 | Organization guide, same intent; no separate near-duplicate article |
| senior care document management | 6 / 22.33 | Start with organization guide; investigate family versus agency intent |
| Caregiver access to teenager versus younger child records | 5 / 4.20 | Shared-records guide: qualified, sourced age/state/provider distinctions |
| Organizing records for a child with chronic illness | 4 / 1.50 | Test a worked example in existing guide before commissioning a new article |
| is copilot health pricing available publicly? | 2 / 1.00 | Maintain verified pricing row in existing comparison; no dedicated article from two impressions |

The 24-hour query “senior care document management” has three impressions at position 2.00, versus six at 22.33 in 28 days. With different mixes and tiny samples, this is a monitoring candidate, not proof of a lasting ranking gain.

Queries such as “kaizen transportation portal,” “kaizen ride service,” “kaizen health group,” and `kaizenhealth.us` suggest substantial name ambiguity in the visible sample. “Kaizen health” alone has 340 impressions and nine clicks, but its intent is also ambiguous. Do not classify all searches containing Kaizen as qualified brand demand.

Ignore unrelated Comcast prompts, “logistics companies in chicago,” generic fragments, and “how to family history for side sleepers” when building the calendar. Their presence does not prove bot traffic, a security issue, or a real content opportunity. The export cannot establish why they appeared.

The current homepage already describes a family health app. Refine consistent identification across homepage, About, team, support, app listings, and Organization markup. Check official account links and company identity for consistency. Avoid targeting unrelated transport or clinic services to recover irrelevant impressions.

## AEO and GEO work that can improve usefulness and visibility

### Build answers with evidence and original value

Use direct answers where they help readers, followed by qualifications, examples, and sources. Do not enforce a magic paragraph length. Retain useful FAQs already present. Add comparison tables when the choice genuinely has comparable dimensions; use numbered steps for workflows.

Google's current guidance emphasizes original, useful content and foundational SEO. It discourages special AI writing, artificial fragmentation, and unnecessary AI files. No special schema is required for generative search. [Google generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

For Kaizen, the strongest original assets would be a clinician-reviewed emergency summary, a records handoff example, a permission-planning worksheet, and a documented demonstration of one real product workflow. Reuse and improve existing tools and downloads. Use fictional records for public demonstrations. Any future research should use a documented, consented method and disclose sample size and limits; do not invent product outcomes or statistics.

### Make authorship and review verifiable

`ArticleLayout` defaults to “Reviewed by healthcare professionals” and a bio claiming licensed-clinician review. Those defaults are not evidence that each article received review. Record the actual author, relevant reviewer, review date, and sources for priority health and legal articles. Use a profile with relevant credentials where available. Preserve editorial-only attribution when that is the true review level.

Keep publisher and person identities distinct in schema. `ArticleSchema` currently chooses `Person` merely when `authorUrl` exists; a future organization profile URL should not turn an editorial organization into a person. Review that logic when adding author pages. This is a source-level maintenance risk, not a demonstrated ranking cause.

### Verify discovery before adding markup

Live checks succeeded for robots.txt, sitemap.xml, the organization guide, shared-records guide, sunlight article, and the three recently enabled caregiver articles. The downloaded organization guide contains its article text, a matching canonical, `BlogPosting`, `BreadcrumbList`, and `FAQPage` JSON-LD. This establishes server-delivered markup on that page, not rich-result eligibility or Google-selected canonical status. A rendered validation and Search Console URL Inspection remain separate checks.

Live robots.txt permits `/` and blocks `/join/`; preserve that private invite-path exclusion. A public page fetching successfully from this machine does not prove every verified search crawler passes the hosting layer.

For ChatGPT search, verify **OAI-SearchBot** access and hosting/IP handling. **GPTBot** controls training and is independent; training permission is not a prerequisite for search inclusion. [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots). Google-Extended is not a Google Search ranking control. [Google crawler documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers).

`public/llms.txt` exists. Its curated list omits the shared-records guide and its newer content. Maintaining it is reasonable housekeeping after higher-priority fixes; it is not a demonstrated traffic lever or a substitute for HTML, internal links, and indexing. Do not add elaborate AI file infrastructure based on this export.

FAQ markup is already present on the sampled guide. Current Google dimension documentation lists FAQ and How-to rich-result fields as deprecated. Do not promise FAQ stars, expanded listings, or AI citation gains from adding more schema. [Google search appearance guidance](https://support.google.com/webmasters/answer/17011259).

### Build contextual paths and independent credibility

Add paragraph-level links along genuine tasks:

- Organization guide: missing-records step to request tracker; appointment step to visit-summary tool; sharing step to shared-records guide.
- Shared-records guide: filing step to organization guide; family history collection step to documentation guide.
- Caregiving guides: preparation step to relevant records guide and existing caregiver checklist.
- Thanksgiving article, once released: worksheet step to documentation guide; documentation guide links back to the seasonal conversation where useful.
- AI guides: worked record example links to organization guide; privacy discussion links to the existing safety article and official policies.

Check existing links before adding duplicates. The earlier repository audit identified link candidates, not confirmed orphan pages. Contextual links should match the paragraph, not arbitrary link quotas.

Johns Hopkins' competing records resource visibly identifies a geriatric physician and supplies practical organization advice. Kaizen should match that clarity of expertise and add a distinctive caregiver workflow or tool. This comparison is qualitative; the research search was not a controlled Google rank or AI citation audit. [Johns Hopkins resource](https://www.hopkinsmedicine.org/health/expert-qa/medical-records-getting-organized).

After the assets are useful, seek genuine feedback and editorial inclusion from caregiver organizations, patient advocates, and relevant clinicians. Prepare a short demonstration video with a transcript. Measure actual referral visits and citations. No outreach, posting, or directory submissions were performed, and mass mentions or self-awarded “best app” rankings are not recommended.

## Missing visibility and publication checks

The repository currently enables 27 listed posts plus one unlisted research article; Thanksgiving remains a draft. The earlier November audit records a pre-override snapshot of four drafts. The current calendar explains the later change. Do not treat the older snapshot as current publication state.

Eight currently enabled articles are absent from the 28-day Pages export:

- AI health assistant breathing problem
- Voice AI next generation
- Getting paid to care for a family member
- Real cost of family caregiving
- When your parent refuses help
- Caregiver guide for aging parents
- Medicare GLP-1 weight-loss coverage
- Genetic conditions during pregnancy

Absence means no reported page impressions in this export; it does not prove exclusion from Google's index. The breathing article appears in the 24-hour export with four impressions. The three recently enabled caregiver posts return public content in live checks and appear in the live sitemap. Their previous draft state can explain an unavailable traffic history, but exact first-publication dates were not established from deployment records.

Inspect the older caregiving pillar, Medicare article, pregnancy article, and voice article in URL Inspection. Check Google-selected canonical, indexing status, last crawl, rendered content, and inbound links. Verify mobile Core Web Vitals separately. Do not merge, redirect, or noindex articles solely because they have few impressions. No full backlink audit, sitewide rendered crawl, field performance audit, or indexing report was supplied.

## Execution and measurement

### First two weeks

1. Resolve reviewer attribution and review the sunlight guidance. Correct the organization guide's statistics and access summary with appropriate reviewers.
2. Refresh organization and shared records together. Add useful examples, prominent checklists, tool links, and concise metadata. Preserve established URLs.
3. Set the AI baseline and verify indexing of older absent articles. Log changes and deployment dates in Search Console annotations or a change register.
4. Keep the November 12 Thanksgiving release only if its existing review gate clears. Link it to the evergreen collection guide. This is a recommendation consistent with the calendar, not publication authorization.

### Weeks three and four

Refresh depression and family-history documentation; refresh diabetes supplements after clinical review. Keep major changes staggered where practical so results remain interpretable. No new standalone article is justified by a single two- or four-impression question. Prefer testing useful sections in existing guides first.

### Following 60 days

Use approximately two maintenance slots for each new article, as an editorial allocation rather than a ranking claim. Prioritize record organization, caregiver access, and appointment handoffs when deciding future topics. Fit the existing December calendar around evidence; avoid creating a second disconnected calendar. Review demand after eight weeks before commissioning a new condition or comparison cluster.

For the six priority articles, 990 impressions currently generate two clicks. Holding those impressions fixed, 1% CTR would generate about ten clicks and 2% about twenty. That is roughly eight or eighteen additional **page clicks**, respectively. These are arithmetic scenarios, not forecasts or promised site-level gains. Significant growth also requires reaching more relevant searches; snippet improvements alone have a low ceiling at this baseline.

### Measurement register

| Measure | Baseline or next capture | Review method |
|---|---|---|
| Organic article clicks | 4 per supplied 28 days | Matching 28-day page-filtered cohort, with absolute counts |
| Article URL impressions and CTR | 1,193 and 0.34% | Same URL set; do not mix property and URL aggregation |
| Relevant visible queries | Examples in query table | Track records/access/family-history intent; keep ambiguous brand separate |
| US mobile article traffic | Not available as a joint slice | Export page plus country/device filters before comparing |
| Google AI impressions | Not supplied | Capture dedicated generative AI report by page and date |
| ChatGPT and other AI referrals | Not supplied | Analytics source/referrer and landing page; verify measurement coverage |
| AI citations and recommendations | Not measured | Fixed prompts, platform, date, locale, source URLs, and separate citation/mention/recommendation fields |
| Useful reader actions | Not supplied | Track tool starts/completions, checklist downloads, app-store clicks, and attributable signups where available |

Current Google documentation describes a **Generative AI performance report** for AI Overviews and AI Mode, rolled out globally by August 31, 2026. It reports impressions, including page, country, device, and date views. It is not an AI-specific clicks or conversions report. If it is missing, Google notes that insufficient AI impressions may be the cause. Export it separately; the supplied Web CSVs cannot isolate AI visibility. [Google report documentation](https://support.google.com/webmasters/answer/16984139).

Also verify Settings > Search generative AI shows inclusion, including inherited property settings. Inclusion is the default; there is no evidence here that Kaizen has opted out. [Google control documentation](https://support.google.com/webmasters/answer/16908024).

Use a small recurring prompt panel: organizing a parent's records; sharing medication information; emergency contacts and records; teenager portal access; preparing a caregiver visit summary; and AI assistance with family history. Record returned sources and whether Kaizen is cited, merely mentioned, or recommended. Do not treat a single answer as a stable platform ranking. This analysis did not run those prompts in consumer AI products.

Review weekly for discovery and technical issues; assess content changes after at least four to eight weeks of comparable data. With this small baseline, show absolute counts alongside percentages and avoid causal claims from one refresh or one day's results.

## Complete article performance table

All article rows from the 28-day Pages export, excluding category hubs. Full nonarticle page rows and all queries remain in the accompanying JSON.

| Article | Clicks | Impressions | CTR | Position |
|---|---:|---:|---:|---:|
| [Sunlight](https://kaizenhealth.io/blog/health/sunshine) | 0 | 432 | 0.00% | 7.64 |
| [Organizing medical records](https://kaizenhealth.io/blog/family-history/organizing-medical-records) | 1 | 219 | 0.46% | 8.40 |
| [Depression family history](https://kaizenhealth.io/blog/family-history/family-history-depression-children) | 0 | 110 | 0.00% | 6.55 |
| [Vitamin D and magnesium](https://kaizenhealth.io/blog/diabetes-magnesium-vitamin-d) | 0 | 83 | 0.00% | 8.06 |
| [Shared family medical record](https://kaizenhealth.io/blog/family-history/shared-family-medical-record) | 1 | 79 | 1.27% | 5.38 |
| [Documenting family health](https://kaizenhealth.io/blog/family-history/documenting-family-health) | 0 | 67 | 0.00% | 7.99 |
| [AI agents](https://kaizenhealth.io/blog/ai-agents) | 1 | 48 | 2.08% | 6.12 |
| [Caregiving grief](https://kaizenhealth.io/blog/caregiving/grieving-the-years-lost-to-caregiving) | 0 | 37 | 0.00% | 6.76 |
| [Family health monitoring](https://kaizenhealth.io/blog/family-health-monitoring) | 0 | 36 | 0.00% | 6.58 |
| [Retirement cost of caregiving](https://kaizenhealth.io/blog/caregiving/retirement-cost-of-caregiving) | 0 | 29 | 0.00% | 6.34 |
| [AI health comparison](https://kaizenhealth.io/blog/ai-agents/ai-health-assistant-comparison) | 0 | 17 | 0.00% | 4.06 |
| [Agent versus chatbot](https://kaizenhealth.io/blog/ai-agents/agent-vs-chatbot) | 1 | 7 | 14.29% | 8.71 |
| [Kidney transplant evaluation](https://kaizenhealth.io/blog/health/kidney-transplant-evaluation-gap) | 0 | 6 | 0.00% | 5.67 |
| [Colorectal cancer risk](https://kaizenhealth.io/blog/cancer/colorectal-cancer-risk) | 0 | 4 | 0.00% | 6.75 |
| [Family history research](https://kaizenhealth.io/blog/family-history/research) | 0 | 4 | 0.00% | 8.25 |
| [Managing diabetes as a family](https://kaizenhealth.io/blog/family-history/managing-diabetes-as-a-family) | 0 | 4 | 0.00% | 19.50 |
| [Family history](https://kaizenhealth.io/blog/family-history) | 0 | 3 | 0.00% | 6.33 |
| [Creatine](https://kaizenhealth.io/blog/health/creatine) | 0 | 3 | 0.00% | 6.67 |
| [AI safety for records](https://kaizenhealth.io/blog/ai-agents/is-ai-safe-for-medical-records) | 0 | 3 | 0.00% | 9.67 |
| [Heart disease genetic risk](https://kaizenhealth.io/blog/heart/genetic-risk-score-heart-disease) | 0 | 2 | 0.00% | 5.50 |

The 14.29% CTR for agent versus chatbot represents one click from seven impressions. Do not extrapolate it as a winning template. Likewise, a position near four with 17 impressions on the AI comparison is a small visibility signal, not proof of a major commercial opportunity.

## Verification record

Click and impression totals were independently recalculated from both source folders and reconciled against the saved JSON for Chart, Pages, Queries, Devices, and Countries. All fourteen CSVs were read. Source exports remain unchanged. Live checks verified selected public responses, deployed sitemap entries, and positive evidence of server-delivered schema on the organization guide; they did not establish sitewide rendered validity or crawler-specific access. The report and JSON are new files; existing audit reports and calendars remain unchanged.
