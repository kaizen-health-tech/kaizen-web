import { Release } from "@/types/release";

const defaultResources = [
  {
    label: "Share feedback",
    url: "mailto:info@kaizenhealth.io",
  },
  {
    label: "Support center",
    url: "/support",
  },
];

const linkBullet = (label: string, url: string) => ({ label, url });

const stayConnectedBullets = [
  linkBullet(
    "Instagram: @kaizenhealthio",
    "https://www.instagram.com/kaizenhealthio",
  ),
  linkBullet("X: @kaizenhealthio", "https://x.com/kaizenhealthio"),
  linkBullet("Email: info@kaizenhealth.io", "mailto:info@kaizenhealth.io"),
];

const stayConnectedSection = (body?: string) => ({
  heading: "Stay Connected",
  body:
    body ??
    "Stay in the loop with release news, tips, and roadmap previews from the Kaizen Health team.",
  bullets: stayConnectedBullets,
});

export const releases: Release[] = [
  {
    slug: "1-12-1-bug-fixes-security",
    version: "1.12.1",
    title: "Minor Bug Fixes and Security Updates",
    summary:
      "Polish release addressing stability issues and tightening security across the app.",
    publishedAt: "2026-01-17",
    status: "general-availability",
    audience: "everyone",
    tags: ["Security", "Reliability"],
    highlights: [
      {
        title: "Security updates",
        description:
          "Patched vulnerabilities and refreshed dependencies to keep accounts protected.",
        impact: "improved",
      },
      {
        title: "Bug fixes",
        description:
          "Resolved crashes and minor bug fixes that user's reported especially around the 'Talk to Kai' feature.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "This maintenance release keeps Kaizen running smoothly and securely after the recent memory launch.",
        bullets: [
          "Applied security patches and updated libraries to latest safe versions.",
          "Fixed minor crashes in chat and documents navigation flows.",
          "Polished UI spacing and copy in recent settings screens.",
        ],
      },
      stayConnectedSection(),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-12-0-kai-memory",
    version: "1.12.0",
    title: "Kai Memory Remembers What Matters",
    summary:
      "Memory keeps Kai aware of the details you share, so follow-ups feel instant and personal across every profile.",
    publishedAt: "2026-01-12",
    status: "general-availability",
    audience: "everyone",
    tags: ["AI insights", "Productivity"],
    highlights: [
      {
        title: "Kai Memory",
        description:
          "Teach Kai important facts once - medications, providers, preferences and it will recall them automatically in future chats.",
        impact: "new",
      },
      {
        title: "Memory controls",
        description:
          "View, add or clear remembered details per profile to keep information fresh and accurate.",
        impact: "new",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Memory turns Kai into a more consistent helper by saving the health context you approve. It works across chats and devices, respecting the same access controls you already use.",
        bullets: [
          "Ask Kai to remember key facts like allergies, baseline vitals, specialists, and upcoming procedures.",
          "Memories stay scoped to each family member and follow existing sharing permissions.",
          "Manage memories from profile settings or directly in chat when you need to update or clear them.",
        ],
      },
      {
        heading: "How to use memory",
        body: "Start by telling Kai what to remember, then rely on it to fill in details during future questions and tasks.",
        bullets: [
          'Say "Remember that Alex takes 5mg of lisinopril each morning" to store medication context.',
          "When asking for guidance, Kai will reference saved memories and provide links to review or edit them.",
          'Use "forget this" when something changes and Kai will stop using that memory until you update it.',
        ],
      },
      stayConnectedSection(
        "Tell us what else you want Kai to remember and how memory could better fit your care routines.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-10-0-enduring-medication-reminders",
    version: "1.10.0",
    title: "Medication Reminders That Go the Distance",
    summary:
      "Daily medication alerts now automatically replenish themselves, keeping long-term treatment plans on schedule without any extra taps.",
    publishedAt: "2025-10-15",
    status: "general-availability",
    audience: "everyone",
    tags: ["Mobile", "Medication management"],
    highlights: [
      {
        title: "Auto top-up scheduling",
        description:
          "Reminders now refresh future notifications as soon as the initial queue is exhausted, so multi-year schedules never fall silent.",
        impact: "improved",
      },
      {
        title: "Resilient reminder state",
        description:
          "Scheduling metadata is stored securely on-device, preserving future doses after app updates, reinstalls, or device restarts.",
        impact: "improved",
      },
      {
        title: "On-open health check",
        description:
          "Every time you open Kaizen Health, we verify and replenish the upcoming reminder window to catch anything that might have been missed.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "This release focuses on keeping critical medication plans reliable for the entire family. The reminder engine now tracks what has been scheduled and quietly re-queues future doses, even for therapies that span years.",
        bullets: [
          "Automatic top-ups extend reminder coverage beyond the previous 60-notification window.",
          "Reminder metadata persists offline, so future alerts survive app updates or limited connectivity.",
          "Foreground health checks run whenever the app becomes active to guarantee the next dose is queued.",
        ],
      },
      {
        heading: "Why medication adherence matters",
        body: "Consistent adherence keeps chronic conditions stable and reduces the stress families feel when coordinating shared care.",
        bullets: [
          "The [World Health Organization](https://www.who.int/publications/i/item/9789241593263) reports that adherence to long-term therapies averages only 50%, driving avoidable hospitalizations and poorer outcomes.",
          "An analysis in the [Journal of the American Medical Association](https://jamanetwork.com/journals/jama/fullarticle/2678016) found that better medication adherence reduces cardiovascular events and lowers total care costs for families.",
          "The [Annals of Internal Medicine](https://www.acpjournals.org/doi/10.7326/0003-4819-157-3-201208070-00429) estimate that nonadherence adds $100–$289 billion in preventable health-care spending each year in the United States.",
        ],
      },
      stayConnectedSection(
        "Follow Kaizen Health for best practices that help families stay on top of care plans together.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-14-events-overview",
    version: "1.9.14",
    title: "Events Overview Lands on Home",
    summary:
      "Brand-new Events Overview surfaces upcoming appointments, color-coded categories, and shared plans right on the home screen.",
    publishedAt: "2025-09-29",
    status: "general-availability",
    audience: "everyone",
    tags: ["Mobile", "Care coordination"],
    highlights: [
      {
        title: "Events Overview dashboard",
        description:
          "See every upcoming appointment in one glance, broken out by category and timing.",
        impact: "new",
      },
      {
        title: "Shared or private events",
        description:
          "Choose whether to keep events personal or collaborate with family so everyone stays aligned.",
        impact: "improved",
      },
      {
        title: "Performance improvements",
        description:
          "General reliability and bug fixes keep the app feeling fast.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Events Overview gives you a single place to manage what is next for your loved ones. Color-coded categories help you separate appointments, procedures, and personal reminders so nothing slips.",
        bullets: [
          "Tap any event to edit details or adjust reminders.",
          "Events added by family members appear instantly on the shared dashboard.",
          "Keep personal items private while still seeing them on your own home view.",
        ],
      },
      stayConnectedSection(
        "We love hearing how families plan together. Follow Kaizen Health for tips, updates, and sneak peeks.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-13-timeline-accuracy",
    version: "1.9.13",
    title: "Timeline Accuracy Improvements",
    summary:
      "Fine-tuned timeline handling, bug fixes, and performance gains deliver a smoother daily experience.",
    publishedAt: "2025-09-13",
    status: "general-availability",
    audience: "everyone",
    tags: ["Mobile", "Performance"],
    highlights: [
      {
        title: "More accurate timelines",
        description:
          "Improved data ordering keeps health updates in the right place across profiles.",
        impact: "improved",
      },
      {
        title: "Bug fixes",
        description: "Squashed minor issues reported by the community.",
        impact: "fixed",
      },
      {
        title: "Performance tuning",
        description:
          "Background clean-up work keeps navigation feeling snappy.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "This update focuses on reliability. Timeline rendering now handles quick updates and edits without pagination hiccups, and general housekeeping keeps your device responsive.",
        bullets: [
          "Timeline updates sync more consistently across devices.",
          "Memory usage has been reduced for stations with many attachments.",
          "Expect fewer retries when saving quick notes on poor connections.",
        ],
      },
      stayConnectedSection(
        "Keep the ideas coming. Reach out or follow along for more behind-the-scenes improvements.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-12-health-score-refresh",
    version: "1.9.12",
    title: "Health Scores and Home Experience Refresh",
    summary:
      "Complete rework of health scoring, a redesigned home screen, and richer news to keep families informed.",
    publishedAt: "2025-08-27",
    status: "general-availability",
    audience: "everyone",
    tags: ["Insights", "Mobile experience"],
    highlights: [
      {
        title: "Rebuilt health scoring",
        description:
          "More consistent insights with updated data models and trending signals.",
        impact: "improved",
      },
      {
        title: "New home screen",
        description:
          "A reorganized landing experience prioritizes what matters each day.",
        impact: "new",
      },
      {
        title: "News section refresh",
        description:
          "Find relevant articles faster and share them directly with caregivers.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "We rebuilt core experiences so you can trust the signal in your health scores and reach the right information faster. The new home screen highlights milestones, recent updates, and Kai guidance in a single glance.",
        bullets: [
          "Health scores pull in updated data sources for better consistency.",
          "Navigation cards surface the next best action for each family member.",
          "News feeds are curated per condition and make sharing one tap.",
        ],
      },
      stayConnectedSection(
        "We rebuilt these areas based on your requests. Follow along and keep the ideas coming so the next update can be even sharper.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-11-maintenance-tune-up",
    version: "1.9.11",
    title: "Maintenance Tune-Up",
    summary:
      "A quick polish that tackles minor bugs and boosts performance for every profile.",
    publishedAt: "2025-08-19",
    status: "general-availability",
    audience: "everyone",
    tags: ["Performance", "Stability"],
    highlights: [
      {
        title: "Bug fixes",
        description: "Resolved a handful of issues surfaced by the community.",
        impact: "fixed",
      },
      {
        title: "Performance cleanup",
        description:
          "UI interactions reload faster thanks to memory and caching improvements.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "No headline features this round—just the sort of cleanup work that keeps Kaizen Health dependable day after day.",
        bullets: [
          "Fewer stalls when switching between family members.",
          "Reduced app size on disk for devices with limited storage.",
        ],
      },
      stayConnectedSection(
        "Your bug reports help us prioritize these smaller quality updates. Stay connected and keep sharing what you see.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-10-ui-refresh",
    version: "1.9.10",
    title: "UI Refresh and Favorites Fixes",
    summary:
      "A refreshed interface, fixes for favorite member selection, and security-hardening work throughout the app.",
    publishedAt: "2025-08-14",
    status: "general-availability",
    audience: "everyone",
    tags: ["Mobile", "Security"],
    highlights: [
      {
        title: "Updated UI visuals",
        description:
          "Sharper layouts and improved spacing make it easier to navigate daily tasks.",
        impact: "improved",
      },
      {
        title: "Favorite member repair",
        description:
          "Favorite selections now persist reliably across sessions and devices.",
        impact: "fixed",
      },
      {
        title: "Security polish",
        description:
          "Executed a new round of security hardening and performance tuning.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "The UI refresh introduces clearer typography, consistent iconography, and accessibility wins. Favorites now sync without the unexpected resets some caregivers were seeing.",
        bullets: [
          "Favorites update instantly across shared devices.",
          "Security improvements target encrypted storage and authentication flows.",
        ],
      },
      stayConnectedSection(
        "Have ideas for the refreshed experience? Stay connected with the team and share your feedback any time.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-9-document-upload-rebuild",
    version: "1.9.9",
    title: "Rebuilt Document Upload Experience",
    summary:
      "Document upload is faster, clearer, and optimized for adding health records in moments.",
    publishedAt: "2025-08-08",
    status: "general-availability",
    audience: "everyone",
    tags: ["Documents", "Mobile"],
    highlights: [
      {
        title: "New upload flow",
        description:
          "Streamlined steps make it easier to capture and categorize health documents.",
        impact: "new",
      },
      {
        title: "Quicker processing",
        description:
          "Uploads process in the background so you can move on to the next task immediately.",
        impact: "improved",
      },
      {
        title: "Reliability fixes",
        description:
          "Resolved errors that occasionally interrupted scanning or saving.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "We rethought the entire document workflow, from selecting files to confirming the attachment. Families can now add multiple documents in a session without losing context.",
        bullets: [
          "Drag-and-drop and camera uploads share the same streamlined flow.",
          "Suggested tags appear based on previous uploads.",
        ],
      },
      stayConnectedSection(
        "Tell us how the new upload workflow fits your routine and what would make it even better.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-8-maintenance-update",
    version: "1.9.8",
    title: "Stability Improvements",
    summary:
      "Focused on bug fixes and performance tuning to keep Kaizen Health reliable.",
    publishedAt: "2025-07-28",
    status: "general-availability",
    audience: "everyone",
    tags: ["Performance", "Stability"],
    highlights: [
      {
        title: "Bug fixes",
        description:
          "Addressed issues surfaced by the community over the last sprint.",
        impact: "fixed",
      },
      {
        title: "Performance boost",
        description:
          "App navigation and sync cycles complete faster across all profiles.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Sometimes the best update is the one that quietly speeds things up. This release zeroed in on crash reports and animation smoothness.",
        bullets: [
          "Reduced lag when opening large health record collections.",
          "Lowered network retries for medication reminders.",
        ],
      },
      stayConnectedSection(
        "Notice something we should tune next? Stay connected and send feedback as you explore.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-7-bug-fixes",
    version: "1.9.7",
    title: "Bug Fixes and Issue Resolution",
    summary:
      "Minor fixes aimed at the specific issues reported by our community.",
    publishedAt: "2025-07-22",
    status: "general-availability",
    audience: "everyone",
    tags: ["Support", "Stability"],
    highlights: [
      {
        title: "Issue-specific fixes",
        description:
          "Resolved several customer-reported bugs affecting reminders and attachments.",
        impact: "fixed",
      },
      {
        title: "Stability improvements",
        description: "Additional guardrails improve overall reliability.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "We turned around quick fixes for the community, cleaning up the most common chat and attachment errors reported last week.",
        bullets: [
          "Improved validation prevents duplicate reminder notifications.",
          "Attachment previews render more consistently on older devices.",
        ],
      },
      stayConnectedSection(
        "Your detailed bug reports make these fixes possible. Stay connected with us and keep them coming.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-6-security-improvements",
    version: "1.9.6",
    title: "Security and Reliability Boost",
    summary:
      "Behind-the-scenes upgrades focus on security, performance, and stability for every family.",
    publishedAt: "2025-07-16",
    status: "general-availability",
    audience: "admins",
    tags: ["Security", "Performance"],
    highlights: [
      {
        title: "Security enhancements",
        description:
          "Strengthened protections around data in transit and at rest.",
        impact: "improved",
      },
      {
        title: "Bug fixes",
        description:
          "Resolved minor issues surfaced through monitoring and customer reports.",
        impact: "fixed",
      },
      {
        title: "Performance tuning",
        description: "Faster load times across messaging and records.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Keeping your family data safe is always the priority. This release includes updated encryption libraries, stricter session management, and the usual round of performance tuning.",
        bullets: [
          "Enhanced monitoring ensures faster detection of unusual activity.",
          "Optimized sync jobs reduce wait times on slow networks.",
        ],
      },
      stayConnectedSection(
        "Security is a team sport. Stay connected with us and share anything you notice.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-5-kai-document-chat",
    version: "1.9.5",
    title: "Kai Learns From Your Documents",
    summary:
      "Attach documents directly into Kai chat so your assistant can read, remember, and respond with more context.",
    publishedAt: "2025-07-01",
    status: "general-availability",
    audience: "everyone",
    tags: ["AI insights", "Documents"],
    highlights: [
      {
        title: "Document-powered Kai",
        description:
          "Upload lab reports or prescriptions in chat and Kai will reference them in the conversation.",
        impact: "new",
      },
      {
        title: "Faster assistance",
        description:
          "Kai recalls the latest document context so you can continue the conversation without repeating yourself.",
        impact: "improved",
      },
      {
        title: "Bug fixes",
        description:
          "Polish across chat and attachments keeps the experience reliable.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Bring Kai the context it needs. Drop in up to five documents and discuss results, plans, or next steps in a single thread.",
        bullets: [
          "Documents are stored securely and follow existing access controls.",
          "Kai highlights key findings so you can copy them into care plans.",
        ],
      },
      stayConnectedSection(
        "We are excited to hear how you use this capability and what to train next.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-4-security-polish",
    version: "1.9.4",
    title: "Security and Reliability Polish",
    summary:
      "A standards-driven cleanup with bug fixes, performance improvements, and tightened security.",
    publishedAt: "2025-06-21",
    status: "general-availability",
    audience: "admins",
    tags: ["Security", "Performance"],
    highlights: [
      {
        title: "Bug fixes",
        description: "Addressed the issues that held back 1.9.3 from shipping.",
        impact: "fixed",
      },
      {
        title: "Security updates",
        description:
          "Applied new security controls across the stack to keep data safe.",
        impact: "improved",
      },
      {
        title: "Performance improvements",
        description: "General tuning for smoother daily use.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "We took the feedback from 1.9.3 and ensured every fix met our reliability standards before reissuing the release as 1.9.4.",
        bullets: [
          "Security scans and audits now cover more internal services.",
          "UI transitions feel smoother thanks to caching fixes.",
        ],
      },
      stayConnectedSection(
        "We paused 1.9.3 to get things right. Follow along for transparency on every update.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-2-attachments-fix",
    version: "1.9.2",
    title: "Attachment Access Fixes",
    summary:
      "Targeted fixes for attachment viewing paired with faster Kai response times.",
    publishedAt: "2025-05-30",
    status: "general-availability",
    audience: "everyone",
    tags: ["Documents", "AI insights"],
    highlights: [
      {
        title: "Attachment visibility",
        description:
          "Resolved the issue preventing some families from viewing record attachments.",
        impact: "fixed",
      },
      {
        title: "Kai speedups",
        description:
          "Conversations feel quicker with reduced response latency.",
        impact: "improved",
      },
      {
        title: "Reliability updates",
        description: "General improvements keep the app stable day to day.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Attachments are one of the most critical parts of your health record. We prioritized a fix for the small set of families that lost access and tightened monitoring so it does not recur.",
        bullets: [
          "Kai processes follow-up questions faster after each response.",
          "Attachment previews load with clearer error messaging if a file needs re-uploading.",
        ],
      },
      stayConnectedSection(
        "If anything still looks off, stay connected with us and share the details so we can dig in.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-1-kai-tune-up",
    version: "1.9.1",
    title: "Smarter Kai and Quality Fixes",
    summary:
      "Better Kai conversations, faster performance, and refinements based on your feedback.",
    publishedAt: "2025-05-21",
    status: "general-availability",
    audience: "everyone",
    tags: ["AI insights", "Performance"],
    highlights: [
      {
        title: "Improved Kai responses",
        description:
          "Kai provides clearer, more conversational answers to your health questions.",
        impact: "improved",
      },
      {
        title: "User-requested tweaks",
        description:
          "Incorporated the latest customer feedback into everyday flows.",
        impact: "improved",
      },
      {
        title: "Bug fixes",
        description: "Behind-the-scenes improvements boost reliability.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Your feedback guided this release: Kai now references more historical context before answering and handles follow-up questions more gracefully.",
        bullets: [
          "Kai cites sources more consistently.",
          "Load times improve when switching between chats.",
        ],
      },
      stayConnectedSection(
        "Have more ideas for Kai? Stay connected with us so we can keep improving the experience.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-9-0-messaging-updates",
    version: "1.9.0",
    title: "Messaging and Haptics Enhancements",
    summary:
      "Chat messaging feels clearer, haptic feedback is richer, and the app runs smoother overall.",
    publishedAt: "2025-05-13",
    status: "general-availability",
    audience: "everyone",
    tags: ["Mobile experience", "Messaging"],
    highlights: [
      {
        title: "Improved chat messaging",
        description:
          "Optimized messaging delivers better clarity, grouping, and reliability.",
        impact: "improved",
      },
      {
        title: "New haptic feedback",
        description:
          "Haptics guide you through key interactions for a more responsive feel.",
        impact: "new",
      },
      {
        title: "Performance improvements",
        description:
          "Under-the-hood tuning keeps navigation and sync running smoothly.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Messaging is core to keeping families aligned. This release refines message grouping and delivery states while introducing subtle haptic cues to acknowledge actions.",
        bullets: [
          "New haptics highlight message sends, saves, and important alerts.",
          "Chat history loads faster when returning to long-running conversations.",
        ],
      },
      stayConnectedSection(
        "Every tap matters. Stay connected with us for ongoing updates and let us know what you want to see next.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-8-6-multi-attachments",
    version: "1.8.6",
    title: "Multiple Attachments and Smarter Kai",
    summary:
      "Attach multiple documents to a single record and bring richer context into Kai conversations.",
    publishedAt: "2025-05-08",
    status: "general-availability",
    audience: "everyone",
    tags: ["Documents", "AI insights"],
    highlights: [
      {
        title: "Multiple attachments per record",
        description:
          "Keep lab reports, imaging, and instructions together in one place.",
        impact: "new",
      },
      {
        title: "Kai handles more context",
        description:
          "Attach up to five documents when chatting to get more precise guidance.",
        impact: "improved",
      },
      {
        title: "Performance boosts",
        description: "General bug fixes keep Kaizen Health running smoothly.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Managing complex health journeys often takes more than one file. Now you can keep related documents bundled together and discuss them directly with Kai.",
        bullets: [
          "Drag-and-drop up to five files onto a single record.",
          "Kai cites the documents it referenced when responding.",
        ],
      },
      stayConnectedSection(
        "Let us know how multiple attachments and smarter Kai support your workflows—your feedback steers our roadmap.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-8-5-insurance-profiles",
    version: "1.8.5",
    title: "Insurance Profiles in Settings",
    summary:
      "Securely add and manage insurance information in your profile for quicker access at clinics and pharmacies.",
    publishedAt: "2025-04-23",
    status: "general-availability",
    audience: "everyone",
    tags: ["Profiles", "Documents"],
    highlights: [
      {
        title: "Insurance details storage",
        description:
          "Keep coverage info handy and share it when needed without digging through emails.",
        impact: "new",
      },
      {
        title: "Performance improvements",
        description:
          "Background enhancements ensure a smooth and reliable experience.",
        impact: "improved",
      },
      {
        title: "Bug fixes",
        description:
          "Resolved minor issues across profile management and uploads.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Add insurance cards to your profile, ready to share when clinics request them. We are also preparing Add to Wallet support for quick access during visits.",
        bullets: [
          "Upload front and back images of each card.",
          "Manage family coverage details from a single settings hub.",
        ],
      },
      stayConnectedSection(
        "Share how insurance storage helps your family and what you would like to see next.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-8-4-bug-fix",
    version: "1.8.4",
    title: "Bug Fixes and Performance",
    summary:
      "A round of bug fixes and performance improvements informed by your feedback.",
    publishedAt: "2025-04-18",
    status: "general-availability",
    audience: "everyone",
    tags: ["Performance", "Stability"],
    highlights: [
      {
        title: "Bug fixes",
        description: "Resolved the top-reported issues from the community.",
        impact: "fixed",
      },
      {
        title: "Performance improvements",
        description: "App interactions feel smoother across devices.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Staying responsive is part of building trust. This release tightens up query performance and removes glitches across timeline and document views.",
        bullets: [
          "Faster transitions when opening record details.",
          "Improved error messaging when uploads fail.",
        ],
      },
      stayConnectedSection(
        "Share ideas for future updates—we are always listening and iterating.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-8-3-maintenance",
    version: "1.8.3",
    title: "Maintenance Release",
    summary:
      "Another round of bug fixes and performance tuning to keep the app reliable.",
    publishedAt: "2025-04-16",
    status: "general-availability",
    audience: "everyone",
    tags: ["Performance", "Stability"],
    highlights: [
      {
        title: "Bug fixes",
        description:
          "Addressed smaller issues reported after the last release.",
        impact: "fixed",
      },
      {
        title: "Performance optimizations",
        description: "Improved responsiveness across core flows.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Short and sweet: more fixes, smoother scrolling, and fewer interruptions while managing family health.",
        bullets: [
          "Fixed a race condition affecting notifications.",
          "Improved rendering on smaller devices.",
        ],
      },
      stayConnectedSection(
        "We love hearing from you. Stay connected and let us know how the app feels after each release.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-8-2-maintenance",
    version: "1.8.2",
    title: "Bug Fixes and Performance Improvements",
    summary:
      "General maintenance focused on reliability based on recent feedback.",
    publishedAt: "2025-04-09",
    status: "general-availability",
    audience: "everyone",
    tags: ["Performance", "Stability"],
    highlights: [
      {
        title: "Bug fixes",
        description: "Resolved outstanding performance and stability issues.",
        impact: "fixed",
      },
      {
        title: "Performance tuning",
        description: "Optimized background services for a smoother experience.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "We continue to iterate quickly, addressing the nagging issues that popped up after the recent feature launches.",
        bullets: [
          "Better memory management improves long sessions.",
          "Reduced sync retry counts on poor networks.",
        ],
      },
      stayConnectedSection(
        "Thanks for reporting the issues you find. Stay connected so we can close the loop with you.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-8-1-health-score-improvements",
    version: "1.8.1",
    title: "Health Score Improvements",
    summary:
      "Refinements to health scores plus general bug fixes keep the signal clear.",
    publishedAt: "2025-04-01",
    status: "general-availability",
    audience: "everyone",
    tags: ["Insights", "Performance"],
    highlights: [
      {
        title: "Health score updates",
        description:
          "Adjusted scoring logic for more accurate rankings across timelines.",
        impact: "improved",
      },
      {
        title: "Bug fixes",
        description: "General cleanup work for a smoother app experience.",
        impact: "fixed",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Based on your feedback, we tuned the health score algorithm to better account for new data points while maintaining clarity in the dashboard.",
        bullets: [
          "Scores refresh more consistently after new data imports.",
          "Improved explainer text clarifies what changed and why.",
        ],
      },
      stayConnectedSection(
        "Keep sharing how health scores perform for your family—we iterate on every insight you send.",
      ),
    ],
    resources: defaultResources,
  },
  {
    slug: "1-8-0-stability-updates",
    version: "1.8.0",
    title: "Stability and Reliability Update",
    summary:
      "Bug fixes and quality improvements make the app more reliable and secure.",
    publishedAt: "2025-03-27",
    status: "general-availability",
    audience: "everyone",
    tags: ["Security", "Stability"],
    highlights: [
      {
        title: "Bug fixes",
        description:
          "Addressed issues across authentication, messaging, and records.",
        impact: "fixed",
      },
      {
        title: "Reliability improvements",
        description:
          "Background systems keep the app stable even during peak usage.",
        impact: "improved",
      },
      {
        title: "Security updates",
        description: "Upgraded dependencies and tightened access controls.",
        impact: "improved",
      },
    ],
    sections: [
      {
        heading: "Release details",
        body: "Every few weeks we roll up the fixes and quality of life improvements needed to keep Kaizen Health dependable. This release focused on strengthening secure storage and reducing crash rates.",
        bullets: [
          "Crash rate reduced across older devices running the latest OS.",
          "Security scans run more frequently to catch issues earlier.",
        ],
      },
      stayConnectedSection(
        "Dependability is a journey. Stay connected and let us know if you spot anything we should shore up.",
      ),
    ],
    resources: defaultResources,
  },
];

export const getReleaseBySlug = (slug: string) =>
  releases.find((release) => release.slug === slug);

export const getAllTags = () =>
  Array.from(new Set(releases.flatMap((release) => release.tags))).sort();

export const getSortedReleases = () =>
  [...releases].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
