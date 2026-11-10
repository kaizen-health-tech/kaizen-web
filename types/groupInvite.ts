export type GroupInvitePreview =
  | { status: "ok"; groupName: string; inviterFirstName: string }
  | { status: "invalid" }
  | { status: "unavailable" };

export type InviteCardProps = {
  preview: GroupInvitePreview;
  /** Only used to build the "open in the app" link. Never shown as text. */
  code: string;
};
