/**
 * Every indexable page, with its per-language <title> / meta description,
 * and the date its content last changed (used for sitemap.xml <lastmod>).
 *
 * IMPORTANT: when you change a page's content, update ONLY that page's `lastmod`.
 * Google ignores lastmod if it is bumped on every deploy for every page.
 *
 * Used by:
 *  - scripts/prerender.mjs  (static HTML <head> + sitemap.xml at build time)
 *  - src/hooks/usePageMeta  (keeps <head> in sync during client-side navigation)
 */
import { legalDocs } from '../i18n/legalDocs';
import { BUSINESS, SITE_URL } from './site';
import { getLangFromPath, localizePath, stripLangPrefix, normalizePath, LANGS } from './routing';

const BRAND = BUSINESS.name;

const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const truncate = (s, max = 158) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

const LEGAL_DOC_IDS = ['privacy', 'cookies', 'complaints'];

export const PAGES = [
  {
    key: 'home',
    path: '/',
    lastmod: '2026-10-06',
    changefreq: 'monthly',
    priority: '1.0',
    meta: {
      fr: {
        title: 'Expert en sinistre indépendant à Montréal | Isabelle Guertin',
        description:
          "Expert en sinistre indépendant à Montréal et sur la Rive-Sud (Longueuil, Brossard). Responsabilité civile municipale, accompagnement des assurés et évaluation des dommages.",
      },
      en: {
        title: 'Independent Claims Adjuster Montreal | Isabelle Guertin',
        description:
          'Independent claims adjuster in Montreal and the South Shore (Longueuil, Brossard). Municipal civil liability, public adjusting for policyholders and damage assessment.',
      },
    },
  },
  {
    key: 'about',
    path: '/about',
    lastmod: '2026-10-06',
    changefreq: 'monthly',
    priority: '0.8',
    meta: {
      fr: {
        title: `À propos | Expert en sinistre depuis 2014 | ${BRAND}`,
        description:
          `${BRAND}, cabinet d'expert en sinistre indépendant fondé en 2014 par Roy Guertin et dirigé aujourd'hui par Isabelle Guertin. Montréal, Rive-Sud et partout au Québec.`,
      },
      en: {
        title: `About | Claims Adjuster since 2014 | ${BRAND}`,
        description:
          `${BRAND} is an independent claims adjusting firm founded in 2014 by Roy Guertin and led today by Isabelle Guertin. Serving Montreal, the South Shore and all of Quebec.`,
      },
    },
  },
  ...LEGAL_DOC_IDS.map((id) => ({
    key: `legal-${id}`,
    path: `/legal/${id}`,
    lastmod: '2026-10-06',
    changefreq: 'yearly',
    priority: '0.3',
    meta: Object.fromEntries(
      LANGS.map((lang) => {
        const doc = legalDocs[lang][id];
        return [
          lang,
          {
            title: `${doc.title} | ${BRAND}`,
            description: truncate(stripHtml(doc.intro?.[0] || doc.title)),
          },
        ];
      })
    ),
  })),
];

export const NOT_FOUND_META = {
  fr: { title: `Page introuvable | ${BRAND}`, description: 'La page demandée est introuvable.' },
  en: { title: `Page not found | ${BRAND}`, description: 'The requested page could not be found.' },
};

/** Absolute URL for a path. Root is "https://rguertin.ca/", others have no trailing slash. */
export const absoluteUrl = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export function findPage(pathname) {
  const neutral = stripLangPrefix(pathname);
  return PAGES.find((p) => p.path === neutral) || null;
}

/** Everything needed to render the <head> of a URL. */
export function getPageMeta(pathname) {
  const path = normalizePath(pathname);
  const lang = getLangFromPath(path);
  const page = findPage(path);

  if (!page) {
    return { lang, page: null, noindex: true, ...NOT_FOUND_META[lang] };
  }

  const alternates = {
    fr: absoluteUrl(localizePath(page.path, 'fr')),
    en: absoluteUrl(localizePath(page.path, 'en')),
  };

  return {
    lang,
    page,
    noindex: false,
    title: page.meta[lang].title,
    description: page.meta[lang].description,
    canonical: alternates[lang],
    alternates,
    xDefault: alternates.fr,
  };
}

/** All prerendered URLs (both languages). */
export function allUrls() {
  return PAGES.flatMap((p) => LANGS.map((lang) => localizePath(p.path, lang)));
}
