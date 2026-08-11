import SectionHeader from "../Common/SectionHeader";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="animate_top mx-auto text-center">
        <SectionHeader
          headerInfo={{
            title: `TESTIMONIALS`,
            subtitle: `What families are saying`,
            description: `Real stories from people using Kaizen Health to coordinate care for themselves and the people they love.`,
          }}
        />
      </div>

      <div className="mx-auto mt-15 grid max-w-4xl gap-8 pb-20 sm:grid-cols-2 xl:mt-20">
        {testimonialData.map((review) => (
          <SingleTestimonial key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
