import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import OpenRolesClient from "./OpenRolesClient";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Open Healthcare Roles",
  description:
    "Browse current openings at Kaizen Health and review role details for engineering and design positions focused on secure, family-centered healthcare products.",
  path: "/careers/open-roles",
});

export default function OpenRolesPage() {
  return <OpenRolesClient />;
}
