import type { GroupInvitePreview } from "@/types/groupInvite";

// Server-only: runs while the join page renders on the server. The invite code
// is a credential, so it is sent in a POST body, never logged, and never put in
// a client bundle. KAIZEN_API_BASE_URL is deliberately not a NEXT_PUBLIC_ var.

export const GROUP_INVITE_CODE_PATTERN = /^[A-Za-z0-9_-]{32}$/;

const PREVIEW_TIMEOUT_MS = 5000;
const MAX_TEXT_LENGTH = 120;

const readText = (value: unknown) =>
  typeof value === "string" ? value.trim().slice(0, MAX_TEXT_LENGTH) : "";

export const fetchGroupInvitePreview = async (
  code: string,
): Promise<GroupInvitePreview> => {
  // A malformed code can never be valid, so skip the backend call.
  if (!GROUP_INVITE_CODE_PATTERN.test(code)) return { status: "invalid" };

  const baseUrl = process.env.KAIZEN_API_BASE_URL?.trim().replace(/\/+$/, "");
  if (!baseUrl) return { status: "unavailable" };

  try {
    const response = await fetch(`${baseUrl}/group-invites/preview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
      cache: "no-store",
      signal: AbortSignal.timeout(PREVIEW_TIMEOUT_MS),
    });

    // The backend answers every dead or malformed code with the same 404.
    if (response.status === 404) return { status: "invalid" };
    if (!response.ok) return { status: "unavailable" };

    const body: unknown = await response.json();
    const preview = (body as { preview?: Record<string, unknown> } | null)
      ?.preview;
    const groupName = readText(preview?.groupName);
    const inviterFirstName = readText(preview?.inviterFirstName);
    if (!groupName || !inviterFirstName) return { status: "unavailable" };
    return { status: "ok", groupName, inviterFirstName };
  } catch {
    // Network error, timeout, or an unreadable body. Nothing here is logged:
    // the request carried a credential.
    return { status: "unavailable" };
  }
};
