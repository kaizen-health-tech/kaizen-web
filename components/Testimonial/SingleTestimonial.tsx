import { Testimonial } from "@/types/testimonial";
import Avatar from "@/components/Blog/Avatar";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, content } = review;
  return (
    <div className="flex h-full flex-col rounded-3xl border border-white bg-white/85 p-9 pt-7.5 shadow-[0_18px_50px_rgba(40,27,85,0.08)] backdrop-blur-sm dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <p className="flex-1 text-base text-gray-700 dark:text-gray-300">
        &ldquo;{content}&rdquo;
      </p>
      <div className="mt-7.5 flex items-center gap-3 border-t border-stroke pt-6 dark:border-strokedark">
        <Avatar name={name} size={44} />
        <h3 className="text-metatitle3 text-black dark:text-white">{name}</h3>
      </div>
    </div>
  );
};

export default SingleTestimonial;
