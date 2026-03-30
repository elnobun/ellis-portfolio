import type { ReactNode } from "react";

type AccentTextProps = {
  text: string;
  accentClassName?: string;
};

function normalizeAccentMarkup(text: string) {
  return text
    .replace(/&lt;accent&gt;/gi, "<accent>")
    .replace(/&lt;\/accent&gt;/gi, "</accent>")
    .replace(/\u003caccent\u003e/gi, "<accent>")
    .replace(/\u003c\/accent\u003e/gi, "</accent>");
}

export function stripAccentMarkup(text: string) {
  return normalizeAccentMarkup(text).replace(/<accent>(.*?)<\/accent>/g, "$1");
}

export function AccentText({ text, accentClassName = "text-accent italic" }: AccentTextProps) {
  const normalizedText = normalizeAccentMarkup(text);
  const parts: ReactNode[] = [];
  const regex = /<accent>(.*?)<\/accent>/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(normalizedText)) !== null) {
    if (match.index > lastIndex) {
      parts.push(normalizedText.slice(lastIndex, match.index));
    }

    parts.push(
      <span key={`${match.index}-${match[1]}`} className={accentClassName}>
        {match[1]}
      </span>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < normalizedText.length) {
    parts.push(normalizedText.slice(lastIndex));
  }

  return <>{parts.length ? parts : normalizedText}</>;
}
