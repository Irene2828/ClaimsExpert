/**
 * URL-based language routing.
 *
 * French (default, x-default) lives at the root:   /, /about, /legal/privacy
 * English lives under the /en prefix:               /en, /en/about, /en/legal/privacy
 *
 * This mirrors the structure of the previous WordPress site (FR at root, EN at /en/),
 * so each language has its own crawlable, indexable URL.
 */

export const DEFAULT_LANG = 'fr';
export const LANGS = ['fr', 'en'];

export const HTML_LANG = { fr: 'fr-CA', en: 'en-CA' };
export const OG_LOCALE = { fr: 'fr_CA', en: 'en_CA' };

/** Normalize a pathname: no trailing slash (except root). */
export function normalizePath(pathname = '/') {
  if (!pathname) return '/';
  const clean = pathname.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) return clean.replace(/\/+$/, '') || '/';
  return clean || '/';
}

export function getLangFromPath(pathname = '/') {
  const p = normalizePath(pathname);
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'fr';
}

/** "/en/about" -> "/about", "/en" -> "/" */
export function stripLangPrefix(pathname = '/') {
  const p = normalizePath(pathname);
  if (p === '/en') return '/';
  if (p.startsWith('/en/')) return p.slice(3);
  return p;
}

/** Build the URL of a (language-neutral) path in a given language. */
export function localizePath(path = '/', lang = DEFAULT_LANG) {
  const [pathPart, hash = ''] = path.split('#');
  const base = stripLangPrefix(pathPart || '/');
  const hashPart = hash ? `#${hash}` : '';
  if (lang === 'en') return `${base === '/' ? '/en' : `/en${base}`}${hashPart}`;
  return `${base}${hashPart}`;
}

/** Same page, other language. */
export function alternatePath(pathname, targetLang) {
  return localizePath(stripLangPrefix(pathname), targetLang);
}
