import type { Metadata } from "next";

import { FilledRoleItem, RoleCard } from "@/components/Careers/RoleCard";
import { PageHero } from "@/components/Common/PageHero";
import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import { CAREERS_EMAIL, getFilledRoles, getOpenRoles } from "@/data/careers";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Open Healthcare Roles",
  description:
    "Browse current openings at Kaizen Health and review role details for engineering and design positions focused on secure, family-centered healthcare products.",
  path: "/careers/open-roles",
});

export default function OpenRolesPage() {
  const openRoles = getOpenRoles();
  const filledRoles = getFilledRoles();
  const openCount = openRoles.length;

  return (
    <>
      <PageHero
        align="left"
        eyebrow="Open roles"
        title="Help families take care of each other."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
          { name: "Open roles", url: "/careers/open-roles" },
        ]}
        description={
          <p>
            We&apos;re a small team building Kaizen Health, the app families use
            to keep health records in one place and care for each other. Here is
            who we&apos;re looking for right now.
          </p>
        }
        actions={
          <>
            <PillLink href="#roles">
              {openCount === 1 ? "See the open role" : "See open roles"}
            </PillLink>
            <PillLink href="/careers" variant="soft" arrow="none">
              Why Kaizen Health
            </PillLink>
          </>
        }
        aside={
          <div className="rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-midnight/5">
            <div className="rounded-[calc(2rem-0.375rem)] bg-white p-7 shadow-card-soft">
              <p className="text-sm font-semibold text-graphite">Hiring now</p>
              <p className="mt-1 text-5xl font-semibold tracking-[-0.03em] text-midnight">
                {openCount}
              </p>
              <p className="text-sm text-graphite">
                open {openCount === 1 ? "role" : "roles"}
              </p>
              {openCount > 0 && (
                <ul className="mt-6 space-y-2 border-t border-cloud pt-6">
                  {openRoles.map((role) => (
                    <li key={role.slug}>
                      <a
                        href={`#${role.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold text-midnight transition-colors duration-500 ease-out-soft hover:bg-lavender focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
                      >
                        <span>{role.title}</span>
                        <span className="text-sm font-normal text-graphite">
                          {role.location}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        }
      />

      <div className="px-4 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12">
        <div className="mx-auto max-w-c-1235">
          <section
            id="roles"
            aria-labelledby="open-roles-heading"
            className="scroll-mt-[calc(var(--site-header-height,4.5rem)+2rem)]"
          >
            <Reveal>
              <h2
                id="open-roles-heading"
                className="text-3xl font-semibold tracking-[-0.02em] text-midnight md:text-4xl"
              >
                Open roles
              </h2>
            </Reveal>

            {openCount > 0 ? (
              <div className="mt-10 space-y-8">
                {openRoles.map((role) => (
                  <Reveal key={role.slug}>
                    <RoleCard role={role} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <p className="mt-6 max-w-xl text-lg leading-8 text-text-body">
                We don&apos;t have an opening right now. We still like hearing
                from people who care about family health, so feel free to write
                to us.
              </p>
            )}
          </section>

          {filledRoles.length > 0 && (
            <section aria-labelledby="filled-roles-heading" className="mt-24">
              <Reveal>
                <h2
                  id="filled-roles-heading"
                  className="text-2xl font-semibold tracking-[-0.02em] text-midnight"
                >
                  Recently filled
                </h2>
              </Reveal>
              <ul className="mt-6 space-y-3">
                {filledRoles.map((role) => (
                  <Reveal key={role.slug} as="li">
                    <FilledRoleItem role={role} />
                  </Reveal>
                ))}
              </ul>
            </section>
          )}

          <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-lavender p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-midnight">
                Don&apos;t see a role that fits?
              </h2>
              <p className="mt-2 max-w-xl text-base leading-7 text-text-body">
                Send us a note about what you&apos;d like to work on and why
                family health matters to you.
              </p>
            </div>
            <PillLink
              href={`mailto:${CAREERS_EMAIL}`}
              native
              variant="midnight"
            >
              Email {CAREERS_EMAIL}
            </PillLink>
          </Reveal>
        </div>
      </div>
    </>
  );
}
