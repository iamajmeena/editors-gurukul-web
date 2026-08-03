export async function GET(context) {
  const allPages = Object.values(import.meta.glob('./*.astro', { eager: true }));
  const excludeList = ['index.astro', 'about-contact.astro', 'privacy-policy.astro', 'terms.astro', 'guides.astro', 'free-resources.astro', 'my-gear.astro', 'camera-guides.astro', 'lens-guides.astro', 'lighting-guides.astro', 'filmmaking-guides.astro', 'storytelling-guides.astro', 'career-guides.astro', 'decoding-davinci-20-course.astro'];

  const guides = allPages.filter(page => {
    const filename = page.file ? page.file.split('/').pop() : '';
    return filename && !excludeList.includes(filename) && !filename.startsWith('_');
  }).map(page => {
    const filename = page.file.split('/').pop() || '';
    const slug = filename.replace('.astro', '');
    const title = page.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const desc = page.description || "Practical filmmaking tutorial and post-production guide by DOP Ajay K Meena.";
    return {
      title,
      link: `https://editorsgurukul.com/${slug}`,
      description: desc,
      pubDate: new Date().toUTCString()
    };
  });

  const xmlItems = guides.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Editors Gurukul — Free Filmmaking & DaVinci Resolve Guides]]></title>
    <link>https://editorsgurukul.com</link>
    <description><![CDATA[India's #1 educational resource hub for video editors and cinematographers by DOP Ajay K Meena.]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://editorsgurukul.com/rss.xml" rel="self" type="application/rss+xml" />
    ${xmlItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
