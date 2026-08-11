import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/Contact/ContactForm";
import ContactDetails, {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
} from "@/components/Contact/ContactDetails";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { COMPANY_NAME, absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Contact Us",
  description:
    "Get in touch with the Kaizen Health team in San Francisco about product questions, press, partnerships, or careers, or reach our support team for account help.",
  path: "/contact",
  keywords: [
    "contact Kaizen Health",
    "Kaizen Health address",
    "Kaizen Health email",
    "family health app contact",
    "Kaizen Health press inquiries",
  ],
});

const contactRoutes = [
  {
    title: "Product and general questions",
    description:
      "Wondering whether Kaizen Health fits how your family manages care? Ask us anything about records, family groups, or the Kai assistant before you sign up.",
    linkLabel: "See how Kaizen works",
    href: "/how-it-works",
  },
  {
    title: "Account and technical help",
    description:
      "Already using the app and running into a problem with a document, a login, or a subscription? Our support center covers the most common fixes and routes you to the right team.",
    linkLabel: "Visit the support center",
    href: "/support",
  },
  {
    title: "Press and media",
    description:
      "Journalists and analysts covering family caregiving, health records, or consumer health AI can reach us for comment, background, and brand assets.",
    linkLabel: "Download the brand kit",
    href: "/brand-kit",
  },
  {
    title: "Partnerships",
    description:
      "We work with clinicians, caregiver organizations, and health companies who want families to arrive at appointments prepared. Tell us what you have in mind.",
    linkLabel: "Read about our mission",
    href: "/about",
  },
  {
    title: "Careers",
    description:
      "Interested in building secure, family-first health tools? Open roles are listed on our careers pages, and we are always glad to hear from thoughtful people.",
    linkLabel: "Browse open roles",
    href: "/careers/open-roles",
  },
  {
    title: "Privacy and data requests",
    description:
      "To export your data or delete your account, send a request through the support form so we can verify it against the email address on the account.",
    linkLabel: "Read the privacy policy",
    href: "/docs/privacy",
  },
];

const fullAddress = `${CONTACT_ADDRESS.streetAddress}, ${CONTACT_ADDRESS.addressLocality}, ${CONTACT_ADDRESS.addressRegion} ${CONTACT_ADDRESS.postalCode}`;
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=15&output=embed`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_NAME,
  url: absoluteUrl("/contact"),
  email: CONTACT_EMAIL,
  image: absoluteUrl("/images/logo/kaizen-logo.png"),
  address: {
    "@type": "PostalAddress",
    ...CONTACT_ADDRESS,
  },
  hasMap: mapsDirectionsUrl,
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${COMPANY_NAME}`,
  url: absoluteUrl("/contact"),
  description:
    "Contact details and inquiry form for the Kaizen Health team in San Francisco.",
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    url: absoluteUrl("/"),
    email: CONTACT_EMAIL,
    address: {
      "@type": "PostalAddress",
      ...CONTACT_ADDRESS,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        url: absoluteUrl("/support"),
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        availableLanguage: "English",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <main id="contact">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="relative py-24">
        <Image
          src="/images/hero/contact-us-hero-bg.png"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="relative mx-auto mt-20 max-w-4xl px-4 text-center">
          <Breadcrumbs
            center
            className="text-gray-700"
            items={[
              { name: "Home", url: "/" },
              { name: "Contact Us", url: "/contact" },
            ]}
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-black md:text-6xl">
            Contact Kaizen Health
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-800">
            We are a small team in San Francisco building tools that help
            families keep health information organized and share it safely.
            Whether you have a question about the product, a story to write, or
            a partnership to propose, we would like to hear from you.
          </p>
        </div>
      </section>

      {/* Where to reach us */}
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-20">
        <h2 className="text-3xl font-semibold text-black dark:text-white">
          Where to reach us
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          Every message reaches the same inbox at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-primary"
          >
            {CONTACT_EMAIL}
          </a>
          , so pick the description closest to your question and we will route
          it from there.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactRoutes.map((route) => (
            <article
              key={route.title}
              className="flex flex-col rounded-lg border border-stroke bg-white p-7.5 shadow-solid-8 dark:border-strokedark dark:bg-blacksection"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {route.title}
              </h3>
              <p className="mt-3 flex-1 text-base text-gray-700 dark:text-gray-300">
                {route.description}
              </p>
              <Link
                href={route.href}
                className="mt-5 font-semibold text-primary hover:underline"
              >
                {route.linkLabel} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Office */}
      <section className="mx-auto mt-20 max-w-c-1390 px-4 md:px-8 xl:px-20">
        <div className="grid gap-8 rounded-lg border border-primary/10 bg-primary/5 p-8 dark:border-primary/30 dark:bg-primary/10 lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="text-3xl font-semibold text-black dark:text-white">
              Our office
            </h2>
            <address className="mt-4 text-lg not-italic text-gray-700 dark:text-gray-300">
              {COMPANY_NAME}
              <br />
              {CONTACT_ADDRESS.streetAddress}
              <br />
              {CONTACT_ADDRESS.addressLocality}, {CONTACT_ADDRESS.addressRegion}{" "}
              {CONTACT_ADDRESS.postalCode}
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </address>
            <p className="mt-6 max-w-3xl text-base text-gray-700 dark:text-gray-300">
              Kaizen Health is a remote-friendly team, so the fastest way to
              reach us is by email or the form below rather than by dropping
              in. If you need help with an existing account, the{" "}
              <Link href="/support" className="font-semibold text-primary">
                support center
              </Link>{" "}
              answers the most common questions first.
            </p>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Get directions &rarr;
            </a>
          </div>

          <div className="h-72 w-full overflow-hidden rounded-lg border border-primary/10 dark:border-primary/30 lg:h-full">
            <iframe
              title={`Map showing the ${COMPANY_NAME} office`}
              src={mapsEmbedUrl}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="px-4 md:px-8 2xl:px-0 mb-20">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <ContactForm
              heading="Send us a message"
              defaultTopic="General"
              topics={[
                "General",
                "Press",
                "Partnerships",
                "Careers",
                "Product Feedback",
              ]}
            />
            <ContactDetails />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
