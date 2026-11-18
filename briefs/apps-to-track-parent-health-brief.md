# Content Brief: Apps to Track a Parent's Health (C6)

**Type:** New comparison guide, organized by need
**Slot:** December 1, 2026 (provisional; see [December calendar](../calendars/2026-12-editorial-calendar.md))
**Proposed URL:** `/blog/caregiving/apps-to-track-a-parents-health` (check against existing URL patterns before use) · **Category:** `aging-well` (confirm)
**Prepared:** 2026-11-16 · Research: [community and source research](../reports/apps-to-track-parent-health-research-2026-11-16.md)
**Status:** Brief only. Nothing drafted. Legal review is required before publication (confirmed by Snehal, November 16).

---

## Decisions already made (Snehal, November 16)

1. **Categories with a few examples each**, not a ranked list of many apps.
2. **Examples are parallel tools, not direct competitors to Kaizen.** Dedicated family care-coordination apps are left out of the example sets.
3. **Kaizen appears in the comparison itself, with a confident position.** Confidence must come from what the product does today, as the claims limits below require.
4. **Legal reviews the privacy and consent wording.**
5. **Legal guidance received November 17:**
   - Keep the omitted-apps handling neutral: say that other apps exist and that readers should do their own research, so they can trust their medical data with a company that has a trustworthy policy in place.
   - Do not name the AI vendors (OpenAI, Anthropic) in the article.
   - Not stated: whether the final draft needs another legal pass. Ask before release.

## Reader and intent

An adult child or relative helping an aging parent who asks, "Which app should I use to keep track of my parent's health?" The research shows this question recurs, that people want one app for everything, and that the replies point them to several separate tools. The reader wants to choose by need, check the choice against the parent's wishes, and leave with a short checklist. This is not a "best apps" ranking and should not read like one.

## Angle

"No single app does it all, so pick by the job you need done" is the organizing idea. The article says so plainly, then shows what each type of tool covers and does not cover. This is the position a trustworthy comparison can hold, and it lets Kaizen take a strong, specific place without overclaiming (records, sharing with consent, plain-language explanations and a wellness signal), while stating what it does not do.

## Proposed structure

| # | H2 | Content | Notes |
|---|---|---|---|
| 1 | Short answer | Pick by job; one-line pointer per category; the parent's agreement comes first | Place Key Takeaways after the intro |
| 2 | Before you pick an app: ask your parent | Agreement, tech comfort, what they will actually use, what they want shared | Lead with consent; link the refusal article |
| 3 | Medicines | Reminder apps and built-in phone tools; who gets alerted when a dose is missed | No dosing advice |
| 4 | Vitals and wearables | Blood-pressure cuffs with apps, phone health-data sharing, wearables | No accuracy or target-range claims |
| 5 | Safety and check-ins | Fall detection, emergency contacts, scheduled check-in calls, location sharing | Include the limits that vendors state |
| 6 | Family updates and shared calendars | Shared calendars, lists, update sites | Link R2 for task division |
| 7 | Records and sharing | Patient-portal proxy access, and shared family records (Kaizen) | Link both records guides |
| 8 | Where Kaizen fits | What it does, who it suits, what it does not do | Disclosed; see claims limits |
| 9 | Privacy, consent and cost checklist | HIPAA scope, data terms, deletion, subscriptions, consent | Legal review required |
| 10 | Decision checklist | Printable one-page checklist | No product feature needed |
| 11 | FAQ | 4 to 6 questions from the research | Prune before schema |

Suggested template: `comparison`. Suggested length: 2,200 to 2,800 words. Use house components. Tables as hand-written `<table>` in `overflow-x-auto`.

## Example apps by category (candidates, parallel to Kaizen)

Examples are limited to two or three per category. The facts below come from vendor pages seen as search excerpts on November 16, 2026. Each page must be opened and each fact re-checked, with the check date, before drafting.

