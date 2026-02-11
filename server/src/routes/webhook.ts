import { Router, Request, Response } from 'express';
import type { Router as ExpressRouter } from 'express';
import { stripe } from '../lib/stripe.js';
import { supabase } from '../lib/supabase.js';
import { config } from '../config.js';
import type { Stripe as StripeType } from 'stripe';
import type { UserRole } from '../constants.js';
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
    const { userId, role } = session.metadata as { userId: string; role: UserRole };

    console.log(`Processing payment for user ${userId}, role: ${role}`);

    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    try {
      // Type the update properly
      const updateData: Database['public']['Tables']['users']['Update'] = {
        role,
        role_expires_at: expiresAt.toISOString(),
        updated_at: new Date().toISOString(),
      };

      const { error: userError } = await supabase
        .from('users')
        .update(updateData)
        .eq('clerk_user_id', userId);

      if (userError) {
        console.error('Error updating user role:', userError);
        res.status(500).json({ error: 'Failed to update user role' });
        return;
      }

      // Type the insert properly
      const paymentData: Database['public']['Tables']['payments']['Insert'] = {
        user_id: userId,
        stripe_payment_id: session.payment_intent as string,
        role,
        amount: session.amount_total!,
        currency: session.currency!,
        status: 'completed',
      };

      const { error: paymentError } = await supabase
        .from('payments')
        .insert(paymentData);

      if (paymentError) {
        console.error('Error recording payment:', paymentError);
      }

      console.log(`Successfully processed payment for user ${userId}`);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Database error occurred' });
      return;
    }
  }

  res.json({ received: true });
});

export default router;