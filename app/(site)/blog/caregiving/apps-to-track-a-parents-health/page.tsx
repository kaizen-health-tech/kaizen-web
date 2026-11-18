// Committed as a draft: blogData has `draft: true` for this URL, so the page
// returns 404 and stays out of listings and sitemaps. To publish, delete that
// flag, then:
//  1. hero image does not exist yet. Generate it from
//     agent-instructions/Hero-Image.md and save it as
//     public/images/blog/apps-to-track-a-parents-health-hero.png
//  2. legal approved the approach on 2026-11-17 (neutral note on other apps,
//     no AI vendor names) and, per Snehal, approved the draft afterwards.
//     Re-ask only if the copy changes materially, especially the consent and
//     monitoring paragraphs and the "check before you trust an app" section
//  3. facts were read from the source pages on 2026-11-17: IEEE AgeTech
//     (consent quote), CARE Network technology fact sheet (41%, 30%, 25%,
//     13%, 19%), Apple Support
//     (Health sharing, Medications, Fall Detection, Find My), Medisafe help
//     center (Medfriend, Premium price), Cozi FAQ, CaringBridge, MyChart help,
//     Amazon (Alexa Together notice), FTC and HHS pages. Re-open each and
//     update any price or feature that changed. The article says "checked on
//     November 17, 2026"; change that date to the re-check date
//  4. Kaizen section: claims come from the Product Guide "safe to say" list and
//     the live privacy policy (app/(site)/docs/privacy). Confirm with Snehal
//     before publishing:
//     - the group-sharing hardening release shipped (expected about 2026-11-19)
//     - data-handling sentences are founder-confirmed, but no documents were
//       seen. Confirm "encrypted in transit and at rest" covers every data
//       store. No end-to-end claim, no AI vendor names, no "HIPAA
//       compliant", no "SOC 2"
//     - confirmed by Snehal: no setting hides the Health Score from group
//       members; Kaizen is not a medication tracker and surfaces information
//       only; EHR import ships before 2026-12-01
//     - EHR: the "does not connect to hospital patient portals" bullet was
//       removed. When EHR import is live and the release notes describe it,
//       consider one sentence about it in the Kaizen section (needs the
//       Product Guide claims updated and a legal look)
//     - confirmed by Snehal: AI providers do not store data. The article
//       says only "the providers do not store your data" and names no data
//       store (the Product Guide says Kai memory lives in Supabase, so do not
//       add "stored in Firestore" without checking)
//  4b. clinical review of the medicine, fall and vitals wording is still
//     needed (brief requirement), and the Alexa Together sentence was marked
//     "if legal agrees" in the brief
//  5. the ProductCallout is the one allowed per article. Do not add to it
//  6. no links to the planned sibling-sharing (R2) or caregiver backup plan
//     (C4) posts yet. Add them with WhenPublished once they are public
import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import StatTrio from "@/components/Blog/content/StatTrio";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Is there one app that tracks everything about an elderly parent's health?",
    answer:
      "Not in any form we could confirm. Medicines, vitals, falls, family schedules and records are different jobs, and the tools that do them well are usually separate. Pick the job that is causing the most trouble, choose one tool for it, and add another only when a second job needs fixing.",
  },
  {
    question: "Do I need my parent's permission to track their health?",
    answer:
      "You should get it. A parent who understands and agrees to a tool is more likely to use it, and finding out you have been tracked can damage trust. Where a parent can no longer make decisions for themselves, the rules depend on the state and on any legal authority you hold, so ask their doctor and an elder-law attorney.",
  },
  {
    question: "Are health apps covered by HIPAA?",
    answer:
      "Often not. HIPAA applies to health plans, most health care providers and their business associates. The Federal Trade Commission says many companies that collect health information, including fitness trackers, diet apps and connected blood pressure cuffs, are not covered by HIPAA. The company's own privacy policy, the FTC's rules and some state laws are what apply, so read the policy before you upload anything.",
  },
  {
    question: "What if my parent will not use an app?",
    answer:
      "Many people do not want one, and that is a valid answer. A weekly phone call, a paper medicine list on the fridge and a shared calendar can do much of the same work. If the refusal is about control, see our guide to what to do when a parent refuses help.",
  },
  {
    question: "Can a smartwatch tell me if my parent has fallen?",
    answer:
      "Some can detect a hard fall and alert emergency contacts, but none detect every fall. Apple says its watch cannot detect all falls, and the parent has to wear it and keep it charged. Treat it as one layer of safety, not a guarantee.",
  },
];

