# Design Spec: Hierarchical Episode Routing

## Overview
Migrate episode route structure from `/episode/[id]` to `/shows/[slug]/[id]`. This establishes a hierarchical URL structure so that users can delete the episode segment in the browser address bar and land naturally on the show listing page `/shows/[slug]`.

## Routing Changes

1. **Show Index Page (`/shows/[slug]`)**:
   - Relocate `src/pages/shows/[slug].astro` to `src/pages/shows/[slug]/index.astro`.
   - Functionality, breadcrumbs, and `getStaticPaths` remain identical.

2. **Episode Detail Page (`/shows/[slug]/[id]`)**:
   - Relocate `src/pages/episode/[id].astro` to `src/pages/shows/[slug]/[id].astro`.
   - Update `getStaticPaths` in `[id].astro`:
     ```ts
     export function getStaticPaths() {
       return episodes.map((ep) => ({
         params: { slug: ep.showSlug, id: ep.id },
         props: { episode: ep },
       }));
     }
     ```
   - Retain all breadcrumbs, player logic, download cards, and layout.

3. **Deprecate Old Route**:
   - Delete `src/pages/episode/[id].astro` and remove directory `src/pages/episode/`.

## Component Link Updates

Update episode anchor tags to use `/shows/${showSlug}/${episodeId}`:
- `src/components/EpisodeCard.astro`: Update line 27 (image link) and line 64 (title link) from `/episode/${episode.id}` to `/shows/${episode.showSlug}/${episode.id}`.
- `src/components/Carousel.astro`: Update line 64 and line 102 from `/episode/${ep.id}` to `/shows/${ep.showSlug}/${ep.id}`.

## Verification
1. Run `npm run build` to confirm all static paths build without errors.
2. Verify output directories:
   - `dist/shows/[slug]/index.html` exists.
   - `dist/shows/[slug]/[id]/index.html` exists.
   - `dist/episode/` is no longer generated.
