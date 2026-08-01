// Shared helper: discover all page modules and expose typed metadata.
// Every page in src/pages/*.astro exports: title, category, description (optional pillarHub flag).

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
