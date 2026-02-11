export type UserRole = 'auditeur' | 'apprenti' | 'frere-soeur';

export const ROLE_PRICES: Record<UserRole, number> = {
  'auditeur': 3000, // €30 in cents
  'apprenti': 4000, // €40 in cents
  'frere-soeur': 5000, // €50 in cents
};

export const ROLE_NAMES: Record<UserRole, string> = {
  'auditeur': 'Auditeur',
  'apprenti': 'Apprenti',
  'frere-soeur': 'Frère-Sœur',
};