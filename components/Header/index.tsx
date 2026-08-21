"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const MobileNavigation = () => (
  <details className="group relative xl:hidden">
    <summary
      aria-label="Open navigation"
      className="flex h-11 w-11 list-none items-center justify-center rounded-md text-black transition-colors hover:bg-black/5 [&::-webkit-details-marker]:hidden dark:text-white dark:hover:bg-white/10"
    >
      <svg
        aria-hidden="true"
        className="h-7 w-7 group-open:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
      <svg
        aria-hidden="true"
        className="hidden h-7 w-7 group-open:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      >
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </svg>
    </summary>

    <div className="absolute right-0 top-full z-50 mt-3 max-h-[calc(100svh-var(--site-header-height,4.5rem)-1rem)] w-[calc(100vw-2rem)] overflow-y-auto rounded-md bg-white p-6 shadow-solid-5 dark:bg-blacksection">
      <nav aria-label="Mobile navigation">
        <ul className="flex flex-col gap-5">
          {menuData.map((menuItem) =>
            menuItem.submenu ? (
              <li key={menuItem.id}>
                <details className="group/more">
                  <summary className="flex list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                    <span>{menuItem.title}</span>
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 fill-waterloo transition-transform group-open/more:rotate-180"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </summary>
                  <ul className="mt-4 flex flex-col gap-4 border-l border-cloud pl-4">
                    {menuItem.submenu.map((item) => (
                      <li key={item.id}>
                        <Link href={item.path || "#"}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={menuItem.id}>
                <Link href={menuItem.path || "#"}>{menuItem.title}</Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <Link
        href="/chat"
        className="mt-6 flex w-full items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
      >
        Try Kai for free
      </Link>
    </div>
  </details>
);

const Header = () => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  // The desktop dropdown opens on CSS :hover/:focus-within, which stays
  // active after a submenu link is clicked (the cursor hasn't moved). This
  // forces it closed until the pointer actually leaves the menu item.
  const [dropdownForceClosed, setDropdownForceClosed] = useState(false);
  // Dynamic download link based on user‑agent
  const [downloadHref, setDownloadHref] = useState<string>("#cta");

  const pathUrl = usePathname();

  const isActive = (path?: string) => {
    if (!path) return false;
    return path === "/" ? pathUrl === "/" : pathUrl.startsWith(path);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ua = navigator.userAgent || navigator.vendor;

    if (/android/i.test(ua)) {
      setDownloadHref("https://bit.ly/kz-android-store");
    } else if (/iPad|iPhone|iPod/i.test(ua)) {
      setDownloadHref("https://bit.ly/kz-app-store");
    } else {
      setDownloadHref("#cta"); // fallback – scroll to CTA section
    }
  }, []);

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

  return (
    <header
      data-site-header
      className="absolute left-0 top-0 z-99999 w-full bg-white py-2 shadow-lg dark:bg-black"
    >
      <div className="relative mx-auto flex w-full max-w-c-1390 flex-wrap items-center justify-between px-4 md:px-8 xl:flex-nowrap xl:px-0">
        <div className="flex w-full shrink-0 items-center justify-between xl:w-1/4">
          <Link href="/" aria-label="Kaizen Health home">
            <Image
              src="/images/logo/kaizen-logo.svg"
              alt="Kaizen Health logo"
              width={240}
              height={120}
              className="w-full dark:block"
            />
          </Link>

          <MobileNavigation />
        </div>

        {/* Nav Menu Start   */}
        <div className="invisible hidden h-0 w-full items-center justify-end xl:visible xl:flex xl:h-auto xl:w-full">
          <nav className="mr-0 xl:mr-5">
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li
                  key={key}
                  className={menuItem.submenu && "group relative"}
                  onMouseLeave={() =>
                    menuItem.submenu && setDropdownForceClosed(false)
                  }
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        aria-expanded={dropdownToggler}
                        aria-haspopup="true"
                        className={`flex cursor-pointer items-center justify-between gap-3 hover:text-primary ${
                          menuItem.submenu.some((item) => isActive(item.path))
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""} ${
                          dropdownForceClosed
                            ? "xl:!invisible xl:!opacity-0"
                            : ""
                        }`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key}>
                            <Link
                              href={item.path || "#"}
                              onClick={(e) => {
                                setDropdownToggler(false);
                                setDropdownForceClosed(true);
                                e.currentTarget.blur();
                              }}
                              className={
                                isActive(item.path)
                                  ? "text-primary hover:text-primary"
                                  : "hover:text-primary"
                              }
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        isActive(menuItem.path)
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end">
            <Link
              href={"/chat"}
              className="w-full xl:w-auto mt-4 xl:mt-0 flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              Try Kai for free
            </Link>
          </div>

          {/*<div className="mt-7 flex items-center gap-6 xl:mt-0">*/}
          {/*  <ThemeToggler />*/}

          {/*  <Link*/}
          {/*    href="https://github.com/NextJSTemplates/solid-nextjs"*/}
          {/*    className="text-regular font-medium text-waterloo hover:text-primary"*/}
          {/*  >*/}
          {/*    GitHub Repo 🌟*/}
          {/*  </Link>*/}

          {/*  <Link*/}
          {/*    href="https://nextjstemplates.com/templates/solid"*/}
          {/*    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"*/}
          {/*  >*/}
          {/*    Get Pro 🔥*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
