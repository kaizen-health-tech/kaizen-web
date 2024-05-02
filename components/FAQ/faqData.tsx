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
    ans: "Kaizen Health strictly adheres to the Health Insurance Portability and Accountability Act (HIPAA), which sets the standard for sensitive patient data protection. Compliance ensures that all necessary safeguards are in place to protect privacy and secure data."
  },
];

export default faqData;
