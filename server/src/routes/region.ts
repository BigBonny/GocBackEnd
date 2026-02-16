import { Router, Request, Response } from 'express';
import type { Router as ExpressRouter } from 'express';
import { getRegionFromIP, getIPFromRequest } from '../lib/geoip.js';
import { 
  MEMBERSHIP_PRICES, 
  FORMATION_PRICES, 
  REGION_NAMES, 
  calculateInitialCost,
  calculateRenewalCost 
} from '../constants.js';
import { supabase } from '../lib/supabase.js';

const router: ExpressRouter = Router();

router.get('/region', async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.query.userId as string | undefined;
    const ip = getIPFromRequest(req);
    const region = await getRegionFromIP(ip);

    // Check if user has already paid adhesion
    let adhesionPaid = false;
    if (userId) {
      const { data } = await supabase
        .from('users')
        .select('adhesion_paid')
        .eq('clerk_user_id', userId)
        .single();
      
      adhesionPaid = data?.adhesion_paid || false;
    }

    const pricing = MEMBERSHIP_PRICES[region];

    res.json({
      region,
      regionName: REGION_NAMES[region],
      adhesionPaid,
      prices: {
        adhesion: pricing.adhesion / 100,           // €50 or €30
        cotisation: pricing.cotisation / 100,       // €100 or €50
        initial: calculateInitialCost(region) / 100, // €150 or €80
        renewal: calculateRenewalCost(region) / 100, // €100 or €50
      },
      formation: {
        apprenti_trimestre: FORMATION_PRICES.apprenti_trimestre.price / 100, // €100
        auditeur_cours: FORMATION_PRICES.auditeur_cours.price / 100,         // €20
      },
    });
  } catch (error) {
    console.error('Region detection error:', error);
    res.status(500).json({ error: 'Failed to detect region' });
  }
});

export default router;