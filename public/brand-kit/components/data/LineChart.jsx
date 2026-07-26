import React from "react";

/**
 * LineChart — lightweight trend chart (maps to BaseLineChart). Renders a smooth-ish
 * polyline with an aquamarine area fill; optional last-point marker.
 */
export function LineChart({ data = [], width = 320, height = 120, color = "var(--aquamarine)", stroke = "var(--color-primary)", marker = true, style, ...rest }) {
  const vals = data.length ? data : [3, 5, 4, 6, 5, 7, 8];
  const max = Math.max(...vals), min = Math.min(...vals), range = max - min || 1;
  const pad = 8;
  const pts = vals.map((v, i) => {
    const x = pad + (i * (width - pad * 2)) / (vals.length - 1);
    const y = pad + (1 - (v - min) / range) * (height - pad * 2);
    return [x, y];
  });
  const line = pts.map((p) => p.join(",")).join(" ");
  const area = `${pad},${height - pad} ${line} ${width - pad},${height - pad}`;
  const last = pts[pts.length - 1];
  const id = "kzlc" + Math.random().toString(36).slice(2, 7);
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={style} {...rest}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.35" /><stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient></defs>
      <polyline points={area} fill={`url(#${id})`} stroke="none" />
      <polyline points={line} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {marker && <circle cx={last[0]} cy={last[1]} r="4.5" fill="var(--color-surface)" stroke={stroke} strokeWidth="2.5" />}
    </svg>
  );
}
