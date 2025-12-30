import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";
import { ReactNode } from "react";

export interface BlogPostWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  category?: string;
  authorName?: string;
  authorCredentials?: string;
  keywords?: string[];
}

export default function BlogPostWrapper({
  children,
  title,
  description,
  image,
  datePublished,
  dateModified,
  url,
  category = "Health",
  authorName = "Kaizen Health Editorial Team",
  authorCredentials,
  keywords = [],
}: BlogPostWrapperProps) {
  // Build breadcrumb items
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    ...(category ? [{ name: category, url: `/blog/${category.toLowerCase()}` }] : []),
    { name: title, url },
  ];

  return (
    <>
      {/* Schema markup for SEO and GEO */}
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

      {/* Author attribution bar */}
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-35 lg:pt-45 xl:pt-50">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>
              <strong>Author:</strong> {authorName}
              {authorCredentials && `, ${authorCredentials}`}
            </span>
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              <strong>Published:</strong>{" "}
              {new Date(datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </span>
          {dateModified && dateModified !== datePublished && (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>
                <strong>Updated:</strong>{" "}
                {new Date(dateModified).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </span>
          )}
        </div>

      </div>

      {children}
    </>
  );
}
