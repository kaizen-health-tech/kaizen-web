# Content Brief: The Shared Family Medical Record — Who Needs Access to What, and How to Set It Up

**Type:** New pillar page (Family Medical Record Organization cluster hub)
**Slot:** September editorial calendar, Sep 15 pillar slot — re-angled from the original "Organizing Your Family's Medical Records: The Complete Guide"
**Proposed URL:** `/blog/family-history/shared-family-medical-record` · **Category:** `health-records`
**Prepared:** 2026-09-10 · research packet in-session

---

## Why this angle (read first)

The original Sep 15 pillar title ("Organizing Your Family's Medical Records: The Complete Guide") would have cannibalized the existing `family-history/organizing-medical-records` post — a live 13-section, ~3,000-word guide already targeting "Organizing Medical Records for Aging Parents." Same intent, near-identical title.

This pillar takes the angle that existing post does **not** own: the record shared **across a family with different roles** — access, permissions, consent, and "who needs to see what." The existing post stays the tactical "gather and file the records for one person" guide and becomes a spoke. This pillar becomes the cluster hub.

The differentiator, confirmed by the competitive scan: **no authoritative publisher models role-based family access.** Every competitor writes one-caregiver-to-one-patient. The sandwich-generation reality — a spouse manages daily meds, an adult child manages appointments, a sibling handles insurance, each needing scoped access to one record — is unaddressed anywhere. That is Kaizen's whitespace.

## Template

**Recommended:** `pillar-page` — comprehensive hub for the Family Medical Record Organization cluster, linking all five spokes, structured around a legal + practical framework readers can act on.
**Template file:** `skills/blog/templates/pillar-page.md`

## Target Keywords

- **Primary:** `shared family medical records` (under-served by authoritative publishers — mostly product blogs rank)
- **Secondary:** `family member access to medical records`, `how to get access to a parent's medical records`, `patient portal proxy access`, `HIPAA authorization family member`, `can I see my spouse's medical records`, `medical power of attorney records access`
- **Long-tail / section-level:** `at what age can a parent no longer see a teen's medical records`, `does a financial power of attorney let me see medical records`, `does the Cures Act give family members access to my records`, `how do I combine medical records from different doctors`
- **Questions (from PAA scan — verify/prune before using as headings or FAQ schema):**
  - Can I access my spouse's medical records without their permission?
  - What documents do I need to make medical decisions for my parent?
  - What's the difference between a healthcare power of attorney and guardianship?
  - Why did I lose access to my child's patient portal?
  - Does the 21st Century Cures Act give family members access to my records?
  - How do I combine medical records from different doctors or hospitals?
  - Who can access my medical records after I die?

## Search Intent

**Informational, decision-and-setup.** The reader is coordinating care for a parent, spouse, or child (often more than one at once) and has hit an access wall — a provider won't share, a portal locked them out, a POA "doesn't work" the way they expected. They want to understand what's legally required, then set it up correctly and in advance. Tone: calm, practical, non-alarmist, explicit that most of this is a one-time setup done best before a crisis. This is YMYL **and** legal content: precision matters, and state variation must never be flattened into a blanket claim.

## Content Parameters

- **Word count:** 2,800–3,400 (pillar depth; the topic genuinely needs it)
- **Reading level:** Flesch 60–70, grade 7–8. This is dense legal material — the writer must translate hard. Define every term on first use: personal representative, HIPAA authorization, proxy/delegate access, springing POA, guardianship vs. conservatorship, information blocking, break-glass, FHIR patient-access API.
- **Format:** Next.js TSX page. House components only. Tables hand-written `<table>` with `<thead>`, wrapped in `overflow-x-auto`.
- **H2 sections:** 9 + FAQ (+ optional short "records after a death" sidebar)
- **Images / visuals:** pillar density ~1 per 200–250 words → plan **12–15**: 1 hero + 3–4 in-body photos + 6–9 diagrams/tables/checklist cards. Several must be original diagrams — stock cannot carry the legal-distinction content.
- **FAQ:** 6–8 items from the PAA list
- **Medical/legal review:** **DECISION REQUIRED and stronger than usual.** This mixes health and law. First choice: a health-privacy attorney or a patient-advocacy professional as named reviewer, with `authorUrl` → `Person` schema + a visible "Reviewed by …" line. Fallback: `authorCredentials="Reviewed by the Kaizen Health editorial team"` — but with this much legal content, a named reviewer is close to required to publish responsibly, and to clear the ≥90 / zero-P0 gate. Flag if unavailable.

## Recommended Title

**The Shared Family Medical Record: Who Needs Access to What, and How to Set It Up**

Alternatives:
1. Sharing One Medical Record Across a Family: Access, Permissions, and Consent, Explained
2. Family Access to Medical Records: What HIPAA Actually Requires, and How to Set It Up Right

## Meta Description

