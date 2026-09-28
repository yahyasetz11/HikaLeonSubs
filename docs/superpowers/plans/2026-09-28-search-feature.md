# Search Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a full-text search feature to HikaLeonSubs — a navbar live-results overlay and a dedicated `/search` page with filtering and pagination.

**Architecture:** A pure TypeScript search utility (`src/utils/search.ts`) handles scoring and highlighting; `Navbar.astro` gets an inline expanding search input that shows a max-5-result overlay; `src/pages/search.astro` is a single static page that reads `?q=` and `?show=` at runtime via vanilla JS and renders paginated results with show-pill filtering. No framework components — all interactivity is vanilla JS in `<script>` tags.

**Tech Stack:** Astro 7.3.3 (static), Tailwind CSS 3.4.19 (`darkMode: 'class'`), TypeScript, no React/Vue/Svelte

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/utils/search.ts` | **Create** | `searchEpisodes()` scoring engine + `highlightMatch()` HTML helper |
| `src/components/Navbar.astro` | **Modify** | Add search button, expanding input, live overlay |
| `src/pages/search.astro` | **Create** | Static `/search` page — client-side query/filter/pagination |
| `src/styles/global.css` | **Modify** | Add `.search-highlight` and `.search-pill` global styles |

---

## Task 1: Search Utility (`src/utils/search.ts`)

**Files:**
- Create: `src/utils/search.ts`

- [ ] **Step 1: Create `src/utils/search.ts` with the full implementation**

```typescript
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
```

- [ ] **Step 2: Verify the file was created**

```bash
Test-Path -LiteralPath "src/utils/search.ts"
```

Expected: `True`

- [ ] **Step 3: Commit**

```bash
git add src/utils/search.ts
git commit -m "feat: add searchEpisodes and highlightMatch utility"
```

---

## Task 2: Global CSS — search-highlight and search-pill styles (`src/styles/global.css`)

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Append to the `@layer components` block in `src/styles/global.css`**

Add the following lines inside the existing `@layer components { ... }` block, after the `.title-tag-gold` rules (before the closing `}`):

```css
  .search-highlight {
    background: transparent;
    color: #e8638a;
    font-weight: 600;
  }

  .dark .search-highlight {
    color: #f472b6;
  }
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add .search-highlight global style"
```

---

## Task 3: Navbar Search — button, expanding input, live overlay (`src/components/Navbar.astro`)

**Files:**
- Modify: `src/components/Navbar.astro`

The navbar has two zones: desktop (`hidden md:flex`) and mobile (`flex md:hidden`). We add:
- A search button (magnifying glass icon) **before** the dark mode toggle in the desktop zone
- The same button **before** the dark mode toggle in the mobile zone
- A shared live-results overlay `<div>` **inside `<header>`**, immediately after `</nav>`
- An expanding `<input>` that replaces nav links visually while active (using `absolute` positioning inside the nav)
- New `<script>` logic appended to the existing `<script>` block

> **Important:** The overlay is positioned `absolute` relative to `<header>` (which already has `sticky top-0 z-50`). The input expansion overlays the nav links area.

- [ ] **Step 1: Serialize episode data into the Navbar frontmatter**

The navbar needs episode data for the overlay. Import it at build time and serialize to a JSON data attribute so client JS can read it.

Replace the empty frontmatter (`---\n---`) with:

```astro
---
import { episodes, shows } from '../data/episodes';
import { stripTitleTags } from '../utils/title';

const serializedEpisodes = JSON.stringify(
  episodes.map((ep) => ({
    id: ep.id,
    showSlug: ep.showSlug,
    showName: ep.showName,
    episodeTitle: stripTitleTags(ep.episodeTitle),
    episodeSubtitle: ep.episodeSubtitle ?? '',
    episodeNumber: ep.episodeNumber,
    releaseDate: ep.releaseDate,
    thumbnail: ep.thumbnail,
    description: ep.description ?? '',
  }))
);
---
```

- [ ] **Step 2: Add the search button to the desktop nav zone and the search input wrapper**

Find the desktop nav `<div class="hidden md:flex items-center gap-1">`. Inside it, before the `<div class="w-px h-5 ...` separator, add the search button:

```html
      <!-- search button desktop -->
      <button
        id="nav-search-btn"
        type="button"
        aria-label="Cari episode"
        class="w-9 h-9 flex items-center justify-center rounded-lg text-ink-muted dark:text-dark-muted hover:text-ink dark:hover:text-dark-ink hover:bg-ground-border dark:hover:bg-dark-border transition-all duration-150"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
```

After that existing separator `<div class="w-px ...">`, keep the theme toggle as-is.

- [ ] **Step 3: Add the search button to the mobile nav zone**

