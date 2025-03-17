import React from "react";

const WhyKaizen = () => {
  const categories = [
    {
      title: "Understand Genetic predisposition",
      description:
        "Understand your family’s health blueprint. Genetic insights mined securely from your family data, help you stay ahead of potential risks and make informed care decisions for your loved ones.",
    },
    {
      title: "Medical Records and Health Documents",
      description:
        "Securely organize and access your family’s medical history, lab results, and reports in one place—giving you a complete picture of their health over time.",
    },
    {
      title: "Wearable Data",
      description:
        "Stay connected to your family’s well-being with real-time data from wearables—tracking vital signs like heart rate, activity, and sleep for proactive care.",
    },
    {
      title: "Health Score",
      description:
        "Kaizen Health’s proprietary Health Score brings together genetics, medical records, wearable data, and daily inputs into a simple, actionable number. It gives families a clear snapshot of their loved one’s overall well-being, helping them stay proactive and catch potential issues early.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary to-primaryho text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
            At Kaizen Health, we believe that family health is the foundation of
            a strong, connected life. When families are informed and empowered,
            they make better decisions and create healthier futures together. By
            gathering different levels of data from scattered sources, we are
            able to give families a clear, complete picture of their loved ones’
            well-being.
          </p>
          <p className="text-xl md:text-xl max-w-2xl leading-relaxed mt-3">
            With the help of Kai, our AI-powered health assistant, families can
            stay proactive, receive personalized insights, and catch potential
            issues early. Kai works behind the scenes to simplify complex data,
            making it easy to support those who matter most, every step of the
            way.
          </p>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-md"
            >
              <h3 className="text-3xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <p className="text-lg text-white/90">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKaizen;
