import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is a family health management app?",
    ans: "Kaizen Health gives families one secure place to store medical records, track health information, and coordinate care. Each person controls what they share and who can access it.",
  },
  {
    id: 2,
    quest: "How does AI improve family health management?",
    ans: "Kai can summarize uploaded records and answer questions using the information you choose to share. It helps you find details in lab results, medication lists, and visit notes without reading every file from start to finish.",
  },
  {
    id: 3,
    quest: "Is Kaizen Health HIPAA compliant and is my data secure?",
    ans: "Yes. Kaizen Health is HIPAA compliant and uses safeguards designed to protect your family's health information.",
  },
  {
    id: 4,
    quest:
      "How is Kaizen Health's AI different from ChatGPT or general AI tools?",
    ans: "Kai answers questions using the family health information you choose to add to Kaizen, including medical records and connected data. General-purpose AI tools do not have that Kaizen context.",
  },
  {
    id: 5,
    quest: "Does Kaizen Health use my data to train its AI?",
    ans: "No. Kaizen does not use your personal health data to train or improve the underlying AI models.",
  },
  {
    id: 6,
    quest: "Do I have to share all my health records with my family?",
    ans: "No. You choose which records, notes, and health information to share with each family member. You can keep information private or change access at any time.",
  },
];

export default faqData;