Find `<div class="flex md:hidden items-center gap-1.5">`. Add the search button as the **first** child inside it (before `theme-toggle-mobile`):

```html
      <!-- search button mobile -->
      <button
        id="nav-search-btn-mobile"
        type="button"
        aria-label="Cari episode"
        class="w-10 h-10 flex items-center justify-center rounded-lg text-ink-muted dark:text-dark-muted hover:text-ink dark:hover:text-dark-ink hover:bg-ground-border dark:hover:bg-dark-border transition-all duration-150"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
```

- [ ] **Step 4: Add the expanding search input and overlay inside `<header>`**

Add the following after the closing `</nav>` tag (before the `<div id="mobile-menu"...>` block):

```html
  <!-- Expanding search bar (hidden by default, shown over nav when active) -->
  <div
    id="nav-search-bar"
    class="hidden absolute inset-x-0 top-0 h-16 z-10 px-4 sm:px-6 lg:px-8 flex items-center gap-3 bg-ground/95 dark:bg-dark-ground/95 backdrop-blur-md"
  >
    <svg class="w-5 h-5 text-ink-muted dark:text-dark-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    <input
      id="nav-search-input"
      type="text"
      placeholder="Cari episode..."
      autocomplete="off"
      class="flex-1 bg-transparent font-sans text-sm text-ink dark:text-dark-ink placeholder-ink-muted dark:placeholder-dark-muted outline-none"
    />
    <button
      id="nav-search-close"
      type="button"
      aria-label="Tutup pencarian"
      class="w-8 h-8 flex items-center justify-center rounded-lg text-ink-muted dark:text-dark-muted hover:text-ink dark:hover:text-dark-ink hover:bg-ground-border dark:hover:bg-dark-border transition-all duration-150 flex-shrink-0"
    >
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Live results overlay -->
  <div
    id="nav-search-overlay"
    class="hidden absolute left-0 right-0 top-16 z-50 mx-4 sm:mx-6 lg:mx-8 rounded-xl border border-ground-border dark:border-dark-border bg-ground/98 dark:bg-dark-card/98 backdrop-blur-md shadow-xl overflow-hidden animate-fade-in"
    data-episodes={serializedEpisodes}
  >
    <div id="nav-search-results" class="divide-y divide-ground-border dark:divide-dark-border"></div>
    <div id="nav-search-see-all" class="hidden px-4 py-2.5 border-t border-ground-border dark:border-dark-border">
      <a
        id="nav-search-see-all-link"
        href="/search"
        class="flex items-center justify-between text-sm font-display font-semibold text-sakura-600 dark:text-sakura-400 hover:text-sakura-700 dark:hover:text-sakura-300 transition-colors"
      >
        <span id="nav-search-see-all-text">Lihat semua hasil</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
    <div id="nav-search-empty" class="hidden px-4 py-5 text-sm text-ink-muted dark:text-dark-muted font-sans"></div>
  </div>
```

- [ ] **Step 5: Add the search script to the existing `<script>` block**

Append the following inside the existing `<script>` tag (before the closing `</script>`):

