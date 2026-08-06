interface ImagePlaceholderProps {
  suggestion: string;
  altText: string;
}

// Editorial marker for where an image should go before publish. Renders
// visibly in dev/preview so it can't ship by accident; swap for a real
// <Image> using `altText` once art is ready, then delete this block.
const ImagePlaceholder = ({ suggestion, altText }: ImagePlaceholderProps) => {
  return (
    <div className="my-9 flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-ash bg-lavender/40 px-6 py-10 text-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-graphite"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" />
        <circle cx="8.5" cy="9.5" r="1.5" strokeWidth="1.5" />
        <path d="M21 16L15.5 10.5C15.1 10.1 14.5 10.1 14.1 10.5L5 19.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="max-w-125 text-pretty text-base leading-[1.5] text-graphite">
        <span className="font-bold text-arsenic">Image placeholder — </span>
        {suggestion}
      </p>
      <p className="text-sm italic text-graphite">Suggested alt text: &ldquo;{altText}&rdquo;</p>
    </div>
  );
};

export default ImagePlaceholder;
