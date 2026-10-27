# WhatsApp voice notes: policy draft and rollout review

Reviewed against local source and public materials on October 26, 2026.

Status: policy drafts prepared; production rollout is not cleared. This is a
research and implementation record for qualified counsel and the product owner,
not a legal opinion. No signed agreement text, live cloud console, or production
user data was inspected. The owner-provided console acceptance and data logging
screenshots described below were reviewed. Keep the WhatsApp and voice
rollout controls off until the requirements below are resolved.

Confirmed BAA evidence: the owner states that Kaizen has a signed BAA with Google,
and supplied a Google Cloud console screenshot showing the Google Cloud Platform
HIPAA Business Associate Addendum reviewed and accepted on March 12, 2025. The
policy draft states that the BAA is signed. The acceptance date is recorded here
without copying the accepting person's email address.

Confirmed logging evidence: a second owner-provided console screenshot shows
"Data logging is disabled for this project for Google Cloud Speech API", with an
"Enable data logging" button. It establishes the disabled status for the project
shown at capture time. The cropped screenshots do not identify the runtime
Speech-to-Text project; matching the selected project to the backend's
`FB_PROJECT_ID`, applicable data processing terms, endpoint settings, and any
historical logging remain separate checks.

## What changed on the website

- `/docs/privacy` covers WhatsApp, Google transcription, AI recipients, audio
  conversion files, rolling transcript retention, reply copies, consent receipts,
  deletion limits, cross-border processing, and renewed WhatsApp consent.
- `/docs/terms` covers optional voice input, transcription mistakes, clarification,
  medicine decisions, automated replies, emergencies, and separate privacy consent.
