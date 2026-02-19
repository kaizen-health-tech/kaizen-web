import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Sign In",
  description:
    "Access your Kaizen Health account to review records, share updates, and manage your family care circle with secure HIPAA-aligned controls.",
  path: "/auth/signin",
  noIndex: true,
});

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
