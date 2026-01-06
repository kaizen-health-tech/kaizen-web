import Image from "next/image";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section id="cta" className="overflow-hidden">
        {/* Multicolor diagonal gradient */}
        <div className="mx-auto bg-gradient-to-r from-[#B2FDD3] via-[#D8E9FF] to-[#A881FF] px-8 py-16 md:py-20 lg:flex lg:items-center lg:justify-between">
          {/* Text block */}
          <div className="max-w-xl">
            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-black md:text-5xl">
              Ready&nbsp;To&nbsp;Care&nbsp;Smarter?
            </h2>
            <p className="text-lg text-black/80">
              Join thousands already managing their family’s health with
              clarity, confidence, and care.
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