- `/docs/consumer-health` provides a distinct consumer health data notice, linked
  from the homepage footer and policy navigation. The Washington Attorney General
  requires a separate homepage link and a notice limited to the required health
  data disclosures. The mobile app listing and in-app links still need review.
  [Washington AG guidance](https://www.atg.wa.gov/protecting-washingtonians-personal-health-data-and-privacy)

The website draft's processing commitments are conditions for launch, not proof
that those controls are already implemented. Confirm the recipient inventory,
affiliate statement, contracts, retention, deletion process, and support handling
before publishing or enabling the corresponding processing.

## Source facts that change the original brief

Paths in this section are relative to the sibling `kaizen-node-backend` repository.
The voice work is currently visible as uncommitted source; this review does not
establish what is deployed.

| Subject                   | Evidence and implication                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Audio conversion          | `src/utils/whatsappAudio.js`, `convertVoiceNoteToWav`, writes input and WAV files in a private temporary directory, then attempts removal in `finally`. It is not purely in-memory conversion. Cleanup failures are suppressed, and a process crash can bypass cleanup. Do not promise that audio never touches disk or that every failure deletes it.                                                      |
| Google request            | `src/services/whatsappVoiceService.js`, `recognizeWav`, calls synchronous `speech.recognize` with inline audio. `src/config/speechClient.js` sets no regional endpoint. This does not prove a logging setting, processing location, or executed contract.                                                                                                                                                   |
| AI recipients             | `src/services/whatsappChatService.js` calls `chatSafetyScreen`; `src/services/chatSafetyScreen.js` sends message text to TypeSafe when configured. The normal answer path sends transcript and recent context to OpenAI Responses with `store: false`. Some low-confidence or safety responses return without an OpenAI generation call. TypeSafe must be disclosed as well as the response model provider. |
| Chat retention            | `src/services/whatsappChatService.js`, `reserveIntake` and `persistTurn`, reset thread `expiresAt` to now plus 30 days. Recent history is capped at 12 messages. This is inactivity-based expiry, not 30 days from each message. Request handling does not itself enforce that timestamp; verify actual TTL or cleanup enforcement.                                                                         |
| Other content copies      | `persistTurn` also saves outbound replies, including the transcript echo, with a seven-day expiry timestamp. The thread's last reply can also include the echo. These copies must be included in deletion and TTL verification.                                                                                                                                                                             |
| Consent gates             | `src/constants/whatsapp.js` currently uses policy version `2026-10-15`. `src/services/whatsappConversationService.js` checks the version before the voice branch. Both the initial notice and separate account-link notice in `src/constants/whatsappCopy.js` need updated disclosures. This website change does not change either notice or the backend version.                                           |
| Deletion                  | `src/services/whatsappUnlinkService.js` deletes the thread and reply records. Unlinking can preserve previously saved records. `DELETE MY DATA` creates a verification link; confirmation and, where set, PIN verification precede account deletion. STOP only opts out of interactions.                                                                                                                    |
| Consent receipt           | `src/constants/whatsappLifecycle.js` schedules receipts for three years and explicitly marks that duration unreviewed. A keyed phone-number reference remains pseudonymous personal information, not anonymous data. Legal justification and deletion exceptions need review. The three years are not a transcription retention requirement.                                                                |
| Unresolved hearing errors | `WHATSAPP_VOICE_GUIDANCE` and `WHATSAPP_VOICE_FOLLOWUP_GUIDANCE` in `src/prompts/whatsapp.js` tell the model to answer after one question and state an assumption if uncertainty remains. That must not become advice based on an assumed drug, dose, unit, or other safety-critical detail.                                                                                                                |

## 1. Consent wording and renewed agreement

No single sentence guarantees compliance across all jurisdictions. The notice
must identify the information, purposes, recipients, choices, retention, and ways
to withdraw consent. A revised policy link alone does not establish informed
consent to newly disclosed processing.

Recommended English notice for the existing versioned WhatsApp agreement flow:

> Kaizen Health helps you organize and understand health information. Agreeing
> creates or connects a Kaizen account linked to your WhatsApp number. We process
> the health information, messages and files you choose to send. Messages, voice
> notes and replies pass through WhatsApp (Meta). If you send a voice note, Google
> Cloud Speech-to-Text processes the audio to create a transcript. Conversion uses
> temporary files; we do not keep an audio archive. We send message text and voice
> transcripts to OpenAI for AI replies and to TypeSafe for safety screening where
> configured. Replies can repeat what we heard. Recent chat history, including
> transcripts, is scheduled to expire after 30 days without activity; new activity
> restarts that period. Reply copies have a seven-day expiry. Processing can take
> place outside your country, including in the United States. Voice notes are
> optional and currently use English speech recognition; you can type instead.
> Type STOP to pause WhatsApp interactions. To
> withdraw WhatsApp consent, unlink WhatsApp in the App or contact us. Type DELETE
> MY DATA and complete verification to delete your account. Limited consent
> receipts and other exceptions are explained in the policy. You must be 18 or
> older and have permission or legal authority to share another person's
> information. Read https://kaizenhealth.io/docs/privacy#whatsapp and
> https://kaizenhealth.io/docs/consumer-health. By choosing Agree, you consent to
> the collection and processing described here, including health information and,
> if you send voice notes, transcription. You may choose No thanks. AI replies
> provide general information, not medical advice. Do not change medicines based
> on them. WhatsApp terms: https://kaizenhealth.io/docs/terms#whatsapp.

Deliver this as a text notice before the short Agree / No thanks button prompt;
do not truncate it to fit an interactive message body. Keep the existing emergency
line. Provide a reviewed Hindi equivalent and any other notice language required
for the markets served. The current combined English/Hindi notice must not retain
an outdated translation. Keep the masked account identification in the account-link
notice and include or precede it with the same processing disclosure.

Bump `WHATSAPP_POLICY_VERSION` together with both notices, versioned Agree buttons,
and consent receipts after the final wording is approved. Obtain renewed agreement
from existing WhatsApp users before downloading or transcribing voice audio. An
old button, START, a new message, silence, or a website edit must not bypass the
new version gate. App-only users do not need a WhatsApp re-consent prompt merely
because this optional channel changes.

Counsel must confirm the requested-service and processor exceptions for Washington
and Nevada. Where separate consent to health-data sharing is required, it must
have its own clear affirmative choice; one combined Agree button is insufficient.
Do not treat a processor exception as permission for independent vendor uses.
These are scoped rollout recommendations, not a claim that all policy edits
always require every user to consent again.
[Washington collection and sharing rules](https://app.leg.wa.gov/RCW/default.aspx?cite=19.373.030),
[Nevada NRS 603A.500](https://www.leg.state.nv.us/nrs/nrs-603a.html)

## 2. Google contracts, logging, and HIPAA

Use an applicable written processor agreement. Google's standard Cloud Data
Processing Addendum may already be incorporated in the applicable customer
agreement; verify the contracting entity, acceptance, service scope, subprocessors,
and transfer terms. A bespoke DPA is not necessarily required. Do not infer
acceptance from the presence of an SDK or an existing cloud account.
[Google Cloud Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum)

A BAA is not required just because someone is in the US or sends health data.
The role matters: a consumer-selected app generally is not a business associate
merely by receiving the person's health information. If Kaizen processes PHI on
behalf of a covered entity or another business associate, appropriate BAAs are
required for processors handling that PHI, including transient processing.
[HHS app relationship guidance](https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-require-a-covered-entity-to-enter-into-a-business-associate-agreement.html),
[HHS cloud guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html)

Google lists Speech-to-Text as BAA-eligible and says not to enable its data logging
with a BAA. Kaizen's Google BAA is signed, as confirmed by the owner, with console
acceptance evidenced on March 12, 2025. Confirm its application to the actual
billing/customer account and Speech-to-Text service.
One vendor's BAA does not cover Meta, TypeSafe, OpenAI, or an entire
channel. Do not offer this WhatsApp flow as a HIPAA care channel without a separate
review of the full chain.
[Google HIPAA scope](https://docs.cloud.google.com/docs/security/compliance/hipaa),
[Google BAA](https://cloud.google.com/terms/hipaa-baa)

Google's V1 FAQ describes synchronous/streaming recognition as memory processing
without retained customer content when optional data logging is off. Service
metadata can still be logged. Asynchronous recognition instead retains transcripts
for approximately five days. That is not the request method in the inspected code.
[Speech-to-Text data usage FAQ](https://docs.cloud.google.com/speech-to-text/docs/v1/data-usage-faq)

The logging opt-in is project-specific and permits model improvement and
potentially indefinite retention. Turning it off does not retract rights granted
for data already submitted under that program. The owner-provided screenshot
confirms that logging is disabled for the project shown. Match that project to
the project receiving requests and establish whether sensitive inputs were ever
submitted with logging enabled; the screenshot does not establish historical
settings. Do not place credentials or project identifiers in this document.
[Data logging controls](https://docs.cloud.google.com/speech-to-text/docs/v1/enable-data-logging),
[Logging opt-in terms](https://docs.cloud.google.com/speech-to-text/docs/v1/data-logging-terms)

The website now states the confirmed signed Google BAA alongside service-specific
requirements, rather than an unverified blanket claim about all providers.
Existing OpenAI/Anthropic zero-retention
statements still require evidence for the actual products and endpoints used.
`store: false` alone does not establish zero abuse-monitoring retention. TypeSafe's
signed terms and retention scope also need a reference; local rollout notes record
an earlier owner confirmation, but are not an executed agreement.

## 3. Voice, biometrics, and sensitive health information

Speech transcription is not automatically voiceprint identification. The code
does not request speaker authentication or create an identity template, but
temporary processing still counts as processing. Do not claim all voice audio is
outside biometric laws. Illinois BIPA expressly covers voiceprints and imposes
notice, release, security, and destruction duties when applicable. Reassess before
introducing speaker matching, voiceprints, or similar analysis.
[Illinois definitions](https://www.ilga.gov/legislation/ilcs/fulltext?DocName=074000140K10),
[Illinois duties](https://www.ilga.gov/legislation/ilcs/fulltext?DocName=074000140K15)

California distinguishes identification-related biometrics from ordinary audio
personal information; health content independently warrants sensitive-data
handling. Washington and Nevada consumer-health laws can apply outside HIPAA.
Counsel must confirm applicable state thresholds, exemptions, consent rules, and
assessments for the actual launch audience, including other states' health laws.
[California statute, section 1798.140](https://www.cppa.ca.gov/regulations/pdf/cppa_act.pdf),
[California privacy regulations](https://cppa.ca.gov/regulations/pdf/ccpa_statute_eff_20260101.pdf),
[Washington definitions](https://app.leg.wa.gov/RCW/default.aspx?cite=19.373.010)

India's DPDP Act does not establish a separate health/biometric special-category
tier, but that does not make health audio low risk. As of this review, core
notice, consent, processor, erasure, and transfer provisions have an 18-month
commencement period under the November 2025 notification, extending into May 2027. Do not describe all DPDP duties as already operative. Counsel must assess
the still-relevant IT Act/SPDI framework, including sensitive health information,
purpose-limited retention, written consent, grievance handling, and transfers.
[DPDP Act](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf),
[Commencement notification](https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf),
[SPDI Rules, official Gazette text reproduced by WIPO](https://www.wipo.int/wipolex/en/legislation/details/15063)

SPDI Rule 2 defines biometrics by authentication use, including voice patterns;
Rule 3 independently covers health conditions and medical records. Rules 5 and 7
address consent, limited retention, grievances, and transfers. The owner confirmed
Snehal Shah, snehal@kaizenhealth.io, as India's Grievance Officer during this review;
the privacy draft publishes that contact and the one-month grievance deadline.

DPDP Rules 6(1)(e) and 8(3) also introduce one-year retention duties, with
Rule 8(3) referring to personal data, associated traffic data, and processing logs.
These rules share the deferred commencement period. Before they apply, counsel
must determine their scope and reconcile them with temporary audio, the thirty-day
chat schedule, processor deletion terms, and competing jurisdictions' duties.
Do not assume they require only metadata, or that they already require keeping
every voice note today. Any legally required retained copy must be restricted to
that purpose rather than reused as ordinary chat history.
[DPDP Rules 2025, rules 1, 6, and 8](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf)

## 4. International transfers

Disclose global processing; a US database location does not restrict Google's
default speech endpoint. Determine whether the supported US/EU endpoint choices
meet the launch markets' requirements and document the whole processor chain.
Do not promise India-only processing or infer residency from a user's phone prefix.

India SPDI Rule 7 requires equivalent protection plus contractual necessity or
consent for relevant transfers. DPDP section 16 provides a future restriction
framework and preserves stricter laws; check operative notifications and rules
at launch. For EEA/UK/Swiss users, verify the existing policy's claimed transfer
mechanisms and assessments. Consent is not a substitute for mandatory protections.
The DPA, transfer basis, and processing locations remain unverified for this rollout.
[SPDI Rule 7](https://www.wipo.int/wipolex/en/legislation/details/15063),
[DPDP section 16](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf),
[Google transfer terms](https://cloud.google.com/terms/data-processing-addendum)

## 5. Transcripts, health information, and the echo

Treat the transcript, echoed text, reply cache, and temporary audio as sensitive
content. The echo is a second disclosure into WhatsApp and potentially a lock-screen
preview, not an accuracy guarantee. Do not describe it as de-identified. A
300-character limit can still expose a medicine, dose, condition, or identity.

Before launch, verify access controls, encryption, temporary-file crash cleanup,
absence of payloads in logs/errors/traces/backups, minimum provider context,
provider health-data terms, and content deletion across all copies. Verify TTL
enforcement in a development environment with synthetic data and retain a
repeatable artifact. Timestamp fields alone do not prove expiry or deletion.
Approve or shorten the three-year pseudonymous receipt period based on a stated
legal purpose, not the separate BIPA destruction deadline.

The consumer-health notice and rights process must cover recipients and deletion
propagation, including supported processor-held copies. Separately controlled
device/Meta history is not erased by unlinking. For non-HIPAA health apps, an
unauthorized disclosure can trigger the FTC Health Breach Notification Rule,
not only a malicious intrusion.
[Washington deletion rights](https://app.leg.wa.gov/RCW/default.aspx?cite=19.373.040),
[FTC breach guidance](https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0)

## 6. Clarifying questions and liability

A short question checking what was heard is a reasonable design measure, but
does not establish legal safety or eliminate liability. The current "answer with
an assumption" follow-up requires clinical and legal review. If a material
medicine, dose, unit, or urgent detail remains uncertain, give only information
that is safe without that detail; ask the person to type the detail or check it
with a qualified professional. Do not provide personalized treatment instructions
or delay emergency guidance to complete a clarification.

Validate behavior with synthetic accent/noise, sound-alike drug, dose/unit,
unresolved clarification, and emergency cases. Prompt instructions, confidence
scores, an echo, and a disclaimer do not prove those outcomes. Counsel should
review actual behavior, product claims, practice-of-medicine and device issues,
consumer protection, and the supported audience. Do not publish an assertion that
the feature has received legal or clinical approval.

WhatsApp's policy also conditions health-information use on applicable heightened
requirements. Confirm current platform terms and permission for this use before
launch; obtain current AI/business-platform terms if access is restricted. This
review could read the health-use policy, but the business-solution terms redirected
to a login page and were not substantively verified.
[WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy)

## Release requirements still open

- Counsel signs off on launch jurisdictions, legal bases, consent separation,
  translated notices, applicable transfer rules, grievance handling, and retention,
  including the forthcoming DPDP one-year duties. The owner confirmed the India
  grievance contact; the policy draft includes it.
- Google BAA signing is confirmed, with console acceptance evidenced on March 12, 2025. A second console screenshot confirms Speech API data logging is disabled
  for the project shown. Confirm the account/project match, applicable data
  processing terms, endpoint and historical logging, and all downstream processor
  health-data, retention, and training terms.
- Update initial and account-link notices and bump the backend policy version.
  Prove rejection of stale consent before audio download/transcription, including
  old buttons, retries, linking, STOP/START, and already linked accounts.
- Resolve temporary-file cleanup and actual transcript/reply TTL enforcement.
  Prove unlink/account deletion and required processor deletion propagation.
- Review unresolved hearing errors and pass clinical/safety acceptance scenarios.
- Verify the distinct health notice is linked in the app and store/download
  surfaces as applicable, and support can fulfil access, deletion, and appeal rights.
- Respect the existing Terms' material-change notice period, or obtain a valid
  feature-specific agreement as counsel approves. Publication dates are not
  evidence of notification or user acceptance. Retain the approved notice version
  and consent evidence without retaining chat content as proof.

Only after these requirements are met should the owner authorize production
enablement. This change neither deploys the website nor changes any rollout flag.

## Website validation

Local validation on October 26, 2026:

- `yarn build` passed, including TypeScript and prerendering of all three policy
  pages. The first sandboxed attempt could not fetch the existing Google Fonts;
  the permitted network retry passed. The existing middleware deprecation warning
  remains unrelated to this change.
- `yarn lint` passed with six existing warnings in unrelated files. Focused ESLint
  on every changed TypeScript/TSX file passed without warnings after the final edit.
- Prettier passed for the edited policy pages, new notice, legal metadata, shared
  types, footer, and this review. `git diff --check` passed. The sitemap change is
  limited to adding the new route, preserving its existing formatting.
- Eighteen checks against the built HTML and sitemap passed: required visible
  disclosures and grievance contact, dates, local anchors, unique IDs, distinct
  homepage footer link, policy index link, and sitemap inclusion. The local result
  is `/private/tmp/kaizen-whatsapp-policy-render-validation.json`.

These checks validate the website draft. They do not validate processor contracts,
cloud settings, backend consent changes, clinical behavior, or production retention.
