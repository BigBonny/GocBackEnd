import { Router, Request, Response } from 'express';
import type { Router as ExpressRouter } from 'express';
import { stripe } from '../lib/stripe.js';
import { supabase } from '../lib/supabase.js';
import { config } from '../config.js';
import { FORMATION_PRICES } from '../constants.js';
import type { Stripe as StripeType } from 'stripe';
import type { UserRole, PricingRegion, PurchaseType, FormationType } from '../constants.js';
import type { Database } from '../database.types.js';

const router: ExpressRouter = Router();

router.post('/webhook', async (req: Request, res: Response): Promise<void> => {
  const sig = req.headers['stripe-signature'];

  if (!sig) {
    res.status(400).send('Missing signature');
    return;
  }

  let event: StripeType.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      config.stripe.webhookSecret
    );
  } catch (err) {
    const error = err as Error;
    console.error('Webhook signature verification failed:', error.message);
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as StripeType.Checkout.Session;
    
    // Check if this is a donation (has donationType in metadata)
    if (session.metadata && session.metadata.donationType) {
      console.log('Processing donation payment:', session.metadata.donationType);
      
      try {
        await handleDonationPayment(session);
        console.log('Donation recorded successfully');
      } catch (error) {
        console.error('Error processing donation:', error);
        res.status(500).json({ error: 'Failed to process donation' });
        return;
      }
    } else if (session.metadata && session.metadata.userId) {
      // Regular membership payment
      const metadata = session.metadata;
      const userId = metadata.userId;
      const role = metadata.role as UserRole;
      const purchaseType = metadata.purchaseType as PurchaseType;
      const formationType = metadata.formationType as FormationType | undefined;

      console.log(`Processing payment: user=${userId}, type=${purchaseType}, role=${role}`);

      try {
        if (purchaseType === 'formation' && formationType) {
          // Formation purchase
          await handleFormationPurchase(userId, formationType, session);
        } else if (purchaseType === 'initial') {
          // Initial membership
          await handleInitialMembership(userId, role, session);
        } else if (purchaseType === 'renewal') {
          // Annual renewal
          await handleRenewal(userId, role, session);
        }

        // Record payment in payments table
        const paymentData: Database['public']['Tables']['payments']['Insert'] = {
          user_id: userId,
          stripe_payment_id: (session.payment_intent as string) || 'unknown',
          role,
          amount: session.amount_total || 0,
          currency: session.currency || 'eur',
          status: 'completed',
        };

        await supabase.from('payments').insert(paymentData);

        console.log(`Successfully processed ${purchaseType} payment for user ${userId}`);
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error occurred' });
        return;
      }
    }
  }

  res.json({ received: true });
});

async function handleDonationPayment(session: StripeType.Checkout.Session) {
  if (!session.metadata) {
    throw new Error('Missing metadata in donation session');
  }

  const metadata = session.metadata;
  const email = metadata.email || session.customer_email || '';

  if (!email) {
    throw new Error('Missing email for donation');
  }

  const donationData: Database['public']['Tables']['donations']['Insert'] = {
    user_id: metadata.userId || null,
    donor_name: metadata.name || null,
    donor_email: email,
    donation_type: metadata.donationType as 'sympathie' | 'soutien' | 'charite',
    amount: session.amount_total || 0,
    currency: session.currency || 'eur',
    is_recurring: session.mode === 'subscription',
    frequency: session.mode === 'subscription' && metadata.frequency ? 
      (metadata.frequency as 'monthly' | 'quarterly' | 'annual') : null,
    stripe_payment_id: (session.payment_intent as string) || null,
    stripe_subscription_id: (session.subscription as string) || null,
    status: 'completed',
    message: metadata.message || null,
    anonymous: metadata.anonymous === 'true',
    allow_mention: metadata.allowMention === 'true',
  };

  const { error } = await supabase.from('donations').insert(donationData);

  if (error) {
    console.error('Error recording donation:', error);
    throw error;
  }
}

async function handleInitialMembership(
  userId: string, 
  role: UserRole, 
  session: StripeType.Checkout.Session
) {
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1); // 1 year from now

  const updateData: Database['public']['Tables']['users']['Update'] = {
    role,
    role_expires_at: expiresAt.toISOString(),
    adhesion_paid: true,
    last_cotisation_date: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from('users')
    .update(updateData)
    .eq('clerk_user_id', userId);

  if (error) {
    console.error('Error updating user for initial membership:', error);
    throw error;
  }
}

async function handleRenewal(
  userId: string, 
  role: UserRole, 
  session: StripeType.Checkout.Session
) {
  // Get current expiration date
  const { data: userData } = await supabase
    .from('users')
    .select('role_expires_at')
    .eq('clerk_user_id', userId)
    .single();

  // Extend from current expiration or from now
  let newExpiresAt = new Date();
  if (userData?.role_expires_at) {
    const currentExpiry = new Date(userData.role_expires_at);
    if (currentExpiry > new Date()) {
      // Still valid, extend from current expiry
      newExpiresAt = currentExpiry;
    }
  }
  newExpiresAt.setFullYear(newExpiresAt.getFullYear() + 1);

  const updateData: Database['public']['Tables']['users']['Update'] = {
    role,
    role_expires_at: newExpiresAt.toISOString(),
    last_cotisation_date: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from('users')
    .update(updateData)
    .eq('clerk_user_id', userId);

  if (error) {
    console.error('Error updating user for renewal:', error);
    throw error;
  }
}

async function handleFormationPurchase(
  userId: string,
  formationType: FormationType,
  session: StripeType.Checkout.Session
) {
  const formationInfo = FORMATION_PRICES[formationType];

  // Add credits to user
  const { data: userData } = await supabase
    .from('users')
    .select('formation_credits')
    .eq('clerk_user_id', userId)
    .single();

  const currentCredits = userData?.formation_credits || 0;
  const newCredits = currentCredits + formationInfo.credits;

  const { error: updateError } = await supabase
    .from('users')
    .update({ 
      formation_credits: newCredits,
      updated_at: new Date().toISOString(),
    })
    .eq('clerk_user_id', userId);

  if (updateError) {
    console.error('Error updating formation credits:', updateError);
    throw updateError;
  }

  // Record formation purchase
  const { error: insertError } = await supabase
    .from('formations')
    .insert({
      user_id: userId,
      formation_type: formationType,
      amount: session.amount_total || 0,
      credits_added: formationInfo.credits,
      stripe_payment_id: (session.payment_intent as string) || 'unknown',
      status: 'completed',
    });

  if (insertError) {
    console.error('Error recording formation purchase:', insertError);
    throw insertError;
  }
}

export default router;