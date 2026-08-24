"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-3.5 w-3.5 ${className}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/**
 * Site navigation: a floating pill that rides over the page rather than a
 * full-width bar. One component for every route, so the nav is identical
 * everywhere.
 *
 * The header stays `fixed`, and its own box (16px of top inset plus the 56px
 * pill) is what gets measured into `--site-header-height` — the variable pages
 * pad against so their first section clears the nav.
 */
const Header = () => {
  const pathUrl = usePathname();

  // id of the top-level item whose submenu is showing, or null
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path?: string) => {
    if (!path) return false;
    return path === "/" ? pathUrl === "/" : pathUrl.startsWith(path);
  };

  // Both menus are open state, not route state — a navigation should always
  // leave them closed rather than hanging around over the new page.
  useEffect(() => {
    setOpenSubmenu(null);
    setMobileOpen(false);
  }, [pathUrl]);

  // Dismiss whichever menu is open on a press outside the header or on Escape.
  // Pointer devices also get hover open/close on the submenu itself; this is
  // what closes it for touch and keyboard, where there is no pointer to leave.
  useEffect(() => {
    if (openSubmenu === null && !mobileOpen) return;

    const closeAll = () => {
      setOpenSubmenu(null);
      setMobileOpen(false);
    };

    const handlePointerDown = (event: PointerEvent) => {
      const header = document.querySelector("[data-site-header]");
      if (
        header &&
        event.target instanceof Node &&
        header.contains(event.target)
      ) {
        return;
      }
      closeAll();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSubmenu, mobileOpen]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    if (!header || typeof ResizeObserver === "undefined") return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  const linkClass = (active: boolean) =>
    `text-[17px] font-medium leading-5 transition-colors ${
      active ? "text-aquamarine" : "text-white/85 hover:text-white"
    }`;

  return (
    // The wrapper spans the viewport so the pills can centre, but only the
    // pills themselves take pointer events — everything else stays clickable.
    <header
      data-site-header
      className="pointer-events-none fixed inset-x-0 top-0 z-99999 flex justify-center gap-2 px-4 pt-4 md:px-8"
    >
      <div className="pointer-events-auto relative flex min-w-0 flex-1 items-center gap-4 rounded-2xl bg-dark-plum py-2 pl-3 pr-2 shadow-[0_10px_40px_rgba(32,24,57,0.28)] md:pl-4 xl:flex-none xl:gap-12">
        <Link href="/" aria-label="Kaizen Health home" className="shrink-0">
          <Image
            src="/images/logo/kaizen-logo-light.svg"
            alt="Kaizen Health logo"
            width={128}
            height={40}
            className="h-6 w-auto md:h-7"
            priority
          />
        </Link>

        {/* Desktop: links and the call to action share the pill. */}
        <div className="hidden items-center gap-6 xl:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6">
              {menuData.map((menuItem) =>
                menuItem.submenu ? (
                  <li
                    key={menuItem.id}
                    className="relative"
                    onMouseEnter={() => setOpenSubmenu(menuItem.id)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={openSubmenu === menuItem.id}
                      aria-haspopup="true"
                      // Open-only: a pointer has usually already opened this
                      // on hover, so toggling here would close it on click.
                      // Leaving the item, Escape, or a press outside closes it.
                      onClick={() => setOpenSubmenu(menuItem.id)}
                      className={`flex cursor-pointer items-center gap-1.5 ${linkClass(
                        menuItem.submenu.some((item) => isActive(item.path)),
                      )}`}
                    >
                      {menuItem.title}
                      <Chevron
                        className={
                          openSubmenu === menuItem.id ? "rotate-180" : ""
                        }
                      />
                    </button>

                    {/* The panel is offset below the trigger, so the padding
                        on this wrapper bridges that gap. Without it the pointer
                        crosses dead space on its way down, `onMouseLeave` fires
                        on the <li>, and the panel closes before it can be
                        reached. The wrapper stops taking pointer events while
                        closed so it never blocks the page underneath. */}
                    <div
                      className={`absolute left-1/2 top-full z-50 w-[230px] -translate-x-1/2 pt-6 ${
                        openSubmenu === menuItem.id ? "" : "pointer-events-none"
                      }`}
                    >
                      <ul
                        className={`rounded-2xl bg-white p-3 shadow-solid-5 transition duration-200 ease-out ${
                          openSubmenu === menuItem.id
                            ? "visible translate-y-0 opacity-100"
                            : "invisible translate-y-2 opacity-0"
                        }`}
                      >
                        {menuItem.submenu.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.path || "#"}
                              className={`block rounded-lg px-3 py-2 text-regular transition-colors hover:bg-lavender ${
                                isActive(item.path)
                                  ? "text-primary"
                                  : "text-text-body"
                              }`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={menuItem.id}>
                    <Link
                      href={menuItem.path || "#"}
                      className={linkClass(isActive(menuItem.path))}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Link
            href="/chat"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-aquamarine px-4 py-2.5 text-[17px] font-medium leading-5 text-dark-plum transition duration-200 hover:brightness-95"
          >
            Try Kai for free
          </Link>
        </div>

        {/* Narrow screens: everything behind a Menu disclosure. */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="site-navigation-mobile"
          onClick={() => setMobileOpen((open) => !open)}
          className="ml-auto flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-2 py-2 text-[15px] font-medium leading-5 text-white md:text-[17px] xl:hidden"
        >
          Menu
          <Chevron className={mobileOpen ? "rotate-180" : ""} />
        </button>
      </div>

      <Link
        href="/chat"
        className="pointer-events-auto inline-flex shrink-0 items-center justify-center rounded-2xl bg-aquamarine px-3 text-[15px] font-medium leading-5 text-dark-plum shadow-[0_10px_40px_rgba(32,24,57,0.28)] transition duration-200 hover:brightness-95 md:px-4 md:text-[17px] xl:hidden"
      >
        Try Kai free
      </Link>

      <nav
        id="site-navigation-mobile"
        aria-label="Primary"
        hidden={!mobileOpen}
        className="pointer-events-auto absolute inset-x-4 top-full mt-2 md:inset-x-8 max-h-[calc(100svh-var(--site-header-height,4.5rem)-1rem)] overflow-y-auto rounded-2xl bg-dark-plum p-4 shadow-[0_10px_40px_rgba(32,24,57,0.28)] xl:hidden"
      >
        <ul className="flex flex-col gap-1">
          {menuData
            .flatMap((menuItem) => menuItem.submenu ?? [menuItem])
            .map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path || "#"}
                  className={`block rounded-lg px-2 py-2.5 text-base font-medium leading-5 transition-colors ${
                    isActive(item.path)
                      ? "text-aquamarine"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
