// Icon glyphs lifted verbatim from the Kaizen Health design system icon
// registry (kaizen-icons.js) for the blog redesign. Per the design handoff,
// these six are never hand-drawn or substituted with another icon library.
import { SVGProps } from "react";

type IconDef = {
  viewBox: string;
  body: string;
  filled: boolean;
};

const ICONS: Record<string, IconDef> = {
  Search: {
    viewBox: "0 0 24 24",
    filled: false,
    body: '<circle cx="11.7666" cy="11.7666" r="8.98856" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M18.0183 18.4851L21.5423 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
  },
  Kai: {
    viewBox: "0 0 24 24",
    filled: true,
    body: '<path clip-rule="evenodd" fill-rule="evenodd" d="M9.14968 4.5H17.4364C19.4043 4.5 21 6.20004 21 8.29817V12.7293C21 15.2365 19.9912 16.9719 18.6657 18.0486C17.4038 19.0738 15.924 19.453 14.907 19.4987L14.877 19.5H6.56361C4.59628 19.5 3 17.8012 3 15.7025V11.0585C3 8.65616 4.06237 6.99793 5.37443 5.97142C6.62853 4.99026 8.09357 4.5879 9.09428 4.50461L9.14968 4.5ZM14.847 17.9806C16.4228 17.9099 19.5746 16.7606 19.5746 12.7293V8.29817C19.5746 7.03946 18.6173 6.0194 17.4364 6.0194H9.20525C7.61198 6.152 4.42544 7.34547 4.42544 11.0585V15.7025C4.42544 16.9612 5.38273 17.9806 6.56361 17.9806H14.847Z" /><path clip-rule="evenodd" fill-rule="evenodd" d="M8 13.1934C8.38297 13.1934 8.69344 12.883 8.69344 12.5C8.69344 12.117 8.38297 11.8066 8 11.8066C7.61703 11.8066 7.30656 12.117 7.30656 12.5C7.30656 12.883 7.61703 13.1934 8 13.1934ZM8 14.5C9.10457 14.5 10 13.6046 10 12.5C10 11.3954 9.10457 10.5 8 10.5C6.89543 10.5 6 11.3954 6 12.5C6 13.6046 6.89543 14.5 8 14.5Z" /><path clip-rule="evenodd" fill-rule="evenodd" d="M16 13.1934C16.383 13.1934 16.6934 12.883 16.6934 12.5C16.6934 12.117 16.383 11.8066 16 11.8066C15.617 11.8066 15.3066 12.117 15.3066 12.5C15.3066 12.883 15.617 13.1934 16 13.1934ZM16 14.5C17.1046 14.5 18 13.6046 18 12.5C18 11.3954 17.1046 10.5 16 10.5C14.8954 10.5 14 11.3954 14 12.5C14 13.6046 14.8954 14.5 16 14.5Z" /><path clip-rule="evenodd" fill-rule="evenodd" d="M10.5 12.5C10.5163 13.6083 11.1816 14.5 12 14.5C12.8184 14.5 13.4837 13.6083 13.5 12.5H10.5Z" />',
  },
  ArrowNarrowRight: {
    viewBox: "0 0 24 24",
    filled: false,
    body: '<path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M15 16L19 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M15 8L19 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />',
  },
  Bookmark: {
    viewBox: "0 0 24 24",
    filled: false,
    body: '<path d="M6.75 4.75C6.75 3.7835 7.5335 3 8.5 3H15.5C16.4665 3 17.25 3.7835 17.25 4.75V20L12 16.5L6.75 20V4.75Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
  },
  ShareBox: {
    viewBox: "0 0 24 24",
    filled: false,
    body: '<path d="M4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" /><path d="M16 6L12 2L8 6M12 2V15" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />',
  },
  CircleCheck: {
    viewBox: "0 0 24 24",
    filled: false,
    body: '<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M9 12L11 14L15 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />',
  },
};

export type KaizenIconName = keyof typeof ICONS;

interface KaizenIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: KaizenIconName;
  size?: number;
}

export const KaizenIcon = ({ name, size = 20, ...props }: KaizenIconProps) => {
  const icon = ICONS[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={icon.filled ? "currentColor" : "none"}
      stroke={icon.filled ? "none" : "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: icon.body }}
      {...props}
    />
  );
};

export default KaizenIcon;
