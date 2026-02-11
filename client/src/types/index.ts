export type UserRole = 'auditeur' | 'apprenti' | 'frere-soeur';

export interface User {
  id: string;
  clerk_user_id: string;
  email: string;
  role: UserRole | null;
  role_expires_at: string | null;
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
    price: 30, 
    name: 'Auditeur', 
    description: 'Basic access level',
    features: [
      'Access to basic content',
      'Community forum access',
      'Email support'
    ]
  },
  'apprenti': { 
    price: 40, 
    name: 'Apprenti', 
    description: 'Advanced access level',
    features: [
      'All Auditeur features',
      'Access to advanced content',
      'Priority support',
      'Monthly webinars'
    ]
  },
  'frere-soeur': { 
    price: 50, 
    name: 'Frère-Soeur', 
    description: 'Premium access level',
    features: [
      'All Apprenti features',
      'Access to premium content',
      'One-on-one mentorship',
      '24/7 priority support',
      'Exclusive events'
    ]
  }
};