| Category | Candidate examples | What the vendor source says (excerpt-level) | Verification and caution |
|---|---|---|---|
| Medicines | Medisafe; Apple Health Medications | Medisafe's help center describes a "Medfriend" who receives reminders for missed doses, and a separate "Dependent" profile for caregivers; the terms say paid access is required in some countries outside the US from January 1, 2026; its help center lists Premium at $4.99 per month or $39.99 per year. Apple Support describes logging medications with reminders and follow-ups | Confirm US free-tier scope and prices directly. A Reddit user reported a subscription demand in December 2025; the vendor terms suggest a non-US change, so do not repeat the Reddit claim |
| Vitals and wearables | Apple Health sharing; a connected blood-pressure cuff app (Omron connect or Withings) | Apple Support says Health data such as alerts and trends can be shared with family and caregivers. Omron's page says its app has free and premium options. A Withings community thread reports family-sharing problems after an update | Pick one cuff vendor only after reading current sharing features. Do not say any device is accurate or suitable for a parent's condition |
| Safety and check-ins | Apple Watch Fall Detection and emergency contacts; Life360 or Apple Find My for location | Apple Support: Fall Detection can contact emergency services and emergency contacts, and "Apple Watch cannot detect all falls." Apple Support describes location sharing with family. Life360 lists location sharing on all plans | State the limits. Location sharing needs the parent's agreement. Do not call any of these medical alert services |
| Family updates and calendars | Cozi; CaringBridge | Cozi's FAQ: the free version has a shared calendar and lists; Cozi Gold is $39 per year per its FAQ. CaringBridge describes itself as a nonprofit platform for sharing health-journey updates with family and friends | Cozi is a general family planner. CaringBridge is for updates and support, not records. Confirm current terms for both |
| Records and portals | Patient-portal proxy access (for example, MyChart); Kaizen | MyChart help and health-system pages describe proxy access as the way for one person to view another's MyChart information, even for a person with power of attorney. Several health systems require the patient's agreement for adult proxy access | Rules vary by health system and state. Do not promise access. Legal review required |

Deliberately left out and why:
- **Dedicated care-coordination apps** (the apps most often named in the community threads) are direct competitors, so they are not named. Use the neutral sentence legal approved (see "Neutral note on other apps").
- **Alexa Together** was discontinued on May 21, 2025, per Amazon's own pages (now "Alexa Emergency Assist"). Many older list articles still recommend it. Do not include it. A short note that some listings are out of date could help readers, if legal agrees.

## Where Kaizen fits (confident, bounded)

Allowed position, taken from the Product Guide's "safe to say" list (re-check the guide's current version before drafting):
- Keeps a family's health records in one place (files, medications, notes, events) and lets people share the records they choose with the relatives helping.
- Medication records with reminders on the phone.
- Kai explains a lab report or answers a health question, typed or spoken, in the user's language, without a quality claim.
- A Health Score built from Apple Health, Health Connect or Oura: "a signal, not a diagnosis."

Must state plainly in the same section (this is what makes the comparison credible): Kaizen does not detect falls, monitor in the background, send emergency alerts, record blood pressure from a cuff, import hospital records or replace a clinician. Do not claim any of the items in the Product Guide's "Never say" table.

Constraints to resolve before publication:
- Group authorization hardening is merged and, per Snehal on November 17, releases in two days (about November 19). The Product Guide called it a blocker for group-related marketing, so it is cleared once released. Group-sharing claims may stay in the draft. Confirm the release shipped before December 1.
- **Encryption and data handling (founder-confirmed November 17; no documents seen).** Snehal states that data is encrypted in transit and at rest (Firebase encrypts at rest automatically), that Kaizen has business associate agreements with its two AI vendors, that those agreements mean user data is not used for training, and that a zero-data-retention policy is in place with both vendors. Permitted wording, kept to what was stated: "Data is encrypted in transit and at rest," and "We have signed agreements with our AI providers. Your data is not used to train their models. They do not retain it." Do not name the vendors (legal). Do not write "end-to-end encryption" (the Product Guide says there is none; the guide and the founder were not reconciled, and the new statement does not claim it). Do not write "HIPAA compliant" or "SOC 2."
- **Points to confirm before the sentence ships.** The Product Guide lists items that sit outside the statement above: the memory store (Supabase) and other vendors with no BAA stated, files attached directly in chat that are not redacted, and voice audio whose ZDR scope is unconfirmed. "All data" is therefore broader than what the guide can support, so use "encrypted in transit and at rest" without "all" unless the founder confirms it covers every store. Also confirm that the contract terms, not the BAA alone, are what bar training use, and that "do not retain" matches the actual ZDR scope (conversations).
- The guide's privacy section also says several vendors have no stated BAA. The article's privacy checklist applies to Kaizen too. Write the Kaizen paragraph so that a reader who applies the checklist gets accurate answers, and leave out any item Kaizen cannot document. Do not use "HIPAA compliant" or "SOC 2."
- The compliance wording in the Product Guide conflicts with some public pages. Use only wording the founder can document.
- Disclose once, near the start of the Kaizen section, that Kaizen Health publishes the article and makes one of the apps described.

