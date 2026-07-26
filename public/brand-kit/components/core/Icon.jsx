import React from "react";

/**
 * Icon — renders a glyph from the Kaizen Health icon registry.
 * The full set (window.KaizenIcons) is extracted verbatim from the product's
 * src/assets/icons/svgs.js. Stroke icons inherit `color`; filled icons inherit it too.
 */
export function Icon({ name, size = 24, color = "currentColor", strokeWidth, style, className, ...rest }) {
  const set = typeof window !== "undefined" ? window.KaizenIcons : null;
  const def = set && set[name];
  if (!def) {
    // Unknown glyph — render nothing (mirrors BaseIcon behaviour) but keep layout box.
    return <span style={{ display: "inline-block", width: size, height: size, ...style }} />;
  }
  const stroke = def.filled ? "none" : color;
  const fill = def.filled ? color : "none";
  let body = def.body;
  if (strokeWidth != null && !def.filled) {
    body = body.replace(/stroke-width="[^"]*"/g, `stroke-width="${strokeWidth}"`);
  }
  return (
    <svg
      viewBox={def.viewBox}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
      className={className}
      style={{ display: "block", flexShrink: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: body }}
      {...rest}
    />
  );
}
