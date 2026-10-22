interface PhysicianTakeProps {
  physicianName: string;
  children: React.ReactNode;
}

// Attributed callout for a named physician's own words in a paid-partnership
// piece. The text is supplied by the physician; editorial does not paraphrase it.
const PhysicianTake = ({ physicianName, children }: PhysicianTakeProps) => {
  return (
    <aside className="my-9 rounded-2xl border border-cloud bg-lavender px-7 py-6">
      <span className="mb-2 block text-sm font-bold uppercase tracking-[1.1px] text-violet">
        {physicianName}&rsquo;s take
      </span>
      <p className="mb-0 text-pretty text-[19px] leading-[1.6] text-text-body">
        {children}
      </p>
    </aside>
  );
};

export default PhysicianTake;
