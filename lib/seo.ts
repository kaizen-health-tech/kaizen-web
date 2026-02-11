import type { Metadata } from "next";

export const COMPANY_NAME = "Kaizen Health";
export const SITE_URL = "https://kaizenhealth.io";
export const DEFAULT_SOCIAL_IMAGE = "/images/logo/kaizen-logo.png";

const MIN_META_DESCRIPTION_LENGTH = 150;
const MAX_META_DESCRIPTION_LENGTH = 160;

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
  /[.!?]$/.test(value) ? value : `${value}.`;

export const buildTitle = (primaryKeyword: string) =>
  `${sanitizeText(primaryKeyword)} | ${COMPANY_NAME}`;

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

const fallbackDescription = (primaryKeyword: string) =>
  `${primaryKeyword} with ${COMPANY_NAME} helps families organize medical records, share secure updates, and coordinate care with AI guidance before every appointment.`;

export const normalizeDescription = (
  description: string,
  primaryKeyword: string,
) => {
  let normalized = sanitizeText(description);

  if (normalized.length < MIN_META_DESCRIPTION_LENGTH) {
    normalized = sanitizeText(
      `${normalized} ${COMPANY_NAME} helps families share secure updates, organize records, and stay aligned on care decisions.`,
    );
  }

  if (normalized.length < MIN_META_DESCRIPTION_LENGTH) {
    normalized = sanitizeText(fallbackDescription(primaryKeyword));
  }

  if (normalized.length > MAX_META_DESCRIPTION_LENGTH) {
    normalized = trimToLength(normalized, MAX_META_DESCRIPTION_LENGTH);
  }

  normalized = ensureEndingPunctuation(normalized);

  if (normalized.length > MAX_META_DESCRIPTION_LENGTH) {
    normalized = ensureEndingPunctuation(
      trimToLength(
        normalized.replace(/[.!?]+$/, ""),
        MAX_META_DESCRIPTION_LENGTH - 1,
      ),
    );
  }

  if (normalized.length < MIN_META_DESCRIPTION_LENGTH) {
    const expandedFallback = sanitizeText(
      `${primaryKeyword} from ${COMPANY_NAME} keeps families connected with secure records, shared timelines, and actionable AI insights for better daily care coordination.`,
    );
    normalized = ensureEndingPunctuation(
      trimToLength(expandedFallback, MAX_META_DESCRIPTION_LENGTH),
    );
  }

  return normalized;
};

type PageMetadataOptions = {
  primaryKeyword: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
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
}: PageMetadataOptions): Metadata => {
  const title = buildTitle(primaryKeyword);
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