```typescript
  // ── Navbar Search ──────────────────────────────────────────────
  (function () {
    const searchBar = document.getElementById('nav-search-bar');
    const searchInput = document.getElementById('nav-search-input') as HTMLInputElement | null;
    const searchOverlay = document.getElementById('nav-search-overlay');
    const resultsContainer = document.getElementById('nav-search-results');
    const seeAllWrap = document.getElementById('nav-search-see-all');
    const seeAllLink = document.getElementById('nav-search-see-all-link') as HTMLAnchorElement | null;
    const seeAllText = document.getElementById('nav-search-see-all-text');
    const emptyMsg = document.getElementById('nav-search-empty');
    const closeBtn = document.getElementById('nav-search-close');

    const overlayEl = document.getElementById('nav-search-overlay');
    const rawData = overlayEl?.dataset.episodes ?? '[]';
    type EpData = {
      id: string; showSlug: string; showName: string;
      episodeTitle: string; episodeSubtitle: string;
      episodeNumber: string; releaseDate: string;
      thumbnail: string; description: string;
    };
    let allEpisodes: EpData[] = [];
    try { allEpisodes = JSON.parse(rawData); } catch {}

    function highlightMatch(text: string, query: string): string {
      if (!query || !text) return text;
      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    function scoreEpisodes(q: string): { ep: EpData; score: number }[] {
      const lq = q.toLowerCase();
      const scored: { ep: EpData; score: number }[] = [];
      for (const ep of allEpisodes) {
        let score = 0;
        if (ep.episodeTitle.toLowerCase().includes(lq)) score += 3;
        if (ep.episodeSubtitle && ep.episodeSubtitle.toLowerCase().includes(lq)) score += 2;
        if (ep.showName.toLowerCase().includes(lq)) score += 2;
        if (ep.episodeNumber.toLowerCase().includes(lq)) score += 2;
        if (ep.description && ep.description.toLowerCase().includes(lq)) score += 1;
        if (score > 0) scored.push({ ep, score });
      }
      scored.sort((a, b) => b.score !== a.score ? b.score - a.score : b.ep.releaseDate.localeCompare(a.ep.releaseDate));
      return scored;
    }

    function formatDate(d: string): string {
      try {
        return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
      } catch { return d; }
    }

    function renderResults(query: string) {
      if (!resultsContainer || !searchOverlay) return;
      const q = query.trim();
      if (q.length < 3) {
        searchOverlay.classList.add('hidden');
        return;
      }
      const scored = scoreEpisodes(q);
      const top5 = scored.slice(0, 5);

      resultsContainer.innerHTML = '';
      searchOverlay.classList.remove('hidden');

      if (top5.length === 0) {
        if (emptyMsg) {
          emptyMsg.classList.remove('hidden');
          emptyMsg.textContent = `Tidak ada hasil untuk '${q}'`;
        }
        if (seeAllWrap) seeAllWrap.classList.add('hidden');
        return;
      }

      if (emptyMsg) emptyMsg.classList.add('hidden');

      top5.forEach(({ ep }) => {
        const card = document.createElement('a');
        card.href = `/shows/${ep.showSlug}/${ep.id}`;
        card.className = 'flex items-center gap-3 px-4 py-3 hover:bg-ground-border dark:hover:bg-dark-border transition-colors duration-100 group';
        card.innerHTML = `
          <img src="${ep.thumbnail}" alt="" class="w-12 h-9 object-cover rounded-md flex-shrink-0 bg-ground-border dark:bg-dark-border" loading="lazy" />
          <div class="flex-1 min-w-0">
            <p class="text-sm font-display font-semibold text-ink dark:text-dark-ink truncate leading-snug">${highlightMatch(ep.episodeTitle, q)}</p>
            ${ep.episodeSubtitle ? `<p class="text-xs text-ink-muted dark:text-dark-muted truncate mt-0.5">${highlightMatch(ep.episodeSubtitle, q)}</p>` : ''}
            <p class="text-xs text-ink-light dark:text-dark-muted mt-0.5">${formatDate(ep.releaseDate)}</p>
          </div>
        `;
        resultsContainer.appendChild(card);
      });

      if (seeAllWrap && seeAllLink && seeAllText) {
        seeAllWrap.classList.remove('hidden');
        const url = `/search?q=${encodeURIComponent(q)}`;
        seeAllLink.href = url;
        seeAllText.textContent = `Lihat semua ${scored.length} hasil →`;
      }
    }

    function openSearch() {
      if (!searchBar) return;
      searchBar.classList.remove('hidden');
      searchBar.classList.add('flex');
      searchInput?.focus();
    }

    function closeSearch() {
      if (!searchBar) return;
      searchBar.classList.add('hidden');
      searchBar.classList.remove('flex');
      if (searchInput) searchInput.value = '';
      if (searchOverlay) searchOverlay.classList.add('hidden');
    }

    let debounceTimer: ReturnType<typeof setTimeout>;
    searchInput?.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => renderResults(searchInput.value), 200);
    });

    searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim();
        if (q.length >= 3) {
          window.location.href = `/search?q=${encodeURIComponent(q)}`;
          closeSearch();
        }
      }
    });

    closeBtn?.addEventListener('click', closeSearch);

    document.getElementById('nav-search-btn')?.addEventListener('click', openSearch);
    document.getElementById('nav-search-btn-mobile')?.addEventListener('click', openSearch);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });

    document.addEventListener('click', (e) => {
      if (!searchBar || searchBar.classList.contains('hidden')) return;
      if (!searchBar.contains(e.target as Node) && !searchOverlay?.contains(e.target as Node)) {
        closeSearch();
      }
    });
  })();
```

- [ ] **Step 6: Verify navbar renders without build errors**

```bash
npx astro build 2>&1 | Select-String -Pattern "error|Error" | Select-Object -First 20
```

Expected: No `error` lines related to Navbar.astro

- [ ] **Step 7: Commit**

```bash
git add src/components/Navbar.astro
git commit -m "feat: add navbar search button, expanding input, and live overlay"
```

---

## Task 4: Search Results Page (`src/pages/search.astro`)

**Files:**
- Create: `src/pages/search.astro`

This is a single static page. At runtime, JS reads `window.location.search` to get `?q=` and `?show=`, runs the search in the browser (using episode data embedded as JSON), and renders results. Pagination is the same pattern as `src/pages/shows/[slug]/index.astro`.

