import Image from "next/image";

interface InlineImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const InlineImage = ({ src, alt, caption }: InlineImageProps) => {
  return (
    <figure className="my-9">
      <div className="relative h-70 w-full overflow-hidden rounded-2xl sm:h-96">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-graphite">{caption}</figcaption>
      )}
    </figure>
  );
};

export default InlineImage;
