// Guide photos live in src/assets/guides/<name>.webp (16:9, 1200 × 675). Each guide lists its photos in order: the first is
// its main photo (the home page card and the share image), and all of them are spaced out through the guide's body
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<ImageMetadata>('../assets/guides/*.webp', { eager: true, import: 'default' });

// No tablet guide photos yet (the phones site's were never copied over): add entries here when Rory supplies them
const PHOTOS: Record<string, { file: string; alt: string }[]> = {};

/** The guide's photos with alt text, main photo first (empty when it has none) */
export const guidePhotos = (slug: string) =>
  (PHOTOS[slug] ?? []).map(({ file, alt }) => {
    const img = files[`../assets/guides/${file}.webp`];
    if (!img) throw new Error(`/guides/${slug}/: no photo at src/assets/guides/${file}.webp`);
    return { img, alt };
  });

/** The guide's main photo and alt text, or undefined when it has none */
export const guideImage = (slug: string) => guidePhotos(slug)[0];
