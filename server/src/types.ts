import type { UserRole } from './constants';

export interface StripeMetadata {
  userId: string;
  role: UserRole;
}

export interface CheckoutRequest {
  role: UserRole;
  userId: string;
  email: string;
}