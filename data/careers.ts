import type { Role } from "@/types/careers";

export const CAREERS_EMAIL = "careers@kaizenhealth.io";

/** mailto link with the role in the subject line, so applications are easy to sort. */
export const applyHref = (role: Role) =>
  `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${role.title}`)}`;

export const roles: Role[] = [
  {
    slug: "product-design-intern",
    title: "Product Design Intern",
    team: "Design & Marketing",
    location: "Remote",
    employmentType: "Internship",
    isFilled: false,
    summary:
      "Design the marketing and social media content that shows families what Kaizen Health does. You have designed for healthcare apps before and know health content has to be accurate as well as good-looking.",
    sections: [
      {
        heading: "About the role",
        body: "We're looking for a Product Design Intern with healthcare app experience to help with our marketing and social media. You'll turn Kaizen Health's features and app updates into clear, honest visuals for the families and caregivers who use it, and use content-generation tools to produce and test ideas quickly.",
      },
      {
        heading: "What you'll do",
        items: [
          "Design social media posts, carousels and short-form visuals for Kaizen Health's channels",
          "Create marketing assets for product launches and app updates",
          "Turn app screens and features into visuals that make sense to caregivers at a glance",
          "Use AI image and content-generation tools to draft and iterate, and check every output for accuracy and brand fit before it ships",
          "Plan and review content with the founder and product team",
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          "Design experience with healthcare or health and wellness apps, from coursework, internships or shipped work",
          "A portfolio that shows visual design and marketing or social media content",
          "Comfort with Figma and with AI content-generation tools",
          "Care for accuracy: health content has to be correct, clear and never alarmist",
        ],
      },
      {
        heading: "Nice to have",
        items: [
          "Motion design or short-form video editing",
          "Experience writing captions or short marketing copy",
          "Awareness of privacy considerations when marketing a health product",
        ],
      },
      {
        heading: "How to apply",
        body: "Email us a link to your portfolio and a few lines about the healthcare work you're proudest of.",
      },
    ],
  },
  {
    slug: "frontend-engineer-react-native",
    title: "Frontend Engineer (React Native)",
    team: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    isFilled: true,
    summary:
      "Build the React Native app that families use to keep health records and care for each other, from components to App Store and Google Play releases.",
    sections: [
      {
        heading: "About the role",
        body: "Join our dynamic team at Kaizen Health as a Frontend Engineer specializing in React Native development. You'll be instrumental in building cutting-edge mobile applications that improve healthcare experiences for users worldwide. This role offers the opportunity to work with modern technologies while collaborating with AI tools to accelerate development.",
      },
      {
        heading: "Responsibilities",
        items: [
          "Build and maintain scalable React Native components and mobile applications",
          "Work closely with design and product teams to iterate on features and user experiences",
          "Manage app releases, including deployment to App Store and Google Play Store",
          "Collaborate with backend engineers to integrate APIs and ensure seamless data flow",
          "Optimize application performance and ensure cross-platform compatibility",
          "Participate in code reviews and maintain high code quality standards",
          "Debug and troubleshoot issues across iOS and Android platforms",
          "Implement automated testing strategies for mobile applications",
          "Stay current with React Native ecosystem updates and best practices",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "5+ years of React experience with strong JavaScript/TypeScript fundamentals",
          "2+ years of hands-on React Native development experience",
          "Vibe coder who can understand code and effectively leverage AI tools for development acceleration",
          "Experience with mobile app architecture patterns (Redux, Context API, etc.)",
          "Proficiency with development tools (Xcode, Android Studio, Metro bundler)",
          "Understanding of mobile UI/UX principles and responsive design",
          "Experience with version control systems (Git) and CI/CD pipelines",
          "Native development experience with iOS (Swift) and/or Android (Kotlin) is a plus",
          "Excellent communication and collaboration abilities",
          "Continuous learning mindset and adaptability to new technologies",
          "Experience with app store submission processes preferred",
        ],
      },
      {
        heading: "What we offer",
        items: [
          "Competitive salary and equity package",
          "Flexible remote work environment",
          "Health, dental, and vision insurance",
          "Professional development budget",
          "Cutting-edge technology stack",
          "Opportunity to impact healthcare technology",
        ],
      },
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design",
    location: "San Francisco",
    employmentType: "Full-time",
    isFilled: true,
    summary:
      "Design clean, accessible healthcare interfaces with engineering, product and clinical teams, from research through high-fidelity design.",
    sections: [
      {
        heading: "About the role",
        body: "We're seeking a talented Product Designer to join our mission of transforming healthcare through intuitive, user-centered design. You'll play a crucial role in creating digital experiences that help healthcare providers deliver better patient care while simplifying complex workflows.",
      },
      {
        heading: "Key responsibilities",
        items: [
          "Design clean, accessible, and user-centered healthcare interfaces that prioritize patient safety and provider efficiency",
          "Collaborate closely with engineering, product management, and clinical teams to ship seamless experiences",
          "Conduct user research with healthcare professionals to understand pain points and workflow requirements",
          "Create wireframes, prototypes, and high-fidelity designs that solve complex healthcare challenges",
          "Develop and maintain design systems that ensure consistency across our product suite",
          "Participate in usability testing and iterate on designs based on user feedback",
          "Advocate for best practices in healthcare UX/UI design and accessibility standards",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "3+ years of product design experience with a strong portfolio showcasing healthcare, SaaS, or complex B2B applications",
          "Proficiency in Figma, Sketch, and modern prototyping tools (Principle, ProtoPie, or similar)",
          "Experience with design systems and component libraries",
          "Understanding of healthcare workflows, HIPAA compliance, and medical terminology (preferred)",
          "Strong collaboration skills and experience working in cross-functional teams",
          "Bachelor's degree in Design, HCI, or related field (or equivalent experience)",
          "Portfolio demonstrating user-centered design process and problem-solving approach",
        ],
      },
      {
        heading: "Bonus points",
        items: [
          "Experience with clinical software or EHR systems",
          "Knowledge of accessibility standards (WCAG 2.1)",
          "Background in user research and usability testing",
          "Familiarity with front-end development principles",
        ],
      },
    ],
  },
];

export const getOpenRoles = () => roles.filter((role) => !role.isFilled);

export const getFilledRoles = () => roles.filter((role) => role.isFilled);
