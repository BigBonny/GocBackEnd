import { Router, Request, Response } from 'express';
import type { Router as ExpressRouter } from 'express';
import { stripe } from '../lib/stripe.js';
import { config } from '../config.js';
import { 
  MEMBERSHIP_PRICES, 
  FORMATION_PRICES, 
  ROLE_NAMES,
  calculateInitialCost,
  calculateRenewalCost
} from '../constants.js';
import { getRegionFromIP, getIPFromRequest } from '../lib/geoip.js';
import { supabase } from '../lib/supabase.js';
import type { CheckoutRequest } from '../types.js';
import type { UserRole } from '../constants.js';

const router: ExpressRouter = Router();

router.post('/create-checkout', async (req: Request, res: Response): Promise<void> => {
  try {
    const { role, userId, email, purchaseType, formationType } = req.body as CheckoutRequest;

    if (!role || !userId || !email || !purchaseType) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const ip = getIPFromRequest(req);
    const region = await getRegionFromIP(ip);

    let amount: number;
    let description: string;
    let productName: string;

    if (purchaseType === 'formation') {
      // Formation purchase
      if (!formationType) {
        res.status(400).json({ error: 'Formation type required for formation purchase' });
        return;
      }

      const formationInfo = FORMATION_PRICES[formationType];
      amount = formationInfo.price;
      productName = formationInfo.name;
      description = `Formation GOC - ${formationInfo.name}`;

    } else if (purchaseType === 'initial') {
      // Initial membership: Adhésion + Cotisation
      amount = calculateInitialCost(region);
      productName = `${ROLE_NAMES[role]} - Adhésion + Cotisation`;
      description = `Première année: Adhésion (${MEMBERSHIP_PRICES[region].adhesion / 100}€) + Cotisation (${MEMBERSHIP_PRICES[region].cotisation / 100}€)`;

    } else if (purchaseType === 'renewal') {
      // Annual renewal: Just Cotisation
      amount = calculateRenewalCost(region);
      productName = `${ROLE_NAMES[role]} - Renouvellement annuel`;
      description = `Cotisation annuelle: ${MEMBERSHIP_PRICES[region].cotisation / 100}€`;

    } else {
      res.status(400).json({ error: 'Invalid purchase type' });
      return;
    }

    console.log(`Checkout: user=${userId}, role=${role}, type=${purchaseType}, region=${region}, price=€${amount / 100}`);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: productName,
              description: description,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${config.clientUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.clientUrl}/devenir-membre`,
      customer_email: email,
      metadata: { 
        userId, 
        role, 
        region,
        purchaseType,
        formationType: formationType || '',
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to create checkout session',
    });
  }
});

export default router;