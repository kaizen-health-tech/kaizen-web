import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaizen Health Blog | AI-Powered Wellness & Family Health Insights",
  description:
    "Explore expert-backed articles on family health, AI-driven wellness, preventative care, and smart health tracking. Stay ahead with the latest healthcare insights.",
  openGraph: {
    title: "Kaizen Health Blog | AI-Powered Wellness & Family Health Insights",
    description:
      "Explore expert-backed articles on family health, AI-driven wellness, preventative care, and smart health tracking. Stay ahead with the latest healthcare insights.",
    url: "https://kaizenhealth.io/blog",
    siteName: "Kaizen Health",
    images: [
      {
        url: "https://kaizenhealth.io/images/blog/blog.png",
        width: 1200,
        height: 630,
        alt: "Kaizen Health Blog - AI-Powered Family Health Insights",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@kaizenhealth",
    title: "Kaizen Health Blog | AI-Powered Wellness & Family Health Insights",
    description:
      "Stay informed with the latest AI-driven healthcare trends, personalized health tracking, and family wellness tips. Read expert-backed articles on Kaizen Health Blog.",
    images: ["https://kaizenhealth.io/images/blog/blog.png"],
  },
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
