"use client";
import Image from "next/image";

const UserStories = () => {
  const stories = [
    {
      title: "Caring for Aging Parents with Ease (The Family Caregiver)",
      description:
        "Priya has a demanding job, two kids, and aging parents who require frequent medical checkups. Managing their prescriptions, doctor appointments, and health records across multiple platforms is overwhelming. She finds Kaizen Health, which allows her to securely store all their health records, receive real-time health score updates, and set reminders for checkups and medications—all in one place.",
      image: "/images/user/Health-Records.gif",
      video: "/images/user/user-story-1-1.png",
      reverse: false,
    },
    {
      title:
        "The Health-Conscious Professional (Tracking & Optimizing Well-Being)",
      description:
        "Alex works long hours and needs to maintain peak performance. He wears a smartwatch and tracks his steps, heart rate, and sleep, but the data feels scattered. With Kaizen Health, he can sync his wearable device, analyze his health trends, and get AI-driven recommendations to improve his fitness. The personalized health score helps him see how his diet and workouts impact his well-being over time.",
      image: "/images/user/AI.gif",
      video: "/images/user/user-story-2.jpeg",
      reverse: true,
    },
    {
      title: "New Parent Managing Baby’s Health (Organizing Pediatric Care)",
      description:
        "As a first-time parent, Sarah feels anxious about keeping up with her baby’s vaccinations, checkups, and medical history. She often misplaces paper records and forgets appointment dates. Kaizen Health provides a centralized, digital health profile for her baby, with reminders for vaccinations and doctor visits. The secure document storage ensures she never loses medical records, and the AI assistant offers parenting health tips based on her baby’s data.",
      image: "/images/user/Health-Records.gif",
      video: "/images/user/user-story-3-2.png",
      reverse: false,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          User Stories
        </h2>
        <div className="space-y-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                story.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center lg:gap-12`}
            >
              {/*Image Container*/}
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-w-16 aspect-h-16">
                  <Image
                    src={story.image}
                    alt={story.title}
                    className="rounded-lg object-contain"
                    fill
                  />
                </div>
              </div>
              {/*Text Container*/}
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-secondary mb-4 text-primaryho">
                  {story.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {story.description}
                </p>
                <div className="relative w-full aspect-w-16 aspect-h-9">
                  <Image
                    src={story.video}
                    alt={`${story.title} video`}
                    className="rounded-lg object-contain"
                    fill
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserStories;
