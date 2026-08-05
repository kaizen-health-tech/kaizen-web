interface PullQuoteProps {
  quote: string;
}

const PullQuote = ({ quote }: PullQuoteProps) => {
  return (
    <figure className="my-11 border-y-2 border-cloud py-9">
      <blockquote className="text-pretty text-[30px] font-normal leading-[1.35] tracking-[-.7px] text-violet">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </figure>
  );
};

export default PullQuote;
