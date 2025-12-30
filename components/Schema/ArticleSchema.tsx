export interface ArticleSchemaProps {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorCredentials?: string;
  authorUrl?: string;
  url: string;
  section?: string;
  keywords?: string[];
}

const SITE_URL = "https://www.kaizenhealth.io";

export default function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName = "Kaizen Health",
  authorCredentials,
  authorUrl,
  url,
  section = "Health",
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}/images/logo/kaizen-logo.png`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": authorUrl ? "Person" : "Organization",
      name: authorName,
      ...(authorCredentials && { jobTitle: authorCredentials }),
      ...(authorUrl && { url: authorUrl }),
      ...(!authorUrl && { url: SITE_URL }),
    },
    publisher: {
      "@type": "Organization",
      name: "Kaizen Health",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo/kaizen-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
    articleSection: section,
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
