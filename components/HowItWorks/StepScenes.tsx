"use client";

import { useEffect, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import type { HowItWorksSceneId, StepSceneProps } from "@/types/howItWorks";

/*
 * Animated illustrations for the how-it-works steps. Each scene is a short
 * timeline drawn in code from the real app screens, so it stays sharp at any
 * size and loads nothing extra. Every name, email, and record below is
 * synthetic demo content.
 *
 * Motion rules: only transform and opacity animate, every curve is the site's
 * ease-out-soft, and loops stop when the OS asks for reduced motion
 * (MotionConfig in the site shell also drops transforms in that case).
 */

const EASE = [0.32, 0.72, 0, 1] as const;

type TimedProps = {
  play: boolean;
  /** Seconds after the scene starts. */
  delay: number;
};

type AppearProps = TimedProps & {
  children: ReactNode;
  className?: string;
  x?: number;
  y?: number;
  scale?: number;
};

const Appear = ({
  play,
  delay,
  children,
  className = "",
  x = 0,
  y = 12,
  scale = 1,
}: AppearProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x, y, scale }}
    animate={play ? { opacity: 1, x: 0, y: 0, scale: 1 } : undefined}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

/** Types `text` one character at a time, like someone filling in a field. */
const Typed = ({ text, play, delay }: TimedProps & { text: string }) => {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!play || reduced) return;
    let typed = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        typed += 1;
        setCount(typed);
        if (typed >= text.length) window.clearInterval(interval);
      }, 55);
    }, delay * 1000);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [play, reduced, text, delay]);

  const shown = play && reduced ? text.length : count;
  const typing = shown > 0 && shown < text.length;

  return (
    <span>
      {text.slice(0, shown)}
      {typing && (
        <span className="ml-px inline-block h-[1em] w-px translate-y-[2px] bg-violet" />
      )}
    </span>
  );
};

