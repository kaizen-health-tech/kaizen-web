import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";
import { CategoryKey } from "./categories";
import Avatar from "./Avatar";
import ContentsRail, { ArticleSection } from "./ContentsRail";
import ReadingProgressBar from "./ReadingProgressBar";
import BookmarkShareButtons from "./BookmarkShareButtons";
import KeepReading from "./KeepReading";

export interface ArticleLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  /** Breadcrumb label, e.g. "Health records". */
  category: string;
  categoryHref?: string;
  /** One of the 7 canonical categories — drives "Keep reading" tag colour and matching. */
  categoryKey?: CategoryKey;
  authorName?: string;
  authorCredentials?: string;
  authorImage?: string;
  readTime: string;
  tags?: string[];
  sections?: ArticleSection[];
  keywords?: string[];
  authorBio?: string;
}

const ArticleLayout = ({
  children,
  title,
  description,
  image,
  imageAlt,
  datePublished,
  dateModified,
  url,
  category,
  categoryHref,
  categoryKey,
  authorName = "Kaizen Health Editorial Team",
  authorCredentials = "Reviewed by healthcare professionals",
  authorImage,
  readTime,
  tags = [],
  sections = [],
  keywords = [],
  authorBio = "The Kaizen Health editorial team researches and writes family health content, with review from licensed clinicians before publication.",
}: ArticleLayoutProps) => {
  const resolvedCategoryHref =
    categoryHref ?? `/blog/${category.toLowerCase().replace(/\s+/g, "-")}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: category, url: resolvedCategoryHref },
    { name: title, url },
  ];

  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        image={image}
        datePublished={datePublished}
        dateModified={dateModified}
        authorName={authorName}
        authorCredentials={authorCredentials}
        url={url}
        section={category}
        keywords={keywords}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <ReadingProgressBar targetId="article-body" />

      <div className="border-b border-cloud bg-lavender px-4 pb-10 pt-35 md:px-8 lg:pt-45 xl:px-0 xl:pt-40">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-5.5 flex items-center gap-2.5 text-base text-space">
            <Link href="/blog" className="hover:text-graphite">
              Blog
            </Link>
            <span>/</span>
            <Link href={resolvedCategoryHref} className="font-semibold text-violet">
              {category}
            </Link>
          </div>
          <h1 className="mb-5 text-pretty text-[36px] font-bold leading-[1.1] tracking-[-1px] text-midnight sm:text-[54px] sm:leading-[1.06] sm:tracking-[-1.8px]">
            {title}
          </h1>
          <p className="mb-7.5 max-w-195 text-pretty text-lg leading-[1.5] text-text-body sm:text-[23px]">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar name={authorName} image={authorImage} size={52} />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-bold text-midnight">{authorName}</span>
              {authorCredentials && (
                <span className="text-base text-graphite">{authorCredentials}</span>
              )}
            </div>
            <span className="mx-1 hidden h-9 w-px bg-ash sm:block" />
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold text-arsenic">{readTime}</span>
              {dateModified && (
                <span className="text-base text-graphite">
                  Updated{" "}
                  {new Date(dateModified).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
            <div className="ml-auto">
              <BookmarkShareButtons title={title} url={url} />
            </div>
          </div>
        </div>
      </div>

      {image && (
        <div className="px-4 md:px-8 xl:px-0">
          <div className="relative mx-auto h-70 max-w-265 overflow-hidden rounded-b-3xl sm:h-105">
            <Image
              src={image}
              alt={imageAlt ?? title}
              fill
              priority
              sizes="(min-width: 1280px) 1060px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 px-4 pt-14 md:px-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14 xl:px-0">
        <ContentsRail sections={sections} tags={tags} />

        <article id="article-body" className="max-w-180 kz-article">
          {children}

          {authorBio && (
            <div className="mb-14 flex items-center gap-4.5 border-t border-cloud pt-7">
              <Avatar name={authorName} image={authorImage} size={64} />
              <div>
                <div className="mb-1 text-[19px] font-bold text-midnight">{authorName}</div>
                <div className="text-pretty text-lg leading-[1.5] text-graphite">{authorBio}</div>
              </div>
            </div>
          )}
        </article>
      </div>

      <div className="mt-14">
        <KeepReading currentUrl={url} categoryKey={categoryKey} />
      </div>
    </>
  );
};

export default ArticleLayout;
