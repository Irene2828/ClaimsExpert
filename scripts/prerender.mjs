/**
 * Static prerender (runs after `vite build` + `vite build --ssr`).
 *
 * For every route in src/seo/pages.js (FR + EN) it writes a complete HTML file:
 *   dist/index.html, dist/about/index.html, dist/en/index.html, dist/en/about/index.html, ...
 * each with the page text in the HTML, the right <html lang>, title, description,
 * canonical, reciprocal hreflang and JSON-LD. It also writes dist/404.html (served by
 * Vercel with a real 404 status) and dist/sitemap.xml (with hreflang alternates).
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const ssrEntry = ['entry-server.js', 'entry-server.mjs']
  .map((f) => path.join(ssrDir, f))
  .find((f) => fs.existsSync(f));
if (!ssrEntry) throw new Error('SSR bundle not found in dist-ssr/. Run `vite build --ssr src/entry-server.jsx --outDir dist-ssr` first.');

const { render, allUrls, PAGES, absoluteUrl, localizePath, LANGS } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
for (const marker of ['<!--app-head-->', '<div id="root"></div>', '<html lang="fr">']) {
  if (!template.includes(marker)) throw new Error(`index.html template is missing marker: ${marker}`);
}

function renderPage(url, prerenderedFor = url) {
  const { html, head, htmlLang } = render(url);
  return template
    .replace('<html lang="fr">', `<html lang="${htmlLang}">`)
    .replace('<!--app-head-->', head)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="${prerenderedFor}">${html}</div>`);
}

function write(relFile, content) {
  const file = path.join(dist, relFile);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

// 1. Pages
const titles = new Map();
for (const url of allUrls()) {
  const out = renderPage(url);

  // Guard rails: fail the build rather than ship an empty or duplicate page.
  const body = out.split('<div id="root"')[1] || '';
  if (body.length < 2000 || !/<h1[\s>]/.test(body)) throw new Error(`Prerender of ${url} produced no real content.`);
  const title = (out.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title) throw new Error(`No <title> for ${url}`);
  if (titles.has(title)) throw new Error(`Duplicate <title> "${title}" on ${url} and ${titles.get(title)}`);
  titles.set(title, url);

  write(url === '/' ? 'index.html' : `${url.slice(1)}/index.html`, out);
  console.log(`  prerendered ${url.padEnd(24)} ${title}`);
}

// 2. 404 page (French by default; the client re-renders in English under /en/...)
write('404.html', renderPage('/404', '/404'));
console.log('  prerendered /404.html');

// 3. sitemap.xml with hreflang alternates (lastmod comes from src/seo/pages.js)
const urlEntries = PAGES.flatMap((page) => {
  const alternates = [
    ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}-CA" href="${absoluteUrl(localizePath(page.path, l))}" />`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localizePath(page.path, 'fr'))}" />`,
  ].join('\n');
  return LANGS.map(
    (l) => `  <url>
    <loc>${absoluteUrl(localizePath(page.path, l))}</loc>
${alternates}
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  );
});
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>
`
);
console.log(`  wrote sitemap.xml (${urlEntries.length} URLs)`);

// 4. Clean up the server bundle (never deployed)
fs.rmSync(ssrDir, { recursive: true, force: true });
