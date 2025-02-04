"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto">
        <div className="mx-auto px-4 md:px-8 xl:px-4">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `Client’s Testimonials`,
                description: `Here is what some of our current users are saying about us.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        {/* <!-- Slider main container --> */}
        <div className="swiper testimonial-01 mb-20 pb-22.5">
          {/* <!-- Additional required wrapper --> */}
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review?.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
