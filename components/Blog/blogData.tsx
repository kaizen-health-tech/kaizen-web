import { Blog } from "@/types/blog";

const editorialTeam = {
  name: "Kaizen Health Editorial Team",
  role: "Reviewed by healthcare professionals",
  image: "",
};

const BlogData: Blog[] = [
  {
    id: 1,
    mainImage: "/images/blog/family-history.png",
    title:
      "Why Your Family Health History Matters",
    metadata:
      "A clear family health history helps doctors spot inherited risks, recommend earlier screenings, and make better-informed care decisions.",
    url: "/blog/family-history",
    categoryKey: "health-records",
    featured: true,
    readTime: "6 min read",
    author: editorialTeam,
  },
  {
    id: 2,
    mainImage: "/images/blog/pregnancy-genetic.jpeg",
    title: "Genetic conditions during pregnancy",
    metadata:
      "Common prenatal genetic conditions, screening options, and the role AI can play in making complex results easier to understand.",
    url: "/blog/pregnancy-genetic",
    categoryKey: "pregnancy",
    readTime: "6 min read",
    author: editorialTeam,
  },
  {
    id: 3,
    mainImage: "/images/blog/diabetes-magnesium-vitamin-d.png",
    title: "The Connection Between Diabetes, Vitamin D, and Magnesium",
    metadata:
      "What research says about vitamin D, magnesium, insulin sensitivity, and blood sugar control.",
    url: "/blog/diabetes-magnesium-vitamin-d",
    categoryKey: "nutrition",
    readTime: "5 min read",
    author: editorialTeam,
  },
  {
    id: 4,
    mainImage: "/images/blog/yogurt.jpeg",
    title:
      "What Research Says About Yogurt and Colorectal Cancer Risk",
    metadata:
      "A long-running study found an association between regular yogurt intake and a lower risk of one type of colorectal cancer.",
    url: "/blog/cancer/colorectal-cancer-risk",
    categoryKey: "nutrition",
    readTime: "4 min read",
    author: editorialTeam,
  },
  {
    id: 5,
    mainImage: "/images/blog/family-health.png",
    title:
      "Why Family Health History Matters for Longevity and Disease Prevention",
    metadata:
      "How to document family health history so clinicians can assess inherited risks and plan appropriate screening.",
    url: "/blog/family-history/documenting-family-health",
    categoryKey: "health-records",
    readTime: "5 min read",
    author: editorialTeam,
  },
  {
    id: 6,
    mainImage: "/images/blog/caregiver-guide.png",
    title: "Supporting Aging Parents: A Caregiver’s Guide",
    metadata:
      "Practical guidance on home safety, caregiver stress, legal planning, and services that can help aging parents.",
    url: "/blog/family-history/caregiver-guide-aging-parents",
    categoryKey: "aging-well",
    readTime: "9 min read",
    author: editorialTeam,
  },
  {
    id: 7,
    mainImage: "/images/blog/creatine.png",
    title: "Creatine for Older Adults: Benefits, Safety, and Dosage",
    metadata: "What older adults should know about creatine, from muscle and brain health to dosing and safety.",
    url: "/blog/health/creatine",
    categoryKey: "nutrition",
    featured: true,
    readTime: "8 min read",
    author: editorialTeam,
  },
  {
    id: 8,
    mainImage: "/images/blog/sunshine.png",
    title: "How Sunlight Supports Health in Older Adults",
    metadata:
      "How regular sunlight exposure can support bone health, mood, immunity, and sleep in older adults.",
    url: "/blog/health/sunshine",
    categoryKey: "aging-well",
    featured: true,
    readTime: "5 min read",
    author: editorialTeam,
  },
  {
    id: 9,
    mainImage: "/images/blog/organizing-medical-records.jpg",
    title:
      "How to Organize Medical Records for an Aging Parent",
    metadata:
      "A practical system for gathering, organizing, and sharing the records a caregiver needs, on paper, online, or both.",
    url: "/blog/family-history/organizing-medical-records",
    categoryKey: "health-records",
    readTime: "12 min read",
    author: editorialTeam,
  },
  {
    id: 10,
    mainImage: "/images/blog/family-generations.png",
    title:
      "How Family Health History Can Guide Disease Prevention",
    metadata:
      "Most Americans know family health history matters, but few have collected it. Here is how those records can guide screening and prevention.",
    url: "/blog/family-health-monitoring",
    categoryKey: "health-records",
    readTime: "14 min read",
    author: editorialTeam,
  },
  {
    id: 11,
    mainImage: "/images/blog/heart-disease.png",
    title:
      "A DNA Test Can Estimate Risk for 8 Heart Conditions",
    metadata:
      "A polygenic risk score estimates inherited risk for eight cardiovascular and metabolic conditions. Here is what the research means for families with a history of heart disease.",
    url: "/blog/heart/genetic-risk-score-heart-disease",
    categoryKey: "health-records",
    readTime: "5 min read",
    author: editorialTeam,
  },
  {
    id: 12,
    mainImage: "/images/blog/glp-1.png",
    title:
      "Who Qualifies for Medicare's $50 Weight-Loss Drug Copay?",
    metadata:
      "Medicare's GLP-1 Bridge program covers Wegovy, Zepbound, and Foundayo for some patients. Check the eligibility rules and common coverage gaps.",
    url: "/blog/health/medicare-glp1-weight-loss-coverage",
    categoryKey: "aging-well",
    readTime: "6 min read",
    author: editorialTeam,
  },
  {
    id: 13,
    mainImage: "/images/blog/caregiver-grief.png",
    title: "Grieving the Years Caregiving Took From You",
    metadata:
      "The life you lost to years of caregiving is a real grief with clinical names. What the research says about loss of self, timelines, and what helps.",
    url: "/blog/caregiving/grieving-the-years-lost-to-caregiving",
    categoryKey: "family-stories",
    readTime: "9 min read",
    author: editorialTeam,
  },
  {
    id: 14,
    mainImage: "/images/blog/kidney-transplant.png",
    title: "Why Nearly Half of Kidney Transplant Candidates Never Start the Evaluation",
    metadata:
      "A study of more than 720,000 patients found 48% referred for a kidney transplant never begin the evaluation, and only 19% reach the waitlist. Here's what determines who makes it through.",
    url: "/blog/health/kidney-transplant-evaluation-gap",
    categoryKey: "health-records",
    readTime: "7 min read",
    author: editorialTeam,
  },
];

export default BlogData;
