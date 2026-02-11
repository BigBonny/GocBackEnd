import Stripe from 'stripe';
import { config } from '../config.js';

export const stripe = new Stripe(config.stripe.secretKey, {
  apiVersion: '2026-01-28.clover',
  typescript: true,
});

export type { Stripe };