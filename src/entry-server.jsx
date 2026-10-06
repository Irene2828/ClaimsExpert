/**
 * Server entry used ONLY at build time by scripts/prerender.mjs to turn every route
 * into static HTML (real text in the page source for Google, Bing and AI crawlers
 * that don't execute JavaScript). Not shipped to the browser.
 */
/* eslint-disable react/only-export-components -- build-only module, no fast refresh */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { buildHeadHtml } from './seo/head';
import { getPageMeta, allUrls, PAGES, absoluteUrl } from './seo/pages';
import { HTML_LANG, localizePath, LANGS } from './seo/routing';

export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  const meta = getPageMeta(url);
  return { html, head: buildHeadHtml(url), htmlLang: HTML_LANG[meta.lang] };
}

export { allUrls, PAGES, absoluteUrl, localizePath, LANGS };
