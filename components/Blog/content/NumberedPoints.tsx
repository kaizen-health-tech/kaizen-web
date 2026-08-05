interface NumberedPoint {
  lead: string;
  text: string;
}

interface NumberedPointsProps {
  points: NumberedPoint[];
}

const NumberedPoints = ({ points }: NumberedPointsProps) => {
  return (
    <div className="mb-8 flex flex-col gap-3.5">
      {points.map((point, index) => (
        <div key={point.lead} className="flex items-start gap-4 rounded-2xl bg-lavender px-5.5 py-5">
          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-violet text-[17px] font-bold text-aquamarine">
            {index + 1}
          </span>
          <div className="text-[20px] leading-[1.6] text-text-longform">
            <span className="font-bold leading-[1.5] text-midnight">{point.lead} </span>
            {point.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NumberedPoints;
