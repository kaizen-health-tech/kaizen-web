import Image from "next/image";

/**
 * Plain <a> tags, not next/link's <Link>, throughout this component.
 * It's reused by app/global-not-found.tsx, which Next.js renders as a fully
 * separate <html>/<body> document outside the normal client router tree (see
 * https://nextjs.org/docs/app/api-reference/file-conventions/not-found).
 * A <Link> click there updates the URL via pushState with no router mounted
 * to handle the transition, so the page silently stops navigating.
 */
const NotFoundContent = () => {
  return (
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/images/shape/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        />

        <h1 className="mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl">
          This Page Does Not Exist
        </h1>
        <p className="mb-7.5">
          The page you were looking for appears to have been moved, deleted,
          or does not exist. Here are a few places to pick back up.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
          >
            Return to Home
            <svg
              className="fill-white"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                fill=""
              />
            </svg>
          </a>

          <a
            href="/blog"
            className="inline-flex items-center gap-2.5 rounded-full border border-stroke px-6 py-3 font-medium text-black duration-300 ease-in-out hover:border-primary hover:text-primary dark:border-strokedark dark:text-white"
          >
            Visit the Blog
          </a>

          <a
            href="/support"
            className="inline-flex items-center gap-2.5 rounded-full border border-stroke px-6 py-3 font-medium text-black duration-300 ease-in-out hover:border-primary hover:text-primary dark:border-strokedark dark:text-white"
          >
            Support Center
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFoundContent;