- [ ] **Step 1: Create `src/pages/search.astro`**

```astro
---
import Base from '../layouts/Base.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import { episodes, shows } from '../data/episodes';
import { stripTitleTags } from '../utils/title';

const EPISODES_PER_PAGE = 10;

const serializedEpisodes = JSON.stringify(
  episodes.map((ep) => ({
    id: ep.id,
    showSlug: ep.showSlug,
    showName: ep.showName,
    episodeTitle: stripTitleTags(ep.episodeTitle),
    episodeSubtitle: ep.episodeSubtitle ?? '',
    episodeNumber: ep.episodeNumber,
    releaseDate: ep.releaseDate,
    thumbnail: ep.thumbnail,
    description: ep.description ?? '',
  }))
);

const serializedShows = JSON.stringify(
  shows.map((s) => ({ slug: s.slug, name: s.name }))
);
---

<Base title="Cari Episode — HikaLeonSubs" description="Cari episode subtitle Indonesia Sakurazaka46">
  <Navbar />
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

    <!-- Page heading + search input -->
    <div class="mb-6 sm:mb-8">
      <h1 class="font-display font-bold text-2xl sm:text-3xl text-ink dark:text-dark-ink mb-4">Cari Episode</h1>
      <div class="relative max-w-xl">
        <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted dark:text-dark-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          id="search-page-input"
          type="text"
          placeholder="Ketik minimal 3 karakter untuk mencari..."
          autocomplete="off"
          class="w-full pl-11 pr-4 py-3 rounded-xl border border-ground-border dark:border-dark-border bg-ground-card dark:bg-dark-card text-ink dark:text-dark-ink placeholder-ink-muted dark:placeholder-dark-muted font-sans text-sm outline-none focus:border-sakura-500 focus:ring-2 focus:ring-sakura-500/20 transition-all duration-150"
        />
      </div>
    </div>

    <!-- Show filter pills -->
    <div id="show-filter-pills" class="flex flex-wrap gap-2 mb-6">
      <button
        type="button"
        data-slug=""
        class="search-pill search-pill--active font-display font-semibold text-xs px-3.5 py-1.5 rounded-full transition-colors duration-150"
      >
        Semua
      </button>
    </div>

    <!-- Results area -->
    <div id="search-results-area">
      <!-- Populated by JS -->
    </div>

    <!-- Pagination -->
    <nav
      id="search-pagination"
      class="hidden mt-10 flex items-center justify-center gap-2"
      aria-label="Pagination hasil pencarian"
    >
      <button id="sr-prev" type="button" class="pg-btn" aria-label="Halaman sebelumnya" disabled>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>
      </button>
      <div class="flex items-center gap-1.5 font-display text-sm text-ink-muted dark:text-dark-muted select-none">
        <input
          id="sr-pg-input"
          type="text"
          inputmode="numeric"
          class="pg-input"
          value="1"
          aria-label="Halaman saat ini"
        />
        <span class="text-ink-light dark:text-dark-muted">/</span>
        <span id="sr-pg-total" class="font-semibold text-ink dark:text-dark-ink">1</span>
      </div>
      <button id="sr-next" type="button" class="pg-btn" aria-label="Halaman berikutnya">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
        </svg>
      </button>
    </nav>

  </main>
  <Footer />
</Base>

<style is:global>
  .search-pill {
    border: 1px solid #f3f4f6;
    background: #ffffff;
    color: #6b7280;
    cursor: pointer;
  }

  .dark .search-pill {
    border-color: #202020;
    background: #161616;
    color: #9ca3af;
  }

  .search-pill:hover:not(.search-pill--active) {
    border-color: #fbcfe8;
    background: #fdf2f8;
    color: #db2777;
  }

  .dark .search-pill:hover:not(.search-pill--active) {
    border-color: rgba(157, 23, 77, 0.5);
    background: rgba(157, 23, 77, 0.08);
    color: #f472b6;
  }

  .search-pill--active {
    border-color: #e8638a;
    background: #e8638a;
    color: #ffffff;
  }

  .dark .search-pill--active {
    border-color: #e8638a;
    background: #e8638a;
    color: #ffffff;
  }

  .sr-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.875rem;
    border: 1px solid #f3f4f6;
    background: #ffffff;
    text-decoration: none;
    transition: box-shadow 200ms ease-out, border-color 200ms ease-out, transform 200ms ease-out;
  }

  .dark .sr-card {
    border-color: #202020;
    background: #161616;
  }

  .sr-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(232, 99, 138, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
    border-color: #fbcfe8;
  }

  .dark .sr-card:hover {
    box-shadow: 0 8px 24px rgba(232, 99, 138, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3);
    border-color: rgba(157, 23, 77, 0.4);
  }
</style>

<script define:vars={{ serializedEpisodes, serializedShows, EPISODES_PER_PAGE }}>
  (function () {
    type EpData = {
      id: string; showSlug: string; showName: string;
      episodeTitle: string; episodeSubtitle: string;
      episodeNumber: string; releaseDate: string;
      thumbnail: string; description: string;
    };
    type ShowData = { slug: string; name: string };

    const allEpisodes: EpData[] = JSON.parse(serializedEpisodes);
    const allShows: ShowData[] = JSON.parse(serializedShows);
    const PER_PAGE: number = EPISODES_PER_PAGE;

    // ── State ──────────────────────────────────────────────
    let currentQuery = '';
    let currentShow = '';
    let currentPage = 1;
    let currentResults: EpData[] = [];

    // ── DOM refs ───────────────────────────────────────────
    const pageInput = document.getElementById('search-page-input') as HTMLInputElement | null;
    const resultsArea = document.getElementById('search-results-area');
    const pillsContainer = document.getElementById('show-filter-pills');
    const paginationNav = document.getElementById('search-pagination');
    const prevBtn = document.getElementById('sr-prev') as HTMLButtonElement | null;
    const nextBtn = document.getElementById('sr-next') as HTMLButtonElement | null;
    const pgInput = document.getElementById('sr-pg-input') as HTMLInputElement | null;
    const pgTotal = document.getElementById('sr-pg-total');

    // ── URL helpers ────────────────────────────────────────
    function getParams() {
      const p = new URLSearchParams(window.location.search);
      return { q: p.get('q') ?? '', show: p.get('show') ?? '' };
    }

    function pushParams(q: string, show: string, page: number) {
      const p = new URLSearchParams();
      if (q) p.set('q', q);
      if (show) p.set('show', show);
      if (page > 1) p.set('page', String(page));
      const newUrl = `${window.location.pathname}${p.toString() ? '?' + p.toString() : ''}`;
      history.pushState({}, '', newUrl);
    }

    // ── Scoring ────────────────────────────────────────────
    function scoreEpisodes(q: string, showSlug: string): EpData[] {
      const lq = q.toLowerCase();
      const pool = showSlug ? allEpisodes.filter((ep) => ep.showSlug === showSlug) : allEpisodes;
      const scored: { ep: EpData; score: number }[] = [];
      for (const ep of pool) {
        let score = 0;
        if (ep.episodeTitle.toLowerCase().includes(lq)) score += 3;
        if (ep.episodeSubtitle && ep.episodeSubtitle.toLowerCase().includes(lq)) score += 2;
        if (ep.showName.toLowerCase().includes(lq)) score += 2;
        if (ep.episodeNumber.toLowerCase().includes(lq)) score += 2;
        if (ep.description && ep.description.toLowerCase().includes(lq)) score += 1;
        if (score > 0) scored.push({ ep, score });
      }
      scored.sort((a, b) => b.score !== a.score ? b.score - a.score : b.ep.releaseDate.localeCompare(a.ep.releaseDate));
      return scored.map((s) => s.ep);
    }

    // ── Highlight ──────────────────────────────────────────
    function highlightMatch(text: string, q: string): string {
      if (!q || !text || q.length < 3) return text;
      const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    // ── Format date ────────────────────────────────────────
    function formatDate(d: string): string {
      try {
        return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
      } catch { return d; }
    }

    // ── Render pills ───────────────────────────────────────
    function renderPills() {
      if (!pillsContainer) return;
      pillsContainer.innerHTML = '';

      const allBtn = document.createElement('button');
      allBtn.type = 'button';
      allBtn.dataset.slug = '';
      allBtn.className = `search-pill ${currentShow === '' ? 'search-pill--active' : ''} font-display font-semibold text-xs px-3.5 py-1.5 rounded-full transition-colors duration-150`;
      allBtn.textContent = 'Semua';
      allBtn.addEventListener('click', () => { currentShow = ''; currentPage = 1; pushParams(currentQuery, currentShow, currentPage); render(); });
      pillsContainer.appendChild(allBtn);

      allShows.forEach((show) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.slug = show.slug;
        btn.className = `search-pill ${currentShow === show.slug ? 'search-pill--active' : ''} font-display font-semibold text-xs px-3.5 py-1.5 rounded-full transition-colors duration-150`;
        btn.textContent = show.name;
        btn.addEventListener('click', () => { currentShow = show.slug; currentPage = 1; pushParams(currentQuery, currentShow, currentPage); render(); });
        pillsContainer.appendChild(btn);
      });
    }

    // ── Render results ─────────────────────────────────────
    function renderResultsArea() {
      if (!resultsArea) return;
      resultsArea.innerHTML = '';

      const q = currentQuery.trim();

      if (q.length < 3) {
        resultsArea.innerHTML = `
          <div class="flex flex-col items-center justify-center py-20 text-center">
            <svg class="w-12 h-12 text-ink-light dark:text-dark-muted mb-4" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <p class="font-display font-semibold text-base text-ink dark:text-dark-ink">Ketik minimal 3 karakter untuk mencari...</p>
          </div>`;
        if (paginationNav) paginationNav.classList.add('hidden');
        return;
      }

      if (currentResults.length === 0) {
        resultsArea.innerHTML = `
          <div class="flex flex-col items-center justify-center py-20 text-center">
            <svg class="w-12 h-12 text-ink-light dark:text-dark-muted mb-4" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <p class="font-display font-semibold text-base text-ink dark:text-dark-ink mb-1">Tidak ada hasil untuk '${q}'</p>
            <p class="text-sm text-ink-muted dark:text-dark-muted">Coba kata kunci lain atau pilih show yang berbeda.</p>
          </div>`;
        if (paginationNav) paginationNav.classList.add('hidden');
        return;
      }

      const totalPages = Math.max(1, Math.ceil(currentResults.length / PER_PAGE));
      const safePage = Math.max(1, Math.min(currentPage, totalPages));
      const start = (safePage - 1) * PER_PAGE;
      const pageEps = currentResults.slice(start, start + PER_PAGE);

      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 gap-3';

      pageEps.forEach((ep) => {
        const card = document.createElement('a');
        card.href = `/shows/${ep.showSlug}/${ep.id}`;
        card.className = 'sr-card';
        card.innerHTML = `
          <img src="${ep.thumbnail}" alt="" class="w-24 h-16 sm:w-28 sm:h-20 object-cover rounded-lg flex-shrink-0 bg-ground-border dark:bg-dark-border" loading="lazy" />
          <div class="flex-1 min-w-0 py-0.5">
            <p class="font-display font-bold text-sm sm:text-base text-ink dark:text-dark-ink leading-snug mb-0.5">${highlightMatch(ep.episodeTitle, q)}</p>
            ${ep.episodeSubtitle ? `<p class="text-xs sm:text-sm text-ink-muted dark:text-dark-muted leading-snug mb-1">${highlightMatch(ep.episodeSubtitle, q)}</p>` : ''}
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-display font-semibold text-sakura-600 dark:text-sakura-400">${ep.showName}</span>
              <span class="text-xs text-ink-light dark:text-dark-muted">${formatDate(ep.releaseDate)}</span>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });

      resultsArea.appendChild(grid);

      // Pagination controls
      if (totalPages > 1) {
        if (paginationNav) paginationNav.classList.remove('hidden');
        if (pgTotal) pgTotal.textContent = String(totalPages);
        if (pgInput) pgInput.value = String(safePage);
        if (prevBtn) prevBtn.disabled = safePage === 1;
        if (nextBtn) nextBtn.disabled = safePage === totalPages;
      } else {
        if (paginationNav) paginationNav.classList.add('hidden');
      }
    }

    // ── Master render ──────────────────────────────────────
    function render() {
      const q = currentQuery.trim();
      currentResults = q.length >= 3 ? scoreEpisodes(q, currentShow) : [];
      renderPills();
      renderResultsArea();
    }

    // ── Pagination handlers ────────────────────────────────
    function goToPage(page: number) {
      const totalPages = Math.max(1, Math.ceil(currentResults.length / PER_PAGE));
      currentPage = Math.max(1, Math.min(totalPages, page));
      pushParams(currentQuery, currentShow, currentPage);
      renderResultsArea();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    prevBtn?.addEventListener('click', () => goToPage(currentPage - 1));
    nextBtn?.addEventListener('click', () => goToPage(currentPage + 1));

    pgInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = parseInt(pgInput.value, 10);
        if (!isNaN(val)) goToPage(val);
        pgInput.blur();
      }
    });

    pgInput?.addEventListener('blur', () => {
      const val = parseInt(pgInput.value, 10);
      if (!isNaN(val)) { goToPage(val); } else { pgInput.value = String(currentPage); }
    });

    pgInput?.addEventListener('focus', () => pgInput.select());

    // ── Search input handler ───────────────────────────────
    let debounce: ReturnType<typeof setTimeout>;
    pageInput?.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        currentQuery = pageInput.value;
        currentPage = 1;
        pushParams(currentQuery, currentShow, currentPage);
        render();
      }, 200);
    });

    pageInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        currentQuery = pageInput.value;
        currentPage = 1;
        pushParams(currentQuery, currentShow, currentPage);
        render();
      }
    });

    // ── Browser back/forward ───────────────────────────────
    window.addEventListener('popstate', () => {
      const { q, show } = getParams();
      currentQuery = q;
      currentShow = show;
      currentPage = parseInt(new URLSearchParams(window.location.search).get('page') ?? '1', 10) || 1;
      if (pageInput) pageInput.value = currentQuery;
      render();
    });

    // ── Initial load ───────────────────────────────────────
    const { q: initQ, show: initShow } = getParams();
    currentQuery = initQ;
    currentShow = initShow;
    currentPage = parseInt(new URLSearchParams(window.location.search).get('page') ?? '1', 10) || 1;
    if (pageInput) pageInput.value = currentQuery;
    render();
  })();
