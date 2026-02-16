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