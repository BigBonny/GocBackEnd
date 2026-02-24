import { Router, Request, Response } from 'express';
import type { Router as ExpressRouter } from 'express';
import { stripe } from '../lib/stripe.js';
import { supabase } from '../lib/supabase.js';
import { config } from '../config.js';
import { DONATION_NAMES } from '../constants.js';
import type { DonationRequest } from '../types.js';

const router: ExpressRouter = Router();

router.post('/create-donation-checkout', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      donationType,
      amount,
      userId,
      email,
      name,
      message,
      isRecurring,
      frequency,
      anonymous,
      allowMention,
    } = req.body as DonationRequest;

    console.log('Donation request:', { donationType, amount, email, isRecurring, frequency });

    if (!donationType || !amount || !email) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    if (amount < 100) { // Minimum 1€
      res.status(400).json({ error: 'Minimum donation amount is 1€' });
      return;
    }

    const donationName = DONATION_NAMES[donationType] || 'Don GOC';
    
    let sessionConfig: any = {
      payment_method_types: ['card'],
      customer_email: email,
      success_url: `${config.clientUrl}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.clientUrl}/donation/${donationType}`,
      metadata: {
        donationType,
        userId: userId || '',
        email,
        name: name || '',
        message: message || '',
        anonymous: anonymous ? 'true' : 'false',
        allowMention: allowMention ? 'true' : 'false',
      },
    };

    if (isRecurring && frequency) {
      // Create recurring donation (subscription)
      const interval = frequency === 'monthly' ? 'month' : 
                       frequency === 'quarterly' ? 'month' : 'year';
      const intervalCount = frequency === 'quarterly' ? 3 : 1;

      // Create or retrieve product
      const products = await stripe.products.list({ limit: 1 });
      let product = products.data.find(p => p.name === 'GOC Donations');
      
      if (!product) {
        product = await stripe.products.create({
          name: 'GOC Donations',
          description: 'Donations pour le Grand Ordre du Cercle',
        });
      }

      // Create price
      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: amount,
        currency: 'eur',
        recurring: {
          interval: interval as 'month' | 'year',
          interval_count: intervalCount,
        },
      });

      sessionConfig.mode = 'subscription';
      sessionConfig.line_items = [{
        price: price.id,
        quantity: 1,
      }];
    } else {
      // One-time donation
      sessionConfig.mode = 'payment';
      sessionConfig.line_items = [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: donationName,
            description: message || `${donationName} au Grand Ordre du Cercle`,
          },
          unit_amount: amount,
        },
        quantity: 1,
      }];
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({ url: session.url });
  } catch (error) {
    console.error('Donation checkout error:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to create donation checkout',
    });
  }
});

export default router;