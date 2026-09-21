# Hierarchical Episode Routing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate episode routes from `/episode/[id]` to `/shows/[slug]/[id]` so that URLs reflect show hierarchy and navigating up by editing the address bar works seamlessly.

**Architecture:** Move show index page to `src/pages/shows/[slug]/index.astro` and episode detail page to `src/pages/shows/[slug]/[id].astro` with updated `getStaticPaths` including `{ slug: ep.showSlug, id: ep.id }`. Update all internal links in `EpisodeCard.astro` and `Carousel.astro` to `/shows/${ep.showSlug}/${ep.id}` and delete `src/pages/episode/`.

**Tech Stack:** Astro, TypeScript, Tailwind CSS

---

### Task 1: Migrate Show Index Route to `src/pages/shows/[slug]/index.astro`

**Files:**
- Create: `src/pages/shows/[slug]/index.astro`
- Delete: `src/pages/shows/[slug].astro`

- [ ] **Step 1: Create `src/pages/shows/[slug]/index.astro` with adjusted import paths**
Copy contents of `src/pages/shows/[slug].astro` into `src/pages/shows/[slug]/index.astro`, adjusting relative imports from `../../` to `../../../`.

```astro
---
import Base from '../../../layouts/Base.astro';
import Navbar from '../../../components/Navbar.astro';
import Footer from '../../../components/Footer.astro';
import EpisodeCard from '../../../components/EpisodeCard.astro';
import { shows, episodes } from '../../../data/episodes';

export function getStaticPaths() {
  return shows.map((show) => ({
    params: { slug: show.slug },
    props: { show },
  }));
}

const { show } = Astro.props;
const showEpisodes = episodes.filter((ep) => ep.showSlug === show.slug);
---

<Base title={`${show.name} — HikaLeonSubs`} description={show.description} image={show.thumbnail}>
  <Navbar />
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <nav class="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-ink-muted dark:text-dark-muted mb-6 sm:mb-8 font-sans overflow-x-auto py-1 scrollbar-none" aria-label="Breadcrumb">
      <a href="/" class="hover:text-sakura-600 dark:hover:text-sakura-400 transition-colors flex-shrink-0">Beranda</a>
      <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>
      <a href="/shows" class="hover:text-sakura-600 dark:hover:text-sakura-400 transition-colors flex-shrink-0">Show</a>
      <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>
      <span class="text-ink dark:text-dark-ink truncate max-w-[150px] sm:max-w-none">{show.name}</span>
    </nav>

    <div class="mb-8 sm:mb-10">
      <h1 class="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink dark:text-dark-ink mb-2 sm:mb-3">{show.name}</h1>
      <p class="text-sm sm:text-base text-ink-muted dark:text-dark-muted max-w-2xl leading-relaxed">{show.description}</p>
      <p class="mt-2.5 sm:mt-3 text-xs sm:text-sm text-ink-light dark:text-dark-muted">{showEpisodes.length} episode tersedia</p>
    </div>

    {showEpisodes.length === 0 ? (
      <div class="flex flex-col items-center justify-center py-16 sm:py-20 text-center rounded-2xl border border-dashed border-ground-border dark:border-dark-border">
        <p class="font-display font-semibold text-base sm:text-lg text-ink dark:text-dark-ink mb-1">Belum ada episode</p>
        <p class="text-xs sm:text-sm text-ink-muted dark:text-dark-muted">Episode untuk show ini akan segera hadir.</p>
      </div>
    ) : (
      <div class="grid grid-cols-1 gap-4">
        {showEpisodes.map((ep) => (
          <EpisodeCard episode={ep} />
        ))}
      </div>
    )}
  </main>
  <Footer />
</Base>
```

- [ ] **Step 2: Remove old `src/pages/shows/[slug].astro`**

Delete `src/pages/shows/[slug].astro` using PowerShell command or file deletion.

---

### Task 2: Create Episode Detail Route at `src/pages/shows/[slug]/[id].astro` and Remove Old Episode Route

**Files:**
- Create: `src/pages/shows/[slug]/[id].astro`
- Delete: `src/pages/episode/[id].astro`

- [ ] **Step 1: Create `src/pages/shows/[slug]/[id].astro`**
Port `src/pages/episode/[id].astro` to `src/pages/shows/[slug]/[id].astro` updating imports to `../../../` and updating `getStaticPaths` to include both `slug` and `id`:

```astro
export function getStaticPaths() {
  return episodes.map((ep) => ({
    params: { slug: ep.showSlug, id: ep.id },
    props: { episode: ep },
  }));
}
```

- [ ] **Step 2: Remove `src/pages/episode/[id].astro` and `src/pages/episode` directory**

Delete `src/pages/episode/[id].astro` and its directory.

---

### Task 3: Update Episode Links in Components

**Files:**
- Modify: `src/components/EpisodeCard.astro:27,64`
- Modify: `src/components/Carousel.astro:64,102`

- [ ] **Step 1: Update `EpisodeCard.astro`**
In `src/components/EpisodeCard.astro`:
Line 27:
Change `href={`/episode/${episode.id}`}` to `href={`/shows/${episode.showSlug}/${episode.id}`}`
Line 64:
Change `href={`/episode/${episode.id}`}` to `href={`/shows/${episode.showSlug}/${episode.id}`}`

- [ ] **Step 2: Update `Carousel.astro`**
In `src/components/Carousel.astro`:
Line 64:
Change `href={`/episode/${ep.id}`}` to `href={`/shows/${ep.showSlug}/${ep.id}`}`
Line 102:
Change `href={`/episode/${ep.id}`}` to `href={`/shows/${ep.showSlug}/${ep.id}`}`

---

### Task 4: Build Verification

- [ ] **Step 1: Run `npm run build`**
Run `npm run build` and verify that the build succeeds without any routing or Astro compilation errors.

- [ ] **Step 2: Verify generated routes in `dist/`**
Verify that files exist at:
`dist/shows/sokomagattara/index.html`
`dist/shows/sokomagattara/ep-303-soko/index.html`
And that `dist/episode/` is no longer generated.
