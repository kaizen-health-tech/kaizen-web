import type { Metadata } from "next";

export const COMPANY_NAME = "Kaizen Health";
export const SITE_URL = "https://kaizenhealth.io";
export const DEFAULT_SOCIAL_IMAGE = "/images/logo/kaizen-logo.png";

// Google shows roughly 160 characters of a meta description. There is no
// minimum, so a short description is left alone: padding it with a generic
// sentence and then cutting at the limit produced fragments such as
// "...organize records, and." on dozens of pages.
const MAX_META_DESCRIPTION_LENGTH = 160;
// A sentence boundary earlier than this would leave too little of the
// description, so a word-boundary cut with an ellipsis is used instead.
const MIN_SENTENCE_CUT_LENGTH = 100;

const sanitizeText = (value: string) => value.replace(/\s+/g, " ").trim();

const trimToLength = (value: string, maxLength: number) => {
  if (value.length <= maxLength) {
    return value;
  }

  const truncated = value.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  return (lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) : truncated).trim();
};

const ensureEndingPunctuation = (value: string) =>
  /[.!?…]$/.test(value) ? value : `${value}.`;

export const buildTitle = (primaryKeyword: string) =>
  `${sanitizeText(primaryKeyword)} | ${COMPANY_NAME}`;

// Next.js renders canonicals without a trailing slash (trailingSlash: false), so
// normalize here too. Otherwise the homepage is "https://kaizenhealth.io" in the
// canonical tag but "https://kaizenhealth.io/" in the sitemap and breadcrumbs.
export const absoluteUrl = (path: string) => {
  const url = new URL(path, SITE_URL).toString();
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

// Only used when a page passes an empty description.
const fallbackDescription = (primaryKeyword: string) =>
  `${primaryKeyword} with ${COMPANY_NAME} helps families organize medical records, share secure updates, and coordinate care with AI guidance before every appointment.`;

export const normalizeDescription = (
  description: string,
  primaryKeyword: string,
) => {
  const normalized = sanitizeText(description) || fallbackDescription(primaryKeyword);

  if (normalized.length <= MAX_META_DESCRIPTION_LENGTH) {
    // A description already at the limit has no room for a closing period.
    return normalized.length < MAX_META_DESCRIPTION_LENGTH
      ? ensureEndingPunctuation(normalized)
      : normalized;
  }

  // Too long: keep whole sentences when one fits, so it never ends mid-thought.
  const window = normalized.slice(0, MAX_META_DESCRIPTION_LENGTH + 1);
  let sentenceEnd = -1;
  for (const match of window.matchAll(/[.!?](?=\s|$)/g)) {
    sentenceEnd = match.index ?? sentenceEnd;
  }

  if (sentenceEnd + 1 >= MIN_SENTENCE_CUT_LENGTH) {
    return window.slice(0, sentenceEnd + 1);
  }

  // Otherwise cut at a word boundary and mark the cut.
  const cut = trimToLength(normalized, MAX_META_DESCRIPTION_LENGTH - 1).replace(
    /[\s,;:\-–—]+$/,
    "",
  );
  return `${cut}…`;
};

type PageMetadataOptions = {
  primaryKeyword: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  // Bypasses buildTitle()'s "<keyword> | Kaizen Health" pattern for pages that
  // need a specific full title (e.g. leading with the brand name).
  title?: string;
};

const resolveImageUrl = (image?: string) => {
  if (!image) {
    return absoluteUrl(DEFAULT_SOCIAL_IMAGE);
  }

  return image.startsWith("http") ? image : absoluteUrl(image);
};

export const createPageMetadata = ({
  primaryKeyword,
  description,
  path,
  type = "website",
  image,
  keywords,
  noIndex = false,
  title: titleOverride,
}: PageMetadataOptions): Metadata => {
  const title = titleOverride ?? buildTitle(primaryKeyword);
  const normalizedDescription = normalizeDescription(description, primaryKeyword);
  const canonical = absoluteUrl(path);
  const imageUrl = resolveImageUrl(image);

  return {
    title,
    description: normalizedDescription,
    alternates: {
      canonical,
    },
    ...(keywords?.length
      ? {
          keywords,
        }
      : {}),
    openGraph: {
      title,
      description: normalizedDescription,
      url: canonical,
      siteName: COMPANY_NAME,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: normalizedDescription,
      images: [imageUrl],
      site: "@kaizenhealthio",
      creator: "@kaizenhealthio",
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
};
