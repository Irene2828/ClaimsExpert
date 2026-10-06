/**
 * Builds the per-URL <head> (title, description, canonical, hreflang, Open Graph,
 * Twitter) and Schema.org JSON-LD. Used at build time by scripts/prerender.mjs
 * so that crawlers that do NOT run JavaScript still get complete, correct HTML.
 */
import { BUSINESS, SITE_URL } from './site';
import { HTML_LANG, OG_LOCALE } from './routing';
import { absoluteUrl, getPageMeta } from './pages';

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const ORG_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/#isabelle-guertin`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SERVICES = {
  fr: [
    ['Responsabilité civile municipale', 'Enquête et traitement indépendants des réclamations en responsabilité municipale (dommages matériels et corporels).'],
    ["Services d'expert en sinistre pour assurés", "Accompagnement indépendant des assurés pour un règlement équitable de leur réclamation d'assurance."],
    ['Évaluation des dommages et analyse technique', 'Analyse des dommages matériels, de la cause du sinistre et des estimations de réparation.'],
  ],
  en: [
    ['Municipal civil liability', 'Independent investigation and handling of municipal liability claims (property damage and bodily injury).'],
    ['Public adjusting for policyholders', 'Independent claims assistance helping policyholders reach a fair settlement under their policy.'],
    ['Damage assessment & technical analysis', 'Analysis of property damage, causation and repair estimates.'],
  ],
};

const ORG_DESCRIPTION = {
  fr: "Cabinet d'expert en sinistre indépendant à Montréal fondé en 2014 : responsabilité civile municipale, accompagnement des assurés et évaluation des dommages. Montréal, Rive-Sud (Longueuil, Brossard) et partout au Québec.",
  en: 'Independent claims adjusting firm in Montreal founded in 2014: municipal civil liability, public adjusting for policyholders and damage assessment. Montreal, South Shore (Longueuil, Brossard) and all of Quebec.',
};

function organizationNode(lang) {
  const a = BUSINESS.address;
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}${BUSINESS.logo}`,
    image: `${SITE_URL}${BUSINESS.image}`,
    description: ORG_DESCRIPTION[lang],
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingDate,
    founder: { '@type': 'Person', name: BUSINESS.founder },
    employee: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.street}, ${a.unit}`,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: BUSINESS.hours.days,
        opens: BUSINESS.hours.opens,
        closes: BUSINESS.hours.closes,
      },
    ],
    areaServed: BUSINESS.areaServed.map((x) => ({ '@type': x.type, name: x.name })),
    knowsLanguage: ['fr-CA', 'en-CA'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'fr' ? "Services d'expert en sinistre" : 'Claims adjusting services',
      itemListElement: SERVICES[lang].map(([name, description]) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, description },
      })),
    },
  };
}

function personNode(lang) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: BUSINESS.principal,
    jobTitle: lang === 'fr' ? 'Experte en sinistre indépendante' : 'Independent Claims Adjuster',
    worksFor: { '@id': ORG_ID },
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    image: `${SITE_URL}${BUSINESS.image}`,
    url: absoluteUrl(lang === 'fr' ? '/about' : '/en/about'),
    knowsLanguage: ['fr-CA', 'en-CA'],
  };
}

export function buildJsonLd(pathname) {
  const meta = getPageMeta(pathname);
  if (!meta.page || !['home', 'about'].includes(meta.page.key)) return null;
  const { lang } = meta;

  const graph = [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: BUSINESS.name,
      inLanguage: ['fr-CA', 'en-CA'],
      publisher: { '@id': ORG_ID },
    },
    organizationNode(lang),
    personNode(lang),
    {
      '@type': meta.page.key === 'about' ? 'AboutPage' : 'WebPage',
      '@id': `${meta.canonical}#webpage`,
      url: meta.canonical,
      name: meta.title,
      description: meta.description,
      inLanguage: HTML_LANG[lang],
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
    },
  ];

  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Returns the HTML string injected in <head> for a URL. */
export function buildHeadHtml(pathname) {
  const meta = getPageMeta(pathname);
  const { lang } = meta;
  const ogImage = `${SITE_URL}${BUSINESS.image}`;
  const tags = [];

  tags.push(`<title>${esc(meta.title)}</title>`);
  tags.push(`<meta name="description" content="${esc(meta.description)}" />`);

  if (meta.noindex) {
    tags.push('<meta name="robots" content="noindex" />');
  } else {
    tags.push(`<link rel="canonical" href="${esc(meta.canonical)}" />`);
    tags.push(`<link rel="alternate" hreflang="fr-CA" href="${esc(meta.alternates.fr)}" />`);
    tags.push(`<link rel="alternate" hreflang="en-CA" href="${esc(meta.alternates.en)}" />`);
    tags.push(`<link rel="alternate" hreflang="x-default" href="${esc(meta.xDefault)}" />`);
    tags.push(`<meta property="og:url" content="${esc(meta.canonical)}" />`);
  }

  tags.push(`<meta property="og:site_name" content="${esc(BUSINESS.name)}" />`);
  tags.push(`<meta property="og:type" content="website" />`);
  tags.push(`<meta property="og:title" content="${esc(meta.title)}" />`);
  tags.push(`<meta property="og:description" content="${esc(meta.description)}" />`);
  tags.push(`<meta property="og:image" content="${esc(ogImage)}" />`);
  tags.push(
    `<meta property="og:image:alt" content="${esc(
      lang === 'fr' ? `Isabelle Guertin, experte en sinistre — ${BUSINESS.name}` : `Isabelle Guertin, claims adjuster — ${BUSINESS.name}`
    )}" />`
  );
  tags.push(`<meta property="og:locale" content="${OG_LOCALE[lang]}" />`);
  tags.push(`<meta property="og:locale:alternate" content="${OG_LOCALE[lang === 'fr' ? 'en' : 'fr']}" />`);
  tags.push('<meta name="twitter:card" content="summary_large_image" />');
  tags.push(`<meta name="twitter:title" content="${esc(meta.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${esc(meta.description)}" />`);
  tags.push(`<meta name="twitter:image" content="${esc(ogImage)}" />`);

  const jsonLd = buildJsonLd(pathname);
  if (jsonLd) {
    // Escape "<" so the JSON can never close the <script> tag.
    const json = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }

  return tags.join('\n    ');
}
