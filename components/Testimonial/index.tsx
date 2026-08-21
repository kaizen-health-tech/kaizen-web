import SectionHeader from "../Common/SectionHeader";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3E8E7] px-4 py-20 md:px-8 md:py-28 2xl:px-0">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#E8C9C5]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-[#E4DFEF]/60 blur-3xl" />
      <div className="relative mx-auto max-w-c-1390">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `What families are saying`,
              subtitle: ``,
              description: `How families use Kaizen to manage care across households and time zones.`,
            }}
          />
        </div>

        <div className="mx-auto mt-15 grid max-w-4xl gap-8 sm:grid-cols-2 xl:mt-20">
          {testimonialData.map((review) => (
            <SingleTestimonial key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
