import { KaizenIcon } from "../icons";
import GetAppButton from "../GetAppButton";

interface ProductCalloutProps {
  body: string;
  buttonLabel?: string;
}

// One per article, maximum — the blog is credibility-first, and this earns
// its place once.
const ProductCallout = ({ body, buttonLabel = "Try it with a document" }: ProductCalloutProps) => {
  return (
    <div
      className="my-10 rounded-[22px] p-8"
      style={{ background: "linear-gradient(145deg, #6E40F3, #5338A0 60%, #201839)" }}
    >
      <div className="mb-3.5 flex items-center gap-2.5">
        <KaizenIcon name="Kai" size={22} className="text-aquamarine" />
        <span className="text-sm font-bold uppercase tracking-[1.1px] text-aquamarine">
          How Kaizen handles this
        </span>
      </div>
      <p className="mb-5 text-[19px] leading-[1.6] !text-[#E4E1F8] text-pretty">{body}</p>
      <GetAppButton size="md">{buttonLabel}</GetAppButton>
    </div>
  );
};

export default ProductCallout;