</script>
```

- [ ] **Step 2: Verify the page builds without errors**

```bash
npx astro build 2>&1 | Select-String -Pattern "error|Error" | Select-Object -First 20
```

Expected: No errors; `dist/search/index.html` exists.

```bash
Test-Path -LiteralPath "dist/search/index.html"
```

Expected: `True`

- [ ] **Step 3: Commit**

```bash
git add src/pages/search.astro
git commit -m "feat: add /search static page with filtering, highlight, and pagination"
```

---

## Task 5: Dark Mode Audit

**Files:**
- Review: `src/components/Navbar.astro`, `src/pages/search.astro`, `src/styles/global.css`

Go through every new UI element and confirm dark mode coverage. Use the checklist below — each item must have an explicit `dark:` Tailwind variant or `.dark` CSS rule:

- [ ] **Step 1: Audit checklist**

| Element | Light | Dark | Status |
|---|---|---|---|
| Nav search button | `text-ink-muted hover:bg-ground-border` | `dark:text-dark-muted dark:hover:bg-dark-border` | ✅ in Task 3 Step 2/3 |
| Expanding search bar background | `bg-ground/95` | `dark:bg-dark-ground/95` | ✅ in Task 3 Step 4 |
| Search input text | `text-ink` / placeholder `text-ink-muted` | `dark:text-dark-ink` / `dark:placeholder-dark-muted` | ✅ in Task 3 Step 4 |
| Close button | `text-ink-muted hover:bg-ground-border` | `dark:text-dark-muted dark:hover:bg-dark-border` | ✅ in Task 3 Step 4 |
| Overlay container | `bg-ground/98 border-ground-border` | `dark:bg-dark-card/98 dark:border-dark-border` | ✅ in Task 3 Step 4 |
| Overlay result card hover | `hover:bg-ground-border` | `dark:hover:bg-dark-border` | ✅ in Task 3 Step 5 |
| Overlay episode title | `text-ink` | `dark:text-dark-ink` | ✅ in Task 3 Step 5 |
| Overlay episode subtitle/date | `text-ink-muted` / `text-ink-light` | `dark:text-dark-muted` | ✅ in Task 3 Step 5 |
| Overlay "See all" link | `text-sakura-600` | `dark:text-sakura-400` | ✅ in Task 3 Step 4 |
| Overlay empty text | `text-ink-muted` | `dark:text-dark-muted` | ✅ in Task 3 Step 5 |
| `.search-highlight` | `color: #e8638a` | `.dark .search-highlight { color: #f472b6 }` | ✅ Task 2 |
| Search page input | `bg-ground-card border-ground-border text-ink` | `dark:bg-dark-card dark:border-dark-border dark:text-dark-ink` | ✅ Task 4 Step 1 |
| Search page input placeholder | `placeholder-ink-muted` | `dark:placeholder-dark-muted` | ✅ Task 4 Step 1 |
| Show pills inactive | `.search-pill` light CSS | `.dark .search-pill` CSS rule | ✅ Task 4 Step 1 |
| Show pills active | `.search-pill--active` same in both | `.dark .search-pill--active` CSS | ✅ Task 4 Step 1 |
| Show pills hover inactive | light hover CSS | `.dark .search-pill:hover` CSS | ✅ Task 4 Step 1 |
| Result card `.sr-card` | `bg-white border-ground-border` | `.dark .sr-card` rule | ✅ Task 4 Step 1 |
| Result card hover | light shadow | `.dark .sr-card:hover` rule | ✅ Task 4 Step 1 |
| Result card title | `text-ink` | `dark:text-dark-ink` | ✅ Task 4 Step 1 |
| Result card subtitle | `text-ink-muted` | `dark:text-dark-muted` | ✅ Task 4 Step 1 |
| Result card show name | `text-sakura-600` | `dark:text-sakura-400` | ✅ Task 4 Step 1 |
| Result card date | `text-ink-light` | `dark:text-dark-muted` | ✅ Task 4 Step 1 |
| Empty state icon | `text-ink-light` | `dark:text-dark-muted` | ✅ Task 4 Step 1 |
| Empty state heading | `text-ink` | `dark:text-dark-ink` | ✅ Task 4 Step 1 |
| Empty state subtext | `text-ink-muted` | `dark:text-dark-muted` | ✅ Task 4 Step 1 |
| Pagination `.pg-btn` | light CSS | `.dark .pg-btn` (reused from global) | ✅ inherited from `[slug]/index.astro` global CSS |
| Pagination `.pg-input` | light CSS | `.dark .pg-input` (reused from global) | ✅ inherited from `[slug]/index.astro` global CSS |

