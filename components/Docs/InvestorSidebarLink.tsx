import Link from "next/link";

const InvestorSidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/hidden`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Investor Hub
        </Link>
        <Link
          href={`/hidden/roi`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white`}
        >
          ROI Example
        </Link>
        <Link
          href={`/hidden/milestones`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Milestones
        </Link>
      </li>
    </>
  );
};

export default InvestorSidebarLink;