/** A quick press-in, for buttons the scene "taps". */
const Press = ({
  play,
  delay,
  children,
  className = "",
}: TimedProps & { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    animate={play ? { scale: [1, 0.94, 1] } : undefined}
    transition={{ duration: 0.45, times: [0, 0.4, 1], ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

const Checkbox = ({ play, delay }: TimedProps) => (
  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-md ring-1 ring-violet/60">
    <motion.span
      className="absolute inset-0 flex items-center justify-center rounded-md bg-violet text-white"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={play ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3"
      >
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </motion.span>
  </span>
);

const Bar = ({
  play,
  delay,
  duration = 0.9,
  className = "bg-violet",
}: TimedProps & { duration?: number; className?: string }) => (
  <motion.span
    className={`absolute inset-0 origin-left rounded-full ${className}`}
    initial={{ scaleX: 0 }}
    animate={play ? { scaleX: 1 } : undefined}
    transition={{ duration, ease: EASE, delay }}
  />
);

const Avatar = ({
  initials,
  tone,
  size = "h-10 w-10 text-sm",
}: {
  initials: string;
  tone: string;
  size?: string;
}) => (
  <span
    className={`flex shrink-0 items-center justify-center rounded-full font-bold ring-2 ring-white ${size} ${tone}`}
  >
    {initials}
  </span>
);

const Icon = ({
  d,
  className = "h-4 w-4",
}: {
  d: string;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d={d} />
  </svg>
);

const ICONS = {
  check: "m5 12.5 4.5 4.5L19 7.5",
  mail: "M3.75 6.75h16.5v10.5H3.75zM3.75 7.5 12 13l8.25-5.5",
  share: "M14 4.5h5.5V10M19.5 4.5 11 13M10 6H5.5v12.5H18V14",
  scan: "M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M7 12h10",
  image: "M4.5 5.5h15v13h-15zM4.5 15l4.5-4.5 4 4 2.5-2.5 4 4",
  clip: "M15.5 7.5 9 14a2 2 0 0 0 2.83 2.83l7-7a4 4 0 0 0-5.66-5.66l-7 7a6 6 0 0 0 8.49 8.49L19 15",
  mic: "M12 4a2.5 2.5 0 0 0-2.5 2.5v5a2.5 2.5 0 0 0 5 0v-5A2.5 2.5 0 0 0 12 4ZM6.5 11a5.5 5.5 0 0 0 11 0M12 16.5V20",
  doc: "M7 3.75h6.5L17.25 7.5v12.75H7zM13 3.75V8h4.25M9.5 12h5M9.5 15h5",
  spark:
    "M12 3.5l1.6 4.4 4.4 1.6-4.4 1.6L12 15.5l-1.6-4.4L6 9.5l4.4-1.6L12 3.5ZM18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8-1.8-.7 1.8-.7L18 15Z",
};

/** The phone the scenes play inside: a tinted shell around a white screen. */
const Phone = ({ children }: { children: ReactNode }) => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[2.75rem] bg-midnight/[0.06] p-1.5 ring-1 ring-midnight/10">
    <div className="relative flex h-[500px] w-[264px] flex-col overflow-hidden rounded-[calc(2.75rem-0.375rem)] bg-white px-5 pb-6 pt-11 shadow-[0_30px_70px_rgba(40,27,85,0.16),inset_0_1px_1px_rgba(255,255,255,0.9)]">
      <span className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-midnight" />
      {children}
    </div>
  </div>
);

/** Floating card beside the phone, for the moment a step pays off. */
const Satellite = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-4 text-left shadow-[0_18px_44px_rgba(40,27,85,0.14)] ring-1 ring-midnight/5">
    {children}
  </div>
);

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="rounded-xl bg-lavender px-3.5 py-2.5">
    <p className="truncate text-[10px] text-graphite">{label}</p>
    <div className="mt-0.5 h-5 truncate text-[13px] font-semibold text-midnight">
      {children}
    </div>
  </div>
);

const Canvas = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden="true"
    className="relative mx-auto h-[600px] w-full max-w-[460px] select-none"
  >
    {children}
  </div>
);

/* ---------- 01 · Create your account ---------- */

const AccountScene = ({ play }: StepSceneProps) => (
  <Canvas>
    <Phone>
      <div className="flex gap-1.5">
        <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-light-lilac">
          <Bar play={play} delay={0.2} />
        </span>
        <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-light-lilac">
          <Bar play={play} delay={3.1} />
        </span>
        <span className="h-1.5 flex-1 rounded-full bg-light-lilac" />
      </div>

      <p className="mt-7 text-2xl font-bold text-violet">Welcome!</p>
      <p className="mt-1.5 text-[13px] font-medium leading-5 text-midnight">
        Fill in a few details so we can create your account.
      </p>

      <div className="mt-6 space-y-2.5">
        <Field label="What's your name?">
          <Typed text="Maya" play={play} delay={0.7} />
        </Field>
        <Field label="What's your email?">
          <Typed text="maya@example.com" play={play} delay={1.1} />
        </Field>
        <Field label="Date of birth">
          <Typed text="03/02/1988" play={play} delay={2.1} />
        </Field>
      </div>

      <Press play={play} delay={2.9} className="mt-auto">
        <span className="flex h-11 items-center justify-center rounded-xl bg-violet text-sm font-bold text-aquamarine">
          Next
        </span>
      </Press>
    </Phone>

    <Appear play={play} delay={0.4} x={16} className="absolute right-0 top-2">
      <span className="rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-midnight shadow-[0_12px_30px_rgba(40,27,85,0.12)] ring-1 ring-midnight/5">
        iPhone &amp; Android
      </span>
    </Appear>

    <Appear
      play={play}
      delay={3.4}
      y={20}
      scale={0.9}
      className="absolute bottom-1 left-0"
    >
      <Satellite>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aquamarine text-dark-plum">
          <Icon d={ICONS.check} />
        </span>
        <span>
          <span className="block text-sm font-semibold text-midnight">
            Account created
          </span>
          <span className="block text-xs text-graphite">
            Your home base is ready
          </span>
        </span>
      </Satellite>
    </Appear>
  </Canvas>
);

/* ---------- 02 · Invite your care circle ---------- */

const InviteScene = ({ play }: StepSceneProps) => (
  <Canvas>
    <Phone>
      <p className="text-xl font-bold text-violet">Invite Members</p>

      <p className="mt-5 text-[13px] font-bold text-midnight">Select group</p>
      <div className="mt-2 flex items-center justify-between border-b border-cloud py-2.5 text-[13px] text-midnight">
        Family
        <Checkbox play={play} delay={0.6} />
      </div>
      <div className="flex items-center justify-between py-2.5 text-[13px] font-semibold text-midnight">
        + Create new group
        <span className="h-5 w-5 rounded-md ring-1 ring-violet/40" />
      </div>

      <p className="mt-4 text-[13px] font-bold text-midnight">Add member</p>
      <div className="mt-2 space-y-2.5">
        <Field label="Member's email">
          <Typed text="dad@example.com" play={play} delay={1.0} />
        </Field>
        <div className="grid grid-cols-2 gap-2.5">
          <Field label="Relationship">
            <Appear play={play} delay={2.0} y={4}>
              Parent
            </Appear>
          </Field>
          <Field label="Biologically related">
            <Appear play={play} delay={2.3} y={4}>
              Yes
            </Appear>
          </Field>
        </div>
      </div>

      <Press play={play} delay={2.8} className="mt-auto">
        <span className="flex h-11 items-center justify-center rounded-xl bg-violet text-sm font-bold text-aquamarine">
          Add Member
        </span>
      </Press>
    </Phone>

    <Appear
      play={play}
      delay={3.2}
      x={-60}
      y={40}
      scale={0.8}
      className="absolute right-0 top-1"
    >
      <Satellite>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-light-lilac text-violet">
          <Icon d={ICONS.mail} />
        </span>
        <span>
          <span className="block text-sm font-semibold text-midnight">
            Invite sent
          </span>
          <span className="block text-xs text-graphite">dad@example.com</span>
        </span>
      </Satellite>
    </Appear>

    <Appear
      play={play}
      delay={4.0}
      y={20}
      scale={0.9}
      className="absolute bottom-1 left-0"
    >
      <Satellite>
        <Avatar initials="D" tone="bg-[#FBE3ED] text-[#B23C6B]" />
        <span>
          <span className="block text-sm font-semibold text-midnight">
            Dad joined
          </span>
          <span className="block text-xs text-graphite">
            Your care circle · Family
          </span>
        </span>
      </Satellite>
    </Appear>
  </Canvas>
);

/* ---------- 03 · Add family to your home screen ---------- */

const ORBIT = [
  {
    initials: "D",
    tone: "bg-[#FBE3ED] text-[#B23C6B]",
    x: -78,
    y: -38,
    delay: 0.6,
  },
  {
    initials: "R",
    tone: "bg-[#E4FBF2] text-[#1F7A58]",
    x: 74,
    y: -46,
    delay: 0.9,
  },
  {
    initials: "S",
    tone: "bg-[#FBF1DD] text-[#9A6B12]",
    x: 62,
    y: 58,
    delay: 1.2,
  },
];

const HomeScene = ({ play }: StepSceneProps) => {
  const reduced = usePrefersReducedMotion();

  return (
    <Canvas>
      <Phone>
        <p className="text-[11px] font-medium text-graphite">Good morning</p>
        <p className="text-xl font-bold text-midnight">Hi Maya!</p>

        {/* Family bubble: you in the middle, the people you added around you. */}
        <div className="relative mx-auto mt-4 flex h-48 w-full items-center justify-center">
          <span className="absolute h-40 w-40 rounded-full border border-dashed border-violet/20" />
          {play && !reduced && (
            <motion.span
              className="absolute h-20 w-20 rounded-full bg-violet/20"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{
                duration: 2.4,
                ease: EASE,
                repeat: Infinity,
                repeatDelay: 0.4,
                delay: 1.6,
              }}
            />
          )}
          <span className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full bg-violet text-white shadow-[0_14px_30px_rgba(110,64,243,0.35)]">
            <span className="text-lg font-bold">M</span>
            <span className="text-[10px] text-white/75">You</span>
          </span>
          {ORBIT.map((member) => (
            <motion.span
              key={member.initials}
              className="absolute"
              style={{ x: member.x, y: member.y }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={play ? { opacity: 1, scale: 1 } : undefined}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 18,
                delay: member.delay,
              }}
            >
              <Avatar
                initials={member.initials}
                tone={member.tone}
                size="h-12 w-12 text-base"
              />
            </motion.span>
          ))}
        </div>

        <p className="mt-2 text-[13px] font-bold text-midnight">
          Shared with you
        </p>
        <div className="mt-2 space-y-2">
          <Appear play={play} delay={1.9} x={24} y={0}>
            <div className="flex items-center gap-2.5 rounded-xl bg-lavender p-2.5">
              <Avatar
                initials="D"
                tone="bg-[#FBE3ED] text-[#B23C6B]"
                size="h-8 w-8 text-xs"
              />
              <span className="min-w-0">
                <span className="block truncate text-[12px] font-semibold text-midnight">
                  Cardiology visit notes
                </span>
                <span className="block text-[11px] text-graphite">
                  Dad · just now
                </span>
              </span>
            </div>
          </Appear>
          <Appear play={play} delay={2.5} x={24} y={0}>
            <div className="flex items-center gap-2.5 rounded-xl bg-lavender p-2.5">
              <Avatar
                initials="R"
                tone="bg-[#E4FBF2] text-[#1F7A58]"
                size="h-8 w-8 text-xs"
              />
              <span className="min-w-0">
                <span className="block truncate text-[12px] font-semibold text-midnight">
                  Annual physical summary
                </span>
                <span className="block text-[11px] text-graphite">
                  Mom · 2 min ago
                </span>
              </span>
            </div>
          </Appear>
        </div>
      </Phone>

      <Appear play={play} delay={2.0} x={16} className="absolute right-0 top-2">
        <span className="flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-midnight shadow-[0_12px_30px_rgba(40,27,85,0.12)] ring-1 ring-midnight/5">
          <span className="h-2 w-2 rounded-full bg-aquamarine" />
          Live updates
        </span>
      </Appear>
    </Canvas>
  );
};

