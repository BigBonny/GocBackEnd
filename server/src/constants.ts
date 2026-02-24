export type UserRole = 'auditeur' | 'apprenti' | 'frere-soeur';
export type PricingRegion = 'tier1' | 'tier3'; // tier1 = Europe/US, tier3 = Africa/LatAm
export type PurchaseType = 'initial' | 'renewal' | 'formation';
export type FormationType = 'apprenti_trimestre' | 'auditeur_cours';

// Country to region mapping
export const COUNTRY_TO_REGION: Record<string, PricingRegion> = {
  // Tier 1 - Europe, USA, Canada, Asia, Middle East
  FR: 'tier1', DE: 'tier1', GB: 'tier1', IT: 'tier1', ES: 'tier1',
  NL: 'tier1', BE: 'tier1', CH: 'tier1', AT: 'tier1', SE: 'tier1',
  NO: 'tier1', DK: 'tier1', FI: 'tier1', PT: 'tier1', IE: 'tier1',
  US: 'tier1', CA: 'tier1', 
  // Asia
  CN: 'tier1', IN: 'tier1', TH: 'tier1', MY: 'tier1', ID: 'tier1',
  PH: 'tier1', VN: 'tier1', PK: 'tier1', BD: 'tier1', LK: 'tier1',
  JP: 'tier1', SG: 'tier1', KR: 'tier1',
  // Middle East
  SA: 'tier1', AE: 'tier1', QA: 'tier1', KW: 'tier1', BH: 'tier1',
  OM: 'tier1', JO: 'tier1', LB: 'tier1', EG: 'tier1', MA: 'tier1',
  TR: 'tier1', IL: 'tier1',
  // Eastern Europe (treat as tier1)
  PL: 'tier1', CZ: 'tier1', HU: 'tier1', RO: 'tier1',
  BG: 'tier1', HR: 'tier1', RS: 'tier1', UA: 'tier1', GR: 'tier1',

  // Tier 3 - Africa & Latin America
  // Africa
  NG: 'tier3', GH: 'tier3', KE: 'tier3', ZA: 'tier3', TZ: 'tier3',
  ET: 'tier3', UG: 'tier3', CM: 'tier3', CI: 'tier3', SN: 'tier3',
  MG: 'tier3', MZ: 'tier3', AO: 'tier3', ZM: 'tier3', ZW: 'tier3',
  ML: 'tier3', BF: 'tier3', NE: 'tier3', TD: 'tier3', GN: 'tier3',
  // Latin America
  MX: 'tier3', AR: 'tier3', CL: 'tier3', CO: 'tier3', PE: 'tier3',
  BR: 'tier3', VE: 'tier3', EC: 'tier3', UY: 'tier3', BO: 'tier3',
  PY: 'tier3', GT: 'tier3', HN: 'tier3', SV: 'tier3', NI: 'tier3',
  CR: 'tier3', PA: 'tier3', DO: 'tier3', CU: 'tier3', HT: 'tier3',
};

export const REGION_NAMES: Record<PricingRegion, string> = {
  tier1: 'Europe – USA – Canada – Asie – Moyen-Orient',
  tier3: 'Zone Afrique – Amérique latine',
};

// Membership pricing (in cents)
export const MEMBERSHIP_PRICES: Record<PricingRegion, {
  adhesion: number;
  cotisation: number;
}> = {
  tier1: {
    adhesion: 5000,    // 50€
    cotisation: 10000, // 100€/an
  },
  tier3: {
    adhesion: 3000,    // 30€
    cotisation: 5000,  // 50€/an
  },
};

// Formation pricing (same for all regions per the document)
export const FORMATION_PRICES: Record<FormationType, {
  price: number;
  credits: number;
  name: string;
}> = {
  'apprenti_trimestre': {
    price: 10000,  // 100€
    credits: 1,    // 1 trimester
    name: 'Formation Apprenti (1 trimestre)',
  },
  'auditeur_cours': {
    price: 2000,   // 20€
    credits: 1,    // 1 course
    name: 'Formation Auditeur (1 cours)',
  },
};

export const ROLE_NAMES: Record<UserRole, string> = {
  'auditeur': 'Apprenant Auditeur.trice',
  'apprenti': 'Membre Apprenti.e',
  'frere-soeur': 'Membre Frère.Sœur',
};

// Helper function to calculate total initial cost
export function calculateInitialCost(region: PricingRegion): number {
  return MEMBERSHIP_PRICES[region].adhesion + MEMBERSHIP_PRICES[region].cotisation;
}

// Helper function to calculate renewal cost
export function calculateRenewalCost(region: PricingRegion): number {
  return MEMBERSHIP_PRICES[region].cotisation;
}

export type DonationType = 'sympathie' | 'soutien' | 'charite';
export type DonationFrequency = 'monthly' | 'quarterly' | 'annual';

export const DONATION_AMOUNTS: Record<DonationType, number> = {
  sympathie: 2500,  // 25€
  soutien: 5000,    // 50€
  charite: 10000,   // 100€
};

export const DONATION_NAMES: Record<DonationType, string> = {
  sympathie: 'Don de Sympathie',
  soutien: 'Don de Soutien',
  charite: 'Don de Charité',
};