> **Note on pagination CSS:** `.pg-btn` and `.pg-input` are defined in `src/pages/shows/[slug]/index.astro` as `<style is:global>`. Because Astro inlines `is:global` styles into the built page that uses them, these rules will **not** be available on `/search`. **You must duplicate** the `.pg-btn` and `.pg-input` global CSS into `src/pages/search.astro`'s `<style is:global>` block.

- [ ] **Step 2: Copy pagination CSS into `search.astro` `<style is:global>`**

Append the following inside the `<style is:global>` block in `src/pages/search.astro` (after `.sr-card:hover`):

```css
  .pg-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.625rem;
    border: 1px solid #f3f4f6;
    background: #ffffff;
    color: #6b7280;
    cursor: pointer;
    transition: color 150ms ease-out, border-color 150ms ease-out, background 150ms ease-out, box-shadow 150ms ease-out;
    flex-shrink: 0;
  }

  .dark .pg-btn {
    background: #161616;
    border-color: #202020;
    color: #9ca3af;
  }

  .pg-btn:hover:not(:disabled) {
    color: #db2777;
    border-color: #fbcfe8;
    background: #fdf2f8;
    box-shadow: 0 2px 8px rgba(232, 99, 138, 0.14);
  }

  .dark .pg-btn:hover:not(:disabled) {
    color: #f472b6;
    border-color: rgba(157, 23, 77, 0.5);
    background: rgba(157, 23, 77, 0.08);
    box-shadow: 0 2px 8px rgba(232, 99, 138, 0.18);
  }

  .pg-btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .pg-input {
    width: 2.5rem;
    height: 2.25rem;
    text-align: center;
    border-radius: 0.625rem;
    border: 1px solid #f3f4f6;
    background: #ffffff;
    font-family: 'Urbanist', system-ui, sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    color: #1a1a1a;
    outline: none;
    transition: border-color 150ms ease-out, box-shadow 150ms ease-out, background 150ms ease-out, color 150ms ease-out;
    -moz-appearance: textfield;
  }

  .dark .pg-input {
    background: #161616;
    border-color: #202020;
    color: #ededed;
  }

  .pg-input:focus {
    border-color: #e8638a;
    box-shadow: 0 0 0 2px rgba(232, 99, 138, 0.18);
  }

  .dark .pg-input:focus {
    border-color: #e8638a;
    box-shadow: 0 0 0 2px rgba(232, 99, 138, 0.22);
  }

  .pg-input::-webkit-outer-spin-button,
  .pg-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
```