/* ---------- 04 · Upload and share ---------- */

const UPLOAD_TILES = [
  { label: "Scan", icon: ICONS.scan },
  { label: "Gallery", icon: ICONS.image },
  { label: "File", icon: ICONS.clip },
  { label: "Record", icon: ICONS.mic },
];

const UploadScene = ({ play }: StepSceneProps) => {
  const reduced = usePrefersReducedMotion();

  return (
    <Canvas>
      <Phone>
        <p className="text-xl font-bold text-violet">Add Health Records</p>
        <div className="mt-4 flex gap-1.5 text-[11px] font-semibold">
          <span className="rounded-lg bg-light-lilac px-2.5 py-1.5 text-violet">
            File
          </span>
          {["Medication", "Note", "Event"].map((tab) => (
            <span
              key={tab}
              className="rounded-lg px-2 py-1.5 text-graphite ring-1 ring-cloud"
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {UPLOAD_TILES.map((tile, index) => {
            const tileBody = (
              <span className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-violet/30 text-[10px] font-semibold text-violet">
                <Icon d={tile.icon} className="h-5 w-5" />
                {tile.label}
              </span>
            );
            return index === 0 ? (
              <Press key={tile.label} play={play} delay={0.6}>
                {tileBody}
              </Press>
            ) : (
              <span key={tile.label}>{tileBody}</span>
            );
          })}
        </div>

        {/* The scanned page, with a scan line sweeping it. */}
        <Appear play={play} delay={0.9} y={16} className="mt-5">
          <div className="relative overflow-hidden rounded-xl bg-lavender p-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-violet">
                <Icon d={ICONS.doc} className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12px] font-semibold text-midnight">
                  Lab results · March
                </span>
                <span className="relative mt-1.5 block h-1 overflow-hidden rounded-full bg-white">
                  <Bar play={play} delay={2.0} duration={1.1} />
                </span>
              </span>
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-aquamarine text-dark-plum"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={play ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.5, ease: EASE, delay: 3.1 }}
              >
                <Icon d={ICONS.check} className="h-3.5 w-3.5" />
              </motion.span>
            </div>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1.5 w-4/5 rounded-full bg-white" />
              <span className="block h-1.5 w-3/5 rounded-full bg-white" />
              <span className="block h-1.5 w-2/3 rounded-full bg-white" />
            </div>
            {play && !reduced && (
              <motion.span
                className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-transparent via-aquamarine/40 to-transparent"
                initial={{ y: -32, opacity: 0 }}
                animate={{ y: [-32, 110], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 1.1,
                  ease: EASE,
                  delay: 1.0,
                  repeat: 1,
                }}
              />
            )}
          </div>
        </Appear>

        <p className="mt-auto text-[13px] font-bold text-midnight">
          Share this with groups?
        </p>
        <div className="mt-2 flex items-center justify-between text-[13px] text-midnight">
          Family
          <Checkbox play={play} delay={3.9} />
        </div>
      </Phone>

      <Appear
        play={play}
        delay={3.4}
        x={-24}
        y={0}
        className="absolute left-0 top-1"
      >
        <Satellite>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-light-lilac text-violet">
            <Icon d={ICONS.doc} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-midnight">
              Added: Lab results
            </span>
            <span className="block text-xs text-graphite">
              Filed under Maya
            </span>
          </span>
        </Satellite>
      </Appear>

      <Appear
        play={play}
        delay={4.3}
        y={20}
        scale={0.9}
        className="absolute bottom-1 right-0"
      >
        <Satellite>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aquamarine text-dark-plum">
            <Icon d={ICONS.share} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-midnight">
              Shared with Family
            </span>
            <span className="block text-xs text-graphite">
              Change it anytime
            </span>
          </span>
        </Satellite>
      </Appear>
    </Canvas>
  );
};

/* ---------- 05 · Ask Kai ---------- */

const InsightsScene = ({ play }: StepSceneProps) => {
  const reduced = usePrefersReducedMotion();

  return (
    <Canvas>
      <Phone>
        <div className="flex items-center gap-2.5 border-b border-cloud pb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet text-white">
            <Icon d={ICONS.spark} className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-sm font-bold text-midnight">Kai</span>
            <span className="block text-[10px] text-graphite">
              Answers from your records
            </span>
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <Appear play={play} delay={0.2} y={8} className="ml-auto max-w-[85%]">
            <p className="rounded-2xl rounded-br-md bg-violet px-3.5 py-2.5 text-[12px] leading-[1.45] text-white">
              <Typed
                text="What did my last lab report say?"
                play={play}
                delay={0.4}
              />
            </p>
          </Appear>

          <div className="relative">
            {/* Typing dots, shown while Kai reads the record. */}
            <motion.div
              className="absolute left-0 top-0 flex w-max gap-1 rounded-2xl rounded-bl-md bg-lavender px-3.5 py-3"
              initial={{ opacity: 0 }}
              animate={play ? { opacity: [0, 1, 1, 0] } : undefined}
              transition={{
                duration: 1.2,
                times: [0, 0.15, 0.85, 1],
                delay: 2.3,
              }}
            >
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-1.5 w-1.5 rounded-full bg-graphite"
                  animate={
                    play && !reduced ? { opacity: [0.3, 1, 0.3] } : undefined
                  }
                  transition={{
                    duration: 0.9,
                    repeat: 2,
                    delay: 2.3 + dot * 0.15,
                  }}
                />
              ))}
            </motion.div>

            <Appear play={play} delay={3.4} y={10} className="max-w-[92%]">
              <div className="rounded-2xl rounded-bl-md bg-lavender px-3.5 py-3 text-[12px] leading-[1.5] text-midnight">
                <p>Here&apos;s a summary of your March lab report:</p>
                <div className="mt-2 space-y-1.5">
                  {[
                    "3 results are marked outside the reference range.",
                    "Your doctor's note asks for a follow-up in 3 months.",
                  ].map((line, index) => (
                    <Appear
                      key={line}
                      play={play}
                      delay={3.8 + index * 0.35}
                      y={6}
                      className="flex gap-2"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet" />
                      <span>{line}</span>
                    </Appear>
                  ))}
                </div>
                <Appear play={play} delay={4.6} y={6} className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-violet ring-1 ring-violet/15">
                    <Icon d={ICONS.doc} className="h-3 w-3" />
                    Source: Lab results · March
                  </span>
                </Appear>
              </div>
            </Appear>
          </div>
        </div>

        <div className="mt-auto flex h-10 items-center rounded-full bg-lavender px-4 text-[12px] text-graphite">
          Ask anything about your records
        </div>
      </Phone>

      <Appear
        play={play}
        delay={4.9}
        y={20}
        scale={0.9}
        className="absolute bottom-1 right-0"
      >
        <Satellite>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aquamarine text-dark-plum">
            <Icon d={ICONS.spark} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-midnight">
              Answer cites its source
            </span>
            <span className="block text-xs text-graphite">
              Open the record to check
            </span>
          </span>
        </Satellite>
      </Appear>
    </Canvas>
  );
};

export const STEP_SCENES: Record<
  HowItWorksSceneId,
  ComponentType<StepSceneProps>
> = {
  account: AccountScene,
  invite: InviteScene,
  home: HomeScene,
  upload: UploadScene,
  insights: InsightsScene,
};
