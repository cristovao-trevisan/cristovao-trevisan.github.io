const locales = ['pt', 'en']
const baseUrl = 'https://cristovao-trevisan.github.io/webpage'
const pages = [
  { url: '/', priority: 1 },
  { url: '/artist', priority: 0.95 },
  { url: '/artist/gallery', priority: 0.9 },
  { url: '/artist/videos', priority: 0.88 },
  { url: '/artist/curriculum', priority: 0.8 },
  { url: '/engineer', priority: 0.95 },
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map(({ url, priority }) => `
  <url>
    <loc>${baseUrl + url}</loc>
    <priority>${priority || 1}</priority>
    ${locales.map(locale => `
    <xhtml:link
      rel="alternate"
      hreflang="${locale}"
      href="${baseUrl + url}?lang=${locale}"
    />`).join('\n')}
  </url>`).join('\n')}
</urlset>`

export function get (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/rss+xml' })
  res.end(sitemap)
}
