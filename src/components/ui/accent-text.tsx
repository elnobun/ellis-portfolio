import type { ReactNode } from "react";

type AccentTextProps = {
  text: string;
  accentClassName?: string;
};

export function stripAccentMarkup(text: string) {
  return text.replace(/<accent>(.*?)<\/accent>/g, "$1");
}

export function AccentText({ text, accentClassName = "text-accent italic" }: AccentTextProps) {
  const parts: ReactNode[] = [];
  const regex = /<accent>(.*?)<\/accent>/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <span key={`${match.index}-${match[1]}`} className={accentClassName}>
        {match[1]}
      </span>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts.length ? parts : text}</>;
}
