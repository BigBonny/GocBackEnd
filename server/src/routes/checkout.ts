import { Router, Request, Response } from 'express';
import type { Router as ExpressRouter } from 'express';
import { stripe } from '../lib/stripe.js';
import { config } from '../config.js';
import { ROLE_PRICES, ROLE_NAMES } from '../constants.js';
import type { CheckoutRequest } from '../types.js';
import type { UserRole } from '../constants.js';

const router: ExpressRouter = Router();

router.post('/create-checkout', async (req: Request, res: Response): Promise<void> => {
  try {
    const { role, userId, email } = req.body as CheckoutRequest;

    if (!role || !userId || !email) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    if (!ROLE_PRICES[role as UserRole]) {
      res.status(400).json({ error: 'Invalid role' });
      return;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${ROLE_NAMES[role]} Access`,
              description: `One year access to ${ROLE_NAMES[role]} content`,
            },
            unit_amount: ROLE_PRICES[role],
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${config.clientUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.clientUrl}/devenir-membre`,
      customer_email: email,
      metadata: { userId, role },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Failed to create checkout session' 
    });
  }
});

export default router;