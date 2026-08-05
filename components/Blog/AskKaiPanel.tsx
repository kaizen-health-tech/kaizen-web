import Link from "next/link";
import { KaizenIcon } from "./icons";

const AskKaiPanel = () => {
  return (
    <div className="w-full flex-none rounded-[20px] border border-cloud bg-lavender p-5.5 lg:w-75">
      <div className="mb-2.5 flex items-center gap-2">
        <KaizenIcon name="Kai" size={20} className="text-violet" />
        <span className="font-bold text-midnight">Ask Kai instead</span>
      </div>
      <p className="mb-3.5 text-base text-text-body">
        Have a specific question? Kai answers from these articles and your
        own records. Give it a try here.
      </p>
      <Link href="/chat" className="text-base font-bold text-violet hover:text-violet-hover">
        Open Kai →
      </Link>
    </div>
  );
};

export default AskKaiPanel;
