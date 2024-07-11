"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs/privacy`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white`}
        >
          Privacy
        </Link>
        <Link
          href={`/docs/terms`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Terms and Conditions
        </Link>
        <Link
            href={`/docs/disclaimer`}
            className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Medical Disclaimer
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
