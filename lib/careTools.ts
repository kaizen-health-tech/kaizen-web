export const displayToolDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  )
    return value;
  // Keep date-only entries independent of the visitor's time zone.
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
};

export const copyToolResult = async (text: string): Promise<string> => {
  try {
    await navigator.clipboard.writeText(text);
    return "Copied. Paste only where you want to share it.";
  } catch {
    return "Copy unavailable. Select the result text to copy, or use Print / Save PDF.";
  }
};
