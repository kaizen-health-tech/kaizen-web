import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Family health app? But why?",
    ans: "Family members can provide motivation and emotional support, which are crucial for maintaining long-term health behaviors. This support system can encourage adherence to treatment plans, motivate healthy lifestyle changes, and help individuals cope with chronic conditions.",
  },
  {
    id: 2,
    quest: "How can AI help improve my family health?",
    ans: "Early Detection and Intervention. Over time, AI will get familiar with a family's health histories and current conditions and can be vigilant about changes in health status. This can lead to earlier detection of potential health issues, prompt medical attention, and timely intervention, which are critical for conditions where early treatment can significantly affect outcomes.",
  },
  {
    id: 3,
    quest: "Is my data secure? How can I trust your service?",
    ans: "Kaizen Health strictly adheres to the Health Insurance Portability and Accountability Act (HIPAA), which sets the standard for sensitive patient data protection. Compliance ensures that all necessary safeguards are in place to protect privacy and secure data.",
  },
  {
    id: 4,
    quest: "How is your AI different from ChatGPT or general AI tools?",
    ans: "While ChatGPT is a general-purpose AI, Kai is purpose-built for family health. It understands medical records, genetics, wearables, and more, so it can give personalized insights, not just generic answers.",
  },
  {
    id: 5,
    quest: "Is my data used to train the AI?",
    ans: "No, your data is not used to train our AI. Kai operates on a privacy-first model. All personal health data remains secure and is never used to retrain or improve the underlying AI model. We strictly follow HIPAA guidelines and ensure that all user interactions remain confidential.",
  },
  {
    id: 6,
    quest: "Do I have to share all my health records with my family?",
    ans: "No, you are always in control of what you share. Kaizen Health allows you to choose which records, notes, or health information you want to share with family members. You can keep some data private, share selectively, or update permissions at any time. Privacy and autonomy are core to our platform.",
  },
];

export default faqData;
