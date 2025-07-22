import Image from "next/image";
import Link from "next/link";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const {
    title,
    description,
    icon,
    image,
    linkText,
    linkUrl,
    orientation = "right",
    disclaimer,
  } = feature;

  /** image first on desktop of orientation === "left" */
  const imgCol =
    "relative w-full lg:w-1/2 flex-column justify-center lg:justify-end text-center";
  const textCol =
    "flex w-full lg:w-1/2 flex-col justify-center gap-4 px-4 lg:px-12";

  return (
    <article className="flex flex-col-reverse lg:flex-row items-center gap-8 pb-4">
      {/* ----- IMAGE ------ */}
      {orientation === "left" && (
        <div className={imgCol}>
          <Image
            src={image}
            alt={title}
            width={1200}
            height={640}
            quality={100}
            className="w-full max-w-lg rounded-2xl lg:rounded-3xl"
            priority
          />
          {disclaimer && (
            <small className="pt-2 text-xs text-center text-gray-400">
              {disclaimer}
            </small>
          )}
        </div>
      )}

      {/* ----- TEXT BLOCK ------ */}
      <div className={textCol}>
        {icon && (
          <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
            <Image src={icon} alt="" width={28} height={28} />
          </div>
        )}

        <h3 className="text-3xl md:text-5xl leading-[1.25] md:leading-[1.25] font-semibold text-[#17161D]">
          {title}
        </h3>
        <p className="text-lg text-gray-700">{description}</p>

        {linkText && linkUrl && (
          <Link
            href={linkUrl}
            className="mt-2 inline-flex items-center gap-2 text-primary font-semibold text-xl"
          >
            {linkText}
          </Link>
        )}
      </div>

      {/* ----- IMAGE (if orientation === "right") ------ */}
      {orientation === "right" && (
        <div className={imgCol}>
          <Image
            src={image}
            alt={title}
            width={1200}
            height={640}
            quality={100}
            className="w-full max-w-lg rounded-2xl lg:rounded-3xl"
            priority
          />
          {disclaimer && (
            <small className="pt-2 text-xs text-center text-gray-400">
              {disclaimer}
            </small>
          )}
        </div>
      )}
    </article>
  );
};

export default SingleFeature;
