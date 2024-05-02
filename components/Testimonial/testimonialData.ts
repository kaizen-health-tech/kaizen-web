import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Samantha L.",
    designation: "Founter @democompany",
    image: image1,
    content:
      "Kaizen Health has been a game-changer for my family's health management. The AI health bot is incredibly intuitive, offering personalized advice that helps us stay on top of our health. Secure document storage is just icing on the cake—so convenient and easy to use!",
  },
  {
    id: 2,
    name: "Mike D.",
    designation: "Founter @democompany",
    image: image2,
    content:
      "As someone who values privacy, I was initially skeptical about using an online health platform. However, Kaizen Health's commitment to security and HIPAA compliance has put me at ease. The encryption and controlled access features are top-notch, making me feel confident that my family's health data is in safe hands.",
  },
  {
    id: 3,
    name: "Jennifer H.",
    designation: "Founter @democompany",
    image: image1,
    content:
      "I love how the Kaizen app allows us to upload medical documents directly from our EHRs. It's very user-friendly, and the ability to share info with family members by consent is fantastic. I knocked off one star because I wish the mobile app were a bit faster.",
  },
  {
    id: 4,
    name: "Carlos G.",
    designation: "Founter @democompany",
    image: image2,
    content:
      "The preventive care recommendations from the AI are impressive—it really feels like the app knows us. The educational resources have been a great help in understanding how to manage hereditary conditions. Highly recommend Kaizen Health for anyone looking to take a proactive approach to their health.",
  },
];
