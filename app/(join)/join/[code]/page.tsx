import type { Metadata } from "next";

import { InviteCard } from "@/components/GroupInvite/InviteCard";
import { fetchGroupInvitePreview } from "@/lib/groupInvite";

// Rendered per request: the preview must reflect a reset or a deleted group
// immediately, and a cached page would hold the credential.
export const dynamic = "force-dynamic";

// Generic on purpose: link-preview crawlers read these tags, and the group and
// inviter names are for the person who opens the page, not for a preview card.
export const metadata: Metadata = {
  title: "You’re invited | Kaizen Health",
  description: "Join your family’s group on Kaizen Health.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "You’ve been invited to a group on Kaizen Health",
    description: "A calmer way to manage family health.",
    images: ["/images/logo/kaizen-logo.png"],
  },
};

export default async function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const preview = await fetchGroupInvitePreview(code);
  return <InviteCard preview={preview} code={code} />;
}
