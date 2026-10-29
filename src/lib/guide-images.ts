// Guide photos live in src/assets/guides/<name>.webp (16:9, 1200 × 675). Each guide lists its photos in order: the first is
// its main photo (the home page card and the share image), and all of them are spaced out through the guide's body
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<ImageMetadata>('../assets/guides/*.webp', { eager: true, import: 'default' });

// Rory's eight photos (2026-10-29), two per guide: each is one guide's main photo and another guide's second photo, so
// they are used evenly. With two photos the main one sits about a third of the way down and the second about two thirds.
const ALT = {
  'gas-plant-walkway-sunset': 'A worker in a hard hat checks a tablet on a walkway beside the pipework of a gas plant at sunset',
  'pump-inspection-tablet-closeup': 'A technician in gloves reads a rugged tablet beside a pump on a process plant',
  'offshore-pump-tablet': 'An offshore worker in orange coveralls holds up a tablet beside a pump skid on a platform deck',
  'offshore-crew-tablet-drawings': 'Two offshore workers look at drawings on a tablet beside valves and pipework on deck',
  'distillery-vessels-tablet': 'Two workers with a tablet check stainless steel vessels in a distillery',
  'pharma-cleanroom-tablet': 'A worker in a cleanroom suit reads a tablet beside a stainless steel reactor in a pharmaceutical plant',
  'chemical-drums-tablet': 'A worker in gloves checks a list on a rugged tablet beside chemical drums',
  'gas-plant-crew-tablet': 'Three workers in hard hats gather round a tablet at a gas plant',
};
type Photo = keyof typeof ALT;
const ORDER: Record<string, [Photo, Photo]> = {
  'is-ipad-intrinsically-safe': ['gas-plant-walkway-sunset', 'pharma-cleanroom-tablet'],
  'intrinsically-safe-tablet-buyers-guide': ['gas-plant-crew-tablet', 'distillery-vessels-tablet'],
  'ipad-android-windows-hazardous-areas': ['offshore-crew-tablet-drawings', 'pump-inspection-tablet-closeup'],
  'zone-1-vs-zone-2-tablets': ['offshore-pump-tablet', 'gas-plant-walkway-sunset'],
  'rugged-vs-intrinsically-safe-tablets': ['pump-inspection-tablet-closeup', 'offshore-pump-tablet'],
  'discontinued-intrinsically-safe-tablets': ['distillery-vessels-tablet', 'gas-plant-crew-tablet'],
  'using-tablets-hazardous-areas': ['chemical-drums-tablet', 'offshore-crew-tablet-drawings'],
  'intrinsically-safe-tablet-cost': ['pharma-cleanroom-tablet', 'chemical-drums-tablet'],
};
const PHOTOS: Record<string, { file: string; alt: string }[]> = Object.fromEntries(
  Object.entries(ORDER).map(([slug, files]) => [slug, files.map((file) => ({ file, alt: ALT[file] }))]),
);

/** The guide's photos with alt text, main photo first (empty when it has none) */
export const guidePhotos = (slug: string) =>
  (PHOTOS[slug] ?? []).map(({ file, alt }) => {
    const img = files[`../assets/guides/${file}.webp`];
    if (!img) throw new Error(`/guides/${slug}/: no photo at src/assets/guides/${file}.webp`);
    return { img, alt };
  });

/** The guide's main photo and alt text, or undefined when it has none */
export const guideImage = (slug: string) => guidePhotos(slug)[0];
