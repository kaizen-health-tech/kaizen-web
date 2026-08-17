interface PhysicianQuotePlaceholderProps {
  physicianName: string;
  prompt: string;
}

// Editorial marker for a paid-partnership section reserved for the named
// physician's own words. Renders visibly in dev/preview so a fabricated or
// paraphrased quote can't ship in its place — swap for the physician's
// actual contribution once received and approved, then delete this block.
const PhysicianQuotePlaceholder = ({ physicianName, prompt }: PhysicianQuotePlaceholderProps) => {
  return (
    <div className="my-9 flex flex-col gap-3 rounded-2xl border-2 border-dashed border-ash bg-lavender/40 px-6 py-7">
      <span className="text-sm font-bold uppercase tracking-[1.1px] text-violet">
        Reserved for {physicianName} — not yet written
      </span>
      <p className="text-pretty text-lg leading-[1.5] text-graphite">{prompt}</p>
    </div>
  );
};

export default PhysicianQuotePlaceholder;
