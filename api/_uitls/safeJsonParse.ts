export function safeJsonParse<TData>(str: string): TData | null {
  try {
    const cleaned = str
      .replace(/^```json\s*/i, '')
      .replace(/```$/i, '')
      .trim();

    const fixed = cleaned.endsWith('}') ? cleaned : `${cleaned}"\n]}`;
    return JSON.parse(fixed);
  } catch (err) {
    console.error('[JSON parse error]', err, str);
    return null;
  }
}
