import { Reveal } from "@/components/Common/Reveal";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
  eyebrow?: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description, eyebrow } = headerInfo;

  return (
    <Reveal className="mx-auto text-center">
      {eyebrow && (
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-violet">
          {eyebrow}
        </p>
      )}
      <h2 className="text-center text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-midnight md:text-5xl md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 text-3xl font-bold text-midnight md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mx-auto mt-5 text-lg leading-8 text-text-body md:w-4/5 lg:w-3/5 xl:w-[46%]">
          {description}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeader;
