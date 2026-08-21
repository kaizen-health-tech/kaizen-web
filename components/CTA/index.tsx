import Image from "next/image";

type CTAProps = {
  variant?: "default" | "home";
};

const CTA = ({ variant = "default" }: CTAProps) => {
  const isHome = variant === "home";

  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section
        id="cta"
        className={`overflow-hidden ${isHome ? "bg-[#E7E1EF] px-4 pb-16 md:px-8 md:pb-24" : ""}`}
      >
        <div
          className={`mx-auto px-8 py-16 md:py-20 lg:flex lg:items-center lg:justify-between ${
            isHome
              ? "max-w-c-1280 rounded-[36px] bg-midnight text-white shadow-[0_28px_80px_rgba(40,27,85,0.2)]"
              : "bg-gradient-to-r from-[#B2FDD3] via-[#D8E9FF] to-[#A881FF]"
          }`}
        >
          {/* Text block */}
          <div className="max-w-xl">
            <h2
              className={`mb-5 text-3xl font-semibold leading-tight md:text-5xl ${isHome ? "text-white" : "text-black"}`}
            >
              Bring your family&apos;s health records together.
            </h2>
            <p
              className={`text-lg ${isHome ? "text-white/70" : "text-black/80"}`}
            >
              Download Kaizen to organize records, share updates, and ask Kai
              about the information you upload.
            </p>
          </div>

          {/* Store badges */}
          <div className="mt-10 flex flex-row items-start gap-4 lg:mt-0 lg:items-center">
            <a
              href="https://bit.ly/kz-android-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/hero/android-store-dark.svg"
                alt="Get it on Google Play"
                width={180}
                height={54}
                className="h-16 w-auto"
              />
            </a>
            <a
              href="https://bit.ly/kz-app-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/hero/app-store-dark.svg"
                alt="Download on the App Store"
                width={180}
                height={54}
                className="h-16 w-auto"
              />
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
