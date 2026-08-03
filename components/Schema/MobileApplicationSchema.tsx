import { COMPANY_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

const IOS_APP_URL = "https://apps.apple.com/us/app/kaizen-health-family/id6472772538";
const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=io.kaizenhealth.app";

export default function MobileApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MobileApplication",
        name: `${COMPANY_NAME} – Family Health & AI`,
        url: SITE_URL,
        applicationCategory: "MedicalApplication",
        applicationSubCategory: "HealthApplication",
        operatingSystem: "iOS",
        description:
          "Kaizen Health helps families organize medical records, share secure updates, and use the Kai AI assistant to prepare for appointments and care decisions.",
        publisher: {
          "@type": "Organization",
          name: COMPANY_NAME,
          url: SITE_URL,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          category: "Freemium",
        },
        downloadUrl: IOS_APP_URL,
        installUrl: IOS_APP_URL,
        sameAs: IOS_APP_URL,
        image: absoluteUrl("/images/logo/kaizen-logo.png"),
      },
      {
        "@type": "MobileApplication",
        name: `${COMPANY_NAME} – Family Health & AI`,
        url: SITE_URL,
        applicationCategory: "MedicalApplication",
        applicationSubCategory: "HealthApplication",
        operatingSystem: "ANDROID",
        description:
          "Kaizen Health helps families organize medical records, share secure updates, and use the Kai AI assistant to prepare for appointments and care decisions.",
        publisher: {
          "@type": "Organization",
          name: COMPANY_NAME,
          url: SITE_URL,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          category: "Freemium",
        },
        downloadUrl: ANDROID_APP_URL,
        installUrl: ANDROID_APP_URL,
        sameAs: ANDROID_APP_URL,
        image: absoluteUrl("/images/logo/kaizen-logo.png"),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
