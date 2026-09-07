import { COMPANY_NAME, absoluteUrl } from "@/lib/seo";

export const CAREGIVER_CALCULATOR_EMBED_ID = "caregiver-cost-calculator";

// Publishers who embed the tool get a working widget and we get an attribution
// link from their page — the iframe itself is invisible to crawlers, so the
// two <a> tags below are the entire SEO value of an embed. Keep them in the
// snippet.
const EMBED_UTM = "utm_source=embed&utm_medium=referral";

// Widths at which the calculator changes shape, measured against the built
// embed: it stacks into one column below 1024px and sits side by side above.
// The stylesheet is the no-JavaScript fallback, so each height has to clear the
// tallest the tool gets at that width or a publisher's readers lose the CTA at
// the bottom. The script below refines it to the exact height.
const FALLBACK_HEIGHTS = {
  base: 1900,
  sm: 1500,
  lg: 1020,
};

// Kept above 1024px so wide layouts actually reach the two-column breakpoint;
// a narrower cap would force the tall stacked layout on every host.
const FRAME_MAX_WIDTH = 1120;

export const buildCaregiverCalculatorEmbed = () => {
  const frameSrc = absoluteUrl(`/embed/${CAREGIVER_CALCULATOR_EMBED_ID}`);
  const toolUrl = absoluteUrl(
    `/tools/${CAREGIVER_CALCULATOR_EMBED_ID}?${EMBED_UTM}`,
  );
  const homeUrl = absoluteUrl(`/?${EMBED_UTM}`);

  return `<div class="kaizen-embed" style="max-width:${FRAME_MAX_WIDTH}px;margin:0 auto">
  <style>
    .kaizen-embed iframe { width: 100%; border: 0; height: ${FALLBACK_HEIGHTS.base}px; }
    @media (min-width: 640px) { .kaizen-embed iframe { height: ${FALLBACK_HEIGHTS.sm}px; } }
    @media (min-width: 1180px) { .kaizen-embed iframe { height: ${FALLBACK_HEIGHTS.lg}px; } }
  </style>
  <iframe
    src="${frameSrc}"
    title="Caregiver Cost Calculator by ${COMPANY_NAME}"
    loading="lazy"
    data-kaizen-embed="${CAREGIVER_CALCULATOR_EMBED_ID}"
  ></iframe>
  <p style="margin:8px 0 0;font:14px/1.5 system-ui,sans-serif;color:#5b5b6b">
    <a href="${toolUrl}" target="_blank" rel="noopener">Caregiver Cost Calculator</a>
    by <a href="${homeUrl}" target="_blank" rel="noopener">${COMPANY_NAME}</a>
  </p>
</div>
<script>
  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || data.type !== "kaizen-embed-height") return;
    var frame = document.querySelector(
      'iframe[data-kaizen-embed="' + data.id + '"]'
    );
    if (frame && data.height) frame.style.height = data.height + "px";
  });
</script>`;
};