- [ ] **Step 3: Final build check**

```bash
npx astro build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/search.astro src/styles/global.css src/components/Navbar.astro
git commit -m "feat: dark mode audit complete — all new UI elements have dark: variants"
```

---

## Manual Smoke Test Checklist

After all tasks are done, verify in a browser (`npx astro dev`):

- [ ] Navbar: clicking the magnifying glass shows the expanding input bar
- [ ] Navbar: typing fewer than 3 chars shows no overlay
- [ ] Navbar: typing 3+ chars shows overlay with up to 5 results; matched text is sakura-colored
- [ ] Navbar: "Lihat semua X hasil →" link goes to `/search?q=...`
- [ ] Navbar: pressing Enter navigates to `/search?q=...`
- [ ] Navbar: pressing Escape or clicking outside closes and clears the input
- [ ] Navbar: no results for a nonsense query shows "Tidak ada hasil untuk '...'"
- [ ] `/search`: `?q=` pre-fills the input and renders results on load
- [ ] `/search`: show pills filter results; active pill is sakura-pink
- [ ] `/search`: "Semua" pill clears show filter
- [ ] `/search`: >10 results show pagination; arrow buttons and page input work
- [ ] `/search`: browser back/forward button updates results correctly
- [ ] `/search`: no query (<3 chars) shows "Ketik minimal 3 karakter..." prompt
- [ ] `/search`: no results shows magnifying glass icon + "Tidak ada hasil untuk '...'"
- [ ] Toggle dark mode: all new elements render correctly in dark mode
- [ ] Clicking a result card navigates to `/shows/[showSlug]/[id]`
