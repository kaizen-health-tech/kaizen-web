"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    title: "Frontend Engineer (React Native)",
    location: "Remote · Full-time",
    contact: "mailto:careers@kaizenhealth.io",
    description: `About the Role:
Join our dynamic team at Kaizen Health as a Frontend Engineer specializing in React Native development. You'll be instrumental in building cutting-edge mobile applications that improve healthcare experiences for users worldwide. This role offers the opportunity to work with modern technologies while collaborating with AI tools to accelerate development.

Responsibilities:
- Build and maintain scalable React Native components and mobile applications
- Work closely with design and product teams to iterate on features and user experiences
- Manage app releases, including deployment to App Store and Google Play Store
- Collaborate with backend engineers to integrate APIs and ensure seamless data flow
- Optimize application performance and ensure cross-platform compatibility
- Participate in code reviews and maintain high code quality standards
- Debug and troubleshoot issues across iOS and Android platforms
- Implement automated testing strategies for mobile applications
- Stay current with React Native ecosystem updates and best practices

Requirements:
- 5+ years of React experience with strong JavaScript/TypeScript fundamentals
- 2+ years of hands-on React Native development experience
- Vibe coder who can understand code and effectively leverage AI tools for development acceleration
- Experience with mobile app architecture patterns (Redux, Context API, etc.)
- Proficiency with development tools (Xcode, Android Studio, Metro bundler)
- Understanding of mobile UI/UX principles and responsive design
- Experience with version control systems (Git) and CI/CD pipelines
- Native development experience with iOS (Swift) and/or Android (Kotlin) is a plus
- Excellent communication and collaboration abilities
- Continuous learning mindset and adaptability to new technologies
- Experience with app store submission processes preferred

What We Offer:
- Competitive salary and equity package
- Flexible remote work environment
- Health, dental, and vision insurance
- Professional development budget
- Cutting-edge technology stack
- Opportunity to impact healthcare technology`,
  },
  {
    title: "Product Designer",
    location: "San Francisco · Full-time",
    isFilled: true,
    contact: "mailto:careers@kaizenhealth.io",
    description: `About the Role:
We're seeking a talented Product Designer to join our mission of transforming healthcare through intuitive, user-centered design. You'll play a crucial role in creating digital experiences that help healthcare providers deliver better patient care while simplifying complex workflows.

Key Responsibilities:
- Design clean, accessible, and user-centered healthcare interfaces that prioritize patient safety and provider efficiency
- Collaborate closely with engineering, product management, and clinical teams to ship seamless experiences
- Conduct user research with healthcare professionals to understand pain points and workflow requirements
- Create wireframes, prototypes, and high-fidelity designs that solve complex healthcare challenges
- Develop and maintain design systems that ensure consistency across our product suite
- Participate in usability testing and iterate on designs based on user feedback
- Advocate for best practices in healthcare UX/UI design and accessibility standards

Requirements:
- 3+ years of product design experience with a strong portfolio showcasing healthcare, SaaS, or complex B2B applications
- Proficiency in Figma, Sketch, and modern prototyping tools (Principle, ProtoPie, or similar)
- Experience with design systems and component libraries
- Understanding of healthcare workflows, HIPAA compliance, and medical terminology (preferred)
- Strong collaboration skills and experience working in cross-functional teams
- Bachelor's degree in Design, HCI, or related field (or equivalent experience)
- Portfolio demonstrating user-centered design process and problem-solving approach

Bonus Points:
- Experience with clinical software or EHR systems
- Knowledge of accessibility standards (WCAG 2.1)
- Background in user research and usability testing
- Familiarity with front-end development principles`,
  },
];

export default function OpenRolesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-white dark:bg-blacksection">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-10">
          Current open roles
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
                {role.isFilled && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                    Position filled
                  </span>
                )}
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
                    {!role.isFilled && (
                      <a
                        href={role.contact}
                        className="inline-block mt-4 px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
                      >
                        Apply now
                      </a>
                    )}
                    {role.isFilled && (
                      <p className="mt-4 italic text-red-600 dark:text-red-400">
                        This position has been filled.
                      </p>
                    )}
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
