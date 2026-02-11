import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Create Account",
  description:
    "Create your Kaizen Health account to organize family medical records, invite caregivers, and start sharing secure updates in one private workspace.",
  path: "/auth/signup",
});

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
