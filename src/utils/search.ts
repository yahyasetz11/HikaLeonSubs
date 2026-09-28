import { episodes } from '../data/episodes';
import type { Episode } from '../data/episodes';
import { stripTitleTags } from './title';

export interface ScoredEpisode {
  episode: Episode;
  score: number;
}

export function searchEpisodes(query: string, showSlug?: string): ScoredEpisode[] {
  if (!query || query.trim().length < 3) return [];

  const q = query.trim().toLowerCase();
  const pool = showSlug
    ? episodes.filter((ep) => ep.showSlug === showSlug)
    : episodes;

  const scored: ScoredEpisode[] = [];

  for (const episode of pool) {
    let score = 0;

    const title = stripTitleTags(episode.episodeTitle).toLowerCase();
    if (title.includes(q)) score += 3;

    if (episode.episodeSubtitle) {
      const subtitle = episode.episodeSubtitle.toLowerCase();
      if (subtitle.includes(q)) score += 2;
    }

    const showName = episode.showName.toLowerCase();
    if (showName.includes(q)) score += 2;

    const epNumber = episode.episodeNumber.toLowerCase();
    if (epNumber.includes(q)) score += 2;

    if (episode.description) {
      const desc = episode.description.toLowerCase();
      if (desc.includes(q)) score += 1;
    }

    if (score > 0) {
      scored.push({ episode, score });
    }
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.episode.releaseDate.localeCompare(a.episode.releaseDate);
  });

  return scored;
}

export function highlightMatch(text: string, query: string): string {
  if (!query || !text) return text;
  const q = query.trim();
  if (q.length < 3) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}
