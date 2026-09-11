# Content Brief: Genetic Testing During Pregnancy — Screening, Diagnosis & Understanding Your Results

**Type:** Substantive rewrite of an existing post (freshness + expansion)
**Existing page:** `app/(site)/blog/pregnancy-genetic/page.tsx` · **URL stays:** `/blog/pregnancy-genetic`
**Prepared:** 2026-09-10 · feeds the Sep 22 Genetic & Hereditary Risk pillar
**Companion docs:** `drafts/pregnancy-genetic-analysis-2026-09-10.md` (67/100 audit), research packet (in this session)

---

## Why this rewrite

The live post scores 67/100. It omits the current standard of care (no cfDNA/NIPT, no ACOG universal-offer guidance, no diagnostic testing, no carrier screening depth), has **zero internal links**, no quantitative data, disproportionate product copy, and an off-topic CRISPR bullet. This is a rebuild, not a date bump — per the Substantive Maintenance pillar, `dateModified` only moves because the content genuinely changes.

**Guideline shift the rewrite must capture:** As of Nov 2025, **SMFM Consult Series #74** replaced SMFM Consult #36, and ACOG issued a companion Practice Advisory (dated Jan 2026) that **replaces ACOG Practice Bulletin 226**. No consumer competitor reflects this yet — first-mover advantage on "what changed."

---

## Template

**Recommended:** `how-to-guide` — the strongest competitive gaps are decision-oriented ("should I test / which test / what does a positive mean / what do I do next"), and a how-to structure supports the decision framework, comparison tables, and step-by-step results guidance that differentiate this piece. Informational coverage (conditions, tests, prevalence) is folded in as answer-first sections.
**Alternative:** `faq-knowledge` — the SERP is PAA-heavy; viable if we'd rather lead with the question set. Rejected as primary because it under-serves the decision-framework angle.
**Template file:** `skills/blog/templates/how-to-guide.md`

## Target Keywords

- **Primary:** `genetic testing during pregnancy` (also strong: `prenatal genetic testing`) — the current title's `genetic conditions during pregnancy` is retained as a secondary; it has thinner intent and we already rank-adjacent for it.
- **Secondary:** `prenatal screening tests`, `NIPT accuracy` / `cell-free DNA screening`, `screening vs diagnostic test pregnancy`, `carrier screening`, `what does a positive NIPT result mean`
- **Questions (from observed PAA):**
  - What genetic conditions can be detected during pregnancy?
  - What is the difference between screening tests and diagnostic tests?
  - What week is genetic testing done during pregnancy?
  - How accurate is NIPT / cell-free DNA screening?
  - What does a positive genetic screening result mean?
  - Is NIPT covered by insurance?
  - What is carrier screening and who should have it?

## Search Intent

**Informational, decision-support.** Searchers are pregnant or planning a pregnancy and are trying to (1) understand what conditions are screened for and how, (2) decide whether and which testing to do, and (3) — the highest-value, least-served need — understand what a *positive screening result* actually means before making any decision. They are anxious; tone must be calm, concrete, non-alarmist, and explicit that most decisions are theirs to make.

## Content Parameters

- **Word count:** 2,200–2,800 (up from ~900)
- **Reading level:** Flesch 60–70, grade 7–8 (consumer). Define every clinical term on first use (aneuploidy, cfDNA, PPV, mosaicism, microarray).
- **Format:** Next.js TSX page (same file). House components only — see "Rendering notes" below.
- **H2 sections:** 8 + FAQ
- **Images:** 1 hero + 3 in-body (see Visual Element Plan). All stock URLs must be validated (HTTP 200 + image content-type) before use.
- **Charts / data visuals:** No chart component exists in this repo. Use: 2 HTML `<table>` blocks, 1 `StatTrio`, and 2 `blog-image`-generated infographics (PPV-by-age bar chart + gestational-week timeline). Each visual is a different type — no duplicates.
- **FAQ items:** 6, mapped to the PAA list.
- **Medical review:** **DECISION REQUIRED.** This is YMYL content. First choice: a named OB/GYN or certified genetic counsellor as reviewer, rendered with `authorUrl` (triggers `Person` schema, per the Dr. Benur pattern) and a "Medically reviewed by …" line. Fallback: `authorCredentials="Reviewed by the Kaizen Health editorial team"` (consistent with the AI-agents cluster). A named reviewer is effectively required to clear the delivery contract's ≥90 / zero-P0 gate — flag if unavailable.

## Recommended Title

**Genetic Testing During Pregnancy: Screening, Diagnosis, and What the Results Mean**

Alternatives:
1. Prenatal Genetic Testing: A Calm, Current Guide to Screening and Diagnostic Options
2. Genetic Conditions During Pregnancy: What's Screened For, How, and What a Positive Result Means

