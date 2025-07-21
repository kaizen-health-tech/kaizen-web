"use client";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <div className="animate_top mx-auto text-center">
        <div className="inline-block px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
          <h2 className="text-center text-5xl font-semibold leading-tight text-[#17161D] sm:text-5xl">
            {title}
          </h2>
        </div>
        <h4 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {subtitle}
        </h4>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
