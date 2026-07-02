import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is a family health management app?",
    ans: "A family health management app like Kaizen Health gives families a shared, secure place to store medical records, track health data, and coordinate care across generations. It replaces scattered paper files, texts, and emails with one HIPAA-compliant hub that every family member and caregiver can access.",
  },
  {
    id: 2,
    quest: "How does AI improve family health management?",
    ans: "Kai, Kaizen Health's AI assistant, learns a family's health history and current conditions over time and stays alert to changes in health status. This supports earlier detection of potential issues, prompt medical attention, and timely intervention, which are critical for conditions where early treatment can significantly affect outcomes.",
  },
  {
    id: 3,
    quest: "Is Kaizen Health HIPAA compliant and is my data secure?",
    ans: "Yes. Kaizen Health strictly adheres to the Health Insurance Portability and Accountability Act (HIPAA), the federal standard for protecting sensitive patient data, so the required safeguards are in place to protect privacy and secure your family's health information.",
  },
  {
    id: 4,
    quest: "How is Kaizen Health's AI different from ChatGPT or general AI tools?",
    ans: "While ChatGPT is a general-purpose AI, Kai is purpose-built for family health. It understands medical records, genetics, wearables, and more, so it can give personalized insights, not just generic answers.",
  },
  {
    id: 5,
    quest: "Does Kaizen Health use my data to train its AI?",
    ans: "No, your data is not used to train our AI. Kai operates on a privacy-first model. All personal health data remains secure and is never used to retrain or improve the underlying AI model. We strictly follow HIPAA guidelines and ensure that all user interactions remain confidential.",
  },
  {
    id: 6,
    quest: "Do I have to share all my health records with my family?",
    ans: "No, you are always in control of what you share. Kaizen Health allows you to choose which records, notes, or health information you want to share with family members. You can keep some data private, share selectively, or update permissions at any time. Privacy and autonomy are core to our platform.",
  },
];

export default faqData;
