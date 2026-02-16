export type UserRole = 'auditeur' | 'apprenti' | 'frere-soeur';
export type PurchaseType = 'initial' | 'renewal' | 'formation';
export type FormationType = 'apprenti_trimestre' | 'auditeur_cours';

export interface User {
  id: string;
  clerk_user_id: string;
  email: string;
  role: UserRole | null;
  role_expires_at: string | null;
  adhesion_paid: boolean;
  last_cotisation_date: string | null;
  formation_credits: number;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  stripe_payment_id: string;
  role: UserRole;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface Formation {
  id: string;
  user_id: string;
  formation_type: FormationType;
  amount: number;
  credits_added: number;
  stripe_payment_id: string;
  status: string;
  created_at: string;
}

export interface RoleConfig {
  price: number;
  name: string;
  description: string;
  features: string[];
}

export interface CheckoutRequest {
  role: UserRole;
  userId: string;
  email: string;
  purchaseType: PurchaseType;
  formationType?: FormationType;
}

export interface CheckoutResponse {
  url: string;
}

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  'auditeur': 1,
  'apprenti': 2,
  'frere-soeur': 3
};

export const ROLE_PRICES: Record<UserRole, RoleConfig> = {
  'auditeur': { 
    price: 0, // Will be calculated from region
    name: 'Apprenant Auditeur.trice', 
    description: 'Accès de base aux enseignements',
    features: [
      'Accès aux cours individuels (20€/cours)',
      'Total: 40 cours disponibles',
      'Accès au forum communautaire',
      'Support par email'
    ]
  },
  'apprenti': { 
    price: 0, // Will be calculated from region
    name: 'Membre Apprenti.e', 
    description: 'Formation complète',
    features: [
      'Formation par trimestre (100€/trimestre)',
      'Durée totale: 8 trimestres (2 ans)',
      'Accès au contenu avancé',
      'Support prioritaire',
      'Webinaires mensuels'
    ]
  },
  'frere-soeur': { 
    price: 0, // Will be calculated from region
    name: 'Membre Frère.Sœur', 
    description: 'Accès premium complet',
    features: [
      'Tous les contenus et formations',
      'Mentorat individuel',
      'Support prioritaire 24/7',
      'Événements exclusifs',
      'Réseau international'
    ]
  }
};