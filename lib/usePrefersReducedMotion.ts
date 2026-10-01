"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;

// The server cannot know the visitor's setting, so it renders as "motion
// allowed" and the client corrects it right after hydration. Reading the media
// query during hydration instead (as framer-motion's useReducedMotion does)
// leaves server-rendered attributes such as aria-labels stale.
const getServerSnapshot = () => false;

/** True when the OS asks for reduced motion. Updates live if it changes. */
export const usePrefersReducedMotion = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
