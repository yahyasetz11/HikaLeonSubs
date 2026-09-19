export interface TitlePart {
  text: string;
  isTagged: boolean;
}

/**
 * Splits a title string into parts, marking text wrapped in `{...}` as tagged.
 */
export function parseTitle(title: string): TitlePart[] {
  if (!title) return [];
  const regex = /\{([^}]+)\}/g;
  const parts: TitlePart[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: title.slice(lastIndex, match.index), isTagged: false });
    }
    parts.push({ text: match[1], isTagged: true });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < title.length) {
    parts.push({ text: title.slice(lastIndex), isTagged: false });
  }

  return parts;
}

/**
 * Strips `{` and `}` tags from a title string, returning clean plain text.
 * Used for post cards, metadata, and accessible labels.
 */
export function stripTitleTags(title: string): string {
  if (!title) return '';
  return title.replace(/\{([^}]+)\}/g, '$1');
}
