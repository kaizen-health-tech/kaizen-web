interface Stat {
  figure: string;
  caption: string;
}

interface StatTrioProps {
  stats: Stat[];
}

const StatTrio = ({ stats }: StatTrioProps) => {
  return (
    <div className="my-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.caption} className="rounded-[18px] bg-lavender p-6">
          <div className="mb-2.5 text-[40px] font-bold leading-none tracking-[-1.4px] text-violet">
            {stat.figure}
          </div>
          <div className="text-[17px] leading-[1.45] text-text-body">{stat.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default StatTrio;
