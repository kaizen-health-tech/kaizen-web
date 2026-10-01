export type SupportTopic = {
  title: string;
  description: string;
  /** Contact form topic preselected when this card is chosen. */
  formTopic: string;
};

export type SupportFaq = {
  question: string;
  answer: string;
};

export type SupportCenterProps = {
  topics: SupportTopic[];
  faqs: SupportFaq[];
  formTopics: string[];
};
