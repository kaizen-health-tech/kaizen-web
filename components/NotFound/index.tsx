import Image from "next/image";
import { PillLink } from "@/components/Common/PillLink";

/**
 * Plain <a> tags (PillLink's `native` mode), not next/link's <Link>,
 * throughout this component.
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
          <PillLink href="/" native>
            Return to Home
          </PillLink>

          <PillLink href="/blog" native variant="soft" arrow="none">
            Visit the Blog
          </PillLink>

          <PillLink href="/support" native variant="soft" arrow="none">
            Support Center
          </PillLink>
        </div>
      </div>
    </section>
  );
};

export default NotFoundContent;
