"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    title: "Frontend Engineer (React Native)",
    location: "Remote · Full-time",
    contact: "mailto:careers@kaizenhealth.io",
    description: `Responsibilities:
- Build and maintain scalable React Native components.
- Work closely with design and product to iterate on features.
- Manage releases

Requirements:
- 5+ years React experience.
- Vibe coder who can understand code and pass the heavy lifting to our AI counterparts
- Native development experience with iOS (Swift) and/or Android (Kotlin) is a plus
- Excellent communication and collaboration abilities
- Continuous learning and adapting to new tech`,
  },
  {
    title: "Product Designer",
    location: "San Francisco · Full-time",
    contact: "mailto:careers@kaizenhealth.io",
    description: `Responsibilities:
- Design clean, user-centered healthcare interfaces.
- Collaborate with engineering to ship seamless experiences.

Requirements:
- Strong portfolio with healthcare or SaaS focus.
- Experience in Figma and prototyping tools.`,
  },
];

export default function OpenRolesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-white dark:bg-blacksection">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-10">
          Explore Open Roles at Kaizen Health
        </h1>

        <ul className="text-left space-y-4">
          {roles.map((role, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg shadow-sm dark:border-strokedark"
            >
              <button
                onClick={() => {
                  setOpenIndex(openIndex === index ? null : index);
                }}
                className="w-full text-left"
              >
                <h3 className="text-xl font-medium text-black dark:text-white">
                  {role.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {role.location}
                </p>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden whitespace-pre-line text-gray-700 dark:text-gray-300"
                  >
                    <div>{role.description}</div>
                    <a
                      href={role.contact}
                      className="inline-block mt-4 px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
                    >
                      Apply now
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
