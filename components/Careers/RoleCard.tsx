import { PillLink } from "@/components/Common/PillLink";
import { applyHref } from "@/data/careers";

import type { RoleCardProps, RoleSection } from "@/types/careers";

const RoleMeta = ({ role }: RoleCardProps) => (
  <ul className="flex flex-wrap gap-2" aria-label="Role details">
    {[role.location, role.employmentType].map((item) => (
      <li
        key={item}
        className="rounded-full bg-lavender px-3 py-1 text-sm font-medium text-midnight"
      >
        {item}
      </li>
    ))}
  </ul>
);

const RoleSectionBlock = ({ section }: { section: RoleSection }) => (
  <div>
    <h4 className="text-lg font-semibold text-midnight">{section.heading}</h4>
    {section.body && (
      <p className="mt-3 text-base leading-7 text-text-longform">
        {section.body}
      </p>
    )}
    {section.items && section.items.length > 0 && (
      <ul className="mt-4 space-y-3">
        {section.items.map((item) => (
          <li
            key={item}
            className="flex gap-3.5 text-base leading-7 text-text-longform"
          >
            <span
              aria-hidden="true"
              className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

/**
 * An open role in full: title, location and apply button on the left (sticky
 * on wide screens while the description scrolls), the description on the
 * right.
 */
export const RoleCard = ({ role }: RoleCardProps) => {
  const titleId = `${role.slug}-title`;

  return (
    <article
      id={role.slug}
      aria-labelledby={titleId}
      className="scroll-mt-[calc(var(--site-header-height,4.5rem)+2rem)] rounded-[2rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5"
    >
      <div className="grid gap-10 rounded-[calc(2rem-0.375rem)] bg-white p-7 shadow-card-soft md:p-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16 lg:p-12">
        <div className="lg:sticky lg:top-[calc(var(--site-header-height,4.5rem)+2rem)] lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet">
            {role.team}
          </p>
          <h3
            id={titleId}
            className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] text-midnight text-balance"
          >
            {role.title}
          </h3>
          <div className="mt-5">
            <RoleMeta role={role} />
          </div>
          <PillLink
            href={applyHref(role)}
            native
            className="mt-8"
            aria-describedby={titleId}
          >
            Apply for this role
          </PillLink>
        </div>

        <div className="max-w-[44rem] space-y-10">
          <p className="text-xl leading-8 text-midnight">{role.summary}</p>
          {role.sections.map((section) => (
            <RoleSectionBlock key={section.heading} section={section} />
          ))}
        </div>
      </div>
    </article>
  );
};

/** A filled role, collapsed by default so past openings stay out of the way. */
export const FilledRoleItem = ({ role }: RoleCardProps) => (
  <details className="group rounded-[1.75rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-[calc(1.75rem-0.375rem)] bg-white p-6 transition-shadow duration-500 ease-out-soft hover:shadow-card-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet md:px-8 [&::-webkit-details-marker]:hidden">
      <span className="min-w-0">
        <span className="block text-lg font-semibold text-midnight">
          {role.title}
        </span>
        <span className="mt-1 block text-sm text-graphite">
          {role.team} · {role.location} · {role.employmentType}
        </span>
      </span>
      <span className="flex shrink-0 items-center gap-3">
        <span className="rounded-full bg-cloud px-3 py-1 text-sm font-semibold text-arsenic">
          Filled
        </span>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-lavender text-midnight transition-transform duration-500 ease-out-soft group-open:rotate-45"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="h-4 w-4"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </span>
    </summary>
    <div className="space-y-8 px-6 pb-6 pt-8 md:px-8">
      <p className="text-base leading-7 text-text-body">
        This position has been filled. The description is kept here for
        reference.
      </p>
      {role.sections.map((section) => (
        <RoleSectionBlock key={section.heading} section={section} />
      ))}
    </div>
  </details>
);