> When several people help with one person's care, the hard part isn't where the files live, it's who's allowed to see what. A practical guide to family access, permissions, and consent, with the setup steps.

(≤160 chars after `normalizeDescription`; page-specific; carries the primary intent.)

## Key Takeaways box (house `KeyTakeaways`, placed after the intro)

- Being someone's spouse, adult child, or sibling does not, by itself, give you access to their medical records. Access comes from one of three things: informal "involved in care" permission, a signed HIPAA authorization, or personal-representative status.
- A **healthcare** power of attorney makes you a personal representative for medical decisions and records. A **financial** power of attorney usually does not, unless it specifically says so.
- Parent access to a child's patient portal typically drops to a limited view around age 12–13 and ends at 18, because during adolescence a parent is not the personal representative for confidential services. The exact age and rules vary by state and health system.
- The 21st Century Cures Act info-blocking rule secures **your own** access to your records without delay. It does not give family members access to yours.
- Set it up before a health event: a healthcare POA for each adult, a HIPAA authorization on file with key providers, accepted portal proxy invitations, and an emergency-access plan. In a crisis it is too late to start.

## Information Gain Opportunities

- **[UNIQUE INSIGHT] Role-based family access model.** Build the whole pillar around "one record, multiple roles" (meds / appointments / insurance / decisions) and what scoped access each role needs. No authoritative source does this — competitors are all single-caregiver-single-patient.
- **[UNIQUE INSIGHT] The legal framework tied to the setup steps in one place.** OCR explains the law but not the portal; health systems explain the portal but not the law; elder-law explains POA but neither portals nor minors. This pillar is the first to run HIPAA authorization → personal representative → portal proxy → emergency plan as one workflow.
- **[UNIQUE INSIGHT] The adolescent-confidentiality wrinkle, written for caregivers.** It currently lives only in clinician/policy sources (Guttmacher, AAP, SAHM) and mechanical health-system portal pages. Translating the age-12–13 step-down and minor-consent categories for a family coordinator is genuinely new.
- **[UNIQUE INSIGHT] The Cures Act "gives you access, not your family" distinction.** Almost never stated in consumer content; frequently conflated with HIPAA.
- **[UNIQUE INSIGHT] A crisis-ready checklist** that integrates phone Medical ID / lock-screen emergency info with the legal instruments — the tech how-tos and the records-access guides never overlap today.
- No original proprietary data; do not imply first-hand experience. Differentiation is sourced-synthesis + framework + checklist.

## Content Outline

### Introduction (130–170 words)
- Hook: when several people help with one person's care, the bottleneck isn't where the files live, it's who is allowed to see what — and families usually discover the gap at the worst possible moment.
- Problem: relationship doesn't equal access; the rules differ for a spouse, an adult child, a minor, and a teen; and a POA often doesn't do what people assume.
- Promise: the three ways a family member can legally reach a record, how it differs by relationship, what the Cures Act did and didn't change, and how to set shared access up before a crisis.
- `KeyTakeaways` box, then hero image.

