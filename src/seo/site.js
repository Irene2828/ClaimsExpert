/**
 * SINGLE SOURCE OF TRUTH for business facts (NAP = Name, Address, Phone).
 *
 * Every place that shows the business name, address, phone, email or hours
 * (header, footer, contact section, JSON-LD, meta tags) reads from here.
 * Google and AI assistants reward *identical* NAP everywhere — change it here only.
 *
 * Values below match what is already published on the current rguertin.ca site.
 * TODO (confirm with Isabelle): public email, street address, hours, ChAD credential wording.
 */

export const SITE_URL = 'https://rguertin.ca';

export const BUSINESS = {
  // One name everywhere (FR + EN). Do not translate it.
  name: 'R. Guertin & Associés',
  shortName: 'R. Guertin & Ass.',
  principal: 'Isabelle Guertin',
  founder: 'Roy Guertin',
  foundingDate: '2014',

  phoneDisplay: '438 794-1044',
  phoneE164: '+14387941044',
  phoneHref: 'tel:+14387941044',

  email: 'reclamations@rguertin.ca',

  address: {
    street: '4388, rue Saint-Denis',
    unit: 'bureau 200',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H2J 2L1',
    country: 'CA',
  },

  // Schema.org openingHoursSpecification
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },

  // Used in JSON-LD areaServed (names as people search them)
  areaServed: [
    { type: 'City', name: 'Montréal' },
    { type: 'City', name: 'Longueuil' },
    { type: 'City', name: 'Brossard' },
    { type: 'AdministrativeArea', name: 'Rive-Sud' },
    { type: 'AdministrativeArea', name: 'Grand Montréal' },
    { type: 'State', name: 'Québec' },
  ],

  image: '/isabelle-portrait-opt.webp',
  logo: '/favicon.svg',
};

/** "4388, rue Saint-Denis, bureau 200, Montréal (QC) H2J 2L1" */
export function formatAddressLine(a = BUSINESS.address) {
  return `${a.street}, ${a.unit}, ${a.city} (${a.region}) ${a.postalCode}`;
}
