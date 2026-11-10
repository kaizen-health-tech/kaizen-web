import Image from "next/image";

import { PillLink } from "@/components/Common/PillLink";

import type { InviteCardProps } from "@/types/groupInvite";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/kaizen-health-family/id6472772538";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=io.kaizenhealth.app";
const TAGLINE = "A calmer way to manage family health";

const STEPS = [
  "Get the Kaizen Health app.",
  "Create your account and verify your email.",
  "Open this invite link again to join.",
];

const StoreLinks = () => (
  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
    <PillLink href={APP_STORE_URL} native arrow="none" variant="midnight">
      Download on the App Store
    </PillLink>
    <PillLink href={PLAY_STORE_URL} native arrow="none" variant="outline">
      Get it on Google Play
    </PillLink>
  </div>
);

export const InviteCard = ({ preview, code }: InviteCardProps) => (
  <main className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
    <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-cloud bg-white px-6 py-12 text-center shadow-card-soft sm:px-12 sm:py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-light-lilac/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-aquamarine/30 blur-3xl" />

      <div className="relative">
        <Image
          src="/images/logo/kaizen-logo.png"
          width={180}
          height={56}
          alt="Kaizen Health"
          priority
          className="mx-auto h-auto w-[180px]"
        />
        <p className="mt-3 text-sm text-text-body">{TAGLINE}</p>

        {preview.status === "ok" && (
          <>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-violet">
              You’re invited
            </p>
            {/* Names are user-entered text. React escapes them; they are never
                passed to dangerouslySetInnerHTML. */}
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] text-midnight sm:text-5xl">
              {preview.inviterFirstName} invited you to join{" "}
              <span className="break-words text-violet">
                {preview.groupName}
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-text-body">
              Kaizen Health keeps a family’s records, appointments and care in
              one calm place.
            </p>

            <ol className="mx-auto mt-8 max-w-md space-y-3 text-left text-base text-midnight">
              {STEPS.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-light-lilac text-sm font-bold text-violet"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex justify-center">
              <PillLink
                href={`kaizenhealth://join/${code}`}
                native
                variant="violet"
              >
                Already have the app? Open it
              </PillLink>
            </div>
            <StoreLinks />
          </>
        )}

        {preview.status === "invalid" && (
          <>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-violet">
              Invite unavailable
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] text-midnight sm:text-5xl">
              This invite link isn’t valid anymore
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-text-body">
              The group owner may have reset it. Ask them to send you a new
              link or QR code.
            </p>
            <StoreLinks />
          </>
        )}

        {preview.status === "unavailable" && (
          <>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-violet">
              Something went wrong
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] text-midnight sm:text-5xl">
              We couldn’t load this invite
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-text-body">
              Please open the link again in a moment. If it keeps happening,
              ask the group owner for a new one.
            </p>
          </>
        )}
      </div>
    </div>
  </main>
);