### H2: Why sharing one family record is its own problem
- **Answer-first:** Filing systems solve *where the records are*. They don't solve *who can see them*. In a family where care is shared, the access question is the real work.
- Cover: the role model (spouse → daily meds and monitoring; adult child → appointments and provider communication; sibling → insurance and paperwork; someone → decisions if the person can't). Each role needs a different slice of the record. Fragmentation makes it worse: records sit in separate portals at every provider, and there's no national "family account."
- **Key stats:** ~63M US adults (nearly 1 in 4) are family caregivers; 29% are "sandwich generation" (AARP/NAC 2025). The share of people who accessed the portal of someone they care for **more than doubled, 24% (2020) → 51% (2024)** (ONC/ASTP Data Brief, 2024). Among portal users, **59% have records in more than one portal** and only **7% use an app that consolidates them** (same brief).
- **Visual:** role map — one record at the center, four family roles around it, each with a different scoped view.

### H2: The three ways a family member can legally reach a record
- **Answer-first:** Under HIPAA there are three tiers, and people constantly confuse them: (1) informal "involved in care" permission, no form, provider's discretion, gets you a conversation not the chart; (2) a signed HIPAA authorization, patient-controlled, exactly the scope the patient writes down; (3) personal-representative status, which "stands in the patient's shoes" for the matters it covers, including the full right of access.
- Cover: when a provider can share with family without a form (patient agrees / is present and doesn't object / is incapacitated and it's in their best interest); what an authorization can be scoped to (whole record vs. "immunizations only," date ranges), that it's revocable, and that any adult acting on their own behalf generally needs one per provider; who counts as a personal representative (healthcare POA agent, court-appointed guardian, parent of a minor, executor) and that **state law decides**; that a provider may refuse to recognize a representative in abuse/endangerment cases.
- **TABLE 1 — the three access routes:** columns = Route · What it unlocks · Who grants it · How durable · Typical use. Rows = Involved-in-care sharing / HIPAA authorization / Personal representative.
- **Teaching line:** personal representative = durable chart-level access; authorization = whatever the patient wrote and nothing more; involved-in-care = a hallway conversation.
- Sources: HHS OCR "Personal Representatives" guidance; OCR provider guide + fact sheet on communicating with family/friends; 45 CFR 164.502(g) and 164.524. **Writer: these HHS pages returned 403 to research tooling — link-check and quote-check against the live pages before publish.**

### H2: Spouses and adult children — relationship isn't access
- **Answer-first:** An adult patient's records are not automatically open to a spouse or adult child. To get real access you need one of: a signed HIPAA authorization on file with each provider, portal proxy access the patient grants, or personal-representative status through a healthcare POA or guardianship.
- Cover: the common surprise (an adult child calls the hospital for a parent, or a spouse for a spouse, and gets turned down); the fastest low-friction path for a competent adult (portal proxy + a broad authorization at the main providers).
- **State-variation flag (write this carefully):** where state law gives someone authority to make health care decisions for an incapacitated person (some states' default-surrogate / family health care decisions acts put a spouse first), the provider **must** recognize that person as a personal representative. So an incapacitated patient's spouse is automatically a representative in some states and not in others. Never write "your spouse can/can't see your records" flat — condition it on (1) capacity and (2) state surrogate law.
- Sources: HHS OCR "Personal Representatives"; HIPAA Journal "Does HIPAA Apply to Spouses"; an illustrative state example (e.g. NY Family Health Care Decisions Act via Cona Elder Law — label Tier 2, state-specific).

### H2: Aging parents — healthcare POA, financial POA, and guardianship
- **Answer-first:** For a parent, the instrument you want is a **healthcare** power of attorney (also called a healthcare proxy or durable power of attorney for health care), signed while they still have capacity. It makes you a personal representative for medical decisions and records. A **financial** POA usually does not, and guardianship is the slow, court-ordered fallback when no POA exists.
- **TABLE 2 — POA vs. financial POA vs. guardianship:** columns = Instrument · What it grants for medical records · When it activates · Notes. Include the "financial POA ≠ medical access unless it contains a HIPAA paragraph" point explicitly, and immediate vs. springing (effective only on a documented finding of incapacity, often one or two physicians).
- Cover: get it done before a crisis; providers verify the document and any incapacity finding; scope follows the grant (limited authority = limited access).
- **Key stat:** roughly **1 in 3 US adults** has completed any advance directive (~33% a healthcare POA) — Yadav et al., *Health Affairs* 2017, 2011–2016 data; **pair with** the University of Michigan National Poll on Healthy Aging: **46% of adults 50–80** have completed at least one advance-care-planning document (2024). Name both populations; note there's no current all-adult national figure.
- **State-variation flag:** terminology (guardian vs. conservator), springing-POA activation standards, and default-surrogate order all vary by state. Say "healthcare POA (sometimes called a healthcare proxy)" and point readers to their state statute or an elder-law attorney for activation specifics.
- Sources: elder-law Tier 2 (TCK Law 2025; Anderson Dorn & Rader; Evans & Davis; Accountable) + OCR "Personal Representatives."

### H2: Kids and teens — why portal access changes at 12 and ends at 18
- **Answer-first:** A parent is normally the personal representative for a minor child and can see their records. But during adolescence that stops applying to **confidential services** the minor can consent to on their own, so patient portals step parent access down (commonly around age 12–13) and remove it at 18.
- Cover: HIPAA's three carve-outs where a parent is **not** the personal representative for particular information (minor lawfully consents and no parental consent is required; care is court-directed; the parent agrees to a confidential relationship), after which HIPAA defers to state law; what "limited" teen-portal access typically still shows (immunizations, allergies, growth chart, some scheduling); the teen-proxy-consent form path for more.
- **Minor-consent by category (date-stamp everything, link Guttmacher's live tables):**
  - STI services: a minor may consent in **all 50 states + DC**; **16 states** have parental-notification provisions (Guttmacher, as of Aug 1, 2026).
  - Contraceptive services: **23 states + DC** let all minors consent; **16 states** in defined circumstances; **2 states** require parental consent (Guttmacher, as of Aug 1, 2026).
  - Outpatient mental health / substance-use treatment: varies widely; **do not state a count** — cite Guttmacher's "Overview of Minors' Consent Law" table directly (research could not fetch it to verify a number).
  - Counter-trend: **Idaho (2024)** and **Tennessee (2024)** enacted laws expanding parental consent/access for minors' care. This area is actively changing — date-stamp claims.
- **Visual:** timeline of a child's portal access — full parent proxy → step-down at ~12–13 → teen-controlled sensitive services → parent access ends at 18. **Visual (optional):** US map keyed to Guttmacher's minor-contraception categories, captioned "as of Aug 2026 — see Guttmacher for current."
- Sources: AAP "Parental Access to Medical Records"; HHS OCR "Personal Representatives" (45 CFR 164.502(g)(3)); Guttmacher state tables + 2024 policy-trend analyses; SAHM position papers (EHR sensitive-info, rev. Feb 2026; confidential care, rev. Oct 2025); health-system teen-portal pages (Loma Linda, Mayo, Cleveland Clinic).

### H2: What the Cures Act info-blocking rule did — and didn't do — for your family
- **Answer-first:** Since April 2021, providers, EHR vendors, and health information networks can't unreasonably block your access to your own electronic health information. In practice you get test results, clinical notes ("open notes"), and records through the portal without delay. It secures **your** access. It does not give your spouse, adult child, or any caregiver access to **your** record.
- Cover: what "open notes" means and that a patient can't selectively hide notes from a family proxy they've granted access to (so scope the proxy grant carefully instead); enforcement — civil penalties up to **$1,000,000 per violation** apply to **health IT developers and health information networks** (HHS OIG rule, effective Sept 1, 2023); health care **providers** face separate "disincentives" finalized by HHS in 2024. **Do not write "providers can be fined $1M."**
- **Watch item — writer must verify at publish:** a December 2025 ASTP/ONC deregulatory *proposed* rule ("Deregulatory Actions To Unleash Prosperity") could change parts of this. Confirm status; do not describe as current law.
- **Visual:** two-column "does / doesn't" card.
- Sources: ONC/ASTP "Information Blocking"; OpenNotes federal-rule page; APA Services info-blocking FAQ; HHS OIG final rule (Fed. Reg., July 2023).

### H2: Setting up shared access, step by step
- **Answer-first:** Most shared access is one-time setup. The core moves: grant portal proxy access at every health system, put a HIPAA authorization on file with the main providers, and (for aggregation) connect a records app via the patient-access API.
- **Portal proxy walkthrough (generic MyChart/Epic — describe, don't screenshot a real vendor):**
  1. The **patient** logs into their own account (proxy is granted by the patient).
  2. Open the Sharing Hub / "Share My Record."
  3. "Manage friends and family access" → "Invite friends or family."
  4. Enter name + email; choose the access level offered (full vs. limited).
  5. The family member verifies identity and accepts from **their own** portal account.
  6. Repeat at **every** health system — proxy access doesn't cross organizations.
  7. Guardians and POA agents use the organization's proxy request form (often notarized) with the court order or POA attached.
- **Aggregation:** Apple Health Records / Android health apps and third-party apps connect to participating providers via the **HL7 FHIR patient-access API** the Cures Act requires (~9 in 10 hospitals report enabling app-based access). What's still clunky: coverage depends on each provider connecting its endpoint; historical data, images, and free-text notes often don't come through; the view is read-only and per-patient (no native family view); only **7%** of portal users use any consolidating app. CMS's separate Patient Access API covers payer/claims data.
- **Visual:** "one parent, three health systems" map — proxy set up separately at each, plus an aggregation app pulling via FHIR.
- **Visual:** numbered Sharing-Hub UI mock (stylized, not a real vendor screen).
- Sources: MyChart.org proxy help; Johns Hopkins / Cleveland Clinic / MaineHealth / Froedtert proxy pages; ONC API pages + "Hospital Use of APIs" data brief; Apple Health Records FAQ; CMS Patient Access API FAQ.

### H2: A crisis-ready setup — emergency and "break-glass" access
- **Answer-first:** There's no consumer "break-glass" right to someone's record in an emergency (that's an internal, audited EHR override clinicians use). What families can do is make the record reachable in advance.
- Cover: phone-based emergency data — iPhone **Medical ID** (set "Show When Locked") and Android emergency info on the lock screen: conditions, allergies, meds, emergency contacts; a shared secure document with the med list, allergies, diagnoses, provider directory, insurance IDs, and PDFs of the POA and authorizations, reachable by more than one family member; accepted portal proxy invitations and a HIPAA authorization already on file naming the crisis contact; the HIPAA point that when a patient is incapacitated a provider may share with involved family using professional judgment, so an accessible med list genuinely helps.
- **Visual:** emergency-access checklist card.
- Sources: consumer how-tos for Medical ID / lock-screen info; OCR family/friends guidance.

### H2: The pre-event checklist and your family access map
- **Answer-first:** Do this while everyone still has capacity. Four things per adult, one shared artifact for the family.
- **Checklist (render as a graphic + list):**
  - Healthcare POA signed by each adult, primary + backup agent; know whether it's immediate or springing and what triggers it.
  - HIPAA authorization on file with each key provider for the designated coordinator(s), scoped appropriately.
  - Portal proxy invitations sent and accepted at every health system, for every person who needs a defined role.
  - Emergency-access plan (phone Medical ID + shared secure document + POA/authorization PDFs).
  - A written **access map**: who has access to what, granted when, review date.
- **Product tie-in (one `ProductCallout`, only here):** Kaizen Health as the shared record + the access map — one place the family works from, with per-person roles, so the spouse, the adult child, and the sibling each see the slice they need. Kai helps translate terminology and build the question list; it doesn't make legal or medical decisions.
- Sources: OneRecord "When To Share Your Medical Records with Your Family"; AARP "11 Health Information Privacy Tips for Caregivers."

### Optional sidebar: records of a family member who has died
- Brief: the executor or administrator of the estate is generally the personal representative; absent one, state next-of-kin rules apply. Federally light, state-driven. One short paragraph, explicitly state-dependent.

### FAQ (6–8 — house `BlogFAQ`)
1. Can I see my spouse's medical records without their permission? — Not by relationship alone. You need an authorization, portal proxy access they grant, or personal-representative status; in some states a spouse becomes a representative automatically if the patient is incapacitated.
2. What documents do I need to make medical decisions for my parent? — A healthcare power of attorney is the main one; guardianship is the fallback if they've lost capacity and there's no POA. A financial POA usually isn't enough.
3. Does a financial power of attorney let me see medical records? — Usually not, unless it specifically includes HIPAA/health-information authority.
4. Why did I lose access to my child's patient portal? — Health systems step parent proxy access down around age 12–13 and end it at 18, to comply with state laws that let adolescents consent to certain care on their own.
5. Does the Cures Act give family members access to my records? — No. It secures your own access without delay. Family access still needs an authorization, proxy access, or personal-representative status.
6. How do I combine records from different doctors? — Set up portal access at each system, then connect an app (Apple Health Records, Android, or a third-party app) via the patient-access API. Coverage is uneven and the view is read-only.
7. Who can access my records after I die? — Generally the executor/administrator of your estate as personal representative; otherwise state next-of-kin rules.
8. (Optional) How do first responders see my medical info if my phone is locked? — Only what you've put in the phone's Medical ID / lock-screen emergency info; there's no automatic access to your record.

### Conclusion / recap (110–150 words)
- Bulleted: the three access routes; healthcare POA vs. financial POA; the teen step-down; Cures Act secures your access not your family's; set it up before a crisis with the checklist.
- CTA: pick the one adult who will coordinate, then this week send the portal proxy invitations and start the healthcare POA. Keep the record and the access map in one shared place (Kaizen Health). One CTA, no feature list.

## Statistics to Include

| # | Statistic | Source | Year | Section |
|---|-----------|--------|------|---------|
| 1 | ~63M US adults (nearly 1 in 4) are family caregivers; +20M since 2015 | AARP & NAC, "Caregiving in the U.S. 2025" | 2025 | Why sharing is its own problem |
| 2 | 29% of caregivers are "sandwich generation"; ~1 in 3 is under 50 | AARP & NAC, "Caregiving in the U.S. 2025" | 2025 | Why sharing is its own problem |
| 3 | Accessing the portal/record of someone you care for: 24% (2020) → 51% (2024) | ONC/ASTP Data Brief, "Individuals' Access and Use of Patient Portals and Smartphone Health Apps, 2024" | 2024 | Why sharing is its own problem |
| 4 | 59% of portal users have records in more than one portal; 68% PCP, 40% other providers, 30% insurer | ONC/ASTP Data Brief, 2024 | 2024 | Why sharing / Setting up access |
| 5 | Only 7% of portal users use an app that consolidates multiple portals | ONC/ASTP Data Brief, 2024 | 2024 | Setting up access |
| 6 | 77% of individuals offered portal access in 2024 (42% in 2014); 65% used it in the past year | ONC/ASTP Data Brief, 2024 | 2024 | Why sharing is its own problem |
| 7 | 57% accessed records via a smartphone app in 2024 (vs. 42% web only) | ONC/ASTP Data Brief, 2024 | 2024 | Setting up access |
| 8 | 66% of caregivers of adults 50+ communicate with providers about care; 72% monitor condition severity; ~58% perform medical/nursing tasks | AARP & NAC, "Caregiving in the U.S. 2020 — Caregivers of Adults 50+" | 2020 | Why sharing is its own problem |
| 9 | 26% of caregivers report difficulty coordinating care, up from 19% in 2015 | AARP & NAC, "Caregiving in the U.S. 2020" (main report) | 2020 | Why sharing is its own problem |
| 10 | ~1 in 3 US adults has completed any advance directive (~33% a healthcare POA) | Yadav et al., *Health Affairs* 36(7) — 2011–2016 data | 2017 | Aging parents |
| 11 | 46% of adults 50–80 have completed ≥1 advance-care-planning document; 37% both | University of Michigan National Poll on Healthy Aging | 2024 | Aging parents |
| 12 | Minor consent to STI services: all 50 states + DC; 16 states have parental-notification provisions | Guttmacher Institute, "Minors' Access to STI Services" | as of Aug 1, 2026 | Kids and teens |
| 13 | Minor consent to contraception: 23 states + DC allow all minors; 16 conditional; 2 require parental consent | Guttmacher Institute, "Minors' Access to Contraceptive Services" | as of Aug 1, 2026 | Kids and teens |
| 14 | Info-blocking civil penalty up to $1,000,000 per violation (health IT developers & HINs) | HHS OIG final rule (Fed. Reg.) | 2023 | Cures Act section |
| 15 | ~9 in 10 hospitals enable app-based patient access to EHR data via APIs | ONC/ASTP, "Hospital Use of APIs..." data brief | 2023 data | Setting up access |

**Do NOT include:** any "% of patients with records at 3+ providers" figure (use stat #4 as the proxy); any medical-error / duplicate-testing cost figure attributed to record-sharing or care-coordination failures (no verified coordination-specific national source — do not make the causal leap); any national NIPT-style "proxy access uptake among eligible dyads" figure (use stat #3).

## Evidence-Backed Section Plan

| Section | Core claim | Supporting evidence | Source |
|---------|-----------|---------------------|--------|
| Why sharing is its own problem | Families are already coordinating access at scale, across fragmented portals | 51% accessed someone else's portal (2024, doubled since 2020); 59% juggle multiple portals; 7% use a consolidator | ONC/ASTP Data Brief 2024 |
| Three access routes | Relationship alone grants nothing; the three routes differ in scope and durability | OCR personal-representative vs. authorization vs. involved-in-care standards | HHS OCR guidance; 45 CFR 164.502(g), 164.524 |
| Spouses & adult children | An adult's records aren't open to family without a form, proxy grant, or representative status; some states make a spouse a representative on incapacity | OCR "must recognize" where state law grants decision authority | HHS OCR; HIPAA Journal; state example |
| Aging parents | Healthcare POA (not financial POA) makes you a records representative; get it before incapacity | Immediate vs. springing activation; financial POA gap; ~1 in 3 adults have a directive | Elder-law Tier 2; Health Affairs 2017; U-M poll 2024 |
| Kids & teens | Parent portal access steps down in adolescence because the parent isn't the representative for confidential services | HIPAA 3 carve-outs; Guttmacher state counts; portal age thresholds | AAP; HHS OCR; Guttmacher; SAHM; health-system pages |
| Cures Act | Info-blocking secures the patient's own access, not the family's | Rule scope + penalty structure (developers/HINs vs. provider disincentives) | ONC/ASTP; HHS OIG rule; APA FAQ |
| Setting up access | Shared access is per-organization one-time setup; aggregation exists but is partial | 6-step proxy flow; FHIR patient-access API; 7% consolidator use | MyChart.org; health-system pages; ONC API briefs; Apple/CMS |
| Crisis-ready setup | No consumer break-glass right; pre-load the phone and a shared document | Medical ID / lock-screen mechanics; OCR incapacity-sharing standard | Consumer how-tos; HHS OCR |
| Pre-event checklist | Four instruments per adult + one shared access map, done before a health event | Assembled from the mechanisms above | OneRecord; AARP caregiver privacy tips |

## Cover Image

| Option | Details |
|--------|---------|
| Photo hero (preferred) | An adult child helping an older parent use a smartphone. Candidate: Pexels 3791666 (Pexels License, no attribution) — extract direct CDN URL, validate HTTP 200 + image content-type. |
| Generated hero (alt) | `blog-image`, editorial mode: one central "record" card with concentric permission rings; three family figures at different distances, each holding a differently shaped key. Warm, diverse, no text. |
| Dimensions | 1200×630 (OG-compatible). |

## Visual Element Plan (no duplicate types)

| # | Type | Content | Section | Build path |
|---|------|---------|---------|-----------|
| 1 | Photo (`InlineImage`) | Adult child + older parent with a phone (hero or section 1) | Intro / Why sharing | Pexels 3791666 — validate |
| 2 | Infographic | Role map: one record, four family roles (meds / appointments / insurance / decisions), each a scoped view | Why sharing is its own problem | `/blog image`, infographic |
| 3 | HTML `<table>` | The three access routes: what each unlocks / who grants it / durability / typical use | Three access routes | House `<table>` + `overflow-x-auto` |
| 4 | Infographic | 3-column card: involved-in-care vs. HIPAA authorization vs. personal representative | Three access routes | `/blog image`, infographic |
| 5 | Photo (`InlineImage`) | Two adult siblings helping a parent with medication (role sharing) | Spouses & adult children | Pexels 7446775 — validate |
| 6 | HTML `<table>` | Healthcare POA vs. financial POA vs. guardianship: records access / activation / notes | Aging parents | House `<table>` |
| 7 | Infographic | Timeline of a child's portal access: full → step-down ~12–13 → teen-controlled sensitive services → ends at 18 | Kids & teens | `/blog image`, infographic |
| 8 | Data-viz map | US map keyed to Guttmacher minor-contraception categories; caption "as of Aug 2026 — see Guttmacher for current" | Kids & teens | `/blog image`, map/infographic |
| 9 | Infographic | Cures Act info-blocking: "does / doesn't" two-column card | Cures Act section | `/blog image`, infographic |
| 10 | UI mock | Stylized generic patient-portal "Sharing Hub → invite family" with the 6 numbered steps | Setting up access | `/blog image`, product/UI style (not a real vendor screenshot) |
| 11 | Infographic | "One parent, three health systems" map + an aggregation app pulling via FHIR | Setting up access | `/blog image`, infographic |
| 12 | Photo (`InlineImage`) | Family conversation at a kitchen table (the "have the talk, sign the forms" moment) | Pre-event checklist | Pexels 17066495 — validate |
| 13 | Checklist card | Pre-event checklist: healthcare POA / HIPAA authorization on file / proxy invites accepted / emergency plan / access map | Pre-event checklist | `/blog image`, infographic |
| 14 | Checklist card | Emergency-access setup (Medical ID + shared secure doc + POA PDFs) | Crisis-ready setup | `/blog image`, infographic |

Type check: 4 photos, 2 HTML tables, 7 infographic/diagram/map, 1 UI mock — varied, no monotony.

## Competitive Gaps to Exploit (ranked)

1. **The legal framework connected to concrete setup steps in one place** — OCR does law-not-portal, health systems do portal-not-law, elder-law does POA-not-portals-or-minors. Nobody does the whole workflow.
2. **The "one record, multiple family roles" framing** — all competitor content is single-caregiver-single-patient. This is the whitespace.
3. **The adolescent-confidentiality wrinkle written for caregivers** — currently only in clinician/policy sources and mechanical portal pages.
4. **The Cures Act "your access, not your family's" distinction** — almost never stated in consumer content, frequently conflated with HIPAA.
5. **Emergency / break-glass planning integrated with the legal instruments** — the phone-Medical-ID how-tos and the records-access guides never overlap today.
6. **Cross-organization fragmentation solved procedurally** — described as a problem everywhere, walked through nowhere.
7. **A dated, itemized pre-event checklist** tied to the specific access mechanisms.

## Internal Link Architecture

- **Link TO (from this pillar to existing pages — hub-and-spoke):**
  1. `/blog/family-history/organizing-medical-records` — anchor: "how to gather and file the records themselves"
  2. `/blog/family-history/caregiver-guide-aging-parents` — anchor: "the broader caregiver guide for aging parents"
  3. `/blog/family-health-monitoring` — anchor: "how family health history guides screening"
  4. `/blog/family-history/documenting-family-health` — anchor: "documenting your family health history"
  5. `/blog/family-history/research` — anchor: "at-home testing and family health documentation"
  6. `/blog/pregnancy-genetic` — anchor: "prenatal genetic testing" (light-touch, from the kids/teens section where a new baby's records come up)
  7. `/blog/caregiving/retirement-cost-of-caregiving` — anchor: "the time and financial cost of caregiving" (cross-cluster, from the intro or checklist)
- **Link FROM (update these to point to the pillar):**
  1. `/blog/family-history/organizing-medical-records` — anchor: "who in your family should have access to which records"
  2. `/blog/family-history/caregiver-guide-aging-parents` — anchor: "getting legal access to a parent's medical records"
  3. `/blog/family-health-monitoring` — anchor: "sharing one medical record across a family"
  4. `/blog/family-history/documenting-family-health` — anchor: "family access and permissions for medical records"
  5. `/blog/family-history/research` — anchor: "setting up shared access to your family's records"
- **Pillar connection:** this IS the pillar for the Family Medical Record Organization cluster.
- **Cluster position:** Hub. The five posts above become its spokes.

## E-E-A-T Signals to Include

- **Experience:** none claimed — no first-hand anecdote. Differentiation is sourced synthesis + framework + checklist.
- **Expertise:** named reviewer with health-privacy-law or patient-advocacy credentials (strongly preferred), via `authorUrl` → `Person` schema + a visible "Reviewed by …" line and short bio. Fallback: editorial-team credential, and flag the ≥90 gate risk.
- **Authority:** anchor every legal claim to HHS OCR, ONC/ASTP, HHS OIG, AAP, SAHM, Guttmacher, AARP/NAC — primary bodies, not vendor blogs. Dated, visible References list. Date-stamp every state-variable claim and link Guttmacher's live tables.
- **Trust:** surface state variation and the info-blocking penalty-attribution nuance rather than flattening them; one brand mention + one `ProductCallout`; an explicit "this is general information, not legal or medical advice; rules vary by state, confirm with your providers and, where it matters, an attorney" line near the top.

## Writer Caveats (carry every one into the draft — from the research packet)

1. **Never flatten state variation.** Spouse-as-representative, minor-consent categories, springing-POA activation, guardian vs. conservator terminology, default-surrogate order, deceased-person access — all state-driven. Condition claims on capacity + state law; date-stamp; link live tables.
2. **PPV-style precision on the info-blocking penalty:** $1M/violation applies to **health IT developers and HINs** (OIG rule, eff. Sept 1, 2023). Providers face separate **disincentives** (2024 HHS rule). Do not write "providers can be fined $1M."
3. **December 2025 ASTP/ONC deregulatory proposed rule** — verify status at publish; do not present as current law.
4. **No coordination-harm statistic.** Do not attach generic medical-error or duplicate-testing cost figures to record-sharing or care-coordination failures. No verified coordination-specific national source exists.
5. **Mental-health / substance-use minor-consent count is unresolved** — cite Guttmacher's "Overview of Minors' Consent Law" table directly rather than asserting a number (research could not fetch it).
6. **Advance-directive prevalence:** the ~1-in-3 figure is 2011–2016 data (2017 publication); the 46% figure is adults 50–80 (2024 U-M poll). Name both populations; there is no current all-adult national figure.
7. **Unfetched primary pages** (HHS OCR "Personal Representatives," FAQ 2087, FAQ 220, provider family/friends guide; Guttmacher "Overview of Minors' Consent Law") returned 403/404 to research tooling. Link-check and quote-check each against the live page before publish.
8. **Portal age thresholds vary** (12 vs. 13 vs. 14) and "limited access" contents vary by health system and state. Write "around age 12–13" and "varies by organization."
9. **Do not screenshot a real vendor portal.** The Sharing-Hub visual is a stylized generic mock.
10. **PAA question list and AI-Overview citation holders are inferred from rankings, not a live SERP capture** — verify before using questions as headings or FAQ schema.

## Rendering notes (house constraints)

- New file: `app/(site)/blog/family-history/shared-family-medical-record/page.tsx`. `url="/blog/family-history/shared-family-medical-record"`, `categoryKey="health-records"`.
- Components: `KeyTakeaways`, `StatTrio`, `NumberedPoints`, `InlineImage`, `ProductCallout`, `PullQuote`, `BlogFAQ`, `HeadingWithAnchor` (renders `<h2>`; ids must match the `sections` rail labels exactly). Tables: hand-written `<table className="w-full text-left border border-gray-300">` with `<thead className="bg-gray-100">`, each wrapped in `<div className="overflow-x-auto">`. No MDX, no chart library.
- `metadata` via `createPageMetadata`: `primaryKeyword`, `description`, `path`, `type:"article"`, `keywords`, `image`.
- `ArticleLayout` props: `title`, `description`, `image` + `imageAlt`, `datePublished` (publish date), `dateModified` (same at launch), `authorName`/`authorCredentials`/`authorUrl`/`authorBio` per the review decision, `readTime` (~15–17 min at this length), `tags={["Health records"]}`, `sections`, `keywords`.
- Add the new post to `components/Blog/blogData.tsx` (next `id`), `categoryKey: "health-records"`, consider `featured: true` (it's a pillar).
- References block: house pattern (dated, `rel="noopener noreferrer"`), listing HHS OCR (personal representatives; access; family/friends guide), ONC/ASTP (2024 data brief; API brief; information blocking), HHS OIG info-blocking rule, AAP, SAHM, Guttmacher (contraception, STI, overview), AARP/NAC (2025; 2020 50+), Health Affairs 2017, U-M Healthy Aging Poll, MyChart.org, Apple Health Records FAQ, CMS Patient Access API FAQ.
- After publish: add inbound links from the five spokes (see Link FROM) and run `/blog cannibalization` against `organizing-medical-records` to confirm the two are cleanly differentiated.

## Distribution Plan

- **Reddit:** r/CaregiverSupport, r/AgingParents, r/Alzheimers, r/eldercare — value-first comments on "hospital won't talk to me about my mom" / "lost access to my kid's MyChart" threads; link only where it genuinely answers. r/kaizenhealth: a "what we published and why" post (the role-based-access angle). 2–3 days after publish.
- **YouTube (optional, pillar):** explainer "Getting access to a family member's medical records: the 3 ways that actually work," reusing the three-routes and portal-age-timeline visuals. ~7–9 min.
- **LinkedIn:** same-day from the Kaizen page — angle: "families are coordinating medical access at scale (portal access to someone else's record doubled from 2020 to 2024) and the rules are widely misunderstood." Audience: caregivers, HR/benefits, health professionals.
- **Email:** next weekly batch — excerpt on "relationship isn't access, and a financial POA usually isn't enough," subject line "Who in your family can actually see your medical records?", CTA to the pillar.
- **Twitter/X:** same-day thread — hook: "Being someone's spouse or adult child does not give you access to their medical records. Here are the three things that actually do:" → 4–5 tweets on the three routes, the financial-POA gap, and the age-12 portal step-down. Link last.

---

**Status:** Ready for `/blog write` (new pillar page). Resolve the named-reviewer decision before drafting if possible.
