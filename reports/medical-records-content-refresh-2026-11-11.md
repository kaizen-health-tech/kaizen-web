# Medical records and caregiver access content refresh

November 11, 2026. Implementation of the two highest-fit records recommendations from the [Search Console analysis](search-console-analysis-2026-11-10.md).

## Changes

- Reorganized the medical-records guide around an immediate checklist, a summary template, filing examples, requests, appointment preparation, and maintaining one current copy.
- Reworked the shared-records guide around permission, provider proxy access, decision-making authority, platform selection, and a practical access worksheet. Removed universal portal-age claims and lengthy state-specific summaries.
- Added two blank text downloads. Both can be filled in or printed without submitting health information to the site.
- Connected both guides to each other and to the existing records-request tracker and visit-summary builder.
- Replaced repeated promotion and unsupported clinical or legal review attribution with limited product descriptions and editorial attribution. Government and provider sources are linked beside relevant explanations. No specialist review is claimed.
- Updated page metadata, card descriptions, reading times, and modification dates. Original publication dates, routes, and every existing section anchor remain intact.
- Fixed date-only formatting in the shared article layout by using UTC. A November 11 modification date previously appeared as November 10 in Pacific time.

## Verification

`yarn lint` passed with zero errors and six warnings in unchanged files. Focused ESLint checks passed for all four modified source files. The final `yarn build` passed, including TypeScript and static rendering. The build needed network access to fetch the existing Google font; it retains the existing middleware deprecation warning. `git diff --check` passed.

Local production HTTP checks verified one H1 per guide, matching production canonicals, descriptions of 148 and 156 characters, five and seven FAQ entries, and unique IDs. Both BlogPosting schemas and sitemap entries use November 11, 2026. The visible date also uses November 11 after the formatting fix. Both download responses match their source files byte for byte.

The link inventory confirmed that every old anchor remains, each table of contents matches its headings, and all 15 internal link occurrences resolve to source routes, download files, or the intended cross-article section. Existing tool source confirms actual copy and print support.

Desktop browser inspection verified the organization guide, summary table, and table-of-contents navigation. Tables have captions, header scopes, and focusable horizontal scroll regions. A phone-sized visual check was not completed. Production deployment, indexing, rich-result eligibility, and traffic impact have not been verified. No commit or deployment was performed.
