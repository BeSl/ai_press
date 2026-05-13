// Извлечение источника статьи. В порядке приоритета:
//   1) frontmatter.sourceUrl (+ sourceName)
//   2) markdown-ссылка после "Источник:" / "Source:" в теле
//   3) последняя URL-ссылка в теле
// Ничего не нашли — возвращаем null.

export interface ResolvedSource {
  url: string;
  name: string;
}

export function shortHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

interface FrontmatterLike {
  sourceUrl?: string;
  sourceName?: string;
}

export function resolveSource(fm: FrontmatterLike, body: string | undefined): ResolvedSource | null {
  if (fm.sourceUrl) {
    return { url: fm.sourceUrl, name: fm.sourceName || shortHost(fm.sourceUrl) };
  }
  if (!body) return null;

  // Ищем явный паттерн "Источник: [Название](url)" в любом регистре.
  const labeled = body.match(/(?:Источник|Источники|Source)\s*[:\-—]\s*\[([^\]]+)\]\(([^)\s]+)\)/i);
  if (labeled) {
    return { url: labeled[2], name: labeled[1] || shortHost(labeled[2]) };
  }

  // Иногда источник — просто bare URL после "Источник:".
  const bare = body.match(/(?:Источник|Источники|Source)\s*[:\-—]\s*<?(https?:\/\/[^\s)>]+)>?/i);
  if (bare) {
    return { url: bare[1], name: shortHost(bare[1]) };
  }

  // Последний крайний случай: самая последняя markdown-ссылка в теле.
  const links = Array.from(body.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g));
  if (links.length > 0) {
    const last = links[links.length - 1];
    return { url: last[2], name: last[1] || shortHost(last[2]) };
  }
  return null;
}