## Sources to open before drafting

1. Caregiving in the US 2025, National Alliance for Caregiving and AARP, with the CARE Network technology fact sheet: 41% of caregivers digitally track the recipient's health records (30% in 2020); 25% use remote monitoring (13% in 2020). Applies to caregivers of any recipient. Confirm definitions in the full report.
2. HHS OCR: health-apps and consumer-health-information pages, and personal-device guidance. Quote narrowly.
3. FTC Health Breach Notification Rule, current text.
4. IEEE AgeTech article on consent and autonomy in AI-powered elder care (May 2026).
5. AARP caregiver-technology pages (check dates).
6. Vendor pages for each named app and device (features, tiers, data terms, deletion).
7. State law summary for monitoring a person with and without capacity. Legal supplies this.

## Keywords and SERP (not measured)

- **Primary candidate:** apps to track an elderly parent's health.
- **Secondary candidates:** apps to monitor aging parents from a distance; caregiver apps for medications and appointments; apps to share a parent's health information with family.
- **Search check performed:** an Exa search (not a Google SERP) on November 16 surfaced a CareScout caregiver-app list (dated November 3, 2026), a Kiplinger piece on AI tools for older adults (November 11, 2026), a medical-alert app list on Caring.com, and many vendor home pages. This suggests list-style and vendor pages are common, and an organized-by-need page with a consent section is differentiated. It does not establish what ranks on Google.
- **Before drafting:** check the Google SERP and People Also Ask, and confirm the final primary query and title.

## Title options (provisional)

1. Apps to Track an Aging Parent's Health: Which Type You Need, and What Each One Misses
2. Which App for Which Job? Tracking a Parent's Health From Medicines to Falls
3. How to Choose Apps for Your Parent's Health, and Ask Them First

Meta description (draft, 160 characters or fewer after normalization): "No one app tracks everything about a parent's health. Compare apps by job (medicines, vitals, safety, family updates, records) and what to ask first."

## Neutral note on other apps (legal-approved approach)

Include a short, neutral passage (near the privacy checklist) that says other apps exist beyond the examples here, that this article does not cover every app, and that readers should do their own research before trusting an app with a parent's medical information, including whether the company has a trustworthy privacy policy in place. Draft wording goes back to legal with the article. Do not name direct competitors. Do not imply that any named app is untrustworthy.

## Linking and overlap

Link out to: `shared-family-medical-record`, `organizing-medical-records`, `when-your-parent-refuses-help`, the AI comparison articles (`Copilot Health, ChatGPT Health & Amazon Health AI, Compared`), and the caregiving pillar. Link R2 and C4 once published, guarded with `WhenPublished` until their targets are public. C6 owns choosing tools by need; it does not repeat task division, filing, or access rules.

## Review, risk and release checks

- **Legal review** of consent, HIPAA, privacy and monitoring wording. Named reviewer not yet assigned.
- **Clinical review** of anything touching medicine reminders, fall detection and vitals; no accuracy, dosing or "safe to rely on" language.
- **Fact check** of every app feature, price and platform, dated.
- **Product claims check** against the Product Guide by the founder.
- **No community anecdotes**, usernames or thread links in the published piece. Use clearly labeled synthetic examples if needed.
- **Release check:** `draft` flag, publication date parity across page, schema and sitemap, hero and alt text, deployed route.
- **Build log:** not blog-worthy yet.

## Open questions

1. Does legal need another pass on the final draft, or does the November 17 guidance clear the wording? Ask before release.
2. Founder to confirm the encryption and data-handling points listed above, in particular whether "encrypted in transit and at rest" covers every data store.
3. Confirm the group-sharing release shipped (expected about November 19).
4. Legal reviewer name and lead time before December 1. If review slips, the release moves to the next weekly slot and the December 29 buffer absorbs it. Do not combine two releases in one week.

**Resolved November 17:** omitted-apps handling (neutral note); group-sharing hardening (merged, releasing in two days); AI vendors not named.
