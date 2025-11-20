import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Get to know the founders, clinicians, and engineers building Kaizen Health for modern families.",
};

const teamMembers = [
  {
    name: "Snehal Shah",
    role: "CEO & Founder",
    bio: "Startup operator with 10+ years building enterprise healthcare SaaS, now focused on the future of personal health records and family care coordination.",
    headshot: "/images/team-snehal.jpeg",
  },
  {
    name: "Sehee Son",
    role: "Founding Engineer",
    bio: "Full-stack engineer shipping secure patient-facing experiences and the infrastructure that keeps families organized.",
    headshot: "/images/team-sehee.jpeg",
  },
  {
    name: "Ahra Jo",
    role: "Product Designer & Advisor",
    bio: "Designs compassionate workflows that blend clinical rigor with intuitive consumer experiences.",
    headshot: "/images/team-ahra.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-16 px-4 py-24 sm:px-6 lg:px-8">
      <header className="space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Team
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
          Builders with deep empathy for caregivers.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-200">
          We&apos;re parents, caregivers, and technologists who have navigated
          complex care journeys ourselves. That empathy drives every design
          decision.
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border border-primary/20 bg-white shadow-sm">
              <Image
                src={member.headshot}
                alt={member.name}
                width={120}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {member.name}
            </h2>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-200">
              {member.bio}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/40">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Interested in joining us?
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-200">
          We&apos;re hiring across product, engineering, and clinical enablement
          roles. Help us build the easiest way for families to stay aligned on
          care.
        </p>
        <a
          href="/careers"
          className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primaryho"
        >
          View open roles
        </a>
      </section>
    </main>
  );
}
