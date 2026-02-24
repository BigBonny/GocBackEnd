import type { UserRole, PricingRegion, PurchaseType, FormationType } from './constants';

export interface CheckoutRequest {
  role: UserRole;
  userId: string;
  email: string;
  purchaseType: PurchaseType; // 'initial', 'renewal', or 'formation'
  formationType?: FormationType; // only for formation purchases
}

export interface StripeMetadata {
  userId: string;
  role: UserRole;
  region: PricingRegion;
  purchaseType: PurchaseType;
  formationType?: FormationType;
}

export interface DonationRequest {
  donationType: 'sympathie' | 'soutien' | 'charite';
  amount: number;
  userId?: string;
  email: string;
  name?: string;
  message?: string;
  isRecurring?: boolean;
  frequency?: 'monthly' | 'quarterly' | 'annual';
  anonymous?: boolean;
  allowMention?: boolean;
}

export interface DonationMetadata {
  donationType: string;
  userId?: string;
  email: string;
  name?: string;
  message?: string;
  anonymous?: string;
  allowMention?: string;
}