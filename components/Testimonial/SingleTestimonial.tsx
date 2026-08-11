import { Testimonial } from "@/types/testimonial";
import Avatar from "@/components/Blog/Avatar";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, content } = review;
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
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
