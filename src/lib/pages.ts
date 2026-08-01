// Shared helper: discover all page modules and expose typed metadata.
// Pages *should* export title, category, description (optional pillarHub flag) —
// this is not enforced, so a page missing one silently falls back to a filename-derived
// title and an empty description instead of erroring. Check for that when a hub page
// shows a generic/blank card.

export interface PageMeta {
  file: string;
  title?: string;
  category?: string;
  description?: string;
  pillarHub?: boolean;
}

export function getPagesByCategory(allPages: PageMeta[], category: string) {
  return allPages
    .filter((p) => p.category === category && !p.pillarHub)
    .map((p) => {
      const filename = p.file.split('/').pop() || '';
      return {
        path: '/' + filename.replace('.astro', ''),
        title: p.title || filename.replace(/-/g, ' ').replace('.astro', ''),
        desc: p.description || '',
      };
    });
}
