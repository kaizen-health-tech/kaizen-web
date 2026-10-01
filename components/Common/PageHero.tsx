import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { Reveal } from "@/components/Common/Reveal";

import type { PageHeroBackgroundProps, PageHeroProps } from "@/types/ui";

/**
 * The site's page-header wash: lilac light from the top, a faint aquamarine
 * glow low on the right, fading to the page colour so the hero has no hard
 * bottom edge. Pure CSS, so no background image to download. Place inside a
 * `relative overflow-hidden` element.
 */
export const PageHeroBackground = ({
  className = "",
}: PageHeroBackgroundProps) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_65%,transparent)] bg-[radial-gradient(ellipse_at_50%_-10%,rgba(214,213,249,0.9),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(102,230,181,0.14),transparent_40%),radial-gradient(circle_at_8%_80%,rgba(227,227,251,0.8),transparent_40%)] ${className}`}
  />
);

/** Top padding that clears the floating header, shared by every page hero. */
export const PAGE_HERO_PADDING =
  "px-4 pb-16 pt-[calc(var(--site-header-height,4.5rem)+4rem)] md:px-8 md:pb-20 lg:pt-[calc(var(--site-header-height,4.5rem)+7rem)]";

/**
 * Standard page header: breadcrumbs, eyebrow pill, title, description and
 * actions over the shared background. Use on every content page so headers
 * match; the home page keeps its own full-bleed video hero.
 */
export const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "center",
  actions,
  aside,
  children,
  className = "",
  containerClassName = "max-w-c-1235",
}: PageHeroProps) => {
  const centered = align === "center" && !aside;

  const intro = (
    <Reveal
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs center={centered} items={breadcrumbs} />
      )}
      {eyebrow && (
        <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-violet ring-1 ring-midnight/5">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-midnight text-balance md:text-6xl">
        {title}
      </h1>
      {description && (
        <div
          className={`mt-6 max-w-2xl text-lg leading-8 text-text-body ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </div>
      )}
      {actions && (
        <div
          className={`mt-10 flex flex-wrap items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          {actions}
        </div>
      )}
    </Reveal>
  );

  return (
    <section
      className={`relative overflow-hidden ${PAGE_HERO_PADDING} ${className}`}
    >
      <PageHeroBackground />
      <div className={`mx-auto ${containerClassName}`}>
        {aside ? (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16">
            {intro}
            <Reveal delay={120}>{aside}</Reveal>
          </div>
        ) : (
          intro
        )}
        {children}
      </div>
    </section>
  );
};