(Keep the `<h1>` and `ArticleLayout` `title` aligned to whichever is chosen; `metadata.primaryKeyword` drives the `<title>` tag.)

## Meta Description

> A current guide to prenatal genetic testing: how screening and diagnostic tests differ, what conditions they check for, when each is done, and what a positive result actually means before you decide anything.

(≤160 chars after `normalizeDescription`; page-specific; matches visible content.)

## Key Takeaways box (house `KeyTakeaways`, placed after the intro)

- Prenatal testing comes in two kinds: **screening** estimates the chance of a condition; **diagnostic** tests (CVS, amniocentesis) confirm it. Current guidance is to offer both to every pregnant patient, regardless of age.
- **cfDNA (NIPT) is the most accurate screen** for Down syndrome, trisomy 18, and trisomy 13 — but it is still a screen. A positive result needs diagnostic confirmation before any irreversible decision.
- **A "positive" screen is not a diagnosis.** For Down syndrome, the chance a positive cfDNA result is a true positive ranges from roughly 50% at age 20 to about 80% at 35 to over 90% at 40 (SMFM Consult Series #74, 2025).
- **Carrier screening** — ideally before pregnancy, and including the partner — tells you whether you could pass on a recessive condition like cystic fibrosis, SMA, sickle cell disease, or Tay-Sachs.
- Modern estimates put the added miscarriage risk from CVS or amniocentesis near **1 in 300–1 in 500 or lower** — well below the older "1 in 200" figure (Salomon et al., 2019).

## Information Gain Opportunities

- **[UNIQUE INSIGHT] "What a positive screen actually means" section.** No consumer competitor quantifies positive predictive value by maternal age, explains confined placental mosaicism (affects up to ~59% of positive 45,X cfDNA results), references the 2022 FDA safety communication, or explains "no-call" results. This is the single most valuable original section.
- **[UNIQUE INSIGHT] A real decision framework.** Competitors default to "talk to your provider." Provide a structured aid: *Do you want a definitive answer or a risk estimate? Would the result change your medical care or how you prepare? How do you weigh a ~0.1–0.3% procedure risk?* Render as an infographic + short prose.
- **[UNIQUE INSIGHT] Cost & insurance reality.** Concrete self-pay ranges, the age-35 coverage cliff, the ACA framework, Medicaid state-by-state variation, and "questions to ask before you consent." High intent, near-zero quality supply among clinical competitors.
- **[UNIQUE INSIGHT] Partner / non-pregnant-parent carrier screening.** Only Cleveland Clinic touches it, briefly. Cover concurrent vs. reflex testing, what "both carriers" means (25% per pregnancy), and reproductive options (IVF with PGT-M, donor gametes, prenatal diagnosis, preparation, adoption).
- **[UNIQUE INSIGHT] The 2025–26 guideline change.** PB 226 retired; SMFM #74; sex-chromosome screening now explicitly opt-in; routine microdeletion and genome-wide cfDNA panels discouraged.
- No original proprietary data is available; do **not** imply first-hand experience. Differentiation is sourced-synthesis + framework, not anecdote.

## Content Outline

### Introduction (120–160 words)
- Hook: most expectant parents are offered a menu of genetic tests early in pregnancy and have days to decide, with little plain-language help on what the results will and won't tell them.
- Problem: the choice is genuinely personal, the terminology is dense, and a "positive" result is widely misunderstood as a diagnosis.
- Promise: what's screened for, which tests exist and when, what results mean, what they cost, and how to decide.
- `KeyTakeaways` box immediately after.
- Hero image after the box.

### H2: Screening tests vs. diagnostic tests — the distinction that matters most
- **Answer-first:** Screening tests estimate the *chance* a baby has a condition; diagnostic tests (CVS, amniocentesis) *confirm or rule it out*. Current ACOG/SMFM guidance (2025–26) is that both screening and diagnostic testing should be discussed and offered to every pregnant patient, regardless of age or baseline risk.
- Cover: what "offered to everyone" changed from (the old risk-based model); that accepting or declining any test is the patient's choice; that a screen never ends the question by itself.
- **Key stat:** cfDNA should be routinely available to all obstetrical patients; it is the most sensitive/specific screen for common aneuploidies in any population (SMFM Consult Series #74, 2025, GRADE 1B).

### H2: The genetic conditions prenatal tests look for
- **Answer-first:** Two broad groups — chromosomal differences (extra or missing chromosomes, e.g. Down syndrome / trisomy 21, trisomy 18, trisomy 13, sex-chromosome differences) and single-gene inherited conditions (e.g. cystic fibrosis, SMA, sickle cell disease, Tay-Sachs), which carrier screening addresses.
- Cover: brief, non-frightening description of each; that many are rare; that inheritance patterns differ (recessive needs both parents; X-linked; sporadic chromosomal).
- **TABLE 1 — Conditions overview:** columns = Condition · Type · How it's detected prenatally · Who is typically offered screening · Approx. frequency. Rows: Down syndrome, Trisomy 18, Trisomy 13, Sex-chromosome (e.g. 45,X), Cystic fibrosis, SMA, Sickle cell disease, Tay-Sachs, Fragile X, Thalassemias.
- **Key stats:** Down syndrome birth prevalence ~15.55 per 10,000 (≈1 in 640), rising over two decades (Stallings et al., *Birth Defects Research* 2024; older CDC figure ~1 in 700). CF carrier frequency ~1 in 25 non-Hispanic White, varying by ancestry (ACOG CO 691). Sickle cell disease ~1 in 365 Black/African American births (CDC).
- Do **not** reproduce old maternal-age risk tables without noting they're often quoted at midtrimester, not live birth, and that most babies with Down syndrome are born to mothers under 35 (more births in that group).

### H2: Your screening options and when they happen
- **Answer-first:** The main screens are cell-free DNA (cfDNA / NIPT, from ~10 weeks), first-trimester combined screening (nuchal translucency + bloodwork, 10–13 weeks), and the second-trimester quad screen (15–22 weeks, which also screens for open neural tube defects).
- **INFOGRAPHIC (blog-image, timeline type):** prenatal genetic tests by gestational week — carrier screening (preconception–early), first-trimester combined (10–13 wk), cfDNA (≥10 wk), CVS (10–13 wk), quad screen (15–22 wk), amniocentesis (≥15 wk), anatomy scan (18–22 wk).
- **TABLE 2 — Detection rate for Down syndrome by method:** cfDNA ~99% · integrated/sequential ~94–96% · first-trimester combined 82–87% · quad screen ~81%. Sources: SMFM #74 (cfDNA); AAFP 2020 review (traditional). Note quad screen's added NTD value.
- Cover: cfDNA also reports trisomy 18/13; sex-chromosome analysis is now an **opt-in** choice with pretest counselling; routine microdeletion and genome-wide cfDNA panels are **not** recommended for the general population (SMFM #74). "No-call"/test-failure results happen in ~1% and are themselves meaningful — not a null.

### H2: What a "positive" screening result actually means
- **Answer-first:** A positive screen means *higher chance*, not *confirmed*. How likely a positive cfDNA result is to be a true positive (its positive predictive value) depends heavily on the condition and on maternal age.
- **INFOGRAPHIC / CHART (blog-image, grouped bar):** cfDNA positive predictive value for trisomy 21 / 18 / 13 at maternal ages 20 / 25 / 35 / 40. T21 ≈ 48 / 51 / 79 / 93%. T18 ≈ 14 / 15 / 39 / 69%. T13 ≈ 6 / 7 / 21 / 50%. Source: SMFM Consult Series #74. Caption: "A positive screen always needs diagnostic confirmation." **Writer/editor: spot-check these exact percentages against the published SMFM #74 tables before printing them as precise figures — they were extracted from the full text by an assistive model and are directionally reliable but not yet page-verified.**
- Cover: confined placental mosaicism (the cfDNA signal can come from the placenta, not the fetus — up to ~59% of positive 45,X results); the FDA's 2022 safety communication (no NIPS test is FDA-authorized; a positive can reflect placental, not fetal, changes; confirm before any irreversible decision); rare incidental findings (maternal chromosomal variants, and very rarely a maternal cancer signal — handle in one careful sentence, not alarmist); that a negative screen lowers but never fully eliminates risk.
- **Key stat:** trisomy 21 cfDNA sensitivity ~99.2%, specificity ~99.91%; PPV ~79% at age 35 — roughly 1 in 5 positive screens at that age is not a true positive (SMFM #74, 2025).

### H2: Diagnostic testing — CVS and amniocentesis
- **Answer-first:** When a definitive answer is wanted — after a positive screen, an abnormal ultrasound, or simply by choice — CVS (10–13 weeks) or amniocentesis (from 15 weeks) sample placental or amniotic-fluid cells and test them directly, usually with a chromosomal microarray.
- **STATTRIO or small table — current procedure-related loss risk:** amniocentesis ~0.30% (95% CI 0.11–0.49); CVS ~0.20% (95% CI −0.13–0.52); historical counselling figure ~1 in 100–200 shown for contrast. Source: Salomon et al., *Ultrasound Obstet Gynecol* 2019. Frame as "the *added* risk is near 1 in 300–1 in 500 or lower, and close to background for someone at the same baseline risk" — and note estimates vary by meta-analysis (Akolekar 2015: 0.11% / 0.22%).
- Cover: what microarray finds that karyotype/cfDNA miss (small deletions/duplications); results timelines; that diagnostic testing is the right route for anyone who specifically wants microdeletion/CNV information.

### H2: Carrier screening — and why your partner matters
- **Answer-first:** Carrier screening (a blood or saliva test, ideally before pregnancy) tells you whether you carry a recessive gene change. It only predicts risk to a pregnancy when **both** partners are tested — if both carry the same condition, each pregnancy has a 25% chance of being affected.
- Cover: ACOG's position — ethnicity-based, pan-ethnic, and expanded panels are all "acceptable," with cystic fibrosis, SMA, plus CBC and hemoglobinopathy screening offered to everyone, and fragile X / Tay-Sachs / others by history or ancestry (ACOG CO 690/691, reaffirmed 2023). ACMG's position — a pan-ethnic **Tier 3** panel (113 genes, carrier frequency ≥1 in 200) for everyone pregnant or planning pregnancy (ACMG 2021 practice resource + 2024 laboratory technical standard). **Present the ACOG/ACMG divergence honestly** as a genuine, current difference, noting ACMG's is a "practice resource," not a full guideline.
- Cover: concurrent vs. reflex (tandem) partner testing; residual risk (a negative result lowers but doesn't zero the chance; detection varies by ancestry — an equity point); reproductive options if both are carriers (IVF with PGT-M, donor gametes, prenatal diagnosis, preparation, adoption).
- **Key stats (carrier frequency):** SMA ~1 in 54 pan-ethnic; CF ~1 in 25 non-Hispanic White / ~1 in 80 Black / ~1 in 100 Asian American; Tay-Sachs ~1 in 30 Ashkenazi Jewish vs. ~1 in 300 general; FMR1 premutation ~1 in 150–290 in women. Sources: ACOG CO 691; Owens et al. 2018; CDC.

### H2: What genetic testing costs, and what insurance covers
- **Answer-first:** With insurance, cfDNA and carrier screening are often $0–$300 out of pocket; self-pay lab prices are commonly ~$99–$299; without coverage, list prices and diagnostic procedures run much higher.
- **TABLE 3 (optional, or prose) — cost ranges:** NIPT self-pay ~$99–$299 (list $800–$2,000+); expanded carrier screening ~$100–$250 patient-pay (list up to ~$2,000); CVS / amniocentesis ~$1,500–$5,000 without insurance. Source: consumer cost aggregators + a 2024 hospital price sheet — **label these as ranges from Tier 3 sources**, not precise figures.
- Cover: the ACA framework (non-grandfathered plans must cover USPSTF A/B + HRSA women's-preventive services with no cost-sharing, but routine aneuploidy screening is *not* a guaranteed zero-cost benefit); some plans still gate coverage at age ≥35 or a medical indication; Medicaid NIPT coverage varies by state (more states added it 2020–2023). Tell readers to verify their specific plan and state Medicaid. "Questions to ask before you consent": Is this in-network? What's my expected out-of-pocket? Is there a patient-pay cap? Will a positive result trigger further covered testing?
- **Do NOT publish a "% of US pregnancies using NIPT" figure** — no defensible Tier-1/2 source exists. Frame qualitatively: NIPT has moved from a high-risk-only test to a first-line option in routine prenatal care, now covered by commercial and many Medicaid plans for average-risk pregnancies.

### H2: Deciding what's right for you — and what to do with the results
- **Answer-first:** There's no universally "correct" amount of testing. The useful questions are whether you want a risk estimate or a definitive answer, whether a result would change your medical care or how you prepare, and how you weigh a small procedure risk.
- **INFOGRAPHIC (blog-image, decision-tree/framework type):** branch on *Do you want a definitive answer? → screening vs diagnostic. Would the result change your care or preparation? How do you weigh a ~0.1–0.3% procedure risk?*
- Cover: after a positive screen or diagnosis — genetic counselling referral, maternal-fetal-medicine specialist, a realistic decision timeline, reputable support organisations, and an explicit statement that continuing the pregnancy is a valid choice with real value in preparation. Keep the tone supportive, not clinical.
- **AI / Kai — brief, research-labeled, ~90–120 words, product-scoped only:** "Researchers are testing machine-learning tools to help interpret uncertain genetic variants and flag chromosomal changes on lab images. As of 2026 these are research tools — no medical society recommends them for clinical decisions. Kaizen Health's assistant, Kai, doesn't interpret genetic results; it helps you keep test results and family history in one place, translate the terminology, and build a question list for your clinician and genetic counsellor." One `ProductCallout`. No other Kai/Kaizen mentions in the body.

### FAQ (6 items — house `BlogFAQ`)
1. **What genetic conditions can be detected during pregnancy?** — chromosomal (Down syndrome, trisomy 18/13, sex-chromosome differences) via screening/diagnostic tests; single-gene recessive conditions (CF, SMA, sickle cell, Tay-Sachs) via carrier screening. Which apply depends on family history and ancestry.
2. **What's the difference between a screening test and a diagnostic test?** — screening estimates risk (cfDNA, first-trimester combined, quad screen); diagnostic confirms (CVS, amniocentesis). A positive screen should be confirmed before any irreversible decision.
3. **What week is genetic testing done?** — carrier screening ideally before pregnancy; cfDNA from ~10 weeks; first-trimester combined 10–13 weeks; CVS 10–13 weeks; quad screen 15–22 weeks; amniocentesis from 15 weeks.
4. **How accurate is NIPT / cell-free DNA screening?** — very sensitive for Down syndrome (~99%), lower for trisomy 13; but accuracy of a *positive* result (PPV) depends on age and condition — from ~50% to ~90%+ for Down syndrome. Still a screen, not a diagnosis. (SMFM #74, 2025; FDA 2022.)
5. **What does a positive result mean, and what happens next?** — higher chance, not confirmed. Next step is genetic counselling and, if you want certainty, diagnostic testing (CVS or amniocentesis with microarray).
6. **Is genetic testing covered by insurance?** — often largely covered, but varies; some plans gate at age 35 or require an indication, and Medicaid coverage varies by state. Ask about in-network status, out-of-pocket cost, and patient-pay caps before consenting.

### Conclusion / recap (100–150 words)
- Bulleted recap of the two test types, "a positive screen isn't a diagnosis," carrier screening + partner, current low procedure risk, and "the amount of testing is your choice."
- CTA: bring your family health history and any prior results to your first prenatal visit and ask which screening fits your situation; use Kaizen Health to keep results and history in one place to share with your care team. (One CTA, not a feature list.)

## Statistics to Include

| # | Statistic | Source | Year | Section |
|---|-----------|--------|------|---------|
| 1 | cfDNA should be routinely available to all obstetrical patients; most sensitive/specific screen for common aneuploidies in any population (GRADE 1B) | SMFM Consult Series #74, *Pregnancy* — pmc.ncbi.nlm.nih.gov/articles/PMC13344640/ | 2025 | Screening vs diagnostic |
| 2 | Screening + diagnostic testing should both be discussed/offered to all pregnant patients regardless of age or risk | ACOG Practice Bulletin 226 (principle carried into 2025–26 guidance) | 2020 / 2025–26 | Screening vs diagnostic |
| 3 | Trisomy 21 cfDNA: sensitivity ~99.2%, specificity ~99.91%; PPV ~48% (age 20) → ~79% (35) → ~93% (40) | SMFM Consult Series #74 | 2025 | What a positive means; FAQ 4 |
| 4 | Trisomy 18 PPV ~14%→39%→69%; Trisomy 13 PPV ~6%→21%→50% by maternal age | SMFM Consult Series #74 | 2025 | What a positive means (chart) |
| 5 | Confined placental mosaicism affects up to ~59% of positive 45,X (Turner) cfDNA results — reason SCA screening is now opt-in | SMFM Consult Series #74 | 2025 | What a positive means |
| 6 | No NIPS test is FDA-authorized; a positive can reflect a change in the placenta, not the fetus; confirm before irreversible decisions | FDA Safety Communication on NIPS — fda.gov/medical-devices/safety-communications | 2022 | What a positive means |
| 7 | cfDNA no-call rate ~0.85% across 31 studies; a no-call carries relative risk ~130 for T21/18/13 vs. reportable results | SMFM Consult Series #74 (ACMG estimate cited within) | 2025 | Your screening options / What a positive means |
| 8 | First-trimester combined screening detects 82–87% of trisomy 21; quad screen ~81%; integrated/sequential ~94–96% | AAFP, *Am Fam Physician* 2020;101(8):481–488 — aafp.org/pubs/afp/issues/2020/0415/p481.html | 2020 | Screening options (table) |
| 9 | Amniocentesis procedure-related miscarriage risk ~0.30% (95% CI 0.11–0.49); CVS ~0.20% (95% CI −0.13–0.52); below historical ~1 in 100–200 | Salomon et al., *Ultrasound Obstet Gynecol* 2019 — pubmed.ncbi.nlm.nih.gov/31124209/ | 2019 | Diagnostic testing |
| 10 | Earlier meta-analysis: amnio 0.11%, CVS 0.22% — estimates vary by methodology | Akolekar et al., *Ultrasound Obstet Gynecol* 2015 — pubmed.ncbi.nlm.nih.gov/25042845/ | 2015 | Diagnostic testing (caveat) |
| 11 | Down syndrome birth prevalence 15.55 per 10,000 (≈1 in 640), 2016–2020, up from 12.78 in 1999–2001 | Stallings et al., *Birth Defects Research* 2024 — onlinelibrary.wiley.com/doi/abs/10.1002/bdr2.2301 | 2024 | Conditions |
| 12 | ~5,775 US babies born with Down syndrome per year | CDC, "Down Syndrome" (Birth Defects) — cdc.gov/birth-defects/about/down-syndrome.html | 2024 | Conditions |
| 13 | CF incidence ~1 in 2,500–3,500; carrier frequency ~1 in 25 non-Hispanic White, ~1 in 80 Black, ~1 in 100 Asian American | Rho et al., *J Cyst Fibros* 2023; ACOG CO 691 | 2023 / 2017 | Conditions; carrier screening |
| 14 | Sickle cell disease ~1 in 365 Black/African American births; sickle cell trait ~1 in 13 | CDC, "Data and Statistics on Sickle Cell Disease" — cdc.gov/sickle-cell/data/ | 2024–26 | Conditions; carrier screening |
| 15 | SMA carrier frequency ~1 in 54 pan-ethnic; Tay-Sachs ~1 in 30 Ashkenazi Jewish vs ~1 in 300 general; FMR1 premutation ~1 in 150–290 in women | ACOG CO 691; Sugarman et al. 2012; Owens et al. 2018 | 2017 / 2012 / 2018 | Carrier screening |
| 16 | ACMG Tier 3 carrier panel = 113 genes (carrier freq ≥1 in 200), recommended for all pregnant / planning pregnancy; ACOG treats ethnic-specific, pan-ethnic, and expanded panels as all "acceptable" | ACMG practice resource (Gregg et al., *Genet Med* 2021) + 2024 technical standard; ACOG CO 690/691 (reaffirmed 2023) | 2021–24 / 2017–23 | Carrier screening (divergence) |
| 17 | 22q11.2-targeted cfDNA panel: PPV ~44–53%, false-positive rate ~0.05–0.07% — only microdeletion SMFM permits screening for, after counselling | SMFM Consult Series #74; 2021 systematic review cited within | 2025 | Screening options (why panels are limited) |

## Evidence-Backed Section Plan

| Section | Core claim | Supporting evidence | Source |
|---------|-----------|---------------------|--------|
| Screening vs diagnostic | Both are now offered to everyone; a screen never settles the question alone | cfDNA GRADE 1B "routinely available to all"; PB 226 universal-offer principle | SMFM #74; ACOG PB 226 |
| Conditions | Most screened conditions are rare; frequency varies by ancestry | Down syndrome ~1 in 640 (rising); CF carrier 1 in 25–100 by ancestry; SCD 1 in 365 Black births | Stallings 2024; CDC; ACOG CO 691 |
| Screening options | cfDNA is the most accurate aneuploidy screen; panels beyond the common trisomies are limited | cfDNA sens/spec ~99%/99.9%; microdeletion + genome-wide CNV screening not recommended for general population | SMFM #74 |
| What a positive means | A positive screen is a probability, not a diagnosis; PPV depends on age and condition | T21 PPV ~48–93% by age; 45,X positives up to 59% confined placental mosaicism; FDA warning | SMFM #74; FDA 2022 |
| Diagnostic testing | Added miscarriage risk from CVS/amnio is far lower than historically quoted | Amnio ~0.30%, CVS ~0.20% procedure-related (CI-bounded); older figure ~1 in 100–200 | Salomon 2019; Akolekar 2015 |
| Carrier screening | Risk to a pregnancy is only defined once both partners are tested; guidance bodies differ on panel scope | 25% per pregnancy if both carriers; ACMG Tier 3 (113 genes) vs ACOG "all strategies acceptable" | ACOG CO 690/691; ACMG 2021/2024 |
| Cost & insurance | Testing is often low-cost with insurance but coverage is uneven | Self-pay NIPT ~$99–299; age-35 coverage gates persist; Medicaid varies by state | Consumer cost aggregators (Tier 3); HRSA women's-preventive framework |
| Deciding / results | The right amount of testing is a personal decision tied to whether results change care or preparation | ACOG framing of patient autonomy to accept/decline; genetic-counselling referral standard | SMFM #74; ACOG PB 226 |

## Cover Image

| Option | Details |
|--------|---------|
| Photo hero (preferred) | Pregnant person + clinician/genetic counsellor in consultation reviewing results. Mine Pexels 7659869 / 7088833; extract direct CDN URL; validate HTTP 200 + image type. Pexels License, no attribution. |
| Generated hero (alt) | `blog-image`, editorial mode: warm, non-clinical scene of a pregnant person + partner talking with a counsellor across a table with a laptop; diverse; natural light; no text. |
| Keep existing | `/images/blog/pregnancy-genetic.png` may be reused if still on-brand, but replace the alt text (currently just echoes the title). |
| Dimensions | 1200×630 (OG-compatible). |

## Visual Element Plan (no duplicate types)

| # | Type | Data / content | Section | Build path |
|---|------|----------------|---------|-----------|
| 1 | HTML `<table>` (thead) | Conditions overview: Condition · Type · Prenatal detection · Who's offered screening · Approx frequency | The genetic conditions | House `<table className="w-full text-left border border-gray-300">` pattern; wrap in `overflow-x-auto` div for mobile |
| 2 | HTML `<table>` (thead) | Down syndrome detection rate by screening method (cfDNA / integrated / first-trimester / quad) | Your screening options | Same table pattern |
| 3 | `blog-image` — timeline infographic | Prenatal genetic tests by gestational week (carrier → cfDNA → first-tri combined → CVS → quad → amnio → anatomy scan) | Your screening options | `/blog image generate`, infographic mode |
| 4 | `blog-image` — grouped bar chart | cfDNA PPV for T21/T18/T13 at maternal ages 20/25/35/40 | What a positive screening result means | `/blog image generate`, chart/infographic mode; caption "A positive screen is not a diagnosis" |
| 5 | `StatTrio` | 99.2% T21 cfDNA sensitivity · ~1 in 5 positive screens at 35 not a true positive · ~0.3% added amnio miscarriage risk | spread across "What a positive means" / "Diagnostic testing" | House `StatTrio` component |
| 6 | `blog-image` — decision-tree infographic | Screening vs diagnostic decision framework (3 branch questions) | Deciding what's right for you | `/blog image generate`, infographic mode |
| 7 | Photo (`InlineImage`) | Blood draw / test tube (NIPT + carrier screening are blood tests) | Your screening options or carrier screening | Pexels 8460346 — extract + validate |
| 8 | Photo (`InlineImage`) | Couple / partners in conversation | Carrier screening — and why your partner matters | Pixabay candidate (see research §4A) — validate |

Chart-diversity check: table, table, timeline, bar chart, stat trio, decision tree, photo, photo — no visual type repeats in a way that reads as monotonous (the two tables carry different data structures).

## Competitive Gaps to Exploit (ranked)

1. **What a "positive" screen actually means** — PPV by age, confined placental mosaicism, FDA warning, no-call results. No competitor quantifies or explains the biology. Highest-value section.
2. **A real decision framework** — competitors say "talk to your provider"; we give a values-based structure + infographic.
3. **Cost & insurance reality** — concrete ranges, the age-35 cliff, ACA/Medicaid framework, "questions to ask before consenting." Almost no clinical competitor covers it.
4. **Partner / non-pregnant-parent carrier screening** — only Cleveland Clinic mentions it, briefly.
5. **The 2025–26 guideline change** — PB 226 retired, SMFM #74, SCA screening opt-in, microdeletion/genome-wide panels discouraged. No consumer page reflects this yet.
6. **Current procedure-loss numbers** — corrects the outdated "1 in 200" fear with 2019 meta-analysis data.
7. **Emotional / next-steps after a positive** — genetic counselling, MFM referral, support orgs, "continuing the pregnancy is a valid choice." Competitors are cold here; fits Kaizen's family-support positioning.
8. **Twins / multiples** and **no-call results** — rarely addressed in consumer content.

## Internal Link Architecture

- **Link TO** (from this post to existing pages):
  1. `/blog/heart/genetic-risk-score-heart-disease` — anchor: "polygenic risk scores for inherited conditions"
  2. `/blog/family-history/documenting-family-health` — anchor: "document your family health history"
  3. `/blog/family-health-monitoring` — anchor: "how family health history guides screening"
  4. `/blog/diabetes-magnesium-vitamin-d` — anchor: "hereditary risk factors for type 2 diabetes" (light-touch, only if contextually natural in the conditions or carrier section)
  5. `/blog/family-history/organizing-medical-records` — anchor: "keep prenatal test results and records organized"
  6. Genetic & Hereditary Risk pillar (`/blog/family-history/...` — URL TBD) — add on/after Sep 22 when it publishes
- **Link FROM** (update these to point here):
  1. Genetic & Hereditary Risk pillar (Sep 22) — anchor: "prenatal genetic screening and diagnostic testing"
  2. `/blog/family-health-monitoring` — anchor: "genetic testing during pregnancy"
  3. `/blog/family-history/documenting-family-health` — anchor: "prenatal genetic testing options"
  4. `/blog/heart/genetic-risk-score-heart-disease` — anchor: "screening during pregnancy" (where it discusses inherited risk)
- **Pillar connection:** Genetic & Hereditary Risk Awareness cluster
- **Cluster position:** Spoke (one of 4 existing spokes feeding the Sep 22 pillar)

## E-E-A-T Signals to Include

- **Experience:** none claimed — no first-hand anecdote. Differentiation is sourced synthesis + decision framework.
- **Expertise:** named OB/GYN or certified genetic counsellor as medical reviewer (preferred), with `Person` schema via `authorUrl` and a visible "Medically reviewed by …" line and short bio. If unavailable, `authorCredentials="Reviewed by the Kaizen Health editorial team"` and flag that the ≥90 delivery gate is at risk.
- **Authority:** anchor citations to ACOG, SMFM, ACMG, CDC, FDA — primary guidance bodies, not aggregators. Replace the dead ACMG PDF link from the old post. Add a visible, dated References list.
- **Trust:** every material claim inline-cited; surface the ACOG/ACMG divergence and the procedure-loss estimate range rather than papering over them; one brand mention + one `ProductCallout` only; explicit "this is not medical advice; decisions are yours and your clinician's" line.

## Rendering notes (house constraints)

- Same file: `app/(site)/blog/pregnancy-genetic/page.tsx`. Keep `url="/blog/pregnancy-genetic"`, `categoryKey="pregnancy"`.
- Components in `components/Blog/content/`: `KeyTakeaways`, `StatTrio`, `NumberedPoints`, `InlineImage`, `ProductCallout`, `PullQuote`. Headings via `HeadingWithAnchor` with `id`s matching the `sections` rail (fix the label/heading-text mismatches this time). FAQ via `BlogFAQ`. No MDX, no chart library — tables are hand-written `<table>` inside `.kz-article`.
- `metadata` via `createPageMetadata` (already imported): update `primaryKeyword`, `description`, keep `path`, `type:"article"`, keep/replace `image`.
- `ArticleLayout` props to set: `datePublished` (reconcile — page currently says `2025-01-06`, `blogData.tsx`/refs say Feb 2025; pick the original true date), `dateModified="2026-09-…"` (the rewrite date), `authorName`/`authorCredentials`/`authorUrl`/`authorBio` per the medical-review decision, `readTime` (recount, likely 11–13 min), `tags`, `sections`, `keywords`.
- Update `components/Blog/blogData.tsx` id 2: refresh `title`, `metadata` (excerpt), and consider `featured`.
- References block: keep the house pattern (dated, `rel="noopener noreferrer"`), ACOG/SMFM/ACMG/CDC/FDA + AAFP + Stallings + Salomon. Remove CRISPR content entirely.

## Writer caveats (must carry into the draft — from the research packet §6)

1. **PPV percentages** (T21/T18/T13 by age) were extracted from the SMFM #74 PMC full text by an assistive model — directionally reliable, **not page-verified**. Spot-check against the published tables before printing as precise figures; if not verifiable in time, present as banded ranges ("roughly half at 20, around 80% at 35, over 90% at 40").
2. **ACOG Practice Advisory (Jan 2026) exact wording** could not be fetched (paywall). State "ACOG issued a companion Practice Advisory that replaces Practice Bulletin 226" and attribute the specifics to SMFM Consult Series #74, which is fully accessible.
3. **Procedure-loss risk** — present as a range across meta-analyses (Salomon 2019 vs Akolekar 2015), not one number.
4. **Do not publish a "% of pregnancies using NIPT" figure** — no Tier-1/2 source. Qualitative framing only.
5. **Cost/insurance** — Tier 3–4 sources; present as ranges; tell readers to verify their plan and state Medicaid. A KFF/Medicaid.gov check before publish would strengthen this.
6. **AI section** — no medical-society endorsement, no prospective outcome data. Keep to ~90–120 words, explicitly research-stage, Kai scoped to organization/terminology/question-prep. Do not imply Kai interprets results.
7. **Down syndrome prevalence** — use 15.55/10,000 (≈1 in 640, Stallings 2024) and mention the older ~1 in 700; note age-risk tables are often quoted at midtrimester, not live birth.
8. **All image URLs are candidates** — validate (HTTP 200 + image content-type) before embedding; discard 403/404/HTML.
9. **Google AI Overview / PAA publisher list** is inferred from rankings, not a live capture — don't state it as verified.

## Distribution Plan

- **Reddit:** r/BabyBumps, r/pregnant, r/fertility, r/geneticcounseling, r/tryingforababy — value-first comments on threads asking "what does a positive NIPT mean" / "should I do the expanded panel"; link only where the sub allows and it genuinely answers the question. 2–3 days after publish.
- **YouTube (optional):** short explainer "What a positive prenatal screening result actually means" reusing the PPV chart and decision-tree infographic; ~5–7 min. Pillar-adjacent, so only if capacity allows.
- **LinkedIn:** same-day post from the Kaizen page — angle: "prenatal genetic screening guidance changed in late 2025 and most consumer information hasn't caught up." Audience: parents, family caregivers, health-curious professionals.
- **Email:** next weekly batch — 2–3 sentence excerpt on "a positive screen is not a diagnosis," subject line "What a 'positive' prenatal test result really means," CTA to the full post.
- **Twitter/X:** same-day thread — hook: "A 'positive' prenatal genetic screen is one of the most misunderstood results in medicine. What it actually means, by the numbers:" → 4–5 tweets built from the PPV-by-age data, confined placental mosaicism, the FDA note, and "diagnostic testing is the confirm step." Link in the last tweet.

---

**Status:** Ready for `/blog rewrite` (freshness + expansion mode) on `app/(site)/blog/pregnancy-genetic/page.tsx`.