const sections = [
  { id: "ask-your-parent", label: "Start by asking your parent" },
  { id: "match-the-job", label: "Match the app to the job" },
  { id: "medicines", label: "Medicines" },
  { id: "vitals", label: "Vitals and trends" },
  { id: "safety-and-check-ins", label: "Safety and check-ins" },
  { id: "family-updates", label: "Family updates and calendars" },
  { id: "records-and-sharing", label: "Records and sharing" },
  { id: "where-kaizen-fits", label: "Where Kaizen fits" },
  { id: "check-before-you-trust", label: "Check before you trust an app" },
  { id: "one-page-checklist", label: "A one-page checklist" },
];

const description =
  "No one app tracks everything about a parent's health. Compare apps by job (medicines, vitals, safety, family updates, records) and what to ask first.";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Apps to Track a Parent's Health",
  description,
  path: "/blog/caregiving/apps-to-track-a-parents-health",
  type: "article",
  image: "/images/blog/apps-to-track-a-parents-health-hero.png",
});

const AppsToTrackAParentsHealth = () => {
  return (
    <ArticleLayout
      title="Apps to Track a Parent's Health: Which Type You Need, and What Each One Misses"
      description={description}
      image="/images/blog/apps-to-track-a-parents-health-hero.png"
      imageAlt="An older man at a kitchen table looking at a smartphone with his adult daughter beside him, a weekly pill organizer and a cup of tea on the table"
      url="/blog/caregiving/apps-to-track-a-parents-health"
      categoryKey="aging-well"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      readTime="9 min read"
      tags={["Aging well", "Caregiving"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "No single app does every job. Medicines, vitals, safety, family updates and records are separate problems, so choose by the job that is going wrong.",
          "Ask your parent first. A tool they have not agreed to, or will not use, tends to fail, and tracking someone without their knowledge can damage trust.",
          "Every type of tool has limits. Apple, for example, says its watch cannot detect all falls.",
          "Many consumer health apps are not covered by HIPAA, so the company's own privacy policy matters. Read it before you upload anything.",
          "Use the one-page checklist at the end to decide, and revisit the choice after a month.",
        ]}
      />

      <p>
        Most families do not need more apps. They need to find the job that is
        not getting done. The medicines get missed, a blood pressure reading
        never reaches the doctor, and three siblings hold three different
        versions of the schedule.
      </p>
      <p>
        No single app fixes all of that, and this guide does not pretend one
        does. It sorts the tools by job, says what each type covers and what it
        misses, and starts with something no app can do for you: asking your
        parent. Kaizen Health publishes this article and makes one of the apps
        described, so Kaizen gets its own section, with what it does and what it
        does not do.
      </p>

      <StatTrio
        stats={[
          {
            figure: "41%",
            caption:
              "of family caregivers use technology to track the recipient's health records, up from 30% in 2020",
          },
          {
            figure: "25%",
            caption:
              "use remote monitoring tools such as apps, video platforms or wearables, up from 13% in 2020",
          },
          {
            figure: "19%",
            caption: "use electronic task lists and schedules for care",
          },
        ]}
      />
      <p>
        Source:{" "}
        <Link
          href="https://www.caregivingintheus.org/wp-content/uploads/2026/03/CGUS25_Technology-Use-Among-Family-Caregivers.pdf"
          target="_blank"
        >
          Technology Use Among Family Caregivers
        </Link>
        , from Caregiving in the US 2025 (National Alliance for Caregiving and
        AARP), updated February 2026. The figures cover family caregivers of
        any care recipient, not only parents.
      </p>

      <HeadingWithAnchor id="ask-your-parent">
        Start by asking your parent
      </HeadingWithAnchor>
      <p>
        An app your parent has not agreed to will not work for long. It also
        carries a cost that does not show up on a feature list: if your parent
        finds out you have been watching, they may trust you less.
      </p>
      <p>
        An{" "}
        <Link
          href="https://agetech.ieee.org/publications/topics/how-the-agetech-industry-is-navigating-consent-and-autonomy-in-ai-powered-elder-care/"
          target="_blank"
        >
          IEEE AgeTech article
        </Link>{" "}
        published in May 2026 puts it this way: &ldquo;Consent means older
        adults genuinely understand and agree to how technology monitors their
        lives.&rdquo; It argues that consent should be an ongoing conversation,
        not a signature on a form, and that people should be able to decide
        what is collected, who gets alerts and how the data is shared.
      </p>
      <p>Four questions open that conversation:</p>
      <NumberedPoints
        points={[
          {
            lead: "What would make your days easier?",
            text: "Start with their problem, not yours. A parent who wants fewer missed pills is a different case from one who wants nothing at all.",
          },
          {
            lead: "What are you comfortable sharing, and with whom?",
            text: "Let them choose which information goes to which person. A daughter who handles appointments may not need the same view as a son who lives nearby.",
          },
          {
            lead: "What do you already use?",
            text: "A tool that runs on the phone or watch they already carry has a better chance than one that needs a new device.",
          },
          {
            lead: "Can you turn it off?",
            text: "Agree up front that they can stop at any time, and try it for a month before deciding.",
          },
        ]}
      />
      <p>
        If your parent says no, respect that and look at the low-tech options
        below. See{" "}
        <Link href="/blog/caregiving/when-your-parent-refuses-help">
          what you can and cannot do when a parent refuses help
        </Link>
        . If memory or judgment has changed, consent gets harder. Rules on what
        a family may do differ by state, so talk to your parent&rsquo;s doctor
        and an elder-law attorney.
      </p>

      <HeadingWithAnchor id="match-the-job">
        Match the app to the job
      </HeadingWithAnchor>
      <p>
        The table below shows the five jobs families most often ask about, an
        example of each, and what that type of tool leaves undone. The examples
        are illustrations, not a ranking.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 font-semibold">Job</th>
              <th className="p-2 font-semibold">Examples</th>
              <th className="p-2 font-semibold">What it can do</th>
              <th className="p-2 font-semibold">What it leaves undone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 font-medium">Medicines</td>
              <td className="p-2">Medisafe; Apple Health Medications</td>
              <td className="p-2">Dose reminders and a log of what was taken</td>
              <td className="p-2">Cannot tell you whether a dose is right</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Vitals and trends</td>
              <td className="p-2">Phone health sharing; connected blood pressure cuffs</td>
              <td className="p-2">Shows trends and alerts to the people your parent chooses</td>
              <td className="p-2">Does not diagnose or say what to do about a reading</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Safety and check-ins</td>
              <td className="p-2">Apple Watch Fall Detection; Apple Find My</td>
              <td className="p-2">Alerts after a hard fall; location sharing</td>
              <td className="p-2">Does not detect every fall, and works only if worn and charged</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Family updates</td>
              <td className="p-2">Cozi; CaringBridge</td>
              <td className="p-2">Shared schedules, lists and news for family and friends</td>
              <td className="p-2">Not built to hold medical records</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Records</td>
              <td className="p-2">Patient portal proxy access; a shared family record such as Kaizen</td>
              <td className="p-2">Keeps visits, results, medicines and documents together</td>
              <td className="p-2">A portal holds only that health system&rsquo;s records, and access rules vary by system</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        App features and prices change. We checked the vendor pages named in
        this article on November 17, 2026. Check the current terms before you
        decide.
      </p>

      <HeadingWithAnchor id="medicines">Medicines</HeadingWithAnchor>
      <p>
        A reminder app helps a parent take medicines on time. It can also let a
        family member know when a dose may have been missed. It cannot judge
        whether a dose is right, and nothing in this section is a reason to
        change one.
      </p>
      <p>
        <strong>Medisafe</strong> has a feature called Medfriend. Its{" "}
        <Link
          href="https://help-center.medisafe.com/en/articles/8097801-what-is-a-medfriend-and-how-does-the-feature-work"
          target="_blank"
        >
          help center
        </Link>{" "}
        says the app sends your Medfriend reminders for missed doses if no action
        is taken on the notifications, and that Medfriend features are viewing
        only. Pricing matters here. Medisafe&rsquo;s terms say paid access is
        required in some countries outside the United States, and its help
        center lists Premium at $4.99 a month or $39.99 a year. Check what the
        free tier includes in your parent&rsquo;s country before you set it
        up.
      </p>
      <p>
        <strong>Apple Health Medications</strong> is built into the iPhone and
        Apple Watch. According to{" "}
        <Link href="https://support.apple.com/en-us/105064" target="_blank">
          Apple Support
        </Link>
        , you can set schedules, turn on dose reminders and mark each dose as
        taken or skipped. A follow-up reminder arrives if a dose is not logged
        after 30 minutes. That reminder is for the person taking the medicine;
        Apple&rsquo;s page does not describe alerts to family. If your parent
        shares health data with
        family, they can choose to include their medications. Apple also says
        the feature should not be used as a substitute for professional medical
        judgment.
      </p>
      <p>
        For some people a weekly pill organizer or pharmacy packaging does the
        same job with no screen. Ask the pharmacist what is available. If your
        parent skips doses or resists reminders, ask why. Cost, side effects,
        confusion and memory change are all possible reasons, so tell their
        doctor or pharmacist before anything changes.
      </p>

      <HeadingWithAnchor id="vitals">Vitals and trends</HeadingWithAnchor>
      <p>
        Phones, watches and home devices can show a family member how things
        are trending. They do not tell you what a number means.
      </p>
      <p>
        On an iPhone,{" "}
        <Link
          href="https://support.apple.com/guide/iphone/share-your-health-data-iph5ede58c3d/ios"
          target="_blank"
        >
          Apple&rsquo;s Health sharing
        </Link>{" "}
        lets your parent choose which topics to share with someone in their
        contacts. The person receiving it can see health notifications, such as
        high heart rate or irregular rhythm alerts, and notifications about
        significant trends. Your parent can review or change what is shared
        and can stop sharing at any time. Apple notes that removing someone from
        Contacts does not stop the sharing, so it has to be turned off in the
        Health app. Health sharing is an iPhone feature, so if your parent
        uses an Android phone, look at what that phone offers.
      </p>
      <p>
        A connected blood pressure cuff and its app can log readings
        automatically. If you are choosing one, look at how the app lets
        readings be shared and who can see them. Ask the care team which
        readings they want, how often, and which changes should prompt a call.
        Bring the log to visits. Do not use an app to decide on your own whether
        a reading is normal.
      </p>

      <HeadingWithAnchor id="safety-and-check-ins">
        Safety and check-ins
      </HeadingWithAnchor>
      <p>
        Safety tools can raise an alert or show where someone is. None can
        prevent a fall, and each has limits.
      </p>
      <p>
        <strong>Fall detection.</strong>{" "}
        <Link href="https://support.apple.com/en-us/108896" target="_blank">
          Apple Support
        </Link>{" "}
        says Fall Detection on Apple Watch turns on automatically when a
        person entered an age of 55 or older during setup. If the watch detects
        a hard fall and the wearer is still for about a minute, it starts a
        30-second countdown and then calls emergency services unless the wearer
        cancels. It also messages emergency contacts. Apple is plain about the
        limits: &ldquo;Apple Watch cannot detect all falls.&rdquo; The watch
        also needs a connection from itself or a nearby iPhone, and it works only
        when your parent wears it. A parent who takes the watch off at night or
        forgets to charge it has no fall detection. The contacts come from the
        wearer&rsquo;s Medical ID, so check that your parent&rsquo;s are set
        up. An app alert is not an emergency service. If you think your parent
        is in danger, call your local emergency number first.
      </p>
      <p>
        <strong>Location.</strong> With Apple&rsquo;s{" "}
        <Link href="https://support.apple.com/en-us/105104" target="_blank">
          Find My
        </Link>
        , the person sharing chooses how long to share, for an hour, until the
        end of the day or indefinitely, and can stop at any time. If your
        parent stops sharing, Apple says the other person is not notified. That puts the
        decision in your parent&rsquo;s hands, which is where it belongs. If
        your parent uses an Android phone, look at the location-sharing
        options built into that phone.
      </p>
      <p>
        <strong>Check-in calls.</strong> A daily call at a set time is a safety
        tool, and many families find it the one their parent likes best.
      </p>
      <p>
        <strong>Cameras and sensors.</strong> These raise the hardest consent
        questions. Laws on recording in someone&rsquo;s home vary by state,
        especially for audio, and recording without telling them is a breach of
        trust. If you are considering one, talk with your parent and an elder-law
        attorney first.
      </p>
      <p>
        Dedicated medical alert services with a call button are a separate
        product and not covered here. One caution about older lists: they may still
        recommend Alexa Together. Amazon says it is no longer available, as of
        May 21, 2025, and now offers Alexa Emergency Assist.
      </p>

      <HeadingWithAnchor id="family-updates">
        Family updates and calendars
      </HeadingWithAnchor>
      <p>
        When relatives keep asking each other for news, a shared calendar or an
        update page can replace the group text. These tools coordinate people.
        They are not health records.
      </p>
      <p>
        <strong>Cozi</strong> is a general family organizer. According to its{" "}
        <Link href="https://www.cozi.com/faq/" target="_blank">
          FAQ
        </Link>
        , the free version has a shared calendar for up to 12 people, shared
        lists and ads, and Cozi Gold costs $39 a year and removes the ads and
        adds more reminders. <strong>CaringBridge</strong> is a nonprofit that{" "}
        <Link
          href="https://www.caringbridge.org/resources/what-is-caringbridge"
          target="_blank"
        >
          describes
        </Link>{" "}
        a no-cost private page where a family can post health updates and ask
        for practical help, with three privacy settings to choose who sees the
        page.
      </p>
      <p>
        Use these for logistics and news. Keep diagnoses and medicine lists
        where your parent has agreed to put them, which usually means a smaller
        circle than everyone who follows the updates.
      </p>

      <HeadingWithAnchor id="records-and-sharing">
        Records and sharing
      </HeadingWithAnchor>
      <p>
        Records are the hardest job, because they sit with the health care
        providers and access follows their rules, not yours.
      </p>
      <p>
        Many patient portals, including MyChart, offer proxy access, which lets
        a family member see an adult&rsquo;s information. MyChart&rsquo;s{" "}
        <Link href="https://www.mychart.org/l/en-us/help/proxy/" target="_blank">
          help page
        </Link>{" "}
        explains that the account holder invites the person and that the invited
        person must confirm they know them. It also says that each health care
        organization sets its own policies on who can have proxy access, how it
        changes with the patient&rsquo;s age, and what a proxy can see and do.
        Some organizations use a paper form. Do not assume your access carries
        over from one provider to the next.
      </p>
      <p>
        Between visits, families also need a single place for the things a
        portal does not hold: scanned documents, the medicine list, notes from
        calls and appointments. Our guides cover this in more depth. See{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          how to organize medical records for an aging parent
        </Link>{" "}
        for the filing, and{" "}
        <Link href="/blog/family-history/shared-family-medical-record">
          shared family medical records
        </Link>{" "}
        for who should see what.
      </p>

      <HeadingWithAnchor id="where-kaizen-fits">
        Where Kaizen fits
      </HeadingWithAnchor>
      <p>
        The checklist in the next section applies to Kaizen as much as to any
        other app, and this section answers it.
      </p>
      <p>
        Kaizen is a mobile app for the records job. You add files, medications,
        notes and events for a parent or another family member, invite the
        relatives who help, and choose which records to share with them. You can
        stop sharing a record at any time. Medication records can carry
        reminders on the phone. Kai, the in-app assistant, can explain a lab
        report or answer a health question in plain language, by typing or
        talking, in the language you choose. Kai can be wrong, so check
        anything about a result or a medicine with your parent&rsquo;s doctor
        or pharmacist.
      </p>
      <p>
        If your parent&rsquo;s phone or wearable connects through Apple Health,
        Health Connect or an Oura ring, Kaizen builds a Health Score from that
        data. It is a wellness signal, not a diagnosis. Members of a group can
        see each other&rsquo;s latest Health Score and daily health numbers,
        along with any record that is shared. There is no setting to hide the
        Health Score from group members, so tell your parent before you invite
        anyone.
      </p>
      <ProductCallout
        body="In Kaizen, you can keep a parent's medicines, appointments, notes and documents in one place and share the records you choose with the relatives who help. Kai can explain a lab report in plain language. Kaizen does not detect falls, send emergency alerts or replace a doctor."
        buttonLabel="Get the Kaizen app"
      />
      <p>What Kaizen does not do matters as much for your decision:</p>
      <ul className="list-disc pl-6">
        <li>It does not detect falls.</li>
        <li>It does not watch for emergencies or send alerts to relatives.</li>
        <li>It does not read blood pressure from a cuff.</li>
        <li>It is not a medication tracker. It does not track whether doses are taken or alert anyone about missed ones.</li>
        <li>It does not diagnose, treat or replace a doctor.</li>
      </ul>
      <p>
        Here is how Kaizen answers the checklist below. Its{" "}
        <Link href="/docs/privacy" target="_blank">
          privacy policy
        </Link>{" "}
        says it does not sell your personal information or use your health data
        to target ads, that subscriptions are its only revenue, and that it
        does not permit its AI providers to train models on your content. It
        says you can delete your data in the app, through support or by email.
        It also says Kaizen is generally not a HIPAA covered entity or business
        associate when you use it for yourself, so, like most consumer apps,
        it relies on its own policy, consumer health privacy laws and the
        FTC&rsquo;s Health Breach Notification Rule. Kaizen encrypts data in
        transit and at rest. It has signed agreements with its AI providers
        that bar training on your data, and the providers do not store your
        data. Kaizen has a free plan and paid plans, so check the app
        for current prices.
      </p>

      <HeadingWithAnchor id="check-before-you-trust">
        Check before you trust an app
      </HeadingWithAnchor>
      <p>
        Many health apps are not covered by HIPAA. The Federal Trade Commission{" "}
        <Link
          href="https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0"
          target="_blank"
        >
          says
        </Link>{" "}
        that many companies that collect health information, whether a fitness
        tracker, a diet app or a connected blood pressure cuff, are not covered
        by HIPAA. The FTC still enforces rules against misleading practices,
        and its Health Breach Notification Rule, which July 2024 amendments say
        applies to makers of health apps and connected devices, requires
        certain organizations to notify people of a breach. The Department of
        Health and Human Services{" "}
        <Link
          href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/cell-phone-hipaa/index.html"
          target="_blank"
        >
          adds
        </Link>{" "}
        that HIPAA generally does not protect health information accessed
        through or stored on your own phone or tablet. Put plainly, a
        privacy policy is a promise, not a safeguard. Read it, and read it
        again when it changes.
      </p>
      <p>Ask the same questions of every app, Kaizen included:</p>
      <NumberedPoints
        points={[
          {
            lead: "Who can see the data?",
            text: "And can your parent change that? Look for separate controls for each kind of information.",
          },
          {
            lead: "Does the company sell or share it?",
            text: "Read the privacy policy. Look for the words sell, share, advertising and partners.",
          },
          {
            lead: "Is your parent's data used to train AI?",
            text: "If the app uses AI, find out whether the company says it trains models on user data.",
          },
          {
            lead: "Can you delete it?",
            text: "Find out how to delete the account and the data, and what happens to the data if you stop paying.",
          },
          {
            lead: "What does it cost, now and later?",
            text: "Free tiers change. Check the current price and whether the features you need are in the paid tier.",
          },
        ]}
      />
      <p>
        Other apps exist beyond those named here, and this article does not
        cover them all. Do your own research before you trust any app with your
        parent&rsquo;s medical information, including whether the company has a
        trustworthy privacy policy in place.
      </p>

      <HeadingWithAnchor id="one-page-checklist">
        A one-page checklist
      </HeadingWithAnchor>
      <p>Save or print this and work down it:</p>
      <ul className="list-disc pl-6">
        <li>I asked my parent what they want and what they are comfortable sharing.</li>
        <li>I picked one job to fix first.</li>
        <li>The tool works on devices my parent already uses.</li>
        <li>I read what the tool cannot do.</li>
        <li>I checked who sees the data, whether it is sold, and how to delete it.</li>
        <li>We agreed who gets alerts and what they will do about them.</li>
        <li>We have a backup if the tool fails, such as a phone call.</li>
        <li>We set a date to review in a month.</li>
      </ul>
      <p>
        You are not looking for the best app. You are looking for the one that
        your parent will use and that fixes the problem you are worried about.
        Start with one, and add another only when a second job needs fixing.
        Our guide to{" "}
        <Link href="/blog/family-history/caregiver-guide-aging-parents">
          supporting aging parents
        </Link>{" "}
        covers the practical side beyond the apps.
      </p>
      <p>
        This is general information, not medical or legal advice. For
        questions about your parent&rsquo;s medicines or readings, ask their
        doctor or pharmacist. For questions about consent, capacity or
        monitoring, talk with an elder-law attorney in their state.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default AppsToTrackAParentsHealth;
