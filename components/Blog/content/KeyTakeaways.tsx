import { KaizenIcon } from "../icons";

interface KeyTakeawaysProps {
  items: string[];
}

// Required on any article over ~1,200 words per the design spec.
const KeyTakeaways = ({ items }: KeyTakeawaysProps) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-10 rounded-[20px] border border-[#B9EFD8] bg-[#E9FBF3] px-7.5 py-7">
      <div className="mb-4 flex items-center gap-2.5">
        <KaizenIcon name="CircleCheck" size={20} className="text-[#12855F]" />
        <span className="text-sm font-bold uppercase tracking-[1.1px] text-[#12855F]">
          Key takeaways
        </span>
      </div>
      <ul className="flex flex-col gap-3 pl-5.5">
        {items.map((item) => (
          <li key={item} className="list-disc text-[19px] leading-[1.6] text-[#20493C] text-pretty">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
