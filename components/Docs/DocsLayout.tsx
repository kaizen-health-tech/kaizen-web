import Link from "next/link";

import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { Reveal } from "@/components/Common/Reveal";
import { DocsNav } from "@/components/Docs/DocsNav";
import { getLegalDoc } from "@/data/legalDocs";
import type { DocsLayoutProps } from "@/types/legal";

/**
 * Shared shell for every legal document: navigation, title, dates, and a
 * single readable text column. Only the title block animates in; the legal
 * text itself renders in place so search, anchor jumps, and printing always
 * see the whole document.
 */
export const DocsLayout = ({ href, toc, children }: DocsLayoutProps) => {
  const doc = getLegalDoc(href);

  return (
    <section className="px-4 pb-24 pt-[calc(var(--site-header-height,4.5rem)+2.5rem)] md:px-8 md:pb-32 lg:pt-[calc(var(--site-header-height,4.5rem)+5rem)]">
      <div className="mx-auto grid max-w-c-1235 gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 xl:gap-24">
        <aside className="min-w-0 lg:sticky lg:top-[calc(var(--site-header-height,4.5rem)+1.5rem)] lg:max-h-[calc(100dvh-var(--site-header-height,4.5rem)-3rem)] lg:self-start lg:overflow-y-auto lg:pb-6">
          <DocsNav />

          {toc && toc.length > 0 && (
            <nav
              aria-label="On this page"
              className="mt-10 hidden border-t border-midnight/[0.06] pt-8 lg:block"
            >
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-graphite">
                On this page
              </p>
              <ol className="space-y-0.5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-lg px-3.5 py-1.5 text-sm leading-5 text-graphite transition-colors duration-500 ease-out-soft hover:text-violet focus-visible:outline-2 focus-visible:outline-violet"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <Link
            href="/support"
            className="mt-10 hidden rounded-2xl bg-lavender p-5 text-sm leading-6 text-text-body transition duration-500 ease-out-soft hover:bg-light-lilac focus-visible:outline-2 focus-visible:outline-violet active:scale-[0.98] lg:block"
          >
            <span className="block font-semibold text-midnight">
              Questions about a policy?
            </span>
            Ask the support team.
          </Link>
        </aside>

        <div className="min-w-0">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: "Home", url: "/" },
                { name: "Policies & Docs", url: "/docs" },
                { name: doc.title, url: doc.href },
              ]}
            />
            <h1 className="max-w-[20ch] text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-midnight text-balance md:text-5xl">
              {doc.title}
            </h1>
            <dl className="mt-7 flex flex-wrap gap-2 text-sm">
              <div className="rounded-full bg-lavender px-3.5 py-1.5">
                <dt className="inline text-graphite">Effective </dt>
                <dd className="inline font-medium text-midnight">
                  {doc.effectiveDate}
                </dd>
              </div>
              {doc.lastUpdated && (
                <div className="rounded-full bg-lavender px-3.5 py-1.5">
                  <dt className="inline text-graphite">Last updated </dt>
                  <dd className="inline font-medium text-midnight">
                    {doc.lastUpdated}
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>

          <article className="kz-legal mt-12 max-w-[68ch] border-t border-midnight/[0.06] pt-12">
            {children}
          </article>
        </div>
      </div>
    </section>
  );
};
